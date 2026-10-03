import type { Metadata } from "next";
import Link from "next/link";

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

const sectors = [
  {
    icon: "🏛️",
    title: "Government & Public Institutions",
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
  },
  {
    icon: "🎓",
    title: "Education & TVET",
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
  },
  {
    icon: "⚖️",
    title: "Regulatory & Oversight Institutions",
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
  },
  {
    icon: "🌍",
    title: "Development Programmes & NGOs",
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
  },
  {
    icon: "🏦",
    title: "Financial Services",
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
  },
  {
    icon: "🛒",
    title: "Retail & Commercial Organizations",
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
  },
  {
    icon: "🏨",
    title: "Hospitality & Service Organizations",
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
  },
  {
    icon: "🏭",
    title: "Industry, Manufacturing & Logistics",
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
  },
];

const deliveryStages = [
  {
    number: "01",
    title: "Understand the Problem",
    description:
      "We begin with the institution, business or programme challenge rather than a predetermined technology product.",
  },
  {
    number: "02",
    title: "Assess the Current State",
    description:
      "We examine processes, systems, people, information, infrastructure and institutional requirements to establish what is working and what needs to change.",
  },
  {
    number: "03",
    title: "Design the Response",
    description:
      "We translate findings into a practical solution, implementation approach and delivery roadmap aligned to the organization's objectives.",
  },
  {
    number: "04",
    title: "Develop & Implement",
    description:
      "Where technology is required, we develop, configure, integrate and implement solutions around the organization's real operating environment.",
  },
  {
    number: "05",
    title: "Build Capability",
    description:
      "We equip users and institutions with the knowledge, skills and processes required to adopt and sustain the solution.",
  },
  {
    number: "06",
    title: "Assure & Sustain",
    description:
      "Quality assurance, security, support and continuous improvement help ensure that the intervention continues to deliver value.",
  },
];

export default function SectorsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto text-center">
        <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Sectors & Institutional Context
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-5xl mx-auto">
          Solving Problems Across{" "}
          <span className="text-brand-600 dark:text-brand-400">
            Different Operating Environments
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-ink-600 dark:text-ink-300 leading-relaxed">
          WilCom works with institutions, businesses and development
          organizations to understand challenges, assess existing capabilities,
          design practical responses and support delivery.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            "Consulting & Assessment",
            "Digital Transformation",
            "Systems Development",
            "ICT Advisory",
            "Quality & Security",
            "Capacity Building",
            "Programme Delivery",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 text-sm font-medium text-ink-700 dark:text-ink-200"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Problem solving model */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Role
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              From institutional challenge to service delivery
            </h2>

            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
              Sector knowledge matters because the same technology can solve
              very different problems in different environments. Our work
              therefore starts with understanding the organization, its
              processes, people, systems and objectives before determining the
              appropriate intervention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Understand",
                text: "Establish the problem, institutional context, stakeholders, processes and desired outcomes.",
              },
              {
                title: "Transform",
                text: "Translate evidence and requirements into practical organizational, process and technology solutions.",
              },
              {
                title: "Deliver",
                text: "Support implementation, capacity building, quality assurance and sustained adoption.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-ink-900 p-7 rounded-xl border border-ink-200 dark:border-ink-800"
              >
                <h3 className="text-xl font-bold text-brand-600 dark:text-brand-400 mb-3">
                  {item.title}
                </h3>

                <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Where We Work
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Sector context shapes the solution
          </h2>

          <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
            Our experience spans public institutions, education, development
            programmes and commercial organizations. Across these environments,
            our role is to connect organizational needs with practical
            interventions that can be implemented and sustained.
          </p>
        </div>

        <div className="space-y-8">
          {sectors.map((sector) => (
            <article
              key={sector.title}
              className="rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 overflow-hidden"
            >
              <div className="p-7 md:p-9">
                <div className="flex flex-col md:flex-row gap-7">
                  <div className="md:w-20 shrink-0">
                    <div className="text-4xl">{sector.icon}</div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {sector.title}
                    </h3>

                    <p className="text-ink-600 dark:text-ink-300 leading-relaxed max-w-4xl mb-8">
                      {sector.description}
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-900 dark:text-white mb-4">
                          Typical Challenges
                        </h4>

                        <ul className="space-y-3">
                          {sector.problems.map((problem) => (
                            <li
                              key={problem}
                              className="flex items-start gap-3 text-sm text-ink-600 dark:text-ink-300"
                            >
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-600 shrink-0" />
                              <span>{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-900 dark:text-white mb-4">
                          How We Can Help
                        </h4>

                        <ul className="space-y-3">
                          {sector.capabilities.map((capability) => (
                            <li
                              key={capability}
                              className="flex items-start gap-3 text-sm text-ink-600 dark:text-ink-300"
                            >
                              <span className="text-brand-600 dark:text-brand-400 font-bold">
                                ✓
                              </span>
                              <span>{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Delivery model */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Delivery Model
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              A practical path from problem to delivery
            </h2>

            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
              Regardless of sector, our engagements are structured around
              understanding the problem, building evidence, designing the
              response and supporting implementation through to sustainable
              use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryStages.map((stage) => (
              <div
                key={stage.number}
                className="bg-white dark:bg-ink-900 p-7 rounded-xl border border-ink-200 dark:border-ink-800"
              >
                <div className="text-brand-600 dark:text-brand-400 text-sm font-bold tracking-widest mb-4">
                  {stage.number}
                </div>

                <h3 className="text-xl font-bold mb-3">{stage.title}</h3>

                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience link */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Evidence of Delivery
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Our sector experience is backed by real assignments
            </h2>

            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
              Our experience includes consulting and assessment, digital
              transformation, systems development, quality assurance, capacity
              building and technology-enabled institutional improvement across
              public and private environments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
            <Link
              href="/experience"
              className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 transition px-7 py-3 rounded-lg font-semibold text-white"
            >
              Explore Our Experience
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-ink-300 dark:border-ink-700 hover:border-brand-500 transition px-7 py-3 rounded-lg font-semibold"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Start With the Challenge
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Have a problem that needs to move toward a solution?
          </h2>

          <p className="text-ink-600 dark:text-ink-300 mb-8 leading-relaxed">
            Tell us what you are trying to achieve, where the challenge sits,
            and what needs to improve. We can help assess the situation and
            shape a practical path toward delivery.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-brand-600 hover:bg-brand-700 transition px-8 py-3 rounded-lg font-semibold text-white"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}