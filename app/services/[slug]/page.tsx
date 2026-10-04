import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import FadeIn from "../../components/fade-in";
import { prisma } from "@/lib/prisma";

type ServicePageProps = {
    params: Promise<{ slug: string }>;
};

/* -------------------------------------------------------------------------- */
/* Static params — pre-render every published service at build time           */
/* -------------------------------------------------------------------------- */

export async function generateStaticParams() {
    const services = await prisma.service.findMany({
        where: { published: true },
        select: { slug: true },
    });

    return services.map((s) => ({ slug: s.slug }));
}

/* -------------------------------------------------------------------------- */
/* Metadata                                                                    */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
    params,
}: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;

    const service = await prisma.service.findUnique({
        where: { slug },
        select: {
            title: true,
            description: true,
            slug: true,
            published: true,
        },
    });

    if (!service || !service.published) {
        return { title: "Service Not Found" };
    }

    return {
        title: service.title,
        description: service.description,
        alternates: {
            canonical: `https://wilcom.co.ke/services/${service.slug}`,
        },
        openGraph: {
            title: `${service.title} | WilCom Systems Limited`,
            description: service.description,
            url: `https://wilcom.co.ke/services/${service.slug}`,
            siteName: "WilCom Systems Limited",
            type: "website",
        },
    };
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export const revalidate = 300;

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;

    const service = await prisma.service.findUnique({ where: { slug } });

    if (!service || !service.published) {
        notFound();
    }

    // Related projects: any published project whose `services` array contains
    // this service's title. Matches how the dashboard links them.
    const relatedProjects = await prisma.project.findMany({
        where: {
            published: true,
            services: { has: service.title },
        },
        orderBy: [{ order: "asc" }, { createdAt: "asc" }],
        select: {
            id: true,
            ref: true,
            title: true,
            slug: true,
            client: true,
            sector: true,
            engagement: true,
            summary: true,
        },
    });

    const activities = service.activities ?? [];

    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="px-6 py-20 md:py-28">
                <div className="max-w-5xl mx-auto">
                    <FadeIn>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline mb-10"
                        >
                            ← Back to Services
                        </Link>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="flex items-center gap-4 mb-6">
                            {service.icon && (
                                <span className="text-4xl leading-none">
                                    {service.icon}
                                </span>
                            )}
                            <span className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest">
                                Service
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mb-6">
                            {service.title}
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-lg md:text-xl text-ink-600 dark:text-ink-300 leading-relaxed max-w-3xl">
                            {service.description}
                        </p>
                    </FadeIn>

                    {service.link && (
                        <FadeIn delay={0.4}>
                            <div className="mt-8">
                                <a
                                    href={service.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition px-6 py-3 rounded-lg font-semibold text-white"
                                >
                                    Visit related resource
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                        </FadeIn>
                    )}
                </div>
            </section>

            {/* Activities */}
            {activities.length > 0 && (
                <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
                    <div className="max-w-5xl mx-auto">
                        <FadeIn>
                            <div className="max-w-3xl mb-10">
                                <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                                    What This Service Involves
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Activities and focus areas
                                </h2>

                                <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                                    The scope of this capability covers the
                                    following activities, adapted to the
                                    operating environment of each engagement.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl">
                                {activities.map((activity) => (
                                    <li
                                        key={activity}
                                        className="flex items-start gap-3 text-ink-600 dark:text-ink-300"
                                    >
                                        <span className="text-brand-600 dark:text-brand-400 font-bold mt-0.5 shrink-0">
                                            ✓
                                        </span>
                                        <span>{activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </div>
                </section>
            )}

            {/* Related projects */}
            {relatedProjects.length > 0 && (
                <section className="px-6 py-20 max-w-5xl mx-auto">
                    <FadeIn>
                        <div className="max-w-3xl mb-10">
                            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                                Evidence of Delivery
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Projects we have undertaken
                            </h2>

                            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                                Selected engagements where this capability was
                                central to the assignment.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {relatedProjects.map((project, index) => (
                            <FadeIn
                                key={project.id}
                                delay={Math.min(index * 0.06, 0.3)}
                            >
                                <Link
                                    href={`/experience/${project.slug}`}
                                    className="block h-full rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 hover:border-brand-500 transition"
                                >
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-[11px] font-semibold">
                                            {project.ref}
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 text-[11px] font-medium">
                                            {project.sector}
                                        </span>
                                    </div>

                                    <h3 className="font-bold leading-snug mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-brand-600 dark:text-brand-400 font-semibold mb-3">
                                        {project.client}
                                    </p>

                                    <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed line-clamp-3">
                                        {project.summary}
                                    </p>

                                    <div className="mt-5 pt-4 border-t border-ink-200 dark:border-ink-800">
                                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400">
                                            View project
                                            <span aria-hidden="true">→</span>
                                        </span>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                            Start With the Challenge
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-5">
                            Need this capability on your assignment?
                        </h2>

                        <p className="text-ink-600 dark:text-ink-300 mb-8 leading-relaxed">
                            Tell us what you are trying to achieve. We can
                            discuss the requirement and identify the right
                            combination of consulting, technology and delivery
                            support.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-block bg-brand-600 hover:bg-brand-700 transition px-8 py-3 rounded-lg font-semibold text-white"
                            >
                                Start a Conversation
                            </Link>

                            <Link
                                href="/experience"
                                className="inline-block border border-ink-300 dark:border-ink-700 hover:border-brand-500 transition px-8 py-3 rounded-lg font-semibold"
                            >
                                View Our Experience
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}