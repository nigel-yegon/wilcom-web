"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { requireAdmin, slugify } from "@/lib/auth-guard";

const projectInputSchema = z.object({
    ref: z.string().trim().min(1, "Reference is required").max(40),
    title: z.string().trim().min(1, "Title is required").max(200),
    client: z.string().trim().min(1, "Client is required").max(160),
    sector: z.string().trim().min(1, "Sector is required").max(120),
    engagement: z.string().trim().min(1, "Engagement is required").max(120),
    summary: z.string().trim().min(1, "Summary is required").max(4000),
    services: z.array(z.string().trim().min(1)).default([]),
    published: z.boolean().default(true),
    order: z.number().int().min(0).optional(),
});

export async function listProjects() {
    await requireAdmin();
    return prisma.project.findMany({
        orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });
}

export async function createProject(input: z.input<typeof projectInputSchema>) {
    await requireAdmin();
    const data = projectInputSchema.parse(input);

    const base = slugify(data.title);
    let slug = base;
    let n = 1;
    while (await prisma.project.findUnique({ where: { slug } })) {
        slug = `${base}-${n++}`;
    }

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
            services: data.services ?? [],
            published: data.published ?? true,
            order: data.order ?? (last?.order ?? -1) + 1,
        },
    });

    revalidatePath("/dashboard");
    revalidatePath("/experience");
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
            services: data.services ?? [],
            published: data.published ?? true,
            ...(data.order !== undefined ? { order: data.order } : {}),
        },
    });

    revalidatePath("/dashboard");
    revalidatePath("/experience");
    return updated;
}

export async function deleteProject(id: string) {
    await requireAdmin();
    await prisma.project.delete({ where: { id } });
    revalidatePath("/dashboard");
    revalidatePath("/experience");
    return { ok: true };
}