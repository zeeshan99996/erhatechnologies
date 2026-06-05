import { createFileRoute } from "@tanstack/react-router";
import { Brain, Bot, Code, Cpu, Zap, Layers } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Erha Technologies" },
      {
        name: "description",
        content:
          "AI development, agentic systems, web & app engineering, automation, and cognitive data solutions.",
      },
      { property: "og:title", content: "Services — Erha Technologies" },
      { property: "og:description", content: "End-to-end AI and digital engineering services." },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/services" }
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Layers,
    title: "Full Stack Development",
    desc: "End-to-end web engineering — from pixel-perfect frontends to robust APIs and cloud deployments.",
    features: ["React", "Node.js", "REST / GraphQL", "CI/CD"],
  },
  {
    icon: Brain,
    title: "AI Development",
    desc: "Custom machine learning models, NLP, computer vision, and predictive systems.",
    features: ["LLMs", "NLP", "Vision", "MLOps"],
  },
  {
    icon: Code,
    title: "Website Development",
    desc: "Lightning-fast websites built with modern stacks and beautiful design.",
    features: ["Next.js", "SEO", "CMS", "Animations"],
  },
  {
    icon: Cpu,
    title: "Application Development",
    desc: "Cross-platform mobile apps and desktop solutions that scale.",
    features: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    icon: Zap,
    title: "AI Automation",
    desc: "Automate repetitive workflows with intelligent orchestration.",
    features: ["RPA", "Pipelines", "Integrations", "Triggers"],
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    desc: "Autonomous AI agents that plan, reason, and execute complex tasks.",
    features: ["Multi-agent", "Tool use", "Memory", "Planning"],
  },
];

function ServicesPage() {
  return (
    <div className="px-6 py-20 md:py-24 max-w-7xl mx-auto animate-fade-up">
      <div className="text-center mb-12 md:mb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">
          Our Services
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6">
          Built for <span className="text-gradient">impact</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          End-to-end AI and digital engineering services to power your next breakthrough.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={s.title} className="hover-orb group">
            <div className="glass card-3d rounded-2xl p-8 h-full relative overflow-hidden">
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"
                style={{ background: "var(--gradient-neon)", filter: "blur(40px)" }}
              />
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "var(--gradient-neon)" }}
                >
                  <s.icon size={26} className="text-background" />
                </div>
                <div className="text-xs text-[var(--neon-cyan)] mb-2">SERVICE 0{i + 1}</div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-2 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-3 py-1 rounded-full glass border border-[var(--neon-cyan)]/30"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
