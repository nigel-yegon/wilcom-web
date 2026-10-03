import type { Metadata } from "next";
import Link from "next/link";

import FadeIn from "./components/fade-in";

export const metadata: Metadata = {
  title: "WilCom Systems Limited | Development & Management Consulting",
  description:
    "WilCom Systems Limited provides development and management consulting, digital transformation, systems development, ICT advisory, quality assurance, capacity building and programme delivery.",
  alternates: {
    canonical: "https://wilcom.co.ke/",
  },
  openGraph: {
    title: "WilCom Systems Limited | Development & Management Consulting",
    description:
      "Development and management consulting, digital transformation, systems development, ICT advisory, quality assurance, capacity building and programme delivery.",
    url: "https://wilcom.co.ke/",
  },
};

const services = [
  {
    number: "01",
    title: "Management Consulting",
    description:
      "Advisory support that helps organizations understand institutional challenges, improve processes and make informed decisions.",
  },
  {
    number: "02",
    title: "Digital Transformation",
    description:
      "Practical digital strategies and solutions that connect organizational needs, processes, people and technology.",
  },
  {
    number: "03",
    title: "Systems Development",
    description:
      "Web-based and enterprise systems designed around operational requirements, information flows and institutional objectives.",
  },
  {
    number: "04",
    title: "ICT Advisory",
    description:
      "Independent assessment and advisory support covering ICT needs, systems, infrastructure, architecture and technology planning.",
  },
  {
    number: "05",
    title: "Quality Assurance & Security",
    description:
      "Quality, security and assurance activities that help strengthen digital platforms, systems and technology-enabled programmes.",
  },
  {
    number: "06",
    title: "Capacity Building",
    description:
      "Training, knowledge transfer and institutional capability development designed to support sustainable adoption and delivery.",
  },
  {
    number: "07",
    title: "Programme Delivery",
    description:
      "Implementation support that connects strategy and design with coordinated execution, stakeholder engagement and sustainable handover.",
  },
  {
    number: "08",
    title: "ICT Infrastructure & Integration",
    description:
      "Technical infrastructure and integration capabilities that support the wider consulting, systems and transformation engagement.",
  },
];

const experience = [
  {
    sector: "Government",
    title: "e-GP 3rd Party Quality Assurance & Security Audit",
    client: "The National Treasury",
    description:
      "Quality assurance and security audit support for an electronic government procurement environment.",
  },
  {
    sector: "Education & TVET",
    title: "Web-Based TVET Management Information System",
    client: "Ministry of Education, State Department for TVET",
    description:
      "Development of a management information system supporting TVET information and institutional processes.",
  },
  {
    sector: "Procurement",
    title: "Online Administrative Review Case Management System",
    client: "Public Procurement Regulatory Authority",
    description:
      "Development of an online case management environment supporting administrative review processes.",
  },
  {
    sector: "Tourism",
    title: "National Tourism Service Portal",
    client: "Ministry of Tourism and Wildlife, State Department for Tourism",
    description:
      "Development of a national digital platform supporting tourism-related information and services.",
  },
  {
    sector: "Health",
    title: "Integrated Health Management Information System",
    client: "County Government of Nandi",
    description:
      "Development of an integrated management information system supporting health-sector information and operational processes.",
  },
  {
    sector: "ICT & Telecommunications",
    title: "SIM Box Fraud Detector",
    client: "Communications Authority of Kenya",
    description:
      "Development of a technology solution supporting detection and management of SIM box-related fraud.",
  },
];

const sectors = [
  {
    title: "Government & Public Institutions",
    description:
      "Supporting public institutions with advisory, digital systems, information management and implementation capabilities.",
  },
  {
    title: "Education & TVET",
    description:
      "Supporting institutional systems, digital learning, information management and capacity development.",
  },
  {
    title: "Procurement & Regulatory",
    description:
      "Digital platforms, case management, quality assurance and information systems for regulatory environments.",
  },
  {
    title: "Development Programmes",
    description:
      "Supporting programme implementation, institutional strengthening, capacity building and technology-enabled delivery.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin with the institutional, operational and development challenge rather than jumping directly to a technology solution.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We translate requirements into a practical engagement, solution architecture, delivery plan or capacity-building intervention.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We combine consulting, technical expertise and implementation support to move from design into execution.",
  },
  {
    number: "04",
    title: "Sustain",
    description:
      "We emphasize quality, knowledge transfer, capacity building and sustainable handover so that solutions continue to create value.",
  },
];

