import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  CheckCircle2,
  Zap,
  Bot,
  Globe,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Search,
  Check,
  Info,
  X,
  Calculator,
  Cpu,
  Code,
  Layers,
  Target,
  Users,
  FileText,
  Mail,
  MessageSquare,
  Smartphone,
  MapPin,
  Table as TableIcon,
  LayoutGrid,
  Sparkle,
} from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Service Pricing & Packages — Erha Technologies" },
      {
        name: "description",
        content:
          "Transparent service-wise pricing table for AI automation, web development, SEO, PPC, chatbots, and SaaS engineering. Starter, Professional, and Enterprise tiers.",
      },
      { property: "og:title", content: "Service Pricing Matrix — Erha Technologies" },
      {
        property: "og:description",
        content:
          "Transparent pricing per service with Starter, Professional, and Enterprise tiers.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/pricing" },
    ],
  }),
  component: PricingPage,
});

export interface ServicePriceRow {
  id: string;
  service: string;
  category: "ai" | "dev" | "growth";
  categoryLabel: string;
  icon: any;
  starter: string;
  starterNum: number;
  starterBilling: "mo" | "one-time";
  professional: string;
  professionalNum: number;
  professionalBilling: "mo" | "one-time";
  enterprise: string;
  enterpriseNum: number;
  enterpriseBilling: "mo" | "one-time";
  badge?: string;
  popularTier?: "starter" | "professional" | "enterprise";
  description: string;
  starterFeatures: string[];
  professionalFeatures: string[];
  enterpriseFeatures: string[];
}

