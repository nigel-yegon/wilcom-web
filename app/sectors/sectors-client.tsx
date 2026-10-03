"use client";

import Link from "next/link";

import FadeIn from "../components/fade-in";

export type SectorView = {
    id: string;
    slug: string;
    name: string;
    icon: string;
    description: string;
    problems: string[];
    capabilities: string[];
};

const deliveryStages = [
    {
        number: "01",
        title: "Understand the Problem",
        description:
            "We begin with the institution, business or programme challenge rather than a predetermined technology product.",
    },
    {
        number: "02",
        title: "Assess the Current State",
        description:
            "We examine processes, systems, people, information, infrastructure and institutional requirements to establish what is working and what needs to change.",
    },
    {
        number: "03",
        title: "Design the Response",
        description:
            "We translate findings into a practical solution, implementation approach and delivery roadmap aligned to the organization's objectives.",
    },
    {
        number: "04",
        title: "Develop & Implement",
        description:
            "Where technology is required, we develop, configure, integrate and implement solutions around the organization's real operating environment.",
    },
    {
        number: "05",
        title: "Build Capability",
        description:
            "We equip users and institutions with the knowledge, skills and processes required to adopt and sustain the solution.",
    },
    {
        number: "06",
        title: "Assure & Sustain",
        description:
            "Quality assurance, security, support and continuous improvement help ensure that the intervention continues to deliver value.",
    },
];

