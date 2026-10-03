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

/**
 * Icons are not stored in the DB (they're a small, curated set).
 * This map translates a sector's slug or name into a presentation icon.
 * Add to this map whenever you add a new sector in the dashboard.
 */
const SECTOR_ICONS: Record<string, string> = {
    "government-public-institutions": "🏛️",
    "education-tvet": "🎓",
    "regulatory-oversight-institutions": "⚖️",
    "development-programmes-ngos": "🌍",
    "financial-services": "🏦",
    "retail-commercial-organizations": "🛒",
    "hospitality-service-organizations": "🏨",
    "industry-manufacturing-logistics": "🏭",
};

const FALLBACK_ICON = "🏢";

/**
 * Rich narrative content per sector (challenges + capabilities + long description).
 * The DB stores a short `description` and a `capabilities` array, but not the
 * "problems" list or the long-form paragraph, because those are editorial.
 * Keep this map keyed by slug so it stays in sync with the dashboard.
 */
const SECTOR_DETAILS: Record<
    string,
    { description: string; problems: string[] }
> = {
    "government-public-institutions": {
        description:
            "Public institutions operate in environments where policy, processes, people, systems and accountability must work together. WilCom supports institutions to understand operational challenges, assess existing systems and translate requirements into practical improvements.",
        problems: [
            "Fragmented or inefficient institutional processes",
            "Manual workflows and disconnected information systems",
            "Weak visibility across operations and service delivery",
            "Legacy systems that no longer support organizational needs",
            "Requirements for stronger governance, controls and accountability",
        ],
    },
    "education-tvet": {
        description:
            "Education and training institutions require systems that connect institutional processes, learning delivery, assessment, information management and decision-making. WilCom combines consulting, technology and capacity building to support sustainable digital transformation.",
        problems: [
            "Growing demand for digital learning and assessment",
            "Disconnected institutional information",
            "Limited visibility of operational and performance data",
            "Need for stronger digital skills among staff and trainers",
            "Systems that require modernization or better integration",
        ],
    },
    "regulatory-oversight-institutions": {
        description:
            "Regulatory and oversight organizations depend on reliable information, controlled processes, secure systems and auditable operations. WilCom supports these institutions through assessment, systems improvement, quality assurance and technology-enabled process transformation.",
        problems: [
            "Complex regulatory and administrative workflows",
            "Information spread across disconnected systems",
            "Requirements for auditability and traceability",
            "Security and access-control concerns",
            "Need for reliable information for oversight and decision-making",
        ],
    },
    "development-programmes-ngos": {
        description:
            "Development programmes require solutions that connect programme objectives with implementation realities. WilCom supports organizations to assess needs, design fit-for-purpose interventions, strengthen institutional capability and improve the systems that enable programme delivery.",
        problems: [
            "Translating programme objectives into practical delivery systems",
            "Weak information flows between programme teams and stakeholders",
            "Capacity gaps affecting implementation",
            "Reporting and monitoring requirements",
            "Need for sustainable solutions beyond the initial intervention",
        ],
    },
    "financial-services": {
        description:
            "Financial institutions require dependable processes, secure information systems and technology that supports operational efficiency. WilCom brings together ICT advisory, systems development, integration and security-focused thinking to address business and technology requirements.",
        problems: [
            "Operational processes requiring automation",
            "Disconnected systems and information flows",
            "Security and control requirements",
            "Need for reliable management information",
            "Technology investments that must translate into operational value",
        ],
    },
    "retail-commercial-organizations": {
        description:
            "Commercial organizations need technology that improves the way people, processes and information work together. WilCom helps organizations assess operational requirements and develop practical systems that support efficiency, visibility and service delivery.",
        problems: [
            "Manual and inefficient business processes",
            "Limited visibility across operations",
            "Disconnected applications and data",
            "Need for improved reporting and decision support",
            "Technology that does not adequately reflect business processes",
        ],
    },
    "hospitality-service-organizations": {
        description:
            "Service organizations depend on coordinated processes, timely information and systems that support both staff and customers. WilCom applies consulting and technology capabilities to improve operational processes and strengthen digital service delivery.",
        problems: [
            "Disconnected operational processes",
            "Manual information handling",
            "Limited management visibility",
            "Need for integrated operational systems",
            "Challenges translating technology into better service delivery",
        ],
    },
    "industry-manufacturing-logistics": {
        description:
            "Industrial and logistics environments require dependable information flows, coordinated processes and technology that supports operations. WilCom helps organizations assess their environment, define requirements and implement practical technology-enabled improvements.",
        problems: [
            "Operational information gaps",
            "Disconnected systems and processes",
            "Infrastructure and connectivity requirements",
            "Limited visibility across operational activities",
            "Need for scalable and maintainable technology solutions",
        ],
    },
};

export const revalidate = 300; // rebuild at most every 5 min (ISR)

export default async function SectorsPage() {
    const sectors = await prisma.sector.findMany({
        where: { published: true },
        orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });

    // Merge DB records with the editorial content map.
    const sectorsView: SectorView[] = sectors.map((s) => {
        const details = SECTOR_DETAILS[s.slug];

        return {
            id: s.id,
            slug: s.slug,
            name: s.name,
            icon: SECTOR_ICONS[s.slug] ?? FALLBACK_ICON,
            // Prefer the DB description; fall back to the editorial one if blank.
            description: s.description || details?.description || "",
            problems: details?.problems ?? [],
            capabilities: s.capabilities ?? [],
        };
    });

    return <SectorsClient sectors={sectorsView} />;
}