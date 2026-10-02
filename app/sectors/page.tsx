import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sectors We Serve",
  description:
    "WilCom Systems serves Kenya's public and private sectors — national government, regulatory bodies, county governments, banking, retail, hospitality, education, and manufacturing.",
  alternates: {
    canonical: "https://wilcom.co.ke/sectors",
  },
  openGraph: {
    title: "Sectors We Serve | WilCom Systems Limited",
    description:
      "Trusted ICT partner to Kenya's public sector — national government, regulators, and county institutions — plus private-sector industries.",
    url: "https://wilcom.co.ke/sectors",
  },
};

export const revalidate = 3600;

const publicSector = [
  {
    icon: "🏛️",
    title: "National Government",
    description:
      "Ministries, departments, and state agencies rely on WilCom for secure networks, surveillance, access control, and enterprise software that supports service delivery at national scale.",
    capabilities: [
      "Secure LAN/WAN for government offices",
      "IP CCTV and video analytics for public facilities",
      "Enterprise software and system integration",
      "Data center and server infrastructure",
    ],
  },
  {
    icon: "⚖️",
    title: "Regulatory Institutions",
    description:
      "Regulatory bodies require audit-ready systems with strict access controls, long-term data retention, and compliance documentation. We deliver solutions designed for that scrutiny.",
    capabilities: [
      "Role-based access control and audit trails",
      "Secure document and records management",
      "Compliance-focused network segmentation",
      "High-availability infrastructure",
    ],
  },
  {
    icon: "🏢",
    title: "County Governments",
    description:
      "We deploy MuniLogic and related platforms that digitize county operations — permits, licenses, zoning, GIS, revenue collection, and citizen service delivery.",
    capabilities: [
      "MuniLogic county management platform",
      "GIS and spatial data systems",
      "Revenue automation and e-payments",
      "Ward-level network and surveillance",
    ],
  },
  {
    icon: "🚔",
    title: "Public Safety & Security Agencies",
    description:
      "Law enforcement and emergency services depend on reliable surveillance, communications, and access systems. We deliver infrastructure that performs under pressure.",
    capabilities: [
      "High-density CCTV with analytics",
      "Command center displays and integration",
      "Secure communications networks",
      "Vehicle and facility access control",
    ],
  },
];

const privateSector = [
  {
    icon: "🏦",
    title: "Banking & Financial Services",
    description:
      "Payment gateway integration, ETR compliance, mobile money, and secure branch networking for banks, SACCOs, and microfinance institutions.",
  },
  {
    icon: "🛒",
    title: "Retail & Supermarkets",
    description:
      "Complete POS ecosystems — hardware, software, training, and support — for single-store and multi-branch retail chains.",
  },
  {
    icon: "🏨",
    title: "Hospitality",
    description:
      "Hotel and restaurant management covering bookings, front desk, F&B POS, and management reporting.",
  },
  {
    icon: "🏭",
    title: "Manufacturing & Logistics",
    description:
      "Industrial networking, surveillance, access control, and software for warehouses and production facilities.",
  },
  {
    icon: "🎓",
    title: "Education",
    description:
      "Campus networking, biometric attendance, and custom software for schools, colleges, and universities.",
  },
  {
    icon: "🌍",
    title: "NGOs & Development Organizations",
    description:
      "Reliable ICT infrastructure and software for field operations, reporting, and donor compliance.",
  },
];

export default function SectorsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto text-center">
        <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Industries & Institutions
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl mx-auto">
          Sectors We <span className="text-brand-600 dark:text-brand-400">Serve</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-ink-600 dark:text-ink-300">
          From national ministries to county governments, and from banks to
          supermarkets — WilCom Systems delivers technology that supports
          Kenya's public and private sectors.
        </p>
      </section>

      {/* Public Sector */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Public Sector
            </h2>
            <p className="text-ink-600 dark:text-ink-300 max-w-3xl mx-auto">
              We are a trusted ICT partner to Kenya's national government,
              regulatory institutions, and county governments — delivering
              secure, compliant, and scalable systems for public service delivery.
            </p>
          </div>

          <div className="space-y-6">
            {publicSector.map((sector) => (
              <div
                key={sector.title}
                className="bg-white dark:bg-ink-900 p-6 md:p-8 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-20 shrink-0">
                    <div className="text-4xl md:text-5xl">{sector.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-brand-600 dark:text-brand-400">
                      {sector.title}
                    </h3>
                    <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-4">
                      {sector.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {sector.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2">
                          <span className="text-brand-600 dark:text-brand-400 mt-1 text-sm">
                            ✓
                          </span>
                          <span className="text-ink-600 dark:text-ink-300 text-sm">
                            {cap}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Sector */}
      <section className="px-6 py-20 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Private Sector
          </h2>
          <p className="text-ink-600 dark:text-ink-300 max-w-3xl mx-auto">
            We help businesses across Kenya modernize their operations with
            reliable infrastructure, integrated systems, and software built
            for their industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {privateSector.map((sector) => (
            <div
              key={sector.title}
              className="h-full bg-white dark:bg-ink-900 p-6 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition"
            >
              <div className="text-3xl mb-3">{sector.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-brand-600 dark:text-brand-400">
                {sector.title}
              </h3>
              <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Sector?
          </h2>
          <p className="text-ink-600 dark:text-ink-300 mb-8">
            Our solutions are adaptable. Tell us about your environment and
            we'll design a fit-for-purpose approach.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-600 hover:bg-brand-700 transition px-8 py-3 rounded-lg font-semibold text-white"
          >
            Talk to Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}