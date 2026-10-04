import type { Metadata } from "next";

import { prisma } from "@/lib/prisma";
import ExperienceClient, { type ProjectView } from "./experience-client";

export const metadata: Metadata = {
    title: "Experience",
    description:
        "WilCom Systems' project experience spans consulting, assessment, digital transformation, systems development, quality assurance, capacity building and programme delivery across public institutions and development environments.",
    alternates: {
        canonical: "https://wilcom.co.ke/experience",
    },
    openGraph: {
        title: "Experience | WilCom Systems Limited",
        description:
            "Selected assignments demonstrating how WilCom combines consulting insight, technology and delivery capability to address institutional and operational challenges.",
        url: "https://wilcom.co.ke/experience",
    },
};

export const revalidate = 300; // ISR — refresh at most every 5 minutes

export default async function ExperiencePage() {
    const [projects, services] = await Promise.all([
        prisma.project.findMany({
            where: { published: true },
            orderBy: [{ order: "asc" }, { createdAt: "asc" }],
        }),
        prisma.service.findMany({
            where: { published: true },
            orderBy: [{ order: "asc" }, { createdAt: "asc" }],
            select: { title: true },
        }),
    ]);

    const projectViews: ProjectView[] = projects.map((p) => ({
        id: p.id,
        ref: p.ref,
        slug: p.slug,
        title: p.title,
        client: p.client,
        sector: p.sector,
        engagement: p.engagement,
        summary: p.summary,
        services: p.services ?? [],
    }));

    const serviceTitles = services.map((s) => s.title);

    return (
        <ExperienceClient projects={projectViews} serviceTitles={serviceTitles} />
    );
}