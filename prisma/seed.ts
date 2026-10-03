import "dotenv/config";
import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

/* -------------------------------------------------------------------------- */
/* SERVICES                                                                   */
/* -------------------------------------------------------------------------- */

const services = [
    {
        title: "Management Consulting",
        slug: "management-consulting",
        description:
            "Advisory support focused on institutional, operational and management challenges, translating requirements into practical actions and delivery priorities.",
        icon: "briefcase",
        order: 0,
        published: true,
    },
    {
        title: "Digital Transformation",
        slug: "digital-transformation",
        description:
            "Helping organizations redesign services, processes and operating models through purposeful use of digital technologies.",
        icon: "refresh",
        order: 1,
        published: true,
    },
    {
        title: "Systems Development",
        slug: "systems-development",
        description:
            "Designing and developing fit-for-purpose information systems, web platforms and enterprise applications.",
        icon: "code",
        order: 2,
        published: true,
    },
    {
        title: "ICT Advisory",
        slug: "ict-advisory",
        description:
            "Independent advice on ICT strategy, needs assessment, architecture, infrastructure, systems and technology investment.",
        icon: "consulting",
        order: 3,
        published: true,
    },
    {
        title: "Quality Assurance & Security",
        slug: "quality-assurance-security",
        description:
            "Quality assurance, security assessment and controls designed to improve the reliability, resilience and trustworthiness of digital systems.",
        icon: "shield",
        order: 4,
        published: true,
    },
    {
        title: "Capacity Building",
        slug: "capacity-building",
        description:
            "Structured training, knowledge transfer and institutional capability development to support adoption and sustainable use.",
        icon: "academic",
        order: 5,
        published: true,
    },
    {
        title: "Programme Delivery",
        slug: "programme-delivery",
        description:
            "Practical implementation support across complex technology, institutional development and digital transformation programmes.",
        icon: "layers",
        order: 6,
        published: true,
    },
    {
        title: "ICT Infrastructure & Integration",
        slug: "ict-infrastructure-integration",
        description:
            "Infrastructure, connectivity and technology integration capabilities supporting dependable digital environments.",
        icon: "network",
        order: 7,
        published: true,
    },
];

/* -------------------------------------------------------------------------- */
/* SECTORS                                                                    */
/* -------------------------------------------------------------------------- */

const sectors = [
    {
        name: "Government & Public Institutions",
        slug: "government-public-institutions",
        description:
            "Public institutions operate in environments where policy, processes, people, systems and accountability must work together. WilCom supports institutions to understand operational challenges, assess existing systems and translate requirements into practical improvements.",
        capabilities: [
            "Institutional and ICT needs assessment",
            "Business and process analysis",
            "Digital transformation and systems development",
            "Systems integration and information management",
            "Quality assurance, security and controls",
            "Capacity building and knowledge transfer",
        ],
        order: 0,
        published: true,
    },
    {
        name: "Education & TVET",
        slug: "education-tvet",
        description:
            "Education and training institutions require systems that connect institutional processes, learning delivery, assessment, information management and decision-making. WilCom combines consulting, technology and capacity building to support sustainable digital transformation.",
        capabilities: [
            "Digital transformation assessment",
            "Learning and management information systems",
            "ODeL and digital learning support",
            "Requirements analysis and systems development",
            "Trainer and staff capacity building",
            "Implementation support and knowledge transfer",
        ],
        order: 1,
        published: true,
    },
    {
        name: "Regulatory & Oversight Institutions",
        slug: "regulatory-oversight-institutions",
        description:
            "Regulatory and oversight organizations depend on reliable information, controlled processes, secure systems and auditable operations. WilCom supports these institutions through assessment, systems improvement, quality assurance and technology-enabled process transformation.",
        capabilities: [
            "Process and systems assessment",
            "Information and records management",
            "Case and workflow management systems",
            "Quality assurance and security assessment",
            "Access controls and audit trails",
            "Systems integration and improvement",
        ],
        order: 2,
        published: true,
    },
    {
        name: "Development Programmes & NGOs",
        slug: "development-programmes-ngos",
        description:
            "Development programmes require solutions that connect programme objectives with implementation realities. WilCom supports organizations to assess needs, design fit-for-purpose interventions, strengthen institutional capability and improve the systems that enable programme delivery.",
        capabilities: [
            "Programme and institutional assessment",
            "Digital transformation advisory",
            "Monitoring and information systems",
            "Capacity building and knowledge transfer",
            "Implementation and programme support",
            "Quality assurance and sustainability planning",
        ],
        order: 3,
        published: true,
    },
    {
        name: "Financial Services",
        slug: "financial-services",
        description:
            "Financial institutions require dependable processes, secure information systems and technology that supports operational efficiency. WilCom brings together ICT advisory, systems development, integration and security-focused thinking to address business and technology requirements.",
        capabilities: [
            "ICT advisory and technology assessment",
            "Business process analysis",
            "Systems development and integration",
            "Information security and controls",
            "Quality assurance",
            "Implementation and support",
        ],
        order: 4,
        published: true,
    },
    {
        name: "Retail & Commercial Organizations",
        slug: "retail-commercial-organizations",
        description:
            "Commercial organizations need technology that improves the way people, processes and information work together. WilCom helps organizations assess operational requirements and develop practical systems that support efficiency, visibility and service delivery.",
        capabilities: [
            "Business and ICT needs assessment",
            "Process digitization",
            "Systems development and integration",
            "Information management",
            "ICT infrastructure advisory",
            "User training and knowledge transfer",
        ],
        order: 5,
        published: true,
    },
    {
        name: "Hospitality & Service Organizations",
        slug: "hospitality-service-organizations",
        description:
            "Service organizations depend on coordinated processes, timely information and systems that support both staff and customers. WilCom applies consulting and technology capabilities to improve operational processes and strengthen digital service delivery.",
        capabilities: [
            "Operational assessment",
            "Process improvement",
            "Systems development and integration",
            "Digital service solutions",
            "Information management",
            "Training and implementation support",
        ],
        order: 6,
        published: true,
    },
    {
        name: "Industry, Manufacturing & Logistics",
        slug: "industry-manufacturing-logistics",
        description:
            "Industrial and logistics environments require dependable information flows, coordinated processes and technology that supports operations. WilCom helps organizations assess their environment, define requirements and implement practical technology-enabled improvements.",
        capabilities: [
            "ICT and infrastructure assessment",
            "Systems and process analysis",
            "Enterprise systems development",
            "Network and technology integration",
            "Security and quality assurance",
            "Implementation and support",
        ],
        order: 7,
        published: true,
    },
];

