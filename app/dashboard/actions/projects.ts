"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { requireAdmin, slugify } from "@/lib/auth-guard";

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

const projectInputSchema = z.object({
    // Identity
    ref: z.string().trim().min(1, "Reference is required").max(40),
    title: z.string().trim().min(1, "Title is required").max(200),

    // Core metadata
    client: z.string().trim().min(1, "Client is required").max(160),
    sector: z.string().trim().min(1, "Sector is required").max(120),
    engagement: z.string().trim().min(1, "Engagement is required").max(120),
    summary: z.string().trim().min(1, "Summary is required").max(4000),

    // Detail-page content
    context: z.string().trim().max(6000).default(""),
    challenge: z.string().trim().max(6000).default(""),
    engagementDetail: z.string().trim().max(6000).default(""),

    // Lists
    services: z.array(z.string().trim().min(1)).max(20).default([]),
    deliveryFocus: z.array(z.string().trim().min(1)).max(30).default([]),

    // External link (optional)
    onlineUrl: z
        .union([z.string().trim().url("Must be a valid URL"), z.literal("")])
        .nullable()
        .optional(),
    onlineLabel: z.string().trim().max(80).nullable().optional(),

    // Publication
    published: z.boolean().default(true),
    order: z.number().int().min(0).optional(),
});

/* -------------------------------------------------------------------------- */
/* Queries                                                                    */
/* -------------------------------------------------------------------------- */

export async function listProjects() {
    await requireAdmin();

    return prisma.project.findMany({
        orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });
}

/* -------------------------------------------------------------------------- */
/* Mutations                                                                  */
/* -------------------------------------------------------------------------- */

export async function createProject(input: z.input<typeof projectInputSchema>) {
    await requireAdmin();
    const data = projectInputSchema.parse(input);

    // Ensure unique slug
    const base = slugify(data.title);
    let slug = base;
    let n = 1;
    while (await prisma.project.findUnique({ where: { slug } })) {
        slug = `${base}-${n++}`;
    }

    // Assign next order if not provided
    const last = await prisma.project.findFirst({
        orderBy: { order: "desc" },
        select: { order: true },
    });

    const created = await prisma.project.create({
        data: {
            ref: data.ref,
            title: data.title,
            slug,
            client: data.client,
            sector: data.sector,
            engagement: data.engagement,
            summary: data.summary,

            context: data.context ?? "",
            challenge: data.challenge ?? "",
            engagementDetail: data.engagementDetail ?? "",

            services: data.services ?? [],
            deliveryFocus: data.deliveryFocus ?? [],

            onlineUrl: data.onlineUrl ? data.onlineUrl : null,
            onlineLabel: data.onlineLabel ? data.onlineLabel : null,

            published: data.published ?? true,
            order: data.order ?? (last?.order ?? -1) + 1,
        },
    });

    revalidatePath("/dashboard");
    revalidatePath("/experience");
    revalidatePath(`/experience/${created.slug}`);

    return created;
}

export async function updateProject(
    id: string,
    input: z.input<typeof projectInputSchema>,
) {
    await requireAdmin();
    const data = projectInputSchema.parse(input);

    const existing = await prisma.project.findUnique({ where: { id } });
    if (!existing) throw new Error("Project not found");

    // Re-slug if the title changed
    let slug = existing.slug;
    if (existing.title !== data.title) {
        const base = slugify(data.title);
        slug = base;
        let n = 1;
        while (true) {
            const conflict = await prisma.project.findUnique({ where: { slug } });
            if (!conflict || conflict.id === id) break;
            slug = `${base}-${n++}`;
        }
    }

    const updated = await prisma.project.update({
        where: { id },
        data: {
            ref: data.ref,
            title: data.title,
            slug,
            client: data.client,
            sector: data.sector,
            engagement: data.engagement,
            summary: data.summary,

            context: data.context ?? "",
            challenge: data.challenge ?? "",
            engagementDetail: data.engagementDetail ?? "",

            services: data.services ?? [],
            deliveryFocus: data.deliveryFocus ?? [],

            onlineUrl: data.onlineUrl ? data.onlineUrl : null,
            onlineLabel: data.onlineLabel ? data.onlineLabel : null,

            published: data.published ?? true,
            ...(data.order !== undefined ? { order: data.order } : {}),
        },
    });

    revalidatePath("/dashboard");
    revalidatePath("/experience");
    revalidatePath(`/experience/${existing.slug}`); // old slug
    if (slug !== existing.slug) {
        revalidatePath(`/experience/${slug}`); // new slug
    }

    return updated;
}

export async function deleteProject(id: string) {
    await requireAdmin();

    const existing = await prisma.project.findUnique({
        where: { id },
        select: { slug: true },
    });

    await prisma.project.delete({ where: { id } });

    revalidatePath("/dashboard");
    revalidatePath("/experience");
    if (existing?.slug) {
        revalidatePath(`/experience/${existing.slug}`);
    }

    return { ok: true };
}