export const servicePricingData: ServicePriceRow[] = [
  {
    id: "seo-services",
    service: "SEO Services",
    category: "growth",
    categoryLabel: "Search & SEO",
    icon: TrendingUp,
    starter: "$500/mo",
    starterNum: 500,
    starterBilling: "mo",
    professional: "$1,200/mo",
    professionalNum: 1200,
    professionalBilling: "mo",
    enterprise: "$3,000/mo",
    enterpriseNum: 3000,
    enterpriseBilling: "mo",
    popularTier: "professional",
    badge: "Popular Growth Service",
    description:
      "Comprehensive search engine optimization, technical audits, keyword rankings, content strategy, and backlink authority building.",
    starterFeatures: [
      "Up to 30 Targeted Keywords",
      "Technical SEO Audit & Remediation",
      "On-Page Titles, Meta & Content Tweaks",
      "Google Search Console & GA4 Setup",
      "Monthly Keyword & Traffic Reports",
    ],
    professionalFeatures: [
      "Up to 100 Targeted Keywords",
      "4 High-Quality SEO Articles / month",
      "Answer Engine Optimization (AEO / GEO)",
      "Technical Fixes & Schema Markup",
      "Competitor Backlink & Gap Analysis",
      "Bi-weekly Ranking Optimization",
    ],
    enterpriseFeatures: [
      "Unlimited Target Keywords & Cluster Strategy",
      "Full Generative Engine Dominance (ChatGPT/Google SGE)",
      "Custom Digital PR & High-Authority Backlink Ops",
      "Dedicated Senior SEO Strategist",
      "Weekly Live Telemetry & Attribution Reporting",
    ],
  },
  {
    id: "ai-automation",
    service: "AI Automation",
    category: "ai",
    categoryLabel: "AI & Autonomous Systems",
    icon: Cpu,
    starter: "$2,000",
    starterNum: 2000,
    starterBilling: "one-time",
    professional: "$5,000",
    professionalNum: 5000,
    professionalBilling: "one-time",
    enterprise: "$10,000+",
    enterpriseNum: 10000,
    enterpriseBilling: "one-time",
    popularTier: "professional",
    badge: "High ROI Automation",
    description:
      "Automate repetitive enterprise workflows, document extraction, internal ops, and multi-app orchestration using autonomous AI pipelines.",
    starterFeatures: [
      "Up to 3 Automated Workflow Pipelines",
      "Zapier / Make / n8n Platform Integration",
      "Standard Webhook & API Connectors",
      "Data Scraping & Automated Formatting",
      "30 Days Post-Launch Maintenance",
    ],
    professionalFeatures: [
      "Up to 10 Autonomous Workflow Pipelines",
      "Custom Python/Node AI Automation Scripts",
      "Self-Correction & Fallback Logic",
      "Internal Dashboard for Job Execution Logs",
      "CRM & ERP Deep System Integration",
      "90 Days Support & SLA Guarantee",
    ],
    enterpriseFeatures: [
      "Unlimited Complex Multi-App Workflows",
      "Dedicated Air-Gapped / On-Prem Infrastructure",
      "Custom Machine Learning Models",
      "Continuous Monitoring & Real-time Failover",
      "24/7 Managed Automation Squad",
    ],
  },
  {
    id: "saas-development",
    service: "SaaS Development",
    category: "dev",
    categoryLabel: "Software Engineering",
    icon: Layers,
    starter: "$5,000",
    starterNum: 5000,
    starterBilling: "one-time",
    professional: "$15,000",
    professionalNum: 15000,
    professionalBilling: "one-time",
    enterprise: "$30,000+",
    enterpriseNum: 30000,
    enterpriseBilling: "one-time",
    popularTier: "professional",
    badge: "Full-Scale Engineering",
    description:
      "End-to-end custom multi-tenant SaaS application engineering, scalable cloud infrastructure, payment gateways, and admin portals.",
    starterFeatures: [
      "Core SaaS MVP Architecture",
      "User Authentication & Role Management",
      "Stripe / PayPal Subscription Billing",
      "Responsive Modern React / Next.js UI",
      "PostgreSQL / Supabase Database Setup",
    ],
    professionalFeatures: [
      "Full Production Multi-Tenant SaaS Platform",
      "Advanced Admin Portal & User Analytics",
      "Microservices Backend (Node.js/Python)",
      "Automated CI/CD Pipeline & Staging",
      "Comprehensive End-to-End Test Suite",
      "90 Days Dedicated Warranty & Support",
    ],
    enterpriseFeatures: [
      "High-Throughput Distributed Microservices",
      "Kubernetes Cluster Orchestration & IaC",
      "Dedicated DevOps & Solutions Architect Squad",
      "Custom Security Compliance (SOC2 / HIPAA)",
      "Guaranteed 99.99% Uptime & 24/7 SLA",
    ],
  },
  {
    id: "ai-chatbots",
    service: "AI Chatbots",
    category: "ai",
    categoryLabel: "AI & Autonomous Systems",
    icon: Bot,
    starter: "$1,500",
    starterNum: 1500,
    starterBilling: "one-time",
    professional: "$3,500",
    professionalNum: 3500,
    professionalBilling: "one-time",
    enterprise: "$8,000+",
    enterpriseNum: 8000,
    enterpriseBilling: "one-time",
    popularTier: "professional",
    badge: "Agentic Conversational AI",
    description:
      "Context-aware custom conversational bots powered by GPT-4o, Claude 3.5, or private LLMs for customer service and sales automation.",
    starterFeatures: [
      "Single-Domain Web Embedded Chatbot",
      "RAG Vector Search on up to 500 Knowledge Documents",
      "Standard LLM API Integration",
      "Up to 15,000 Queries / month",
      "Usage Analytics Dashboard",
    ],
    professionalFeatures: [
      "Multi-Channel Bot (Web, WhatsApp, Slack, Teams)",
      "RAG Vector Search on Unlimited Documents",
      "Live CRM & Helpdesk Ticket Escalation",
      "Up to 150,000 Queries / month",
      "Custom Bot Persona & Brand Guardrails",
      "Priority Support & Fine-Tuning Updates",
    ],
    enterpriseFeatures: [
      "Custom Fine-Tuned LLM on Proprietary Data",
      "On-Premise / Private Air-Gapped Model Hosting",
      "Voice AI & Multimodal Image Processing",
      "Unlimited Chat Executions & Cluster Scaling",
      "1-Hour SLA & Dedicated AI Architect",
    ],
  },
  {
    id: "ppc-management",
    service: "PPC Management",
    category: "growth",
    categoryLabel: "Digital Marketing",
    icon: Target,
    starter: "$500/mo",
    starterNum: 500,
    starterBilling: "mo",
    professional: "$1,000/mo",
    professionalNum: 1000,
    professionalBilling: "mo",
    enterprise: "$2,000+/mo",
    enterpriseNum: 2000,
    enterpriseBilling: "mo",
    popularTier: "professional",
    badge: "High Conversion PPC",
    description:
      "Data-driven Pay-Per-Click campaign management across Google Search, Display, Meta Ads, and LinkedIn Ads to generate qualified leads.",
    starterFeatures: [
      "Management for Ad Spend up to $3,000/mo",
      "Google Search Ads Campaign Setup",
      "Keyword Research & Negative Match Lists",
      "Bi-Weekly Campaign Performance Tuning",
      "Monthly Conversion & ROI Reporting",
    ],
    professionalFeatures: [
      "Management for Ad Spend up to $15,000/mo",
      "Omnichannel Ads (Google Search, Display, Meta, LinkedIn)",
      "A/B Ad Copy & Creative Variant Testing",
      "Landing Page Conversion Rate Optimization",
      "Weekly Performance Sync & Attribution Setup",
    ],
    enterpriseFeatures: [
      "Unlimited Ad Spend Campaign Management",
      "Full Funnel Programmatic Advertising & Video Ads",
      "Custom Real-time Analytics Dashboard",
      "Dedicated Senior PPC Account Director",
      "24/7 Campaign Telemetry & Bid Optimization",
    ],
  },
  {
    id: "social-media",
    service: "Social Media",
    category: "growth",
    categoryLabel: "Digital Marketing",
    icon: Users,
    starter: "$500/mo",
    starterNum: 500,
    starterBilling: "mo",
    professional: "$1,000/mo",
    professionalNum: 1000,
    professionalBilling: "mo",
    enterprise: "$2,000+/mo",
    enterpriseNum: 2000,
    enterpriseBilling: "mo",
    popularTier: "professional",
    badge: "Brand Growth & Engagement",
    description:
      "Strategic social media management, original content design, reel production, audience growth, and active community engagement.",
    starterFeatures: [
      "12 Custom Designed Posts / month",
      "2 Platforms (Facebook & Instagram)",
      "Content Calendar & Copywriting",
      "Hashtag & Audience Research",
      "Monthly Performance Report",
    ],
    professionalFeatures: [
      "24 Custom Posts + 4 Short Videos / month",
      "4 Platforms (FB, IG, LinkedIn, Twitter/X)",
      "Short-Form Video Scripting & Editing",
      "Active Daily Community Engagement",
      "Bi-Weekly Growth Strategy Syncs",
    ],
    enterpriseFeatures: [
      "Daily Posts + 12 High-Production Videos / month",
      "All Major Social Channels (TikTok, YouTube, FB, IG, LinkedIn)",
      "Influencer Outreach & Viral Campaign Lead",
      "Dedicated Creative Team & Account Manager",
      "24/7 Brand Reputation Monitoring",
    ],
  },
  {
    id: "web-development",
    service: "Web Development",
    category: "dev",
    categoryLabel: "Software Engineering",
    icon: Globe,
    starter: "$500",
    starterNum: 500,
    starterBilling: "one-time",
    professional: "$2,000",
    professionalNum: 2000,
    professionalBilling: "one-time",
    enterprise: "$5,000+",
    enterpriseNum: 5000,
    enterpriseBilling: "one-time",
    popularTier: "professional",
    badge: "Modern Web Apps",
    description:
      "High-speed, responsive custom web applications, marketing portals, and headless CMS websites with 95+ Lighthouse speed scores.",
    starterFeatures: [
      "Up to 5 Custom Responsive Pages",
      "Modern React / Tailwind Design",
      "Contact Form & Essential Integrations",
      "Basic On-Page Technical SEO",
      "SSL Certificate & Vercel Hosting Setup",
    ],
    professionalFeatures: [
      "Up to 15 Pages or Custom Web Application",
      "Headless CMS (Strapi / Sanity / Contentful)",
      "Dynamic Micro-Animations & Interactivity",
      "Core Web Vitals Speed Optimization (95+)",
      "30 Days Dedicated Post-Launch Support",
    ],
    enterpriseFeatures: [
      "Bespoke High-Scale Enterprise Web Portal",
      "High-Volume E-Commerce Architecture",
      "Custom API Integrations & Database Sync",
      "Infrastructure-as-Code & Multi-CDN Deploy",
      "Dedicated Web Engineering Lead & SLA",
    ],
  },
  {
    id: "wordpress-dev",
    service: "WordPress Dev",
    category: "dev",
    categoryLabel: "Software Engineering",
    icon: FileText,
    starter: "$300",
    starterNum: 300,
    starterBilling: "one-time",
    professional: "$800",
    professionalNum: 800,
    professionalBilling: "one-time",
    enterprise: "$2,000+",
    enterpriseNum: 2000,
    enterpriseBilling: "one-time",
    popularTier: "professional",
    badge: "WordPress Customization",
    description:
      "Custom WordPress theme build, WooCommerce store development, plugin engineering, speed acceleration, and site security hardening.",
    starterFeatures: [
      "Custom Theme Setup & Styling",
      "Up to 5 Responsive Pages",
      "Elementor / Gutenberg Page Builder",
      "Essential Security & Caching Plugins",
      "Contact Form & Social Media Integration",
    ],
    professionalFeatures: [
      "Bespoke Custom Theme Build (No Heavy Themes)",
      "Custom WooCommerce Store Setup & Gateway",
      "Custom PHP Plugin Modifications",
      "Page Speed Tuning (90+ Mobile / Desktop)",
      "30 Days Maintenance & Backup Setup",
    ],
    enterpriseFeatures: [
      "Enterprise WordPress Architecture & Headless WP",
      "High-Traffic Server Caching & Redis Integration",
      "Custom ERP / CRM Real-Time Sync Plugins",
      "Continuous Malware Protection & 24/7 Uptime",
      "Dedicated WordPress Support Squad",
    ],
  },
  {
    id: "email-marketing",
    service: "Email Marketing",
    category: "growth",
    categoryLabel: "Digital Marketing",
    icon: Mail,
    starter: "$300/mo",
    starterNum: 300,
    starterBilling: "mo",
    professional: "$700/mo",
    professionalNum: 700,
    professionalBilling: "mo",
    enterprise: "$1,500+/mo",
    enterpriseNum: 1500,
    enterpriseBilling: "mo",
    popularTier: "professional",
    badge: "Automated Revenue Drops",
    description:
      "Automated email sequences, promotional newsletter broadcasts, Klaviyo / Mailchimp design, and inbox deliverability optimization.",
    starterFeatures: [
      "2 Custom Email Broadcasts / month",
      "Basic Welcome Sequence Automation",
      "Custom HTML Email Template Design",
      "List Cleaning & Spam Score Audit",
      "Monthly Open & Click Analytics",
    ],
    professionalFeatures: [
      "6 Custom Email Broadcasts / month",
      "Advanced Multi-Branch Drip Automation",
      "Audience Segmentation & Behavioral Triggers",
      "A/B Subject Line & Design Testing",
      "Klaviyo / HubSpot / ActiveCampaign Platform Ops",
    ],
    enterpriseFeatures: [
      "Unlimited Broadcasts & Enterprise Flow Networks",
      "Dedicated IP Warmup & Inbox Deliverability Director",
      "CRM Lead Scoring & Behavioral Revenue Attribution",
      "Dedicated Copywriter & Graphic Designer",
    ],
  },
  {
    id: "whatsapp-software",
    service: "WhatsApp Software",
    category: "ai",
    categoryLabel: "AI & Software",
    icon: Smartphone,
    starter: "$1,000",
    starterNum: 1000,
    starterBilling: "one-time",
    professional: "$2,500",
    professionalNum: 2500,
    professionalBilling: "one-time",
    enterprise: "$5,000+",
    enterpriseNum: 5000,
    enterpriseBilling: "one-time",
    popularTier: "professional",
    badge: "Official API Automation",
    description:
      "Official Meta WhatsApp Business API software, automated broadcast software, multi-agent chat support portals, and CRM sync.",
    starterFeatures: [
      "Meta WhatsApp Business API Infrastructure Setup",
      "Official Green Tick Verification Guidance",
      "Basic Keyword Auto-Responder Bot",
      "Up to 5,000 Message Logs / month",
      "Standard Web Admin Dashboard",
    ],
    professionalFeatures: [
      "Multi-Agent Support Portal (Shared Team Inbox)",
      "Automated Drag-and-Drop Chat Flow Builder",
      "Bulk Broadcast Scheduling & Contact Tagging",
      "HubSpot / Salesforce / Custom CRM Sync",
      "Up to 50,000 Message Logs / month",
    ],
    enterpriseFeatures: [
      "Custom AI Autonomous Chatbot Embedded in WhatsApp",
      "High-Volume Multi-Number Enterprise Cluster",
      "Dedicated Air-Gapped Database Hosting",
      "Unlimited Multi-Agent Accounts & 24/7 SLA",
    ],
  },
  {
    id: "content-marketing",
    service: "Content Marketing",
    category: "growth",
    categoryLabel: "Digital Marketing",
    icon: FileText,
    starter: "$400/mo",
    starterNum: 400,
    starterBilling: "mo",
    professional: "$900/mo",
    professionalNum: 900,
    professionalBilling: "mo",
    enterprise: "$2,000+/mo",
    enterpriseNum: 2000,
    enterpriseBilling: "mo",
    popularTier: "professional",
    badge: "Thought Leadership Content",
    description:
      "High-authority technical articles, whitepapers, case studies, and content syndication designed for search engines and generative AI tools.",
    starterFeatures: [
      "2 In-Depth SEO Articles / month (1,500 words each)",
      "Topic & Keyword Intent Research",
      "Custom Featured Graphic Design",
      "CMS Publishing & Formatting",
      "Monthly Content Traffic Analysis",
    ],
    professionalFeatures: [
      "6 SEO & GEO Optimized Articles / month",
      "Keyword Clustering & Content Hub Strategy",
      "Social Media Snippet Extractions",
      "Internal Linking & Schema Markup",
      "Bi-Weekly Content Performance Syncs",
    ],
    enterpriseFeatures: [
      "15+ Articles, E-books & Case Studies / month",
      "Dedicated Technical Editor & Domain Expert Squad",
      "Multi-Language Localization Strategy",
      "Digital PR & Media Distribution Ops",
    ],
  },
  {
    id: "local-seo",
    service: "Local SEO",
    category: "growth",
    categoryLabel: "Search & SEO",
    icon: MapPin,
    starter: "$300/mo",
    starterNum: 300,
    starterBilling: "mo",
    professional: "$600/mo",
    professionalNum: 600,
    professionalBilling: "mo",
    enterprise: "$1,200+/mo",
    enterpriseNum: 1200,
    enterpriseBilling: "mo",
    popularTier: "professional",
    badge: "Google 3-Pack Growth",
    description:
      "Google Business Profile optimization, local map pack rankings, citation building, review generation automation, and local geo-targeting.",
    starterFeatures: [
      "Google Business Profile Setup & Optimization",
      "25 High-Domain Local Citation Directory Submissions",
      "Monthly Local Search Ranking Audit",
      "Customer Review Strategy Guide",
    ],
    professionalFeatures: [
      "Google Maps 3-Pack Optimization Focus",
      "75 High-Domain Local Directory Submissions",
      "Geo-Grid Local Rank Tracking (5x5 grid)",
      "Automated Review Request System Setup",
      "Monthly Competitor Local Audit",
    ],
    enterpriseFeatures: [
      "Multi-Location Local SEO (up to 10 Business Locations)",
      "Hyper-Local Citation Building & Geo-Targeted Backlinks",
      "Dedicated Local Search Specialist",
      "Real-time Geo-Grid Telemetry & Call Attribution",
    ],
  },
];