const values = [
  {
    title: "Integrity",
    description:
      "We approach engagements with professional integrity, transparency and respect for client and stakeholder interests.",
  },
  {
    title: "Professionalism",
    description:
      "We bring structured thinking, technical competence and disciplined delivery to every engagement.",
  },
  {
    title: "Practicality",
    description:
      "We focus on solutions that fit the institutional context, available resources and intended outcomes.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We learn from delivery and continuously strengthen our methods, systems and capabilities.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        id="home"
        className="px-6 py-24 md:py-32 lg:py-36 max-w-7xl mx-auto"
      >
        <div className="max-w-5xl">
          <FadeIn y={30}>
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-5">
              WilCom Systems Limited
            </p>
          </FadeIn>

          <FadeIn y={30} delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-7">
              Development, management and{" "}
              <span className="text-brand-600 dark:text-brand-400">
                technology consulting.
              </span>
            </h1>
          </FadeIn>

          <FadeIn y={20} delay={0.2}>
            <p className="max-w-3xl text-lg md:text-xl text-ink-600 dark:text-ink-300 leading-relaxed mb-10">
              We help organizations understand complex challenges, design
              practical solutions and deliver sustainable results through
              consulting, digital transformation, systems development, ICT
              advisory, quality assurance, capacity building and programme
              delivery.
            </p>
          </FadeIn>

          <FadeIn y={20} delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/experience"
                className="inline-block bg-brand-600 hover:bg-brand-700 transition px-8 py-3.5 rounded-lg font-semibold text-white text-center"
              >
                Explore Our Experience
              </Link>

              <Link
                href="/contact"
                className="inline-block border border-ink-300 dark:border-ink-700 hover:border-brand-500 transition px-8 py-3.5 rounded-lg font-semibold text-center"
              >
                Discuss an Assignment
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <FadeIn y={20}>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                  The Challenge
                </p>

                <h2 className="text-2xl md:text-3xl font-bold">
                  Complex problems need more than technology.
                </h2>
              </div>

              <div className="md:col-span-2">
                <p className="text-ink-600 dark:text-ink-300 text-lg leading-relaxed">
                  Organizations often need to align strategy, processes,
                  people, information and technology at the same time. WilCom
                  brings these dimensions together, helping clients move from
                  understanding the challenge to designing, implementing and
                  sustaining practical solutions.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 max-w-7xl mx-auto w-full">
        <FadeIn y={20}>
          <div className="max-w-3xl mb-12">
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
              What We Do
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Consulting supported by practical delivery capability
            </h2>

            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
              Our services bring together management advisory, development
              consulting and technology expertise. We can support an
              assignment from assessment and design through implementation,
              quality assurance, capacity building and handover.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={(index % 4) * 0.06}>
              <div className="h-full bg-white dark:bg-ink-900 p-6 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition">
                <p className="text-brand-600 dark:text-brand-400 text-sm font-bold mb-5">
                  {service.number}
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn y={20} delay={0.2}>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-brand-600 dark:text-brand-400 hover:underline font-semibold"
            >
              Explore all services →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn y={20}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-3xl">
                <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                  Selected Experience
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Experience that demonstrates delivery
                </h2>

                <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                  Our portfolio includes assignments for government
                  institutions, regulatory bodies, education and TVET
                  institutions, development programmes and other
                  organizations.
                </p>
              </div>

              <Link
                href="/experience"
                className="text-brand-600 dark:text-brand-400 hover:underline font-semibold whitespace-nowrap"
              >
                View full portfolio →
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.map((project, index) => (
              <FadeIn key={project.title} delay={(index % 3) * 0.07}>
                <article className="h-full bg-white dark:bg-ink-900 rounded-xl border border-ink-200 dark:border-ink-800 p-7 hover:border-brand-500 transition">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-xs font-semibold mb-5">
                    {project.sector}
                  </span>

                  <h3 className="text-lg font-bold leading-snug mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4">
                    {project.client}
                  </p>

                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {project.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        id="approach"
        className="px-6 py-20 max-w-7xl mx-auto w-full"
      >
        <FadeIn y={20}>
          <div className="max-w-3xl mb-12">
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
              How We Work
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From challenge to sustainable delivery
            </h2>

            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
              Our approach is designed to keep the work grounded in the
              client&apos;s institutional context while maintaining a clear
              path from diagnosis to implementation and sustainable results.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-6">
          {approach.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.08}>
              <div className="relative h-full">
                <div className="text-5xl font-extrabold text-brand-100 dark:text-brand-950/70 mb-4">
                  {item.number}
                </div>

                <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn y={20} delay={0.25}>
          <div className="mt-10">
            <Link
              href="/approach"
              className="text-brand-600 dark:text-brand-400 hover:underline font-semibold"
            >
              Learn about our approach →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Sectors */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-7xl mx-auto">
          <FadeIn y={20}>
            <div className="max-w-3xl mb-12">
              <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Where We Work
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experience across institutional environments
              </h2>

              <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                Our experience is shaped by assignments where organizational
                requirements, public value, technology and implementation need
                to work together.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map((sector, index) => (
              <FadeIn key={sector.title} delay={index * 0.07}>
                <div className="h-full bg-white dark:bg-ink-900 p-6 rounded-xl border border-ink-200 dark:border-ink-800">
                  <h3 className="text-lg font-semibold text-brand-600 dark:text-brand-400 mb-3">
                    {sector.title}
                  </h3>

                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About / identity */}
      <section id="about" className="px-6 py-20 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div>
              <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                About WilCom
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Kenyan consulting and technology organization
              </h2>

              <p className="text-ink-600 dark:text-ink-300 text-lg leading-relaxed mb-5">
                WilCom Systems Limited is a Kenyan-registered organization
                providing consulting, technology and implementation services
                to institutions and organizations.
              </p>

              <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-6">
                Our experience combines development and management consulting
                with digital systems expertise, ICT advisory, quality
                assurance, capacity building and programme delivery.
              </p>

              <Link
                href="/services"
                className="inline-block bg-brand-600 hover:bg-brand-700 transition px-6 py-3 rounded-lg font-semibold text-white"
              >
                Learn More About Us
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white dark:bg-ink-900 p-6 rounded-xl border border-ink-200 dark:border-ink-800"
                >
                  <h3 className="text-lg font-semibold text-brand-600 dark:text-brand-400 mb-3">
                    {value.title}
                  </h3>

                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quality / delivery statement */}
      <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
        <FadeIn y={20}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Our Commitment
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              Quality, accountability and sustainable results
            </h2>

            <p className="text-ink-600 dark:text-ink-300 text-lg leading-relaxed">
              We aim to deliver reliable, practical and fit-for-purpose
              solutions while continuously improving our processes, strengthening
              client capability and supporting sustainable outcomes.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Final CTA */}
      <section id="contact" className="px-6 py-24">
        <FadeIn y={30}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Start a Conversation
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Have a challenge that needs the right combination of strategy,
              technology and execution?
            </h2>

            <p className="max-w-2xl mx-auto text-ink-600 dark:text-ink-300 text-lg leading-relaxed mb-9">
              Tell us what you are trying to achieve. You do not need to have a
              fully defined scope before getting in touch.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-brand-600 hover:bg-brand-700 transition px-8 py-3.5 rounded-lg font-semibold text-white"
              >
                Discuss Your Requirement
              </Link>

              <Link
                href="/experience"
                className="inline-block border border-ink-300 dark:border-ink-700 hover:border-brand-500 transition px-8 py-3.5 rounded-lg font-semibold"
              >
                View Our Experience
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}