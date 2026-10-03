/**
 * WilCom Systems Limited
 * Experience / Portfolio Data
 *
 * This file is intentionally data-only.
 * Do not place JSX, React components, or UI logic here.
 *
 * Used by:
 * - /experience
 * - /experience/[slug]
 *
 * The experience model is designed to position WilCom as a
 * development and management consulting organization where
 * technology is used as an enabler of institutional and
 * operational transformation.
 */

export const SERVICES = [
  "Management Consulting",
  "Digital Transformation",
  "Systems Development",
  "ICT Advisory",
  "Quality Assurance & Security",
  "Capacity Building",
  "Programme Delivery",
  "ICT Infrastructure & Integration",
] as const;

export type Service = (typeof SERVICES)[number];

export type OnlineRepresentationType =
  | "live-system"
  | "client-platform"
  | "project-reference"
  | "organizational-reference";

export type ExperienceProject = {
  /**
   * Internal reference number used by WilCom.
   * Example: REF 01
   */
  id: string;

  /**
   * URL-safe identifier used by /experience/[slug]
   */
  slug: string;

  /**
   * Public project title.
   */
  title: string;

  /**
   * Client / commissioning institution.
   */
  client: string;

  /**
   * High-level sector classification.
   */
  sector: string;

  /**
   * Nature of the engagement.
   */
  engagement: string;

  /**
   * Services demonstrated by the engagement.
   *
   * These should correspond to the SERVICES taxonomy above.
   */
  services: Service[];

  /**
   * Short portfolio description.
   *
   * Used on cards, filters, search results, and metadata.
   */
  summary: string;

  /**
   * Why the engagement mattered.
   *
   * Gives context without making unsupported claims about
   * quantitative outcomes.
   */
  context: string;

  /**
   * The institutional, operational, technical, or programme
   * challenge the engagement addressed.
   */
  challenge: string;

  /**
   * Detailed description of WilCom's role.
   */
  engagementDetail: string;

  /**
   * Main delivery areas demonstrated by the project.
   */
  deliveryFocus: string[];

  /**
   * Optional current online representation.
   *
   * This can be:
   * - a live system,
   * - a current client platform,
   * - an official project reference,
   * - or an official organizational reference.
   *
   * Do not populate this with speculative URLs.
   */
  onlineUrl?: string;

  /**
   * Human-readable CTA for the online representation.
   */
  onlineLabel?: string;

  /**
   * Clarifies what the online link represents.
   */
  onlineType?: OnlineRepresentationType;
};

/**
 * ---------------------------------------------------------------------------
 * PROJECT EXPERIENCE
 * ---------------------------------------------------------------------------
 */