const faqs = [
  {
    q: "How does your service pricing matrix work?",
    a: "Our pricing matrix outlines transparent starting rates across Starter, Professional, and Enterprise tiers for each individual service we provide. You can select single services or combine multiple services into a custom bundled package.",
  },
  {
    q: "What is the difference between Starter, Professional, and Enterprise tiers?",
    a: "Starter tier is ideal for startups and smaller scope projects. Professional is our most popular tier with full features and maximum value for growing businesses. Enterprise tier provides unlimited scale, custom SLA guarantees, air-gapped security, and a dedicated engineering squad.",
  },
  {
    q: "Can I bundle multiple services together for a discount?",
    a: "Yes! Use our interactive Service Bundle Estimator at the bottom of the table to select multiple services. We offer custom multi-service bundle discounts on retainers.",
  },
  {
    q: "Are the monthly prices fixed or project-based?",
    a: "Services tagged with '/mo' are recurring monthly retainers (which include ongoing optimization, management, and support). One-time services (like SaaS Development or AI Chatbot builds) cover end-to-end development with post-launch support.",
  },
  {
    q: "How fast can project development begin after selection?",
    a: "Once you select a service tier and schedule onboarding, our engineering and strategy squad initiates technical discovery within 24 to 48 hours.",
  },
];

