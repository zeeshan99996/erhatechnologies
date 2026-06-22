import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ExternalLink, X, ArrowRight, Zap, Trophy, Cpu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Erha Technologies" },
      {
        name: "description",
        content: "Explore AI, web, and agentic projects shipped by Erha Technologies.",
      },
      { property: "og:title", content: "Projects — Erha Technologies" },
      { property: "og:description", content: "A portfolio of AI and digital innovation." },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/projects" }
    ],
  }),
  component: ProjectsPage,
});

const defaultProjects = [
  {
    title: "Neural Insight",
    tag: "AI Platform",
    desc: "Real-time analytics powered by transformer models.",
    color: "var(--neon-cyan)",
    problem: "The client needed real-time telemetry anomaly detection processing on 100K+ concurrent data streams with <100ms processing latency.",
    solution: "Implemented a custom transformer-based sequence processing pipeline with memory-mapped storage buffers and GPU inference optimization.",
    metrics: ["Latency: <45ms", "Accuracy: 99.4%", "Throughput: 150K events/s"],
    stack: ["PyTorch", "FastAPI", "Redis", "Docker", "CUDA"]
  },
  {
    title: "Agent Forge",
    tag: "Agentic AI",
    desc: "Build, deploy, and orchestrate autonomous AI agents.",
    color: "var(--neon-purple)",
    problem: "Organizations struggled to orchestrate multi-agent autonomous tasks that require recursive reasoning, tool execution, and self-correction loops.",
    solution: "Designed a multi-agent orchestration framework utilizing semantic routing, hierarchical state machines, and dynamic context window compression.",
    metrics: ["Task Success: 92.1%", "API Cost: -40%", "Exec Time: -65%"],
    stack: ["CrewAI", "LangGraph", "LlamaIndex", "ChromaDB", "FastAPI"]
  },
  {
    title: "FinFlow",
    tag: "Web App",
    desc: "Next-gen finance dashboard with predictive forecasting.",
    color: "var(--neon-blue)",
    problem: "The financial operations team required predictive forecasting visual tools to project complex treasury flows across 15 global accounts.",
    solution: "Engineered a high-performance React dashboard featuring a WebAssembly charting engine and localized predictive auto-regressive forecasting models.",
    metrics: ["Render Speed: 120 FPS", "Accuracy: 96.8% (30d)", "Initial Load: 1.2s"],
    stack: ["React.js", "TypeScript", "Tailwind CSS", "WebAssembly", "Rust"]
  },
  {
    title: "Lumen Chat",
    tag: "Mobile App",
    desc: "Cross-platform messaging with on-device AI.",
    color: "var(--neon-cyan)",
    problem: "Providing secure, enterprise-grade instant messaging with high-quality intelligence without relying on cloud APIs or exposing messages.",
    solution: "Created a cross-platform mobile application integrating quantized on-device small language models (SLMs) running locally on phone hardware.",
    metrics: ["Generation: 25 tok/s", "RAM Footprint: <450MB", "Data Security: 100% Local"],
    stack: ["Flutter", "Llama.cpp", "SQLite", "Rust", "Dart"]
  },
  {
    title: "AutoPilot RPA",
    tag: "Automation",
    desc: "Workflow automation across 200+ SaaS tools.",
    color: "var(--neon-purple)",
    problem: "Manual data migration and workflow execution across legacy ERP databases and modern SaaS APIs wasted thousands of engineering hours.",
    solution: "Developed a distributed workflow automation system with self-healing selenium pipelines, fallback selectors, and webhook listener nodes.",
    metrics: ["Effort Saved: 85%", "System Uptime: 99.98%", "Integrations: 200+ SaaS"],
    stack: ["Node.js", "RabbitMQ", "Selenium", "GraphQL", "Docker"]
  },
  {
    title: "OmniSearch",
    tag: "AI Search",
    desc: "Cognitive search system powered by RAG and semantic routing.",
    color: "var(--neon-blue)",
    problem: "Retrieving relevant engineering standards across 5 million internal documentation files was slow and returned irrelevant search hits.",
    solution: "Built a semantic cognitive search engine powered by dense-sparse hybrid vector indexing, metadata filtering, and LLM auto-rerank layers.",
    metrics: ["Search Speed: <120ms", "MRR Score: 0.94", "User Adoption: 91%"],
    stack: ["LlamaIndex", "Qdrant", "Elasticsearch", "FastAPI", "Python"]
  },
];

const ALL_TAGS = [
  "all",
  "AI Platform",
  "Agentic AI",
  "Web App",
  "Mobile App",
  "Automation",
  "AI Search",
] as const;
type Tag = (typeof ALL_TAGS)[number];

