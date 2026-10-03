"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { requireAdmin, slugify } from "@/lib/auth-guard";

const sectorInputSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(120),
    description: z.string().trim().max(2000).default(""),
    capabilities: z.array(z.string().trim().min(1)).default([]),
    published: z.boolean().default(true),
    order: z.number().int().min(0).optional(),
});

export async function listSectors() {
    await requireAdmin();
    return prisma.sector.findMany({
        orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });
}

export async function createSector(input: z.input<typeof sectorInputSchema>) {
    await requireAdmin();
    const data = sectorInputSchema.parse(input);

    const base = slugify(data.name);
    let slug = base;
    let n = 1;
    while (await prisma.sector.findUnique({ where: { slug } })) {
        slug = `${base}-${n++}`;
    }

    const last = await prisma.sector.findFirst({
        orderBy: { order: "desc" },
        select: { order: true },
    });

    const created = await prisma.sector.create({
        data: {
            name: data.name,
            slug,
            description: data.description ?? "",
            capabilities: data.capabilities ?? [],
            published: data.published ?? true,
            order: data.order ?? (last?.order ?? -1) + 1,
        },
    });

    revalidatePath("/dashboard");
    revalidatePath("/sectors");
    return created;
}

export async function updateSector(
    id: string,
    input: z.input<typeof sectorInputSchema>,
) {
    await requireAdmin();
    const data = sectorInputSchema.parse(input);

    const existing = await prisma.sector.findUnique({ where: { id } });
    if (!existing) throw new Error("Sector not found");

    let slug = existing.slug;
    if (existing.name !== data.name) {
        const base = slugify(data.name);
        slug = base;
        let n = 1;
        while (true) {
            const conflict = await prisma.sector.findUnique({ where: { slug } });
            if (!conflict || conflict.id === id) break;
            slug = `${base}-${n++}`;
        }
    }

    const updated = await prisma.sector.update({
        where: { id },
        data: {
            name: data.name,
            slug,
            description: data.description ?? "",
            capabilities: data.capabilities ?? [],
            published: data.published ?? true,
            ...(data.order !== undefined ? { order: data.order } : {}),
        },
    });

    revalidatePath("/dashboard");
    revalidatePath("/sectors");
    return updated;
}

export async function deleteSector(id: string) {
    await requireAdmin();
    await prisma.sector.delete({ where: { id } });
    revalidatePath("/dashboard");
    revalidatePath("/sectors");
    return { ok: true };
}