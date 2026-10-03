import type { Metadata } from "next";
import Link from "next/link";

import FadeIn from "../components/fade-in";

export const metadata: Metadata = {
  title: "Our Approach | WilCom Systems Limited",
  description:
    "WilCom Systems' structured approach to development consulting, digital transformation, ICT advisory, systems implementation, quality assurance, capacity building, and programme delivery.",
  alternates: {
    canonical: "https://wilcom.co.ke/approach",
  },
  openGraph: {
    title: "Our Approach | WilCom Systems Limited",
    description:
      "A structured methodology for delivering development, management consulting, digital transformation, ICT and institutional strengthening assignments.",
    url: "https://wilcom.co.ke/approach",
  },
};

export const revalidate = 3600;

const phases = [
  {
    step: "01",
    title: "Understand & Diagnose",
    description:
      "We begin by understanding the institutional context, development objectives, stakeholders, existing processes, systems, capabilities, and constraints. We use consultations, assessments, requirements analysis, document review, process mapping, and technical diagnostics to establish a clear baseline.",
    deliverables: [
      "Needs assessment",
      "Stakeholder analysis",
      "Requirements specification",
      "Baseline assessment",
      "Gap analysis",
    ],
  },
  {
    step: "02",
    title: "Design the Solution",
    description:
      "We translate the findings into a practical solution that responds to the client's institutional and operational priorities. Depending on the assignment, this may include strategy, business processes, operating models, system architecture, implementation frameworks, training programmes, or technical designs.",
    deliverables: [
      "Strategy or implementation framework",
      "Solution architecture",
      "Business process design",
      "Technical specifications",
      "Implementation roadmap",
    ],
  },
  {
    step: "03",
    title: "Develop & Prepare",
    description:
      "Where implementation is required, we develop, configure, document and prepare the solution for deployment. Our work may include software development, systems configuration, infrastructure preparation, training materials, quality assurance processes, and implementation planning.",
    deliverables: [
      "Configured or developed solution",
      "Technical documentation",
      "Training materials",
      "Test plans",
      "Implementation plan",
    ],
  },
  {
    step: "04",
    title: "Implement & Integrate",
    description:
      "We support implementation through coordinated deployment, integration, testing, stakeholder engagement, change management and quality control. For complex programmes, we work across technical and institutional workstreams to maintain alignment between the solution and the intended outcomes.",
    deliverables: [
      "Implementation support",
      "System integration",
      "User acceptance testing",
      "Quality assurance",
      "Deployment documentation",
    ],
  },
  {
    step: "05",
    title: "Build Capacity & Transfer Knowledge",
    description:
      "Sustainable results require capable teams. We therefore incorporate structured training, coaching, documentation and knowledge transfer into our engagements. Our capacity-building work can include training-needs assessment, curriculum development, training delivery, professional development and training-of-trainers.",
    deliverables: [
      "Training-needs assessment",
      "Training programmes",
      "User training",
      "Training-of-trainers",
      "Knowledge-transfer framework",
    ],
  },
  {
    step: "06",
    title: "Assure, Support & Sustain",
    description:
      "Our involvement can continue beyond implementation through quality assurance, monitoring, technical support, maintenance, performance review and continuous improvement. We focus on strengthening institutional ownership so that solutions remain useful beyond the initial engagement.",
    deliverables: [
      "Quality assurance",
      "Performance monitoring",
      "Technical support",
      "Maintenance framework",
      "Continuous improvement",
    ],
  },
];

const principles = [
  {
    icon: "🎯",
    title: "Development Outcomes First",
    description:
      "We connect consulting and technology interventions to the institutional, operational and development outcomes they are intended to support.",
  },
  {
    icon: "🔍",
    title: "Evidence & Understanding",
    description:
      "Recommendations are grounded in requirements, stakeholder perspectives, existing systems, processes, institutional realities and available evidence.",
  },
  {
    icon: "🤝",
    title: "Collaborative Delivery",
    description:
      "We work with client teams and stakeholders throughout the engagement, encouraging ownership and ensuring solutions reflect the operating environment.",
  },
  {
    icon: "🧩",
    title: "Fit-for-Purpose Solutions",
    description:
      "We avoid one-size-fits-all approaches and design interventions around the client's objectives, capabilities, constraints and implementation context.",
  },
  {
    icon: "🔒",
    title: "Quality & Security",
    description:
      "Quality assurance, risk management, information security and appropriate controls are incorporated into our technical and programme delivery activities.",
  },
  {
    icon: "📚",
    title: "Knowledge Transfer",
    description:
      "We place emphasis on documentation, training, mentoring and institutional capability so clients can sustain and build on the results.",
  },
];

export default function ApproachPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto text-center">
        <FadeIn>
          <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Our Methodology
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-5xl mx-auto">
            From insight to{" "}
            <span className="text-brand-600 dark:text-brand-400">
              sustainable results.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="max-w-3xl mx-auto text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
            WilCom Systems combines development consulting, management advisory,
            technology expertise, institutional capacity building and programme
            delivery through a structured approach designed around each client&apos;s
            context and objectives.
          </p>
        </FadeIn>
      </section>

      {/* Delivery process */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                How We Work
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                A structured delivery methodology
              </h2>

              <p className="text-ink-600 dark:text-ink-300">
                Our engagements can range from focused advisory assignments to
                complex technology and institutional transformation programmes.
                The methodology adapts to the nature, scale and requirements of
                each assignment.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {phases.map((phase) => (
              <FadeIn key={phase.step}>
                <div className="bg-white dark:bg-ink-900 p-6 md:p-8 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition">
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

                      <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-5">
                        {phase.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((item) => (
                          <span
                            key={item}
                            className="text-xs px-3 py-1.5 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-6 py-20 max-w-6xl mx-auto w-full">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
              What Guides Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Guiding Principles
            </h2>

            <p className="text-ink-500 dark:text-ink-400 max-w-3xl mx-auto">
              These principles shape how WilCom approaches consulting,
              technology, institutional strengthening and programme delivery.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <FadeIn key={principle.title} delay={(index % 3) * 0.1} className="h-full">
              <div className="h-full bg-white dark:bg-ink-900 p-6 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition">
                <div className="text-3xl mb-4">{principle.icon}</div>

                <h3 className="text-lg font-semibold mb-2 text-brand-600 dark:text-brand-400">
                  {principle.title}
                </h3>

                <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Capabilities bridge */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div>
                <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                  Integrated Expertise
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mb-5">
                  Consulting expertise supported by technology capability.
                </h2>

                <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                  Our approach brings together management consulting, digital
                  transformation, systems development, ICT advisory, software
                  quality assurance, cybersecurity, capacity building and
                  programme delivery.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Management Consulting",
                "Digital Transformation",
                "Systems Development",
                "ICT Advisory",
                "Quality Assurance",
                "Cybersecurity",
                "Capacity Building",
                "Programme Delivery",
              ].map((item, index) => (
                <FadeIn key={item} delay={index * 0.05}>
                  <div className="bg-white dark:bg-ink-900 rounded-lg border border-ink-200 dark:border-ink-800 p-4 text-sm font-medium">
                    {item}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Let&apos;s Work Together
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a complex development or transformation challenge?
            </h2>

            <p className="text-ink-600 dark:text-ink-300 mb-8">
              Tell us what you are trying to achieve. We can explore the
              requirements, identify the appropriate approach and define a
              practical path to implementation.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-brand-600 hover:bg-brand-700 transition px-8 py-3 rounded-lg font-semibold text-white"
            >
              Start a Conversation
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}