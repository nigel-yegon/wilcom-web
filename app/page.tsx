import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ContactForm from "./contact-form";
import FadeIn from "./components/fade-in";

export const dynamic = "force-dynamic";

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
        className="flex flex-col items-center justify-center text-center px-6 py-32"
      >
        <FadeIn y={30}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Welcome to{" "}
            <span className="text-brand-600 dark:text-brand-400">
              Wilcom Systems Limited
            </span>
          </h1>
        </FadeIn>

        <FadeIn y={20} delay={0.15}>
          <p className="max-w-2xl text-lg text-ink-600 dark:text-ink-300 mb-10">
            Delivering innovative technology solutions that power your business
            forward. From software development to IT consulting, we&apos;ve got
            you covered.
          </p>
        </FadeIn>

        <FadeIn y={20} delay={0.3}>
          <Link
            href="#services"
            className="inline-block bg-brand-600 hover:bg-brand-700 transition px-8 py-3 rounded-lg font-semibold text-white"
          >
            Explore Our Services
          </Link>
        </FadeIn>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 max-w-6xl mx-auto w-full">
        <FadeIn y={20}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
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
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20 bg-ink-100 dark:bg-ink-900">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn y={20}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          </FadeIn>
          <FadeIn y={20} delay={0.15}>
            <p className="text-ink-600 dark:text-ink-300 text-lg">
              Wilcom Systems Limited is a technology company committed to
              delivering world-class digital solutions. We combine expertise,
              innovation, and reliability to help businesses thrive in a
              digital world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 max-w-3xl mx-auto w-full">
        <FadeIn y={20}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In Touch
          </h2>
        </FadeIn>
        <FadeIn y={20} delay={0.15}>
          <p className="text-ink-600 dark:text-ink-300 text-center mb-10">
            Ready to start your next project? Send us a message and we&apos;ll
            get back to you shortly.
          </p>
        </FadeIn>
        <FadeIn y={30} delay={0.3}>
          <ContactForm />
        </FadeIn>
      </section>
    </main>
  );
}