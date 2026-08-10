import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain,
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
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Erha Technologies Enterprise AI & Software" },
      {
        name: "description",
        content:
          "AI agents, agentic systems, chatbots, LLMs, RAG, computer vision, voice AI, web development, mobile apps, SEO and AI search optimization by Erha Technologies.",
      },
      { property: "og:title", content: "Services — Erha Technologies" },
      { property: "og:description", content: "End-to-end AI, software, and growth services." },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/services" }
    ],
  }),
  component: ServicesPage,
});

const serviceCategories = [
  {
    id: "ai",
    label: "AI Services",
    tagline: "Intelligent systems that reason, act, and scale",
    accent: "cyan",
    services: [
      {
        icon: Bot,
        title: "AI Agents & Agentic Systems",
        desc: "Autonomous multi-agent systems that plan, reason, and execute complex multi-step business tasks without constant human supervision.",
        features: ["Multi-Agent Orchestration", "Autonomous Planning", "Tool Use & APIs", "Self-Correction Loops"],
      },
      {
        icon: MessageSquare,
        title: "AI Chatbots & Virtual Assistants",
        desc: "Intelligent, context-aware chatbots and virtual assistants tailored to your business workflows, embedded across any channel.",
        features: ["Custom LLM Fine-Tuning", "Multi-Turn Context", "CRM Integration", "Multi-Channel Deploy"],
      },
      {
        icon: Workflow,
        title: "AI Integration & Workflow Automation",
        desc: "Seamlessly integrate AI capabilities into your existing systems and automate complex workflows across 200+ enterprise SaaS platforms.",
        features: ["RPA Automation", "API Orchestration", "Webhook Pipelines", "Real-Time Triggers"],
      },
      {
        icon: Sparkles,
        title: "Generative AI, Custom LLMs & RAG",
        desc: "Build production-grade generative AI systems with custom LLM fine-tuning and retrieval-augmented generation for your proprietary data.",
        features: ["LLM Fine-Tuning", "RAG Pipelines", "Vector Embeddings", "Hybrid Search"],
      },
      {
        icon: BarChart2,
        title: "Machine Learning & Predictive AI",
        desc: "Custom ML models for forecasting, anomaly detection, recommendation engines, and data-driven decision intelligence at enterprise scale.",
        features: ["Predictive Modelling", "Anomaly Detection", "Recommendation Engines", "MLOps Infrastructure"],
      },
      {
        icon: ScanSearch,
        title: "Computer Vision & Document AI",
        desc: "Extract intelligence from images, video, and documents using state-of-the-art computer vision and document understanding models.",
        features: ["Object Detection", "OCR & Document Parsing", "Image Classification", "Video Analytics"],
      },
      {
        icon: Mic,
        title: "Voice AI Agents & Speech Automation",
        desc: "Deploy voice-enabled AI agents that understand, reason, and respond in natural speech for customer service and enterprise workflows.",
        features: ["STT / TTS Pipelines", "Voice Agent Flows", "Real-Time Transcription", "Multilingual Support"],
      },
      {
        icon: Lightbulb,
        title: "AI Strategy & Transformation Consulting",
        desc: "Strategic AI advisory to help enterprises identify, prioritize, and execute high-ROI AI initiatives with a clear transformation roadmap.",
        features: ["AI Readiness Audit", "Use Case Discovery", "Architecture Planning", "ROI Modelling"],
      },
    ],
  },
  {
    id: "dev",
    label: "Development Services",
    tagline: "Engineering-first products built to last",
    accent: "indigo",
    services: [
      {
        icon: Globe,
        title: "Web Development & Enterprise Applications",
        desc: "High-performance, pixel-perfect web applications and enterprise platforms engineered with modern frameworks and rock-solid infrastructure.",
        features: ["React / Next.js", "Node.js & Python", "REST & GraphQL APIs", "CI/CD & Cloud Deploy"],
      },
      {
        icon: Smartphone,
        title: "Mobile & Cross-Platform App Development",
        desc: "Native-quality cross-platform mobile applications for iOS and Android, built with Flutter or React Native for speed and reliability.",
        features: ["iOS & Android", "React Native / Flutter", "On-Device AI", "Offline-First Architecture"],
      },
      {
        icon: ShoppingCart,
        title: "E-commerce Development & Commerce Solutions",
        desc: "High-conversion online stores and enterprise e-commerce platforms with multi-currency support, automated checkout, and real-time inventory sync.",
        features: ["Headless Commerce", "Payment Gateways", "Storefront Optimization", "Inventory & Order Sync"],
      },
      {
        icon: Layers,
        title: "Custom SaaS & Product Development",
        desc: "End-to-end SaaS product engineering from MVP to enterprise scale with multi-tenant architecture, automated subscription billing, and robust security.",
        features: ["Multi-Tenant SaaS", "Subscription & Billing", "Role-Based Access Control", "Scalable Microservices"],
      },
      {
        icon: Server,
        title: "Backend, API & System Integration",
        desc: "High-throughput backend architectures, API gateway pipelines, and seamless enterprise system integrations connecting cloud services with legacy platforms.",
        features: ["RESTful & GraphQL APIs", "Legacy Middleware", "Event-Driven Pipelines", "System Interoperability"],
      },
      {
        icon: Cloud,
        title: "Cloud, DevOps & Infrastructure Engineering",
        desc: "Cloud-native deployment, automated CI/CD pipelines, container orchestration, and multi-cloud infrastructure optimized for speed, security, and cost efficiency.",
        features: ["Kubernetes & Docker", "Infrastructure as Code", "AWS / GCP / Azure", "Zero-Downtime Deploy"],
      },
      {
        icon: Layout,
        title: "UI/UX Design & Product Experience",
        desc: "User-centered design systems, responsive web & mobile UI interfaces, and intuitive user experiences crafted to maximize product adoption and conversion.",
        features: ["User Journey Mapping", "Interactive Wireframing", "Design Systems", "Usability & Accessibility"],
      },
      {
        icon: RefreshCw,
        title: "Software Modernization & Ongoing Support",
        desc: "Transform legacy software systems with cloud-native migration, code refactoring, security patching, and continuous proactive maintenance support.",
        features: ["Legacy Refactoring", "Cloud Migration", "Performance Tuning", "24/7 SLA & Maintenance"],
      },
    ],
  },
  {
    id: "growth",
    label: "Search & Growth Services",
    tagline: "Visibility engineered for the AI-first web",
    accent: "emerald",
    services: [
      {
        icon: Search,
        title: "SEO & Organic Search Growth",
        desc: "Technical SEO, content strategy, and performance optimization to drive sustainable organic search growth and measurable ranking improvements.",
        features: ["Technical SEO Audits", "Keyword Strategy", "On-Page Optimization", "Core Web Vitals"],
      },
      {
        icon: TrendingUp,
        title: "AEO, GEO & AI Search Optimization",
        desc: "Optimize your brand for Answer Engine Optimization and Generative Engine Optimization to dominate AI-powered search results like ChatGPT, Perplexity, and Google SGE.",
        features: ["Answer Engine Optimization", "Generative Engine Optimization", "AI Citation Building", "Structured Data & Schema"],
      },
      {
        icon: Target,
        title: "Google Ads & PPC Campaign Management",
        desc: "High-ROI pay-per-click campaign setup, keyword targeting, ad creative optimization, and continuous conversion tracking across Google Search and Display network.",
        features: ["Google Search & Display", "PPC Bidding Optimization", "Ad Copy & Extensions", "ROAS Tracking"],
      },
      {
        icon: Megaphone,
        title: "Meta Ads & Paid Social Campaigns",
        desc: "Data-driven paid social campaigns across Facebook, Instagram, LinkedIn, and TikTok designed to acquire qualified leads and maximize return on ad spend.",
        features: ["Facebook & Instagram Ads", "Audience Targeting", "Retargeting Funnels", "Creative A/B Testing"],
      },
      {
        icon: Users,
        title: "Social Media Marketing & Brand Growth",
        desc: "Strategic social media channel management, audience building, brand positioning, and engaging content creation that builds loyal customer communities.",
        features: ["Content Scheduling", "Community Engagement", "Brand Voice Strategy", "Viral Short-Form Content"],
      },
      {
        icon: FileText,
        title: "Content Marketing & Conversion Copywriting",
        desc: "Compelling storytelling and high-converting copy that engages target audiences, establishes industry authority, and turns readers into paying clients.",
        features: ["SEO Blog Content", "Landing Page Copywriting", "Whitepapers & Case Studies", "Editorial Calendars"],
      },
      {
        icon: Mail,
        title: "Email Marketing & CRM Automation",
        desc: "Automated email marketing funnels, customer lifecycle messaging, lead nurturing workflows, and hyper-segmented newsletter campaigns.",
        features: ["Automated Drip Sequences", "Klaviyo / HubSpot Pipelines", "Audience Segmentation", "A/B Subject Testing"],
      },
      {
        icon: BarChart2,
        title: "Conversion Rate Optimization & Analytics",
        desc: "Data-backed website optimization, user behavior analytics, heatmap audits, and landing page A/B testing to increase your visitor-to-customer conversion rate.",
        features: ["A/B & Multivariate Testing", "Heatmaps & Session Recording", "Funnel Drop-Off Audit", "GA4 & Custom Dashboards"],
      },
    ],
  },
];