function PricingPage() {
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [activeCategory, setActiveCategory] = useState<"all" | "ai" | "dev" | "growth">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<ServicePriceRow | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Bundle Estimator State
  const [selectedBundle, setSelectedBundle] = useState<{ [key: string]: "starter" | "professional" | "enterprise" }>({});

  const filteredServices = useMemo(() => {
    return servicePricingData.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const bundleTotal = useMemo(() => {
    let total = 0;
    Object.entries(selectedBundle).forEach(([id, tier]) => {
      const item = servicePricingData.find((s) => s.id === id);
      if (item) {
        if (tier === "starter") total += item.starterNum;
        if (tier === "professional") total += item.professionalNum;
        if (tier === "enterprise") total += item.enterpriseNum;
      }
    });
    return total;
  }, [selectedBundle]);

  const toggleBundleItem = (id: string, tier: "starter" | "professional" | "enterprise") => {
    setSelectedBundle((prev) => {
      if (prev[id] === tier) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: tier };
    });
  };

  return (
    <div className="px-4 sm:px-6 py-16 md:py-24 max-w-7xl mx-auto animate-fade-up">
      {/* Top Banner Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Sparkles size={14} className="animate-spin-slow" />
          Service-Wise Transparent Matrix
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
          Services <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-300 bg-clip-text text-transparent">Pricing Breakdown</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Explore our clear service-wise pricing structure with flexible Starter, Professional, and Enterprise tiers tailored for every scale.
        </p>

        {/* View Mode Switcher & Search Bar Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 p-3 bg-slate-900/90 rounded-2xl border border-slate-800 backdrop-blur-xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              All Services ({servicePricingData.length})
            </button>
            <button
              onClick={() => setActiveCategory("ai")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "ai"
                  ? "bg-cyan-500 text-slate-950 font-black shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80"
              }`}
            >
              <Bot size={14} /> AI & Bots
            </button>
            <button
              onClick={() => setActiveCategory("dev")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "dev"
                  ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                  : "text-slate-300 hover:text-indigo-300 hover:bg-slate-800/80"
              }`}
            >
              <Code size={14} /> Development
            </button>
            <button
              onClick={() => setActiveCategory("growth")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "growth"
                  ? "bg-amber-500 text-slate-950 font-black shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-300 hover:text-amber-300 hover:bg-slate-800/80"
              }`}
            >
              <TrendingUp size={14} /> SEO & Growth
            </button>
          </div>

          {/* Search Box & Layout Switcher */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <div className="relative flex-1 sm:w-56">
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
                  <X size={12} />
                </button>
              )}
            </div>

            {/* Layout Toggle */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewMode("table")}
                title="Table Matrix View"
                className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  viewMode === "table"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <TableIcon size={14} />
                <span className="hidden md:inline">Matrix</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                title="Grid Cards View"
                className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <LayoutGrid size={14} />
                <span className="hidden md:inline">Cards</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. PRIMARY VIEW MODE: SERVICE-WISE PRICING MATRIX TABLE */}
      {/* ======================================================== */}
      {viewMode === "table" ? (
        <div className="mb-16">
          <div className="overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
            {/* Scrollable Container on Mobile */}
            <div className="overflow-x-auto scrollbar-none">
              <table className="w-full text-left border-collapse min-w-[700px]">
                {/* Table Header matching the reference image's vibrant blue styling */}
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 text-white">
                    <th className="py-4 px-6 text-sm font-extrabold tracking-wide uppercase font-sans border-r border-blue-500/40 w-1/3">
                      <div className="flex items-center gap-2">
                        <Sparkle size={16} className="text-cyan-300" />
                        Service Name
                      </div>
                    </th>
                    <th className="py-4 px-6 text-sm font-extrabold tracking-wide uppercase font-sans border-r border-blue-500/40 text-left">
                      Starter
                    </th>
                    <th className="py-4 px-6 text-sm font-extrabold tracking-wide uppercase font-sans border-r border-blue-500/40 text-left bg-blue-700/60">
                      <div className="flex items-center justify-between">
                        <span>Professional</span>
                        <span className="text-[10px] font-mono font-bold bg-cyan-400 text-slate-950 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Best Value
                        </span>
                      </div>
                    </th>
                    <th className="py-4 px-6 text-sm font-extrabold tracking-wide uppercase font-sans text-left bg-blue-800/80">
                      Enterprise
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-slate-800/60">
                  {filteredServices.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-12 text-center text-slate-400">
                        No services matching your search criteria "{searchQuery}".
                      </td>
                    </tr>
                  ) : (
                    filteredServices.map((row, idx) => {
                      const IconComponent = row.icon;
                      const isEven = idx % 2 === 0;

                      return (
                        <tr
                          key={row.id}
                          className={`group transition-all duration-200 hover:bg-slate-900/90 ${
                            isEven ? "bg-slate-950/40" : "bg-slate-900/30"
                          }`}
                        >
                          {/* Column 1: Service Name */}
                          <td className="py-4 px-6 border-r border-slate-800/50">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-colors shrink-0">
                                  <IconComponent size={18} />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                                      {row.service}
                                    </span>
                                    {row.badge && (
                                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 hidden sm:inline-block">
                                        {row.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 max-w-xs">
                                    {row.description}
                                  </p>
                                </div>
                              </div>

                              <button
                                onClick={() => setSelectedService(row)}
                                className="text-slate-400 hover:text-cyan-400 p-1.5 rounded-lg hover:bg-slate-800/80 transition-colors cursor-pointer shrink-0"
                                title="View detailed features breakdown"
                              >
                                <Info size={16} />
                              </button>
                            </div>
                          </td>

                          {/* Column 2: Starter Price */}
                          <td className="py-4 px-6 border-r border-slate-800/50 text-slate-100 font-bold text-base tracking-tight font-sans">
                            <div className="flex items-center justify-between">
                              <span className="text-slate-100">{row.starter}</span>
                              <button
                                onClick={() => toggleBundleItem(row.id, "starter")}
                                className={`text-[11px] font-mono px-2 py-1 rounded-lg border transition-all cursor-pointer ${
                                  selectedBundle[row.id] === "starter"
                                    ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400"
                                    : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                                }`}
                              >
                                {selectedBundle[row.id] === "starter" ? "✓ Added" : "+ Select"}
                              </button>
                            </div>
                          </td>

                          {/* Column 3: Professional Price (Styled cyan font like reference image) */}
                          <td className="py-4 px-6 border-r border-slate-800/50 bg-slate-900/20">
                            <div className="flex items-center justify-between">
                              <span className="text-cyan-400 font-extrabold text-base tracking-tight font-sans drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">
                                {row.professional}
                              </span>
                              <button
                                onClick={() => toggleBundleItem(row.id, "professional")}
                                className={`text-[11px] font-mono px-2 py-1 rounded-lg border transition-all cursor-pointer ${
                                  selectedBundle[row.id] === "professional"
                                    ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400"
                                    : "bg-cyan-950/40 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20"
                                }`}
                              >
                                {selectedBundle[row.id] === "professional" ? "✓ Added" : "+ Select"}
                              </button>
                            </div>
                          </td>

                          {/* Column 4: Enterprise Price (Styled gold/yellow font like reference image) */}
                          <td className="py-4 px-6 bg-slate-900/40">
                            <div className="flex items-center justify-between">
                              <span className="text-amber-400 font-extrabold text-base tracking-tight font-sans drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">
                                {row.enterprise}
                              </span>
                              <button
                                onClick={() => toggleBundleItem(row.id, "enterprise")}
                                className={`text-[11px] font-mono px-2 py-1 rounded-lg border transition-all cursor-pointer ${
                                  selectedBundle[row.id] === "enterprise"
                                    ? "bg-amber-400 text-slate-950 font-bold border-amber-300"
                                    : "bg-amber-950/30 text-amber-300 border-amber-500/30 hover:bg-amber-500/20"
                                }`}
                              >
                                {selectedBundle[row.id] === "enterprise" ? "✓ Added" : "+ Select"}
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-2 font-mono">
            <span>💡 Click any service row info icon <Info size={12} className="inline" /> for tier features breakdown</span>
            <span>* Prices shown in USD. Retainers billed monthly or per custom scope.</span>
          </div>
        </div>
      ) : (
        /* ======================================================== */
        /* 2. ALTERNATIVE VIEW MODE: CARD GRID                      */
        /* ======================================================== */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((row) => {
            const IconComponent = row.icon;
            return (
              <div
                key={row.id}
                className="glass-strong rounded-3xl p-6 flex flex-col justify-between border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent size={22} />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      {row.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {row.service}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {row.description}
                  </p>

                  {/* 3 Price Badges */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                      <span className="font-mono text-slate-400">Starter:</span>
                      <span className="font-extrabold text-white">{row.starter}</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs">
                      <span className="font-mono text-cyan-300 font-bold">Professional:</span>
                      <span className="font-extrabold text-cyan-400">{row.professional}</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs">
                      <span className="font-mono text-amber-300 font-bold">Enterprise:</span>
                      <span className="font-extrabold text-amber-400">{row.enterprise}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedService(row)}
                    className="w-1/2 py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <Link
                    to="/contact"
                    search={{ service: row.id }}
                    className="w-1/2 py-2.5 px-4 rounded-xl text-xs font-extrabold bg-blue-600 hover:bg-blue-500 text-white text-center flex items-center justify-center gap-1 transition-colors"
                  >
                    Get Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ======================================================== */}
      {/* BUNDLE ESTIMATOR BAR (DYNAMIC INTERACTIVE COST CALCULATOR) */}
      {/* ======================================================== */}
      {Object.keys(selectedBundle).length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-3xl bg-slate-900/95 border border-cyan-500/60 rounded-2xl p-4 shadow-[0_10px_40px_rgba(6,182,212,0.3)] backdrop-blur-xl animate-fade-up">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                <Calculator size={22} />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white flex items-center gap-2">
                  Custom Multi-Service Bundle Selected
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-black font-mono">
                    {Object.keys(selectedBundle).length} Services
                  </span>
                </h4>
                <p className="text-xs text-slate-400">
                  Estimated Total: <span className="text-cyan-300 font-bold">${bundleTotal.toLocaleString()}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedBundle({})}
                className="px-3 py-2 rounded-xl text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                Clear Selection
              </button>
              <Link
                to="/contact"
                search={{
                  services: Object.keys(selectedBundle).join(","),
                  estimatedTotal: bundleTotal,
                }}
                className="btn-neon py-2.5 px-5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg"
              >
                Request Proposal <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ENTERPRISE CUSTOM AGREEMENT BANNER                       */}
      {/* ======================================================== */}
      <div className="glass-strong rounded-3xl p-8 md:p-12 border border-cyan-500/40 relative overflow-hidden mb-20 shadow-[0_10px_40px_rgba(6,182,212,0.15)]">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase mb-3">
              <ShieldCheck size={14} /> Custom Enterprise Retainer & SLAs
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Need Multi-Service Squads or Dedicated Hosting?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Require dedicated AI GPU hosting, custom compliance protocols (SOC2/HIPAA), air-gapped on-premise deployments, or full engineering team outsourcing? We build custom retainer agreements built for your technical roadmap.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
            <Link
              to="/contact"
              className="btn-neon py-3.5 px-6 rounded-2xl text-sm font-bold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              Request Enterprise Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SERVICE SPECIFICATION DRAWER / MODAL                      */}
      {/* ======================================================== */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="glass-strong rounded-3xl border border-slate-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute right-5 top-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
            >
              <X size={18} />
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

            {/* 3 Tier Comparison Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Starter */}
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

              {/* Professional */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-black uppercase font-mono">
                  Best Value
                </div>
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

              {/* Enterprise */}
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

      {/* ======================================================== */}
      {/* FAQ SECTION                                              */}
      {/* ======================================================== */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <HelpCircle size={14} /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-extrabold text-white">Pricing & Matrix FAQs</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="glass rounded-2xl border border-slate-800/80 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-300 ${
                    openFaq === index ? "rotate-180 text-cyan-400" : "text-slate-400"
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 pt-2 text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
