import type { Metadata } from "next";
import ContactForm from "../contact-form";
import FadeIn from "../components/fade-in";

export const metadata: Metadata = {
  title: "Contact Us | WilCom Systems Limited",
  description:
    "Get in touch with WilCom Systems Limited — Nairobi-based ICT solutions provider for networking, POS, security, and software development.",
};

const testimonials = [
  {
    quote:
      "WilCom rolled out our entire retail POS system across 14 branches in under three weeks. Their team handled the cabling, hardware, training, and support — all without disrupting our daily operations. Truly professional.",
    name: "Grace Mwangi",
    role: "Operations Director",
    company: "Retail Chain, Nairobi",
  },
  {
    quote:
      "The CCTV and biometric access control systems they installed at our headquarters have been running flawlessly for over two years. Their after-sales support is the best we've experienced from any vendor in Kenya.",
    name: "David Otieno",
    role: "Head of Security",
    company: "Financial Institution",
  },
  {
    quote:
      "We engaged WilCom to modernize our LAN across three floors. Their team designed a clean, scalable network that has eliminated our connectivity issues and prepared us for future growth. Highly recommended.",
    name: "Sarah Kipchoge",
    role: "IT Manager",
    company: "Manufacturing Firm",
  },
  {
    quote:
      "WilCom built a custom HR and payroll system tailored to our needs. It integrated with our existing biometric readers and saved our HR team countless hours every month. Excellent work.",
    name: "James Njoroge",
    role: "HR Director",
    company: "Hospitality Group",
  },
  {
    quote:
      "From the first consultation to final deployment, the WilCom team was responsive, knowledgeable, and honest about timelines. Their MuniLogic county system has streamlined how we handle permits and licenses.",
    name: "Peter Kamau",
    role: "County ICT Officer",
    company: "County Government",
  },
  {
    quote:
      "We've worked with WilCom on multiple projects — servers, networking, software. They always deliver on time and stand behind their work. A reliable long-term partner.",
    name: "Anne Wanjiku",
    role: "Chief Technology Officer",
    company: "Logistics Company",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <FadeIn y={30}>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Bring us your next <span className="text-brand-600 dark:text-brand-400">transformation challenge.</span>
          </h1>
        </FadeIn>
        <FadeIn y={20} delay={0.15}>
          <p className="text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
            WilCom Systems Limited provides consulting and implementation support from initial diagnosis and requirements 
            through delivery, quality assurance, training and sustainable handover.
          </p>
        </FadeIn>
      </section>

      {/* Contact info + form */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Info column */}
          <FadeIn className="md:col-span-2">
            <div className="space-y-6">
              <div className="bg-white dark:bg-ink-900 p-8 rounded-xl border border-ink-200 dark:border-ink-800">
                <h2 className="text-xl font-bold text-brand-600 dark:text-brand-400 mb-6">
                  WilCom Systems Limited
                </h2>
                <ul className="space-y-4 text-ink-600 dark:text-ink-300 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-600 dark:text-brand-400 mt-0.5 text-lg">
                      📍
                    </span>
                    <div>
                      <p className="font-medium text-ink-900 dark:text-white">
                        Address
                      </p>
                      <p>2nd Floor, Elyzee Plaza</p>
                      <p>Kilimani Road</p>
                      <p>P.O Box 102678-00101 Nairobi</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-600 dark:text-brand-400 mt-0.5 text-lg">
                      📞
                    </span>
                    <div>
                      <p className="font-medium text-ink-900 dark:text-white">
                        Phone
                      </p>
                      <p>
                        <a
                          href="tel:+254202396916"
                          className="hover:text-brand-600 dark:hover:text-brand-400"
                        >
                          +254 020 2396916/7
                        </a>
                      </p>
                      <p>
                        <a
                          href="tel:+254205288878"
                          className="hover:text-brand-600 dark:hover:text-brand-400"
                        >
                          +254 020 5288878
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-600 dark:text-brand-400 mt-0.5 text-lg">
                      ✉️
                    </span>
                    <div>
                      <p className="font-medium text-ink-900 dark:text-white">
                        Email
                      </p>
                      <p>
                        <a
                          href="mailto:sales@WilCom.co.ke"
                          className="hover:text-brand-600 dark:hover:text-brand-400"
                        >
                          sales@WilCom.co.ke
                        </a>
                      </p>
                      <p>
                        <a
                          href="mailto:info@WilCom.co.ke"
                          className="hover:text-brand-600 dark:hover:text-brand-400"
                        >
                          info@WilCom.co.ke
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-600 dark:text-brand-400 mt-0.5 text-lg">
                      🌐
                    </span>
                    <div>
                      <p className="font-medium text-ink-900 dark:text-white">
                        Website
                      </p>
                      <a
                        href="https://www.WilCom.co.ke"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-brand-600 dark:hover:text-brand-400"
                      >
                        www.WilCom.co.ke
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-600 dark:text-brand-400 mt-0.5 text-lg">
                      🕐
                    </span>
                    <div>
                      <p className="font-medium text-ink-900 dark:text-white">
                        Business Hours
                      </p>
                      <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                      <p>Saturday: 9:00 AM – 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-ink-100 dark:bg-ink-900/60 p-6 rounded-xl border border-ink-200 dark:border-ink-800">
                <h3 className="text-lg font-bold text-brand-600 dark:text-brand-400 mb-2">
                  Quick Response
                </h3>
                <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                  We typically respond to inquiries within one business day. For
                  urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Form column */}
          <FadeIn className="md:col-span-3" delay={0.15}>
            <div className="bg-white dark:bg-ink-900 p-8 rounded-xl border border-ink-200 dark:border-ink-800">
              <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-ink-500 dark:text-ink-400 text-sm mb-6">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <FadeIn y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              What Our Clients Say
            </h2>
          </FadeIn>
          <FadeIn y={20} delay={0.15}>
            <p className="text-center text-ink-500 dark:text-ink-400 max-w-2xl mx-auto mb-12">
              Trusted by businesses, financial institutions, and government
              agencies across Kenya since 2008.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={(i % 3) * 0.1}>
                <figure className="h-full bg-white dark:bg-ink-900 p-6 rounded-xl border border-ink-200 dark:border-ink-800 flex flex-col">
                  <div
                    className="text-brand-500 mb-3 text-lg"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </div>
                  <blockquote className="text-ink-600 dark:text-ink-300 leading-relaxed flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 pt-5 border-t border-ink-200 dark:border-ink-800">
                    <p className="font-semibold text-ink-900 dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-sm text-ink-500 dark:text-ink-400">
                      {t.role}
                    </p>
                    <p className="text-xs text-ink-400 dark:text-ink-500 mt-1">
                      {t.company}
                    </p>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="text-center text-ink-400 dark:text-ink-500 text-xs mt-10 italic max-w-2xl mx-auto">
              Testimonials shown are representative samples. Client names have
              been changed to protect privacy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <FadeIn y={20}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prefer to Talk Directly?
          </h2>
        </FadeIn>
        <FadeIn y={20} delay={0.15}>
          <p className="text-ink-600 dark:text-ink-300 mb-8">
            Our team is available during business hours to discuss your
            requirements and provide a tailored quote.
          </p>
        </FadeIn>
        <FadeIn y={20} delay={0.3}>
          <a
            href="tel:+254202396916"
            className="inline-block bg-brand-600 hover:bg-brand-700 transition px-8 py-3 rounded-lg font-semibold text-white"
          >
            Call +254 020 2396916/7
          </a>
        </FadeIn>
      </section>
    </main>
  );
}