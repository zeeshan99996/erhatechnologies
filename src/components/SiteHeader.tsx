import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ArrowRight, ChevronDown,
  Bot, MessageSquare, Workflow, Sparkles,
  BarChart2, ScanSearch, Mic, Lightbulb,
  Globe, Smartphone, Search, TrendingUp,
  ShoppingCart, Layers, Server, Cloud, Layout, RefreshCw,
} from "lucide-react";
import erhaLogo from "@/assets/erha-logo-new.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;


const serviceMenu = [
  {
    category: "AI Services",
    accent: "text-cyan-400",
    items: [
      { icon: Bot, label: "AI Agents & Agentic Systems" },
      { icon: MessageSquare, label: "AI Chatbots & Virtual Assistants" },
      { icon: Workflow, label: "AI Integration & Workflow Automation" },
      { icon: Sparkles, label: "Generative AI, Custom LLMs & RAG" },
      { icon: BarChart2, label: "Machine Learning & Predictive AI" },
      { icon: ScanSearch, label: "Computer Vision & Document AI" },
      { icon: Mic, label: "Voice AI Agents & Speech Automation" },
      { icon: Lightbulb, label: "AI Strategy & Transformation Consulting" },
    ],
  },
  {
    category: "Development Services",
    accent: "text-indigo-400",
    items: [
      { icon: Globe, label: "Web Development & Enterprise Applications" },
      { icon: Smartphone, label: "Mobile & Cross-Platform App Development" },
      { icon: ShoppingCart, label: "E-commerce Development & Commerce Solutions" },
      { icon: Layers, label: "Custom SaaS & Product Development" },
      { icon: Server, label: "Backend, API & System Integration" },
      { icon: Cloud, label: "Cloud, DevOps & Infrastructure Engineering" },
      { icon: Layout, label: "UI/UX Design & Product Experience" },
      { icon: RefreshCw, label: "Software Modernization & Support" },
    ],
  },
  {
    category: "Search & Growth",
    accent: "text-emerald-400",
    items: [
      { icon: Search, label: "SEO & Organic Search Growth" },
      { icon: TrendingUp, label: "AEO, GEO & AI Search Optimization" },
    ],
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const isServicesActive = location.pathname === "/services";

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
            {links.map((l) =>
              l.label === "Services" ? (
                /* Services Dropdown Trigger */
                <div key={l.to} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    onMouseEnter={() => setServicesOpen(true)}
                    className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all inline-flex items-center gap-1 cursor-pointer ${
                      isServicesActive
                        ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    {l.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Mega Dropdown */}
                  {servicesOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] max-w-[90vw] glass-strong border border-slate-700/80 rounded-2xl p-5 shadow-2xl z-[80] animate-fade-in"
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div className="grid grid-cols-3 gap-5">
                        {serviceMenu.map((group) => (
                          <div key={group.category}>
                            <div className={`text-[10px] font-bold uppercase tracking-widest font-mono mb-3 ${group.accent}`}>
                              {group.category}
                            </div>
                            <ul className="space-y-1">
                              {group.items.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    to="/services"
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 text-xs font-medium transition-all group/item"
                                  >
                                    <item.icon size={13} className={`shrink-0 opacity-60 group-hover/item:opacity-100 ${group.accent}`} />
                                    <span className="leading-tight">{item.label}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Bottom CTA Row */}
                      <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-500">
                          18 services across 3 capability areas
                        </span>
                        <Link
                          to="/services"
                          onClick={() => setServicesOpen(false)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          View All Services <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
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
            {links.map((l) =>
              l.label === "Services" ? (
                <div key={l.to}>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className={`w-full text-left px-4 py-3 text-base font-semibold rounded-xl transition-colors inline-flex items-center justify-between ${
                      isServicesActive
                        ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/30"
                        : "text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60"
                    }`}
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="mt-1 mb-2 ml-2 border-l-2 border-slate-800 pl-4 space-y-4">
                      {serviceMenu.map((group) => (
                        <div key={group.category}>
                          <div className={`text-[10px] font-bold uppercase tracking-widest font-mono mb-2 ${group.accent}`}>
                            {group.category}
                          </div>
                          <div className="space-y-1">
                            {group.items.map((item) => (
                              <Link
                                key={item.label}
                                to="/services"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-400 hover:text-white text-xs font-medium transition-all"
                              >
                                <item.icon size={12} className={`shrink-0 ${group.accent}`} />
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}

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
