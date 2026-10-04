"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import Link from "next/link";

import FadeIn from "../components/fade-in";
import {
  createProject,
  deleteProject,
  listProjects,
  updateProject,
} from "./actions/projects";
import {
  createSector,
  deleteSector,
  listSectors,
  updateSector,
} from "./actions/sectors";
import {
  createService,
  deleteService,
  listServices,
  updateService,
} from "./actions/services";

type ModuleKey = "overview" | "services" | "experience" | "sectors";

type ServiceRecord = {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string | null;
  order: number;
  published: boolean;
};

type SectorRecord = {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
  description: string;
  problems: string[];
  capabilities: string[];
  order: number;
  published: boolean;
};

type ProjectRecord = {
  id: string;
  ref: string;
  title: string;
  slug: string;
  client: string;
  sector: string;
  engagement: string;
  summary: string;
  context: string;
  challenge: string;
  engagementDetail: string;
  services: string[];
  deliveryFocus: string[];
  onlineUrl: string | null;
  onlineLabel: string | null;
  order: number;
  published: boolean;
};

export default function DashboardPage() {
  const [activeModule, setActiveModule] = useState<ModuleKey>("overview");
  const [search, setSearch] = useState("");

  /* ----------------------------- Data state ----------------------------- */

  const [services, setServices] = useState<ServiceRecord[]>([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [servicesError, setServicesError] = useState<string | null>(null);

  const [sectors, setSectors] = useState<SectorRecord[]>([]);
  const [sectorsLoading, setSectorsLoading] = useState(true);
  const [sectorsError, setSectorsError] = useState<string | null>(null);

  const [projects, setProjects] = useState<ProjectRecord[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState<string | null>(null);

  /* ----------------------------- Initial load ---------------------------- */

  useEffect(() => {
    let cancelled = false;

    async function loadAll() {
      try {
        setServicesLoading(true);
        setServicesError(null);
        const rows = await listServices();
        if (cancelled) return;
        setServices(
          rows.map((r) => ({
            id: r.id,
            title: r.title,
            slug: r.slug,
            description: r.description,
            icon: r.icon,
            order: r.order,
            published: r.published,
          })),
        );
      } catch (err) {
        if (!cancelled)
          setServicesError(
            err instanceof Error ? err.message : "Failed to load services",
          );
      } finally {
        if (!cancelled) setServicesLoading(false);
      }
    }

    async function loadSectors() {
      try {
        setSectorsLoading(true);
        setSectorsError(null);
        const rows = await listSectors();
        if (cancelled) return;
        setSectors(
          rows.map((r) => ({
            id: r.id,
            name: r.name,
            slug: r.slug,
            icon: r.icon,
            description: r.description,
            problems: r.problems ?? [],
            capabilities: r.capabilities ?? [],
            order: r.order,
            published: r.published,
          })),
        );
      } catch (err) {
        if (!cancelled)
          setSectorsError(
            err instanceof Error ? err.message : "Failed to load sectors",
          );
      } finally {
        if (!cancelled) setSectorsLoading(false);
      }
    }

    async function loadProjects() {
      try {
        setProjectsLoading(true);
        setProjectsError(null);
        const rows = await listProjects();
        if (cancelled) return;
        setProjects(
          rows.map((r) => ({
            id: r.id,
            ref: r.ref,
            title: r.title,
            slug: r.slug,
            client: r.client,
            sector: r.sector,
            engagement: r.engagement,
            summary: r.summary,
            context: r.context ?? "",
            challenge: r.challenge ?? "",
            engagementDetail: r.engagementDetail ?? "",
            services: r.services ?? [],
            deliveryFocus: r.deliveryFocus ?? [],
            onlineUrl: r.onlineUrl,
            onlineLabel: r.onlineLabel,
            order: r.order,
            published: r.published,
          })),
        );
      } catch (err) {
        if (!cancelled)
          setProjectsError(
            err instanceof Error ? err.message : "Failed to load projects",
          );
      } finally {
        if (!cancelled) setProjectsLoading(false);
      }
    }

    loadAll();
    loadSectors();
    loadProjects();

    return () => {
      cancelled = true;
    };
  }, []);

  /* ------------------------------ Filtering ------------------------------ */

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return projects;

    return projects.filter((p) =>
      [p.ref, p.title, p.client, p.sector, p.engagement, ...p.services]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [search, projects]);

  /* -------------------------------- Stats -------------------------------- */

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
      label: "Published",
      value:
        services.filter((s) => s.published).length +
        sectors.filter((s) => s.published).length +
        projects.filter((p) => p.published).length,
      description: "Live content items",
      module: "overview" as ModuleKey,
    },
  ];

  /* -------------------------------- Render ------------------------------- */

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
            <div key={activeModule}>
              {activeModule === "overview" && (
                <Overview stats={stats} onNavigate={setActiveModule} />
              )}

              {activeModule === "services" && (
                <ServicesModule
                  services={services}
                  setServices={setServices}
                  loading={servicesLoading}
                  error={servicesError}
                />
              )}

              {activeModule === "experience" && (
                <ExperienceModule
                  projects={filteredProjects}
                  setProjects={setProjects}
                  search={search}
                  loading={projectsLoading}
                  error={projectsError}
                />
              )}

              {activeModule === "sectors" && (
                <SectorsModule
                  sectors={sectors}
                  setSectors={setSectors}
                  loading={sectorsLoading}
                  error={sectorsError}
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
                onChange={(e) => setSearch(e.target.value)}
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
            <h3 className="mt-3 text-xl font-semibold">We&apos;ll Do IT</h3>
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
/* SERVICES MODULE                                                             */
/* -------------------------------------------------------------------------- */

function ServicesModule({
  services,
  setServices,
  loading,
  error,
}: {
  services: ServiceRecord[];
  setServices: React.Dispatch<React.SetStateAction<ServiceRecord[]>>;
  loading: boolean;
  error: string | null;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const editingService = services.find((s) => s.id === editingId);

  function handleCreate() {
    startTransition(async () => {
      try {
        const created = await createService({
          title: "New Service",
          description: "Describe this service…",
          published: false,
        });

        setServices((current) => [
          ...current,
          {
            id: created.id,
            title: created.title,
            slug: created.slug,
            description: created.description,
            icon: created.icon,
            order: created.order,
            published: created.published,
          },
        ]);

        setEditingId(created.id);
      } catch (err) {
        alert(err instanceof Error ? err.message : "Failed to create service");
      }
    });
  }

  async function handleSave(updated: ServiceRecord) {
    const previous = services;
    setServices((current) =>
      current.map((s) => (s.id === updated.id ? updated : s)),
    );

    try {
      await updateService(updated.id, {
        title: updated.title,
        description: updated.description,
        icon: updated.icon,
        published: updated.published,
      });
      setEditingId(null);
    } catch (err) {
      setServices(previous);
      alert(err instanceof Error ? err.message : "Failed to save service");
    }
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this service? This cannot be undone.")) return;

    const previous = services;
    setServices((current) => current.filter((s) => s.id !== id));
    if (editingId === id) setEditingId(null);

    startTransition(async () => {
      try {
        await deleteService(id);
      } catch (err) {
        setServices(previous);
        alert(err instanceof Error ? err.message : "Failed to delete service");
      }
    });
  }

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
              onClick={handleCreate}
              disabled={pending}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <PlusIcon />
              {pending ? "Adding…" : "Add service"}
            </button>
          }
        />
      </FadeIn>

      {error && <ErrorBanner>{error}</ErrorBanner>}

      <div className="mt-6 grid gap-4 xl:grid-cols-[1fr_360px]">
        <div className="space-y-3">
          <LoadingSkeletons visible={loading && services.length === 0} />

          {!loading && services.length === 0 && (
            <EmptyState
              title="No services yet"
              description="Click Add service to create your first one."
            />
          )}

          {services.map((service, index) => (
            <FadeIn key={service.id} delay={Math.min(index * 0.05, 0.4)}>
              <div
                className={[
                  "rounded-2xl border bg-white p-5 transition dark:bg-ink-900",
                  editingId === service.id
                    ? "border-brand-300 ring-2 ring-brand-500/10 dark:border-brand-500/40"
                    : "border-slate-200 dark:border-white/10",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-950 dark:text-white">
                        {service.title}
                      </h3>
                      <StatusBadge published={service.published} />
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {service.description ||
                        "No description has been added yet."}
                    </p>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => setEditingId(service.id)}
                      className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
                    >
                      Edit
                    </button>
                    <DeleteButton
                      onClick={() => handleDelete(service.id)}
                      disabled={pending}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div>
            {editingService ? (
              <ServiceEditor
                key={editingService.id}
                service={editingService}
                onClose={() => setEditingId(null)}
                onSave={handleSave}
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
  onSave: (service: ServiceRecord) => void | Promise<void>;
}) {
  const [title, setTitle] = useState(service.title);
  const [description, setDescription] = useState(service.description);
  const [icon, setIcon] = useState(service.icon ?? "");
  const [published, setPublished] = useState(service.published);
  const [saving, startSave] = useTransition();

  function handleSave() {
    startSave(async () => {
      await onSave({
        ...service,
        title,
        description,
        icon: icon.trim() ? icon.trim() : null,
        published,
      });
    });
  }

  return (
    <EditorShell
      eyebrow="Edit service"
      title="Service details"
      onClose={onClose}
      saving={saving}
      onSave={handleSave}
    >
      <Field label="Service title">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field label="Description">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
          className={inputClass}
        />
      </Field>

      <Field label="Icon (optional)">
        <input
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder="e.g. layers, briefcase, building"
          className={inputClass}
        />
      </Field>

      <PublishToggle value={published} onChange={setPublished} />
    </EditorShell>
  );
}

/* -------------------------------------------------------------------------- */
/* EXPERIENCE MODULE                                                           */
/* -------------------------------------------------------------------------- */

function ExperienceModule({
  projects,
  setProjects,
  search,
  loading,
  error,
}: {
  projects: ProjectRecord[];
  setProjects: React.Dispatch<React.SetStateAction<ProjectRecord[]>>;
  search: string;
  loading: boolean;
  error: string | null;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const editingProject = projects.find((p) => p.id === editingId);

  function handleCreate() {
    startTransition(async () => {
      try {
        const ref = `P-${String(Date.now()).slice(-4)}`;
        const created = await createProject({
          ref,
          title: "New Project",
          client: "Client name",
          sector: "Sector",
          engagement: "Engagement type",
          summary: "Describe the project…",
          context: "",
          challenge: "",
          engagementDetail: "",
          services: [],
          deliveryFocus: [],
          published: false,
        });

        setProjects((current) => [
          ...current,
          {
            id: created.id,
            ref: created.ref,
            title: created.title,
            slug: created.slug,
            client: created.client,
            sector: created.sector,
            engagement: created.engagement,
            summary: created.summary,
            context: created.context ?? "",
            challenge: created.challenge ?? "",
            engagementDetail: created.engagementDetail ?? "",
            services: created.services ?? [],
            deliveryFocus: created.deliveryFocus ?? [],
            onlineUrl: created.onlineUrl,
            onlineLabel: created.onlineLabel,
            order: created.order,
            published: created.published,
          },
        ]);

        setEditingId(created.id);
      } catch (err) {
        alert(err instanceof Error ? err.message : "Failed to create project");
      }
    });
  }

  async function handleSave(updated: ProjectRecord) {
    const previous = projects;
    setProjects((current) =>
      current.map((p) => (p.id === updated.id ? updated : p)),
    );

    try {
      await updateProject(updated.id, {
        ref: updated.ref,
        title: updated.title,
        client: updated.client,
        sector: updated.sector,
        engagement: updated.engagement,
        summary: updated.summary,
        context: updated.context,
        challenge: updated.challenge,
        engagementDetail: updated.engagementDetail,
        services: updated.services,
        deliveryFocus: updated.deliveryFocus,
        onlineUrl: updated.onlineUrl,
        onlineLabel: updated.onlineLabel,
        published: updated.published,
      });
      setEditingId(null);
    } catch (err) {
      setProjects(previous);
      alert(err instanceof Error ? err.message : "Failed to save project");
    }
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this project? This cannot be undone.")) return;

    const previous = projects;
    setProjects((current) => current.filter((p) => p.id !== id));
    if (editingId === id) setEditingId(null);

    startTransition(async () => {
      try {
        await deleteProject(id);
      } catch (err) {
        setProjects(previous);
        alert(err instanceof Error ? err.message : "Failed to delete project");
      }
    });
  }

  return (
    <div className="mx-auto max-w-7xl">
      <FadeIn>
        <ModuleHeading
          eyebrow="Portfolio content"
          title="Experience"
          description="Manage project references, engagement details, services demonstrated and online project representations."
          action={
            <button
              type="button"
              onClick={handleCreate}
              disabled={pending}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <PlusIcon />
              {pending ? "Adding…" : "Add project"}
            </button>
          }
        />
      </FadeIn>

      {error && <ErrorBanner>{error}</ErrorBanner>}

      <div className="mt-6 grid gap-4 xl:grid-cols-[1fr_420px]">
        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-ink-900">
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
              <LoadingSkeletons visible={loading && projects.length === 0} compact />

              {!loading && projects.length === 0 && (
                <div className="p-12 text-center">
                  <div className="text-sm font-semibold text-slate-950 dark:text-white">
                    No projects found
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {search ? "Try changing the search term." : "Click Add project to create your first one."}
                  </p>
                </div>
              )}

              {projects.map((project, index) => (
                <FadeIn key={project.id} delay={Math.min(index * 0.04, 0.4)}>
                  <div
                    className={[
                      "p-5 transition",
                      editingId === project.id
                        ? "bg-brand-50/40 dark:bg-brand-500/5"
                        : "hover:bg-slate-50 dark:hover:bg-white/2",
                    ].join(" ")}
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-md bg-brand-50 px-2 py-1 text-[11px] font-bold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                            {project.ref}
                          </span>
                          <StatusBadge published={project.published} />
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

                        {/* Detail-page content preview */}
                        <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                          <DetailPill
                            label="Context"
                            complete={project.context.length > 0}
                          />
                          <DetailPill
                            label="Challenge"
                            complete={project.challenge.length > 0}
                          />
                          <DetailPill
                            label="Engagement"
                            complete={project.engagementDetail.length > 0}
                          />
                          <DetailPill
                            label="Delivery focus"
                            complete={project.deliveryFocus.length > 0}
                            count={project.deliveryFocus.length}
                          />
                          <DetailPill
                            label="Online link"
                            complete={!!project.onlineUrl}
                          />
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
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
                        <button
                          type="button"
                          onClick={() => setEditingId(project.id)}
                          className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
                        >
                          Edit
                        </button>
                        <DeleteButton
                          onClick={() => handleDelete(project.id)}
                          disabled={pending}
                        />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div>
            {editingProject ? (
              <ProjectEditor
                key={editingProject.id}
                project={editingProject}
                onClose={() => setEditingId(null)}
                onSave={handleSave}
              />
            ) : (
              <EmptyEditorState
                title="Select a project"
                description="Choose a project from the list to edit its content."
              />
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function ProjectEditor({
  project,
  onClose,
  onSave,
}: {
  project: ProjectRecord;
  onClose: () => void;
  onSave: (project: ProjectRecord) => void | Promise<void>;
}) {
  const [ref, setRef] = useState(project.ref);
  const [title, setTitle] = useState(project.title);
  const [client, setClient] = useState(project.client);
  const [sector, setSector] = useState(project.sector);
  const [engagement, setEngagement] = useState(project.engagement);
  const [summary, setSummary] = useState(project.summary);

  const [context, setContext] = useState(project.context);
  const [challenge, setChallenge] = useState(project.challenge);
  const [engagementDetail, setEngagementDetail] = useState(
    project.engagementDetail,
  );

  const [servicesText, setServicesText] = useState(project.services.join("\n"));
  const [deliveryFocusText, setDeliveryFocusText] = useState(
    project.deliveryFocus.join("\n"),
  );

  const [onlineUrl, setOnlineUrl] = useState(project.onlineUrl ?? "");
  const [onlineLabel, setOnlineLabel] = useState(project.onlineLabel ?? "");

  const [published, setPublished] = useState(project.published);
  const [saving, startSave] = useTransition();

  function handleSave() {
    startSave(async () => {
      await onSave({
        ...project,
        ref,
        title,
        client,
        sector,
        engagement,
        summary,
        context,
        challenge,
        engagementDetail,
        services: servicesText
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        deliveryFocus: deliveryFocusText
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        onlineUrl: onlineUrl.trim() ? onlineUrl.trim() : null,
        onlineLabel: onlineLabel.trim() ? onlineLabel.trim() : null,
        published,
      });
    });
  }

  return (
    <EditorShell
      eyebrow="Edit project"
      title="Project details"
      onClose={onClose}
      saving={saving}
      onSave={handleSave}
    >
      {/* ---------------- Identity ---------------- */}

      <EditorSection label="Identity">
        <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
          <Field label="Reference">
            <input
              value={ref}
              onChange={(e) => setRef(e.target.value)}
              placeholder="P-001"
              className={inputClass}
            />
          </Field>

          <Field label="Title">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputClass}
            />
          </Field>
        </div>
      </EditorSection>

      {/* ---------------- Core metadata ---------------- */}

      <EditorSection label="Metadata">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Client">
            <input
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className={inputClass}
            />
          </Field>

          <Field label="Sector">
            <input
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Engagement type">
          <input
            value={engagement}
            onChange={(e) => setEngagement(e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label="Summary (shown on cards)">
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={4}
            className={inputClass}
          />
        </Field>
      </EditorSection>

      {/* ---------------- Detail page content ---------------- */}

      <EditorSection label="Detail page content">
        <Field label="Project context">
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            rows={5}
            placeholder="Background, setting and why this engagement happened…"
            className={inputClass}
          />
        </Field>

        <Field label="The challenge">
          <textarea
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
            rows={5}
            placeholder="What problem did the engagement address?"
            className={inputClass}
          />
        </Field>

        <Field label="WilCom's engagement">
          <textarea
            value={engagementDetail}
            onChange={(e) => setEngagementDetail(e.target.value)}
            rows={5}
            placeholder="What WilCom actually did…"
            className={inputClass}
          />
        </Field>
      </EditorSection>

      {/* ---------------- Lists ---------------- */}

      <EditorSection label="Lists">
        <Field label="Services (one per line)">
          <textarea
            value={servicesText}
            onChange={(e) => setServicesText(e.target.value)}
            rows={4}
            placeholder="Management Consulting&#10;Digital Transformation"
            className={inputClass}
          />
        </Field>

        <Field label="Delivery focus (one per line)">
          <textarea
            value={deliveryFocusText}
            onChange={(e) => setDeliveryFocusText(e.target.value)}
            rows={4}
            placeholder="Process mapping and redesign&#10;Digital workflow configuration"
            className={inputClass}
          />
        </Field>
      </EditorSection>

      {/* ---------------- External link ---------------- */}

      <EditorSection label="External link (optional)">
        <Field label="URL">
          <input
            type="url"
            value={onlineUrl}
            onChange={(e) => setOnlineUrl(e.target.value)}
            placeholder="https://…"
            className={inputClass}
          />
        </Field>

        <Field label="Button label">
          <input
            value={onlineLabel}
            onChange={(e) => setOnlineLabel(e.target.value)}
            placeholder="View live system"
            className={inputClass}
          />
        </Field>
      </EditorSection>

      {/* ---------------- Publication ---------------- */}

      <PublishToggle value={published} onChange={setPublished} />
    </EditorShell>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTORS MODULE                                                              */
/* -------------------------------------------------------------------------- */

function SectorsModule({
  sectors,
  setSectors,
  loading,
  error,
}: {
  sectors: SectorRecord[];
  setSectors: React.Dispatch<React.SetStateAction<SectorRecord[]>>;
  loading: boolean;
  error: string | null;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const editingSector = sectors.find((s) => s.id === editingId);

  function handleCreate() {
    startTransition(async () => {
      try {
        const created = await createSector({
          name: "New Sector",
          description: "",
          icon: null,
          problems: [],
          capabilities: [],
          published: false,
        });

        setSectors((current) => [
          ...current,
          {
            id: created.id,
            name: created.name,
            slug: created.slug,
            icon: created.icon,
            description: created.description,
            problems: created.problems ?? [],
            capabilities: created.capabilities ?? [],
            order: created.order,
            published: created.published,
          },
        ]);

        setEditingId(created.id);
      } catch (err) {
        alert(err instanceof Error ? err.message : "Failed to create sector");
      }
    });
  }

  async function handleSave(updated: SectorRecord) {
    const previous = sectors;
    setSectors((current) =>
      current.map((s) => (s.id === updated.id ? updated : s)),
    );

    try {
      await updateSector(updated.id, {
        name: updated.name,
        description: updated.description,
        icon: updated.icon,
        problems: updated.problems,
        capabilities: updated.capabilities,
        published: updated.published,
      });
      setEditingId(null);
    } catch (err) {
      setSectors(previous);
      alert(err instanceof Error ? err.message : "Failed to save sector");
    }
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this sector? This cannot be undone.")) return;

    const previous = sectors;
    setSectors((current) => current.filter((s) => s.id !== id));
    if (editingId === id) setEditingId(null);

    startTransition(async () => {
      try {
        await deleteSector(id);
      } catch (err) {
        setSectors(previous);
        alert(err instanceof Error ? err.message : "Failed to delete sector");
      }
    });
  }

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
              onClick={handleCreate}
              disabled={pending}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <PlusIcon />
              {pending ? "Adding…" : "Add sector"}
            </button>
          }
        />
      </FadeIn>

      {error && <ErrorBanner>{error}</ErrorBanner>}

      <div className="mt-6 grid gap-4 xl:grid-cols-[1fr_380px]">
        <div className="grid gap-4 md:grid-cols-2">
          <LoadingSkeletons visible={loading && sectors.length === 0} grid />

          {!loading && sectors.length === 0 && (
            <div className="md:col-span-2">
              <EmptyState
                title="No sectors yet"
                description="Click Add sector to create your first one."
              />
            </div>
          )}

          {sectors.map((sector, index) => (
            <FadeIn key={sector.id} delay={Math.min(index * 0.05, 0.4)}>
              <div
                className={[
                  "rounded-2xl border bg-white p-5 transition dark:bg-ink-900",
                  editingId === sector.id
                    ? "border-brand-300 ring-2 ring-brand-500/10 dark:border-brand-500/40"
                    : "border-slate-200 dark:border-white/10",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      {sector.icon && (
                        <span className="text-2xl leading-none">{sector.icon}</span>
                      )}
                      <StatusBadge published={sector.published} />
                    </div>
                    <h3 className="mt-3 font-semibold text-slate-950 dark:text-white">
                      {sector.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {sector.description}
                    </p>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => setEditingId(sector.id)}
                      className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
                    >
                      Edit
                    </button>
                    <DeleteButton
                      onClick={() => handleDelete(sector.id)}
                      disabled={pending}
                    />
                  </div>
                </div>

                {sector.problems.length > 0 && (
                  <div className="mt-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Typical Challenges
                    </div>
                    <ul className="space-y-1.5">
                      {sector.problems.slice(0, 3).map((problem) => (
                        <li
                          key={problem}
                          className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400"
                        >
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-brand-600 shrink-0" />
                          <span className="line-clamp-1">{problem}</span>
                        </li>
                      ))}
                      {sector.problems.length > 3 && (
                        <li className="text-xs text-slate-400">
                          +{sector.problems.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {sector.capabilities.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {sector.capabilities.slice(0, 4).map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600 dark:bg-white/5 dark:text-slate-300"
                      >
                        {capability}
                      </span>
                    ))}
                    {sector.capabilities.length > 4 && (
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-400 dark:bg-white/5">
                        +{sector.capabilities.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div>
            {editingSector ? (
              <SectorEditor
                key={editingSector.id}
                sector={editingSector}
                onClose={() => setEditingId(null)}
                onSave={handleSave}
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
  onSave: (sector: SectorRecord) => void | Promise<void>;
}) {
  const [name, setName] = useState(sector.name);
  const [icon, setIcon] = useState(sector.icon ?? "");
  const [description, setDescription] = useState(sector.description);
  const [problems, setProblems] = useState(sector.problems.join("\n"));
  const [capabilities, setCapabilities] = useState(
    sector.capabilities.join("\n"),
  );
  const [published, setPublished] = useState(sector.published);
  const [saving, startSave] = useTransition();

  function handleSave() {
    startSave(async () => {
      await onSave({
        ...sector,
        name,
        icon: icon.trim() ? icon.trim() : null,
        description,
        problems: problems
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        capabilities: capabilities
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
        published,
      });
    });
  }

  return (
    <EditorShell
      eyebrow="Edit sector"
      title="Sector details"
      onClose={onClose}
      saving={saving}
      onSave={handleSave}
    >
      <Field label="Sector name">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field label="Icon (emoji or short key)">
        <input
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder="e.g. 🏛️ or government"
          className={inputClass}
        />
      </Field>

      <Field label="Description">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
          className={inputClass}
        />
      </Field>

      <Field label="Typical Challenges">
        <textarea
          value={problems}
          onChange={(e) => setProblems(e.target.value)}
          rows={6}
          placeholder="One challenge per line"
          className={inputClass}
        />
      </Field>

      <Field label="Capabilities">
        <textarea
          value={capabilities}
          onChange={(e) => setCapabilities(e.target.value)}
          rows={6}
          placeholder="One capability per line"
          className={inputClass}
        />
      </Field>

      <PublishToggle value={published} onChange={setPublished} />
    </EditorShell>
  );
}

/* -------------------------------------------------------------------------- */
/* SHARED COMPONENTS                                                           */
/* -------------------------------------------------------------------------- */

function EditorShell({
  eyebrow,
  title,
  onClose,
  onSave,
  saving,
  children,
}: {
  eyebrow: string;
  title: string;
  onClose: () => void;
  onSave: () => void;
  saving: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-ink-900">
      <div className="sticky -top-5 z-10 -mx-5 -mt-5 mb-4 flex items-start justify-between border-b border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-ink-900">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
            {eyebrow}
          </div>
          <h3 className="mt-1 font-semibold text-slate-950 dark:text-white">
            {title}
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

      <div className="space-y-6">
        {children}

        <div className="flex gap-2 border-t border-slate-200 pt-4 dark:border-white/10">
          <button
            type="button"
            onClick={onSave}
            disabled={saving}
            className="flex-1 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function EditorSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          {label}
        </span>
        <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
      </div>
      {children}
    </section>
  );
}

function DetailPill({
  label,
  complete,
  count,
}: {
  label: string;
  complete: boolean;
  count?: number;
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-medium",
        complete
          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
          : "bg-slate-100 text-slate-400 dark:bg-white/5 dark:text-slate-500",
      ].join(" ")}
    >
      <span
        className={[
          "h-1.5 w-1.5 rounded-full",
          complete ? "bg-emerald-500" : "bg-slate-400 dark:bg-slate-600",
        ].join(" ")}
      />
      {label}
      {typeof count === "number" && count > 0 && (
        <span className="text-[10px] opacity-70">({count})</span>
      )}
    </span>
  );
}

function PublishToggle({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <Field label="Visibility">
      <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm dark:border-white/10 dark:bg-white/5">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
        />
        <span className="text-slate-700 dark:text-slate-200">
          Published (visible on the public site)
        </span>
      </label>
    </Field>
  );
}

function DeleteButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 disabled:opacity-60 dark:border-red-500/30 dark:text-red-400 dark:hover:bg-red-500/10"
    >
      Delete
    </button>
  );
}

function LoadingSkeletons({
  visible,
  grid,
  compact,
}: {
  visible: boolean;
  grid?: boolean;
  compact?: boolean;
}) {
  if (!visible) return null;

  return (
    <>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={[
            "animate-pulse rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-ink-900",
            compact ? "h-20" : "h-28",
          ].join(" ")}
          style={grid ? { width: "100%" } : undefined}
        />
      ))}
    </>
  );
}

function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <FadeIn>
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-white/10 dark:bg-ink-900">
        <div className="text-sm font-semibold text-slate-950 dark:text-white">
          {title}
        </div>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </FadeIn>
  );
}

function ErrorBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300">
      {children}
    </div>
  );
}

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
        <span className="text-xs font-semibold text-brand-600">{count}</span>
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

function StatusBadge({ published }: { published: boolean }) {
  return (
    <span
      className={[
        "inline-flex rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider",
        published
          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
          : "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
      ].join(" ")}
    >
      {published ? "Published" : "Draft"}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* ICONS                                                                       */
/* -------------------------------------------------------------------------- */

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M16 9h2a2 2 0 0 1 2 2v10" />
      <path d="M8 7h4M8 11h4M8 15h4M8 19h4" />
      <path d="M2 21h20" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10";