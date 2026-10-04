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
        icon: "🏛️",
        description:
            "Public institutions operate in environments where policy, processes, people, systems and accountability must work together. WilCom supports institutions to understand operational challenges, assess existing systems and translate requirements into practical improvements.",
        problems: [
            "Fragmented or inefficient institutional processes",
            "Manual workflows and disconnected information systems",
            "Weak visibility across operations and service delivery",
            "Legacy systems that no longer support organizational needs",
            "Requirements for stronger governance, controls and accountability",
        ],
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
        icon: "🎓",
        description:
            "Education and training institutions require systems that connect institutional processes, learning delivery, assessment, information management and decision-making. WilCom combines consulting, technology and capacity building to support sustainable digital transformation.",
        problems: [
            "Growing demand for digital learning and assessment",
            "Disconnected institutional information",
            "Limited visibility of operational and performance data",
            "Need for stronger digital skills among staff and trainers",
            "Systems that require modernization or better integration",
        ],
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
        icon: "⚖️",
        description:
            "Regulatory and oversight organizations depend on reliable information, controlled processes, secure systems and auditable operations. WilCom supports these institutions through assessment, systems improvement, quality assurance and technology-enabled process transformation.",
        problems: [
            "Complex regulatory and administrative workflows",
            "Information spread across disconnected systems",
            "Requirements for auditability and traceability",
            "Security and access-control concerns",
            "Need for reliable information for oversight and decision-making",
        ],
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
        icon: "🌍",
        description:
            "Development programmes require solutions that connect programme objectives with implementation realities. WilCom supports organizations to assess needs, design fit-for-purpose interventions, strengthen institutional capability and improve the systems that enable programme delivery.",
        problems: [
            "Translating programme objectives into practical delivery systems",
            "Weak information flows between programme teams and stakeholders",
            "Capacity gaps affecting implementation",
            "Reporting and monitoring requirements",
            "Need for sustainable solutions beyond the initial intervention",
        ],
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
        icon: "🏦",
        description:
            "Financial institutions require dependable processes, secure information systems and technology that supports operational efficiency. WilCom brings together ICT advisory, systems development, integration and security-focused thinking to address business and technology requirements.",
        problems: [
            "Operational processes requiring automation",
            "Disconnected systems and information flows",
            "Security and control requirements",
            "Need for reliable management information",
            "Technology investments that must translate into operational value",
        ],
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
        icon: "🛒",
        description:
            "Commercial organizations need technology that improves the way people, processes and information work together. WilCom helps organizations assess operational requirements and develop practical systems that support efficiency, visibility and service delivery.",
        problems: [
            "Manual and inefficient business processes",
            "Limited visibility across operations",
            "Disconnected applications and data",
            "Need for improved reporting and decision support",
            "Technology that does not adequately reflect business processes",
        ],
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
        icon: "🏨",
        description:
            "Service organizations depend on coordinated processes, timely information and systems that support both staff and customers. WilCom applies consulting and technology capabilities to improve operational processes and strengthen digital service delivery.",
        problems: [
            "Disconnected operational processes",
            "Manual information handling",
            "Limited management visibility",
            "Need for integrated operational systems",
            "Challenges translating technology into better service delivery",
        ],
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
        icon: "🏭",
        description:
            "Industrial and logistics environments require dependable information flows, coordinated processes and technology that supports operations. WilCom helps organizations assess their environment, define requirements and implement practical technology-enabled improvements.",
        problems: [
            "Operational information gaps",
            "Disconnected systems and processes",
            "Infrastructure and connectivity requirements",
            "Limited visibility across operational activities",
            "Need for scalable and maintainable technology solutions",
        ],
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
        context:
            "The institution operated a mix of manual and partially digitised processes across admissions, assessment, records management and reporting. Leadership recognised the need for a structured assessment before committing to a large-scale digital transformation programme.",
        challenge:
            "Institutional processes were fragmented across departments, information was held in disconnected spreadsheets and legacy systems, and staff capability varied widely. There was no shared view of priorities, dependencies or sequencing for digital investment.",
        engagementDetail:
            "WilCom conducted a structured institutional assessment covering process flows, systems landscape, data handling, staff capability and technology infrastructure. Findings were translated into a prioritised digital transformation roadmap with quick wins, medium-term initiatives and capability-building recommendations.",
        deliveryFocus: [
            "Institutional process and systems assessment",
            "Data and information management review",
            "Digital transformation roadmap development",
            "Staff capability and capacity-building plan",
            "Prioritised implementation and investment recommendations",
        ],
        services: [
            "Management Consulting",
            "Digital Transformation",
            "Capacity Building",
        ],
        onlineUrl: null,
        onlineLabel: null,
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
        context:
            "The authority needed to modernise how it received, tracked, reviewed and reported on regulatory cases. Existing processes were paper-heavy, involved multiple handoffs and lacked a single source of truth.",
        challenge:
            "Cases were managed across spreadsheets, email threads and physical files. There was limited traceability of decisions, inconsistent handling across teams and no reliable management information on case volume, age or outcome.",
        engagementDetail:
            "WilCom designed and delivered a web-based case management system with configurable workflows, role-based access control, audit trails, document handling and management dashboards. The system was developed iteratively with input from case handlers, supervisors and management.",
        deliveryFocus: [
            "Requirements analysis and process design",
            "Workflow and case lifecycle configuration",
            "Role-based access and audit trail implementation",
            "Document and information management",
            "Management reporting and dashboards",
        ],
        services: [
            "Systems Development",
            "Quality Assurance & Security",
            "ICT Advisory",
        ],
        onlineUrl: null,
        onlineLabel: null,
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
        context:
            "The department was delivering services through largely manual workflows. Improving turnaround times, traceability and stakeholder experience required moving to controlled digital processes.",
        challenge:
            "Manual workflows created bottlenecks, duplicate data capture and inconsistent records. Management lacked visibility into service backlogs and there was limited evidence to support process improvement decisions.",
        engagementDetail:
            "WilCom worked with the department to map core processes, redesign workflows for digital delivery, configure the supporting systems and integrate information flows. Staff were involved throughout, and training was delivered ahead of rollout.",
        deliveryFocus: [
            "Process mapping and redesign",
            "Digital workflow configuration",
            "Information integration across the department",
            "Change management and staff training",
            "Rollout support and post-launch review",
        ],
        services: [
            "Digital Transformation",
            "Systems Development",
            "ICT Infrastructure & Integration",
        ],
        onlineUrl: null,
        onlineLabel: null,
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
        context:
            "The programme operated across multiple sites with several implementation partners. There was no shared system for capturing activity data, tracking indicators or producing consolidated reports.",
        challenge:
            "Reporting was slow, inconsistent and heavily manual. Programme management lacked timely visibility on implementation progress, and field teams spent significant time on data collection and reconciliation.",
        engagementDetail:
            "WilCom designed and implemented a monitoring and information system aligned to the programme's results framework. Partners were on-boarded onto a common platform, reporting templates were standardised, and dashboards were built for programme management.",
        deliveryFocus: [
            "Programme indicators and results framework alignment",
            "Partner and field team on-boarding",
            "Digital data collection and consolidation",
            "Management dashboards and reporting",
            "Training and continued support for field teams",
        ],
        services: [
            "Programme Delivery",
            "Systems Development",
            "Capacity Building",
        ],
        onlineUrl: null,
        onlineLabel: null,
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
        context:
            "The institution had grown rapidly and accumulated a mix of legacy and modern systems. Management wanted independent assurance on ICT and security posture before committing to a multi-year investment programme.",
        challenge:
            "Systems and controls had evolved organically without a consolidated review. Areas of concern included access management, disaster recovery readiness, vendor dependencies and alignment between business needs and ICT investment.",
        engagementDetail:
            "WilCom conducted an independent ICT and security assessment covering infrastructure, applications, security controls, operational processes and governance. Findings were prioritised by risk and translated into an investment roadmap with short and medium-term recommendations.",
        deliveryFocus: [
            "ICT and security posture assessment",
            "Controls and access-management review",
            "Business continuity and disaster recovery review",
            "Governance and operating-model assessment",
            "Prioritised improvement and investment roadmap",
        ],
        services: [
            "ICT Advisory",
            "Quality Assurance & Security",
            "Management Consulting",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 4,
        published: true,
    },
];