export default function SectorsClient({ sectors }: { sectors: SectorView[] }) {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto text-center">
                <FadeIn>
                    <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
                        Sectors & Institutional Context
                    </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-5xl mx-auto">
                        Solving Problems Across{" "}
                        <span className="text-brand-600 dark:text-brand-400">
                            Different Operating Environments
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-ink-600 dark:text-ink-300 leading-relaxed">
                        WilCom works with institutions, businesses and development
                        organizations to understand challenges, assess existing
                        capabilities, design practical responses and support delivery.
                    </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        {[
                            "Consulting & Assessment",
                            "Digital Transformation",
                            "Systems Development",
                            "ICT Advisory",
                            "Quality & Security",
                            "Capacity Building",
                            "Programme Delivery",
                        ].map((item) => (
                            <span
                                key={item}
                                className="px-4 py-2 rounded-full border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 text-sm font-medium text-ink-700 dark:text-ink-200"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </FadeIn>
            </section>

            {/* Problem solving model */}
            <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="max-w-3xl mb-12">
                            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                                Our Role
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mb-5">
                                From institutional challenge to service delivery
                            </h2>

                            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                                Sector knowledge matters because the same technology
                                can solve very different problems in different
                                environments. Our work therefore starts with
                                understanding the organization, its processes, people,
                                systems and objectives before determining the
                                appropriate intervention.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Understand",
                                text: "Establish the problem, institutional context, stakeholders, processes and desired outcomes.",
                            },
                            {
                                title: "Transform",
                                text: "Translate evidence and requirements into practical organizational, process and technology solutions.",
                            },
                            {
                                title: "Deliver",
                                text: "Support implementation, capacity building, quality assurance and sustained adoption.",
                            },
                        ].map((item, index) => (
                            <FadeIn key={item.title} delay={index * 0.1}>
                                <div className="bg-white dark:bg-ink-900 p-7 rounded-xl border border-ink-200 dark:border-ink-800 h-full">
                                    <h3 className="text-xl font-bold text-brand-600 dark:text-brand-400 mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sectors */}
            <section className="px-6 py-20 max-w-6xl mx-auto">
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                            Where We Work
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-5">
                            Sector context shapes the solution
                        </h2>

                        <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                            Our experience spans public institutions, education,
                            development programmes and commercial organizations.
                            Across these environments, our role is to connect
                            organizational needs with practical interventions that
                            can be implemented and sustained.
                        </p>
                    </div>
                </FadeIn>

                {sectors.length === 0 ? (
                    <FadeIn>
                        <div className="text-center py-16 rounded-2xl border border-dashed border-ink-200 dark:border-ink-800">
                            <p className="text-ink-500 dark:text-ink-400">
                                Sector information is being updated. Please check back soon.
                            </p>
                        </div>
                    </FadeIn>
                ) : (
                    <div className="space-y-8">
                        {sectors.map((sector) => (
                            <FadeIn key={sector.id}>
                                <article className="rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 overflow-hidden">
                                    <div className="p-7 md:p-9">
                                        <div className="flex flex-col md:flex-row gap-7">
                                            {sector.icon && (
                                                <div className="md:w-20 shrink-0">
                                                    <div className="text-4xl">{sector.icon}</div>
                                                </div>
                                            )}

                                            <div className="flex-1">
                                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                                    {sector.name}
                                                </h3>

                                                <p className="text-ink-600 dark:text-ink-300 leading-relaxed max-w-4xl mb-8">
                                                    {sector.description}
                                                </p>

                                                <div className="grid lg:grid-cols-2 gap-8">
                                                    {sector.problems.length > 0 && (
                                                        <div>
                                                            <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-900 dark:text-white mb-4">
                                                                Typical Challenges
                                                            </h4>

                                                            <ul className="space-y-3">
                                                                {sector.problems.map((problem) => (
                                                                    <li
                                                                        key={problem}
                                                                        className="flex items-start gap-3 text-sm text-ink-600 dark:text-ink-300"
                                                                    >
                                                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-600 shrink-0" />
                                                                        <span>{problem}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {sector.capabilities.length > 0 && (
                                                        <div>
                                                            <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-900 dark:text-white mb-4">
                                                                How We Can Help
                                                            </h4>

                                                            <ul className="space-y-3">
                                                                {sector.capabilities.map((capability) => (
                                                                    <li
                                                                        key={capability}
                                                                        className="flex items-start gap-3 text-sm text-ink-600 dark:text-ink-300"
                                                                    >
                                                                        <span className="text-brand-600 dark:text-brand-400 font-bold shrink-0">
                                                                            ✓
                                                                        </span>
                                                                        <span>{capability}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                )}
            </section>

            {/* Delivery model */}
            <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="max-w-3xl mb-12">
                            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                                Our Delivery Model
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mb-5">
                                A practical path from problem to delivery
                            </h2>

                            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                                Regardless of sector, our engagements are structured
                                around understanding the problem, building evidence,
                                designing the response and supporting implementation
                                through to sustainable use.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {deliveryStages.map((stage, index) => (
                            <FadeIn key={stage.number} delay={(index % 3) * 0.1}>
                                <div className="bg-white dark:bg-ink-900 p-7 rounded-xl border border-ink-200 dark:border-ink-800 h-full">
                                    <div className="text-brand-600 dark:text-brand-400 text-sm font-bold tracking-widest mb-4">
                                        {stage.number}
                                    </div>

                                    <h3 className="text-xl font-bold mb-3">{stage.title}</h3>

                                    <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                                        {stage.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience link */}
            <section className="px-6 py-20 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <FadeIn>
                        <div>
                            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                                Evidence of Delivery
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mb-5">
                                Our sector experience is backed by real assignments
                            </h2>

                            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                                Our experience includes consulting and assessment,
                                digital transformation, systems development, quality
                                assurance, capacity building and technology-enabled
                                institutional improvement across public and private
                                environments.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                            <Link
                                href="/experience"
                                className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 transition px-7 py-3 rounded-lg font-semibold text-white"
                            >
                                Explore Our Experience
                            </Link>

                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center border border-ink-300 dark:border-ink-700 hover:border-brand-500 transition px-7 py-3 rounded-lg font-semibold"
                            >
                                Explore Our Services
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeIn>
                        <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
                            Start With the Challenge
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-5">
                            Have a problem that needs to move toward a solution?
                        </h2>

                        <p className="text-ink-600 dark:text-ink-300 mb-8 leading-relaxed">
                            Tell us what you are trying to achieve, where the challenge
                            sits, and what needs to improve. We can help assess the
                            situation and shape a practical path toward delivery.
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