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
        link: null,
        activities: [
            "Institutional and operational assessment",
            "Business process analysis and redesign",
            "Requirements gathering and prioritisation",
            "Strategy and operating model development",
            "Implementation planning and roadmap design",
            "Stakeholder engagement and change support",
        ],
        order: 0,
        published: true,
    },
    {
        title: "Digital Transformation",
        slug: "digital-transformation",
        description:
            "Helping organizations redesign services, processes and operating models through purposeful use of digital technologies.",
        icon: "refresh",
        link: null,
        activities: [
            "Digital maturity and readiness assessment",
            "Service and process redesign for digital delivery",
            "Transformation strategy and roadmap development",
            "Systems and technology landscape review",
            "Digital operating model design",
            "Change management and adoption planning",
        ],
        order: 1,
        published: true,
    },
    {
        title: "Systems Development",
        slug: "systems-development",
        description:
            "Designing and developing fit-for-purpose information systems, web platforms and enterprise applications.",
        icon: "code",
        link: null,
        activities: [
            "Requirements analysis and specification",
            "System architecture and design",
            "Web and enterprise application development",
            "Database design and data modelling",
            "Integration with existing systems",
            "Testing, deployment and post-launch support",
        ],
        order: 2,
        published: true,
    },
    {
        title: "ICT Advisory",
        slug: "ict-advisory",
        description:
            "Independent advice on ICT strategy, needs assessment, architecture, infrastructure, systems and technology investment.",
        icon: "consulting",
        link: null,
        activities: [
            "ICT strategy and roadmap development",
            "ICT needs assessment and gap analysis",
            "Architecture and infrastructure review",
            "Technology investment appraisal",
            "Vendor and solution evaluation",
            "ICT governance and policy advisory",
        ],
        order: 3,
        published: true,
    },
    {
        title: "Quality Assurance & Security",
        slug: "quality-assurance-security",
        description:
            "Quality assurance, security assessment and controls designed to improve the reliability, resilience and trustworthiness of digital systems.",
        icon: "shield",
        link: null,
        activities: [
            "Quality assurance reviews and audits",
            "Security assessment and penetration testing",
            "Access-control and identity review",
            "Business continuity and disaster recovery assessment",
            "Compliance and audit-readiness support",
            "Controls design and remediation planning",
        ],
        order: 4,
        published: true,
    },
    {
        title: "Capacity Building",
        slug: "capacity-building",
        description:
            "Structured training, knowledge transfer and institutional capability development to support adoption and sustainable use.",
        icon: "academic",
        link: null,
        activities: [
            "Training needs assessment",
            "Curriculum and training material development",
            "Instructor-led and blended training delivery",
            "Technical and end-user skills transfer",
            "Institutional capability development",
            "Post-training support and evaluation",
        ],
        order: 5,
        published: true,
    },
    {
        title: "Programme Delivery",
        slug: "programme-delivery",
        description:
            "Practical implementation support across complex technology, institutional development and digital transformation programmes.",
        icon: "layers",
        link: null,
        activities: [
            "Programme design and implementation planning",
            "Stakeholder coordination and engagement",
            "Workstream and partner management",
            "Monitoring, reporting and evaluation",
            "Risk management and issue resolution",
            "Handover and sustainability planning",
        ],
        order: 6,
        published: true,
    },
    {
        title: "ICT Infrastructure & Integration",
        slug: "ict-infrastructure-integration",
        description:
            "Infrastructure, connectivity and technology integration capabilities supporting dependable digital environments.",
        icon: "network",
        link: null,
        activities: [
            "Infrastructure assessment and design",
            "Network and connectivity planning",
            "Server, storage and cloud deployment",
            "Systems integration and data exchange",
            "Infrastructure security and resilience",
            "Operations and support planning",
        ],
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
        title: "e-GP 3rd Party Quality Assurance & Security Audit",
        slug: "egp-quality-assurance-security-audit",
        client: "The National Treasury",
        sector: "Government & Public Institutions",
        engagement: "Consultancy",
        summary:
            "Third-party quality assurance and security audit of the electronic Government Procurement (e-GP) platform, covering software quality, SDLC conformance, functional testing, penetration testing and interoperability review.",
        context:
            "The National Treasury required independent assurance on the quality, security and interoperability of the electronic Government Procurement platform, which is central to public procurement operations and handles sensitive transactional data.",
        challenge:
            "The platform needed independent verification that it met quality, security and compliance requirements before broader rollout. Concerns included SDLC conformance, potential vulnerabilities, interoperability with other government systems and auditability of procurement transactions.",
        engagementDetail:
            "WilCom conducted an independent third-party quality assurance and security audit covering software quality, SDLC conformance, verification and validation, functional testing, penetration testing, vulnerability assessment, compliance and interoperability review. Findings were documented and prioritised to support remediation and platform readiness.",
        deliveryFocus: [
            "Software quality assurance and SDLC conformance review",
            "Verification and validation of platform requirements",
            "Functional testing and defect identification",
            "Penetration testing and vulnerability assessment",
            "Compliance and interoperability review",
        ],
        services: [
            "Quality Assurance & Security",
            "ICT Advisory",
            "Systems Development",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 0,
        published: true,
    },
    {
        ref: "P-002",
        title:
            "Capacity Building of TVET Trainers on ODeL Curriculum Delivery & Assessment",
        slug: "tvet-trainers-odel-capacity-building",
        client:
            "Ministry of Education / State Department of Vocational and Technical Training & African Development Bank",
        sector: "Education & TVET",
        engagement: "Consultancy",
        summary:
            "Capacity building programme for TVET trainers covering Open, Distance and e-Learning (ODeL) curriculum delivery, assessment, materials development and certification.",
        context:
            "The Ministry, with support from the African Development Bank, was scaling up Open, Distance and e-Learning across TVET institutions and needed to equip trainers with the capability to deliver and assess ODeL curricula effectively.",
        challenge:
            "Trainers had varying levels of familiarity with digital delivery methods, and institutional capability for ODeL assessment and materials development was uneven across participating TVET institutions.",
        engagementDetail:
            "WilCom conducted a training needs assessment, designed the programme, developed training materials, and delivered practical training covering ODeL curriculum delivery, assessment methods and materials development. Continuous and summative assessment was applied, with certification and reporting on completion.",
        deliveryFocus: [
            "Training needs assessment across TVET institutions",
            "Programme design aligned to ODeL delivery requirements",
            "Development of training materials and resources",
            "Practical training delivery to TVET trainers",
            "Continuous and summative assessment and certification",
        ],
        services: [
            "Capacity Building",
            "Digital Transformation",
            "Programme Delivery",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 1,
        published: true,
    },
    {
        ref: "P-003",
        title: "Design, Development & Hosting of an Interactive Website",
        slug: "eldoret-city-interactive-website",
        client: "Municipality of Eldoret (Eldoret City)",
        sector: "Government & Public Institutions",
        engagement: "Software & Systems",
        summary:
            "Design, development, hosting and security hardening of an interactive municipal website supporting public communication, information services and digital presence for Eldoret City.",
        context:
            "Eldoret City required a modern digital presence to communicate with residents, publish information and provide a foundational platform for future digital services.",
        challenge:
            "The municipality needed a responsive, secure and manageable website that reflected the city's identity, supported self-service content updates and included strong cybersecurity and SEO fundamentals.",
        engagementDetail:
            "WilCom designed the user experience, developed a responsive website, implemented a content management system, provisioned secure hosting, applied cybersecurity controls, delivered user training and provided search engine optimization.",
        deliveryFocus: [
            "UI/UX design aligned to city identity and user needs",
            "Responsive web development and CMS implementation",
            "Secure hosting and cybersecurity controls",
            "Content management training for city staff",
            "Search engine optimization and performance tuning",
        ],
        services: [
            "Systems Development",
            "Digital Transformation",
            "Quality Assurance & Security",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 2,
        published: true,
    },
    {
        ref: "P-004",
        title:
            "Development of a Web-Based TVET Management Information System",
        slug: "tvet-management-information-system",
        client: "Ministry of Education – State Department for TVET",
        sector: "Education & TVET",
        engagement: "Software & Systems",
        summary:
            "Development of a national web-based TVET Management Information System supporting data management, education indicators, reporting, visualization and monitoring and evaluation across TVET institutions.",
        context:
            "The State Department for TVET required a national platform to consolidate institutional data, track education indicators and support evidence-based planning and reporting across the TVET sector.",
        challenge:
            "TVET data was fragmented across institutions and reporting was slow and inconsistent. The State Department needed reliable, timely information for policy, monitoring and planning purposes.",
        engagementDetail:
            "WilCom delivered a web-based management information system supporting national TVET data management, education indicators, reporting and visualization, monitoring and evaluation. The engagement included server-room setup, backup configuration and capacity building for system users.",
        deliveryFocus: [
            "National TVET data management and consolidation",
            "Education indicators and reporting frameworks",
            "Data visualization and monitoring dashboards",
            "Monitoring and evaluation support",
            "Server-room setup, backup and user capacity building",
        ],
        services: [
            "Systems Development",
            "Digital Transformation",
            "Capacity Building",
            "ICT Infrastructure & Integration",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 3,
        published: true,
    },
    {
        ref: "P-005",
        title: "Capacity Building of SMEs",
        slug: "uasin-gishu-sme-capacity-building",
        client: "County Government of Uasin Gishu",
        sector: "Retail & Commercial Organizations",
        engagement: "Consultancy",
        summary:
            "SME census, skills mapping, training needs analysis, curriculum development and delivery of training to Small and Medium Enterprises across Uasin Gishu County.",
        context:
            "The County Government of Uasin Gishu sought to strengthen SME capability as a driver of local economic development, beginning with an evidence base of SMEs and their skill requirements.",
        challenge:
            "The county lacked reliable data on its SME population, and existing interventions were not systematically aligned to identified skill gaps. Training of trainers capacity was also limited.",
        engagementDetail:
            "WilCom conducted an SME census, designed a database, mapped existing skills, conducted a training needs analysis, developed curriculum, delivered training of trainers, and trained SMEs directly across the county.",
        deliveryFocus: [
            "SME census and database design",
            "Skills mapping across the SME population",
            "Training needs analysis and curriculum development",
            "Training of trainers",
            "Direct training delivery to SMEs",
        ],
        services: [
            "Management Consulting",
            "Capacity Building",
            "Programme Delivery",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 4,
        published: true,
    },
    {
        ref: "P-006",
        title: "Records Management Consultancy",
        slug: "uasin-gishu-records-management",
        client: "County Government of Uasin Gishu",
        sector: "Government & Public Institutions",
        engagement: "Consultancy",
        summary:
            "Records management consultancy covering inventory, gap analysis, electronic records management, digitization, classification, retention schedules, registry reorganization and staff training.",
        context:
            "The County Government of Uasin Gishu needed to modernize its records management practices to improve access, accountability and institutional memory across departments.",
        challenge:
            "Records were held in a mix of physical and disconnected electronic formats. Classification, retention and access practices varied across the registry, and staff capability for electronic records management was limited.",
        engagementDetail:
            "WilCom conducted a records inventory and gap analysis, supported the introduction of electronic records management, supervised digitization, developed classification and retention schedules, reorganized the registry and trained staff on the new practices.",
        deliveryFocus: [
            "Records inventory and gap analysis",
            "Electronic records management design",
            "Digitization of physical records",
            "Classification and retention schedules",
            "Registry reorganization and staff training",
        ],
        services: [
            "Management Consulting",
            "Digital Transformation",
            "Capacity Building",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 5,
        published: true,
    },
    {
        ref: "P-007",
        title: "Comprehensive ICT Needs Assessment",
        slug: "uasin-gishu-county-assembly-ict-assessment",
        client: "Uasin Gishu County Assembly",
        sector: "Government & Public Institutions",
        engagement: "Consultancy",
        summary:
            "Comprehensive ICT needs assessment covering network and hardware, chambers digitization, VoIP, server room, surveillance, ICT organization, enterprise systems, security and disaster recovery.",
        context:
            "The County Assembly required a comprehensive assessment of its ICT environment to inform investment decisions and modernize how the Assembly conducted its legislative and administrative work.",
        challenge:
            "ICT infrastructure, systems and organizational arrangements had evolved without a consolidated plan. The Assembly needed a clear picture of gaps, risks and priorities for digital investment.",
        engagementDetail:
            "WilCom assessed the network, hardware and infrastructure environment, reviewed chambers digitization requirements, and evaluated VoIP, server-room, surveillance, ICT organization, enterprise systems, security and disaster recovery arrangements. Findings were translated into prioritised recommendations.",
        deliveryFocus: [
            "Network, hardware and infrastructure assessment",
            "Chambers digitization and VoIP requirements",
            "Server room, surveillance and physical security review",
            "Enterprise systems and ICT organization review",
            "Security, disaster recovery and prioritised recommendations",
        ],
        services: [
            "ICT Advisory",
            "Digital Transformation",
            "ICT Infrastructure & Integration",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 6,
        published: true,
    },
    {
        ref: "P-008",
        title: "National Tourism Service Portal",
        slug: "national-tourism-service-portal",
        client:
            "Ministry of Tourism and Wildlife – State Department for Tourism",
        sector: "Government & Public Institutions",
        engagement: "Software & Systems",
        summary:
            "Development of a National Tourism Service Portal supporting tourism information, services and digital transformation across the sector, with cloud deployment, security, maintenance and performance monitoring.",
        context:
            "The State Department for Tourism required a national digital platform to consolidate tourism-related information, present services to the public and support sector-wide digital transformation.",
        challenge:
            "Tourism information and services were spread across multiple channels and were not consistently presented or maintained. The sector needed a unified, secure and scalable digital platform with clear digital strategy behind it.",
        engagementDetail:
            "WilCom conducted requirements analysis and developed a digital transformation strategy, then designed and built a responsive custom platform deployed on cloud infrastructure. The engagement included security hardening, maintenance arrangements, SEO and performance monitoring.",
        deliveryFocus: [
            "Requirements analysis and digital transformation strategy",
            "UI/UX design and responsive platform development",
            "Custom software development and cloud deployment",
            "Security, maintenance and performance monitoring",
            "Search engine optimization and content strategy",
        ],
        services: [
            "Systems Development",
            "Digital Transformation",
            "Quality Assurance & Security",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 7,
        published: true,
    },
    {
        ref: "P-009",
        title: "Library Information Management System for MTRD",
        slug: "mtrd-library-information-management-system",
        client:
            "Ministry of Transport, Infrastructure & Public Works – State Department for Roads",
        sector: "Government & Public Institutions",
        engagement: "Software & Systems",
        summary:
            "Design, supply, installation and commissioning of a Library Information Management System supporting cataloguing, digitization, migration and institutional knowledge access.",
        context:
            "The State Department for Roads required a modern library information management capability to organize, catalogue and provide access to technical and institutional reference materials.",
        challenge:
            "Existing library records were largely physical or held in disconnected files. Digitization, cataloguing, migration and integration with other systems required a structured approach and reliable infrastructure.",
        engagementDetail:
            "WilCom carried out requirements analysis and system design, supplied and installed hardware, supervised digitization and data migration, integrated the system with other environments, and managed testing, commissioning and training. Ongoing support was provided under a service level agreement.",
        deliveryFocus: [
            "Requirements analysis and system design",
            "Hardware supply, installation and infrastructure setup",
            "Digitization, cataloguing and data migration",
            "System integration, testing and commissioning",
            "Training and service-level support",
        ],
        services: [
            "Systems Development",
            "ICT Infrastructure & Integration",
            "Capacity Building",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 8,
        published: true,
    },
    {
        ref: "P-010",
        title: "Integrated Health Management Information System",
        slug: "nandi-county-integrated-health-management-information-system",
        client: "County Government of Nandi",
        sector: "Government & Public Institutions",
        engagement: "Software & Systems",
        summary:
            "Integrated health management information system for the County Government of Nandi, covering e-hospital functionality, process re-engineering, system customization, phased rollout and financial integration.",
        context:
            "The County Government of Nandi required an integrated health management information system to connect hospital operations, patient records and financial processes across its health facilities.",
        challenge:
            "Health information was managed across disconnected systems and manual processes. The county needed a unified platform that reflected clinical and administrative workflows, supported phased rollout and could integrate with financial management.",
        engagementDetail:
            "WilCom supported process re-engineering, customized the system to the county's operating environment, delivered training, and supported phased rollout across facilities. Financial integration, monitoring and ongoing maintenance were included.",
        deliveryFocus: [
            "Health process re-engineering and system customization",
            "Integrated e-hospital system rollout across facilities",
            "Phased implementation and county-wide training",
            "Financial integration with county systems",
            "Monitoring, maintenance and continuous support",
        ],
        services: [
            "Systems Development",
            "Digital Transformation",
            "ICT Infrastructure & Integration",
            "Capacity Building",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 9,
        published: true,
    },
    {
        ref: "P-011",
        title: "Online Administrative Review Case Management System",
        slug: "ppra-administrative-review-case-management-system",
        client: "Public Procurement Regulatory Authority",
        sector: "Regulatory & Oversight Institutions",
        engagement: "Software & Systems",
        summary:
            "Online case management system supporting administrative review processes at the Public Procurement Regulatory Authority, with workflow automation, notifications and integrations.",
        context:
            "The Public Procurement Regulatory Authority required a digital platform to manage administrative review cases, replacing largely manual case handling with a controlled online environment.",
        challenge:
            "Cases were managed manually, making it difficult to track progress, manage deadlines and provide consistent visibility to reviewers and parties. Notifications and integrations with other systems were also needed.",
        engagementDetail:
            "WilCom conducted requirements analysis and process review, produced a system requirements specification, developed the platform, automated case workflows and notifications, integrated with other systems, and delivered quality assurance, training and go-live support.",
        deliveryFocus: [
            "Requirements analysis and process review",
            "System requirements specification and design",
            "Case workflow automation and notifications",
            "Systems integration and quality assurance",
            "Training and go-live support",
        ],
        services: [
            "Systems Development",
            "Quality Assurance & Security",
            "ICT Advisory",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 10,
        published: true,
    },
    {
        ref: "P-012",
        title: "Public Procurement Information Portal",
        slug: "ppra-public-procurement-information-portal",
        client: "Public Procurement Regulatory Authority",
        sector: "Regulatory & Oversight Institutions",
        engagement: "Software & Systems",
        summary:
            "Redesign, development, upgrade and maintenance of the Public Procurement Information Portal, supporting public access to procurement information and regulatory transparency.",
        context:
            "The Public Procurement Regulatory Authority required its public-facing information portal to be modernized to improve accessibility, transparency and reliability for procurement stakeholders.",
        challenge:
            "The existing portal needed assessment, redesign and upgrade to meet current usability, content-management and performance expectations, with ongoing maintenance to sustain operation.",
        engagementDetail:
            "WilCom carried out a needs assessment, redesigned the portal, delivered development and upgrade work, and provided ongoing maintenance and support.",
        deliveryFocus: [
            "Needs assessment and portal redesign",
            "Development and upgrade of the information portal",
            "Content management and usability improvements",
            "Ongoing maintenance and support",
        ],
        services: [
            "Systems Development",
            "Digital Transformation",
            "ICT Advisory",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 11,
        published: true,
    },
    {
        ref: "P-013",
        title: "SIM Box Fraud Detector",
        slug: "cak-sim-box-fraud-detector",
        client: "Communications Authority of Kenya",
        sector: "Regulatory & Oversight Institutions",
        engagement: "Software & Systems",
        summary:
            "Deployment and customization of a SIM Box Fraud Detector solution for the Communications Authority of Kenya, covering cloud deployment, dashboards, calibration and managed services.",
        context:
            "The Communications Authority of Kenya required a technology solution to detect and support management of SIM box-related fraud affecting telecommunications services.",
        challenge:
            "SIM box fraud is dynamic and requires a configurable solution with dashboards, alerting and calibration against real test calls. Regulatory alignment, user acceptance testing and ongoing managed services were essential.",
        engagementDetail:
            "WilCom deployed and customized the solution on cloud infrastructure, aligned it to regulatory requirements, configured dashboards, carried out user acceptance testing, test-call calibration and stress testing, trained users and provided managed services.",
        deliveryFocus: [
            "Cloud deployment and system customization",
            "Regulatory alignment and dashboards",
            "User acceptance testing, calibration and stress testing",
            "User training",
            "Managed services and ongoing support",
        ],
        services: [
            "Systems Development",
            "Quality Assurance & Security",
            "ICT Infrastructure & Integration",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 12,
        published: true,
    },
    {
        ref: "P-015",
        title: "Network Monitoring Software",
        slug: "cak-network-monitoring-software",
        client: "Communications Authority of Kenya",
        sector: "Regulatory & Oversight Institutions",
        engagement: "Software & Systems",
        summary:
            "Supply, installation and configuration of WhatsUp Gold network monitoring software, with network discovery, alerting, dashboards and user training.",
        context:
            "The Communications Authority of Kenya required improved visibility into its network environment to support operations and proactive incident management.",
        challenge:
            "The Authority needed a reliable monitoring solution that could discover and track network assets, alert on issues and provide actionable dashboards without extensive disruption to operations.",
        engagementDetail:
            "WilCom supplied and installed WhatsUp Gold, configured network discovery and monitoring, set up alerting and dashboards, trained users and provided maintenance.",
        deliveryFocus: [
            "Supply and installation of network monitoring software",
            "Network discovery and monitoring configuration",
            "Alerting and dashboards setup",
            "User training",
            "Maintenance and support",
        ],
        services: [
            "ICT Infrastructure & Integration",
            "ICT Advisory",
            "Quality Assurance & Security",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 13,
        published: true,
    },
    {
        ref: "P-016",
        title: "RFID File Management System",
        slug: "cak-rfid-file-management-system",
        client: "Communications Authority of Kenya",
        sector: "Regulatory & Oversight Institutions",
        engagement: "Software & Systems",
        summary:
            "Supply and implementation of an RFID file management system covering hardware, infrastructure, enrolment, tagging, validation, user acceptance testing, training and SLA maintenance.",
        context:
            "The Communications Authority of Kenya required an RFID-based file management solution to improve tracking, retrieval and control of physical files.",
        challenge:
            "Manual file tracking made retrieval slow and reduced visibility of file movements. The solution needed reliable hardware, careful enrollment and tagging, and clear operational processes.",
        engagementDetail:
            "WilCom supplied the RFID hardware and infrastructure, set up the environment, supported enrollment and tagging of files, carried out validation and user acceptance testing, trained staff, and provided handover and ongoing SLA maintenance.",
        deliveryFocus: [
            "RFID hardware and infrastructure setup",
            "File enrolment, tagging and validation",
            "User acceptance testing",
            "User training and handover",
            "SLA-based maintenance and support",
        ],
        services: [
            "Systems Development",
            "ICT Infrastructure & Integration",
            "Capacity Building",
        ],
        onlineUrl: null,
        onlineLabel: null,
        order: 14,
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

    // Remove legacy placeholder projects that are no longer part of the seed.
    // Runs only if those rows still exist.
    const legacyProjectSlugs = [
        "tvet-institution-digital-transformation-assessment",
        "regulatory-case-management-system-development",
        "public-institution-process-digitisation",
        "development-programme-monitoring-system",
        "financial-institution-ict-security-assessment",
    ];

    await prisma.project.deleteMany({
        where: { slug: { in: legacyProjectSlugs } },
    });

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