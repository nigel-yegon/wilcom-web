"use client";

import type { Metadata } from "next";

import Link from "next/link";
import { useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  client: string;
  sector: string;
  engagement: string;
  capabilities: string[];
  summary: string;
};

const projects: Project[] = [
  {
    id: "ref-01",
    title: "e-GP 3rd Party Quality Assurance & Security Audit",
    client: "The National Treasury",
    sector: "Government",
    engagement: "Quality Assurance & Security",
    capabilities: ["Quality Assurance", "Information Security", "Digital Systems"],
    summary:
      "Quality assurance and security audit support for an electronic government procurement environment.",
  },
  {
    id: "ref-02",
    title:
      "Capacity Building of TVET Trainers on ODeL Curriculum Delivery & Assessment",
    client:
      "Ministry of Education, State Department of Vocational and Technical Training & AfDB",
    sector: "Education & TVET",
    engagement: "Capacity Building",
    capabilities: ["Capacity Building", "Digital Transformation", "Advisory"],
    summary:
      "Capacity building focused on trainers' ability to support open, distance and electronic learning curriculum delivery and assessment.",
  },
  {
    id: "ref-03",
    title: "Design, Development & Hosting of an Interactive Website",
    client: "Municipality of Eldoret",
    sector: "Government",
    engagement: "Digital Transformation",
    capabilities: ["Digital Systems", "Digital Transformation"],
    summary:
      "Design, development and hosting of an interactive digital platform supporting institutional communication and service access.",
  },
  {
    id: "ref-04",
    title: "Development of a Web-Based TVET Management Information System",
    client: "Ministry of Education, State Department for TVET",
    sector: "Education & TVET",
    engagement: "Systems Development",
    capabilities: ["Digital Systems", "Information Management"],
    summary:
      "Development of a web-based management information system to support TVET information and institutional processes.",
  },
  {
    id: "ref-05",
    title: "Capacity Building of SMEs",
    client: "County Government of Uasin Gishu",
    sector: "Government",
    engagement: "Capacity Building",
    capabilities: ["Capacity Building", "Advisory"],
    summary:
      "Capacity building support for small and medium enterprises within a county development context.",
  },
  {
    id: "ref-06",
    title: "Records Management Consultancy",
    client: "County Government of Uasin Gishu",
    sector: "Government",
    engagement: "Consulting & Assessment",
    capabilities: ["Advisory", "Information Management"],
    summary:
      "Consultancy support addressing institutional records management requirements and information handling practices.",
  },
  {
    id: "ref-07",
    title: "Comprehensive ICT Needs Assessment",
    client: "Uasin Gishu County Assembly",
    sector: "Government",
    engagement: "Consulting & Assessment",
    capabilities: ["Advisory", "ICT Strategy"],
    summary:
      "Assessment of institutional ICT needs to inform technology, infrastructure and systems planning.",
  },
  {
    id: "ref-08",
    title: "National Tourism Service Portal",
    client: "Ministry of Tourism and Wildlife, State Department for Tourism",
    sector: "Tourism",
    engagement: "Systems Development",
    capabilities: ["Digital Systems", "Digital Transformation"],
    summary:
      "Development of a national digital service platform supporting tourism-related information and services.",
  },
  {
    id: "ref-09",
    title: "Library Information Management System for MTRD",
    client:
      "Ministry of Transport, Infrastructure & Public Works, State Department for Roads",
    sector: "Government",
    engagement: "Systems Development",
    capabilities: ["Digital Systems", "Information Management"],
    summary:
      "Development of an information management system supporting library and knowledge resources within a public institution.",
  },
  {
    id: "ref-10",
    title: "Integrated Health Management Information System",
    client: "County Government of Nandi",
    sector: "Health",
    engagement: "Systems Development",
    capabilities: ["Digital Systems", "Information Management", "Digital Transformation"],
    summary:
      "Development of an integrated management information system supporting health-sector information and operational processes.",
  },
  {
    id: "ref-11",
    title: "Online Administrative Review Case Management System",
    client: "Public Procurement Regulatory Authority",
    sector: "Procurement",
    engagement: "Systems Development",
    capabilities: ["Digital Systems", "Information Management"],
    summary:
      "Development of an online case management environment supporting administrative review processes.",
  },
  {
    id: "ref-12",
    title: "Public Procurement Information Portal",
    client: "Public Procurement Regulatory Authority",
    sector: "Procurement",
    engagement: "Digital Transformation",
    capabilities: ["Digital Systems", "Digital Transformation"],
    summary:
      "Development of a public-facing information portal supporting access to procurement information and services.",
  },
  {
    id: "ref-13",
    title: "SIM Box Fraud Detector",
    client: "Communications Authority of Kenya",
    sector: "ICT & Telecommunications",
    engagement: "Systems Development",
    capabilities: ["Digital Systems", "ICT Strategy"],
    summary:
      "Development of a technology solution supporting detection and management of SIM box-related fraud.",
  },
  {
    id: "ref-15",
    title: "Network Monitoring Software",
    client: "Communications Authority of Kenya",
    sector: "ICT & Telecommunications",
    engagement: "Systems Development",
    capabilities: ["Digital Systems", "ICT Strategy"],
    summary:
      "Development of software supporting monitoring of network environments and operational visibility.",
  },
  {
    id: "ref-16",
    title: "RFID File Management System",
    client: "Communications Authority of Kenya",
    sector: "ICT & Telecommunications",
    engagement: "Systems Development",
    capabilities: ["Digital Systems", "Information Management"],
    summary:
      "Development of an RFID-enabled file management solution supporting institutional records and information workflows.",
  },
];

