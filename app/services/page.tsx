import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/fade-in";

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

const services = [
  {
    slug: "management-consulting",
    number: "01",
    title: "Management Consulting",
    summary:
      "Advisory services that help organizations understand challenges, strengthen processes, improve performance and make informed decisions.",
    items: [
      "Organizational and institutional assessments",
      "Business process analysis and improvement",
      "Management systems and operational advisory",
      "Strategy development and implementation support",
      "Change management and transformation advisory",
      "Performance improvement frameworks",
    ],
  },
  {
    slug: "digital-transformation",
    number: "02",
    title: "Digital Transformation",
    summary:
      "Practical digital transformation programmes that connect people, processes, information and technology to improve organizational performance.",
    items: [
      "Digital transformation assessments",
      "Digital strategy and roadmaps",
      "Business process digitization",
      "Enterprise application transformation",
      "Digital service delivery",
      "Technology-enabled operational improvement",
    ],
  },
  {
    slug: "systems-development",
    number: "03",
    title: "Systems Development",
    summary:
      "Design and development of fit-for-purpose information systems aligned to organizational processes, users and institutional requirements.",
    items: [
      "Web-based information systems",
      "Management information systems",
      "Portals and digital service platforms",
      "Workflow and case management systems",
      "Database design and integration",
      "API and systems integration",
      "Legacy system modernization",
    ],
  },
  {
    slug: "ict-advisory",
    number: "04",
    title: "ICT Advisory",
    summary:
      "Independent ICT advisory that helps organizations assess their technology environment, define priorities and make sustainable technology decisions.",
    items: [
      "ICT needs assessments",
      "ICT strategy and roadmap development",
      "Enterprise architecture advisory",
      "Infrastructure and network assessments",
      "Technology options analysis",
      "ICT governance and policy advisory",
      "Procurement and technical specifications support",
    ],
  },
  {
    slug: "quality-assurance",
    number: "05",
    title: "Quality Assurance & Security",
    summary:
      "Independent assurance activities that help organizations improve the quality, reliability, security and resilience of digital systems.",
    items: [
      "Systems quality assurance",
      "Software and application testing",
      "Technical assessments and audits",
      "Information security assessments",
      "Cybersecurity advisory",
      "Systems controls and compliance reviews",
      "Implementation quality monitoring",
    ],
  },
  {
    slug: "capacity-building",
    number: "06",
    title: "Capacity Building",
    summary:
      "Structured training and knowledge-transfer programmes designed to strengthen institutional capability and enable sustainable adoption of new systems and practices.",
    items: [
      "Training needs assessments",
      "Technical and professional training",
      "Digital skills development",
      "Systems user training",
      "Trainer and facilitator development",
      "Curriculum and learning content support",
      "Knowledge-transfer programmes",
    ],
  },
  {
    slug: "programme-delivery",
    number: "07",
    title: "Programme Delivery",
    summary:
      "End-to-end support for complex assignments, combining consulting, technology, coordination and implementation expertise.",
    items: [
      "Programme and project implementation support",
      "Implementation planning",
      "Stakeholder coordination",
      "Technical coordination",
      "Monitoring and reporting",
      "Implementation quality assurance",
      "Transition and sustainability planning",
    ],
  },
  {
    slug: "ict-infrastructure",
    number: "08",
    title: "ICT Infrastructure & Integration",
    summary:
      "Technology infrastructure and integration services supporting secure, reliable and effective digital environments.",
    items: [
      "Network design and implementation",
      "Structured cabling and connectivity",
      "Server and infrastructure environments",
      "Systems and infrastructure integration",
      "IP-based communications",
      "Security and access-control technologies",
      "Infrastructure assessment and optimization",
    ],
  },
];

const solutionAreas = [
  {
    title: "Digital Platforms",
    description:
      "Web-based platforms, portals, management information systems and digital services designed around institutional workflows.",
  },
  {
    title: "Enterprise Systems",
    description:
      "Integrated systems supporting administration, records, finance, operations, reporting, service delivery and decision-making.",
  },
  {
    title: "ICT & Infrastructure",
    description:
      "Networks, connectivity, infrastructure and technology environments that provide the foundation for reliable digital operations.",
  },
  {
    title: "Information Security",
    description:
      "Security assessment, quality assurance and technology controls designed to strengthen the protection and reliability of information systems.",
  },
  {
    title: "Institutional Capacity",
    description:
      "Training, knowledge transfer and organizational support that enable institutions and teams to sustain improvements.",
  },
  {
    title: "Digital Public Services",
    description:
      "Technology-enabled solutions that support government, county, education, health and other public-facing services.",
  },
];

