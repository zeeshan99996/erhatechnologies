import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target,
  Eye,
  Rocket,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Brain,
  Cpu,
  Globe,
  Sparkles,
} from "lucide-react";
import ceoImg from "@/assets/ceo-ilyas.jpeg";
import managerImg from "@/assets/manager-faiz.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Erha Technologies — Enterprise AI & Software Solutions" },
      {
        name: "description",
        content:
          "Learn about Erha Technologies, a high-performance AI integration and digital engineering company.",
      },
      { property: "og:title", content: "About Erha Technologies" },
      {
        property: "og:description",
        content: "AI-driven digital innovation and enterprise engineering.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="px-4 sm:px-6 py-20 md:py-28 max-w-6xl mx-auto animate-fade-up">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
          <Globe size={14} />
          About Erha Technologies
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Engineering the <span className="text-gradient">future of digital business</span>
        </h1>
        <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          ERHA TECHNOLOGIES is a premium digital solutions provider dedicated to empowering enterprises through cutting-edge Artificial Intelligence integration, autonomous agentic workflows, custom software engineering, and high-availability cloud infrastructure.
        </p>
      </div>

      {/* Stats Counter Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
        {[
          { label: "AI Workflows Deployed", value: "100+", icon: Sparkles },
          { label: "System Uptime & SLA", value: "99.9%", icon: ShieldCheck },
          { label: "Specialized Engineers", value: "15+", icon: Users },
          { label: "Execution Velocity", value: "10x", icon: Zap },
        ].map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-2xl p-6 text-center border border-slate-800 shadow-xl"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
              <stat.icon size={20} />
            </div>
            <div className="text-3xl font-extrabold text-white mb-1 font-display">
              {stat.value}
            </div>
            <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Mission / Vision / Values */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {[
          {
            icon: Target,
            title: "Mission",
            text: "Empower global organizations with production-grade AI solutions that automate complexity and catalyze sustainable growth.",
          },
          {
            icon: Eye,
            title: "Vision",
            text: "Become the benchmark benchmark leader in autonomous agentic AI systems, custom LLMs, and high-performance digital engineering.",
          },
          {
            icon: Rocket,
            title: "Values",
            text: "Uncompromising software quality, rapid execution velocity, transparent partnership, and continuous innovation.",
          },
        ].map((c) => (
          <div key={c.title} className="glass card-3d rounded-2xl p-8 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
              <c.icon size={22} />
            </div>
            <h3 className="font-extrabold text-2xl text-white mb-3">{c.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>

      {/* Core Engineering Pillars */}
      <div className="glass-strong rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold mb-2">
            Engineering Excellence
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            What Sets Erha Technologies Apart
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "Agentic AI Architectures",
              desc: "Building self-correcting multi-agent systems that solve complex, multi-step enterprise workflows.",
            },
            {
              icon: Cpu,
              title: "Enterprise Custom LLMs & RAG",
              desc: "Deploying secure, domain-specific language models with real-time vector retrieval across internal knowledge bases.",
            },
            {
              icon: ShieldCheck,
              title: "Production-Grade Security",
              desc: "Ensuring end-to-end data encryption, compliance standards, and resilient fail-safe operations.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <item.icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership & Team Teaser (Adjusted after migration to /team) */}
      <div className="glass-strong rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase rounded-full mb-3">
              <Users size={14} />
              Our Leadership & Engineers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Meet the minds behind Erha Technologies
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Our multidisciplinary team unites executive leadership, AI research data scientists, full-stack software engineers, and cloud architects working together to engineer transformational digital products.
            </p>
            <Link
              to="/team"
              className="btn-neon font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 text-sm"
            >
              Explore Our Full Team & Leadership <ArrowRight size={16} />
            </Link>
          </div>

          <div className="md:w-1/2 flex items-center justify-center gap-4">
            {/* CEO Preview Card */}
            <div className="glass p-4 rounded-2xl border border-slate-800 text-center w-40 sm:w-48 shadow-xl">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-2 border-cyan-500/40 mb-3 bg-slate-900">
                <img
                  src={ceoImg}
                  alt="Ilyas Shahid — CEO"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="font-bold text-white text-sm">Ilyas Shahid</div>
              <div className="text-[10px] text-cyan-400 font-mono uppercase font-bold mt-0.5">
                CEO & Founder
              </div>
            </div>

            {/* Engineering Manager Preview Card */}
            <div className="glass p-4 rounded-2xl border border-slate-800 text-center w-40 sm:w-48 shadow-xl mt-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-2 border-indigo-500/40 mb-3 bg-slate-900">
                <img
                  src={managerImg}
                  alt="Faiz Jillani — Engineering Manager"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="font-bold text-white text-sm">Faiz Jillani</div>
              <div className="text-[10px] text-indigo-400 font-mono uppercase font-bold mt-0.5">
                Engineering Manager
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link
          to="/contact"
          className="btn-neon font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2"
        >
          Work With Us <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

