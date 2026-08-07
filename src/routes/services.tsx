import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain,
  Bot,
  Code,
  Cpu,
  Zap,
  Layers,
  ChevronLeft,
  ArrowRight,
  Send,
  CheckCircle2,
  MessageSquare,
  Workflow,
  Sparkles,
  BarChart2,
  ScanSearch,
  Mic,
  Lightbulb,
  Smartphone,
  Globe,
  TrendingUp,
  Search,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Erha Technologies Enterprise AI & Software" },
      {
        name: "description",
        content:
          "AI agents, agentic systems, chatbots, LLMs, RAG, computer vision, voice AI, web development, mobile apps, SEO and AI search optimization by Erha Technologies.",
      },
      { property: "og:title", content: "Services — Erha Technologies" },
      { property: "og:description", content: "End-to-end AI, software, and growth services." },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/services" }
    ],
  }),
  component: ServicesPage,
});

const serviceCategories = [
  {
    id: "ai",
    label: "AI Services",
    tagline: "Intelligent systems that reason, act, and scale",
    accent: "cyan",
    services: [
      {
        icon: Bot,
        title: "AI Agents & Agentic Systems",
        desc: "Autonomous multi-agent systems that plan, reason, and execute complex multi-step business tasks without constant human supervision.",
        features: ["Multi-Agent Orchestration", "Autonomous Planning", "Tool Use & APIs", "Self-Correction Loops"],
      },
      {
        icon: MessageSquare,
        title: "AI Chatbots & Virtual Assistants",
        desc: "Intelligent, context-aware chatbots and virtual assistants tailored to your business workflows, embedded across any channel.",
        features: ["Custom LLM Fine-Tuning", "Multi-Turn Context", "CRM Integration", "Multi-Channel Deploy"],
      },
      {
        icon: Workflow,
        title: "AI Integration & Workflow Automation",
        desc: "Seamlessly integrate AI capabilities into your existing systems and automate complex workflows across 200+ enterprise SaaS platforms.",
        features: ["RPA Automation", "API Orchestration", "Webhook Pipelines", "Real-Time Triggers"],
      },
      {
        icon: Sparkles,
        title: "Generative AI, Custom LLMs & RAG",
        desc: "Build production-grade generative AI systems with custom LLM fine-tuning and retrieval-augmented generation for your proprietary data.",
        features: ["LLM Fine-Tuning", "RAG Pipelines", "Vector Embeddings", "Hybrid Search"],
      },
      {
        icon: BarChart2,
        title: "Machine Learning & Predictive AI",
        desc: "Custom ML models for forecasting, anomaly detection, recommendation engines, and data-driven decision intelligence at enterprise scale.",
        features: ["Predictive Modelling", "Anomaly Detection", "Recommendation Engines", "MLOps Infrastructure"],
      },
      {
        icon: ScanSearch,
        title: "Computer Vision & Document AI",
        desc: "Extract intelligence from images, video, and documents using state-of-the-art computer vision and document understanding models.",
        features: ["Object Detection", "OCR & Document Parsing", "Image Classification", "Video Analytics"],
      },
      {
        icon: Mic,
        title: "Voice AI Agents & Speech Automation",
        desc: "Deploy voice-enabled AI agents that understand, reason, and respond in natural speech for customer service and enterprise workflows.",
        features: ["STT / TTS Pipelines", "Voice Agent Flows", "Real-Time Transcription", "Multilingual Support"],
      },
      {
        icon: Lightbulb,
        title: "AI Strategy & Transformation Consulting",
        desc: "Strategic AI advisory to help enterprises identify, prioritize, and execute high-ROI AI initiatives with a clear transformation roadmap.",
        features: ["AI Readiness Audit", "Use Case Discovery", "Architecture Planning", "ROI Modelling"],
      },
    ],
  },
  {
    id: "dev",
    label: "Development Services",
    tagline: "Engineering-first products built to last",
    accent: "indigo",
    services: [
      {
        icon: Globe,
        title: "Web Development & Enterprise Applications",
        desc: "High-performance, pixel-perfect web applications and enterprise platforms engineered with modern frameworks and rock-solid infrastructure.",
        features: ["React / Next.js", "Node.js & Python", "REST & GraphQL APIs", "CI/CD & Cloud Deploy"],
      },
      {
        icon: Smartphone,
        title: "Mobile & Cross-Platform App Development",
        desc: "Native-quality cross-platform mobile applications for iOS and Android, built with Flutter or React Native for speed and reliability.",
        features: ["iOS & Android", "React Native / Flutter", "On-Device AI", "Offline-First Architecture"],
      },
    ],
  },
  {
    id: "growth",
    label: "Search & Growth Services",
    tagline: "Visibility engineered for the AI-first web",
    accent: "emerald",
    services: [
      {
        icon: Search,
        title: "SEO & Organic Search Growth",
        desc: "Technical SEO, content strategy, and performance optimization to drive sustainable organic search growth and measurable ranking improvements.",
        features: ["Technical SEO Audits", "Keyword Strategy", "On-Page Optimization", "Core Web Vitals"],
      },
      {
        icon: TrendingUp,
        title: "AEO, GEO & AI Search Optimization",
        desc: "Optimize your brand for Answer Engine Optimization and Generative Engine Optimization to dominate AI-powered search results like ChatGPT, Perplexity, and Google SGE.",
        features: ["Answer Engine Optimization", "Generative Engine Optimization", "AI Citation Building", "Structured Data & Schema"],
      },
    ],
  },
];

