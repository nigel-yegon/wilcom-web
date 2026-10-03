import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import FadeIn from ".././../components/fade-in";
import { getProjectBySlug, projects } from "@/lib/experience";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `https://wilcom.co.ke/experience/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | WilCom Systems Limited`,
      description: project.summary,
      url: `https://wilcom.co.ke/experience/${project.slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline mb-10"
            >
              ← Back to Experience
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-xs font-semibold">
                {project.sector}
              </span>

              <span className="px-3 py-1 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 text-xs font-medium">
                {project.engagement}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mb-6">
              {project.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg text-brand-600 dark:text-brand-400 font-semibold mb-6">
              {project.client}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-ink-600 dark:text-ink-300 leading-relaxed max-w-3xl">
              {project.summary}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Project overview */}
      <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <FadeIn>
              <div>
                <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                  Project Context
                </p>

                <h2 className="text-3xl font-bold mb-5">
                  Understanding the engagement
                </h2>

                <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                  {project.context}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <aside className="bg-white dark:bg-ink-900 rounded-xl border border-ink-200 dark:border-ink-800 p-6 h-fit">
                <p className="text-xs uppercase tracking-wider font-semibold text-ink-500 dark:text-ink-400 mb-4">
                  Client
                </p>

                <p className="font-semibold mb-6">{project.client}</p>

                <p className="text-xs uppercase tracking-wider font-semibold text-ink-500 dark:text-ink-400 mb-4">
                  Engagement
                </p>

                <p className="font-semibold mb-6">{project.engagement}</p>

                <p className="text-xs uppercase tracking-wider font-semibold text-ink-500 dark:text-ink-400 mb-4">
                  Sector
                </p>

                <p className="font-semibold">{project.sector}</p>
              </aside>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn>
            <div>
              <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                The Challenge
              </p>

              <h2 className="text-3xl font-bold mb-5">
                What the engagement addressed
              </h2>

              <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                WilCom&apos;s Engagement
              </p>

              <h2 className="text-3xl font-bold mb-5">
                Consulting connected to delivery
              </h2>

              <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                {project.engagementDetail}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="max-w-3xl mb-10">
              <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Services
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What we delivered
              </h2>

              <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                The engagement drew on a combination of WilCom&apos;s consulting,
                technology and delivery capabilities.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.services.map((service, index) => (
              <FadeIn key={service} delay={index * 0.08}>
                <Link
                  href="/services"
                  className="block bg-white dark:bg-ink-900 rounded-xl border border-ink-200 dark:border-ink-800 p-6 hover:border-brand-500 transition"
                >
                  <h3 className="font-semibold text-brand-600 dark:text-brand-400">
                    {service}
                  </h3>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery focus */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Delivery Focus
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What the work focused on
            </h2>
          </FadeIn>

          <ul className="space-y-4">
            {project.deliveryFocus.map((item, index) => (
              <FadeIn key={item} delay={index * 0.08}>
                <li className="flex items-start gap-3 text-ink-600 dark:text-ink-300">
                  <span className="text-brand-600 dark:text-brand-400 font-bold mt-0.5">
                    ✓
                  </span>

                  <span>{item}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Online representation */}
      {project.onlineUrl && (
        <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-8 md:p-10">
                <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                  The Project
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  View Project
                </h2>

                <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-7 max-w-3xl">
                  Where a current public representation of the project or
                  resulting platform is available, you can explore it directly.
                </p>

                <a
                  href={project.onlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition px-7 py-3 rounded-lg font-semibold text-white"
                >
                  {project.onlineLabel ?? "View Online"}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Similar Challenge?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Let&apos;s discuss what you are trying to achieve
            </h2>

            <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-8">
              Tell us about the challenge, the operating environment and the
              outcome you are working toward.
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