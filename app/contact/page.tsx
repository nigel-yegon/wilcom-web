import type { Metadata } from "next";
import ContactForm from "../contact-form";
import FadeIn from "../components/fade-in";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | WilCom Systems Limited",
  description:
    "Start a conversation with WilCom Systems Limited about consulting, digital transformation, systems development, ICT advisory, quality assurance, capacity building or programme delivery.",
  alternates: {
    canonical: "https://wilcom.co.ke/contact",
  },
  openGraph: {
    title: "Contact | WilCom Systems Limited",
    description:
      "Discuss your organization's development, management, technology or transformation needs with WilCom Systems Limited.",
    url: "https://wilcom.co.ke/contact",
    siteName: "WilCom Systems Limited",
    type: "website",
  },
};

const enquiryTypes = [
  {
    title: "Consulting & Advisory",
    description:
      "Discuss an organizational, management, ICT or institutional challenge that requires assessment and advisory support.",
  },
  {
    title: "Digital Transformation",
    description:
      "Explore opportunities to digitize processes, improve services or develop a practical digital transformation roadmap.",
  },
  {
    title: "Systems & Technology",
    description:
      "Discuss information systems, digital platforms, integration, infrastructure or other technology requirements.",
  },
  {
    title: "Quality & Security",
    description:
      "Engage us for systems quality assurance, technical assessment, security review or implementation assurance.",
  },
  {
    title: "Capacity Building",
    description:
      "Discuss training, knowledge transfer, digital skills development or institutional capacity-building requirements.",
  },
  {
    title: "Programme Delivery",
    description:
      "Talk to us about implementation support, programme coordination, technical delivery or complex multi-stakeholder assignments.",
  },
];

const engagementSteps = [
  {
    number: "01",
    title: "Tell us about the challenge",
    description:
      "Share the context, objectives, constraints and the outcome you are seeking.",
  },
  {
    number: "02",
    title: "We understand the requirement",
    description:
      "We review the opportunity and, where appropriate, engage with your team to understand the need in greater depth.",
  },
  {
    number: "03",
    title: "We shape the engagement",
    description:
      "We identify an appropriate consulting, technology or delivery approach based on the assignment.",
  },
  {
    number: "04",
    title: "We move toward delivery",
    description:
      "Where there is a fit, we agree the scope, responsibilities and next steps for the engagement.",
  },
];

/**
 * Clients & Partners
 * ------------------
 * Add your real client/partner entries here. Each logo file should live in
 * /public/clients/ (e.g. /public/clients/acme.png). Keep the images roughly
 * square or wide-and-short for the cleanest grid alignment. `href` is optional
 * — omit it (or set to null) to render a non-clickable logo.
 */
