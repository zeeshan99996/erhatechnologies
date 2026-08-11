import { useState, useEffect } from "react";
import { servicesList } from "@/lib/servicesData";
import {
  X,
  CheckCircle2,
  ArrowRight,
  Send,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Zap,
  Cpu,
  Layers,
  Star,
} from "lucide-react";

interface ServiceModalProps {
  serviceId: string | null;
  onClose: () => void;
}

export function ServiceModal({ serviceId, onClose }: ServiceModalProps) {
  const service = servicesList.find((s) => s.id === serviceId);

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<"Starter" | "Professional" | "Enterprise">("Professional");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Lock background scroll when modal is open
  useEffect(() => {
    if (serviceId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [serviceId]);

  if (!service || !serviceId) return null;

  const IconComponent = service.icon;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = {
        "Service Name": service.title,
        "Selected Package": selectedPackage,
        "Full Name": form.name,
        "Email Address": form.email,
        "Phone / WhatsApp": form.phone,
        "Requirements": form.message || "Not Specified",
        _subject: `Order Request: ${service.title} (${selectedPackage} Package)`,
      };

      await fetch("https://formsubmit.co/ajax/info@erhatechnologies.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      {/* Click outside to close backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl z-10 custom-scrollbar text-left my-auto">
        {/* Sticky Top Header Bar */}
        <div className="sticky -top-6 sm:-top-8 md:-top-10 -mx-6 sm:-mx-8 md:-mx-10 px-6 sm:px-8 md:px-10 py-4 bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl flex items-center justify-between z-20 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <IconComponent size={24} />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                {service.categoryLabel}
              </span>
              <h2 className="text-lg sm:text-xl font-black text-white">{service.title}</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Hero & About Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <Sparkles size={13} /> Detailed Overview
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">{service.tagline}</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">{service.desc}</p>
            <p className="text-slate-400 text-xs leading-relaxed">{service.overview}</p>
          </div>

          <div className="glass-strong rounded-2xl p-6 border border-slate-800 bg-slate-900/60 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider block mb-2">Starting Pricing</span>
              <div className="text-3xl font-black text-cyan-300 mb-1">{service.pricingTiers.starter.price}</div>
              <p className="text-xs text-slate-400 mb-4">{service.pricingTiers.starter.description}</p>
            </div>
            <a
              href="#modal-pricing"
              className="btn-neon w-full py-3 rounded-xl text-xs font-bold text-center block shadow-md"
            >
              View Packages & Tiers <ArrowRight size={14} className="inline ml-1" />
            </a>
          </div>
        </div>

        {/* Strategic Benefits Grid */}
        <div className="mb-10">
          <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">
            Key Strategic Benefits
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.benefits.map((b) => (
              <div key={b.title} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                {b.metric && (
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 inline-block mb-2">
                    {b.metric}
                  </span>
                )}
                <h5 className="text-sm font-bold text-white mb-1">{b.title}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities & Tech Stack */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Capabilities */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={18} className="text-cyan-400" />
              <h4 className="text-sm font-black text-white">Included Capabilities</h4>
            </div>
            <div className="space-y-2">
              {service.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <Cpu size={18} className="text-purple-400" />
              <h4 className="text-sm font-black text-white">Technical Architecture</h4>
            </div>
            <div className="space-y-2">
              {service.architecturePoints.map((pt) => (
                <div key={pt} className="flex items-center gap-2 text-xs text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  <span className="font-mono text-slate-300">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise Use Cases */}
        <div className="mb-10">
          <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">
            Enterprise Use Cases
          </h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.useCases.map((uc) => (
              <div key={uc.title} className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
                <span className="text-[10px] font-mono font-bold text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 inline-block mb-2">
                  {uc.industry}
                </span>
                <h5 className="text-sm font-bold text-white mb-1">{uc.title}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{uc.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3 PRICING PACKAGES                                       */}
        {/* ======================================================== */}
        <div id="modal-pricing" className="mb-12 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-300 text-xs font-mono font-bold uppercase tracking-widest mb-2">
              <Layers size={14} /> Service Pricing Packages
            </div>
            <h3 className="text-2xl font-black text-white">
              Pricing Packages for <span className="text-cyan-400">{service.shortTitle}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Click any package to select it and pre-fill your order proposal form below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter */}
            <div
              onClick={() => setSelectedPackage("Starter")}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                selectedPackage === "Starter"
                  ? "border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.3)] bg-slate-900"
                  : "border-slate-800 hover:border-slate-700 bg-slate-900/40"
              }`}
            >
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider block mb-1">
                  {service.pricingTiers.starter.name}
                </span>
                <div className="text-2xl font-black text-white mb-1">{service.pricingTiers.starter.price}</div>
                <p className="text-xs text-slate-400 mb-4 line-clamp-2">{service.pricingTiers.starter.description}</p>
                <div className="space-y-2 mb-6">
                  {service.pricingTiers.starter.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold text-center block transition-colors cursor-pointer"
              >
                Order Starter
              </button>
            </div>

            {/* Professional */}
            <div
              onClick={() => setSelectedPackage("Professional")}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative scale-[1.02] cursor-pointer ${
                selectedPackage === "Professional"
                  ? "border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.4)] bg-slate-900/95"
                  : "border-cyan-500/50 bg-slate-900/60"
              }`}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-black uppercase font-mono shadow-md flex items-center gap-1">
                <Star size={10} fill="currentColor" /> Most Popular
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1 mt-1">
                  {service.pricingTiers.professional.name}
                </span>
                <div className="text-2xl font-black text-cyan-300 mb-1">{service.pricingTiers.professional.price}</div>
                <p className="text-xs text-slate-400 mb-4 line-clamp-2">{service.pricingTiers.professional.description}</p>
                <div className="space-y-2 mb-6">
                  {service.pricingTiers.professional.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="btn-neon w-full py-3 rounded-xl text-xs font-extrabold text-center block shadow-md cursor-pointer"
              >
                Order Professional
              </button>
            </div>

            {/* Enterprise */}
            <div
              onClick={() => setSelectedPackage("Enterprise")}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                selectedPackage === "Enterprise"
                  ? "border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.3)] bg-slate-900"
                  : "border-amber-500/40 bg-slate-900/40"
              }`}
            >
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                  {service.pricingTiers.enterprise.name}
                </span>
                <div className="text-2xl font-black text-amber-300 mb-1">{service.pricingTiers.enterprise.price}</div>
                <p className="text-xs text-slate-400 mb-4 line-clamp-2">{service.pricingTiers.enterprise.description}</p>
                <div className="space-y-2 mb-6">
                  {service.pricingTiers.enterprise.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 size={13} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold text-center block transition-colors cursor-pointer"
              >
                Order Enterprise
              </button>
            </div>
          </div>
        </div>

        {/* Order Proposal Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-cyan-500/40 mb-8">
          <div className="text-center mb-6">
            <h4 className="text-xl font-black text-white">Order {service.shortTitle} ({selectedPackage} Package)</h4>
            <p className="text-xs text-slate-400 mt-1">Fill out your details for a formal proposal within 24 hours.</p>
          </div>

          {sent ? (
            <div className="text-center py-6">
              <CheckCircle2 size={40} className="text-cyan-400 mx-auto mb-2" />
              <h5 className="text-lg font-bold text-white mb-1">Proposal Request Sent</h5>
              <p className="text-xs text-slate-300">We will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/50 flex items-center justify-between text-xs font-mono">
                <span className="text-blue-200">Selected Package:</span>
                <span className="font-bold text-cyan-300 text-sm">{selectedPackage} Package</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Full Name *"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Email Address *"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Phone / WhatsApp *"
                />
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="Starter">Starter Package ({service.pricingTiers.starter.price})</option>
                  <option value="Professional">Professional Package ({service.pricingTiers.professional.price})</option>
                  <option value="Enterprise">Enterprise Package ({service.pricingTiers.enterprise.price})</option>
                </select>
              </div>

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
                className="btn-neon w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : `Submit Order Request (${selectedPackage} Package)`} <Send size={14} />
              </button>
            </form>
          )}
        </div>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">
              Frequently Asked Questions
            </h4>
            <div className="space-y-2">
              {service.faqs.map((faq, idx) => (
                <div key={faq.q} className="rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-white hover:text-cyan-300 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 transition-transform ${openFaq === idx ? "rotate-180 text-cyan-400" : "text-slate-400"}`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-300 border-t border-slate-800/60 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
