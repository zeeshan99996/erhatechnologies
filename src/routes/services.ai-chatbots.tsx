import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Send,
  Globe,
  Layers,
  Star,
  Activity,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/services/ai-chatbots")({
  head: () => ({
    meta: [
      { title: "AI Chatbots & Virtual Assistants — Erha Technologies" },
      {
        name: "description",
        content:
          "Context-aware conversational AI chatbots built on your company knowledge base, documentation, and product catalogs.",
      },
    ],
  }),
  component: AIChatbotsPage,
});

function AIChatbotsPage() {
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
        "Service": "AI Chatbots & Virtual Assistants",
        "Selected Package": selectedPackage,
        "Name": form.name,
        "Email": form.email,
        "Phone": form.phone,
        "Details": form.message || "Not Specified",
        _subject: `Order Request: AI Chatbots (${selectedPackage} Package)`,
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
      {/* Breadcrumb */}
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
            <MessageSquare size={14} /> Standalone AI Service Page
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
            AI Chatbots & <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Virtual Assistants</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-medium">
            Transform customer support and internal knowledge retrieval with context-aware generative AI chatbots trained directly on your documentation, PDFs, website, and CRM APIs.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#packages"
              className="btn-neon py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg"
            >
              View AI Chatbot Packages <ArrowRight size={16} />
            </a>
            <a
              href="#proposal-form"
              className="px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition-all"
            >
              Get Chatbot Quote
            </a>
          </div>
        </div>

        {/* Hero Card */}
        <div className="glass-strong rounded-3xl p-8 border border-cyan-500/40 relative overflow-hidden shadow-2xl bg-slate-950/80">
          <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit mb-6">
            <MessageSquare size={36} />
          </div>
          <h3 className="text-xl font-black text-white mb-2">24/7 Context-Aware Assistants</h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-6">
            Multi-channel deployment across Web, WhatsApp, Teams, Slack, and Mobile apps.
          </p>
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Starting Package:</span>
            <span className="font-extrabold text-cyan-300 text-base">$1,500</span>
          </div>
        </div>
      </div>

      {/* 3 Packages Section */}
      <div id="packages" className="mb-20 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-300 text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <Layers size={14} /> AI Chatbot Packages & Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Pricing Packages for <span className="text-cyan-400">AI Chatbots</span>
          </h2>
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
                Bot Starter Package
              </span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black text-white">$1,500</span>
                <span className="text-xs text-slate-400 font-mono">/ setup</span>
              </div>
              <p className="text-xs text-slate-300 mb-6">Single-domain web chatbot for websites and landing pages.</p>
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Single-Domain Web Widget
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> RAG Search up to 500 Documents
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Standard Brand Persona & Guardrails
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Up to 15,000 Queries / month
                </div>
              </div>
            </div>
            <button
              type="button"
              className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold text-center block transition-colors"
            >
              Order Starter ($1,500)
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
                Omni-Bot Pro Package
              </span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black text-cyan-300">$3,500</span>
                <span className="text-xs text-slate-400 font-mono">/ starting</span>
              </div>
              <p className="text-xs text-slate-300 mb-6">Multi-channel bot for Web, WhatsApp, Slack & CRM ticket escalation.</p>
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Multi-Channel (Web, WhatsApp, Slack, Teams)
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> RAG Search on Unlimited Documents
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Live Support Ticket Escalation
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Up to 150,000 Queries / month
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> 24/7 Dedicated SLA & Tuning
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn-neon w-full py-3.5 rounded-xl text-xs font-black text-center block shadow-lg"
            >
              Order Omni-Bot Pro ($3,500)
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
                Enterprise Bot Cluster
              </span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black text-amber-300">$8,000+</span>
                <span className="text-xs text-slate-400 font-mono">/ custom scope</span>
              </div>
              <p className="text-xs text-slate-300 mb-6">Fine-tuned models, voice synthesis, and private server hosting.</p>
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Custom Fine-Tuned LLM Model
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Private Air-Gapped Cloud Server
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Voice AI & Multimodal Image Processing
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0" /> 1-Hour Guaranteed SLA
                </div>
              </div>
            </div>
            <button
              type="button"
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black text-center block transition-colors"
            >
              Order Enterprise ($8,000+)
            </button>
          </div>
        </div>
      </div>

      {/* Proposal Form */}
      <div id="proposal-form" className="max-w-3xl mx-auto mb-20">
        <div className="glass-strong rounded-3xl p-8 sm:p-10 border border-cyan-500/40 shadow-2xl bg-slate-950/90">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-white">Order AI Chatbot ({selectedPackage} Package)</h3>
          </div>

          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 size={48} className="text-cyan-400 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-white mb-2">Order Submitted</h4>
              <p className="text-xs text-slate-300">We will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Your Name *"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Your Email *"
                />
              </div>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                placeholder="Phone / WhatsApp *"
              />
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none resize-none"
                placeholder="Project Requirements..."
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-neon w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Submitting..." : `Submit AI Chatbot Order (${selectedPackage} Package)`} <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
