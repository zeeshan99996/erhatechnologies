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
    description: "Autonomous AI agents, custom LLMs, RAG & computer vision",
    accent: "text-cyan-400",
    bgHover: "hover:bg-cyan-500/10 hover:border-cyan-500/30",
    items: [
      { icon: Bot, label: "AI Agents & Agentic Systems" },
      { icon: MessageSquare, label: "AI Chatbots & Virtual Assistants" },
      { icon: Workflow, label: "AI Integration & Workflow Automation" },
      { icon: Sparkles, label: "Generative AI, Custom LLMs & RAG" },
      { icon: BarChart2, label: "Machine Learning & Predictive AI" },
      { icon: ScanSearch, label: "Computer Vision & Document AI" },
      { icon: Mic, label: "Voice AI Agents & Speech Automation" },
      { icon: Lightbulb, label: "AI Strategy & Consulting" },
    ],
  },
  {
    id: "dev",
    category: "Development Services",
    icon: Globe,
    description: "Custom web apps, mobile apps, SaaS & cloud engineering",
    accent: "text-indigo-400",
    bgHover: "hover:bg-indigo-500/10 hover:border-indigo-500/30",
    items: [
      { icon: Globe, label: "Web Development & Enterprise Apps" },
      { icon: Smartphone, label: "Mobile & Cross-Platform Apps" },
      { icon: ShoppingCart, label: "E-commerce & Commerce Solutions" },
      { icon: Layers, label: "Custom SaaS & Product Engineering" },
      { icon: Server, label: "Backend, API & System Integration" },
      { icon: Cloud, label: "Cloud, DevOps & Infrastructure" },
      { icon: Layout, label: "UI/UX Design & Experience" },
      { icon: RefreshCw, label: "Software Modernization & Support" },
    ],
  },
  {
    id: "growth",
    category: "Search & Growth Services",
    icon: TrendingUp,
    description: "SEO, AEO/GEO, paid ads & conversion rate growth",
    accent: "text-emerald-400",
    bgHover: "hover:bg-emerald-500/10 hover:border-emerald-500/30",
    items: [
      { icon: Search, label: "SEO & Organic Search Growth" },
      { icon: TrendingUp, label: "AEO, GEO & AI Search Optimization" },
      { icon: Target, label: "Google Ads & PPC Management" },
      { icon: Megaphone, label: "Meta Ads & Paid Social Campaigns" },
      { icon: Users, label: "Social Media Marketing & Brand Growth" },
      { icon: FileText, label: "Content Marketing & Copywriting" },
      { icon: Mail, label: "Email Marketing & CRM Automation" },
      { icon: BarChart2, label: "Conversion Rate Optimization" },
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

                  {/* Mega Dropdown */}
                  {servicesOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] max-w-[92vw] glass-strong border border-slate-700/80 rounded-2xl p-5 shadow-2xl z-[80] animate-fade-in"
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div className="grid grid-cols-3 gap-5">
                        {serviceMenu.map((group) => (
                          <div key={group.category} className="flex flex-col">
                            {/* Primary Category Sub-Menu Header */}
                            <Link
                              to="/services"
                              hash={group.id}
                              onClick={() => setServicesOpen(false)}
                              className={`group/cat flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-800/80 bg-slate-950/70 ${group.bgHover} transition-all mb-3`}
                            >
                              <div className={`w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center ${group.accent} shrink-0 group-hover/cat:scale-110 transition-transform`}>
                                <group.icon size={16} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className={`text-xs font-extrabold uppercase tracking-wider font-mono ${group.accent}`}>
                                    {group.category}
                                  </span>
                                  <ArrowRight size={11} className={`opacity-0 group-hover/cat:opacity-100 transition-opacity ${group.accent}`} />
                                </div>
                                <p className="text-[10px] text-slate-400 truncate leading-tight mt-0.5">
                                  {group.description}
                                </p>
                              </div>
                            </Link>

                            {/* Sub-items List */}
                            <ul className="space-y-1">
                              {group.items.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    to="/services"
                                    hash={group.id}
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/80 text-[11px] font-semibold transition-all group/item"
                                  >
                                    <item.icon size={13} className={`shrink-0 opacity-80 group-hover/item:opacity-100 ${group.accent}`} />
                                    <span className="leading-tight truncate">{item.label}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Bottom CTA Row */}
                      <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-400">
                          Select a category above: <span className="text-cyan-400 font-bold">AI Services</span>, <span className="text-indigo-400 font-bold">Development Services</span>, or <span className="text-emerald-400 font-bold">Search & Growth Services</span>
                        </span>
                        <Link
                          to="/services"
                          onClick={() => setServicesOpen(false)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          View Full Services Catalog <ArrowRight size={12} />
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
                    Services Sub-Menu
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="mt-2 mb-2 ml-2 border-l-2 border-slate-800 pl-3 space-y-4">
                      {serviceMenu.map((group) => (
                        <div key={group.category}>
                          <Link
                            to="/services"
                            hash={group.id}
                            onClick={() => setOpen(false)}
                            className={`flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800 ${group.accent} text-xs font-bold font-mono mb-2`}
                          >
                            <span className="flex items-center gap-2">
                              <group.icon size={14} />
                              {group.category}
                            </span>
                            <ArrowRight size={12} />
                          </Link>
                          <div className="space-y-1 pl-1">
                            {group.items.map((item) => (
                              <Link
                                key={item.label}
                                to="/services"
                                hash={group.id}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-300 hover:text-white text-xs font-semibold transition-all"
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
