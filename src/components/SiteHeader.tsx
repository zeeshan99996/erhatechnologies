import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ArrowRight, ChevronDown,
  Bot, MessageSquare, Workflow, Sparkles,
  BarChart2, ScanSearch, Mic, Lightbulb,
  Globe, Smartphone, Search, TrendingUp,
  ShoppingCart, Layers, Server, Cloud, Layout, RefreshCw,
  Target, Megaphone, Users, FileText, Mail,
} from "lucide-react";
import erhaLogo from "@/assets/erha-logo-new.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

const serviceMenu = [
  {
    id: "ai",
    category: "AI Services",
    icon: Bot,
    tagline: "8 Capabilities",
    description: "Autonomous AI agents, custom LLMs, RAG, voice AI & predictive machine learning",
    accent: "text-[#00B8DB]",
    borderHover: "hover:border-[#00B8DB]/60 hover:shadow-[0_0_25px_rgba(0,184,219,0.3)]",
    bgHover: "hover:bg-[#00B8DB]/10",
    badgeBg: "bg-[#00B8DB]/10 text-cyan-300 border-[#00B8DB]/30",
    iconBg: "bg-[#00B8DB]/15 border-[#00B8DB]/30 text-[#00B8DB]",
  },
  {
    id: "dev",
    category: "Development",
    icon: Globe,
    tagline: "8 Capabilities",
    description: "Custom web apps, cross-platform mobile, SaaS platforms & cloud engineering",
    accent: "text-[#00B8DB]",
    borderHover: "hover:border-[#00B8DB]/60 hover:shadow-[0_0_25px_rgba(0,184,219,0.3)]",
    bgHover: "hover:bg-[#00B8DB]/10",
    badgeBg: "bg-[#00B8DB]/10 text-cyan-300 border-[#00B8DB]/30",
    iconBg: "bg-[#00B8DB]/15 border-[#00B8DB]/30 text-[#00B8DB]",
  },
  {
    id: "seo",
    category: "SEO Services",
    icon: TrendingUp,
    tagline: "8 Capabilities",
    description: "Technical SEO, AI search optimization (AEO/GEO), Google Ads & paid social growth",
    accent: "text-[#00B8DB]",
    borderHover: "hover:border-[#00B8DB]/60 hover:shadow-[0_0_25px_rgba(0,184,219,0.3)]",
    bgHover: "hover:bg-[#00B8DB]/10",
    badgeBg: "bg-[#00B8DB]/10 text-cyan-300 border-[#00B8DB]/30",
    iconBg: "bg-[#00B8DB]/15 border-[#00B8DB]/30 text-[#00B8DB]",
  },
];