function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<Tag>("all");
  const [projectList, setProjectList] = useState<any[]>(defaultProjects);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("erha_projects");
      if (stored) {
        try {
          setProjectList(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse local projects cache", e);
        }
      } else {
        localStorage.setItem("erha_projects", JSON.stringify(defaultProjects));
      }
    }
  }, []);

  // Listen for AI agent filter commands
  useEffect(() => {
    const handler = (e: Event) => {
      const tag = ((e as CustomEvent).detail as { tag: Tag }).tag;
      setActiveTag(tag);
    };
    window.addEventListener("erha:filter-projects", handler);
    return () => window.removeEventListener("erha:filter-projects", handler);
  }, []);

  const filtered = activeTag === "all" ? projectList : projectList.filter((p) => p.tag === activeTag);

  return (
    <div className="px-6 py-20 md:py-24 max-w-7xl mx-auto animate-fade-up">
      <div className="text-center mb-12 md:mb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">
          Portfolio
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6">
          Selected <span className="text-gradient">work</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A glimpse into the products and systems we've engineered. Click any card to explore the full case study.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, idx) => (
          <div key={idx} className="hover-orb group cursor-pointer" onClick={() => setSelectedProject(p)}>
            <div className="glass card-3d rounded-2xl overflow-hidden h-full">
              {/* Mockup */}
              <div
                className="relative h-48 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${p.color || "var(--neon-cyan)"} 0%, var(--neon-purple) 100%)`,
                }}
              >
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl glass-strong flex items-center justify-center font-display text-3xl text-foreground">
                    {p.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-strong text-xs">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl mb-2 flex items-center justify-between">
                  {p.title}
                  <ExternalLink
                    size={16}
                    className="text-[var(--neon-cyan)] opacity-60 group-hover:opacity-100 transition"
                  />
                </h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Dialog Modal */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      >
        <DialogContent className="glass-strong border-[var(--neon-cyan)]/25 rounded-2xl max-w-2xl text-left text-foreground overflow-hidden p-6 animate-dialog-content">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader className="border-b border-white/5 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-white/10"
                      style={{
                        borderColor: selectedProject.color && !selectedProject.color.startsWith("var") ? selectedProject.color : "var(--neon-cyan)",
                        color: selectedProject.color && !selectedProject.color.startsWith("var") ? selectedProject.color : "var(--neon-cyan)"
                      }}
                    >
                      {selectedProject.tag}
                    </span>
                    <DialogTitle className="text-2xl font-bold font-display tracking-tight text-white mt-3">
                      {selectedProject.title}
                    </DialogTitle>
                  </div>
                </div>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6 leading-relaxed text-sm">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[var(--neon-cyan)] font-bold font-mono mb-1.5 flex items-center gap-1.5">
                      <Zap size={12} /> The Challenge
                    </h4>
                    <p className="text-xs text-muted-foreground text-justify">
                      {selectedProject.problem || "No challenge statement provided. Contact Erha Technologies to explore similar business case requirements."}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[var(--neon-cyan)] font-bold font-mono mb-1.5 flex items-center gap-1.5">
                      <Cpu size={12} /> The Solution
                    </h4>
                    <p className="text-xs text-muted-foreground text-justify">
                      {selectedProject.solution || "No solution architected details provided. Implemented premium enterprise RAG/LLM/Automation pipelines."}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Technical Metrics */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[var(--neon-purple)] font-bold font-mono mb-2 flex items-center gap-1.5">
                      <Trophy size={12} /> Project Performance
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProject.metrics && selectedProject.metrics.length > 0 ? (
                        selectedProject.metrics.map((m: string, i: number) => (
                          <div key={i} className="glass p-3 rounded-lg border border-white/5 text-xs font-mono font-medium text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)]" />
                            {m}
                          </div>
                        ))
                      ) : (
                        ["Uptime: 99.98%", "Accuracy: High Accuracy", "Scalability: Ready"].map((m, i) => (
                          <div key={i} className="glass p-3 rounded-lg border border-white/5 text-xs font-mono font-medium text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)]" />
                            {m}
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Stack */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[var(--neon-cyan)] font-bold font-mono mb-2">
                      Stack Details
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.stack && selectedProject.stack.length > 0 ? (
                        selectedProject.stack.map((s: string) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 text-[10px] font-mono rounded bg-white/5 border border-white/10 text-white font-medium"
                          >
                            {s}
                          </span>
                        ))
                      ) : (
                        ["Python", "FastAPI", "React"].map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 text-[10px] font-mono rounded bg-white/5 border border-white/10 text-white font-medium"
                          >
                            {s}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="text-[10px] font-mono text-muted-foreground">
                  Case ID: ERHA-{selectedProject.title.toUpperCase().replace(/\s+/g, "-")}
                </span>
                <Link
                  to="/contact"
                  onClick={() => setSelectedProject(null)}
                  className="btn-neon px-5 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  Consult on Similar Solution <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
