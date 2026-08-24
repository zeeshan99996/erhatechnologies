import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ExternalLink,
  ArrowRight,
  Zap,
  Trophy,
  Cpu,
  Brain,
  Bot,
  Code2,
  Smartphone,
  Workflow,
  Database,
  Layers,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import erhaTradeLinkImg from "@/assets/erha-tradelink-preview.png";
import abuArishImg from "@/assets/abu-arish-preview.png";
import drTalhaHmsImg from "@/assets/dr-talha-hms-preview.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Case Studies — Erha Technologies" },
      {
        name: "description",
        content: "Explore enterprise AI platforms, agentic systems, e-commerce platforms, and high-performance digital products engineered by Erha Technologies.",
      },
      { property: "og:title", content: "Projects — Erha Technologies" },
      { property: "og:description", content: "A portfolio of AI systems and digital engineering." },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/projects" }
    ],
  }),
  component: ProjectsPage,
});

const serviceCategories = [
  {
    id: "all",
    label: "All Projects",
    icon: Layers,
    color: "#38bdf8",
    description: "Complete portfolio across all service lines",
  },
  {
    id: "Full Stack",
    label: "Full Stack Dev",
    icon: Code2,
    color: "#38bdf8",
    description: "End-to-end web applications & platforms",
  },
  {
    id: "AI Platform",
    label: "AI Development",
    icon: Brain,
    color: "#818cf8",
    description: "Custom ML models, LLMs & intelligent systems",
  },
  {
    id: "Agentic AI",
    label: "Agentic AI",
    icon: Bot,
    color: "#a78bfa",
    description: "Autonomous multi-agent frameworks",
  },
  {
    id: "Web App",
    label: "Web Applications",
    icon: Code2,
    color: "#34d399",
    description: "High-performance enterprise web apps",
  },
  {
    id: "Mobile App",
    label: "Mobile Apps",
    icon: Smartphone,
    color: "#f59e0b",
    description: "Cross-platform iOS & Android solutions",
  },
  {
    id: "Automation",
    label: "Automation",
    icon: Workflow,
    color: "#f97316",
    description: "RPA, workflow, and process automation",
  },
  {
    id: "AI Search",
    label: "Cognitive RAG",
    icon: Database,
    color: "#06b6d4",
    description: "Vector search & semantic retrieval",
  },
] as const;

type ServiceId = (typeof serviceCategories)[number]["id"];

