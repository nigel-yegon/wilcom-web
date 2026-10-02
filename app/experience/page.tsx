import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Experience",
  description:
    "Over 15 years of proven experience delivering ICT, networking, security, POS, and software solutions across Kenya. See WilCom Systems' project portfolio and industry expertise.",
  alternates: {
    canonical: "https://wilcom.co.ke/experience",
  },
  openGraph: {
    title: "Our Experience | WilCom Systems Limited",
    description:
      "Over 15 years of proven experience delivering ICT, networking, security, POS, and software solutions across Kenya.",
    url: "https://wilcom.co.ke/experience",
  },
};

export const revalidate = 3600;

const stats = [
  { value: "2008", label: "Established" },
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
];

const industries = [
  {
    icon: "🏛️",
    title: "County Governments",
    description:
      "Deployed MuniLogic county management platforms for permits, licenses, zoning, and GIS — streamlining public service delivery.",
  },
  {
    icon: "🏦",
    title: "Banking & Financial Services",
    description:
      "Integrated payment gateways, ETR compliance, and mobile money solutions for banks, SACCOs, and microfinance institutions.",
  },
  {
    icon: "🛒",
    title: "Retail & Supermarkets",
    description:
      "End-to-end POS rollouts across single-store and multi-branch retail chains, including hardware, software, and staff training.",
  },
  {
    icon: "🏨",
    title: "Hospitality",
    description:
      "Hotel and restaurant management systems covering bookings, front desk, F&B POS, and management reporting.",
  },
  {
    icon: "🏭",
    title: "Manufacturing & Logistics",
    description:
      "Network infrastructure, CCTV surveillance, and access control for warehouses and production facilities.",
  },
  {
    icon: "🎓",
    title: "Education & NGOs",
    description:
      "Campus networking, biometric attendance, and custom software for schools, colleges, and development organizations.",
  },
];

const capabilities = [
  "Complex LAN/WAN design and implementation",
  "IP CCTV with video analytics (20–480 fps)",
  "Biometric, facial recognition & access control",
  "Rack, tower & blade server deployment",
  "Retail & hospitality POS systems",
  "Custom web, mobile & enterprise applications",
  "e-Government platforms (MuniLogic)",
  "Payment gateway & mobile money integration",
];

const values = [
  {
    title: "Reliability",
    description:
      "We deliver on time, every time. Our quality policy commits us to reliable, scalable, and robust solutions.",
  },
  {
    title: "Partnership",
    description:
      "We build long-term relationships with clients and suppliers, grounded in integrity and mutual respect.",
  },
  {
    title: "Innovation",
    description:
      "We continuously improve our processes and adopt new technologies to keep our clients ahead.",
  },
  {
    title: "After-Sales Excellence",
    description:
      "Our commitment doesn't end at deployment. We provide responsive support and maintenance.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto text-center">
        <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Proven Track Record
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl mx-auto">
          Our <span className="text-brand-600 dark:text-brand-400">Experience</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-ink-600 dark:text-ink-300">
          Since 2008, WilCom Systems has partnered with businesses, governments,
          and institutions across Kenya to deliver technology that works —
          reliably, securely, and at scale.
        </p>
      </section>

      {/* Stats */}
      <section className="px-6 py-12 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-brand-600 dark:text-brand-400 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-ink-600 dark:text-ink-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 py-20 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Industries We Serve
        </h2>
        <p className="text-center text-ink-500 dark:text-ink-400 max-w-3xl mx-auto mb-12">
          Our portfolio spans the public and private sectors, with solutions
          tailored to the operational realities of each industry.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="h-full bg-white dark:bg-ink-900 p-6 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition"
            >
              <div className="text-3xl mb-3">{industry.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-brand-600 dark:text-brand-400">
                {industry.title}
              </h3>
              <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Core Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-start gap-3 bg-white dark:bg-ink-900/60 p-5 rounded-xl border border-ink-200 dark:border-ink-800"
              >
                <span className="text-brand-600 dark:text-brand-400 text-xl mt-0.5">
                  ✓
                </span>
                <span className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Sets Us Apart
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white dark:bg-ink-900 p-8 rounded-xl border border-ink-200 dark:border-ink-800"
            >
              <h3 className="text-xl font-semibold mb-3 text-brand-600 dark:text-brand-400">
                {value.title}
              </h3>
              <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-ink-600 dark:text-ink-300 mb-8">
            Let's discuss how our experience can solve your technology challenges.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-600 hover:bg-brand-700 transition px-8 py-3 rounded-lg font-semibold text-white"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}