const pricingMenu = [
  {
    id: "ai",
    category: "AI Pricing",
    icon: Bot,
    tagline: "Basic, Pro & Enterprise",
    description: "Pricing for autonomous AI agents, fine-tuned LLMs & vector RAG search",
    accent: "text-[#00B8DB]",
    borderHover: "hover:border-[#00B8DB]/60 hover:shadow-[0_0_25px_rgba(0,184,219,0.3)]",
    bgHover: "hover:bg-[#00B8DB]/10",
    badgeBg: "bg-[#00B8DB]/10 text-cyan-300 border-[#00B8DB]/30",
    iconBg: "bg-[#00B8DB]/15 border-[#00B8DB]/30 text-[#00B8DB]",
  },
  {
    id: "dev",
    category: "Dev Pricing",
    icon: Globe,
    tagline: "Basic, Pro & Enterprise",
    description: "Pricing for custom web apps, mobile apps, SaaS platforms & cloud DevOps",
    accent: "text-[#00B8DB]",
    borderHover: "hover:border-[#00B8DB]/60 hover:shadow-[0_0_25px_rgba(0,184,219,0.3)]",
    bgHover: "hover:bg-[#00B8DB]/10",
    badgeBg: "bg-[#00B8DB]/10 text-cyan-300 border-[#00B8DB]/30",
    iconBg: "bg-[#00B8DB]/15 border-[#00B8DB]/30 text-[#00B8DB]",
  },
  {
    id: "growth",
    category: "SEO Pricing",
    icon: TrendingUp,
    tagline: "Basic, Pro & Enterprise",
    description: "Pricing for technical SEO, AI search AEO/GEO, Google Ads & paid social growth",
    accent: "text-[#00B8DB]",
    borderHover: "hover:border-[#00B8DB]/60 hover:shadow-[0_0_25px_rgba(0,184,219,0.3)]",
    bgHover: "hover:bg-[#00B8DB]/10",
    badgeBg: "bg-[#00B8DB]/10 text-cyan-300 border-[#00B8DB]/30",
    iconBg: "bg-[#00B8DB]/15 border-[#00B8DB]/30 text-[#00B8DB]",
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePricingOpen, setMobilePricingOpen] = useState(false);
  
  const location = useLocation();
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const pricingDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (pricingDropdownRef.current && !pricingDropdownRef.current.contains(e.target as Node)) {
        setPricingOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setPricingOpen(false);
    setMobileServicesOpen(false);
    setMobilePricingOpen(false);
  }, [location.pathname]);

  const isServicesActive = location.pathname.startsWith("/services");
  const isPricingActive = location.pathname.startsWith("/pricing");

  return (
    <>
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/75 py-3.5"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="https://www.erhatechnologies.com/" className="flex items-center gap-2 group shrink-0 mt-1 sm:mt-1.5">
            <img
              src={erhaLogo}
              alt="Erha Technologies"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((l) => {
              if (l.label === "Services") {
                return (
                  /* Services Dropdown Trigger */
                  <div key={l.to} className="relative" ref={servicesDropdownRef}>
                    <button
                      onClick={() => {
                        setServicesOpen((v) => !v);
                        setPricingOpen(false);
                      }}
                      onMouseEnter={() => {
                        setServicesOpen(true);
                        setPricingOpen(false);
                      }}
                      className={`px-4 py-2 text-base font-extrabold rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-md ${
                        isServicesActive || servicesOpen
                          ? "text-cyan-300 bg-cyan-500/20 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-105"
                          : "text-slate-100 hover:text-cyan-300 hover:bg-slate-800/80 border border-slate-800/60 font-extrabold"
                      }`}
                    >
                      Services
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${servicesOpen ? "rotate-180 text-cyan-400" : "text-slate-400"}`}
                      />
                    </button>

                    {/* Main Services Category Dropdown */}
                    {servicesOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-[30%] mt-2.5 w-[600px] max-w-[92vw] bg-slate-950/95 border border-slate-800/90 rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-[80] animate-fade-in backdrop-blur-2xl"
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <div className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-cyan-400 mb-2 px-1 flex items-center gap-1.5">
                          <Sparkles size={12} /> Select Service Category:
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                          {serviceMenu.map((group) => {
                            return (
                              <Link
                                key={group.id}
                                to="/services"
                                search={{ cat: group.id }}
                                onClick={() => setServicesOpen(false)}
                                className={`group flex items-center justify-between p-3 rounded-xl border border-slate-800/90 bg-slate-900/90 ${group.bgHover} ${group.borderHover} transition-all duration-200 cursor-pointer`}
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${group.iconBg} group-hover:scale-110 transition-transform shrink-0`}>
                                    <group.icon size={16} />
                                  </div>
                                  <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-wide font-mono whitespace-nowrap text-white group-hover:text-[#00B8DB] transition-colors">
                                    {group.category}
                                  </h3>
                                </div>
                                <ArrowRight size={14} className={`${group.accent} group-hover:translate-x-1 transition-transform shrink-0 ml-1`} />
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                          <span>Looking for main hub?</span>
                          <Link
                            to="/services"
                            onClick={() => setServicesOpen(false)}
                            className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1 text-[11px]"
                          >
                            View Services Hub <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (l.label === "Pricing") {
                return (
                  /* Pricing Dropdown Trigger */
                  <div key={l.to} className="relative" ref={pricingDropdownRef}>
                    <button
                      onClick={() => {
                        setPricingOpen((v) => !v);
                        setServicesOpen(false);
                      }}
                      onMouseEnter={() => {
                        setPricingOpen(true);
                        setServicesOpen(false);
                      }}
                      className={`px-4 py-2 text-base font-extrabold rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-md ${
                        isPricingActive || pricingOpen
                          ? "text-cyan-300 bg-cyan-500/20 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-105"
                          : "text-slate-100 hover:text-cyan-300 hover:bg-slate-800/80 border border-slate-800/60 font-extrabold"
                      }`}
                    >
                      Pricing
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${pricingOpen ? "rotate-180 text-cyan-400" : "text-slate-400"}`}
                      />
                    </button>

                    {/* Main Pricing Category Dropdown */}
                    {pricingOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-[40%] mt-2.5 w-[600px] max-w-[92vw] bg-slate-950/95 border border-slate-800/90 rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-[80] animate-fade-in backdrop-blur-2xl"
                        onMouseLeave={() => setPricingOpen(false)}
                      >
                        <div className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-cyan-400 mb-2 px-1 flex items-center gap-1.5">
                          <Sparkles size={12} /> Select Pricing Category:
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                          {pricingMenu.map((group) => {
                            return (
                              <Link
                                key={group.id}
                                to="/pricing"
                                search={{ cat: group.id }}
                                onClick={() => setPricingOpen(false)}
                                className={`group flex items-center justify-between p-3 rounded-xl border border-slate-800/90 bg-slate-900/90 ${group.bgHover} ${group.borderHover} transition-all duration-200 cursor-pointer`}
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${group.iconBg} group-hover:scale-110 transition-transform shrink-0`}>
                                    <group.icon size={16} />
                                  </div>
                                  <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-wide font-mono whitespace-nowrap text-white group-hover:text-[#00B8DB] transition-colors">
                                    {group.category}
                                  </h3>
                                </div>
                                <ArrowRight size={14} className={`${group.accent} group-hover:translate-x-1 transition-transform shrink-0 ml-1`} />
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                          <span>Want all packages?</span>
                          <Link
                            to="/pricing"
                            onClick={() => setPricingOpen(false)}
                            className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1 text-[11px]"
                          >
                            View Pricing Hub <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
                  activeProps={{
                    className:
                      "px-3.5 py-2 text-sm font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-lg",
                  }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-neon text-sm font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-1.5"
            >
              Get Started <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[100] animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          {/* Drawer Panel */}
          <nav className="absolute top-16 left-3 right-3 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col gap-1 max-h-[85vh] overflow-y-auto">
            {links.map((l) => {
              if (l.label === "Services") {
                return (
                  <div key={l.to}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className={`w-full text-left px-4 py-3 text-base font-semibold rounded-xl transition-colors inline-flex items-center justify-between ${
                        isServicesActive
                          ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/30"
                          : "text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60"
                      }`}
                    >
                      Services Categories
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="mt-2 mb-2 ml-2 border-l-2 border-slate-800 pl-3 space-y-2">
                        {serviceMenu.map((group) => (
                          <Link
                            key={group.id}
                            to="/services"
                            search={{ cat: group.id }}
                            onClick={() => setOpen(false)}
                            className={`flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 ${group.accent} text-xs font-bold font-mono hover:border-slate-700 transition-all`}
                          >
                            <span className="flex items-center gap-2 text-sm font-extrabold">
                              <group.icon size={16} />
                              {group.category}
                            </span>
                            <ArrowRight size={14} />
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs font-bold transition-all"
                        >
                          <span>✨ View Services Hub</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (l.label === "Pricing") {
                return (
                  <div key={l.to}>
                    <button
                      onClick={() => setMobilePricingOpen((v) => !v)}
                      className={`w-full text-left px-4 py-3 text-base font-semibold rounded-xl transition-colors inline-flex items-center justify-between ${
                        isPricingActive
                          ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/30"
                          : "text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60"
                      }`}
                    >
                      Pricing Categories
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobilePricingOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobilePricingOpen && (
                      <div className="mt-2 mb-2 ml-2 border-l-2 border-slate-800 pl-3 space-y-2">
                        {pricingMenu.map((group) => (
                          <Link
                            key={group.id}
                            to="/pricing"
                            search={{ cat: group.id }}
                            onClick={() => setOpen(false)}
                            className={`flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 ${group.accent} text-xs font-bold font-mono hover:border-slate-700 transition-all`}
                          >
                            <span className="flex items-center gap-2 text-sm font-extrabold">
                              <group.icon size={16} />
                              {group.category}
                            </span>
                            <ArrowRight size={14} />
                          </Link>
                        ))}
                        <Link
                          to="/pricing"
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs font-bold transition-all"
                        >
                          <span>✨ View Pricing Hub</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="w-full text-left px-4 py-3 text-base font-semibold text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 rounded-xl transition-colors"
                  activeProps={{
                    className: "w-full text-left px-4 py-3 text-base font-bold text-cyan-400 bg-cyan-500/10 rounded-xl border border-cyan-500/30",
                  }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              );
            })}

            <div className="pt-2 border-t border-slate-800 mt-1">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="w-full text-center btn-neon font-bold py-3 rounded-xl shadow-md transition-all block"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
