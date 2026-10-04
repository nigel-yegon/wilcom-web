"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { requireAdmin, slugify } from "@/lib/auth-guard";

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

const serviceInputSchema = z.object({
    title: z.string().trim().min(1, "Title is required").max(120),
    description: z.string().trim().min(1, "Description is required").max(2000),
    icon: z.string().trim().max(80).nullable().optional(),

    link: z
        .union([z.string().trim().url("Must be a valid URL"), z.literal("")])
        .nullable()
        .optional(),

    // One activity per line in the editor; max 40 items
    activities: z.array(z.string().trim().min(1)).max(40).default([]),

    published: z.boolean().default(true),
    order: z.number().int().min(0).optional(),
});

/* -------------------------------------------------------------------------- */
/* Queries                                                                    */
/* -------------------------------------------------------------------------- */

export async function listServices() {
    await requireAdmin();
    return prisma.service.findMany({
        orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });
}

/* -------------------------------------------------------------------------- */
/* Mutations                                                                  */
/* -------------------------------------------------------------------------- */

export async function createService(input: z.input<typeof serviceInputSchema>) {
    await requireAdmin();
    const data = serviceInputSchema.parse(input);

    const base = slugify(data.title);
    let slug = base;
    let n = 1;
    while (await prisma.service.findUnique({ where: { slug } })) {
        slug = `${base}-${n++}`;
    }

    const last = await prisma.service.findFirst({
        orderBy: { order: "desc" },
        select: { order: true },
    });

    const created = await prisma.service.create({
        data: {
            title: data.title,
            slug,
            description: data.description,
            icon: data.icon ?? null,
            link: data.link ? data.link : null,
            activities: data.activities ?? [],
            published: data.published ?? true,
            order: data.order ?? (last?.order ?? -1) + 1,
        },
    });

    revalidatePath("/dashboard");
    revalidatePath("/services");
    revalidatePath(`/services/${created.slug}`);

    return created;
}

export async function updateService(
    id: string,
    input: z.input<typeof serviceInputSchema>,
) {
    await requireAdmin();
    const data = serviceInputSchema.parse(input);

    const existing = await prisma.service.findUnique({ where: { id } });
    if (!existing) throw new Error("Service not found");

    let slug = existing.slug;
    if (existing.title !== data.title) {
        const base = slugify(data.title);
        slug = base;
        let n = 1;
        while (true) {
            const conflict = await prisma.service.findUnique({ where: { slug } });
            if (!conflict || conflict.id === id) break;
            slug = `${base}-${n++}`;
        }
    }

    const updated = await prisma.service.update({
        where: { id },
        data: {
            title: data.title,
            slug,
            description: data.description,
            icon: data.icon ?? null,
            link: data.link ? data.link : null,
            activities: data.activities ?? [],
            published: data.published ?? true,
            ...(data.order !== undefined ? { order: data.order } : {}),
        },
    });

    revalidatePath("/dashboard");
    revalidatePath("/services");
    revalidatePath(`/services/${existing.slug}`);
    if (slug !== existing.slug) {
        revalidatePath(`/services/${slug}`);
    }

    return updated;
}

export async function deleteService(id: string) {
    await requireAdmin();

    const existing = await prisma.service.findUnique({
        where: { id },
        select: { slug: true },
    });

    await prisma.service.delete({ where: { id } });

    revalidatePath("/dashboard");
    revalidatePath("/services");
    if (existing?.slug) {
        revalidatePath(`/services/${existing.slug}`);
    }

    return { ok: true };
}