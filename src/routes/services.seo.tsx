import { createFileRoute, Link } from "@tanstack/react-router";
import { servicesList } from "@/lib/servicesData";
import {
  TrendingUp,
  Search,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Lightbulb,
} from "lucide-react";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "SEO Services, AEO/GEO & Growth — Erha Technologies" },
      {
        name: "description",
        content:
          "Organic search growth, Answer Engine Optimization (AEO/GEO) for ChatGPT and Perplexity, Google Ads, paid social, and conversion rate optimization.",
      },
      { property: "og:title", content: "SEO Services, AEO/GEO & Growth — Erha Technologies" },
      {
        property: "og:description",
        content: "Dominate Google search and next-gen AI search engines with technical SEO & PPC.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/services/seo" },
    ],
  }),
  component: SEOServicesPage,
});

function SEOServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const seoServices = useMemo(() => {
    return servicesList.filter(
      (s) =>
        s.category === "seo" &&
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
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ChevronLeft size={14} /> Back to All Services
        </Link>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <TrendingUp size={14} /> Dedicated Organic & Paid Growth
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
          SEO Services & <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.4)]">Digital Search Growth</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed mb-8">
          Dominate Google search rankings and next-gen AI search engines (ChatGPT, Perplexity, Google SGE) with technical SEO, PPC management, and full-funnel conversion rate optimization.
        </p>

        {/* Live Search */}
        <div className="relative max-w-xl mx-auto">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search SEO & growth services by keyword..."
            className="w-full pl-11 pr-4 py-3.5 bg-slate-900/90 border border-slate-700 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 shadow-xl"
          />
        </div>
      </div>

      {/* SEO Services Grid */}
      {seoServices.length === 0 ? (
        <div className="glass-strong rounded-3xl p-12 text-center border border-slate-800 max-w-md mx-auto">
          <Lightbulb size={36} className="text-emerald-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-2">No SEO Services Found</h3>
          <p className="text-xs text-slate-400 mb-6">Try clearing your search query.</p>
          <button
            onClick={() => setSearchQuery("")}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {seoServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="glass-strong rounded-3xl p-6 flex flex-col justify-between border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400 group-hover:scale-110 transition-transform">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      Search Growth
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5 line-clamp-3">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Budget Starting Badge */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs flex items-center justify-between mb-6">
                    <span className="font-mono text-slate-400">Starting Retainer:</span>
                    <span className="font-extrabold text-emerald-300">{service.pricingTiers.starter.price}</span>
                  </div>
                </div>

                <Link
                  to="/services/$serviceId"
                  params={{ serviceId: service.id }}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black text-center flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  Explore Service & Retainers <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
