import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { servicesList } from "@/lib/servicesData";
import {
  Bot,
  Code,
  TrendingUp,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Globe,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";

const servicesSearchSchema = z.object({
  cat: z.string().optional(),
  category: z.string().optional(),
});

export const Route = createFileRoute("/services")({
  validateSearch: (search) => servicesSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Services Hub — Erha Technologies Enterprise AI, Software & SEO" },
      {
        name: "description",
        content:
          "Explore dedicated category pages for AI Services, Web & Mobile Development, and SEO Growth with 24+ specialized services and transparent budget pricing.",
      },
      { property: "og:title", content: "Services Hub — Erha Technologies" },
      { property: "og:description", content: "24+ Enterprise AI, Software, and SEO growth services." },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/services" }
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.id });

  const getValidCat = (param?: string): "ai" | "dev" | "seo" => {
    const clean = (param || "").toLowerCase();
    if (clean === "seo" || clean === "growth") return "seo";
    if (clean === "dev") return "dev";
    return "ai";
  };

  const initialCat = getValidCat(search.cat || search.category);
  const [activeTab, setActiveTab] = useState<"ai" | "dev" | "seo">(initialCat);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const cat = getValidCat(search.cat || search.category);
    setActiveTab(cat);
  }, [search.cat, search.category]);

  const handleTabChange = (tab: "ai" | "dev" | "seo") => {
    setActiveTab(tab);
    navigate({
      search: (prev) => ({ ...prev, cat: tab }),
      replace: true,
    });
  };

  const filteredServices = useMemo(() => {
    return servicesList.filter((s) => {
      const matchesTab = s.category === activeTab;
      const matchesSearch =
        searchQuery.trim() === "" ||
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="px-4 sm:px-6 py-16 md:py-24 max-w-7xl mx-auto animate-fade-up">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Sparkles size={14} className="animate-spin-slow" />
          Dedicated Service Portals & Catalog
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
          Full-Spectrum <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Services & Solutions</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Explore our dedicated category hubs for AI, Software Development, and SEO & Growth services—each equipped with detailed benefits, technical architecture, and transparent budget pricing.
        </p>



        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 p-2 bg-slate-900/90 rounded-2xl border border-slate-800 backdrop-blur-xl max-w-3xl mx-auto mb-6">
          <button
            onClick={() => handleTabChange("ai")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "ai"
                ? "bg-cyan-500 text-slate-950 font-black shadow-lg"
                : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800"
            }`}
          >
            <Bot size={16} /> AI Services (8)
          </button>
          <button
            onClick={() => handleTabChange("dev")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "dev"
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:text-indigo-300 hover:bg-slate-800"
            }`}
          >
            <Code size={16} /> Development (8)
          </button>
          <button
            onClick={() => handleTabChange("seo")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "seo"
                ? "bg-emerald-500 text-slate-950 font-black shadow-lg"
                : "text-slate-300 hover:text-emerald-300 hover:bg-slate-800"
            }`}
          >
            <TrendingUp size={16} /> SEO & Growth (8)
          </button>
        </div>

        {/* Live Search Input */}
        <div className="relative max-w-xl mx-auto">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all 24 services..."
            className="w-full pl-11 pr-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Services Cards Grid */}
      {filteredServices.length === 0 ? (
        <div className="glass-strong rounded-3xl p-12 text-center border border-slate-800 max-w-md mx-auto">
          <Lightbulb size={36} className="text-cyan-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-2">No Matching Services</h3>
          <p className="text-xs text-slate-400 mb-6">Try clearing your search query or switching categories.</p>
          <button
            onClick={() => {
              setActiveTab("all");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredServices.map((service) => {
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
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      {service.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
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

                  {/* Price Starting Badge */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs flex items-center justify-between mb-6">
                    <span className="font-mono text-slate-400">Starting at:</span>
                    <span className="font-extrabold text-cyan-300">{service.pricingTiers.starter.price}</span>
                  </div>
                </div>

                <a
                  href={`/services/${service.id}`}
                  className="btn-neon w-full py-3 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  View Service & Budget Tiers <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