const accentMap: Record<string, { border: string; bg: string; text: string; iconBg: string; iconBorder: string; tag: string; tagText: string }> = {
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/30",
    tag: "bg-cyan-500/10 border-cyan-500/20",
    tagText: "text-cyan-300",
  },
  indigo: {
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    iconBorder: "border-indigo-500/30",
    tag: "bg-indigo-500/10 border-indigo-500/20",
    tagText: "text-indigo-300",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-500/30",
    tag: "bg-emerald-500/10 border-emerald-500/20",
    tagText: "text-emerald-300",
  },
};

function ServicesPage() {
  let globalIdx = 0;

  return (
    <div className="px-4 sm:px-6 py-20 md:py-28 max-w-7xl mx-auto animate-fade-up">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold mb-3">
          Capabilities
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Services built for <span className="text-gradient">enterprise scale</span>
        </h1>
        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          From autonomous AI agents to enterprise software and AI-powered search growth — full-spectrum digital capabilities under one roof.
        </p>
      </div>

      {/* Service Category Sections */}
      <div className="space-y-20">
        {serviceCategories.map((cat) => {
          const colors = accentMap[cat.accent];
          return (
            <section key={cat.id}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-slate-800" />
                <div className={`flex items-center gap-3 px-8 py-3.5 rounded-full border ${colors.border} ${colors.bg} shadow-xl backdrop-blur-md`}>
                  <span className="text-base sm:text-lg md:text-xl font-black uppercase tracking-widest text-white font-mono">
                    {cat.label}
                  </span>
                </div>
                <div className="flex-1 h-px bg-slate-800" />
              </div>
              <p className="text-center text-sm font-bold mb-10 text-white font-mono tracking-wide opacity-90">
                — {cat.tagline} —
              </p>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {cat.services.map((s) => {
                  const idx = globalIdx++;
                  return (
                    <div
                      key={s.title}
                      className="glass card-3d rounded-2xl p-6 flex flex-col justify-between border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
                    >
                      <div>
                        {/* Icon */}
                        <div className={`w-11 h-11 rounded-xl ${colors.iconBg} border ${colors.iconBorder} flex items-center justify-center text-white mb-5`}>
                          <s.icon size={20} />
                        </div>
                        {/* Number */}
                        <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-white mb-2">
                          {String(idx + 1).padStart(2, "0")} / SERVICE
                        </div>
                        {/* Title */}
                        <h3 className="font-extrabold text-base text-white mb-2 leading-snug">{s.title}</h3>
                        {/* Desc */}
                        <p className="text-xs text-white leading-relaxed mb-5 opacity-90">{s.desc}</p>
                      </div>

                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                        {s.features.map((f) => (
                          <span
                            key={f}
                            className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${colors.tag} text-white`}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Solution Configurator */}
      <SolutionConfigurator />
    </div>
  );
}

function SolutionConfigurator() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [dataScale, setDataScale] = useState("Medium");
  const [userScale, setUserScale] = useState("Internal");
  const [leadForm, setLeadForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const getRecommendation = () => {
    const serviceCount = selectedServices.length;

    if (serviceCount === 0) {
      return {
        title: "Bespoke AI Consultation Roadmap",
        complexity: "Standard",
        description: "Let's explore your business needs to scope out a custom digital roadmap.",
      };
    }

    if (selectedServices.includes("AI Agents & Agentic Systems") || dataScale === "Enterprise") {
      return {
        title: "Autonomous Agentic Flow & Scalable Vector Database",
        complexity: "High Complexity",
        description: `Recommended architecture based on: ${selectedServices.join(", ")}. Tailored for ${dataScale} data scale and ${userScale === "Internal" ? "Internal Team" : "Public/High-Traffic"} audience.`,
      };
    } else if (selectedServices.includes("Generative AI, Custom LLMs & RAG") && dataScale === "Medium") {
      return {
        title: "Hybrid RAG Search Pipeline & Custom LLM Fine-Tuning",
        complexity: "Medium Complexity",
        description: `Recommended architecture based on: ${selectedServices.join(", ")}. Tailored for ${dataScale} data scale.`,
      };
    } else if (selectedServices.some((s) => s.includes("Web Development") || s.includes("Mobile"))) {
      return {
        title: "High-Performance Modern Frontend & Secure API Backend",
        complexity: "Low-Medium Complexity",
        description: `Recommended architecture based on: ${selectedServices.join(", ")}. Optimized for ${userScale === "Internal" ? "Internal Team" : "Public/High-Traffic"} audience.`,
      };
    } else if (selectedServices.some((s) => s.includes("SEO") || s.includes("AEO"))) {
      return {
        title: "Comprehensive Search & AI Visibility Strategy",
        complexity: "Medium Complexity",
        description: `Recommended strategy based on: ${selectedServices.join(", ")}. Designed for AI-first search dominance.`,
      };
    }

    return {
      title: "Custom AI Workflow Automation Pipeline",
      complexity: "Medium Complexity",
      description: `Recommended architecture based on: ${selectedServices.join(", ")}. Tailored for ${dataScale} data scale.`,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email) return;

    setIsSubmitting(true);
    const rec = getRecommendation();

    try {
      const payload = {
        "Configured Services": selectedServices.join(", "),
        "Data Scale": dataScale,
        "User Scale": userScale,
        "Recommended Solution": rec.title,
        "Complexity Tier": rec.complexity,
        "Client Name": leadForm.name,
        "Client Email": leadForm.email,
        "Additional Message": leadForm.message || "None",
        _subject: `Solution Configurator Lead: ${leadForm.name} — ${rec.complexity}`,
        _template: "table",
        _honey: "",
      };

      await fetch("https://formsubmit.co/ajax/info@erhatechnologies.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      setSent(true);
    } catch (err) {
      console.error("Configurator submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const rec = getRecommendation();

  const configuratorServices = [
    "AI Agents & Agentic Systems",
    "AI Chatbots & Virtual Assistants",
    "Generative AI, Custom LLMs & RAG",
    "Machine Learning & Predictive AI",
    "Computer Vision & Document AI",
    "Voice AI Agents & Speech Automation",
    "Web Development & Enterprise Applications",
    "Mobile & Cross-Platform App Development",
    "SEO & Organic Search Growth",
    "AEO, GEO & AI Search Optimization",
  ];

  return (
    <div className="mt-24 border-t border-slate-800/80 pt-16 max-w-4xl mx-auto animate-fade-up">
      <div className="text-center mb-12">
        <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2 font-mono">
          Interactive Tool
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          AI Solution <span className="text-gradient">Configurator</span>
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          Select parameters to generate a recommended system architecture and request a proposal.
        </p>
      </div>

      <div className="glass-strong rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="w-full bg-slate-800 h-1.5 rounded-full mb-8 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {sent ? (
          <div className="text-center py-10 animate-fade-in">
            <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-5 text-cyan-400">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="font-extrabold text-2xl mb-2 text-white">Configuration Submitted</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you! Our engineering team will review your recommended architecture (<strong>{rec.title}</strong>) and email you a customized proposal within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="font-bold text-xl mb-2 text-white">Step 1: Select Focus Areas</h3>
                <p className="text-xs text-slate-400 mb-6">Select all services your project requires.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {configuratorServices.map((s) => (
                    <button
                      key={s}
                      onClick={() => toggleService(s)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex justify-between items-center ${
                        selectedServices.includes(s)
                          ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300 font-semibold"
                          : "border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80"
                      }`}
                    >
                      <span className="text-sm">{s}</span>
                      {selectedServices.includes(s) && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 ml-2" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="btn-neon px-6 py-2.5 rounded-full inline-flex items-center gap-1.5 text-xs font-semibold"
                  >
                    Next Step <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="font-bold text-xl mb-4 text-white">Step 2: Scale Parameters</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 mb-3 block font-mono font-bold">
                      Expected Data Scale
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {["Small (<1GB)", "Medium (1-50GB)", "Enterprise (>50GB)"].map((s) => {
                        const val = s.split(" ")[0];
                        return (
                          <button
                            key={s}
                            onClick={() => setDataScale(val)}
                            className={`py-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                              dataScale === val
                                ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300"
                                : "border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 mb-3 block font-mono font-bold">
                      Target User Audience
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Internal Team Scale", val: "Internal" },
                        { label: "Public / High-Traffic Scale", val: "Public" },
                      ].map((u) => (
                        <button
                          key={u.val}
                          onClick={() => setUserScale(u.val)}
                          className={`py-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                            userScale === u.val
                              ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300"
                              : "border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80"
                          }`}
                        >
                          {u.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-full border border-slate-700 text-xs font-semibold text-slate-300 hover:bg-slate-800 inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronLeft size={14} /> Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="btn-neon px-6 py-2.5 rounded-full inline-flex items-center gap-1.5 text-xs font-semibold"
                  >
                    View Recommendation <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Step 3: Recommended Architecture</h3>
                  <div className="glass p-5 rounded-2xl border border-cyan-500/30 mt-4">
                    <span className="text-[10px] font-mono font-bold uppercase text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30">
                      {rec.complexity}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-3 mb-2">{rec.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{rec.description}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-slate-800">
                  <h4 className="font-bold text-sm text-white uppercase tracking-wider">Request Proposal</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400 font-semibold mb-1 block">Your Name</label>
                      <input
                        required
                        type="text"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/80 text-sm text-white focus:border-cyan-400 focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 font-semibold mb-1 block">Email Address</label>
                      <input
                        required
                        type="email"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/80 text-sm text-white focus:border-cyan-400 focus:outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 font-semibold mb-1 block">Project Requirements (Optional)</label>
                    <textarea
                      rows={3}
                      value={leadForm.message}
                      onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/80 text-sm text-white focus:border-cyan-400 focus:outline-none resize-none"
                      placeholder="Brief summary of timelines or custom features..."
                    />
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-full border border-slate-700 text-xs font-semibold text-slate-300 hover:bg-slate-800 inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronLeft size={14} /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-neon px-7 py-2.5 rounded-full inline-flex items-center gap-1.5 text-xs font-bold disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Proposal Request"} <Send size={12} />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
