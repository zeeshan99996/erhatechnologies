import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import {
  Bot,
  Code,
  Cpu,
  Zap,
  Layers,
  ChevronLeft,
  ArrowRight,
  Send,
  CheckCircle2,
  MessageSquare,
  Workflow,
  Sparkles,
  BarChart2,
  ScanSearch,
  Mic,
  Lightbulb,
  Smartphone,
  Globe,
  TrendingUp,
  Search,
  ShoppingCart,
  Server,
  Cloud,
  Layout,
  RefreshCw,
  Target,
  Megaphone,
  Users,
  FileText,
  Mail,
  MapPin,
  Sparkle,
  Info,
  X as CloseIcon,
  Table as TableIcon,
} from "lucide-react";
import { useState, useEffect } from "react";

const servicesSearchSchema = z.object({
  cat: z.string().optional(),
  category: z.string().optional(),
  sub: z.string().optional(),
});

export const Route = createFileRoute("/services")({
  validateSearch: (search) => servicesSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Services & Pricing Matrix — Erha Technologies Enterprise AI, Software & SEO" },
      {
        name: "description",
        content:
          "Service-wise pricing matrix and comprehensive catalog for AI automation, software engineering, web development, chatbots, and organic search growth.",
      },
      { property: "og:title", content: "Services & Pricing Matrix — Erha Technologies" },
      { property: "og:description", content: "Service-wise pricing matrix with Starter, Professional, and Enterprise tiers." },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/services" }
    ],
  }),
  component: ServicesPage,
});

export interface ServiceMatrixItem {
  id: string;
  service: string;
  category: "ai" | "dev" | "growth";
  categoryLabel: string;
  icon: any;
  starter: string;
  professional: string;
  enterprise: string;
  description: string;
  starterFeatures: string[];
  professionalFeatures: string[];
  enterpriseFeatures: string[];
}

