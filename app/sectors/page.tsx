import type { Metadata } from "next";

import { prisma } from "@/lib/prisma";
import SectorsClient, { type SectorView } from "./sectors-client";

export const metadata: Metadata = {
    title: "Sectors We Serve",
    description:
        "WilCom Systems supports public institutions, development organizations and private-sector organizations through consulting, assessment, digital transformation, systems development, capacity building and technology-enabled service delivery.",
    alternates: {
        canonical: "https://wilcom.co.ke/sectors",
    },
    openGraph: {
        title: "Sectors We Serve | WilCom Systems Limited",
        description:
            "Consulting, assessment, technology and delivery support for organizations seeking stronger systems, better processes and sustainable service delivery.",
        url: "https://wilcom.co.ke/sectors",
    },
};

export const revalidate = 300;

export default async function SectorsPage() {
    const sectors = await prisma.sector.findMany({
        where: { published: true },
        orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });

    const sectorsView: SectorView[] = sectors.map((s) => ({
        id: s.id,
        slug: s.slug,
        name: s.name,
        icon: s.icon ?? "",
        description: s.description,
        problems: s.problems ?? [],
        capabilities: s.capabilities ?? [],
    }));

    return <SectorsClient sectors={sectorsView} />;
}