import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How WilCom Systems delivers technology projects in Kenya — from discovery and solution design to deployment, training, and ongoing support. A proven, structured methodology.",
  alternates: {
    canonical: "https://wilcom.co.ke/approach",
  },
  openGraph: {
    title: "Our Approach | WilCom Systems Limited",
    description:
      "A proven, structured methodology for delivering ICT, security, POS, and software projects across Kenya.",
    url: "https://wilcom.co.ke/approach",
  },
};

export const revalidate = 3600;

const phases = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your business objectives, operational constraints, and existing infrastructure. This phase includes site surveys, stakeholder interviews, and a technical audit of your current environment.",
    deliverables: [
      "Requirements document",
      "Site survey report",
      "Gap analysis",
    ],
  },
  {
    step: "02",
    title: "Solution Design",
    description:
      "Our engineers design a solution tailored to your needs — not a generic template. We specify hardware, software, network topology, and integration points, then present a clear scope with pricing.",
    deliverables: [
      "Technical architecture",
      "Bill of materials",
      "Implementation timeline",
    ],
  },
  {
    step: "03",
    title: "Procurement & Staging",
    description:
      "We source hardware from vetted suppliers, configure and stage equipment in our lab, and test integrations before anything reaches your site. This minimizes disruption and deployment risk.",
    deliverables: [
      "Configured hardware",
      "Pre-deployment test results",
      "Delivery schedule",
    ],
  },
  {
    step: "04",
    title: "Deployment & Integration",
    description:
      "Our field team installs, configures, and integrates the solution on-site. We work around your operating hours to avoid downtime, and we document every step of the rollout.",
    deliverables: [
      "Installed solution",
      "As-built documentation",
      "Integration test report",
    ],
  },
  {
    step: "05",
    title: "Training & Handover",
    description:
      "We train your staff on day-to-day operation and provide administrator-level training for internal IT teams. Every deployment includes user manuals and quick-reference guides.",
    deliverables: [
      "User training sessions",
      "Admin training",
      "Manuals & guides",
    ],
  },
  {
    step: "06",
    title: "Support & Continuous Improvement",
    description:
      "Our relationship doesn't end at go-live. We provide responsive after-sales support, preventive maintenance, and periodic reviews to ensure the solution continues to meet your needs.",
    deliverables: [
      "SLA-based support",
      "Maintenance schedule",
      "Quarterly reviews",
    ],
  },
];

const principles = [
  {
    icon: "🎯",
    title: "Business-First Thinking",
    description:
      "Technology is a means, not an end. Every recommendation we make is tied to a measurable business outcome.",
  },
  {
    icon: "🔍",
    title: "Transparency",
    description:
      "Clear scopes, honest timelines, and no hidden costs. You know exactly what you're getting and when.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description:
      "We work alongside your team, not around them. Your input shapes the solution at every stage.",
  },
  {
    icon: "📈",
    title: "Measurable Results",
    description:
      "We define success criteria upfront and report against them — uptime, efficiency gains, cost savings.",
  },
  {
    icon: "🔒",
    title: "Security by Design",
    description:
      "Security is built into every layer of our solutions, from network design to application code.",
  },
  {
    icon: "🔄",
    title: "Long-Term Partnership",
    description:
      "We invest in relationships, not transactions. Most of our clients have worked with us for years.",
  },
];

export default function ApproachPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto text-center">
        <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Methodology
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl mx-auto">
          Our <span className="text-brand-600 dark:text-brand-400">Approach</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-ink-600 dark:text-ink-300">
          Every project we deliver follows a structured, six-phase methodology
          refined over 15+ years. It's how we ensure solutions work on day one
          — and continue working years later.
        </p>
      </section>

      {/* Phases */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Six-Phase Delivery Process
          </h2>
          <div className="space-y-6">
            {phases.map((phase) => (
              <div
                key={phase.step}
                className="bg-white dark:bg-ink-900 p-6 md:p-8 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-24 shrink-0">
                    <span className="text-4xl md:text-5xl font-extrabold text-brand-600 dark:text-brand-400">
                      {phase.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-4">
                      {phase.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-6 py-20 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Guiding Principles
        </h2>
        <p className="text-center text-ink-500 dark:text-ink-400 max-w-3xl mx-auto mb-12">
          These principles shape how we engage with every client, on every project.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="h-full bg-white dark:bg-ink-900 p-6 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition"
            >
              <div className="text-3xl mb-3">{principle.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-brand-600 dark:text-brand-400">
                {principle.title}
              </h3>
              <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See the Process in Action
          </h2>
          <p className="text-ink-600 dark:text-ink-300 mb-8">
            Let's walk through how our approach applies to your specific project.
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