const defaultProjects = [
  {
    title: "ERHA TRADE LINK INTERNATIONAL",
    tag: "Full Stack",
    desc: "Full-stack e-commerce store & digital trade platform for tech accessories, power banks, ANC/ENC wireless earbuds, and electronics.",
    url: "https://www.erhatradelinkinternational.com/",
    image: erhaTradeLinkImg,
    color: "#38bdf8",
    problem: "The client needed an official, modern, high-converting e-commerce web platform to showcase premium tech accessories, manage multi-category inventories, and offer direct online ordering.",
    solution: "Designed and engineered a blazing-fast responsive e-commerce web platform featuring real-time product search, promotional deal banners, category filtering (High Capacity, MagSafe & Wireless, Laptop Power Banks, Ultra Compact), interactive cart & checkout workflows, and full mobile optimization.",
    metrics: ["Page Speed: 98/100", "Mobile Conversion: +65%", "Uptime: 99.99%"],
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Full Stack", "REST API"]
  },
  {
    title: "Abu Arish Tow Services",
    tag: "Full Stack",
    desc: "24/7 emergency vehicle recovery & car towing service platform in Abu Arish & Jazan region with bilingual support and instant dispatch routing.",
    url: "https://www.abuarishtowservices.com/",
    image: abuArishImg,
    color: "#38bdf8",
    problem: "Stranded drivers in the Jazan region required immediate 24/7 emergency vehicle recovery with fast response dispatching, Arabic/English localized interface, and direct click-to-call/WhatsApp integration.",
    solution: "Engineered a high-availability full-stack emergency web application featuring dual-language localization (Arabic/English), 1-click emergency phone call & WhatsApp dispatch, location-based coverage area mapping, and a 15-minute response guarantee tracking workflow.",
    metrics: ["Avg Response: <15 Mins", "Dispatch Speed: Instant", "Bilingual UX: 100% Arabic & EN"],
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Full Stack", "REST API", "i18n"]
  },
  {
    title: "Hospital Management System",
    tag: "Web App",
    desc: "Enterprise EMR & Hospital Management Web Application for OPD/IPD patient registration, token queues, pharmacy, lab tests, and billing.",
    url: "https://www.drtalhaclinic.com/",
    image: drTalhaHmsImg,
    color: "#34d399",
    problem: "Clinics & healthcare facilities struggled to unify patient EMR records, OPD/IPD admissions, pharmacy inventory alerts, lab requests, and daily revenue reporting under one centralized dashboard.",
    solution: "Engineered a cloud-based EMR & Hospital Management System (HMS) featuring real-time clinical dashboards, OPD/IPD patient intake workflows, token queue automation, bed admissions management, lab tracking, pharmacy inventory stock alerts, and automated billing & invoicing.",
    metrics: ["EMR Access: <100ms", "Daily Intake: 500+ Patients", "Billing Accuracy: 100%"],
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Web App", "Node.js", "PostgreSQL"]
  },
  {
    title: "Neural Insight",
    tag: "AI Platform",
    desc: "Real-time analytics powered by custom transformer models.",
    color: "#38bdf8",
    problem: "The client needed real-time telemetry anomaly detection processing on 100K+ concurrent data streams with <100ms processing latency.",
    solution: "Implemented a custom transformer-based sequence processing pipeline with memory-mapped storage buffers and GPU inference optimization.",
    metrics: ["Latency: <45ms", "Accuracy: 99.4%", "Throughput: 150K events/s"],
    stack: ["PyTorch", "FastAPI", "Redis", "Docker", "CUDA"]
  },
  {
    title: "Agent Forge",
    tag: "Agentic AI",
    desc: "Build, deploy, and orchestrate autonomous AI agents.",
    color: "#818cf8",
    problem: "Organizations struggled to orchestrate multi-agent autonomous tasks requiring recursive reasoning, tool execution, and self-correction loops.",
    solution: "Designed a multi-agent orchestration framework utilizing semantic routing, hierarchical state machines, and dynamic context window compression.",
    metrics: ["Task Success: 92.1%", "API Cost: -40%", "Exec Time: -65%"],
    stack: ["CrewAI", "LangGraph", "LlamaIndex", "ChromaDB", "FastAPI"]
  },
  {
    title: "Lumen Mobile",
    tag: "Mobile App",
    desc: "Cross-platform enterprise messaging with on-device AI.",
    color: "#818cf8",
    problem: "Providing secure, enterprise-grade instant messaging with high-quality intelligence without relying on cloud APIs or exposing data.",
    solution: "Created a cross-platform mobile application integrating quantized on-device small language models (SLMs) running locally on device hardware.",
    metrics: ["Generation: 25 tok/s", "RAM Footprint: <450MB", "Data Security: 100% Local"],
    stack: ["Flutter", "Llama.cpp", "SQLite", "Rust", "Dart"]
  },
  {
    title: "AutoPilot RPA",
    tag: "Automation",
    desc: "Workflow automation orchestrating across 200+ SaaS platforms.",
    color: "#38bdf8",
    problem: "Manual data migration and workflow execution across legacy ERP databases and modern SaaS APIs wasted thousands of engineering hours.",
    solution: "Developed a distributed workflow automation system with self-healing selenium pipelines, fallback selectors, and webhook listener nodes.",
    metrics: ["Effort Saved: 85%", "System Uptime: 99.98%", "Integrations: 200+ SaaS"],
    stack: ["Node.js", "RabbitMQ", "Selenium", "GraphQL", "Docker"]
  },
  {
    title: "OmniSearch RAG",
    tag: "AI Search",
    desc: "Cognitive search system powered by RAG and semantic routing.",
    color: "#818cf8",
    problem: "Retrieving relevant engineering standards across 5 million internal documentation files was slow and returned irrelevant search hits.",
    solution: "Built a semantic cognitive search engine powered by dense-sparse hybrid vector indexing, metadata filtering, and LLM auto-rerank layers.",
    metrics: ["Search Speed: <120ms", "MRR Score: 0.94", "User Adoption: 91%"],
    stack: ["LlamaIndex", "Qdrant", "Elasticsearch", "FastAPI", "Python"]
  },
];