export const projects: ExperienceProject[] = [
  {
    id: "REF 01",
    slug: "e-gp-third-party-quality-assurance-security-audit",

    title: "e-GP 3rd Party Quality Assurance & Security Audit",

    client: "The National Treasury",

    sector: "Government & Public Institutions",

    engagement: "Quality Assurance & Security",

    services: [
      "Quality Assurance & Security",
      "ICT Advisory",
      "Digital Transformation",
    ],

    summary:
      "Independent quality assurance and security audit engagement supporting the assurance of Kenya's electronic Government Procurement environment.",

    context:
      "The electronic Government Procurement environment is a critical public-sector digital platform supporting procurement processes and interactions between government institutions and other stakeholders. Such systems require structured assurance of quality, security, controls and operational readiness.",

    challenge:
      "Large-scale government systems require independent scrutiny beyond software development alone. The engagement required attention to quality assurance, security considerations, system controls, process integrity and the reliability of a platform supporting public procurement operations.",

    engagementDetail:
      "WilCom provided third-party quality assurance and security audit support, applying an independent assessment perspective to the e-GP environment. The engagement demonstrates WilCom's ability to operate across software quality, information security, technology assurance and public-sector digital transformation.",

    deliveryFocus: [
      "Third-party quality assurance",
      "Security assessment",
      "Application and system controls",
      "Digital platform assurance",
      "Risk identification",
      "Public-sector technology governance",
    ],

    onlineUrl: "https://egpkenya.go.ke/",

    onlineLabel: "Visit e-GP Kenya",

    onlineType: "live-system",
  },

  {
    id: "REF 02",
    slug: "tvet-trainers-odel-curriculum-delivery-assessment",

    title:
      "Capacity Building of TVET Trainers on ODeL Curriculum Delivery & Assessment",

    client:
      "Ministry of Education / State Department of Vocational and Technical Training & AfDB",

    sector: "Education & TVET",

    engagement: "Capacity Building",

    services: [
      "Capacity Building",
      "Management Consulting",
      "Programme Delivery",
      "Digital Transformation",
    ],

    summary:
      "Capacity-building engagement focused on strengthening TVET trainers' capability to deliver and assess curriculum through Open, Distance and e-Learning approaches.",

    context:
      "The adoption of digital and flexible learning approaches creates new requirements for trainers, institutions and education programmes. Effective ODeL delivery requires more than technology. It also requires appropriate curriculum delivery approaches, assessment practices, trainer capability and institutional readiness.",

    challenge:
      "TVET trainers needed practical capacity to operate within an ODeL-oriented teaching and assessment environment while maintaining alignment with curriculum requirements and learner needs.",

    engagementDetail:
      "WilCom supported capacity building for TVET trainers, with emphasis on ODeL curriculum delivery and assessment. The engagement illustrates WilCom's ability to combine programme understanding, digital learning considerations, training delivery and knowledge transfer.",

    deliveryFocus: [
      "Trainer capacity building",
      "ODeL curriculum delivery",
      "Assessment approaches",
      "Digital learning practices",
      "Knowledge transfer",
      "Programme implementation support",
    ],
  },

  {
    id: "REF 03",
    slug: "eldoret-city-interactive-website",

    title: "Design, Development & Hosting of an Interactive Website",

    client: "Municipality of Eldoret / City of Eldoret",

    sector: "Government & Public Institutions",

    engagement: "Digital Platform Development",

    services: [
      "Digital Transformation",
      "Systems Development",
      "ICT Advisory",
      "Programme Delivery",
    ],

    summary:
      "Interactive public-sector web platform engagement supporting digital communication, information access and online service interaction for Eldoret.",

    context:
      "Public institutions increasingly require digital channels that make information and services accessible to citizens, businesses, investors and other stakeholders. A public-facing platform must bring together content, usability, institutional information and service pathways.",

    challenge:
      "The engagement required an interactive digital platform capable of representing the institution online while providing a structured channel for information access and interaction with the public.",

    engagementDetail:
      "WilCom provided design, development and hosting services for an interactive website for the Municipality of Eldoret. The project demonstrates the combination of digital strategy, user-facing systems development, web architecture, content presentation and operational hosting.",

    deliveryFocus: [
      "Digital platform design",
      "Web application development",
      "Public information access",
      "User experience",
      "Content architecture",
      "Hosting and operational support",
    ],

    onlineUrl: "https://eldoretcity.go.ke/",

    onlineLabel: "Visit current City platform",

    onlineType: "client-platform",
  },

  {
    id: "REF 04",
    slug: "tvet-management-information-system",

    title: "Development of a Web-Based TVET Management Information System",

    client: "Ministry of Education – State Department for TVET",

    sector: "Education & TVET",

    engagement: "Management Information System",

    services: [
      "Systems Development",
      "Digital Transformation",
      "ICT Advisory",
      "Programme Delivery",
    ],

    summary:
      "Web-based management information system supporting information management and digital processes within the TVET environment.",

    context:
      "Education and training systems depend on reliable institutional information to support planning, administration, monitoring and decision-making. A sector-wide management information system provides a digital foundation for consolidating and managing institutional data.",

    challenge:
      "The engagement required the design and implementation of a web-enabled management information system capable of supporting TVET information requirements and providing a foundation for digital sector management.",

    engagementDetail:
      "WilCom contributed to the development and deployment of the TVET Management Information System. The engagement demonstrates experience in enterprise and sector information systems, web-based application development, data management and digital transformation within public education.",

    deliveryFocus: [
      "Management information systems",
      "Web-based application development",
      "Data management",
      "Sector digital transformation",
      "Enterprise application architecture",
      "Implementation support",
    ],

    onlineUrl: "https://www.education.go.ke/tvet-mis",

    onlineLabel: "View TVET MIS",

    onlineType: "project-reference",
  },

  {
    id: "REF 05",
    slug: "capacity-building-smes",

    title: "Capacity Building of SMEs",

    client: "County Government of Uasin Gishu",

    sector: "Private Sector & Enterprise Development",

    engagement: "Capacity Building",

    services: [
      "Capacity Building",
      "Management Consulting",
      "Programme Delivery",
    ],

    summary:
      "Capacity-building engagement supporting small and medium enterprises within a county enterprise development context.",

    context:
      "SMEs require practical institutional, management and operational capabilities to navigate growth, service delivery, markets and changing business environments. Public-sector enterprise development programmes therefore require interventions that translate policy and programme objectives into practical support.",

    challenge:
      "The engagement required structured capacity development for SMEs, with emphasis on strengthening practical capabilities that could support more effective business operations and participation in the wider enterprise ecosystem.",

    engagementDetail:
      "WilCom supported the County Government of Uasin Gishu in capacity building for SMEs. The engagement reflects WilCom's ability to design and deliver structured learning and advisory interventions for enterprise and institutional development programmes.",

    deliveryFocus: [
      "SME capacity building",
      "Enterprise development",
      "Training delivery",
      "Practical business capability",
      "Knowledge transfer",
      "Programme support",
    ],
  },

  {
    id: "REF 06",
    slug: "records-management-consultancy",

    title: "Records Management Consultancy",

    client: "County Government of Uasin Gishu",

    sector: "Government & Public Institutions",

    engagement: "Management & Information Governance",

    services: [
      "Management Consulting",
      "ICT Advisory",
      "Digital Transformation",
    ],

    summary:
      "Consultancy engagement addressing records management and information-handling requirements within a county government environment.",

    context:
      "Effective records management supports institutional continuity, accountability, information access and operational efficiency. Public institutions need appropriate structures, processes and technologies to manage records throughout their lifecycle.",

    challenge:
      "The engagement required attention to institutional records management practices and the relationship between information governance, operational processes and technology-enabled information management.",

    engagementDetail:
      "WilCom provided records management consultancy to the County Government of Uasin Gishu. The engagement demonstrates experience at the intersection of institutional processes, information management, records governance and technology enablement.",

    deliveryFocus: [
      "Records management",
      "Information governance",
      "Process assessment",
      "Information lifecycle management",
      "Digital records considerations",
      "Institutional advisory",
    ],
  },

  {
    id: "REF 07",
    slug: "uasin-gishu-county-assembly-ict-needs-assessment",

    title: "Comprehensive ICT Needs Assessment",

    client: "Uasin Gishu County Assembly",

    sector: "Government & Public Institutions",

    engagement: "ICT Assessment & Advisory",

    services: [
      "ICT Advisory",
      "Management Consulting",
      "Digital Transformation",
      "ICT Infrastructure & Integration",
    ],

    summary:
      "Comprehensive ICT needs assessment supporting institutional understanding, prioritisation and planning of technology requirements.",

    context:
      "Technology investments are most effective when grounded in a clear understanding of institutional objectives, operational requirements, existing capabilities and future needs. ICT needs assessments provide a structured basis for technology planning and prioritisation.",

    challenge:
      "The engagement required an institution-wide assessment of ICT requirements rather than a narrow focus on individual technologies. The objective was to understand needs in relation to organisational operations, infrastructure, systems and future digital requirements.",

    engagementDetail:
      "WilCom conducted a comprehensive ICT needs assessment for the Uasin Gishu County Assembly. The engagement demonstrates WilCom's advisory capability in understanding institutional requirements and translating them into technology priorities and actionable recommendations.",

    deliveryFocus: [
      "ICT needs assessment",
      "Institutional technology review",
      "Infrastructure assessment",
      "Systems requirements",
      "Technology planning",
      "ICT investment prioritisation",
    ],
  },

  {
    id: "REF 08",
    slug: "national-tourism-service-portal",

    title: "National Tourism Service Portal",

    client:
      "Ministry of Tourism and Wildlife – State Department for Tourism",

    sector: "Tourism & Public Services",

    engagement: "Digital Public Service Platform",

    services: [
      "Digital Transformation",
      "Systems Development",
      "Programme Delivery",
      "ICT Advisory",
    ],

    summary:
      "Digital public-service platform engagement supporting access to tourism information, services, resources and stakeholder-facing digital experiences.",

    context:
      "Tourism is a multi-stakeholder sector involving government institutions, tourism businesses, destinations, visitors and supporting service providers. A national digital platform can bring information and services together across these stakeholder groups.",

    challenge:
      "The engagement required a digital platform capable of presenting tourism information and services through an accessible online environment while supporting multiple tourism-related information areas and stakeholder needs.",

    engagementDetail:
      "WilCom contributed to the development of the National Tourism Service Portal. The engagement demonstrates experience in public-facing digital platforms, information architecture, web systems development and technology-enabled service delivery within the tourism sector.",

    deliveryFocus: [
      "Digital public services",
      "Tourism information systems",
      "Web platform development",
      "Stakeholder-facing services",
      "Information architecture",
      "Digital service delivery",
    ],

    onlineUrl: "https://tourkenya.go.ke/",

    onlineLabel: "Visit National Tourism Service Portal",

    onlineType: "live-system",
  },

  {
    id: "REF 09",
    slug: "mtrd-library-information-management-system",

    title: "Library Information Management System for MTRD",

    client:
      "Ministry of Transport, Infrastructure & Public Works – State Department for Roads",

    sector: "Government & Public Institutions",

    engagement: "Information Management System",

    services: [
      "Systems Development",
      "Digital Transformation",
      "ICT Advisory",
    ],

    summary:
      "Information management system supporting library information and access within the State Department for Roads.",

    context:
      "Institutional libraries and knowledge repositories require structured systems for organising information resources, supporting discovery and improving access to institutional knowledge.",

    challenge:
      "The engagement required a digital information management solution aligned to the operational requirements of an institutional library and knowledge environment.",

    engagementDetail:
      "WilCom developed a Library Information Management System for MTRD within the State Department for Roads. The project demonstrates experience in information systems, structured data management, institutional knowledge access and purpose-built software development.",

    deliveryFocus: [
      "Information management",
      "Library systems",
      "Database-driven applications",
      "Institutional knowledge access",
      "Systems development",
      "Digital records",
    ],
  },

  {
    id: "REF 10",
    slug: "nandi-integrated-health-management-information-system",

    title: "Integrated Health Management Information System",

    client: "County Government of Nandi",

    sector: "Health",

    engagement: "Integrated Health Information System",

    services: [
      "Digital Transformation",
      "Systems Development",
      "Programme Delivery",
      "ICT Advisory",
    ],

    summary:
      "Integrated health information system engagement supporting digital health information management and county-level health service operations.",

    context:
      "County health systems require reliable information to support service delivery, facility operations, reporting and management. Digital health information systems can connect information flows across facilities and administrative functions.",

    challenge:
      "The engagement required an integrated information environment capable of supporting health-sector information management across county operations and contributing to more structured digital health processes.",

    engagementDetail:
      "WilCom supported the implementation of an Integrated Health Management Information System for the County Government of Nandi. The engagement demonstrates experience in public-sector digital transformation, health information systems, implementation support and user-oriented technology deployment.",

    deliveryFocus: [
      "Health information systems",
      "Digital health transformation",
      "Systems implementation",
      "User training and support",
      "Information management",
      "Programme delivery",
    ],

    /**
     * This is intentionally an official project reference rather
     * than a fabricated standalone HMIS application URL.
     */
    onlineUrl:
      "https://nandi.go.ke/news/health-management-information-system-roll-out-begins-as-new-website-is-unveiled/",

    onlineLabel: "View official project reference",

    onlineType: "project-reference",
  },

  {
    id: "REF 11",
    slug: "ppra-online-administrative-review-case-management-system",

    title: "Online Administrative Review Case Management System",

    client: "Public Procurement Regulatory Authority",

    sector: "Procurement & Regulatory",

    engagement: "Regulatory Case Management System",

    services: [
      "Systems Development",
      "Digital Transformation",
      "ICT Advisory",
      "Programme Delivery",
    ],

    summary:
      "Online case management system supporting administrative review processes within the public procurement regulatory environment.",

    context:
      "Regulatory institutions require structured digital systems to manage cases, information, workflow, documentation and stakeholder interactions. Case management platforms can provide a common operational environment for managing complex administrative processes.",

    challenge:
      "The engagement required a web-based case management environment aligned with administrative review workflows and the information requirements of a public procurement regulatory institution.",

    engagementDetail:
      "WilCom contributed to the development and implementation of the Online Administrative Review Case Management System for PPRA. The engagement demonstrates experience in workflow-driven systems, regulatory technology, case management, digital public services and enterprise application delivery.",

    deliveryFocus: [
      "Case management",
      "Workflow automation",
      "Regulatory technology",
      "Web application development",
      "Document and information management",
      "Digital service delivery",
    ],

    onlineUrl: "https://arcms.ppra.go.ke/",

    onlineLabel: "Open ARCMS",

    onlineType: "live-system",
  },

  {
    id: "REF 12",
    slug: "public-procurement-information-portal",

    title: "Public Procurement Information Portal",

    client: "Public Procurement Regulatory Authority",

    sector: "Procurement & Regulatory",

    engagement: "Digital Public Information Platform",

    services: [
      "Digital Transformation",
      "Systems Development",
      "ICT Advisory",
      "Quality Assurance & Security",
    ],

    summary:
      "Public procurement information platform supporting publication and access to procurement information, contract awards and related public-sector procurement data.",

    context:
      "Public procurement requires transparency, reporting and accessible information. Digital procurement information platforms provide an important mechanism for publishing procurement-related information and supporting public access.",

    challenge:
      "The engagement required a platform capable of managing and presenting procurement information to public-sector institutions, suppliers, oversight stakeholders and members of the public.",

    engagementDetail:
      "WilCom's experience includes development and delivery within the Public Procurement Information Portal environment for PPRA. The engagement demonstrates capability in public information systems, regulatory technology, data-driven platforms and digital transparency initiatives.",

    deliveryFocus: [
      "Public procurement information",
      "Digital transparency",
      "Information publication",
      "Data-driven platforms",
      "Regulatory systems",
      "Public-sector digital services",
    ],

    onlineUrl: "https://tenders.go.ke/",

    onlineLabel: "Visit Public Procurement Information Portal",

    onlineType: "live-system",
  },

  {
    id: "REF 13",
    slug: "sim-box-fraud-detector",

    title: "SIM Box Fraud Detector",

    client: "Communications Authority of Kenya",

    sector: "ICT & Telecommunications",

    engagement: "ICT Monitoring & Security Solution",

    services: [
      "Systems Development",
      "Quality Assurance & Security",
      "ICT Advisory",
      "Digital Transformation",
    ],

    summary:
      "Specialised technology solution addressing SIM box fraud detection and telecommunications monitoring requirements.",

    context:
      "Telecommunications environments generate complex operational and regulatory challenges, including the need to identify anomalous traffic and activities that can undermine network integrity and service ecosystems.",

    challenge:
      "The engagement required a technology-enabled approach to identifying and supporting investigation of SIM box-related fraudulent activity within a telecommunications regulatory environment.",

    engagementDetail:
      "WilCom's project experience includes development of a SIM Box Fraud Detector for the Communications Authority of Kenya. The engagement demonstrates specialised systems development capability applied to telecommunications monitoring, fraud detection and regulatory technology.",

    deliveryFocus: [
      "Fraud detection",
      "Telecommunications monitoring",
      "Specialised software development",
      "Data analysis",
      "Regulatory technology",
      "Security-oriented systems",
    ],
  },

  {
    id: "REF 15",
    slug: "network-monitoring-software",

    title: "Network Monitoring Software",

    client: "Communications Authority of Kenya",

    sector: "ICT & Telecommunications",

    engagement: "Network Monitoring & Systems Development",

    services: [
      "Systems Development",
      "ICT Infrastructure & Integration",
      "ICT Advisory",
      "Quality Assurance & Security",
    ],

    summary:
      "Network monitoring software engagement supporting visibility and management of telecommunications and ICT network environments.",

    context:
      "Network-dependent organisations require visibility into infrastructure performance, availability and operational conditions. Monitoring capabilities provide information needed to identify issues and support effective technical management.",

    challenge:
      "The engagement required software capability to support network monitoring within a telecommunications regulatory and operational environment.",

    engagementDetail:
      "WilCom developed network monitoring software for the Communications Authority of Kenya. The project demonstrates the integration of software development, network technology, systems monitoring and ICT advisory capabilities.",

    deliveryFocus: [
      "Network monitoring",
      "Systems monitoring",
      "Network visibility",
      "ICT infrastructure",
      "Software development",
      "Operational technology support",
    ],
  },

  {
    id: "REF 16",
    slug: "rfid-file-management-system",

    title: "RFID File Management System",

    client: "Communications Authority of Kenya",

    sector: "ICT & Telecommunications",

    engagement: "Information & Records Management System",

    services: [
      "Systems Development",
      "Digital Transformation",
      "ICT Infrastructure & Integration",
      "ICT Advisory",
    ],

    summary:
      "RFID-enabled file management solution supporting structured tracking and management of physical records.",

    context:
      "Large organisations handling significant volumes of physical records require reliable mechanisms for tracking, locating and managing files. RFID can provide a technology layer for improving visibility over physical information assets.",

    challenge:
      "The engagement required a technology-enabled file management approach that could connect physical records with a structured digital tracking environment.",

    engagementDetail:
      "WilCom delivered an RFID File Management System for the Communications Authority of Kenya. The engagement demonstrates the combination of software development, information management, RFID technology and institutional process improvement.",

    deliveryFocus: [
      "RFID technology",
      "File tracking",
      "Records management",
      "Information systems",
      "Hardware and software integration",
      "Operational process improvement",
    ],
  },
];