const sectors = [
  "All sectors",
  ...Array.from(new Set(projects.map((project) => project.sector))),
];

const engagements = [
  "All engagement types",
  ...Array.from(new Set(projects.map((project) => project.engagement))),
];

const capabilities = [
  "All capabilities",
  ...Array.from(
    new Set(projects.flatMap((project) => project.capabilities)),
  ),
];

export default function ExperiencePage() {
  const [sector, setSector] = useState("All sectors");
  const [engagement, setEngagement] = useState("All engagement types");
  const [capability, setCapability] = useState("All capabilities");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSector =
        sector === "All sectors" || project.sector === sector;

      const matchesEngagement =
        engagement === "All engagement types" ||
        project.engagement === engagement;

      const matchesCapability =
        capability === "All capabilities" ||
        project.capabilities.includes(capability);

      return matchesSector && matchesEngagement && matchesCapability;
    });
  }, [sector, engagement, capability]);

  const clearFilters = () => {
    setSector("All sectors");
    setEngagement("All engagement types");
    setCapability("All capabilities");
  };

  const hasFilters =
    sector !== "All sectors" ||
    engagement !== "All engagement types" ||
    capability !== "All capabilities";

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto text-center">
        <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Selected Experience
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl mx-auto">
          Experience That{" "}
          <span className="text-brand-600 dark:text-brand-400">
            Supports Delivery
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
          WilCom&apos;s experience spans consulting, digital transformation,
          systems development, quality assurance, capacity building and ICT
          advisory assignments across public institutions and development
          environments.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <span className="px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-sm font-medium">
            Government &amp; Public Sector
          </span>
          <span className="px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-sm font-medium">
            Education &amp; TVET
          </span>
          <span className="px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-sm font-medium">
            Digital Systems
          </span>
          <span className="px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-sm font-medium">
            Advisory &amp; Capacity Building
          </span>
        </div>
      </section>

      {/* Portfolio introduction */}
      <section className="px-6 py-16 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Portfolio
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A portfolio of practical assignments
            </h2>

            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
              The assignments below illustrate the kinds of institutional,
              operational and digital challenges WilCom has supported. Use the
              filters to explore experience by sector, engagement type or
              capability.
            </p>
          </div>

          {/* Selection criteria */}
          <div className="bg-white dark:bg-ink-900 rounded-2xl border border-ink-200 dark:border-ink-800 p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label
                  htmlFor="sector"
                  className="block text-sm font-semibold mb-2"
                >
                  Sector
                </label>

                <select
                  id="sector"
                  value={sector}
                  onChange={(event) => setSector(event.target.value)}
                  className="w-full rounded-lg border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-950 px-4 py-3 text-sm text-ink-800 dark:text-ink-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  {sectors.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="engagement"
                  className="block text-sm font-semibold mb-2"
                >
                  Engagement type
                </label>

                <select
                  id="engagement"
                  value={engagement}
                  onChange={(event) => setEngagement(event.target.value)}
                  className="w-full rounded-lg border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-950 px-4 py-3 text-sm text-ink-800 dark:text-ink-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  {engagements.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="capability"
                  className="block text-sm font-semibold mb-2"
                >
                  Capability
                </label>

                <select
                  id="capability"
                  value={capability}
                  onChange={(event) => setCapability(event.target.value)}
                  className="w-full rounded-lg border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-950 px-4 py-3 text-sm text-ink-800 dark:text-ink-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  {capabilities.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-5 border-t border-ink-200 dark:border-ink-800">
              <p className="text-sm text-ink-500 dark:text-ink-400">
                Showing{" "}
                <span className="font-semibold text-ink-800 dark:text-ink-100">
                  {filteredProjects.length}
                </span>{" "}
                {filteredProjects.length === 1 ? "assignment" : "assignments"}
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
        </div>
      </section>

      {/* Project portfolio */}
      <section className="px-6 py-20 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="h-full bg-white dark:bg-ink-900 rounded-2xl border border-ink-200 dark:border-ink-800 p-7 hover:border-brand-500 dark:hover:border-brand-500 transition"
            >
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-xs font-semibold">
                  {project.sector}
                </span>

                <span className="px-3 py-1 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 text-xs font-medium">
                  {project.engagement}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 leading-snug">
                {project.title}
              </h3>

              <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4">
                {project.client}
              </p>

              <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed mb-6">
                {project.summary}
              </p>

              <div className="pt-5 border-t border-ink-200 dark:border-ink-800">
                <p className="text-xs uppercase tracking-wider font-semibold text-ink-500 dark:text-ink-400 mb-3">
                  Relevant capabilities
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.capabilities.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">
              No assignments match these criteria
            </h3>

            <p className="text-ink-600 dark:text-ink-300 mb-6">
              Try another combination of sector, engagement type or capability.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="inline-block bg-brand-600 hover:bg-brand-700 transition px-6 py-3 rounded-lg font-semibold text-white"
            >
              View All Experience
            </button>
          </div>
        )}
      </section>

      {/* What the portfolio demonstrates */}
      <section className="px-6 py-20 bg-ink-100 dark:bg-ink-900/60">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Experience Themes
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The common thread across our assignments
            </h2>

            <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
              Although the sectors and assignments differ, our experience
              consistently sits at the intersection of institutional
              requirements, technology, people and sustainable delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Understand",
                description:
                  "Assess institutional needs, operational challenges and information requirements.",
              },
              {
                title: "Design",
                description:
                  "Translate requirements into practical systems, processes, strategies and interventions.",
              },
              {
                title: "Deliver",
                description:
                  "Develop, implement, integrate and assure solutions in their operational context.",
              },
              {
                title: "Enable",
                description:
                  "Build institutional capability through knowledge transfer, training and sustainable handover.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-ink-900 p-6 rounded-xl border border-ink-200 dark:border-ink-800"
              >
                <h3 className="text-lg font-semibold text-brand-600 dark:text-brand-400 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Your Challenge
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Looking for experience relevant to your assignment?
          </h2>

          <p className="text-ink-600 dark:text-ink-300 mb-8 leading-relaxed">
            Tell us what you are trying to achieve. We can discuss the
            requirements, determine the appropriate engagement and identify
            where our experience can contribute.
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
        </div>
      </section>
    </main>
  );
}