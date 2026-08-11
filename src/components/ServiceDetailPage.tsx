import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { servicesList, DetailedService } from "@/lib/servicesData";
import {
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  Send,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Zap,
  Cpu,
  Layers,
  Bot,
  Code,
  TrendingUp,
} from "lucide-react";

export function ServiceDetailPage({ serviceId }: { serviceId: string }) {
  const navigate = useNavigate();
  const service = servicesList.find((s) => s.id === serviceId);

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    tier: "Professional",
    message: "",
  });

  if (!service) {
    return (
      <div className="px-4 py-28 max-w-4xl mx-auto text-center animate-fade-up">
        <div className="glass-strong rounded-3xl p-12 border border-slate-800">
          <h1 className="text-3xl font-black text-white mb-4">Service Not Found</h1>
          <p className="text-slate-300 text-sm mb-8">
            The requested service &ldquo;{serviceId}&rdquo; could not be located in our catalog.
          </p>
          <Link
            to="/services"
            className="btn-neon px-6 py-3 rounded-full text-xs font-bold inline-flex items-center gap-2"
          >
            <ChevronLeft size={16} /> View All Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;
  const categoryServices = servicesList.filter((s) => s.category === service.category);
  const relatedServices = categoryServices.filter((s) => s.id !== service.id).slice(0, 3);

  const categoryHubLink =
    service.category === "ai"
      ? "/services/ai"
      : service.category === "dev"
      ? "/services/development"
      : "/services/seo";

  const categoryTitle =
    service.category === "ai"
      ? "AI Services Hub"
      : service.category === "dev"
      ? "Development Services Hub"
      : "SEO & Growth Hub";

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = {
        "Service Name": service.title,
        "Selected Package": form.tier,
        "Full Name": form.name,
        "Email Address": form.email,
        "Phone / WhatsApp": form.phone,
        "Project Scope": form.message || "Not Specified",
        _subject: `Direct Proposal Request: ${service.title} (${form.tier})`,
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
    <div className="px-4 sm:px-6 py-16 md:py-24 max-w-7xl mx-auto animate-fade-up">
      {/* Top Breadcrumb & Category Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          to={categoryHubLink}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronLeft size={14} /> Back to {categoryTitle}
        </Link>
      </div>

      {/* Category Services Switcher Bar */}
      <div className="mb-12 p-2 bg-slate-900/90 rounded-2xl border border-slate-800 backdrop-blur-xl overflow-x-auto flex items-center gap-2 no-scrollbar">
        {categoryServices.map((s) => {
          const isActive = s.id === service.id;
          const ServiceIcon = s.icon;
          return (
            <Link
              key={s.id}
              to={`/services/${s.id}` as any}
              className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-2 ${
                isActive
                  ? "bg-cyan-500 text-slate-950 font-black shadow-lg"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              <ServiceIcon size={14} />
              <span>{s.shortTitle}</span>
            </Link>
          );
        })}
      </div>

      {/* Hero Header Section */}
      <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} /> {service.categoryLabel} — Dedicated Service Page
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-medium">
            {service.heroSubheadline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#proposal-form"
              className="btn-neon py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg"
            >
              Get Custom Proposal <ArrowRight size={16} />
            </a>
            <a
              href="#pricing-section"
              className="px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition-all"
            >
              View Service Pricing Packages
            </a>
          </div>
        </div>

        {/* Hero Service Badge Card */}
        <div className="glass-strong rounded-3xl p-8 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit mb-6">
            <IconComponent size={36} />
          </div>
          <h3 className="text-xl font-black text-white mb-2">{service.tagline}</h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-6">{service.desc}</p>
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400">
            <span>Starting Budget</span>
            <span className="font-bold text-base text-white">{service.pricingTiers.starter.price}</span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* ABOUT & OVERVIEW SECTION                                 */}
      {/* ======================================================== */}
      <div className="glass-strong rounded-3xl p-8 sm:p-10 border border-slate-800 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
            About {service.title}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Transforming Enterprise Operations with {service.shortTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            {service.desc} Designed and deployed by senior engineers at Erha Technologies, our {service.title} solutions give your business a permanent competitive advantage in speed, accuracy, and operational efficiency.
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* KEY STRATEGIC BENEFITS GRID                              */}
      {/* ======================================================== */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2">
            Why Invest In This Service
          </div>
          <h2 className="text-3xl font-extrabold text-white">Key Strategic Benefits</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.benefits.map((b) => (
            <div
              key={b.title}
              className="glass-strong rounded-3xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300"
            >
              {b.metric && (
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 inline-block mb-3">
                  {b.metric}
                </span>
              )}
              <h3 className="text-lg font-black text-white mb-2">{b.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* FEATURES & ARCHITECTURE SHOWCASE                         */}
      {/* ======================================================== */}
      <div className="grid lg:grid-cols-2 gap-8 mb-20">
        {/* Capabilities */}
        <div className="glass-strong rounded-3xl p-8 border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              <Zap size={20} />
            </div>
            <h3 className="text-xl font-black text-white">Key Features & Capabilities</h3>
          </div>
          <div className="space-y-3">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="glass-strong rounded-3xl p-8 border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
              <Cpu size={20} />
            </div>
            <h3 className="text-xl font-black text-white">Technical Architecture Stack</h3>
          </div>
          <div className="space-y-3">
            {service.architecturePoints.map((pt) => (
              <div key={pt} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span className="text-xs font-mono text-slate-300">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* USE CASES SHOWCASE                                       */}
      {/* ======================================================== */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2">
            Real-World Impact
          </div>
          <h2 className="text-3xl font-extrabold text-white">Proven Enterprise Use Cases</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {service.useCases.map((uc) => (
            <div key={uc.title} className="glass-strong rounded-3xl p-8 border border-slate-800">
              <span className="text-xs font-mono font-bold text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 inline-block mb-3">
                {uc.industry}
              </span>
              <h3 className="text-xl font-black text-white mb-2">{uc.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{uc.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* DEDICATED SERVICE PRICING PACKAGES                       */}
      {/* ======================================================== */}
      <div id="pricing-section" className="mb-20 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <Layers size={14} /> Service Pricing Packages
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Pricing & Packages for <span className="text-cyan-400">{service.shortTitle}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Tailored pricing tiers designed for startups, growing companies, and enterprise swarms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Package */}
          <div className="glass-strong rounded-3xl p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider block mb-2">
                {service.pricingTiers.starter.name}
              </span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black text-white">{service.pricingTiers.starter.price}</span>
                {service.pricingTiers.starter.priceNote && (
                  <span className="text-xs text-slate-400 font-mono">/ {service.pricingTiers.starter.priceNote}</span>
                )}
              </div>
              <p className="text-xs text-slate-300 mb-6">{service.pricingTiers.starter.description}</p>
              <div className="space-y-2.5 mb-8">
                {service.pricingTiers.starter.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#proposal-form"
              onClick={() => setForm((prev) => ({ ...prev, tier: "Starter" }))}
              className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold text-center block transition-colors"
            >
              Select Starter Package
            </a>
          </div>

          {/* Professional Package */}
          <div className="glass-strong rounded-3xl p-8 border border-cyan-500/60 shadow-[0_10px_40px_rgba(6,182,212,0.2)] flex flex-col justify-between relative scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-black uppercase font-mono shadow-md">
              Most Popular
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-2">
                {service.pricingTiers.professional.name}
              </span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black text-cyan-300">{service.pricingTiers.professional.price}</span>
                {service.pricingTiers.professional.priceNote && (
                  <span className="text-xs text-slate-400 font-mono">/ {service.pricingTiers.professional.priceNote}</span>
                )}
              </div>
              <p className="text-xs text-slate-300 mb-6">{service.pricingTiers.professional.description}</p>
              <div className="space-y-2.5 mb-8">
                {service.pricingTiers.professional.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#proposal-form"
              onClick={() => setForm((prev) => ({ ...prev, tier: "Professional" }))}
              className="btn-neon w-full py-3.5 px-4 rounded-xl text-xs font-extrabold text-center block shadow-lg"
            >
              Choose Pro Package
            </a>
          </div>

          {/* Enterprise Package */}
          <div className="glass-strong rounded-3xl p-8 border border-amber-500/40 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-2">
                {service.pricingTiers.enterprise.name}
              </span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-black text-amber-300">{service.pricingTiers.enterprise.price}</span>
                {service.pricingTiers.enterprise.priceNote && (
                  <span className="text-xs text-slate-400 font-mono">/ {service.pricingTiers.enterprise.priceNote}</span>
                )}
              </div>
              <p className="text-xs text-slate-300 mb-6">{service.pricingTiers.enterprise.description}</p>
              <div className="space-y-2.5 mb-8">
                {service.pricingTiers.enterprise.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#proposal-form"
              onClick={() => setForm((prev) => ({ ...prev, tier: "Enterprise" }))}
              className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold text-center block transition-colors"
            >
              Request Enterprise Package
            </a>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* DIRECT PROPOSAL FORM                                     */}
      {/* ======================================================== */}
      <div id="proposal-form" className="max-w-3xl mx-auto mb-20 scroll-mt-24">
        <div className="glass-strong rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              Service Proposal
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Request a Proposal for {service.shortTitle}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Our engineering team will review your project scope and respond with a customized proposal within 24 hours.
            </p>
          </div>

          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-400">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Proposal Request Received</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you! We have received your request for <strong>{service.title} ({form.tier} Package)</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-1 block">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-1 block">Selected Package</label>
                  <select
                    value={form.tier}
                    onChange={(e) => setForm({ ...form, tier: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Starter">Starter Package ({service.pricingTiers.starter.price})</option>
                    <option value="Professional">Professional Package ({service.pricingTiers.professional.price})</option>
                    <option value="Enterprise">Enterprise Package ({service.pricingTiers.enterprise.price})</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold mb-1 block">Project Scope (Optional)</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none resize-none"
                  placeholder="Share details about your timeline, stack, or custom features needed..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-neon w-full py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Submitting Proposal..." : "Submit Proposal Request"} <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ======================================================== */}
      {/* SERVICE FAQS                                             */}
      {/* ======================================================== */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono font-bold uppercase mb-2">
              <HelpCircle size={14} /> Service FAQs
            </div>
            <h3 className="text-2xl font-black text-white">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <div key={faq.q} className="glass rounded-2xl border border-slate-800 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer text-sm"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${openFaq === idx ? "rotate-180 text-cyan-400" : "text-slate-400"}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* OTHER SERVICES IN CATEGORY                                */}
      {/* ======================================================== */}
      {relatedServices.length > 0 && (
        <div className="pt-12 border-t border-slate-800">
          <h3 className="text-xl font-black text-white mb-6">Explore Other {service.categoryLabel}</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedServices.map((rel) => {
              const RelIcon = rel.icon;
              return (
                <Link
                  key={rel.id}
                  to={`/services/${rel.id}` as any}
                  className="glass-strong rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/40 transition-all group block"
                >
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 w-fit mb-3 group-hover:bg-cyan-500/10">
                    <RelIcon size={18} />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {rel.shortTitle}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{rel.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