/**
 * ---------------------------------------------------------------------------
 * DERIVED FILTER OPTIONS
 * ---------------------------------------------------------------------------
 *
 * These helpers make the experience page independent of hard-coded
 * filter lists. If a project is added later, the available sector,
 * engagement or service filters update automatically.
 */

export const SECTORS = Array.from(
  new Set(projects.map((project) => project.sector)),
).sort();

export const ENGAGEMENT_TYPES = Array.from(
  new Set(projects.map((project) => project.engagement)),
).sort();

/**
 * All services represented in the actual project portfolio.
 *
 * This is useful if you want the experience page to distinguish
 * the full WilCom service catalogue from the services demonstrated
 * by the portfolio.
 */
export const EXPERIENCE_SERVICES = Array.from(
  new Set(projects.flatMap((project) => project.services)),
).sort();

/**
 * ---------------------------------------------------------------------------
 * LOOKUP HELPERS
 * ---------------------------------------------------------------------------
 */

/**
 * Find a project by its internal reference ID.
 *
 * Example:
 * getProjectById("REF 01")
 */
export function getProjectById(
  id: string,
): ExperienceProject | undefined {
  return projects.find((project) => project.id === id);
}

/**
 * Find a project by URL slug.
 *
 * Used by:
 * /experience/[slug]
 */
