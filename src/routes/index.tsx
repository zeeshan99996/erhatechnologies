import { createFileRoute, Link } from "@tanstack/react-router";
import { TechSphere } from "../components/TechSphere";
import {
  ArrowRight,
  Brain,
  Code,
  Cpu,
  Sparkles,
  Zap,
  Bot,
  Play,
  RotateCw,
  Terminal,
  CheckCircle2,
  ChevronRight,
  Activity,
  Server,
  Database,
  Network,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Erha Technologies — Innovating the Future with AI" },
      {
        name: "description",
        content:
          "AI development, web & app engineering, agentic systems and automation by Erha Technologies.",
      },
      { property: "og:title", content: "Erha Technologies — Innovating the Future with AI" },
      {
        property: "og:description",
        content: "AI development, web & app engineering, agentic systems and automation.",
      },
    ],
  }),
  component: HomePage,
});

// Slideshow Images data using the user uploaded pictures
const slideshowImages = [
  {
    src: "/slideshow-1.jpg",
    loc: "LOC_01 // COGNITIVE LAB // SEC_4",
    title: "NEURAL COGNITION CORE",
  },
  {
    src: "/slideshow-2.jpg",
    loc: "LOC_02 // HEADQUARTERS // LOBBY",
    title: "DISTRIBUTED COGNITIVE GLOBE",
  },
  {
    src: "/slideshow-3.jpg",
    loc: "LOC_03 // MISSION CONTROL // SEC_1",
    title: "GLOBAL PIPELINE TELEMETRY",
  },
];

function DashboardBackgroundSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-[180vh] md:h-[160vh]">
      {slideshowImages.map((img, idx) => {
        const active = currentSlide === idx;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
              active ? "opacity-[0.08]" : "opacity-0"
            }`}
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover scale-105 filter blur-[4px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/60 to-[var(--background)]" />
          </div>
        );
      })}
      <div className="absolute inset-0 scanlines opacity-[0.15]" />
    </div>
  );
}

// Systems Ltd & GoCloud inspired Capabilities Deck
const innovationTabs = [
  {
    id: "agents",
    title: "Agentic AI",
    subtitle: "Multi-Agent Networks & Cognitive Flow Routing",
    icon: Bot,
    desc: "Deploy networks of autonomous agents that collaborate, reason, use external tools, and complete complex multi-step workflows with high precision.",
    stats: [
      { value: "99.4%", label: "Task Success" },
      { value: "Multi-Agent", label: "Architecture" },
      { value: "< 80ms", label: "Latency" },
    ],
    features: [
      "Autonomous Planning",
      "Short/Long Term Memory",
      "Dynamic Tool Usage",
      "Conflict Resolution Routing",
    ],
    renderDiagram: (active: boolean) => (
      <svg
        className="w-full h-full max-h-[180px] md:max-h-[220px]"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="100"
          y1="30"
          x2="50"
          y2="80"
          stroke="var(--neon-green)"
          strokeWidth="1.5"
          className={active ? "flow-line" : ""}
          opacity="0.6"
        />
        <line
          x1="100"
          y1="30"
          x2="100"
          y2="90"
          stroke="var(--neon-cyan)"
          strokeWidth="1.5"
          className={active ? "flow-line" : ""}
          opacity="0.6"
        />
        <line
          x1="100"
          y1="30"
          x2="150"
          y2="80"
          stroke="var(--neon-purple)"
          strokeWidth="1.5"
          className={active ? "flow-line" : ""}
          opacity="0.6"
        />

        <circle
          cx="100"
          cy="30"
          r="16"
          fill="var(--card)"
          stroke="var(--neon-green)"
          strokeWidth="2"
          className={`infra-node ${active ? "active" : ""}`}
        />
        <text
          x="100"
          y="34"
          fill="var(--neon-green)"
          fontSize="9"
          fontWeight="bold"
          fontFamily="monospace"
          textAnchor="middle"
        >
          HUB
        </text>

        <circle
          cx="50"
          cy="80"
          r="12"
          fill="var(--card)"
          stroke="var(--neon-cyan)"
          strokeWidth="2"
          className={`infra-node ${active ? "active" : ""}`}
        />
        <text
          x="50"
          y="83"
          fill="var(--neon-cyan)"
          fontSize="7"
          fontWeight="bold"
          fontFamily="monospace"
          textAnchor="middle"
        >
          AGT_1
        </text>

        <circle
          cx="100"
          cy="90"
          r="12"
          fill="var(--card)"
          stroke="var(--neon-cyan)"
          strokeWidth="2"
          className={`infra-node ${active ? "active" : ""}`}
        />
        <text
          x="100"
          y="93"
          fill="var(--neon-cyan)"
          fontSize="7"
          fontWeight="bold"
          fontFamily="monospace"
          textAnchor="middle"
        >
          AGT_2
        </text>

        <circle
          cx="150"
          cy="80"
          r="12"
          fill="var(--card)"
          stroke="var(--neon-purple)"
          strokeWidth="2"
          className={`infra-node ${active ? "active" : ""}`}
        />
        <text
          x="150"
          y="83"
          fill="var(--neon-purple)"
          fontSize="7"
          fontWeight="bold"
          fontFamily="monospace"
          textAnchor="middle"
        >
          AGT_3
        </text>
      </svg>
    ),
  },
  {
    id: "tuning",
    title: "Model Tuning",
    subtitle: "Custom ML Adaptations & High-Efficiency Quantization",
    icon: Brain,
    desc: "Fine-tune open-weights LLMs (Llama, Mistral, Qwen) using LoRA/QLoRA adapter weights, custom loss functions, and high-performance inference pipelines.",
    stats: [
      { value: "FP8 / INT4", label: "Quantization" },
      { value: "32% Gain", label: "Inference Speed" },
      { value: "H100 / RTX", label: "Compute Stack" },
    ],
    features: [
      "Supervised Fine-Tuning (SFT)",
      "Preference Optimization (DPO)",
      "LoRA Adapters Merging",
      "Context Length Extension",
    ],
    renderDiagram: (active: boolean) => (
      <svg
        className="w-full h-full max-h-[180px] md:max-h-[220px]"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 20 60 L 70 60 L 130 60 L 180 60"
          stroke="var(--neon-green)"
          strokeWidth="1.5"
          className={active ? "flow-line" : ""}
          opacity="0.6"
        />

        <rect
          x="15"
          y="45"
          width="26"
          height="30"
          rx="3"
          fill="var(--card)"
          stroke="var(--neon-cyan)"
          strokeWidth="1.5"
        />
        <text
          x="28"
          y="63"
          fill="var(--neon-cyan)"
          fontSize="6"
          fontFamily="monospace"
          textAnchor="middle"
        >
          DATA
        </text>

        <circle
          cx="90"
          cy="60"
          r="14"
          fill="var(--card)"
          stroke="var(--neon-green)"
          strokeWidth="2"
          className={`infra-node ${active ? "active" : ""}`}
        />
        <text
          x="90"
          y="63"
          fill="var(--neon-green)"
          fontSize="7"
          fontFamily="monospace"
          textAnchor="middle"
        >
          LoRA
        </text>

        <rect
          x="145"
          y="45"
          width="30"
          height="30"
          rx="3"
          fill="var(--card)"
          stroke="var(--neon-purple)"
          strokeWidth="1.5"
        />
        <text
          x="160"
          y="63"
          fill="var(--neon-purple)"
          fontSize="6"
          fontFamily="monospace"
          textAnchor="middle"
        >
          WEIGHT
        </text>
      </svg>
    ),
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    subtitle: "Low Latency Edge Networks & Deployment Scaling",
    icon: Cpu,
    desc: "Deploy serverless worker microservices and database read-replicas across edge platforms (Cloudflare Workers, AWS) to achieve extreme response velocity.",
    stats: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "22ms Avg", label: "Edge Latency" },
      { value: "120+", label: "Edge Locations" },
    ],
    features: [
      "Serverless GPU Workers",
      "Global Edge Routing",
      "Dynamic WAF Shields",
      "Multi-Region Replicas",
    ],
    renderDiagram: (active: boolean) => (
      <svg
        className="w-full h-full max-h-[180px] md:max-h-[220px]"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="30"
          y1="30"
          x2="100"
          y2="60"
          stroke="var(--neon-green)"
          strokeWidth="1.5"
          className={active ? "flow-line" : ""}
          opacity="0.6"
        />
        <line
          x1="30"
          y1="90"
          x2="100"
          y2="60"
          stroke="var(--neon-green)"
          strokeWidth="1.5"
          className={active ? "flow-line" : ""}
          opacity="0.6"
        />
        <line
          x1="100"
          y1="60"
          x2="170"
          y2="30"
          stroke="var(--neon-cyan)"
          strokeWidth="1.5"
          className={active ? "flow-line" : ""}
          opacity="0.6"
        />
        <line
          x1="100"
          y1="60"
          x2="170"
          y2="90"
          stroke="var(--neon-cyan)"
          strokeWidth="1.5"
          className={active ? "flow-line" : ""}
          opacity="0.6"
        />

        <circle
          cx="30"
          cy="30"
          r="10"
          fill="var(--card)"
          stroke="var(--neon-purple)"
          strokeWidth="1.5"
        />
        <text
          x="30"
          y="33"
          fill="var(--neon-purple)"
          fontSize="6"
          fontFamily="monospace"
          textAnchor="middle"
        >
          EDGE
        </text>
        <circle
          cx="30"
          cy="90"
          r="10"
          fill="var(--card)"
          stroke="var(--neon-purple)"
          strokeWidth="1.5"
        />
        <text
          x="30"
          y="93"
          fill="var(--neon-purple)"
          fontSize="6"
          fontFamily="monospace"
          textAnchor="middle"
        >
          EDGE
        </text>

        <rect
          x="80"
          y="45"
          width="40"
          height="30"
          rx="4"
          fill="var(--card)"
          stroke="var(--neon-green)"
          strokeWidth="2"
          className={`infra-node ${active ? "active" : ""}`}
        />
        <text
          x="100"
          y="63"
          fill="var(--neon-green)"
          fontSize="7"
          fontFamily="monospace"
          textAnchor="middle"
        >
          GATEWAY
        </text>

        <circle
          cx="170"
          cy="30"
          r="10"
          fill="var(--card)"
          stroke="var(--neon-cyan)"
          strokeWidth="1.5"
        />
        <text
          x="170"
          y="33"
          fill="var(--neon-cyan)"
          fontSize="6"
          fontFamily="monospace"
          textAnchor="middle"
        >
          LLM
        </text>
        <circle
          cx="170"
          cy="90"
          r="10"
          fill="var(--card)"
          stroke="var(--neon-cyan)"
          strokeWidth="1.5"
        />
        <text
          x="170"
          y="93"
          fill="var(--neon-cyan)"
          fontSize="6"
          fontFamily="monospace"
          textAnchor="middle"
        >
          DB
        </text>
      </svg>
    ),
  },
  {
    id: "thesis",
    title: "Research Systems",
    subtitle: "Bibliography Assembly & Style Constraint Verification",
    icon: Sparkles,
    desc: "Build highly compliant, academic, and scientific writing drafts structured precisely to LaTeX specifications, complete with indexed, verified bibliography data.",
    stats: [
      { value: "0% Error", label: "LaTeX Build" },
      { value: "< 2%", label: "Similarity" },
      { value: "100%", label: "Compliance" },
    ],
    features: [
      "LaTeX Syntax Assembly",
      "Dynamic BibTeX Referencing",
      "Structural Proofing Checks",
      "Scientific Outline Parsing",
    ],
    renderDiagram: (active: boolean) => (
      <svg
        className="w-full h-full max-h-[180px] md:max-h-[220px]"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 20 30 C 60 30, 60 90, 100 90 C 140 90, 140 30, 180 30"
          stroke="var(--neon-cyan)"
          strokeWidth="1.5"
          className={active ? "flow-line" : ""}
          opacity="0.6"
        />

        <circle
          cx="30"
          cy="30"
          r="10"
          fill="var(--card)"
          stroke="var(--neon-purple)"
          strokeWidth="1.5"
        />
        <text
          x="30"
          y="33"
          fill="var(--neon-purple)"
          fontSize="6"
          fontFamily="monospace"
          textAnchor="middle"
        >
          SRC
        </text>

        <rect
          x="85"
          y="75"
          width="30"
          height="30"
          rx="3"
          fill="var(--card)"
          stroke="var(--neon-green)"
          strokeWidth="2"
          className={`infra-node ${active ? "active" : ""}`}
        />
        <text
          x="100"
          y="93"
          fill="var(--neon-green)"
          fontSize="7"
          fontFamily="monospace"
          textAnchor="middle"
        >
          CITES
        </text>

        <circle
          cx="170"
          cy="30"
          r="10"
          fill="var(--card)"
          stroke="var(--neon-cyan)"
          strokeWidth="1.5"
        />
        <text
          x="170"
          y="33"
          fill="var(--neon-cyan)"
          fontSize="6"
          fontFamily="monospace"
          textAnchor="middle"
        >
          PDF
        </text>
      </svg>
    ),
  },
];

function InnovationDeck() {
  const [activeTabId, setActiveTabId] = useState("agents");

  const activeTab = innovationTabs.find((t) => t.id === activeTabId) || innovationTabs[0];
  const TabIcon = activeTab.icon;

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-8 md:mt-12">
      {/* Tab Navigation Column */}
      <div className="w-full md:w-1/4 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-2 pb-3 md:pb-0 border-b md:border-b-0 md:border-r border-white/5 pr-0 md:pr-4 scrollbar-none">
        {innovationTabs.map((t, idx) => {
          const tabActive = activeTabId === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTabId(t.id)}
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-left cursor-pointer transition-all duration-300 w-max md:w-full shrink-0 ${
                tabActive
                  ? "border-[var(--neon-green)] bg-[var(--neon-green)]/10 text-white font-semibold"
                  : "border-transparent bg-transparent text-muted-foreground hover:text-white"
              }`}
            >
              <span className="font-mono text-xs opacity-40">0{idx + 1}</span>
              <span className="text-sm font-display tracking-tight">{t.title}</span>
            </button>
          );
        })}
      </div>

      {/* Detail Window Column */}
      <div className="w-full md:w-3/4 grid lg:grid-cols-2 gap-6 md:gap-8 items-center bg-white/5 border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl animate-fade-in relative overflow-hidden">
        {/* Detail Content */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--neon-green)]/10 border border-[var(--neon-green)]/20 text-[var(--neon-green)]">
                <TabIcon size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl text-white tracking-tight">
                  {activeTab.title}
                </h4>
                <div className="text-[9px] font-mono uppercase text-muted-foreground tracking-wider mt-0.5">
                  {activeTab.subtitle}
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{activeTab.desc}</p>

            <ul className="space-y-2 mb-6">
              {activeTab.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 size={12} className="text-[var(--neon-green)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Metrics (Systems Ltd style) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/5 pt-4 sm:pt-6 mt-4">
            {activeTab.stats.map((s) => (
              <div
                key={s.label}
                className="diagonal-cut-card p-2 sm:p-3 rounded-lg flex flex-col text-center"
              >
                <span className="text-gradient font-bold text-xs sm:text-sm md:text-base leading-none">
                  {s.value}
                </span>
                <span className="text-[8px] sm:text-[9px] text-muted-foreground uppercase tracking-widest mt-1 sm:mt-1.5 font-mono">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Diagram Visualizer (GoCloud style SVG pipelines) */}
        <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-center items-center h-full min-h-[220px]">
          <div className="text-[9px] font-mono uppercase text-muted-foreground tracking-widest mb-4">
            System Topology Blueprint
          </div>
          <div className="w-full flex justify-center items-center">
            {activeTab.renderDiagram(true)}
          </div>
          <div className="text-[8px] font-mono uppercase text-[var(--neon-cyan)] mt-4 flex items-center gap-1.5">
            <Activity size={10} className="animate-pulse" /> Stream telemetry status: active
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const [sphereSize, setSphereSize] = useState(480);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setSphereSize(w < 480 ? 260 : w < 640 ? 320 : w < 1024 ? 380 : 480);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="animate-fade-in relative min-h-screen">
      {/* Dynamic dashboard background slideshow */}
      <DashboardBackgroundSlideshow />

      {/* HERO */}
      <section className="relative min-h-screen lg:min-h-[90vh] flex flex-col lg:items-center justify-center px-4 sm:px-6 overflow-hidden z-10 pt-28 sm:pt-32 lg:pt-0">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full pb-16 lg:py-20">
          <div className="animate-fade-up text-center lg:text-left flex flex-col items-center lg:items-start z-10 order-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6 font-display font-bold tracking-tight leading-none text-white">
              Innovating the
              <br />
              <span className="text-gradient drop-shadow-[0_0_30px_rgba(118,185,0,0.2)] font-extrabold">
                Future with AI
              </span>
              <br />
              <span className="font-semibold text-muted-foreground text-3xl sm:text-4xl md:text-5xl tracking-normal mt-2 block opacity-85">
                &amp; Agentic Digital Solutions
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Erha Technologies designs and engineers SOTA AI systems, autonomous agentic workflows,
              and dazzling digital products that scale your business.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                to="/services"
                className="btn-neon px-8 py-3.5 rounded-full inline-flex items-center gap-2 transform hover:scale-105 transition-all duration-300"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full glass hover:neon-border hover:scale-105 hover:bg-white/5 transition-all duration-300 inline-flex items-center gap-2"
              >
                Contact Us
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 w-full max-w-md border-t border-white/10 pt-8">
              {[
                { v: "100+", l: "Projects" },
                { v: "50+", l: "AI Solutions" },
                { v: "15+", l: "Countries" },
              ].map((s) => (
                <div key={s.l} className="text-center lg:text-left">
                  <div className="font-display text-2xl md:text-3xl text-gradient font-bold">
                    {s.v}
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Column 2: 3D Cognitive Sphere */}
          <div
            className="relative animate-fade-up flex justify-center items-center w-full order-2"
            style={{ animationDelay: "0.15s" }}
          >
            <div
              className="relative flex items-center justify-center"
              style={{
                width: sphereSize,
                height: sphereSize,
                maxWidth: "100%",
                flexShrink: 0,
              }}
            >
              <TechSphere size={sphereSize} />
            </div>
          </div>
        </div>
      </section>

      {/* TABBED SERVICE OVERVIEW: INNOVATION DECK (Systems Ltd inspired) */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            Architectural <span className="text-gradient">Innovations</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
            Explore our core specialities and system topologies engineered for enterprise scale and
            academic precision.
          </p>
        </div>

        <InnovationDeck />
      </section>

      {/* WHY US */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto border-t border-white/5">
        <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 relative overflow-hidden border border-[var(--neon-purple)]/20 shadow-[0_0_50px_rgba(168,85,247,0.05)]">
          <div
            className="orb"
            style={{
              width: 400,
              height: 400,
              background: "var(--neon-purple)",
              top: -100,
              right: -100,
              opacity: 0.1,
            }}
          />
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 font-bold text-white">
                Engineered for <span className="text-gradient">tomorrow</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
                We combine deep AI research with production-grade engineering — shipping systems
                that are fast, reliable, and beautifully designed.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { title: "Cutting-edge AI", icon: Brain, desc: "SOTA Model Integration" },
                { title: "Pixel-perfect UX", icon: Sparkles, desc: "Stunning Visual Design" },
                { title: "24/7 Support", icon: Bot, desc: "Autonomous Maintenance" },
                { title: "Future-proof", icon: Cpu, desc: "Scalable Infrastructure" },
              ].map((f) => (
                <div
                  key={f.title}
                  className="diagonal-cut-card p-5 text-center group hover:border-[var(--neon-green)]/45 transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <f.icon
                      className="mx-auto mb-2 text-[var(--neon-cyan)] transition-all duration-300 group-hover:scale-110 group-hover:glow-text-cyan"
                      size={24}
                    />
                    <div className="text-sm font-semibold tracking-wide text-white">{f.title}</div>
                    <div className="text-[9px] text-muted-foreground mt-1 uppercase tracking-wider font-mono">
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 text-center max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl mb-5 sm:mb-6 font-bold text-white">
          Ready to <span className="text-gradient">build the future</span>?
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Let&apos;s create something extraordinary together.
        </p>
        <Link
          to="/contact"
          className="btn-neon px-9 py-4 rounded-full inline-flex items-center gap-2 transform hover:scale-105 hover:shadow-[0_0_30px_var(--neon-cyan)] transition-all duration-300"
        >
          Start your project <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
