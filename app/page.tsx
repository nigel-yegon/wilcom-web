import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ContactForm from "./contact-form";
import FadeIn from "./components/fade-in";

export const dynamic = "force-dynamic";

const highlights = [
  {
    icon: "🌐",
    title: "Networking",
    body: "Design and implementation of complex LANs supporting Data, Voice and Video.",
  },
  {
    icon: "📹",
    title: "CCTV & Surveillance",
    body: "Digital surveillance from 20fps up to 480fps, with IP and video analytics.",
  },
  {
    icon: "🔐",
    title: "Biometric & Access Control",
    body: "Fingerprint, facial recognition, and integrated time & attendance.",
  },
  {
    icon: "🖥️",
    title: "Servers & Hardware",
    body: "Rack & tower servers, PCs, laptops, printers, and storage appliances.",
  },
  {
    icon: "🛒",
    title: "Retail Automation",
    body: "Complete POS systems — hardware, software, training, and support.",
  },
  {
    icon: "💻",
    title: "Software Development",
    body: "Custom web, mobile, and enterprise applications built for your business.",
  },
  {
    icon: "🏛️",
    title: "e-Government",
    body: "MuniLogic county management — permits, licenses, zoning, and GIS.",
  },
  {
    icon: "🏨",
    title: "Hospitality",
    body: "Hotel & restaurant management covering bookings, POS, and reporting.",
  },
  {
    icon: "💳",
    title: "Banking & Payments",
    body: "Payment gateway integration, ETRs, and mobile money solutions.",
  },
];

const values = [
  "High ethics with all our clients",
  "Passionate about client satisfaction",
  "Integrity with clients and suppliers",
  "Professionalism in every engagement",
  "Efficient after-sales services",
  "Customer satisfaction at every step",
];

const stats = [
  { value: "2008", label: "Established" },
  { value: "15+", label: "Years of Experience" },
  { value: "9+", label: "Solution Categories" },
  { value: "24/7", label: "Support Available" },
];

export default async function Home() {
  const services = await prisma.service.findMany({
    where: { published: true },
    orderBy: { order: "asc" },
  });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32"
      >
        <FadeIn y={30}>
          <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Nairobi, Kenya · Since 2008
          </p>
        </FadeIn>

        <FadeIn y={30} delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl">
            Welcome to{" "}
            <span className="text-brand-600 dark:text-brand-400">
              Wilcom Systems Limited
            </span>
          </h1>
        </FadeIn>

        <FadeIn y={20} delay={0.2}>
          <p className="max-w-3xl text-lg text-ink-600 dark:text-ink-300 mb-10">
            A limited liability company delivering reliable, scalable, and
            robust ICT solutions — from networking and security systems to
            retail automation and software development. Our intention is to
            grow into a large firm with international relationships.
          </p>
        </FadeIn>

        <FadeIn y={20} delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#services"
              className="inline-block bg-brand-600 hover:bg-brand-700 transition px-8 py-3 rounded-lg font-semibold text-white"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-ink-300 dark:border-ink-700 hover:border-brand-500 transition px-8 py-3 rounded-lg font-semibold text-ink-800 dark:text-ink-200"
            >
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Stats strip */}
      <section className="px-6 py-12 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-brand-600 dark:text-brand-400 mb-1">
                  {s.value}
                </p>
                <p className="text-sm text-ink-600 dark:text-ink-300">
                  {s.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* What We Do highlights */}
      <section className="px-6 py-20 max-w-6xl mx-auto w-full">
        <FadeIn y={20}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What We Do
          </h2>
        </FadeIn>
        <FadeIn y={20} delay={0.15}>
          <p className="text-center text-ink-500 dark:text-ink-400 max-w-3xl mx-auto mb-12">
            Our portfolio supports clients across ICT infrastructure, security
            surveillance, retail and hospitality automation, e-Government, and
            software development.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <FadeIn key={h.title} delay={(i % 3) * 0.08}>
              <div className="h-full bg-white dark:bg-ink-900 p-6 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition">
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-brand-600 dark:text-brand-400">
                  {h.title}
                </h3>
                <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                  {h.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn y={20} delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block text-brand-600 dark:text-brand-400 hover:underline font-medium"
            >
              View all services →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Services (from database) */}
      <section
        id="services"
        className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60 w-full"
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Services
            </h2>
          </FadeIn>

          {services.length === 0 ? (
            <p className="text-center text-ink-500">Services coming soon.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <FadeIn key={s.id} delay={i * 0.1}>
                  <div className="h-full bg-white dark:bg-ink-900 p-8 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-brand-500 transition">
                    <h3 className="text-xl font-semibold mb-3 text-brand-600 dark:text-brand-400">
                      {s.title}
                    </h3>
                    <p className="text-ink-600 dark:text-ink-300">
                      {s.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="px-6 py-20 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-brand-600 dark:text-brand-400">Us</span>
              </h2>
              <p className="text-ink-600 dark:text-ink-300 text-lg leading-relaxed mb-4">
                WilCom Systems was established in 2008 by experienced and
                knowledgeable professionals with an intensive background in the
                ICT industry. We are a Kenyan-registered limited liability
                company committed to growing into a large firm with
                international relationships.
              </p>
              <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-6">
                Our mission is the supply and maintenance of high-quality Point
                of Sale hardware, software, and computer electronics products,
                coupled with efficient after-sales services. We thrive to
                achieve customer satisfaction by providing state-of-the-art
                solutions to our clients and partners.
              </p>
              <Link
                href="/about"
                className="inline-block bg-brand-600 hover:bg-brand-700 transition px-6 py-3 rounded-lg font-semibold text-white"
              >
                Learn More
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-white dark:bg-ink-900 p-8 rounded-xl border border-ink-200 dark:border-ink-800">
              <h3 className="text-xl font-bold text-brand-600 dark:text-brand-400 mb-4">
                Our Core Values
              </h3>
              <ul className="space-y-3">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <span className="text-brand-600 dark:text-brand-400 mt-1">
                      ✓
                    </span>
                    <span className="text-ink-600 dark:text-ink-300 text-sm">
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
        <FadeIn y={20}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Our Quality Policy
            </h2>
            <p className="text-ink-600 dark:text-ink-300 text-lg italic leading-relaxed">
              &ldquo;We will provide reliable, scalable and robust solutions,
              products and services to our customers, on time, each time. We
              will continuously improve our processes in order to achieve the
              highest industry standards.&rdquo;
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Why Choose Wilcom */}
      <section className="px-6 py-20 max-w-6xl mx-auto w-full">
        <FadeIn y={20}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Wilcom
          </h2>
        </FadeIn>
        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            "Our experience on the web and on mobile helps us understand complex back-ends and create connected applications across all smartphone platforms.",
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

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60 w-full"
      >
        <div className="max-w-3xl mx-auto">
          <FadeIn y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Get In Touch
            </h2>
          </FadeIn>
          <FadeIn y={20} delay={0.15}>
            <p className="text-ink-600 dark:text-ink-300 text-center mb-10">
              Please contact us for product information, pricing, and ordering.
              Call us if you have any inquiries — we&apos;ll be glad to help.
            </p>
          </FadeIn>
          <FadeIn y={30} delay={0.3}>
            <div className="bg-white dark:bg-ink-900 p-8 rounded-xl border border-ink-200 dark:border-ink-800">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}