export function getProjectBySlug(
  slug: string,
): ExperienceProject | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Return all projects belonging to a sector.
 */
export function getProjectsBySector(
  sector: string,
): ExperienceProject[] {
  return projects.filter((project) => project.sector === sector);
}

/**
 * Return all projects associated with a particular service.
 */
export function getProjectsByService(
  service: Service,
): ExperienceProject[] {
  return projects.filter((project) =>
    project.services.includes(service),
  );
}

/**
 * Return all projects belonging to an engagement type.
 */
export function getProjectsByEngagement(
  engagement: string,
): ExperienceProject[] {
  return projects.filter(
    (project) => project.engagement === engagement,
  );
}

/**
 * Return only projects that have an external online representation.
 */
export function getProjectsWithOnlineRepresentation(): ExperienceProject[] {
  return projects.filter(
    (project) =>
      Boolean(project.onlineUrl) &&
      Boolean(project.onlineLabel),
  );
}

/**
 * Return projects that point to a live or client-facing system.
 *
 * This allows the UI to distinguish actual current platforms
 * from project-reference pages.
 */
export function getLiveProjects(): ExperienceProject[] {
  return projects.filter(
    (project) =>
      project.onlineType === "live-system" ||
      project.onlineType === "client-platform",
  );
}

/**
 * ---------------------------------------------------------------------------
 * EXPERIENCE SUMMARY
 * ---------------------------------------------------------------------------
 *
 * Useful for homepage statistics or portfolio summary components.
 */

