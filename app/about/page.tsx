import type { Metadata } from "next";
import FadeIn from "../components/fade-in";

export const metadata: Metadata = {
  title: "About Us | WilCom Systems Limited",
  description:
    "WilCom Systems Limited — established in 2008, delivering ICT infrastructure, POS solutions, security systems, and software development across Kenya.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Header */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <FadeIn y={30}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About{" "}
            <span className="text-brand-600 dark:text-brand-400">
              WilCom Systems
            </span>
          </h1>
        </FadeIn>
        <FadeIn y={20} delay={0.15}>
          <p className="text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
            WilCom Systems Limited is a limited liability company established in
            2008 by experienced and knowledgeable professionals with an
            intensive background in the ICT industry. Our intention is to grow
            into a large firm with international relationships.
          </p>
        </FadeIn>
      </section>

      {/* Who We Are / What We Do */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <FadeIn>
            <div className="h-full bg-white dark:bg-ink-900/60 p-8 rounded-xl border border-ink-200 dark:border-ink-800">
              <h2 className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-4">
                Who We Are
              </h2>
              <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                WilCom Systems was established in 2008 by experienced and
                knowledgeable professionals with intensive background in the ICT
                industry. We are a Kenyan-registered limited liability company
                committed to growing into a large firm with international
                relationships.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="h-full bg-white dark:bg-ink-900/60 p-8 rounded-xl border border-ink-200 dark:border-ink-800">
              <h2 className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-4">
                What We Do
              </h2>
              <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                Our portfolio supports clients across ICT infrastructure (LAN,
                Servers, PCs), CCTV and Security Surveillance Systems, Biometric
                and Access Control Systems, Retail and Hospitality Automation,
                e-Government, ICT Consulting, and Software Development.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision / Mission / Quality Policy */}
      <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Vision",
              body: "To be the leading distributor and reseller of computer electronics, achieving recognition as a provider of ICT solutions to clients by leveraging our core strengths.",
            },
            {
              title: "Our Mission",
              body: "Supply and maintenance of high quality Point of Sale hardware, software and computer electronics products, coupled with efficient after-sales services. We thrive to achieve customer satisfaction by providing state-of-the-art solutions to our clients and partners.",
            },
            {
              title: "Quality Policy",
              body: "\u201CWe will provide reliable, scalable and robust solutions, products and services to our customers, on time, each time. We will continuously improve our processes in order to achieve the highest industry standards.\u201D",
              italic: true,
            },
          ].map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <div className="h-full bg-white dark:bg-ink-900 p-8 rounded-xl border border-ink-200 dark:border-ink-800">
                <h3 className="text-xl font-bold text-brand-600 dark:text-brand-400 mb-4">
                  {card.title}
                </h3>
                <p
                  className={`text-ink-600 dark:text-ink-300 leading-relaxed ${
                    card.italic ? "italic" : ""
                  }`}
                >
                  {card.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <FadeIn y={20}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Maintain a very high level of ethics with all our clients",
            "Passionate about seeing clients most satisfied with our installations & our professionalism",
            "Maintain a high level of integrity with our clients and suppliers",
            "Offer the right solutions to our clients' needs with a high level of professionalism",
            "Highly efficient after-sales services",
            "Customer satisfaction at every step",
          ].map((value, i) => (
            <FadeIn key={value} delay={i * 0.08}>
              <div className="h-full bg-white dark:bg-ink-900/60 p-6 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition flex items-start gap-3">
                <span className="text-brand-600 dark:text-brand-400 text-xl mt-0.5">
                  ✓
                </span>
                <p className="text-ink-600 dark:text-ink-300">{value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Products & Solutions */}
      <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <FadeIn y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Products &amp; Solutions
            </h2>
          </FadeIn>
          <FadeIn y={20} delay={0.15}>
            <p className="text-center text-ink-500 dark:text-ink-400 mb-12">
              A complete portfolio of ICT products and enterprise solutions
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              "ETRs (Electronic Tax Registers)",
              "ICT Support & Maintenance",
              "Retail Automation",
            ].map((item, i) => (
              <FadeIn key={item} delay={(i % 3) * 0.08}>
                <div className="bg-white dark:bg-ink-900 p-5 rounded-lg border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition">
                  <p className="text-ink-800 dark:text-ink-200 font-medium">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Networking & CCTV Deep Dive */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <FadeIn>
          <div>
            <h3 className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-4">
              Networking
            </h3>
            <p className="text-ink-600 dark:text-ink-300 mb-4 leading-relaxed">
              We have a team of well-trained and experienced professionals with
              capacity to design and implement complex Local Area Networks (LAN)
              that support both Data, Voice and Video. Our design methodology
              ensures efficient use of materials, minimal business interruption
              and maximum return on investment.
            </p>
            <ul className="space-y-2 text-ink-600 dark:text-ink-300">
              {[
                "Structured cabling – Voice and Data",
                "Fiber optics",
                "IP Telephony",
                "Clean Power Systems",
                "Supply and Installation of Switches, Routers",
                "Equipment and Server cabinets",
                "Trunking",
                "Firewalls",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-600 dark:text-brand-400 mt-1">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div>
            <h3 className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-4">
              CCTV &amp; Surveillance
            </h3>
            <p className="text-ink-600 dark:text-ink-300 mb-4 leading-relaxed">
              Digital surveillance systems ranging from cost-effective 20fps to
              leading 480fps models, with choices ranging from BNC to D-Sub,
              built-in to standalone I/O modules.
            </p>
            <ul className="space-y-2 text-ink-600 dark:text-ink-300">
              {[
                "IP surveillance product line",
                "Integration of IT technology into surveillance systems",
                "Video analysis features for surveillance systems",
                "Digital Surveillance Systems with expandable support to POS & Central Monitoring",
                "License Plate Recognition System",
                "Complete line of security accessories",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-600 dark:text-brand-400 mt-1">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* Retail Automation */}
      <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <FadeIn y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Retail Automation
            </h2>
          </FadeIn>
          <FadeIn y={20} delay={0.15}>
            <p className="text-center text-ink-500 dark:text-ink-400 mb-12 max-w-3xl mx-auto">
              As your retail Point of Sale System Partner, WilCom offers a
              complete retail POS system solution starting with initial
              consultation with our Retail Technology Specialists.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Retail POS Software",
              "Retail Hardened POS Computer Hardware",
              "Retail Hardened POS Peripherals",
              "Software Customizations & Plug-Ins",
              "Professional Set-Up & Installation",
              "Training by Retail Experienced Staff",
              "Ongoing Help, Support & Maintenance",
              "County Management System (MuniLogic)",
            ].map((item, i) => (
              <FadeIn key={item} delay={(i % 3) * 0.08}>
                <div className="bg-white dark:bg-ink-900 p-5 rounded-lg border border-ink-200 dark:border-ink-800">
                  <p className="text-ink-800 dark:text-ink-200 font-medium">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose WilCom */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <FadeIn y={20}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose WilCom
          </h2>
        </FadeIn>
        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            "WilCom's experience on the web and now on mobile helps us understand complex back-ends and create connected mobile applications across all smartphone platforms.",
            "Flexibility to work and provide various engagement models — including fixed bids and long-term engagements.",
            "Extensive experience in creating Enterprise consumer-facing web applications.",
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

      {/* Contact Info */}
      <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn y={20}>
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          </FadeIn>
          <FadeIn y={20} delay={0.15}>
            <div className="bg-white dark:bg-ink-900 p-8 rounded-xl border border-ink-200 dark:border-ink-800 space-y-3 text-ink-600 dark:text-ink-300">
              <p className="font-semibold text-brand-600 dark:text-brand-400 text-lg">
                WilCom Systems Limited
              </p>
              <p>2nd Floor, Elyzee Plaza, Kilimani Road</p>
              <p>P.O Box 102678-00101 Nairobi</p>
              <p>
                <span className="text-ink-500">Tel1:</span> 254 020 2396916/7
              </p>
              <p>
                <span className="text-ink-500">Tel2:</span> 254 020 5288878
              </p>
              <p>
                <span className="text-ink-500">Email:</span>{" "}
                <a
                  href="mailto:sales@WilCom.co.ke"
                  className="text-brand-600 dark:text-brand-400 hover:underline"
                >
                  sales@WilCom.co.ke
                </a>{" "}
                /{" "}
                <a
                  href="mailto:info@WilCom.co.ke"
                  className="text-brand-600 dark:text-brand-400 hover:underline"
                >
                  info@WilCom.co.ke
                </a>
              </p>
              <p>
                <span className="text-ink-500">Website:</span>{" "}
                <a
                  href="https://www.WilCom.co.ke"
                  className="text-brand-600 dark:text-brand-400 hover:underline"
                >
                  www.WilCom.co.ke
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}