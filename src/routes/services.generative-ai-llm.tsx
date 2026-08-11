import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, ChevronLeft, Send, Layers, Star } from "lucide-react";

export const Route = createFileRoute("/services/generative-ai-llm")({
  head: () => ({
    meta: [
      { title: "Generative AI, Custom LLMs & RAG — Erha Technologies" },
      { name: "description", content: "Custom LLM fine-tuning, domain adaptation, and hybrid vector RAG search." },
    ],
  }),
  component: GenerativeAIPage,
});

function GenerativeAIPage() {
  const [selectedPackage, setSelectedPackage] = useState<"Starter" | "Pro" | "Enterprise">("Pro");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = {
        "Service": "Generative AI, Custom LLMs & RAG",
        "Selected Package": selectedPackage,
        "Name": form.name,
        "Email": form.email,
        "Phone": form.phone,
        "Details": form.message || "Not Specified",
        _subject: `Order Request: Generative AI & RAG (${selectedPackage} Package)`,
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
        <Link to="/services/ai" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 hover:text-cyan-400">
          <ChevronLeft size={14} /> Back to AI Services Hub
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Standalone AI Service Page
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
            Generative AI, <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Custom LLMs & RAG</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 font-medium">
            Fine-tune Llama 3, Mistral, or deployment hybrid vector search RAG systems for domain expertise and complete dataset privacy.
          </p>
          <a href="#packages" className="btn-neon py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold inline-flex items-center gap-2">
            View LLM Packages <ArrowRight size={16} />
          </a>
        </div>

        <div className="glass-strong rounded-3xl p-8 border border-cyan-500/40 relative bg-slate-950/80">
          <Sparkles size={36} className="text-cyan-400 mb-4" />
          <h3 className="text-xl font-black text-white mb-2">Proprietary LLMs</h3>
          <p className="text-xs text-slate-300 mb-6">Fine-tuning, quantization & vector retrieval engines.</p>
          <div className="pt-4 border-t border-slate-800 flex justify-between text-xs font-mono">
            <span className="text-slate-400">Starting Package:</span>
            <span className="font-bold text-cyan-300 text-base">$3,000</span>
          </div>
        </div>
      </div>

      {/* Packages */}
      <div id="packages" className="mb-20 scroll-mt-24">
        <h2 className="text-3xl font-black text-white text-center mb-12">Packages for <span className="text-cyan-400">Custom LLMs & RAG</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div onClick={() => setSelectedPackage("Starter")} className={`glass-strong rounded-3xl p-8 border cursor-pointer ${selectedPackage === "Starter" ? "border-cyan-400 bg-slate-900/90" : "border-slate-800 bg-slate-950/80"}`}>
            <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-2">RAG Foundation</span>
            <span className="text-3xl font-black text-white">$3,000</span>
            <p className="text-xs text-slate-300 my-4">Production RAG on structured documents.</p>
            <div className="space-y-2 text-xs text-slate-300 mb-6">
              <div><CheckCircle2 size={14} className="text-cyan-400 inline mr-2" /> Hybrid RAG Search</div>
              <div><CheckCircle2 size={14} className="text-cyan-400 inline mr-2" /> Up to 2,000 Vectorized Docs</div>
            </div>
            <button className="w-full py-3 rounded-xl bg-slate-800 text-white text-xs font-bold">Order RAG Foundation ($3,000)</button>
          </div>

          <div onClick={() => setSelectedPackage("Pro")} className={`glass-strong rounded-3xl p-8 border relative scale-[1.03] cursor-pointer ${selectedPackage === "Pro" ? "border-cyan-400 bg-slate-900/95" : "border-cyan-500/60 bg-slate-950/90"}`}>
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-black uppercase font-mono"><Star size={10} className="inline mr-1" /> Most Popular</div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase block mb-2 mt-1">Custom LLM Pro</span>
            <span className="text-3xl font-black text-cyan-300">$7,500</span>
            <p className="text-xs text-slate-300 my-4">Model fine-tuning on domain dataset + RAG.</p>
            <div className="space-y-2 text-xs text-slate-200 mb-6">
              <div><CheckCircle2 size={14} className="text-cyan-400 inline mr-2" /> Custom Model Fine-Tuning</div>
              <div><CheckCircle2 size={14} className="text-cyan-400 inline mr-2" /> Hybrid Vector Search</div>
              <div><CheckCircle2 size={14} className="text-cyan-400 inline mr-2" /> Dataset Curation Pipeline</div>
            </div>
            <button className="btn-neon w-full py-3 rounded-xl text-xs font-black">Order LLM Pro ($7,500)</button>
          </div>

          <div onClick={() => setSelectedPackage("Enterprise")} className={`glass-strong rounded-3xl p-8 border cursor-pointer ${selectedPackage === "Enterprise" ? "border-amber-400 bg-slate-900/90" : "border-amber-500/40 bg-slate-950/80"}`}>
            <span className="text-xs font-mono text-amber-400 font-bold uppercase block mb-2">Enterprise Model Suite</span>
            <span className="text-3xl font-black text-amber-300">$15,000+</span>
            <p className="text-xs text-slate-300 my-4">Private GPU clusters & air-gapped hosting.</p>
            <div className="space-y-2 text-xs text-slate-200 mb-6">
              <div><CheckCircle2 size={14} className="text-amber-400 inline mr-2" /> Dedicated Private GPU Hosting</div>
              <div><CheckCircle2 size={14} className="text-amber-400 inline mr-2" /> Air-Gapped Installation</div>
            </div>
            <button className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 text-xs font-black">Order Enterprise ($15,000+)</button>
          </div>
        </div>
      </div>

      {/* Form */}
      <div id="proposal-form" className="max-w-3xl mx-auto mb-20">
        <div className="glass-strong rounded-3xl p-8 border border-cyan-500/40 bg-slate-950/90">
          <h3 className="text-2xl font-black text-white text-center mb-6">Order Custom LLM ({selectedPackage})</h3>
          {sent ? (
            <div className="text-center py-6"><CheckCircle2 size={36} className="text-cyan-400 mx-auto mb-2" /><p className="text-white font-bold">Request Sent!</p></div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm" placeholder="Name *" />
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm" placeholder="Email *" />
              </div>
              <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm" placeholder="Phone *" />
              <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm resize-none" placeholder="Data details..." />
              <button type="submit" disabled={isSubmitting} className="btn-neon w-full py-3.5 text-xs font-bold rounded-xl">{isSubmitting ? "Submitting..." : "Submit Order"} <Send size={14} /></button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
