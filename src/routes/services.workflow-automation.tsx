import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Workflow,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Send,
  Layers,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/services/workflow-automation")({
  head: () => ({
    meta: [
      { title: "AI Integration & Workflow Automation — Erha Technologies" },
      {
        name: "description",
        content:
          "Connect your software ecosystem with intelligent RPA, automated document parsing, and trigger pipelines across 200+ SaaS platforms.",
      },
    ],
  }),
  component: AIWorkflowPage,
});

function AIWorkflowPage() {
  const [selectedPackage, setSelectedPackage] = useState<"Starter" | "Pro" | "Enterprise">("Pro");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = {
        "Service": "AI Workflow Automation",
        "Selected Package": selectedPackage,
        "Name": form.name,
        "Email": form.email,
        "Phone": form.phone,
        "Details": form.message || "Not Specified",
        _subject: `Order Request: AI Workflow Automation (${selectedPackage} Package)`,
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
      <div className="mb-6">
        <Link
          to="/services/ai"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronLeft size={14} /> Back to AI Services Hub
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <Workflow size={14} /> Standalone AI Service Page
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
            AI Integration & <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Workflow Automation</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-medium">
            Connect CRMs, ERPs, databases, and custom APIs with event-driven automation pipelines that process invoices, trigger notifications, and sync data 24/7.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#packages"
              className="btn-neon py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg"
            >
              View Automation Packages <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="glass-strong rounded-3xl p-8 border border-cyan-500/40 relative overflow-hidden shadow-2xl bg-slate-950/80">
          <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit mb-6">
            <Workflow size={36} />
          </div>
          <h3 className="text-xl font-black text-white mb-2">200+ SaaS System Integration</h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-6">
            n8n, Zapier, Make, and custom Python REST triggers with zero data entry errors.
          </p>
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Starting Package:</span>
            <span className="font-extrabold text-cyan-300 text-base">$2,000</span>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div id="packages" className="mb-20 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Pricing Packages for <span className="text-cyan-400">Workflow Automation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            onClick={() => setSelectedPackage("Starter")}
            className={`glass-strong rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              selectedPackage === "Starter"
                ? "border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)] bg-slate-900/90"
                : "border-slate-800 bg-slate-950/80"
            }`}
          >
            <div>
              <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider block mb-2">Automation Starter</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black text-white">$2,000</span>
                <span className="text-xs text-slate-400 font-mono">/ setup</span>
              </div>
              <p className="text-xs text-slate-300 mb-6">Up to 3 core workflow pipelines for small teams.</p>
              <div className="space-y-2.5 mb-8 text-xs text-slate-300">
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Up to 3 Automated Workflows</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Zapier / Make / n8n Connectors</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Data Scraping & Formatting</div>
              </div>
            </div>
            <button className="w-full py-3.5 rounded-xl bg-slate-800 text-white text-xs font-bold">Order Starter ($2,000)</button>
          </div>

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
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-2 mt-1">Automation Pro</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black text-cyan-300">$5,000</span>
                <span className="text-xs text-slate-400 font-mono">/ starting</span>
              </div>
              <p className="text-xs text-slate-300 mb-6">Up to 10 pipelines with self-correction & custom Python scripts.</p>
              <div className="space-y-2.5 mb-8 text-xs text-slate-200">
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Up to 10 Autonomous Pipelines</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Custom Python / Node AI Scripts</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Self-Correction & Fallbacks</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> CRM & ERP Deep Sync</div>
              </div>
            </div>
            <button className="btn-neon w-full py-3.5 rounded-xl text-xs font-black text-center shadow-lg">Order Pro ($5,000)</button>
          </div>

          <div
            onClick={() => setSelectedPackage("Enterprise")}
            className={`glass-strong rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              selectedPackage === "Enterprise"
                ? "border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.3)] bg-slate-900/90"
                : "border-amber-500/40 bg-slate-950/80"
            }`}
          >
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-2">Enterprise RPA Suite</span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black text-amber-300">$10,000+</span>
              </div>
              <p className="text-xs text-slate-300 mb-6">Air-gapped enterprise RPA pipelines and 24/7 dedicated support.</p>
              <div className="space-y-2.5 mb-8 text-xs text-slate-200">
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400" /> Unlimited Multi-App Workflows</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400" /> Dedicated Air-Gapped Infrastructure</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400" /> 24/7 Managed Automation Squad</div>
              </div>
            </div>
            <button className="w-full py-3.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-black">Order Enterprise ($10,000+)</button>
          </div>
        </div>
      </div>

      {/* Form */}
      <div id="proposal-form" className="max-w-3xl mx-auto mb-20">
        <div className="glass-strong rounded-3xl p-8 sm:p-10 border border-cyan-500/40 shadow-2xl bg-slate-950/90">
          <h3 className="text-2xl font-black text-white text-center mb-6">Order Workflow Automation ({selectedPackage})</h3>
          {sent ? (
            <div className="text-center py-8">
              <CheckCircle2 size={48} className="text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-bold">Order Received!</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white" placeholder="Full Name *" />
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white" placeholder="Email Address *" />
              </div>
              <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white" placeholder="Phone / WhatsApp *" />
              <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white resize-none" placeholder="Target Workflows..." />
              <button type="submit" disabled={isSubmitting} className="btn-neon w-full py-3.5 rounded-xl text-xs font-bold">{isSubmitting ? "Submitting..." : "Submit Automation Order"} <Send size={14} /></button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