const accentMap: Record<string, { border: string; bg: string; text: string; iconBg: string; iconBorder: string; tag: string; tagText: string }> = {
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/30",
    tag: "bg-cyan-500/10 border-cyan-500/20",
    tagText: "text-cyan-300",
  },
  indigo: {
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    iconBorder: "border-indigo-500/30",
    tag: "bg-indigo-500/10 border-indigo-500/20",
    tagText: "text-indigo-300",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-500/30",
    tag: "bg-emerald-500/10 border-emerald-500/20",
    tagText: "text-emerald-300",
  },
};

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X as CloseIcon } from "lucide-react";

function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "dev" | "growth">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<{
    icon: any;
    title: string;
    desc: string;
    features: string[];
    categoryLabel: string;
    accent: string;
  } | null>(null);

  // Flatten all services with their category info
  const allServices = serviceCategories.flatMap((cat) =>
    cat.services.map((s) => ({
      ...s,
      categoryId: cat.id,
      categoryLabel: cat.label,
      categoryTagline: cat.tagline,
      accent: cat.accent,
    }))
  );

  // Filter based on active tab and search query
  const filteredServices = allServices.filter((s) => {
    const matchesTab = activeTab === "all" || s.categoryId === activeTab;
    const matchesSearch =
      searchQuery.trim() === "" ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
      s.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="px-4 sm:px-6 py-20 md:py-28 max-w-7xl mx-auto animate-fade-up">
      {/* Header Section */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 text-xs sm:text-sm font-mono font-black uppercase tracking-widest mb-6 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
          <Sparkles size={16} className="animate-spin-slow" />
          Enterprise Service Capabilities
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
          Services Built for <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-400 bg-clip-text text-transparent font-black drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">Enterprise Scale</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
          From autonomous AI agent swarms to high-performance web applications and omni-channel AI search growth — full-spectrum digital capabilities under one roof.
        </p>

        {/* Global Package CTA Banner */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/pricing"
            className="btn-neon inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-black shadow-xl scale-105"
          >
            <Sparkles size={18} /> Explore Basic, Standard & Premium Packages <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Interactive Category Filter & Live Search Bar */}
      <div className="mb-16 space-y-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 sm:p-2.5 bg-slate-900/95 rounded-2xl sm:rounded-3xl border border-slate-700/80 max-w-4xl mx-auto backdrop-blur-2xl shadow-2xl">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-base font-black transition-all duration-200 cursor-pointer ${
              activeTab === "all"
                ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.5)] scale-[1.02] sm:scale-105"
                : "text-slate-200 hover:text-white hover:bg-slate-800/80"
            }`}
          >
            ✨ All Services ({allServices.length})
          </button>
          <button
            onClick={() => setActiveTab("ai")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-base font-black transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
              activeTab === "ai"
                ? "bg-cyan-400 text-slate-950 font-black shadow-[0_0_25px_rgba(6,182,212,0.5)] scale-[1.02] sm:scale-105"
                : "text-slate-200 hover:text-cyan-300 hover:bg-slate-800/80"
            }`}
          >
            <Bot size={16} className="sm:w-4 sm:h-4" /> AI Services (8)
          </button>
          <button
            onClick={() => setActiveTab("dev")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-base font-black transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
              activeTab === "dev"
                ? "bg-indigo-500 text-white font-black shadow-[0_0_25px_rgba(99,102,241,0.5)] scale-[1.02] sm:scale-105"
                : "text-slate-200 hover:text-indigo-300 hover:bg-slate-800/80"
            }`}
          >
            <Globe size={16} className="sm:w-4 sm:h-4" /> Development Services (8)
          </button>
          <button
            onClick={() => setActiveTab("growth")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-base font-black transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
              activeTab === "growth"
                ? "bg-emerald-400 text-slate-950 font-black shadow-[0_0_25px_rgba(16,185,129,0.5)] scale-[1.02] sm:scale-105"
                : "text-slate-200 hover:text-emerald-300 hover:bg-slate-800/80"
            }`}
          >
            <TrendingUp size={16} className="sm:w-4 sm:h-4" /> Search & Growth (8)
          </button>
        </div>

        {/* Live Search Input */}
        <div className="relative max-w-2xl mx-auto">
          <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 24+ services by title, tech stack, or feature..."
            className="w-full pl-13 pr-12 py-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm sm:text-base font-semibold focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-xl"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
            >
              <CloseIcon size={16} />
            </button>
          )}
        </div>

        {/* Filter Summary Status */}
        <div className="text-center text-sm font-mono font-bold text-slate-300">
          Showing <span className="text-cyan-400 font-black text-base">{filteredServices.length}</span> capabilities
          {activeTab !== "all" && (
            <span> under <span className="text-white font-black">{serviceCategories.find(c => c.id === activeTab)?.label}</span></span>
          )}
          {searchQuery && (
            <span> matching &ldquo;<span className="text-cyan-300 font-bold">{searchQuery}</span>&rdquo;</span>
          )}
        </div>
      </div>

      {/* Services Grid Display */}
      {filteredServices.length === 0 ? (
        <div className="glass-strong rounded-3xl p-12 text-center border border-slate-800 max-w-xl mx-auto">
          <Lightbulb size={40} className="text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-black text-white mb-2">No Matching Services Found</h3>
          <p className="text-sm text-slate-300 mb-6">Try clearing your search query or switching category tabs to browse all services.</p>
          <button
            onClick={() => {
              setActiveTab("all");
              setSearchQuery("");
            }}
            className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 text-xs sm:text-sm font-black hover:bg-cyan-400 transition-all shadow-lg"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filteredServices.map((s, idx) => {
            const colors = accentMap[s.accent];
            return (
              <div
                key={s.title}
                className="glass card-3d rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800/90 hover:border-cyan-400/60 transition-all duration-300 group hover:shadow-[0_12px_40px_rgba(6,182,212,0.2)] bg-slate-950/70"
              >
                <div>
                  {/* Category Header Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm ${colors.tag} ${colors.tagText}`}>
                      {s.categoryLabel}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {String(idx + 1).padStart(2, "0")} / 24
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${colors.iconBg} border ${colors.iconBorder} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform shadow-md`}>
                    <s.icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="font-black text-lg sm:text-xl text-white mb-2.5 leading-snug group-hover:text-cyan-300 transition-colors drop-shadow-sm">
                    {s.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 min-h-[52px]">
                    {s.desc}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-6">
                    {s.features.map((f) => (
                      <span
                        key={f}
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border bg-slate-900/90 border-slate-800 text-slate-200`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => setSelectedService(s)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-black transition-all text-center cursor-pointer shadow-md"
                  >
                    View Specs
                  </button>
                  <Link
                    to="/pricing"
                    className="py-2.5 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-black transition-all text-center shadow-md"
                  >
                    Packages
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Service Detail Modal */}
      {selectedService && (
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="glass-strong border border-slate-700/80 text-white rounded-3xl max-w-lg p-6 sm:p-8 shadow-2xl">
            <DialogHeader className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <selectedService.icon size={24} />
                </div>
                <div>
                  <DialogTitle className="text-xl font-extrabold text-white tracking-tight">
                    {selectedService.title}
                  </DialogTitle>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mt-1 block">
                    {selectedService.categoryLabel}
                  </span>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-5 py-4 text-xs sm:text-sm">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  CAPABILITY OVERVIEW
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {selectedService.desc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                  KEY DELIVERABLES & FEATURES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                      <span className="text-xs font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">Available in Package Tiers</span>
                    <span className="text-[11px] text-slate-300">Basic ($499), Standard & Premium Tiers</span>
                  </div>
                  <Link
                    to="/pricing"
                    onClick={() => setSelectedService(null)}
                    className="px-3.5 py-1.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-black hover:bg-cyan-400 transition-all"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setSelectedService(null)}
                className="btn-neon px-5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
              >
                Get Custom Quote <ArrowRight size={14} />
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Solution Configurator Section */}
      <SolutionConfigurator />
    </div>
  );
}

function SolutionConfigurator() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [dataScale, setDataScale] = useState("Medium");
  const [userScale, setUserScale] = useState("Internal");
  const [leadForm, setLeadForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const getRecommendation = () => {
    const serviceCount = selectedServices.length;

    if (serviceCount === 0) {
      return {
        title: "Bespoke AI Consultation Roadmap",
        complexity: "Standard",
        description: "Let's explore your business needs to scope out a custom digital roadmap.",
      };
    }

    if (selectedServices.includes("AI Agents & Agentic Systems") || dataScale === "Enterprise") {
      return {
        title: "Autonomous Agentic Flow & Scalable Vector Database",
        complexity: "High Complexity",
        description: `Recommended architecture based on: ${selectedServices.join(", ")}. Tailored for ${dataScale} data scale and ${userScale === "Internal" ? "Internal Team" : "Public/High-Traffic"} audience.`,
      };
    } else if (selectedServices.includes("Generative AI, Custom LLMs & RAG") && dataScale === "Medium") {
      return {
        title: "Hybrid RAG Search Pipeline & Custom LLM Fine-Tuning",
        complexity: "Medium Complexity",
        description: `Recommended architecture based on: ${selectedServices.join(", ")}. Tailored for ${dataScale} data scale.`,
      };
    } else if (selectedServices.some((s) => s.includes("Web Development") || s.includes("Mobile"))) {
      return {
        title: "High-Performance Modern Frontend & Secure API Backend",
        complexity: "Low-Medium Complexity",
        description: `Recommended architecture based on: ${selectedServices.join(", ")}. Optimized for ${userScale === "Internal" ? "Internal Team" : "Public/High-Traffic"} audience.`,
      };
    } else if (selectedServices.some((s) => s.includes("SEO") || s.includes("AEO"))) {
      return {
        title: "Comprehensive Search & AI Visibility Strategy",
        complexity: "Medium Complexity",
        description: `Recommended strategy based on: ${selectedServices.join(", ")}. Designed for AI-first search dominance.`,
      };
    }

    return {
      title: "Custom AI Workflow Automation Pipeline",
      complexity: "Medium Complexity",
      description: `Recommended architecture based on: ${selectedServices.join(", ")}. Tailored for ${dataScale} data scale.`,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email) return;

    setIsSubmitting(true);
    const rec = getRecommendation();

    try {
      const payload = {
        "Configured Services": selectedServices.join(", "),
        "Data Scale": dataScale,
        "User Scale": userScale,
        "Recommended Solution": rec.title,
        "Complexity Tier": rec.complexity,
        "Client Name": leadForm.name,
        "Client Email": leadForm.email,
        "Additional Message": leadForm.message || "None",
        _subject: `Solution Configurator Lead: ${leadForm.name} — ${rec.complexity}`,
        _template: "table",
        _honey: "",
      };

      await fetch("https://formsubmit.co/ajax/info@erhatechnologies.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      setSent(true);
    } catch (err) {
      console.error("Configurator submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const rec = getRecommendation();

  const configuratorServices = [
    "AI Agents & Agentic Systems",
    "AI Chatbots & Virtual Assistants",
    "Generative AI, Custom LLMs & RAG",
    "Machine Learning & Predictive AI",
    "Computer Vision & Document AI",
    "Voice AI Agents & Speech Automation",
    "Web Development & Enterprise Applications",
    "Mobile & Cross-Platform App Development",
    "SEO & Organic Search Growth",
    "AEO, GEO & AI Search Optimization",
  ];

  return (
    <div className="mt-24 border-t border-slate-800/80 pt-16 max-w-4xl mx-auto animate-fade-up">
      <div className="text-center mb-12">
        <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2 font-mono">
          Interactive Tool
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          AI Solution <span className="text-gradient">Configurator</span>
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          Select parameters to generate a recommended system architecture and request a proposal.
        </p>
      </div>

      <div className="glass-strong rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="w-full bg-slate-800 h-1.5 rounded-full mb-8 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {sent ? (
          <div className="text-center py-10 animate-fade-in">
            <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-5 text-cyan-400">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="font-extrabold text-2xl mb-2 text-white">Configuration Submitted</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you! Our engineering team will review your recommended architecture (<strong>{rec.title}</strong>) and email you a customized proposal within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="font-bold text-xl mb-2 text-white">Step 1: Select Focus Areas</h3>
                <p className="text-xs text-slate-400 mb-6">Select all services your project requires.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {configuratorServices.map((s) => (
                    <button
                      key={s}
                      onClick={() => toggleService(s)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex justify-between items-center ${
                        selectedServices.includes(s)
                          ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300 font-semibold"
                          : "border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80"
                      }`}
                    >
                      <span className="text-sm">{s}</span>
                      {selectedServices.includes(s) && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 ml-2" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="btn-neon px-6 py-2.5 rounded-full inline-flex items-center gap-1.5 text-xs font-semibold"
                  >
                    Next Step <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="font-bold text-xl mb-4 text-white">Step 2: Scale Parameters</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 mb-3 block font-mono font-bold">
                      Expected Data Scale
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {["Small (<1GB)", "Medium (1-50GB)", "Enterprise (>50GB)"].map((s) => {
                        const val = s.split(" ")[0];
                        return (
                          <button
                            key={s}
                            onClick={() => setDataScale(val)}
                            className={`py-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                              dataScale === val
                                ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300"
                                : "border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 mb-3 block font-mono font-bold">
                      Target User Audience
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Internal Team Scale", val: "Internal" },
                        { label: "Public / High-Traffic Scale", val: "Public" },
                      ].map((u) => (
                        <button
                          key={u.val}
                          onClick={() => setUserScale(u.val)}
                          className={`py-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                            userScale === u.val
                              ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300"
                              : "border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80"
                          }`}
                        >
                          {u.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-full border border-slate-700 text-xs font-semibold text-slate-300 hover:bg-slate-800 inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronLeft size={14} /> Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="btn-neon px-6 py-2.5 rounded-full inline-flex items-center gap-1.5 text-xs font-semibold"
                  >
                    View Recommendation <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Step 3: Recommended Architecture</h3>
                  <div className="glass p-5 rounded-2xl border border-cyan-500/30 mt-4">
                    <span className="text-[10px] font-mono font-bold uppercase text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30">
                      {rec.complexity}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-3 mb-2">{rec.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{rec.description}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-slate-800">
                  <h4 className="font-bold text-sm text-white uppercase tracking-wider">Request Proposal</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400 font-semibold mb-1 block">Your Name</label>
                      <input
                        required
                        type="text"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/80 text-sm text-white focus:border-cyan-400 focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 font-semibold mb-1 block">Email Address</label>
                      <input
                        required
                        type="email"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/80 text-sm text-white focus:border-cyan-400 focus:outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 font-semibold mb-1 block">Project Requirements (Optional)</label>
                    <textarea
                      rows={3}
                      value={leadForm.message}
                      onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/80 text-sm text-white focus:border-cyan-400 focus:outline-none resize-none"
                      placeholder="Brief summary of timelines or custom features..."
                    />
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-full border border-slate-700 text-xs font-semibold text-slate-300 hover:bg-slate-800 inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronLeft size={14} /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-neon px-7 py-2.5 rounded-full inline-flex items-center gap-1.5 text-xs font-bold disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Proposal Request"} <Send size={12} />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
