import { createFileRoute, Link } from "@tanstack/react-router";
import { servicesList } from "@/lib/servicesData";
import {
  Bot,
  Code,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Search,
  Lightbulb,
} from "lucide-react";
import { useState, useMemo } from "react";
import { ServiceModal } from "@/components/ServiceModal";

export const Route = createFileRoute("/services/ai")({
  head: () => ({
    meta: [
      { title: "AI Services & Autonomous Systems — Erha Technologies" },
      {
        name: "description",
        content:
          "Autonomous AI agents, custom LLM fine-tuning, RAG data pipelines, voice AI, and predictive machine learning models built for enterprise operations.",
      },
      { property: "og:title", content: "AI Services & Autonomous Systems — Erha Technologies" },
      {
        property: "og:description",
        content: "Autonomous multi-agent swarms, RAG pipelines, and generative AI.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/services/ai" },
    ],
  }),
  component: AIServicesPage,
});

function AIServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const aiServices = useMemo(() => {
    return servicesList.filter(
      (s) =>
        s.category === "ai" &&
        (searchQuery.trim() === "" ||
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())))
    );
  }, [searchQuery]);

  return (
    <div className="px-4 sm:px-6 py-16 md:py-24 max-w-7xl mx-auto animate-fade-up">
      {/* Navigation Breadcrumb */}
      <div className="mb-6">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronLeft size={14} /> Back to All Services
        </Link>
      </div>

      {/* Top Category Navigation Sub-Menu Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 p-2 bg-slate-900/90 rounded-2xl border border-slate-800 backdrop-blur-xl max-w-3xl mx-auto mb-10 shadow-xl">
        <Link
          to="/services/ai"
          className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-500 text-slate-950 font-black shadow-lg flex items-center gap-1.5"
        >
          <Bot size={16} /> AI Services (8)
        </Link>
        <Link
          to="/services/development"
          className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-300 hover:text-indigo-300 hover:bg-slate-800 transition-all flex items-center gap-1.5"
        >
          <Code size={16} /> Development (8)
        </Link>
        <Link
          to="/services/seo"
          className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-300 hover:text-emerald-300 hover:bg-slate-800 transition-all flex items-center gap-1.5"
        >
          <TrendingUp size={16} /> SEO & Growth (8)
        </Link>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Bot size={14} /> Dedicated AI Capabilities Page
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
          AI Services & <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">Autonomous Systems</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Explore all 8 dedicated AI services—from autonomous agent swarms and custom LLM fine-tuning to voice AI agents and predictive machine learning models built for enterprise scale.
        </p>

        {/* Live Search */}
        <div className="relative max-w-xl mx-auto">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search AI services by keyword..."
            className="w-full pl-11 pr-4 py-3.5 bg-slate-900/90 border border-slate-700 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 shadow-xl"
          />
        </div>
      </div>

      {/* AI Services Grid */}
      {aiServices.length === 0 ? (
        <div className="glass-strong rounded-3xl p-12 text-center border border-slate-800 max-w-md mx-auto">
          <Lightbulb size={36} className="text-cyan-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-2">No AI Services Found</h3>
          <p className="text-xs text-slate-400 mb-6">Try clearing your search query.</p>
          <button
            onClick={() => setSearchQuery("")}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {aiServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="glass-strong rounded-3xl p-6 flex flex-col justify-between border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      AI Capability
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5 line-clamp-3">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Budget Starting Badge */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs flex items-center justify-between mb-6">
                    <span className="font-mono text-slate-400">Starting Budget:</span>
                    <span className="font-extrabold text-cyan-300">{service.pricingTiers.starter.price}</span>
                  </div>
                </div>

                <a
                  href="/pricing"
                  className="btn-neon w-full py-3 px-4 rounded-xl text-xs font-extrabold text-center flex items-center justify-center gap-2 shadow-md cursor-pointer uppercase tracking-wider"
                >
                  VIEW PRICING <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
