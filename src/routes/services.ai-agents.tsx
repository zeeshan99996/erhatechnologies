import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bot,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Send,
  Zap,
  Cpu,
  ShieldCheck,
  Layers,
  HelpCircle,
  ChevronDown,
  Star,
  Activity,
  GitBranch,
  Terminal,
} from "lucide-react";

export const Route = createFileRoute("/services/ai-agents")({
  head: () => ({
    meta: [
      { title: "AI Agents & Autonomous Agentic Systems — Erha Technologies" },
      {
        name: "description",
        content:
          "Deploy self-correcting autonomous multi-agent networks that execute end-to-end enterprise tasks without continuous human supervision.",
      },
    ],
  }),
  component: AIAgentsPage,
});

function AIAgentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPackage, setSelectedPackage] = useState<"Starter" | "Pro" | "Enterprise">("Pro");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = {
        "Service": "AI Agents & Autonomous Systems",
        "Selected Package": selectedPackage,
        "Name": form.name,
        "Email": form.email,
        "Phone": form.phone,
        "Details": form.message || "Not Specified",
        _subject: `Order Request: AI Agents (${selectedPackage} Package)`,
      };

      await fetch("https://formsubmit.co/ajax/info@erhatechnologies.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 py-16 md:py-24 max-w-7xl mx-auto animate-fade-up">
      {/* Navigation Breadcrumb */}
      <div className="mb-6">
        <Link
          to="/services/ai"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronLeft size={14} /> Back to AI Services Hub
        </Link>
      </div>

      {/* Hero Header */}
      <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <Bot size={14} /> Standalone AI Service Page
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
            AI Agents & <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Autonomous Swarms</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-medium">
            Deploy cognitive multi-agent networks that break down high-level business goals, execute API tool calls, reason through complex decisions, and self-correct with zero human delay.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#packages"
              className="btn-neon py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg"
            >
              View AI Agent Packages <ArrowRight size={16} />
            </a>
            <a
              href="#proposal-form"
              className="px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition-all"
            >
              Request Custom Build
            </a>
          </div>
        </div>

        {/* Hero Card */}
        <div className="glass-strong rounded-3xl p-8 border border-cyan-500/40 relative overflow-hidden shadow-2xl bg-slate-950/80">
          <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit mb-6">
            <Bot size={36} />
          </div>
          <h3 className="text-xl font-black text-white mb-2">Autonomous Agentic Systems</h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-6">
            Self-correcting multi-agent loops for automated research, SQL queries, CRM updates, and code generation.
          </p>
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Starting Package:</span>
            <span className="font-extrabold text-cyan-300 text-base">$2,000</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="glass-strong rounded-3xl p-8 sm:p-10 border border-slate-800 mb-16 bg-slate-950/60">
        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
          Service Deep-Dive
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
          How Autonomous AI Agents Transform Operations
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          Unlike static chatbots that only reply when prompted, Autonomous AI Agents operate as goal-driven workers. Give an agent a task (e.g. &ldquo;Find qualified leads, verify domain emails, craft tailored proposals, and book calendar meetings&rdquo;), and the agent swarm plans execution steps, invokes REST APIs, handles exceptions, and verifies output accuracy autonomously.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <Activity size={20} className="text-cyan-400 mb-2" />
            <h4 className="text-xs font-bold text-white mb-1">85% Ops Time Saved</h4>
            <p className="text-[11px] text-slate-400">Replaces repetitive manual workflows with cognitive loops.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <GitBranch size={20} className="text-indigo-400 mb-2" />
            <h4 className="text-xs font-bold text-white mb-1">Multi-Agent Graph</h4>
            <p className="text-[11px] text-slate-400">LangGraph & LlamaIndex orchestrating multiple specialized agents.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <Terminal size={20} className="text-purple-400 mb-2" />
            <h4 className="text-xs font-bold text-white mb-1">Function & API Tools</h4>
            <p className="text-[11px] text-slate-400">Direct SQL, Webhook, CRM, and REST tool integration.</p>
          </div>
        </div>
      </div>

      {/* 3 Dedicated Packages Section */}
      <div id="packages" className="mb-20 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-300 text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <Layers size={14} /> AI Agent Packages & Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Packages for <span className="text-cyan-400">AI Agents</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Select an AI Agent package below to pre-fill your order request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter */}
          <div
            onClick={() => setSelectedPackage("Starter")}
            className={`glass-strong rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              selectedPackage === "Starter"
                ? "border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)] bg-slate-900/90"
                : "border-slate-800 hover:border-slate-700 bg-slate-950/80"
            }`}
          >
            <div>
              <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider block mb-2">
                Agent Starter Package
              </span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black text-white">$2,000</span>
                <span className="text-xs text-slate-400 font-mono">/ setup</span>
              </div>
              <p className="text-xs text-slate-300 mb-6">Ideal for startups introducing basic single-agent automation.</p>
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Single Autonomous Agent Workflow
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Zapier / Make / n8n Connectors
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Standard RAG Document Indexing
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Web Widget & API Webhooks
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> 30 Days Maintenance Support
                </div>
              </div>
            </div>
            <button
              type="button"
              className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold text-center block transition-colors"
            >
              Order Starter ($2,000)
            </button>
          </div>

          {/* Pro */}
          <div
            onClick={() => setSelectedPackage("Pro")}
            className={`glass-strong rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative scale-[1.03] cursor-pointer ${
              selectedPackage === "Pro"
                ? "border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.4)] bg-slate-900/95"
                : "border-cyan-500/60 bg-slate-950/90"
            }`}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 text-[10px] font-black uppercase font-mono shadow-lg flex items-center gap-1">
              <Star size={12} fill="currentColor" /> Most Popular
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-2 mt-1">
                Agentic Pro Swarm
              </span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black text-cyan-300">$5,000</span>
                <span className="text-xs text-slate-400 font-mono">/ starting</span>
              </div>
              <p className="text-xs text-slate-300 mb-6">Multi-agent network with API tool use & self-correction.</p>
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Up to 5 Coordinated Agent Swarms
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Custom Function Calling & API Tools
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> RAG Vector Memory on Unlimited Files
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> CRM & ERP Deep System Integration
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Real-Time Telemetry & Audit Logs
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> 90 Days SLA & Model Tuning
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn-neon w-full py-3.5 rounded-xl text-xs font-black text-center block shadow-lg"
            >
              Order Agentic Pro ($5,000)
            </button>
          </div>

          {/* Enterprise */}
          <div
            onClick={() => setSelectedPackage("Enterprise")}
            className={`glass-strong rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              selectedPackage === "Enterprise"
                ? "border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.3)] bg-slate-900/90"
                : "border-amber-500/40 bg-slate-950/80"
            }`}
          >
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-2">
                Enterprise Swarm Network
              </span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black text-amber-300">$10,000+</span>
                <span className="text-xs text-slate-400 font-mono">/ custom scope</span>
              </div>
              <p className="text-xs text-slate-300 mb-6">Dedicated GPU clusters, private cloud hosting & air-gapped security.</p>
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Unlimited Autonomous Agent Swarms
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Air-Gapped On-Premise LLM Hosting
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Custom Model Fine-Tuning on Datasets
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Dedicated AI Architect & Support Lead
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0" /> 24/7 Managed Operations & SLA
                </div>
              </div>
            </div>
            <button
              type="button"
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black text-center block transition-colors"
            >
              Order Enterprise ($10,000+)
            </button>
          </div>
        </div>
      </div>

      {/* Direct Order Form */}
      <div id="proposal-form" className="max-w-3xl mx-auto mb-20 scroll-mt-24">
        <div className="glass-strong rounded-3xl p-8 sm:p-10 border border-cyan-500/40 shadow-2xl bg-slate-950/90">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              Direct Order Request
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Order AI Agents ({selectedPackage} Package)
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Fill in your contact info to get a formal technical proposal within 24 hours.
            </p>
          </div>

          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 size={48} className="text-cyan-400 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-white mb-2">Order Request Submitted</h4>
              <p className="text-xs text-slate-300">
                Thank you! We received your request for <strong>AI Agents ({selectedPackage} Package)</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="p-3.5 rounded-xl bg-blue-600/20 border border-blue-500/50 flex items-center justify-between text-xs font-mono">
                <span className="text-blue-200">Selected Package:</span>
                <span className="font-extrabold text-cyan-300 text-sm">{selectedPackage} Package</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-1 block">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-1 block">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-1 block">Phone / WhatsApp *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-1 block">Selected Package</label>
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value as any)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Starter">Starter Package ($2,000)</option>
                    <option value="Pro">Agentic Pro Swarm ($5,000)</option>
                    <option value="Enterprise">Enterprise Swarm ($10,000+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold mb-1 block">Project Requirements (Optional)</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none resize-none"
                  placeholder="Share details about your target workflow or tools to integrate..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-neon w-full py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : `Submit AI Agents Order (${selectedPackage} Package)`} <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
