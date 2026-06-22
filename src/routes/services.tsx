import { createFileRoute } from "@tanstack/react-router";
import { Brain, Bot, Code, Cpu, Zap, Layers, ChevronLeft, ArrowRight, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

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

      {/* Configurator lead widget */}
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
    let recommendation = "";
    let complexity = "Medium Complexity";

    if (serviceCount === 0) {
      return {
        title: "Bespoke AI Consultation Roadmap",
        complexity: "Standard",
        description: "Let's explore your business needs to scope out a custom digital roadmap.",
      };
    }

    if (selectedServices.includes("Agentic AI Systems") || dataScale === "Enterprise") {
      recommendation = "Autonomous Agentic Flow & Scalable Vector Database";
      complexity = "High Complexity";
    } else if (selectedServices.includes("AI Development") && dataScale === "Medium") {
      recommendation = "Hybrid RAG Search Pipeline & Custom LLM Fine-Tuning";
      complexity = "Medium Complexity";
    } else if (selectedServices.includes("Website Development") || selectedServices.includes("Full Stack Development")) {
      recommendation = "High-Performance Jamstack Frontend & Secure API Backend";
      complexity = "Low-Medium Complexity";
    } else {
      recommendation = "Custom AI Workflow Automation Pipeline";
      complexity = "Medium Complexity";
    }

    return {
      title: recommendation,
      complexity,
      description: `Recommended architecture based on choosing: ${selectedServices.join(", ")}. Tailored for ${dataScale} data scale and ${userScale === "Internal" ? "Internal Team" : "Public/High-Traffic"} user scale.`,
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

      await fetch("https://formsubmit.co/ajax/erhatechnologiesofficial@gmail.com", {
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

  return (
    <div className="mt-24 border-t border-white/5 pt-20 max-w-4xl mx-auto animate-fade-up">
      <div className="text-center mb-12">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          AI Solution <span className="text-gradient">Configurator</span>
        </h2>
        <p className="text-sm text-muted-foreground mt-3">
          Answer a few questions to generate a recommended system architecture and request a proposal.
        </p>
      </div>

      <div className="glass-strong rounded-3xl p-8 border border-[var(--neon-cyan)]/15 relative overflow-hidden">
        {/* Progress Bar */}
        <div className="w-full bg-white/5 h-1 rounded-full mb-8 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {sent ? (
          <div className="text-center py-10 animate-fade-in">
            <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-[var(--neon-cyan)]/25 flex items-center justify-center mb-5 text-[var(--neon-cyan)]">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="font-display text-2xl mb-2 text-white">Configuration Submitted</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Thank you! Our engineering team will review your recommended architecture (<strong>{rec.title}</strong>) and email you a customized project roadmap within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            {/* STEP 1: Services Selector */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="font-display text-xl mb-4 text-white">Step 1: Select Required Focus Areas</h3>
                <p className="text-xs text-muted-foreground mb-6">Select all capabilities that your project involves.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "AI Development",
                    "Agentic AI Systems",
                    "Full Stack Development",
                    "AI Automation",
                    "AI Integration & RAG",
                  ].map((s) => (
                    <button
                      key={s}
                      onClick={() => toggleService(s)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex justify-between items-center ${
                        selectedServices.includes(s)
                          ? "border-[var(--neon-cyan)] bg-[var(--neon-cyan)]/5 text-white"
                          : "border-white/5 bg-white/5 text-muted-foreground hover:text-white"
                      }`}
                    >
                      <span className="text-sm font-semibold">{s}</span>
                      {selectedServices.includes(s) && (
                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--neon-cyan)]" />
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

            {/* STEP 2: Scale Selector */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="font-display text-xl mb-4 text-white">Step 2: Scale & Architecture Parameters</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-3 block font-mono">
                      Expected Data Scale
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {["Small (<1GB)", "Medium (1-50GB)", "Enterprise (>50GB)"].map((s) => {
                        const val = s.split(" ")[0];
                        return (
                          <button
                            key={s}
                            onClick={() => setDataScale(val)}
                            className={`py-3 rounded-lg border text-xs font-semibold transition cursor-pointer ${
                              dataScale === val
                                ? "border-[var(--neon-cyan)] bg-[var(--neon-cyan)]/5 text-white"
                                : "border-white/5 bg-white/5 text-muted-foreground hover:text-white"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-3 block font-mono">
                      Target Audience / User Traffic
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Internal Team Scale", val: "Internal" },
                        { label: "Public / High-Traffic Scale", val: "Public" },
                      ].map((u) => (
                        <button
                          key={u.val}
                          onClick={() => setUserScale(u.val)}
                          className={`py-3 rounded-lg border text-xs font-semibold transition cursor-pointer ${
                            userScale === u.val
                              ? "border-[var(--neon-cyan)] bg-[var(--neon-cyan)]/5 text-white"
                              : "border-white/5 bg-white/5 text-muted-foreground hover:text-white"
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
                    className="px-5 py-2.5 rounded-full border border-white/10 text-xs font-semibold text-muted-foreground hover:text-white inline-flex items-center gap-1.5 cursor-pointer"
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

            {/* STEP 3: Recommendation & Lead Submission */}
            {step === 3 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <h3 className="font-display text-xl mb-2 text-white">Step 3: Recommended System Architecture</h3>
                  <div className="glass p-5 rounded-xl border border-[var(--neon-cyan)]/20 mt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-mono uppercase text-[var(--neon-cyan)] bg-[var(--neon-cyan)]/10 px-2.5 py-0.5 rounded-full">
                        {rec.complexity}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white font-display mb-2">{rec.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{rec.description}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-white/5">
                  <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider">Request Architectural Roadmap</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">Name</label>
                      <input
                        required
                        type="text"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 text-sm focus:border-[var(--neon-cyan)] focus:outline-none transition bg-black/20"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">Email</label>
                      <input
                        required
                        type="email"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 text-sm focus:border-[var(--neon-cyan)] focus:outline-none transition bg-black/20"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">Additional Notes (Optional)</label>
                    <textarea
                      rows={3}
                      value={leadForm.message}
                      onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 text-sm focus:border-[var(--neon-cyan)] focus:outline-none transition resize-none bg-black/20"
                      placeholder="Timeline requirements, legacy systems, etc..."
                    />
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-full border border-white/10 text-xs font-semibold text-muted-foreground hover:text-white inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronLeft size={14} /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-neon px-7 py-2.5 rounded-full inline-flex items-center gap-1.5 text-xs font-bold disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Configuration"} <Send size={12} />
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
