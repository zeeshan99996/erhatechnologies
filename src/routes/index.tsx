import { createFileRoute, Link } from "@tanstack/react-router";
import { TechSphere } from "../components/TechSphere";
import {
  ArrowRight,
  Brain,
  Cpu,
  Sparkles,
  Zap,
  Bot,
  Terminal,
  CheckCircle2,
  Activity,
  Server,
  Database,
  ShieldCheck,
  Globe2,
  Code2,
  Building2,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import officeWorkspaceImg from "@/assets/office-workspace.jpg";
import aiComputeClusterImg from "@/assets/ai-compute-cluster.jpg";
import cloudControlCenterImg from "@/assets/cloud-control-center.jpg";
import executiveLoungeImg from "@/assets/executive-lounge.jpg";

const infrastructureCards = [
  {
    title: "AI Research & Compute Cluster",
    subtitle: "High-Density GPU Rig & Multi-Agent Labs",
    desc: "Production-grade supercomputing infrastructure executing custom LLM fine-tuning, multi-agent reasoning loops, and sub-5ms vector retrieval.",
    image: aiComputeClusterImg,
    badge: "AI Compute Hub",
    specs: ["Sub-5ms Latency", "Multi-Agent Cluster"],
  },
  {
    title: "Software Engineering & Tech Hub",
    subtitle: "Developer Headquarters & Full-Stack Labs",
    desc: "Modern collaborative engineering workspaces housing our full-stack developers, system architects, and software research teams.",
    image: officeWorkspaceImg,
    badge: "Engineering Lab",
    specs: ["Full-Stack Engineering", "Agile Workflows"],
  },
  {
    title: "Cloud Operations & Network Center",
    subtitle: "24/7 Monitoring & Global Edge Deployment",
    desc: "Real-time network control room and infrastructure telemetry monitoring 99.9% uptime and zero-downtime deployment pipelines.",
    image: cloudControlCenterImg,
    badge: "Cloud NOC",
    specs: ["Global Edge Grid", "SOC2 Compliant"],
  },
  {
    title: "Executive Innovation & Strategy Suite",
    subtitle: "Client Strategy & AI Architecture Lounge",
    desc: "Dedicated executive suite for enterprise AI strategy workshops, system design alignment, and global client collaboration.",
    image: executiveLoungeImg,
    badge: "Strategy Suite",
    specs: ["Executive Advisory", "Global Partnerships"],
  },
];

function InfrastructureGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    const step = () => {
      if (!isHovered && el) {
        el.scrollLeft += 4.0;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex gap-5 overflow-x-auto scrollbar-none py-4 px-2 scroll-smooth select-none cursor-grab active:cursor-grabbing"
    >
      {[...infrastructureCards, ...infrastructureCards].map((item, idx) => (
        <div
          key={`${item.title}-${idx}`}
          className="shrink-0 w-[260px] sm:w-[310px] md:w-[340px] group relative rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_15px_35px_rgba(6,182,212,0.2)] hover:-translate-y-1.5 cursor-pointer bg-slate-900/80 flex flex-col"
        >
          {/* Image Container - Smaller Compact Height */}
          <div className="relative w-full h-44 sm:h-48 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-70 transition-opacity duration-300" />

            {/* Floating Badge */}
            <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono font-bold tracking-wider backdrop-blur-md shadow-lg group-hover:border-cyan-400 group-hover:scale-105 transition-all">
              {item.badge}
            </div>
          </div>

          {/* Card Content */}
          <div className="p-4 sm:p-5 relative z-10 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-[11px] font-mono font-semibold text-cyan-400 mb-2">
                {item.subtitle}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {item.desc}
              </p>
            </div>

            {/* Specs Pills */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
              {item.specs.map((spec) => (
                <span
                  key={spec}
                  className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-md bg-slate-900 border border-slate-800 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-colors"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Erha Technologies — Enterprise AI & Digital Solutions" },
      {
        name: "description",
        content:
          "Erha Technologies engineers production-grade AI systems, multi-agent workflows, custom web applications, and enterprise digital solutions.",
      },
      { property: "og:title", content: "Erha Technologies — Enterprise AI & Digital Solutions" },
      {
        property: "og:description",
        content: "Production-grade AI systems, multi-agent workflows, and enterprise digital solutions.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/" }
    ],
  }),
  component: HomePage,
});

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
      "Autonomous Planning & Reasoning",
      "Short/Long Term Memory Caching",
      "Dynamic Tool Execution",
      "Conflict Resolution Routing",
    ],
    renderDiagram: (active: boolean) => (
      <svg
        className="w-full h-full max-h-[180px] md:max-h-[220px]"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="100" y1="30" x2="50" y2="80" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="30" x2="100" y2="90" stroke="#818cf8" strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="30" x2="150" y2="80" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />

        <circle cx="100" cy="30" r="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <text x="100" y="34" fill="#38bdf8" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
          HUB
        </text>

        <circle cx="50" cy="80" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <text x="50" y="83" fill="#cbd5e1" fontSize="7" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
          AGT_1
        </text>

        <circle cx="100" cy="90" r="12" fill="#0f172a" stroke="#818cf8" strokeWidth="2" />
        <text x="100" y="93" fill="#cbd5e1" fontSize="7" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
          AGT_2
        </text>

        <circle cx="150" cy="80" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <text x="150" y="83" fill="#cbd5e1" fontSize="7" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
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
        <path d="M 20 60 L 70 60 L 130 60 L 180 60" stroke="#818cf8" strokeWidth="1.5" opacity="0.6" />
        <rect x="15" y="45" width="28" height="30" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="29" y="63" fill="#38bdf8" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          DATA
        </text>

        <circle cx="90" cy="60" r="14" fill="#0f172a" stroke="#818cf8" strokeWidth="2" />
        <text x="90" y="63" fill="#818cf8" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          LoRA
        </text>

        <rect x="145" y="45" width="32" height="30" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="161" y="63" fill="#38bdf8" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          MODEL
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
        <line x1="30" y1="30" x2="100" y2="60" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
        <line x1="30" y1="90" x2="100" y2="60" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="60" x2="170" y2="30" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="60" x2="170" y2="90" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />

        <circle cx="30" cy="30" r="10" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
        <text x="30" y="33" fill="#cbd5e1" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          EDGE
        </text>
        <circle cx="30" cy="90" r="10" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
        <text x="30" y="93" fill="#cbd5e1" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          EDGE
        </text>

        <rect x="80" y="45" width="40" height="30" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <text x="100" y="63" fill="#38bdf8" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          CLUSTER
        </text>
      </svg>
    ),
  },
  {
    id: "rag",
    title: "Cognitive RAG",
    subtitle: "Context-Aware Vector Search & Semantic Pipelines",
    icon: Database,
    desc: "Build highly compliant, context-aware Retrieval-Augmented Generation systems. Integrate vector databases, semantic caching, and neural search to retrieve precise enterprise knowledge.",
    stats: [
      { value: "< 50ms", label: "Query Retrieval" },
      { value: "99.8%", label: "Context Accuracy" },
      { value: "Scale-Out", label: "Vector Index" },
    ],
    features: [
      "Hybrid Vector/Lexical Search",
      "Dynamic Prompt Context Insertion",
      "Semantic Cache Verification",
      "Metadata Chunk Filtering",
    ],
    renderDiagram: (active: boolean) => (
      <svg
        className="w-full h-full max-h-[180px] md:max-h-[220px]"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 20 30 C 60 30, 60 90, 100 90 C 140 90, 140 30, 180 30" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
        <circle cx="30" cy="30" r="10" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
        <text x="30" y="33" fill="#cbd5e1" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          QUERY
        </text>
        <rect x="85" y="75" width="30" height="30" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <text x="100" y="93" fill="#38bdf8" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          VEC_DB
        </text>
        <circle cx="170" cy="30" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="170" y="33" fill="#cbd5e1" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          LLM
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
      <div className="w-full md:w-1/4 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-2 pb-3 md:pb-0 border-b md:border-b-0 md:border-r border-slate-800 pr-0 md:pr-4 scrollbar-none">
        {innovationTabs.map((t, idx) => {
          const tabActive = activeTabId === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTabId(t.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left cursor-pointer transition-all duration-200 w-max md:w-full shrink-0 ${
                tabActive
                  ? "bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                  : "bg-slate-900/40 border border-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <span className="font-mono text-xs opacity-50">0{idx + 1}</span>
              <span className="text-sm font-semibold tracking-tight">{t.title}</span>
            </button>
          );
        })}
      </div>

      {/* Detail Window Column */}
      <div className="w-full md:w-3/4 grid lg:grid-cols-2 gap-6 md:gap-8 items-center glass-strong border border-slate-800 p-6 md:p-8 rounded-3xl relative overflow-hidden">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <TabIcon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white tracking-tight">
                  {activeTab.title}
                </h3>
                <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mt-0.5">
                  {activeTab.subtitle}
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">{activeTab.desc}</p>

            <ul className="space-y-2.5 mb-6">
              {activeTab.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                  <CheckCircle2 size={14} className="text-cyan-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-3 border-t border-slate-800 pt-6 mt-4">
            {activeTab.stats.map((s) => (
              <div key={s.label} className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl flex flex-col text-center">
                <span className="text-gradient font-extrabold text-sm sm:text-base leading-none">
                  {s.value}
                </span>
                <span className="text-[9px] text-slate-400 uppercase tracking-wider mt-1.5 font-mono">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Diagram Visualizer */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center items-center h-full min-h-[220px]">
          <div className="text-[10px] font-mono uppercase text-slate-400 tracking-widest mb-4 font-semibold">
            System Topology Blueprint
          </div>
          <div className="w-full flex justify-center items-center">
            {activeTab.renderDiagram(true)}
          </div>
          <div className="text-[9px] font-mono uppercase text-cyan-400 mt-4 flex items-center gap-1.5 font-semibold">
            <Activity size={12} className="animate-pulse text-cyan-400" /> Telemetry Status: Active
          </div>
        </div>
      </div>
    </div>
  );
}

const servicesList = [
  "WEBSITES",
  "AI AGENTS",
  "SOFTWARES",
  "CUSTOM LLMS",
  "AI CHATBOTS",
  "MOBILE APPS",
] as const;

function HomePage() {
  const [sphereSize, setSphereSize] = useState(480);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [flipPhase, setFlipPhase] = useState<"idle" | "flip-in">("idle");

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setSphereSize(w < 480 ? 260 : w < 640 ? 320 : w < 1024 ? 380 : 480);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      // Trigger flip-in on new word
      setFlipPhase("flip-in");
      setServiceIndex((prev) => (prev + 1) % servicesList.length);
      // Reset after animation completes
      const reset = setTimeout(() => setFlipPhase("idle"), 500);
      return () => clearTimeout(reset);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in relative min-h-screen">

      {/* HERO SECTION (Compact, 100% Visible Above The Fold) */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-10 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center z-10 w-full animate-fade-up">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1 sm:px-5 sm:py-1.5 rounded-full border border-slate-700/80 bg-slate-900/60 backdrop-blur-md text-xs font-semibold text-slate-300 tracking-wide mb-3 sm:mb-4 shadow-sm">
            Building Brands <span className="font-bold text-white ml-1">Worldwide.</span>
          </div>

          {/* Sub-headline with Flanking Horizontal Lines */}
          <div className="w-full flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
            <span className="h-[1px] w-8 sm:w-20 md:w-32 bg-gradient-to-r from-transparent to-slate-500/80" />
            <h2 className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] font-extrabold text-slate-300 shrink-0">
              ACCELERATING BUSINESSES BEYOND BOUNDARIES
            </h2>
            <span className="h-[1px] w-8 sm:w-20 md:w-32 bg-gradient-to-l from-transparent to-slate-500/80" />
          </div>

          {/* Massive Impact Typography Headline with Digital Flip-Clock Ticker */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[76px] 2xl:text-[90px] font-black uppercase tracking-tight leading-[0.98] text-white mb-5 sm:mb-6 text-center drop-shadow-md w-full">
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-4 max-w-full">
              <span>BUILDING</span>
              <span
                style={{ perspective: '600px', display: 'inline-block', overflow: 'hidden' }}
              >
                <span
                  key={serviceIndex}
                  className={`text-[#45DDFD] inline-block ${flipPhase === 'flip-in' ? 'ticker-flip-in' : ''}`}
                  style={{ transformOrigin: 'center top', backfaceVisibility: 'hidden' }}
                >
                  {servicesList[serviceIndex]}
                </span>
              </span>
            </span> <br />
            <span className="text-stroke-white block mt-1">GENERATING LEADS!</span>
          </h1>

          {/* Clean Paragraph */}
          <p className="text-sm sm:text-base md:text-lg xl:text-xl text-slate-300 max-w-2xl xl:max-w-3xl leading-relaxed mb-6 sm:mb-8 md:mb-10 text-center font-normal px-2 sm:px-4">
            Enterprise software house & AI engineering agency — building intelligent systems, scalable web platforms, and custom digital solutions precision-engineered around your business goals.
          </p>

          {/* Centered CTA Buttons (100% Visible On Screen) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto">
            <Link
              to="/services"
              className="btn-neon font-bold text-sm sm:text-base px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all w-full sm:w-auto"
            >
              Explore Solutions <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full border border-slate-700/80 hover:border-cyan-400 bg-slate-900/50 hover:bg-slate-800/80 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm w-full sm:w-auto"
            >
              Schedule Consultation
            </Link>
          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES DECK */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2 font-mono">
            System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Enterprise <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl mx-auto">
            Engineered topologies built for high performance, compliance, and global scale.
          </p>
        </div>

        <InnovationDeck />
      </section>

      {/* GLOBAL OFFICES & INFRASTRUCTURE GALLERY */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 max-w-7xl mx-auto border-t border-slate-800/60 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <Building2 size={14} />
            Offices & Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 animate-fade-up">
            State-of-the-Art <span className="text-gradient">Offices & Compute Infrastructure</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Explore our high-performance AI labs, multi-region compute clusters, and collaborative software engineering hubs.
          </p>
        </div>

        {/* Auto-scrolling Gallery */}
        <InfrastructureGallery />
      </section>

      {/* CALL TO ACTION */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Ready to scale your <span className="text-gradient">digital infrastructure</span>?
        </h2>
        <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          Partner with Erha Technologies to build software that elevates your enterprise.
        </p>
        <Link
          to="/contact"
          className="btn-neon font-semibold text-base px-9 py-4 rounded-full inline-flex items-center gap-2"
        >
          Start Your Project <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