export const EXPERIENCE_STATS = {
  totalProjects: projects.length,

  sectors: SECTORS.length,

  servicesDemonstrated: EXPERIENCE_SERVICES.length,

  onlineRepresentations:
    getProjectsWithOnlineRepresentation().length,

  liveSystems:
    getLiveProjects().length,
} as const;

/**
 * ---------------------------------------------------------------------------
 * EXPERIENCE THEMES
 * ---------------------------------------------------------------------------
 *
 * These are not projects. They are recurring capability themes that
 * can be displayed on /experience without turning the page into
 * another services page.
 */

export const EXPERIENCE_THEMES = [
  {
    title: "Consult & Assess",
    description:
      "Understand institutional requirements, operational challenges, ICT needs, information environments and programme priorities before defining the intervention.",
    capabilities: [
      "Management consulting",
      "Needs assessment",
      "ICT advisory",
      "Process assessment",
      "Information management",
    ],
  },

  {
    title: "Design & Architect",
    description:
      "Translate requirements into practical operating models, solution architectures, digital platforms, systems and implementation approaches.",
    capabilities: [
      "Solution design",
      "Systems architecture",
      "Digital service design",
      "Information architecture",
      "Implementation planning",
    ],
  },

  {
    title: "Develop & Integrate",
    description:
      "Build and integrate fit-for-purpose systems that connect people, processes, information and technology.",
    capabilities: [
      "Systems development",
      "Web applications",
      "Management information systems",
      "Enterprise platforms",
      "Technology integration",
    ],
  },

  {
    title: "Assure & Secure",
    description:
      "Apply quality assurance, security and control considerations throughout technology and digital transformation engagements.",
    capabilities: [
      "Quality assurance",
      "Security assessment",
      "System controls",
      "Risk identification",
      "Technology assurance",
    ],
  },

  {
    title: "Build Capacity",
    description:
      "Support people and institutions to adopt new systems, processes and ways of working through structured training and knowledge transfer.",
    capabilities: [
      "Capacity building",
      "Training",
      "ODeL support",
      "User enablement",
      "Knowledge transfer",
    ],
  },

  {
    title: "Deliver & Sustain",
    description:
      "Support implementation, integration, operational readiness and the transition from project delivery into sustainable institutional capability.",
    capabilities: [
      "Programme delivery",
      "Implementation support",
      "Systems deployment",
      "Operational readiness",
      "Sustainability support",
    ],
  },
] as const;