/* -------------------------------------------------------------------------- */
/* CONTACT SUBMISSIONS (demo)                                                 */
/* -------------------------------------------------------------------------- */

const contactSubmissions = [
    {
        name: "Jane Wanjiku",
        email: "jane.wanjiku@example.co.ke",
        phone: "+254 700 111 222",
        company: "County Government of Nakuru",
        subject: "Request for ICT needs assessment",
        message:
            "We would like to discuss an institutional ICT assessment covering our health and revenue systems. Could you share an approach note and indicative timeline?",
    },
    {
        name: "David Otieno",
        email: "d.otieno@example.org",
        phone: "+254 722 333 444",
        company: "Regional Development Trust",
        subject: "Programme monitoring system",
        message:
            "We are preparing a three-year programme and need a monitoring and reporting system. Interested in a discovery call to scope the requirement.",
    },
    {
        name: "Amina Hassan",
        email: "amina.hassan@example.com",
        phone: null,
        company: "Private Training College",
        subject: "Digital learning platform",
        message:
            "Looking to modernise our learning delivery and assessment. Can WilCom support an assessment and roadmap for the next academic year?",
    },
];

/* -------------------------------------------------------------------------- */
/* NEWSLETTER SUBSCRIBERS (demo)                                              */
/* -------------------------------------------------------------------------- */

