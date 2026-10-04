import type { Metadata } from "next";

import { prisma } from "@/lib/prisma";
import ServicesClient, { type ServiceView } from "./services-client";

export const metadata: Metadata = {
    title: "Services | WilCom Systems Limited",
    description:
        "Development and management consulting, digital transformation, systems development, ICT advisory, quality assurance, cybersecurity, capacity building and programme delivery.",
    alternates: {
        canonical: "https://wilcom.co.ke/services",
    },
    openGraph: {
        title: "Services | WilCom Systems Limited",
        description:
            "Integrated consulting, technology and delivery capabilities for public institutions, development programmes and organizations.",
        url: "https://wilcom.co.ke/services",
        siteName: "WilCom Systems Limited",
        type: "website",
    },
};

export const revalidate = 300;

export default async function ServicesPage() {
    const services = await prisma.service.findMany({
        where: { published: true },
        orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });

    const serviceViews: ServiceView[] = services.map((s, index) => ({
        id: s.id,
        slug: s.slug,
        number: String(index + 1).padStart(2, "0"),
        title: s.title,
        summary: s.description,
        items: s.activities ?? [],
        icon: s.icon,
        link: s.link,
    }));

    return <ServicesClient services={serviceViews} />;
}