/**
 * ---------------------------------------------------------------------------
 * SECTOR DESCRIPTIONS
 * ---------------------------------------------------------------------------
 *
 * These provide a consistent narrative layer for the sector pages/cards.
 */

export const EXPERIENCE_SECTORS = [
  {
    name: "Government & Public Institutions",

    description:
      "Supporting public institutions with institutional advisory, digital transformation, information management, ICT planning and technology-enabled service delivery.",

    capabilities: [
      "Institutional advisory",
      "ICT needs assessment",
      "Digital public services",
      "Information management",
      "Systems development",
      "Programme delivery",
    ],
  },

  {
    name: "Education & TVET",

    description:
      "Supporting education and training institutions through management information systems, digital learning, capacity building and technology-enabled programme delivery.",

    capabilities: [
      "TVET systems",
      "Management information systems",
      "Digital learning",
      "Trainer capacity building",
      "Assessment support",
      "Programme implementation",
    ],
  },

  {
    name: "Procurement & Regulatory",

    description:
      "Delivering technology and advisory capabilities for regulatory institutions, procurement information, case management and digital transparency.",

    capabilities: [
      "Regulatory systems",
      "Case management",
      "Procurement information",
      "Digital transparency",
      "Workflow systems",
      "Quality assurance",
    ],
  },

  {
    name: "Health",

    description:
      "Supporting health-sector institutions with integrated information systems, digital transformation and implementation support.",

    capabilities: [
      "Health information systems",
      "Digital transformation",
      "Systems implementation",
      "Information management",
      "User enablement",
      "Programme delivery",
    ],
  },

  {
    name: "Tourism & Public Services",

    description:
      "Applying digital platforms and information systems to improve access to tourism information, services and stakeholder-facing public channels.",

    capabilities: [
      "Digital public services",
      "Tourism platforms",
      "Web systems",
      "Information architecture",
      "Stakeholder services",
      "Digital transformation",
    ],
  },

  {
    name: "ICT & Telecommunications",

    description:
      "Combining software development, network technologies, monitoring, security and specialised systems to address telecommunications and ICT-sector requirements.",

    capabilities: [
      "Network monitoring",
      "Specialised software",
      "Fraud detection",
      "ICT infrastructure",
      "Security-oriented systems",
      "Technology integration",
    ],
  },

  {
    name: "Private Sector & Enterprise Development",

    description:
      "Supporting enterprise and SME development through capacity building, practical advisory support and programme-oriented interventions.",

    capabilities: [
      "SME capacity building",
      "Enterprise development",
      "Management advisory",
      "Training",
      "Programme delivery",
      "Knowledge transfer",
    ],
  },
] as const;