/* -------------------------------------------------------------------------- */
/* PROJECTS                                                                   */
/* -------------------------------------------------------------------------- */

const projects = [
    {
        ref: "P-001",
        title: "TVET Institution Digital Transformation Assessment",
        slug: "tvet-institution-digital-transformation-assessment",
        client: "National TVET Institution",
        sector: "Education & TVET",
        engagement: "Assessment & Advisory",
        summary:
            "Institutional assessment covering processes, systems, data and staff capability, producing a digital transformation roadmap and prioritised implementation plan for the institution.",
        services: [
            "Management Consulting",
            "Digital Transformation",
            "Capacity Building",
        ],
        order: 0,
        published: true,
    },
    {
        ref: "P-002",
        title: "Regulatory Case Management System Development",
        slug: "regulatory-case-management-system-development",
        client: "Regulatory Authority",
        sector: "Regulatory & Oversight Institutions",
        engagement: "Systems Development",
        summary:
            "Design and development of a case management platform with workflow, audit trails, access controls and management reporting to support regulatory oversight operations.",
        services: [
            "Systems Development",
            "Quality Assurance & Security",
            "ICT Advisory",
        ],
        order: 1,
        published: true,
    },
    {
        ref: "P-003",
        title: "Public Institution Process Digitisation",
        slug: "public-institution-process-digitisation",
        client: "Government Department",
        sector: "Government & Public Institutions",
        engagement: "Digital Transformation",
        summary:
            "Digitisation of core administrative processes, replacing manual workflows with controlled digital processes and integrated information management to improve service delivery and accountability.",
        services: [
            "Digital Transformation",
            "Systems Development",
            "ICT Infrastructure & Integration",
        ],
        order: 2,
        published: true,
    },
    {
        ref: "P-004",
        title: "Development Programme Monitoring System",
        slug: "development-programme-monitoring-system",
        client: "International Development Programme",
        sector: "Development Programmes & NGOs",
        engagement: "Programme Delivery",
        summary:
            "Design and implementation of a monitoring and information system connecting programme teams, field activities and reporting requirements across multiple implementation partners.",
        services: [
            "Programme Delivery",
            "Systems Development",
            "Capacity Building",
        ],
        order: 3,
        published: true,
    },
    {
        ref: "P-005",
        title: "Financial Institution ICT & Security Assessment",
        slug: "financial-institution-ict-security-assessment",
        client: "Financial Services Provider",
        sector: "Financial Services",
        engagement: "Assessment & Advisory",
        summary:
            "Independent assessment of ICT environment, information systems, security controls and operational processes, delivering prioritised recommendations for improvement and investment.",
        services: [
            "ICT Advisory",
            "Quality Assurance & Security",
            "Management Consulting",
        ],
        order: 4,
        published: true,
    },
];

/* -------------------------------------------------------------------------- */
/* MAIN                                                                       */
/* -------------------------------------------------------------------------- */

async function main() {
    // Services
    for (const service of services) {
        await prisma.service.upsert({
            where: { slug: service.slug },
            update: service,
            create: service,
        });
    }

    // Sectors
    for (const sector of sectors) {
        await prisma.sector.upsert({
            where: { slug: sector.slug },
            update: sector,
            create: sector,
        });
    }

    // Projects
    for (const project of projects) {
        await prisma.project.upsert({
            where: { slug: project.slug },
            update: project,
            create: project,
        });
    }

    console.log(
        `Seeded ${services.length} services, ${sectors.length} sectors, ${projects.length} projects`,
    );
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });