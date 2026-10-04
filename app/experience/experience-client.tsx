"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import FadeIn from "../components/fade-in";

export type ProjectView = {
    id: string;
    ref: string;
    slug: string;
    title: string;
    client: string;
    sector: string;
    engagement: string;
    summary: string;
    services: string[];
};

export default function ExperienceClient({
    projects,
    serviceTitles,
}: {
    projects: ProjectView[];
    serviceTitles: string[];
}) {
    // Derive filter options from the data itself — no hardcoded lists.
    const sectors = useMemo(
        () => ["All sectors", ...Array.from(new Set(projects.map((p) => p.sector)))],
        [projects],
    );

    const engagements = useMemo(
        () => [
            "All engagement types",
            ...Array.from(new Set(projects.map((p) => p.engagement))),
        ],
        [projects],
    );

    const services = useMemo(
        () => ["All services", ...serviceTitles],
        [serviceTitles],
    );

    const [sector, setSector] = useState("All sectors");
    const [engagement, setEngagement] = useState("All engagement types");
    const [service, setService] = useState("All services");

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesSector =
                sector === "All sectors" || project.sector === sector;

            const matchesEngagement =
                engagement === "All engagement types" ||
                project.engagement === engagement;

            const matchesService =
                service === "All services" || project.services.includes(service);

            return matchesSector && matchesEngagement && matchesService;
        });
    }, [projects, sector, engagement, service]);

    const clearFilters = () => {
        setSector("All sectors");
        setEngagement("All engagement types");
        setService("All services");
    };

    const hasFilters =
        sector !== "All sectors" ||
        engagement !== "All engagement types" ||
        service !== "All services";

    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto text-center">
                <FadeIn>
                    <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
                        Selected Experience
                    </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-5xl mx-auto">
                        Experience That Turns{" "}
                        <span className="text-brand-600 dark:text-brand-400">
                            Challenges Into Delivery
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="max-w-3xl mx-auto text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
                        Our assignments span consulting, assessment, digital
                        transformation, systems development, quality assurance,
                        capacity building and programme delivery across public
                        institutions and development environments.
                    </p>
                </FadeIn>

                {serviceTitles.length > 0 && (
                    <FadeIn delay={0.3}>
                        <div className="flex flex-wrap justify-center gap-3 mt-8">
                            {serviceTitles.map((serviceName) => (
                                <span
                                    key={serviceName}
                                    className="px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-sm font-medium"
                                >
                                    {serviceName}
                                </span>
                            ))}
                        </div>
                    </FadeIn>
                )}
            </section>

            {/* Portfolio */}
            <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="max-w-3xl mb-10">
                            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                                Our Portfolio
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                From consulting and assessment to implementation
                            </h2>

                            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                                Our project experience demonstrates how we combine
                                consulting insight, technology and delivery
                                capability to address specific institutional and
                                operational challenges.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Filters */}
                    <FadeIn delay={0.15}>
                        <div className="bg-white dark:bg-ink-900 rounded-2xl border border-ink-200 dark:border-ink-800 p-6 md:p-8">
                            <div className="grid md:grid-cols-3 gap-5">
                                <Filter
                                    id="sector"
                                    label="Sector"
                                    value={sector}
                                    options={sectors}
                                    onChange={setSector}
                                />

                                <Filter
                                    id="engagement"
                                    label="Engagement type"
                                    value={engagement}
                                    options={engagements}
                                    onChange={setEngagement}
                                />

                                <Filter
                                    id="service"
                                    label="Service"
                                    value={service}
                                    options={services}
                                    onChange={setService}
                                />
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-5 border-t border-ink-200 dark:border-ink-800">
                                <p className="text-sm text-ink-500 dark:text-ink-400">
                                    Showing{" "}
                                    <span className="font-semibold text-ink-800 dark:text-ink-100">
                                        {filteredProjects.length}
                                    </span>{" "}
                                    {filteredProjects.length === 1
                                        ? "assignment"
                                        : "assignments"}
                                </p>

                                {hasFilters && (
                                    <button
                                        type="button"
                                        onClick={clearFilters}
                                        className="text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                                    >
                                        Clear filters
                                    </button>
                                )}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Projects */}
            <section className="px-6 py-20 max-w-6xl mx-auto w-full">
                {projects.length === 0 ? (
                    <FadeIn>
                        <div className="text-center py-16">
                            <h3 className="text-xl font-semibold mb-2">
                                Experience information is being updated
                            </h3>
                            <p className="text-ink-600 dark:text-ink-300">
                                Please check back soon.
                            </p>
                        </div>
                    </FadeIn>
                ) : filteredProjects.length === 0 ? (
                    <FadeIn>
                        <div className="text-center py-16">
                            <h3 className="text-xl font-semibold mb-2">
                                No assignments match these criteria
                            </h3>

                            <p className="text-ink-600 dark:text-ink-300 mb-6">
                                Try another combination of sector, engagement
                                type or service.
                            </p>

                            <button
                                type="button"
                                onClick={clearFilters}
                                className="inline-block bg-brand-600 hover:bg-brand-700 transition px-6 py-3 rounded-lg font-semibold text-white"
                            >
                                View All Experience
                            </button>
                        </div>
                    </FadeIn>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {filteredProjects.map((project) => (
                            <FadeIn key={project.id}>
                                <article className="group h-full bg-white dark:bg-ink-900 rounded-2xl border border-ink-200 dark:border-ink-800 p-7 hover:border-brand-500 transition">
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        <span className="px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-xs font-semibold">
                                            {project.sector}
                                        </span>

                                        <span className="px-3 py-1 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 text-xs font-medium">
                                            {project.engagement}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4">
                                        {project.client}
                                    </p>

                                    <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed mb-6">
                                        {project.summary}
                                    </p>

                                    {/* Services */}
                                    {project.services.length > 0 && (
                                        <div className="pt-5 border-t border-ink-200 dark:border-ink-800">
                                            <p className="text-xs uppercase tracking-wider font-semibold text-ink-500 dark:text-ink-400 mb-3">
                                                Services
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {project.services.map((serviceName) => (
                                                    <span
                                                        key={serviceName}
                                                        className="text-xs px-2.5 py-1 rounded-md bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300"
                                                    >
                                                        {serviceName}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* View project */}
                                    <div className="mt-7">
                                        <Link
                                            href={`/experience/${project.slug}`}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                                        >
                                            View project
                                            <span aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                )}
            </section>

            {/* Experience themes */}
            <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                                How Experience Comes Together
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                We Understand. Assess. Design. Deliver.
                            </h2>

                            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                                Across sectors, our experience reflects a common
                                principle: understand the problem first, determine
                                what needs to change, design the appropriate
                                response and support delivery.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            {
                                title: "Understand",
                                text: "Understand institutional needs, operational challenges, priorities and desired outcomes.",
                            },
                            {
                                title: "Assess",
                                text: "Evaluate existing processes, systems, capabilities and technology requirements.",
                            },
                            {
                                title: "Design",
                                text: "Translate findings into practical solutions, systems, processes and interventions.",
                            },
                            {
                                title: "Deliver",
                                text: "Develop, implement, integrate, assure and support solutions within their operating context.",
                            },
                        ].map((item, index) => (
                            <FadeIn key={item.title} delay={index * 0.1} className="h-full">
                                <div className="h-full bg-white dark:bg-ink-900 p-6 rounded-xl border border-ink-200 dark:border-ink-800">
                                    <h3 className="text-lg font-semibold text-brand-600 dark:text-brand-400 mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                            Your Challenge
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Looking for experience relevant to your challenge?
                        </h2>

                        <p className="text-ink-600 dark:text-ink-300 mb-8 leading-relaxed">
                            Tell us what you are trying to achieve. We can discuss
                            the requirements, assess the challenge and identify an
                            appropriate consulting, technology or delivery
                            engagement.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-block bg-brand-600 hover:bg-brand-700 transition px-8 py-3 rounded-lg font-semibold text-white"
                            >
                                Start a Conversation
                            </Link>

                            <Link
                                href="/services"
                                className="inline-block border border-ink-300 dark:border-ink-700 hover:border-brand-500 transition px-8 py-3 rounded-lg font-semibold"
                            >
                                Explore Our Services
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}

/* -------------------------------------------------------------------------- */
/* FILTER                                                                      */
/* -------------------------------------------------------------------------- */

type FilterProps<T extends string> = {
    id: string;
    label: string;
    value: T;
    options: readonly T[];
    onChange: (value: T) => void;
};

function Filter<T extends string>({
    id,
    label,
    value,
    options,
    onChange,
}: FilterProps<T>) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-semibold mb-2">
                {label}
            </label>

            <select
                id={id}
                value={value}
                onChange={(event) => onChange(event.target.value as T)}
                className="w-full rounded-lg border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-950 px-4 py-3 text-sm text-ink-800 dark:text-ink-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
                {options.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}