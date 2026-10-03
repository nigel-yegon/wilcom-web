"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import FadeIn from "../components/fade-in";
import {
  EXPERIENCE_SECTORS,
  projects,
  SERVICES,
} from "@/lib/experience";

type ModuleKey = "overview" | "services" | "experience" | "sectors";

type ServiceRecord = {
  id: string;
  name: string;
  description: string;
  status: "Published" | "Draft";
};

type SectorRecord = {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  status: "Published" | "Draft";
};

const initialServices: ServiceRecord[] = SERVICES.map((service, index) => ({
  id: `service-${index + 1}`,
  name: service,
  description: getServiceDescription(service),
  status: "Published",
}));

const initialSectors: SectorRecord[] = EXPERIENCE_SECTORS.map(
  (sector, index) => ({
    id: `sector-${index + 1}`,
    name: sector.name,
    description: sector.description,
    capabilities: [...sector.capabilities],
    status: "Published",
  }),
);

export default function DashboardPage() {
  const [activeModule, setActiveModule] =
    useState<ModuleKey>("overview");

  const [services, setServices] =
    useState<ServiceRecord[]>(initialServices);

  const [sectors, setSectors] =
    useState<SectorRecord[]>(initialSectors);

  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return projects;
    }

    return projects.filter((project) =>
      [
        project.title,
        project.client,
        project.sector,
        project.engagement,
        ...project.services,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  const stats = [
    {
      label: "Services",
      value: services.length,
      description: "Published service areas",
      module: "services" as ModuleKey,
    },
    {
      label: "Projects",
      value: projects.length,
      description: "Experience records",
      module: "experience" as ModuleKey,
    },
    {
      label: "Sectors",
      value: sectors.length,
      description: "Sector areas",
      module: "sectors" as ModuleKey,
    },
    {
      label: "Projects",
      value: projects.length,
      description: "Delivery Projects",
      module: "experience" as ModuleKey,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-ink-950">
      <div className="flex min-h-screen">
        <DashboardSidebar
          activeModule={activeModule}
          onNavigate={setActiveModule}
        />

        <main className="min-w-0 flex-1">
          <DashboardHeader
            activeModule={activeModule}
            search={search}
            setSearch={setSearch}
          />

          <div className="p-6 lg:p-8">
            {/* Key the animated subtree by activeModule so each module
                re-mounts and re-triggers its FadeIn animations on switch */}
            <div key={activeModule}>
              {activeModule === "overview" && (
                <Overview
                  stats={stats}
                  onNavigate={setActiveModule}
                />
              )}

              {activeModule === "services" && (
                <ServicesModule
                  services={services}
                  setServices={setServices}
                />
              )}

              {activeModule === "experience" && (
                <ExperienceModule
                  projects={filteredProjects}
                  search={search}
                />
              )}

              {activeModule === "sectors" && (
                <SectorsModule
                  sectors={sectors}
                  setSectors={setSectors}
                />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SIDEBAR                                                                    */
/* -------------------------------------------------------------------------- */

function DashboardSidebar({
  activeModule,
  onNavigate,
}: {
  activeModule: ModuleKey;
  onNavigate: (module: ModuleKey) => void;
}) {
  const modules: {
    key: ModuleKey;
    label: string;
    description: string;
    icon: React.ReactNode;
  }[] = [
    {
      key: "overview",
      label: "Overview",
      description: "Dashboard summary",
      icon: <GridIcon />,
    },
    {
      key: "services",
      label: "Services",
      description: "Manage service areas",
      icon: <LayersIcon />,
    },
    {
      key: "experience",
      label: "Experience",
      description: "Manage projects",
      icon: <BriefcaseIcon />,
    },
    {
      key: "sectors",
      label: "Sectors",
      description: "Manage sectors",
      icon: <BuildingIcon />,
    },
  ];

  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white dark:border-white/10 dark:bg-ink-900 lg:block">
      <div className="sticky top-0 flex h-screen flex-col">
        <div className="border-b border-slate-200 px-6 py-5 dark:border-white/10">
          <Link href="/" className="block">
            <div className="text-lg font-bold tracking-tight text-slate-950 dark:text-white">
              WilCom
              <span className="text-brand-600">.</span>
            </div>

            <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Content Dashboard
            </div>
          </Link>
        </div>

        <div className="flex-1 px-4 py-6">
          <div className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Content
          </div>

          <nav className="space-y-1">
            {modules.map((module) => {
              const active = activeModule === module.key;

              return (
                <button
                  key={module.key}
                  type="button"
                  onClick={() => onNavigate(module.key)}
                  className={[
                    "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition",
                    active
                      ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-9 w-9 items-center justify-center rounded-lg",
                      active
                        ? "bg-brand-100 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300"
                        : "bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400",
                    ].join(" ")}
                  >
                    {module.icon}
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">
                      {module.label}
                    </span>

                    <span className="block truncate text-xs text-slate-400">
                      {module.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Website
          </div>

          <nav className="space-y-1">
            <Link
              href="/services"
              target="_blank"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              <EyeIcon />
              View Services
            </Link>

            <Link
              href="/experience"
              target="_blank"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              <EyeIcon />
              View Experience
            </Link>

            <Link
              href="/sectors"
              target="_blank"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              <EyeIcon />
              View Sectors
            </Link>
          </nav>
        </div>

        <div className="border-t border-slate-200 p-4 dark:border-white/10">
          <div className="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              Website Content management
            </div>

            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Manage the content that displayed on WilCom&apos;s consulting,
              experience and sector website pages.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/* HEADER                                                                      */
/* -------------------------------------------------------------------------- */

function DashboardHeader({
  activeModule,
  search,
  setSearch,
}: {
  activeModule: ModuleKey;
  search: string;
  setSearch: (value: string) => void;
}) {
  const titles: Record<ModuleKey, string> = {
    overview: "Dashboard",
    services: "Services",
    experience: "Experience",
    sectors: "Sectors",
  };

  const descriptions: Record<ModuleKey, string> = {
    overview: "Manage WilCom website content from one place.",
    services: "Manage consulting and technology service areas.",
    experience: "Manage project experience and portfolio records.",
    sectors: "Manage the sectors and institutional environments WilCom serves.",
  };

  return (
    <header className="border-b border-slate-200 bg-white dark:border-white/10 dark:bg-ink-900">
      <div className="flex flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <FadeIn>
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.16em] text-brand-600">
              WilCom Content
            </div>

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              {titles[activeModule]}
            </h1>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {descriptions[activeModule]}
            </p>
          </div>
        </FadeIn>

        {activeModule === "experience" && (
          <FadeIn delay={0.1}>
            <div className="relative w-full lg:w-80">
              <SearchIcon />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search projects..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10"
              />
            </div>
          </FadeIn>
        )}
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* OVERVIEW                                                                    */
/* -------------------------------------------------------------------------- */

function Overview({
  stats,
  onNavigate,
}: {
  stats: {
    label: string;
    value: number;
    description: string;
    module: ModuleKey;
  }[];
  onNavigate: (module: ModuleKey) => void;
}) {
  return (
    <div className="mx-auto max-w-7xl">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            Content overview
          </h2>

          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            A central workspace for managing the consulting services,
            project experience and sectors represented across the WilCom
            website.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <FadeIn key={stat.label} delay={index * 0.08}>
            <button
              type="button"
              onClick={() => onNavigate(stat.module)}
              className="w-full rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md dark:border-white/10 dark:bg-ink-900 dark:hover:border-brand-500/30"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>

                  <div className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                    {stat.value}
                  </div>
                </div>

                <div className="rounded-lg bg-brand-50 p-2 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                  <ArrowIcon />
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-400">
                {stat.description}
              </div>
            </button>
          </FadeIn>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <FadeIn delay={0.15}>
          <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-ink-900 xl:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-950 dark:text-white">
                  Content modules
                </h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Select a module to manage its website content.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <ModuleCard
                title="Services"
                description="Consulting, transformation and technology capabilities."
                count={stats[0].value}
                onClick={() => onNavigate("services")}
              />

              <ModuleCard
                title="Experience"
                description="Projects, clients, engagements and delivery capabilities."
                count={stats[1].value}
                onClick={() => onNavigate("experience")}
              />

              <ModuleCard
                title="Sectors"
                description="Institutional and industry environments served."
                count={stats[2].value}
                onClick={() => onNavigate("sectors")}
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="h-full rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white dark:border-white/10">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
              WilCom Systems Limited
            </div>

            <h3 className="mt-3 text-xl font-semibold">
              We&apos;ll Do IT
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              The dashboard should help maintain the consulting story first:
              challenges, capabilities, sectors, engagements and outcomes.
              Technology should support that story rather than become the story.
            </p>

            <Link
              href="/"
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
            >
              View public website
              <ArrowIcon />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SERVICES                                                                    */
/* -------------------------------------------------------------------------- */

function ServicesModule({
  services,
  setServices,
}: {
  services: ServiceRecord[];
  setServices: React.Dispatch<React.SetStateAction<ServiceRecord[]>>;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const editingService = services.find(
    (service) => service.id === editingId,
  );

  return (
    <div className="mx-auto max-w-7xl">
      <FadeIn>
        <ModuleHeading
          eyebrow="Content module"
          title="Services"
          description="Manage the consulting and technology capabilities displayed on the public Services page."
          action={
            <button
              type="button"
              onClick={() => {
                const id = `service-${Date.now()}`;

                setServices((current) => [
                  ...current,
                  {
                    id,
                    name: "New Service",
                    description: "",
                    status: "Draft",
                  },
                ]);

                setEditingId(id);
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              <PlusIcon />
              Add service
            </button>
          }
        />
      </FadeIn>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1fr_360px]">
        <div className="space-y-3">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={Math.min(index * 0.05, 0.4)}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-ink-900">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-950 dark:text-white">
                        {service.name}
                      </h3>

                      <StatusBadge status={service.status} />
                    </div>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {service.description ||
                        "No description has been added yet."}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setEditingId(service.id)}
                    className="shrink-0 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div>
            {editingService ? (
              <ServiceEditor
                service={editingService}
                onClose={() => setEditingId(null)}
                onSave={(updated) => {
                  setServices((current) =>
                    current.map((service) =>
                      service.id === updated.id
                        ? updated
                        : service,
                    ),
                  );

                  setEditingId(null);
                }}
              />
            ) : (
              <EmptyEditorState
                title="Select a service"
                description="Choose a service from the list to edit its public-facing content."
              />
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function ServiceEditor({
  service,
  onClose,
  onSave,
}: {
  service: ServiceRecord;
  onClose: () => void;
  onSave: (service: ServiceRecord) => void;
}) {
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(
    service.description,
  );
  const [status, setStatus] =
    useState<ServiceRecord["status"]>(service.status);

  return (
    <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-ink-900">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
            Edit service
          </div>

          <h3 className="mt-1 font-semibold text-slate-950 dark:text-white">
            Service details
          </h3>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 dark:hover:text-white"
          aria-label="Close editor"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="mt-6 space-y-5">
        <Field label="Service name">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label="Description">
          <textarea
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            rows={6}
            className={inputClass}
          />
        </Field>

        <Field label="Status">
          <select
            value={status}
            onChange={(event) =>
              setStatus(
                event.target.value as ServiceRecord["status"],
              )
            }
            className={inputClass}
          >
            <option>Published</option>
            <option>Draft</option>
          </select>
        </Field>

        <div className="flex gap-2 pt-2">
          <button
            type="button"
            onClick={() =>
              onSave({
                ...service,
                name,
                description,
                status,
              })
            }
            className="flex-1 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Save changes
          </button>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* EXPERIENCE                                                                  */
/* -------------------------------------------------------------------------- */

function ExperienceModule({
  projects,
  search,
}: {
  projects: typeof import("@/lib/experience").projects;
  search: string;
}) {
  return (
    <div className="mx-auto max-w-7xl">
      <FadeIn>
        <ModuleHeading
          eyebrow="Portfolio content"
          title="Experience"
          description="Manage project references, engagement details, services demonstrated and online project representations."
          action={
            <Link
              href="/experience"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-ink-900 dark:text-slate-200 dark:hover:bg-white/5"
            >
              <EyeIcon />
              View public page
            </Link>
          }
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-ink-900">
          <div className="border-b border-slate-200 px-5 py-4 dark:border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-950 dark:text-white">
                  Project records
                </div>

                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {projects.length} project
                  {projects.length === 1 ? "" : "s"}
                  {search ? ` matching "${search}"` : ""}
                </div>
              </div>

              <Link
                href="/experience"
                target="_blank"
                className="text-xs font-semibold text-brand-600 hover:text-brand-700"
              >
                Preview experience →
              </Link>
            </div>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={Math.min(index * 0.04, 0.4)}>
                <div className="p-5 transition hover:bg-slate-50 dark:hover:bg-white/2">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-brand-50 px-2 py-1 text-[11px] font-bold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                          {project.id}
                        </span>

                        <span className="text-xs text-slate-400">
                          {project.sector}
                        </span>
                      </div>

                      <h3 className="mt-3 text-base font-semibold text-slate-950 dark:text-white">
                        {project.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {project.client}
                      </p>

                      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {project.summary}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex shrink-0 gap-2">
                      <Link
                        href={`/experience/${project.slug}`}
                        target="_blank"
                        className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
                      >
                        View
                      </Link>

                      <button
                        type="button"
                        className="rounded-lg bg-brand-600 px-3 py-2 text-xs font-semibold text-white hover:bg-brand-700"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}

            {projects.length === 0 && (
              <FadeIn>
                <div className="p-12 text-center">
                  <div className="text-sm font-semibold text-slate-950 dark:text-white">
                    No projects found
                  </div>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Try changing the search term.
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTORS                                                                     */
/* -------------------------------------------------------------------------- */

function SectorsModule({
  sectors,
  setSectors,
}: {
  sectors: SectorRecord[];
  setSectors: React.Dispatch<React.SetStateAction<SectorRecord[]>>;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const editingSector = sectors.find(
    (sector) => sector.id === editingId,
  );

  return (
    <div className="mx-auto max-w-7xl">
      <FadeIn>
        <ModuleHeading
          eyebrow="Content module"
          title="Sectors"
          description="Manage the sectors, institutional environments and capability narratives shown on the public Sectors page."
          action={
            <button
              type="button"
              onClick={() => {
                const id = `sector-${Date.now()}`;

                setSectors((current) => [
                  ...current,
                  {
                    id,
                    name: "New Sector",
                    description: "",
                    capabilities: [],
                    status: "Draft",
                  },
                ]);

                setEditingId(id);
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              <PlusIcon />
              Add sector
            </button>
          }
        />
      </FadeIn>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1fr_380px]">
        <div className="grid gap-4 md:grid-cols-2">
          {sectors.map((sector, index) => (
            <FadeIn key={sector.id} delay={Math.min(index * 0.05, 0.4)}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-ink-900">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <StatusBadge status={sector.status} />

                    <h3 className="mt-3 font-semibold text-slate-950 dark:text-white">
                      {sector.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {sector.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setEditingId(sector.id)}
                    className="shrink-0 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
                  >
                    Edit
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {sector.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600 dark:bg-white/5 dark:text-slate-300"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div>
            {editingSector ? (
              <SectorEditor
                sector={editingSector}
                onClose={() => setEditingId(null)}
                onSave={(updated) => {
                  setSectors((current) =>
                    current.map((sector) =>
                      sector.id === updated.id
                        ? updated
                        : sector,
                    ),
                  );

                  setEditingId(null);
                }}
              />
            ) : (
              <EmptyEditorState
                title="Select a sector"
                description="Choose a sector from the list to edit its public-facing content."
              />
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function SectorEditor({
  sector,
  onClose,
  onSave,
}: {
  sector: SectorRecord;
  onClose: () => void;
  onSave: (sector: SectorRecord) => void;
}) {
  const [name, setName] = useState(sector.name);
  const [description, setDescription] = useState(
    sector.description,
  );
  const [capabilities, setCapabilities] = useState(
    sector.capabilities.join("\n"),
  );
  const [status, setStatus] =
    useState<SectorRecord["status"]>(sector.status);

  return (
    <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-ink-900">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
            Edit sector
          </div>

          <h3 className="mt-1 font-semibold text-slate-950 dark:text-white">
            Sector details
          </h3>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 dark:hover:text-white"
          aria-label="Close editor"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="mt-6 space-y-5">
        <Field label="Sector name">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label="Description">
          <textarea
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            rows={6}
            className={inputClass}
          />
        </Field>

        <Field label="Capabilities">
          <textarea
            value={capabilities}
            onChange={(event) =>
              setCapabilities(event.target.value)
            }
            rows={7}
            placeholder="One capability per line"
            className={inputClass}
          />
        </Field>

        <Field label="Status">
          <select
            value={status}
            onChange={(event) =>
              setStatus(
                event.target.value as SectorRecord["status"],
              )
            }
            className={inputClass}
          >
            <option>Published</option>
            <option>Draft</option>
          </select>
        </Field>

        <div className="flex gap-2 pt-2">
          <button
            type="button"
            onClick={() =>
              onSave({
                ...sector,
                name,
                description,
                capabilities: capabilities
                  .split("\n")
                  .map((item) => item.trim())
                  .filter(Boolean),
                status,
              })
            }
            className="flex-1 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Save changes
          </button>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SHARED COMPONENTS                                                           */
/* -------------------------------------------------------------------------- */

function ModuleHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
          {eyebrow}
        </div>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
          {title}
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      {action}
    </div>
  );
}

function ModuleCard({
  title,
  description,
  count,
  onClick,
}: {
  title: string;
  description: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl border border-slate-200 p-4 text-left transition hover:border-brand-200 hover:bg-brand-50/50 dark:border-white/10 dark:hover:border-brand-500/20 dark:hover:bg-brand-500/5"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-slate-950 dark:text-white">
          {title}
        </h4>

        <span className="text-xs font-semibold text-brand-600">
          {count}
        </span>
      </div>

      <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </button>
  );
}

function EmptyEditorState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="sticky top-6 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center dark:border-white/10 dark:bg-ink-900">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-white/5">
        <EditIcon />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-slate-950 dark:text-white">
        {title}
      </h3>

      <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </span>

      {children}
    </label>
  );
}

function StatusBadge({
  status,
}: {
  status: "Published" | "Draft";
}) {
  return (
    <span
      className={[
        "inline-flex rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider",
        status === "Published"
          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
          : "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
      ].join(" ")}
    >
      {status}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* DATA HELPERS                                                                */
/* -------------------------------------------------------------------------- */

function getServiceDescription(service: string) {
  const descriptions: Record<string, string> = {
    "Management Consulting":
      "Advisory support focused on institutional, operational and management challenges, translating requirements into practical actions and delivery priorities.",

    "Digital Transformation":
      "Helping organizations redesign services, processes and operating models through purposeful use of digital technologies.",

    "Systems Development":
      "Designing and developing fit-for-purpose information systems, web platforms and enterprise applications.",

    "ICT Advisory":
      "Independent advice on ICT strategy, needs assessment, architecture, infrastructure, systems and technology investment.",

    "Quality Assurance & Security":
      "Quality assurance, security assessment and controls designed to improve the reliability, resilience and trustworthiness of digital systems.",

    "Capacity Building":
      "Structured training, knowledge transfer and institutional capability development to support adoption and sustainable use.",

    "Programme Delivery":
      "Practical implementation support across complex technology, institutional development and digital transformation programmes.",

    "ICT Infrastructure & Integration":
      "Infrastructure, connectivity and technology integration capabilities supporting dependable digital environments.",
  };

  return (
    descriptions[service] ??
    "WilCom capability supporting institutional and technology-enabled transformation."
  );
}

/* -------------------------------------------------------------------------- */
/* ICONS                                                                       */
/* -------------------------------------------------------------------------- */

function GridIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M16 9h2a2 2 0 0 1 2 2v10" />
      <path d="M8 7h4M8 11h4M8 15h4M8 19h4" />
      <path d="M2 21h20" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10";