const clients = [
  {
    name: "Client One",
    logo: "/treasury-logo.jpg",
    href: "https://treasury.go.ke",
  },
  {
    name: "Client Two",
    logo: "/tvet.jpeg",
    href: "https://tvet.go.ke",
  },
  {
    name: "Client Three",
    logo: "/eldoret-city-logo.jpeg",
    href: "https://eldoretcity.go.ke",
  },
  {
    name: "Client Four",
    logo: "/UG-county.jpg",
    href: "https://uasingishu.go.ke",
  },
  {
    name: "Client Five",
    logo: "/ntsp.png",
    href: "https://tourkenya.go.ke",
  },
  {
    name: "Client Six",
    logo: "/sdr.jpeg",
    href: "https://transport.go.ke",
  },
  {
    name: "Partner One",
    logo: "/ppra-logo.png",
    href: "https://tenders.go.ke",
  },
  {
    name: "Partner Two",
    logo: "/cak.jpg",
    href: "https://ca.go.ke",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 py-24 md:py-28">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn y={30}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400 mb-5">
              Start a Conversation
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-7">
              Let&apos;s discuss your{" "}
              <span className="text-brand-600 dark:text-brand-400">
                challenge.
              </span>
            </h1>
          </FadeIn>

          <FadeIn y={20} delay={0.15}>
            <p className="text-lg md:text-xl text-ink-600 dark:text-ink-300 leading-relaxed max-w-3xl mx-auto">
              Whether you are planning a transformation programme, assessing
              an institutional need, developing a digital system or strengthening
              organizational capability, we would like to understand what you
              are trying to achieve.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact + form */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact information */}
          <FadeIn className="md:col-span-2">
            <div className="space-y-6">
              <div className="bg-white dark:bg-ink-900 p-8 rounded-2xl border border-ink-200 dark:border-ink-800">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600 dark:text-brand-400 mb-3">
                  WilCom Systems Limited
                </p>

                <h2 className="text-2xl font-bold mb-7">
                  Nairobi, Kenya
                </h2>

                <ul className="space-y-6 text-ink-600 dark:text-ink-300 text-sm">
                  <li className="flex items-start gap-4">
                    <span className="text-brand-600 dark:text-brand-400 mt-0.5 text-lg">
                      📍
                    </span>

                    <div>
                      <p className="font-semibold text-ink-900 dark:text-white mb-1">
                        Office
                      </p>
                      
                      <p>P.O Box 102678-00101, </p>
                      <p>Nairobi, KENYA</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="text-brand-600 dark:text-brand-400 mt-0.5 text-lg">
                      📞
                    </span>

                    <div>
                      <p className="font-semibold text-ink-900 dark:text-white mb-1">
                        Phone
                      </p>

                      <p>
                        <a
                          href="tel:+254202396916"
                          className="hover:text-brand-600 dark:hover:text-brand-400 transition"
                        >
                          +254 020 2396916/7
                        </a>
                      </p>

                      <p>
                        <a
                          href="tel:+254205288878"
                          className="hover:text-brand-600 dark:hover:text-brand-400 transition"
                        >
                          +254 020 5288878
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="text-brand-600 dark:text-brand-400 mt-0.5 text-lg">
                      ✉️
                    </span>

                    <div>
                      <p className="font-semibold text-ink-900 dark:text-white mb-1">
                        Email
                      </p>

                      <p>
                        <a
                          href="mailto:info@WilCom.co.ke"
                          className="hover:text-brand-600 dark:hover:text-brand-400 transition"
                        >
                          info@WilCom.co.ke
                        </a>
                      </p>

                      <p>
                        <a
                          href="mailto:sales@WilCom.co.ke"
                          className="hover:text-brand-600 dark:hover:text-brand-400 transition"
                        >
                          sales@WilCom.co.ke
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="text-brand-600 dark:text-brand-400 mt-0.5 text-lg">
                      🕐
                    </span>

                    <div>
                      <p className="font-semibold text-ink-900 dark:text-white mb-1">
                        Business Hours
                      </p>

                      <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                      <p>Saturday: 9:00 AM – 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-ink-100 dark:bg-ink-900/60 p-7 rounded-2xl border border-ink-200 dark:border-ink-800">
                <h3 className="text-lg font-bold mb-3">
                  Not sure where your requirement fits?
                </h3>

                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  That&apos;s fine. Give us the context and the outcome you are
                  looking for. We can explore the requirement with you and
                  determine an appropriate starting point.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn className="md:col-span-3" delay={0.15}>
            <div className="bg-white dark:bg-ink-900 p-8 md:p-10 rounded-2xl border border-ink-200 dark:border-ink-800">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600 dark:text-brand-400 mb-3">
                Enquiry
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Tell us what you&apos;re working on
              </h2>

              <p className="text-ink-500 dark:text-ink-400 text-sm mb-8 leading-relaxed">
                Share as much context as you can. You do not need to have a
                fully defined scope before contacting us.
              </p>

              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What you can contact us about */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <FadeIn y={20}>
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600 dark:text-brand-400 mb-3">
                Areas of Engagement
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                What can we help you explore?
              </h2>

              <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                WilCom works across consulting, technology and organizational
                capability. Your enquiry may involve one area or several.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enquiryTypes.map((item, i) => (
              <FadeIn key={item.title} delay={(i % 3) * 0.08}>
                <div className="h-full bg-white dark:bg-ink-950 p-7 rounded-xl border border-ink-200 dark:border-ink-800">
                  <div className="w-9 h-9 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-700 dark:text-brand-300 font-semibold mb-5">
                    {i + 1}
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement process */}
      <section className="px-6 py-20 md:py-24 max-w-6xl mx-auto">
        <FadeIn y={20}>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600 dark:text-brand-400 mb-3">
              What Happens Next
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              From first conversation to a defined engagement
            </h2>

            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
              We believe a useful engagement starts with understanding the
              problem properly. The first conversation is therefore about
              context and objectives, not simply selling a predefined service.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-6">
          {engagementSteps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08}>
              <div className="h-full">
                <div className="text-sm font-bold text-brand-600 dark:text-brand-400 mb-4">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Links to services and approach */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn y={20}>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Explore WilCom before you get in touch
            </h2>

            <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-8">
              Learn more about what we do and how we approach assignments
              before starting the conversation.
            </p>
          </FadeIn>

          <FadeIn y={20} delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-brand-600 hover:bg-brand-700 transition px-8 py-3 rounded-lg font-semibold text-white"
              >
                Explore Services
              </Link>

              <Link
                href="/approach"
                className="border border-ink-300 dark:border-ink-700 hover:border-brand-500 transition px-8 py-3 rounded-lg font-semibold text-ink-800 dark:text-ink-200"
              >
                Our Approach
              </Link>

              <Link
                href="/experience"
                className="border border-ink-300 dark:border-ink-700 hover:border-brand-500 transition px-8 py-3 rounded-lg font-semibold text-ink-800 dark:text-ink-200"
              >
                Our Experience
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Clients & Partners */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn y={20}>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600 dark:text-brand-400 mb-3">
                Trusted By
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Our Clients and Partners
              </h2>

              <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                We work with public institutions, development organizations,
                educational bodies and private-sector organizations across
                Kenya and the region.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, i) => (
              <FadeIn key={client.name} delay={(i % 4) * 0.06}>
                <ClientLogo
                  name={client.name}
                  logo={client.logo}
                  href={client.href}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* CLIENT LOGO                                                                 */
/* -------------------------------------------------------------------------- */

function ClientLogo({
  name,
  logo,
  href,
}: {
  name: string;
  logo: string;
  href?: string | null;
}) {
  const content = (
    <div className="group flex h-32 items-center justify-center rounded-xl border border-ink-200 bg-white p-5 transition hover:border-brand-500 hover:shadow-md dark:border-ink-800 dark:bg-ink-900">
      <div className="relative h-16 w-full">
        <Image
          src={logo}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain opacity-70 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 dark:opacity-80"
        />
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} — visit website`}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-xl dark:focus-visible:ring-offset-ink-950"
    >
      {content}
    </a>
  );
}