/**
 * ---------------------------------------------------------------------------
 * OPTIONAL SEARCH HELPERS
 * ---------------------------------------------------------------------------
 */

/**
 * Simple case-insensitive project search.
 *
 * Useful if /experience later gets a search box.
 */
export function searchProjects(
  query: string,
): ExperienceProject[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return projects;
  }

  return projects.filter((project) => {
    const searchableContent = [
      project.id,
      project.title,
      project.client,
      project.sector,
      project.engagement,
      project.summary,
      project.context,
      project.challenge,
      project.engagementDetail,
      ...project.services,
      ...project.deliveryFocus,
    ]
      .join(" ")
      .toLowerCase();

    return searchableContent.includes(normalizedQuery);
  });
}

/**
 * Combined portfolio filtering helper.
 *
 * Empty values are treated as "all".
 *
 * Example:
 *
 * filterProjects({
 *   sector: "Education & TVET",
 *   service: "Systems Development",
 * })
 */
export function filterProjects(filters: {
  sector?: string;
  engagement?: string;
  service?: Service | string;
}): ExperienceProject[] {
  return projects.filter((project) => {
    const matchesSector =
      !filters.sector ||
      filters.sector === "All" ||
      project.sector === filters.sector;

    const matchesEngagement =
      !filters.engagement ||
      filters.engagement === "All" ||
      project.engagement === filters.engagement;

    const matchesService =
      !filters.service ||
      filters.service === "All" ||
      project.services.includes(filters.service as Service);

    return (
      matchesSector &&
      matchesEngagement &&
      matchesService
    );
  });
}