const subscribers = [
    { email: "subscriber.one@example.com", active: true },
    { email: "subscriber.two@example.com", active: true },
    { email: "subscriber.three@example.com", active: true },
    { email: "former.subscriber@example.com", active: false },
];

/* -------------------------------------------------------------------------- */
/* MAIN                                                                       */
/* -------------------------------------------------------------------------- */

async function main() {
    /* ------------------------------- Services ------------------------------ */

    for (const service of services) {
        await prisma.service.upsert({
            where: { slug: service.slug },
            update: service,
            create: service,
        });
    }

    /* -------------------------------- Sectors ------------------------------ */

    for (const sector of sectors) {
        await prisma.sector.upsert({
            where: { slug: sector.slug },
            update: sector,
            create: sector,
        });
    }

    /* ------------------------------- Projects ------------------------------ */

    for (const project of projects) {
        await prisma.project.upsert({
            where: { slug: project.slug },
            update: project,
            create: project,
        });
    }

    /* -------------------------- Contact submissions ------------------------ */

    // No unique constraint on ContactSubmission, so we gate creation on
    // whether a submission with the same email + subject already exists.
    for (const submission of contactSubmissions) {
        const existing = await prisma.contactSubmission.findFirst({
            where: {
                email: submission.email,
                subject: submission.subject,
            },
            select: { id: true },
        });

        if (!existing) {
            await prisma.contactSubmission.create({ data: submission });
        }
    }

    /* --------------------------- Newsletter subs --------------------------- */

    for (const sub of subscribers) {
        await prisma.newsletterSubscriber.upsert({
            where: { email: sub.email },
            update: { active: sub.active },
            create: sub,
        });
    }

    /* --------------------------------- Done -------------------------------- */

    console.log(
        [
            `Seeded ${services.length} services`,
            `${sectors.length} sectors`,
            `${projects.length} projects`,
            `${contactSubmissions.length} contact submissions (demo)`,
            `${subscribers.length} newsletter subscribers (demo)`,
        ].join(", "),
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