export const serviceMatrixData: ServiceMatrixItem[] = [
  {
    id: "seo-services",
    service: "SEO Services",
    category: "growth",
    categoryLabel: "Search & SEO",
    icon: TrendingUp,
    starter: "$500/mo",
    professional: "$1,200/mo",
    enterprise: "$3,000/mo",
    description: "Organic search optimization, technical SEO fixes, keyword strategy, and backlink authority building.",
    starterFeatures: ["Up to 30 Targeted Keywords", "Technical SEO Audit", "On-Page Optimization", "GA4 & GSC Setup"],
    professionalFeatures: ["Up to 100 Targeted Keywords", "4 SEO Articles / month", "AEO / GEO Optimization", "Competitor Audit"],
    enterpriseFeatures: ["Unlimited Target Keywords", "Generative Engine Dominance", "Digital PR & Authority Ops", "Dedicated SEO Director"],
  },
  {
    id: "ai-automation",
    service: "AI Automation",
    category: "ai",
    categoryLabel: "AI & Autonomous Systems",
    icon: Cpu,
    starter: "$2,000",
    professional: "$5,000",
    enterprise: "$10,000+",
    description: "Automate repetitive workflows, data extraction, document processing, and multi-app orchestration.",
    starterFeatures: ["Up to 3 Automated Workflows", "Zapier / Make Integration", "Standard Webhook Pipeline", "30 Days Support"],
    professionalFeatures: ["Up to 10 Autonomous Pipelines", "Custom Python/Node AI Scripts", "Self-Correction & Fallbacks", "CRM & ERP Sync"],
    enterpriseFeatures: ["Unlimited Complex Workflows", "Dedicated Air-Gapped Host", "Custom Machine Learning", "24/7 SLA Guarantee"],
  },
  {
    id: "saas-development",
    service: "SaaS Development",
    category: "dev",
    categoryLabel: "Software Engineering",
    icon: Layers,
    starter: "$5,000",
    professional: "$15,000",
    enterprise: "$30,000+",
    description: "Custom multi-tenant SaaS application engineering, API architectures, cloud infrastructure, and databases.",
    starterFeatures: ["Core SaaS MVP Architecture", "User Auth & Roles", "Stripe Subscription Billing", "Responsive React UI"],
    professionalFeatures: ["Full Production Multi-Tenant Platform", "Advanced Admin Portal", "Microservices Backend", "Automated CI/CD Pipeline"],
    enterpriseFeatures: ["Distributed Microservices Cluster", "Kubernetes Orchestration & IaC", "Dedicated Engineering Squad", "SOC2/HIPAA Compliance"],
  },
  {
    id: "ai-chatbots",
    service: "AI Chatbots",
    category: "ai",
    categoryLabel: "AI & Autonomous Systems",
    icon: Bot,
    starter: "$1,500",
    professional: "$3,500",
    enterprise: "$8,000+",
    description: "Context-aware conversational AI chatbots powered by GPT-4o, Claude 3.5, or private LLMs.",
    starterFeatures: ["Single-Domain Web Chatbot", "RAG on 500 Knowledge Docs", "Standard LLM Integration", "15,000 Queries/mo"],
    professionalFeatures: ["Multi-Channel (Web, WhatsApp, Slack)", "RAG on Unlimited Documents", "CRM & Helpdesk Sync", "150,000 Queries/mo"],
    enterpriseFeatures: ["Custom Fine-Tuned Model", "On-Premise Private LLM Host", "Voice AI & Multimodal", "Unlimited Queries & 1h SLA"],
  },
  {
    id: "ppc-management",
    service: "PPC Management",
    category: "growth",
    categoryLabel: "Digital Marketing",
    icon: Target,
    starter: "$500/mo",
    professional: "$1,000/mo",
    enterprise: "$2,000+/mo",
    description: "High-ROI Pay-Per-Click advertising campaigns across Google Ads, Bing Ads, Meta, and LinkedIn.",
    starterFeatures: ["Ad Spend up to $3,000/mo", "Google Search Campaign Setup", "Keyword Match Tuning", "Monthly ROI Reports"],
    professionalFeatures: ["Ad Spend up to $15,000/mo", "Omnichannel Search & Social Ads", "A/B Ad Copy Variant Testing", "Landing Page CRO"],
    enterpriseFeatures: ["Unlimited Ad Spend Management", "Full Funnel Programmatic Ads", "Real-Time Attribution Dashboard", "Dedicated PPC Director"],
  },
  {
    id: "social-media",
    service: "Social Media",
    category: "growth",
    categoryLabel: "Digital Marketing",
    icon: Users,
    starter: "$500/mo",
    professional: "$1,000/mo",
    enterprise: "$2,000+/mo",
    description: "Social media strategy, original content creation, short-form reel production, and active community engagement.",
    starterFeatures: ["12 Custom Designed Posts/mo", "2 Platforms (FB & IG)", "Content Copywriting", "Monthly Growth Report"],
    professionalFeatures: ["24 Posts + 4 Short Videos/mo", "4 Platforms (FB, IG, LinkedIn, X)", "Video Scripting & Editing", "Daily Community Management"],
    enterpriseFeatures: ["Daily Posts + 12 High-End Videos/mo", "All Platforms (TikTok, YT, FB, IG)", "Influencer Campaign Lead", "24/7 Brand Reputation Monitoring"],
  },
  {
    id: "web-development",
    service: "Web Development",
    category: "dev",
    categoryLabel: "Software Engineering",
    icon: Globe,
    starter: "$500",
    professional: "$2,000",
    enterprise: "$5,000+",
    description: "High-performance responsive websites, web applications, landing pages, and interactive UI design.",
    starterFeatures: ["Up to 5 Responsive Pages", "Modern React Design", "Contact Form & SEO Setup", "Vercel / Cloudflare Deploy"],
    professionalFeatures: ["Up to 15 Pages / Custom Web App", "Headless CMS Integration", "Micro-Animations & Speed Tuning", "30 Days Post-Launch Support"],
    enterpriseFeatures: ["Bespoke High-Scale Enterprise Portal", "High-Volume E-Commerce Suite", "Custom API & Database Sync", "Dedicated Lead Developer"],
  },
  {
    id: "wordpress-dev",
    service: "WordPress Dev",
    category: "dev",
    categoryLabel: "Software Engineering",
    icon: FileText,
    starter: "$300",
    professional: "$800",
    enterprise: "$2,000+",
    description: "Custom WordPress theme and plugin development, speed optimization, security hardening, and maintenance.",
    starterFeatures: ["Custom Theme Customization", "Up to 5 Responsive Pages", "Elementor / Gutenberg", "Security & Caching Plugins"],
    professionalFeatures: ["Bespoke Custom Theme Build", "WooCommerce Store Setup", "Custom PHP Plugin Tweaks", "90+ PageSpeed Rating"],
    enterpriseFeatures: ["Enterprise Headless WP Architecture", "High-Traffic Redis Server Caching", "Custom ERP Real-Time Sync", "24/7 Monitoring & Backups"],
  },
  {
    id: "email-marketing",
    service: "Email Marketing",
    category: "growth",
    categoryLabel: "Digital Marketing",
    icon: Mail,
    starter: "$300/mo",
    professional: "$700/mo",
    enterprise: "$1,500+/mo",
    description: "Automated email sequences, promotional campaigns, newsletter design, and deliverability optimization.",
    starterFeatures: ["2 Broadcast Emails/mo", "Basic Welcome Drip Sequence", "HTML Email Template Design", "Monthly Open & Click Analytics"],
    professionalFeatures: ["6 Broadcast Emails/mo", "Multi-Branch Drip Automation", "Audience Segmentation & A/B Test", "Klaviyo / HubSpot Ops"],
    enterpriseFeatures: ["Unlimited Broadcasts & Enterprise Flow", "Dedicated IP Warmup & Deliverability", "CRM Lead Scoring & Attribution", "Dedicated Copywriter"],
  },
  {
    id: "whatsapp-software",
    service: "WhatsApp Software",
    category: "ai",
    categoryLabel: "AI & Software",
    icon: Smartphone,
    starter: "$1,000",
    professional: "$2,500",
    enterprise: "$5,000+",
    description: "Custom WhatsApp Business API software, bulk broadcasting, automated reply bots, and CRM sync.",
    starterFeatures: ["Meta WhatsApp API Setup", "Green Tick Verification Prep", "Basic Auto-Responder Bot", "Up to 5,000 Messages/mo"],
    professionalFeatures: ["Multi-Agent Shared Team Inbox", "Drag & Drop Flow Builder", "Bulk Broadcast Scheduler", "CRM Synchronization"],
    enterpriseFeatures: ["Embedded Custom AI Chatbot", "High-Volume Multi-Number Cluster", "Dedicated Server Database Host", "Unlimited Support Accounts"],
  },
  {
    id: "content-marketing",
    service: "Content Marketing",
    category: "growth",
    categoryLabel: "Digital Marketing",
    icon: FileText,
    starter: "$400/mo",
    professional: "$900/mo",
    enterprise: "$2,000+/mo",
    description: "High-quality technical blog articles, whitepapers, case studies, and content distribution for organic reach.",
    starterFeatures: ["2 In-depth SEO Articles/mo", "Topic & Keyword Research", "Custom Featured Graphics", "CMS Formatting & Publishing"],
    professionalFeatures: ["6 SEO & GEO Articles/mo", "Keyword Clustering & Content Hub", "Social Snippet Extractions", "Schema Structured Data"],
    enterpriseFeatures: ["15+ Articles & Whitepapers/mo", "Dedicated Technical Content Editor", "Multi-Language Localization", "PR Media Distribution"],
  },
  {
    id: "local-seo",
    service: "Local SEO",
    category: "growth",
    categoryLabel: "Search & SEO",
    icon: MapPin,
    starter: "$300/mo",
    professional: "$600/mo",
    enterprise: "$1,200+/mo",
    description: "Google Business Profile optimization, local citation building, review management, and local map rankings.",
    starterFeatures: ["Google Business Profile Setup", "25 Local Directory Citations", "Monthly Local Rank Audit", "Review Strategy Guide"],
    professionalFeatures: ["Google Maps 3-Pack Focus", "75 Local Directory Citations", "Geo-Grid Local Rank Tracking", "Automated Review Request Setup"],
    enterpriseFeatures: ["Multi-Location Local SEO (up to 10)", "Hyper-Local Backlink Building", "Dedicated Local Search Lead", "Real-Time Call Attribution"],
  },
];

function ServicesPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.id });

  const getValidCat = (param?: string): "ai" | "dev" | "seo" | "all" => {
    const clean = (param || "").toLowerCase();
    if (clean === "seo" || clean === "growth") return "seo";
    if (clean === "dev") return "dev";
    if (clean === "ai") return "ai";
    if (clean === "all") return "all";
    return "all";
  };

  const initialCat = getValidCat(search.cat || search.category);
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "dev" | "seo">(initialCat);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<ServiceMatrixItem | null>(null);

  useEffect(() => {
    const cat = getValidCat(search.cat || search.category);
    setActiveTab(cat);
  }, [search.cat, search.category]);

  const handleTabChange = (tab: "all" | "ai" | "dev" | "seo") => {
    setActiveTab(tab);
    navigate({
      search: (prev) => ({ ...prev, cat: tab }),
      replace: true,
    });
  };

  const filteredMatrixServices = serviceMatrixData.filter((item) => {
    const matchesCategory =
      activeTab === "all" ||
      (activeTab === "ai" && item.category === "ai") ||
      (activeTab === "dev" && item.category === "dev") ||
      (activeTab === "seo" && item.category === "growth");

    const matchesSearch =
      searchQuery.trim() === "" ||
      item.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="px-4 sm:px-6 py-16 md:py-24 max-w-7xl mx-auto animate-fade-up">
      {/* Header Title */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Sparkles size={14} className="animate-spin-slow" />
          Services & Pricing Matrix
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
          Service-Wise <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-300 bg-clip-text text-transparent">Pricing & Capabilities</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Explore our complete service-wise breakdown with transparent Starter, Professional, and Enterprise tiers for AI solutions, software development, and search growth.
        </p>

        {/* Filter Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 p-3 bg-slate-900/90 rounded-2xl border border-slate-800 backdrop-blur-xl">
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => handleTabChange("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              All Services ({serviceMatrixData.length})
            </button>
            <button
              onClick={() => handleTabChange("ai")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "ai"
                  ? "bg-cyan-500 text-slate-950 font-black shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80"
              }`}
            >
              <Bot size={14} /> AI Services
            </button>
            <button
              onClick={() => handleTabChange("dev")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "dev"
                  ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                  : "text-slate-300 hover:text-indigo-300 hover:bg-slate-800/80"
              }`}
            >
              <Code size={14} /> Development
            </button>
            <button
              onClick={() => handleTabChange("seo")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "seo"
                  ? "bg-amber-500 text-slate-950 font-black shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-300 hover:text-amber-300 hover:bg-slate-800/80"
              }`}
            >
              <TrendingUp size={14} /> SEO & Growth
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <CloseIcon size={12} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SERVICE-WISE PRICING MATRIX TABLE (EXACT MATCH TO IMAGE) */}
      {/* ======================================================== */}
      <div className="mb-16">
        <div className="overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 text-white">
                  <th className="py-4 px-6 text-sm font-extrabold tracking-wide uppercase font-sans border-r border-blue-500/40 w-1/3">
                    <div className="flex items-center gap-2">
                      <Sparkle size={16} className="text-cyan-300" />
                      Service
                    </div>
                  </th>
                  <th className="py-4 px-6 text-sm font-extrabold tracking-wide uppercase font-sans border-r border-blue-500/40 text-left">
                    Starter
                  </th>
                  <th className="py-4 px-6 text-sm font-extrabold tracking-wide uppercase font-sans border-r border-blue-500/40 text-left bg-blue-700/60">
                    <div className="flex items-center justify-between">
                      <span>Professional</span>
                      <span className="text-[10px] font-mono font-bold bg-cyan-400 text-slate-950 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-sm font-extrabold tracking-wide uppercase font-sans text-left bg-blue-800/80">
                    Enterprise
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/60">
                {filteredMatrixServices.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-slate-400">
                      No services found matching "{searchQuery}".
                    </td>
                  </tr>
                ) : (
                  filteredMatrixServices.map((row, idx) => {
                    const IconComponent = row.icon;
                    const isEven = idx % 2 === 0;

                    return (
                      <tr
                        key={row.id}
                        className={`group transition-all duration-200 hover:bg-slate-900/90 ${
                          isEven ? "bg-slate-950/40" : "bg-slate-900/30"
                        }`}
                      >
                        {/* Service Column */}
                        <td className="py-4 px-6 border-r border-slate-800/50">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-colors shrink-0">
                                <IconComponent size={18} />
                              </div>
                              <div>
                                <span className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                                  {row.service}
                                </span>
                                <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                  {row.description}
                                </p>
                              </div>
                            </div>

                            <button
                              onClick={() => setSelectedService(row)}
                              className="text-slate-400 hover:text-cyan-400 p-1.5 rounded-lg hover:bg-slate-800/80 transition-colors cursor-pointer shrink-0"
                              title="View details"
                            >
                              <Info size={16} />
                            </button>
                          </div>
                        </td>

                        {/* Starter Price */}
                        <td className="py-4 px-6 border-r border-slate-800/50 text-slate-100 font-bold text-base tracking-tight font-sans">
                          {row.starter}
                        </td>

                        {/* Professional Price (Cyan Font) */}
                        <td className="py-4 px-6 border-r border-slate-800/50 bg-slate-900/20 text-cyan-400 font-extrabold text-base tracking-tight font-sans drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">
                          {row.professional}
                        </td>

                        {/* Enterprise Price (Gold/Yellow Font) */}
                        <td className="py-4 px-6 bg-slate-900/40 text-amber-400 font-extrabold text-base tracking-tight font-sans drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">
                          {row.enterprise}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-3 text-right text-xs text-slate-400 font-mono">
          * All pricing listed in USD. Custom enterprise SLA retainers available on request.
        </div>
      </div>

      {/* ======================================================== */}
      {/* SERVICE DETAILS MODAL                                   */}
      {/* ======================================================== */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="glass-strong rounded-3xl border border-slate-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute right-5 top-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
            >
              <CloseIcon size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                {(() => {
                  const Icon = selectedService.icon;
                  return <Icon size={24} />;
                })()}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  {selectedService.categoryLabel}
                </span>
                <h3 className="text-2xl font-black text-white">{selectedService.service}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-slate-400">Starter Tier</span>
                  <span className="text-xs font-bold text-white">{selectedService.starter}</span>
                </div>
                <div className="space-y-2 mt-4">
                  {selectedService.starterFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">Professional Tier</span>
                  <span className="text-xs font-extrabold text-cyan-300">{selectedService.professional}</span>
                </div>
                <div className="space-y-2 mt-4">
                  {selectedService.professionalFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/40">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-amber-400">Enterprise Tier</span>
                  <span className="text-xs font-extrabold text-amber-300">{selectedService.enterprise}</span>
                </div>
                <div className="space-y-2 mt-4">
                  {selectedService.enterpriseFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white cursor-pointer"
              >
                Close
              </button>
              <Link
                to="/contact"
                search={{ service: selectedService.id }}
                className="btn-neon py-2.5 px-6 rounded-xl text-xs font-extrabold flex items-center gap-1.5"
              >
                Get Started with {selectedService.service} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