function ProjectsPage() {
  const [activeService, setActiveService] = useState<ServiceId>("all");
  const [projectList, setProjectList] = useState<any[]>(defaultProjects);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Purge legacy cache key
      localStorage.removeItem("erha_projects");
      const stored = localStorage.getItem("erha_projects_v2");
      if (stored) {
        try {
          let parsed = JSON.parse(stored);
          parsed = parsed.filter((p: any) => !p.title?.toLowerCase().includes("finflow"));
          const idx1 = parsed.findIndex((p: any) => p.title?.toLowerCase().includes("erha trade link"));
          if (idx1 === -1) {
            parsed = [defaultProjects[0], ...parsed];
          } else {
            parsed[idx1] = { ...parsed[idx1], tag: "Full Stack", image: defaultProjects[0].image, url: defaultProjects[0].url };
          }

          const idx2 = parsed.findIndex((p: any) => p.title?.toLowerCase().includes("abu arish"));
          if (idx2 === -1) {
            parsed.splice(1, 0, defaultProjects[1]);
          } else {
            parsed[idx2] = { ...parsed[idx2], tag: "Full Stack", image: defaultProjects[1].image, url: defaultProjects[1].url };
          }

          const idx3 = parsed.findIndex((p: any) => p.title?.toLowerCase().includes("hospital management"));
          if (idx3 === -1) {
            parsed.splice(2, 0, defaultProjects[2]);
          } else {
            parsed[idx3] = { ...parsed[idx3], tag: "Web App", image: defaultProjects[2].image, url: defaultProjects[2].url };
          }

          localStorage.setItem("erha_projects_v2", JSON.stringify(parsed));
          setProjectList(parsed);
        } catch (e) {
          console.error("Failed to parse local projects cache", e);
          setProjectList(defaultProjects);
        }
      } else {
        localStorage.setItem("erha_projects_v2", JSON.stringify(defaultProjects));
        setProjectList(defaultProjects);
      }
    }
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const tag = ((e as CustomEvent).detail as { tag: ServiceId }).tag;
      setActiveService(tag);
    };
    window.addEventListener("erha:filter-projects", handler);
    return () => window.removeEventListener("erha:filter-projects", handler);
  }, []);

  const filtered =
    activeService === "all"
      ? projectList
      : projectList.filter((p) => p.tag === activeService);

  const activeCategory = serviceCategories.find((s) => s.id === activeService)!;
  const ActiveIcon = activeCategory.icon;

  return (
    <div className="px-4 sm:px-6 py-20 md:py-28 max-w-7xl mx-auto animate-fade-up">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold mb-3">
          Case Studies
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Selected <span className="text-gradient">engineering work</span>
        </h1>
        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          A showcase of enterprise products, AI platforms, and digital solutions we have designed and shipped.
        </p>
      </div>

      {/* Main Layout: Sidebar + Projects Grid */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT SIDEBAR — Service Submenu */}
        <aside className="lg:w-72 shrink-0">
          <div className="glass-strong border border-slate-800 rounded-2xl p-4 sticky top-24">
            {/* Sidebar Header */}
            <div className="flex items-center gap-2 px-2 pb-4 mb-2 border-b border-slate-800">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <Layers size={14} className="text-cyan-400" />
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                Filter by Service
              </span>
            </div>

            {/* Service Menu Items */}
            <nav className="space-y-1">
              {serviceCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeService === cat.id;
                const count =
                  cat.id === "all"
                    ? projectList.length
                    : projectList.filter((p) => p.tag === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveService(cat.id)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 cursor-pointer group ${
                      isActive
                        ? "bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        : "border border-transparent hover:bg-slate-800/50 hover:border-slate-700/50"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        isActive
                          ? "bg-cyan-500/20 border border-cyan-500/40"
                          : "bg-slate-800/60 border border-slate-700/60 group-hover:bg-slate-700/60"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-slate-200"}
                      />
                    </div>

                    {/* Label + Count */}
                    <div className="flex-1 min-w-0">
                      <div
                        className={`text-sm font-semibold leading-tight ${
                          isActive ? "text-cyan-300" : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {cat.label}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5 font-mono truncate">
                        {cat.description}
                      </div>
                    </div>

                    {/* Count Badge + Arrow */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {count > 0 && (
                        <span
                          className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded-md ${
                            isActive
                              ? "bg-cyan-500/20 text-cyan-400"
                              : "bg-slate-800 text-slate-500"
                          }`}
                        >
                          {count}
                        </span>
                      )}
                      <ChevronRight
                        size={13}
                        className={`transition-transform ${
                          isActive ? "text-cyan-400 translate-x-0.5" : "text-slate-600"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Sidebar Footer CTA */}
            <div className="mt-4 pt-4 border-t border-slate-800">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
              >
                Start a Project <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </aside>

        {/* RIGHT — Projects Grid */}
        <div className="flex-1 min-w-0">
          {/* Active Category Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <ActiveIcon size={16} className="text-cyan-400" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white leading-none">
                {activeCategory.label}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">
                {filtered.length} project{filtered.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="glass border border-slate-800 rounded-2xl p-16 text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-4">
                <ActiveIcon size={28} className="text-slate-600" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">No projects yet</h3>
              <p className="text-sm text-slate-400 max-w-xs mx-auto">
                No case studies in this category yet. Check back soon or explore other services.
              </p>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((p, idx) => (
              <div
                key={idx}
                className="glass card-3d rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between hover:border-cyan-500/30 border border-slate-800 transition-all duration-200 group"
                onClick={() => setSelectedProject(p)}
              >
                <div>
                  {/* Header Visual — Browser Mockup Frame */}
                  <div className="h-48 bg-slate-950/90 border-b border-slate-800 relative flex flex-col overflow-hidden group">
                    {/* Browser Control Bar */}
                    <div className="h-7 bg-slate-900/90 border-b border-slate-800/80 px-3 flex items-center justify-between shrink-0 z-10">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 truncate max-w-[140px] px-2 py-0.5 rounded bg-slate-950/60 border border-slate-800/60">
                        {p.url ? p.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : `${p.title.toLowerCase().replace(/\s+/g, "")}.com`}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                        {p.tag}
                      </span>
                    </div>

                    {/* Viewport Area */}
                    <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-slate-950">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover object-top opacity-95 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl flex items-center justify-center font-extrabold text-xl text-cyan-400 group-hover:border-cyan-500/40 transition-all">
                          {p.title.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-extrabold text-lg text-white mb-2 flex items-center justify-between gap-2">
                      <span className="truncate">{p.title}</span>
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors p-1 shrink-0"
                          title="Visit Live Store"
                        >
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <ExternalLink size={14} className="text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                      )}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{p.desc}</p>

                    {/* Stack Preview */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {(p.stack || []).slice(0, 3).map((s: string) => (
                        <span
                          key={s}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400"
                        >
                          {s}
                        </span>
                      ))}
                      {(p.stack || []).length > 3 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-500">
                          +{p.stack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-slate-800/60">
                  <span className="text-xs font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1">
                    View Case Study <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      >
        <DialogContent className="glass-strong border border-slate-700 rounded-2xl max-w-2xl text-left text-white overflow-hidden p-6 sm:p-8 shadow-2xl">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader className="border-b border-slate-800 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {selectedProject.tag}
                    </span>
                    <DialogTitle className="text-2xl font-extrabold text-white tracking-tight mt-3">
                      {selectedProject.title}
                    </DialogTitle>
                  </div>
                </div>
              </DialogHeader>

              {selectedProject.image && (
                <div className="rounded-xl overflow-hidden border border-slate-800 max-h-56 shadow-lg">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover object-top" />
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-bold font-mono mb-1.5 flex items-center gap-1.5">
                      <Zap size={14} /> The Challenge
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedProject.problem || "No challenge statement provided."}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-bold font-mono mb-1.5 flex items-center gap-1.5">
                      <Cpu size={14} /> The Solution
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedProject.solution || "Implemented enterprise RAG/LLM/Automation pipelines."}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-bold font-mono mb-2 flex items-center gap-1.5">
                      <Trophy size={14} className="text-amber-400" /> Key Metrics
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {(selectedProject.metrics || ["Uptime: 99.98%", "Accuracy: High Accuracy"]).map((m: string, i: number) => (
                        <div key={i} className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 text-xs font-mono font-semibold text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-bold font-mono mb-2">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {(selectedProject.stack || ["Python", "React"]).map((s: string) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="text-[11px] font-mono text-slate-400">
                  Case ID: ERHA-{selectedProject.title.toUpperCase().replace(/\s+/g, "-")}
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {selectedProject.url && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon px-5 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5"
                    >
                      Visit Live Store <ExternalLink size={14} />
                    </a>
                  )}
                  <Link
                    to="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-full text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 inline-flex items-center gap-1.5 transition-colors"
                  >
                    Discuss Similar Solution <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
