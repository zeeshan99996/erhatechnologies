import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Erha Technologies" },
      { name: "description", content: "Explore AI, web, and agentic projects shipped by Erha Technologies." },
      { property: "og:title", content: "Projects — Erha Technologies" },
      { property: "og:description", content: "A portfolio of AI and digital innovation." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { title: "Neural Insight", tag: "AI Platform", desc: "Real-time analytics powered by transformer models.", color: "var(--neon-cyan)" },
  { title: "Agent Forge", tag: "Agentic AI", desc: "Build, deploy, and orchestrate autonomous AI agents.", color: "var(--neon-purple)" },
  { title: "FinFlow", tag: "Web App", desc: "Next-gen finance dashboard with predictive forecasting.", color: "var(--neon-blue)" },
  { title: "Lumen Chat", tag: "Mobile App", desc: "Cross-platform messaging with on-device AI.", color: "var(--neon-cyan)" },
  { title: "AutoPilot RPA", tag: "Automation", desc: "Workflow automation across 200+ SaaS tools.", color: "var(--neon-purple)" },
  { title: "Scholar AI", tag: "Research", desc: "AI research assistant for academic writing & citations.", color: "var(--neon-blue)" },
];

function ProjectsPage() {
  return (
    <div className="px-6 py-20 md:py-24 max-w-7xl mx-auto animate-fade-up">
      <div className="text-center mb-12 md:mb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">Portfolio</div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6">
          Selected <span className="text-gradient">work</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A glimpse into the products and systems we've engineered.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="hover-orb group">
            <div className="glass card-3d rounded-2xl overflow-hidden h-full">
              {/* Mockup */}
              <div className="relative h-48 overflow-hidden" style={{ background: `linear-gradient(135deg, ${p.color} 0%, var(--neon-purple) 100%)` }}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl glass-strong flex items-center justify-center font-display text-3xl text-foreground">
                    {p.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-strong text-xs">{p.tag}</div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl mb-2 flex items-center justify-between">
                  {p.title}
                  <ExternalLink size={16} className="text-[var(--neon-cyan)] opacity-0 group-hover:opacity-100 transition" />
                </h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