const deliveryPrinciples = [
  {
    title: "Understand Before We Design",
    description:
      "We begin by understanding the institution, its users, processes, constraints and intended outcomes.",
  },
  {
    title: "Fit-for-Purpose Solutions",
    description:
      "We focus on practical solutions that respond to the actual requirements of the organization rather than technology for its own sake.",
  },
  {
    title: "Integrated Expertise",
    description:
      "Consulting, technology, quality assurance and capacity building are brought together where an assignment requires multiple capabilities.",
  },
  {
    title: "Knowledge Transfer",
    description:
      "Our delivery approach emphasizes institutional ownership, user capability and sustainable adoption.",
  },
  {
    title: "Quality & Security",
    description:
      "Quality assurance and security considerations are incorporated throughout the delivery lifecycle.",
  },
  {
    title: "Measurable Outcomes",
    description:
      "We align assignments with practical improvements in efficiency, service delivery, capability and organizational performance.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 py-24 md:py-28">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn y={30}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400 mb-5">
              Our Services
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-7">
              Consulting, Technology &amp;{" "}
              <span className="text-brand-600 dark:text-brand-400">
                Transformation
              </span>
            </h1>
          </FadeIn>

          <FadeIn y={20} delay={0.15}>
            <p className="text-lg md:text-xl text-ink-600 dark:text-ink-300 leading-relaxed max-w-3xl mx-auto">
              WilCom combines development and management consulting with
              technology expertise to help organizations improve systems,
              strengthen institutional capability and deliver sustainable
              outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service overview */}
      <section className="px-6 py-12 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <FadeIn y={20}>
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600 dark:text-brand-400 mb-3">
                What We Do
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Integrated capabilities for complex assignments
              </h2>

              <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                Our services can be delivered independently or combined into
                an integrated assignment, depending on the needs, scope and
                objectives of the client.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={(i % 2) * 0.08}>
                <div
                  id={service.slug}
                  className="h-full bg-white dark:bg-ink-950 p-7 md:p-8 rounded-2xl border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition scroll-mt-24"
                >
                  <div className="flex items-start justify-between gap-5 mb-5">
                    <div>
                      <span className="text-xs font-semibold tracking-[0.15em] text-brand-600 dark:text-brand-400">
                        {service.number}
                      </span>

                      <h3 className="text-2xl font-bold mt-2">
                        {service.title}
                      </h3>
                    </div>

                    <span className="text-ink-300 dark:text-ink-700 text-3xl font-light">
                      +
                    </span>
                  </div>

                  <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  <ul className="space-y-2.5 text-sm text-ink-600 dark:text-ink-300">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-brand-600 dark:text-brand-400 mt-0.5">
                          →
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How we combine our capabilities */}
      <section className="px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn y={20}>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600 dark:text-brand-400 mb-3">
                Integrated Expertise
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                More than individual services
              </h2>

              <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                Many organizational challenges sit across strategy, processes,
                people and technology. WilCom brings these dimensions together
                to support assignments from diagnosis through implementation
                and institutional handover.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionAreas.map((area, i) => (
              <FadeIn key={area.title} delay={(i % 3) * 0.08}>
                <div className="h-full p-7 rounded-xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900/60">
                  <div className="w-9 h-9 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-700 dark:text-brand-300 font-semibold mb-5">
                    {i + 1}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>

                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technology as an enabler */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeIn y={20}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600 dark:text-brand-400 mb-4">
                Technology as an Enabler
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We use technology to solve organizational problems
              </h2>

              <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-5">
                Technology is most effective when it is connected to clear
                institutional objectives. Our work therefore starts with the
                problem, process or opportunity before determining the
                appropriate technology response.
              </p>

              <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                This approach allows us to support assignments involving
                digital platforms, information systems, ICT infrastructure,
                process automation, security, data and organizational
                capability without reducing the engagement to a technology
                procurement exercise.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Assessment",
                "Strategy",
                "Design",
                "Development",
                "Integration",
                "Quality Assurance",
                "Training",
                "Sustainability",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white dark:bg-ink-950 rounded-xl border border-ink-200 dark:border-ink-800 p-5"
                >
                  <span className="text-brand-600 dark:text-brand-400 text-sm font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Legacy technical capabilities, reframed */}
      <section className="px-6 py-20 md:py-24 max-w-6xl mx-auto">
        <FadeIn y={20}>
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600 dark:text-brand-400 mb-3">
              Technical Capabilities
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Technology delivery when the assignment requires it
            </h2>

            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
              Our technical capability includes the design, integration and
              support of digital and ICT environments. These capabilities
              complement our consulting and transformation work.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Networks & Connectivity",
              items: [
                "LAN design and implementation",
                "Structured cabling",
                "Fiber connectivity",
                "Network infrastructure",
                "IP communications",
              ],
            },
            {
              title: "Digital & Enterprise Systems",
              items: [
                "Web applications",
                "Management information systems",
                "Portals and dashboards",
                "Database solutions",
                "Systems integration",
              ],
            },
            {
              title: "Security & Controls",
              items: [
                "Security systems",
                "Access control",
                "Information security",
                "Technical audits",
                "Quality assurance",
              ],
            },
          ].map((capability, i) => (
            <FadeIn key={capability.title} delay={i * 0.1}>
              <div className="h-full bg-white dark:bg-ink-900 p-7 rounded-xl border border-ink-200 dark:border-ink-800">
                <h3 className="text-xl font-bold text-brand-600 dark:text-brand-400 mb-5">
                  {capability.title}
                </h3>

                <ul className="space-y-3 text-sm text-ink-600 dark:text-ink-300">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-brand-600 dark:text-brand-400">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Delivery principles */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <FadeIn y={20}>
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600 dark:text-brand-400 mb-3">
                How We Work
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Principles that shape our delivery
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryPrinciples.map((principle, i) => (
              <FadeIn key={principle.title} delay={(i % 3) * 0.08}>
                <div className="h-full bg-white dark:bg-ink-950 p-7 rounded-xl border border-ink-200 dark:border-ink-800">
                  <h3 className="text-lg font-bold mb-3">
                    {principle.title}
                  </h3>

                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement flow */}
      <section className="px-6 py-20 md:py-24 max-w-5xl mx-auto">
        <FadeIn y={20}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600 dark:text-brand-400 mb-3">
              From Need to Outcome
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Our services connect across the assignment lifecycle
            </h2>

            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
              Depending on the engagement, WilCom can support an organization
              from initial assessment and solution design through implementation,
              capacity building, quality assurance and sustainability.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Understand",
            "Design",
            "Implement",
            "Sustain",
          ].map((stage, i) => (
            <FadeIn key={stage} delay={i * 0.08}>
              <div className="relative text-center">
                <div className="bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-xl p-6">
                  <span className="block text-xs font-semibold text-brand-600 dark:text-brand-400 mb-2">
                    0{i + 1}
                  </span>

                  <span className="font-bold">{stage}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn y={20} delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold hover:underline"
            >
              Explore our approach
              <span>→</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn y={20}>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600 dark:text-brand-400 mb-4">
              Let&apos;s Work Together
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Have a challenge to solve?
            </h2>
          </FadeIn>

          <FadeIn y={20} delay={0.15}>
            <p className="text-ink-600 dark:text-ink-300 mb-8 leading-relaxed">
              Tell us about your organization, programme or project. We can
              explore the problem with you and identify an appropriate
              consulting, technology or delivery response.
            </p>
          </FadeIn>

          <FadeIn y={20} delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-brand-600 hover:bg-brand-700 transition px-8 py-3 rounded-lg font-semibold text-white"
              >
                Start a Conversation
              </Link>

              <Link
                href="/experience"
                className="border border-ink-300 dark:border-ink-700 hover:border-brand-500 transition px-8 py-3 rounded-lg font-semibold text-ink-800 dark:text-ink-200"
              >
                View Our Experience
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}