import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/fade-in";

export const metadata: Metadata = {
  title: "Products & Services | Wilcom Systems Limited",
  description:
    "ICT infrastructure, networking, CCTV, biometric access control, retail POS, software development, and enterprise solutions from Wilcom Systems Limited.",
};

const services = [
  {
    slug: "networking",
    title: "Networking",
    summary:
      "Design and implementation of complex Local Area Networks (LAN) supporting Data, Voice and Video.",
    items: [
      "Structured cabling – Voice and Data",
      "Fiber optics",
      "IP Telephony",
      "Clean Power Systems",
      "Supply and Installation of Switches, Routers",
      "Equipment and Server cabinets",
      "Trunking",
      "Firewalls",
    ],
  },
  {
    slug: "cctv",
    title: "Security Surveillance – CCTV",
    summary:
      "Digital surveillance systems ranging from cost-effective 20fps to leading 480fps models, with built-in and standalone I/O modules.",
    items: [
      "IP surveillance product line",
      "Integration of IT technology into surveillance systems",
      "Video analysis features",
      "Expandable support to POS & Central Monitoring",
      "License Plate Recognition System",
      "Complete line of security accessories",
    ],
  },
  {
    slug: "biometric",
    title: "Biometric & Access Control",
    summary:
      "Enterprise-grade biometric authentication and access control systems for offices, banks, and government facilities.",
    items: [
      "Fingerprint & facial recognition systems",
      "Time & attendance integration",
      "Door access controllers",
      "Visitor management",
      "Integration with HR & Payroll",
      "Central management dashboards",
    ],
  },
  {
    slug: "servers",
    title: "Servers, PCs, Laptops & Printers",
    summary:
      "Supply, installation and maintenance of enterprise-grade computing hardware from leading vendors.",
    items: [
      "Rack & tower servers",
      "Desktop & laptop fleets",
      "Network printers & MFPs",
      "Storage & backup appliances",
      "UPS & power protection",
      "Hardware lifecycle management",
    ],
  },
  {
    slug: "retail-automation",
    title: "Retail Automation",
    summary:
      "Complete Point of Sale solutions — hardware, software, installation, training and ongoing support.",
    items: [
      "Retail POS Software",
      "Retail Hardened POS Computer Hardware",
      "Retail Hardened POS Peripherals",
      "Software Customizations & Plug-Ins",
      "Professional Set-Up & Installation",
      "Training by Retail Experienced Staff",
      "Ongoing Help, Support & Maintenance",
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    summary:
      "Custom-built applications designed around your business processes, organization goals and values.",
    items: [
      "Web & mobile applications",
      "Enterprise systems integration",
      "Custom portals & dashboards",
      "API development",
      "Database design & optimization",
      "Legacy system modernization",
    ],
  },
  {
    slug: "consulting",
    title: "Technology Consulting",
    summary:
      "Strategic guidance to modernize your tech stack, align IT with business goals, and maximize ROI.",
    items: [
      "ICT strategy & roadmap",
      "Systems audit & assessment",
      "Vendor selection & procurement",
      "Process automation",
      "Cloud migration planning",
      "eBusiness consultancy & training",
    ],
  },
  {
    slug: "hr-payroll",
    title: "HR & Payroll Solution",
    summary:
      "Streamline human resources and payroll with integrated, compliant software tailored to your organization.",
    items: [
      "Employee records management",
      "Payroll processing & statutory deductions",
      "Leave & attendance tracking",
      "Performance management",
      "Reporting & analytics",
      "Integration with access control",
    ],
  },
  {
    slug: "e-government",
    title: "e-Government Solutions",
    summary:
      "Municipal and county management systems built for permits, licenses, zoning, revenue and citizen services.",
    items: [
      "Permits & licenses",
      "Code enforcement",
      "Property management",
      "Sub-division & zoning",
      "Water & sanitation billing",
      "Roadways & park management",
      "GIS & document management",
      "Communication & grievances tracking",
    ],
  },
  {
    slug: "hospitality",
    title: "Hotel & Restaurant Management",
    summary:
      "End-to-end hospitality systems covering bookings, restaurant POS, inventory and reporting.",
    items: [
      "Front desk & reservations",
      "Restaurant POS",
      "Housekeeping management",
      "Inventory & procurement",
      "Guest CRM",
      "Revenue & occupancy reporting",
    ],
  },
  {
    slug: "banking",
    title: "Banking & Payment Integration",
    summary:
      "Secure payment gateways, ETR integration and banking solutions for enterprise and government clients.",
    items: [
      "Payment gateway integration",
      "Electronic Tax Registers (ETRs)",
      "Mobile money integration",
      "Card processing",
      "Reconciliation & reporting",
      "Compliance & security",
    ],
  },
  {
    slug: "ict-support",
    title: "ICT Support & Maintenance",
    summary:
      "Reliable after-sales support with responsive SLAs for all installed systems and hardware.",
    items: [
      "On-site & remote support",
      "Preventive maintenance",
      "Annual support contracts",
      "Hardware repairs & replacements",
      "Software updates & patching",
      "24/7 emergency response",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <FadeIn y={30}>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Products &amp;{" "}
            <span className="text-brand-600 dark:text-brand-400">
              Services
            </span>
          </h1>
        </FadeIn>
        <FadeIn y={20} delay={0.15}>
          <p className="text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
            A complete portfolio of ICT infrastructure, retail automation,
            security systems, and software solutions — designed, installed, and
            supported by Wilcom Systems Limited.
          </p>
        </FadeIn>
      </section>

      {/* Category overview grid */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Networking",
            "Security Surveillance – CCTV",
            "Biometric & Access Control",
            "Servers, PCs, Laptops, Printers",
            "Retail POS Software",
            "Retail POS Hardware",
            "Technology Consulting",
            "Software Development",
            "HR & Payroll Solution",
            "e-Government Solution",
            "Hotel & Restaurant Management",
            "Banking & Payment Integration",
          ].map((item, i) => (
            <FadeIn key={item} delay={i * 0.05}>
              <div className="bg-white dark:bg-ink-900/60 p-5 rounded-lg border border-ink-200 dark:border-ink-800 text-ink-800 dark:text-ink-200 font-medium hover:border-brand-500 transition">
                {item}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Detailed services */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <FadeIn y={20}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Deliver
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={(i % 2) * 0.1}>
              <div
                id={service.slug}
                className="h-full bg-white dark:bg-ink-900 p-8 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition scroll-mt-24"
              >
                <h3 className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-ink-600 dark:text-ink-300 mb-5 leading-relaxed">
                  {service.summary}
                </p>
                <ul className="space-y-2 text-ink-600 dark:text-ink-300 text-sm">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-brand-600 dark:text-brand-400 mt-0.5">
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

      {/* Networking & CCTV deep dive */}
      <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <FadeIn y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Deep Dive: Networking &amp; CCTV
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-10">
            <FadeIn>
              <div>
                <h3 className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-4">
                  Networking
                </h3>
                <p className="text-ink-600 dark:text-ink-300 mb-4 leading-relaxed">
                  We have a team of well-trained and experienced professionals
                  with the capacity to design and implement complex Local Area
                  Networks (LAN) that support Data, Voice and Video. Our design
                  methodology ensures efficient use of materials, minimal
                  business interruption and maximum return on investment.
                </p>
                <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                  We have a team of trained and certified network installers and
                  system integrators with experience in LAN installation
                  including cabling for both data and power, switching, and
                  teleconferencing.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <h3 className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-4">
                  CCTV &amp; Surveillance
                </h3>
                <p className="text-ink-600 dark:text-ink-300 mb-4 leading-relaxed">
                  Digital surveillance systems ranging from cost-effective 20fps
                  to leading 480fps models, with choices ranging from BNC to
                  D-Sub, built-in to standalone I/O modules.
                </p>
                <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                  Our IP surveillance product line includes video analysis
                  features, expandable support to POS and Central Monitoring
                  stations, and License Plate Recognition systems — all backed
                  by a complete line of security accessories.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Retail Automation */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <FadeIn y={20}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Retail Automation
          </h2>
        </FadeIn>
        <FadeIn y={20} delay={0.15}>
          <p className="text-center text-ink-500 dark:text-ink-400 mb-12 max-w-3xl mx-auto">
            As your retail Point of Sale System Partner, Wilcom offers a
            complete retail POS system solution — starting with initial
            consultation with our Retail Technology Specialists.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="h-full bg-white dark:bg-ink-900 p-8 rounded-xl border border-ink-200 dark:border-ink-800">
              <h3 className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-4">
                Complete POS Solution
              </h3>
              <p className="text-ink-600 dark:text-ink-300 mb-5 leading-relaxed">
                Based on your specific business needs, we provide:
              </p>
              <ul className="space-y-2 text-ink-600 dark:text-ink-300 text-sm">
                {[
                  "Retail POS software",
                  "Retail Hardened POS Computer Hardware",
                  "Retail Hardened POS Peripherals",
                  "Software Customizations and Plug-Ins",
                  "Professional Set-Up and Installation",
                  "Training by Retail Experienced Staff",
                  "Ongoing help, Support and Maintenance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-600 dark:text-brand-400 mt-0.5">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="h-full bg-white dark:bg-ink-900 p-8 rounded-xl border border-ink-200 dark:border-ink-800">
              <h3 className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-4">
                County Management System
              </h3>
              <p className="text-ink-600 dark:text-ink-300 mb-5 leading-relaxed">
                Use{" "}
                <span className="text-brand-600 dark:text-brand-400 font-medium">
                  MuniLogic
                </span>{" "}
                for a complete municipal/county solution:
              </p>
              <div className="grid grid-cols-2 gap-2 text-ink-600 dark:text-ink-300 text-sm">
                {[
                  "Permits",
                  "Licenses",
                  "Code enforcement",
                  "Property management",
                  "Sub-division",
                  "Zoning",
                  "Water & sanitation",
                  "Roadways",
                  "Park management",
                  "Fire",
                  "Equipment",
                  "GIS",
                  "Document Management",
                  "Grievances tracking",
                ].map((item) => (
                  <span key={item} className="flex items-start gap-2">
                    <span className="text-brand-600 dark:text-brand-400 mt-0.5">
                      •
                    </span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Custom & Web Solutions */}
      <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Solutions",
              body: "Our custom-made apps are built after understanding the underlying business and IT processes, and organization goals and values, to deliver comprehensive results. Native-built by tapping into the inbuilt technologies inherent to each operating system.",
            },
            {
              title: "Web Solutions",
              body: "We build websites that help enterprises take full advantage of mobile devices. Mobile websites are optimized for smaller screen sizes, slower processors and slower internet speeds, fully enhancing the viewing experience.",
            },
            {
              title: "eBusiness Solutions",
              body: "We offer consultancy and training on eBusiness solutions, helping organizations adopt digital processes and unlock new efficiencies across their operations.",
            },
          ].map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <div className="h-full bg-white dark:bg-ink-900 p-8 rounded-xl border border-ink-200 dark:border-ink-800">
                <h3 className="text-xl font-bold text-brand-600 dark:text-brand-400 mb-4">
                  {card.title}
                </h3>
                <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                  {card.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why Choose Wilcom */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <FadeIn y={20}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Wilcom
          </h2>
        </FadeIn>
        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            "Our experience on the web and now on mobile helps us understand complex back-ends and create connected mobile applications across all smartphone platforms.",
            "Flexibility to work and provide various engagement models — including fixed bids and long-term engagements.",
            "Extensive experience in creating enterprise consumer-facing web applications.",
            "Innovative approach with specific strategies that assure ROI and increased customer engagement.",
          ].map((item, i) => (
            <FadeIn key={item} delay={i * 0.1}>
              <div className="bg-white dark:bg-ink-900/60 p-6 rounded-xl border border-ink-200 dark:border-ink-800 flex items-start gap-3">
                <span className="text-brand-600 dark:text-brand-400 text-xl mt-0.5">
                  →
                </span>
                <p className="text-ink-600 dark:text-ink-300">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn y={20}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
          </FadeIn>
          <FadeIn y={20} delay={0.15}>
            <p className="text-ink-600 dark:text-ink-300 mb-8">
              Please contact us for product information, pricing, and ordering.
              Call us if you have any inquiries — we&apos;ll be glad to help.
            </p>
          </FadeIn>
          <FadeIn y={20} delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-brand-600 hover:bg-brand-700 transition px-8 py-3 rounded-lg font-semibold text-white"
              >
                Contact Us
              </Link>
              <a
                href="tel:+254202396916"
                className="border border-ink-300 dark:border-ink-700 hover:border-brand-500 transition px-8 py-3 rounded-lg font-semibold text-ink-800 dark:text-ink-200"
              >
                Call +254 020 2396916/7
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}