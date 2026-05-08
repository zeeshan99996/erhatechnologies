import { createFileRoute, Link } from "@tanstack/react-router";
import { TechSphere } from "../components/TechSphere";
import { ArrowRight, Brain, Code, Cpu, Sparkles, Zap, Bot } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Erha Technologies — Innovating the Future with AI" },
      { name: "description", content: "AI development, web & app engineering, agentic systems and automation by Erha Technologies." },
      { property: "og:title", content: "Erha Technologies — Innovating the Future with AI" },
      { property: "og:description", content: "AI development, web & app engineering, agentic systems and automation." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Brain, title: "AI Development", desc: "Custom ML models and intelligent systems." },
  { icon: Bot, title: "Agentic AI", desc: "Autonomous agents that get work done." },
  { icon: Code, title: "Web Development", desc: "Modern, blazing-fast web experiences." },
  { icon: Cpu, title: "App Development", desc: "Native & cross-platform mobile apps." },
  { icon: Zap, title: "AI Automation", desc: "Workflows that scale themselves." },
  { icon: Sparkles, title: "Thesis Writing", desc: "Research-grade academic writing." },
];

function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full py-20">
          <div className="animate-fade-up text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
              Building the next era of intelligence
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6">
              Innovating the<br />
              <span className="text-gradient">Future with AI</span><br />
              <span className="font-semibold text-muted-foreground">&amp; Digital Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Erha Technologies designs and engineers AI systems, agentic workflows, and beautiful digital products that move your business forward.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/services" className="btn-neon px-7 py-3 rounded-full inline-flex items-center gap-2">
                Get Started <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="px-7 py-3 rounded-full glass hover:neon-border transition-all inline-flex items-center gap-2">
                Contact Us
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 w-full max-w-md">
              {[
                { v: "100+", l: "Projects" },
                { v: "50+", l: "AI Solutions" },
                { v: "15+", l: "Countries" },
              ].map((s) => (
                <div key={s.l} className="text-center lg:text-left">
                  <div className="font-display text-2xl md:text-3xl text-gradient">{s.v}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up flex justify-center" style={{ animationDelay: "0.2s" }}>
            <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[460px]">
              <TechSphere size={460} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">What we do</div>
          <h2 className="font-display text-4xl md:text-5xl">Services that <span className="text-gradient">scale</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="hover-orb">
              <div className="glass card-3d rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--gradient-neon)" }}>
                  <s.icon size={22} className="text-background" />
                </div>
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-6 text-xs text-[var(--neon-cyan)]">0{i + 1} / 06</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="glass-strong rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="orb" style={{ width: 300, height: 300, background: "var(--neon-purple)", top: -50, right: -50 }} />
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">Why Erha</div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Engineered for <span className="text-gradient">tomorrow</span></h2>
              <p className="text-muted-foreground mb-8">
                We combine deep AI research with production-grade engineering — shipping systems that are fast, reliable, and beautifully designed.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Cutting-edge AI", "Pixel-perfect UX", "24/7 Support", "Future-proof"].map((f) => (
                <div key={f} className="glass rounded-xl p-5 text-center">
                  <Sparkles className="mx-auto mb-2 text-[var(--neon-cyan)]" size={20} />
                  <div className="text-sm font-medium">{f}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl mb-6">
          Ready to <span className="text-gradient">build the future</span>?
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">Let's create something extraordinary together.</p>
        <Link to="/contact" className="btn-neon px-8 py-4 rounded-full inline-flex items-center gap-2">
          Start your project <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
