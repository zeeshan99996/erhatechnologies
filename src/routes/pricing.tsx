import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  Clock,
  Layers,
  Award,
  Cpu,
  Check,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Packages — Erha Technologies Enterprise AI & Web" },
      {
        name: "description",
        content:
          "Transparent pricing packages for AI agents, web development, mobile apps, and search optimization. Choose Basic, Standard, or Premium tiers tailored to your scale.",
      },
      { property: "og:title", content: "Pricing & Packages — Erha Technologies" },
      {
        property: "og:description",
        content:
          "Flexible Basic, Standard, and Premium packages for AI systems, software development, and growth.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/pricing" },
    ],
  }),
  component: PricingPage,
});

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  category: "ai" | "dev" | "growth";
  categoryLabel: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  priceNote?: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  accent: "cyan" | "indigo" | "emerald" | "purple";
}

const pricingPackages: PricingPackage[] = [
  // AI & AGENTIC SOLUTIONS PACKAGES
  {
    id: "ai-basic",
    name: "AI Starter",
    badge: "Basic Tier",
    category: "ai",
    categoryLabel: "AI & Agentic Solutions",
    description: "Ideal for startups and small businesses integrating smart chatbot capabilities and basic RAG workflows.",
    monthlyPrice: 499,
    annualPrice: 499,
    priceNote: "starting at $499/mo",
    accent: "cyan",
    ctaText: "Get Started with AI Starter",
    features: [
      "Single-Domain Custom AI Chatbot",
      "Retrieval-Augmented Generation (RAG) on up to 500 documents",
      "Standard LLM Integration (GPT-4o / Claude 3.5)",
      "Web Widget & Embeddable Script",
      "Up to 15,000 Chat Queries / month",
      "Basic Analytics & Usage Dashboard",
      "Email & Helpdesk Support (24h response)",
    ],
    notIncluded: [
      "Autonomous Multi-Agent Networks",
      "Custom Model Fine-Tuning",
      "Air-Gapped Private Server Deploy",
    ],
  },
  {
    id: "ai-standard",
    name: "Agentic Pro",
    badge: "Most Popular",
    popular: true,
    category: "ai",
    categoryLabel: "AI & Agentic Solutions",
    description: "Autonomous multi-agent orchestration, custom LLM fine-tuning, and API integrations for growing companies.",
    monthlyPrice: 1100,
    annualPrice: 1100,
    priceNote: "starting at $1,100/mo",
    accent: "cyan",
    ctaText: "Choose Agentic Pro",
    features: [
      "Multi-Agent Autonomous Orchestration (up to 5 agent workflows)",
      "Custom LLM Fine-Tuning & Hybrid Vector Search",
      "RAG on Unlimited Internal Documents & Vector Indexing",
      "200+ SaaS Tool Webhook & API Integrations",
      "Up to 150,000 Chat/Agent Executions / month",
      "Self-Correction & Fallback Execution Loops",
      "Real-time Telemetry & Cognitive Analytics",
      "Priority 24/7 Slack & Email Support (4h SLA)",
    ],
  },
  {
    id: "ai-premium",
    name: "Enterprise Swarm",
    badge: "Premium Tier",
    category: "ai",
    categoryLabel: "AI & Agentic Solutions",
    description: "Full-scale autonomous AI agent swarms, dedicated GPU clusters, private cloud deploy, and custom SLA.",
    monthlyPrice: 2000,
    annualPrice: 2000,
    priceNote: "starting at $2,000/mo",
    accent: "purple",
    ctaText: "Contact Enterprise Team",
    features: [
      "Unlimited Autonomous Agent Swarms & Cross-System Reasoning",
      "Dedicated Private LLM Hosting & On-Prem / Air-Gapped Deploy",
      "Domain-Specific Fine-Tuning on Proprietary Datasets",
      "Custom Voice AI & Computer Vision Pipelines",
      "Unlimited Executions & High-Throughput Cluster Scaling",
      "Dedicated AI Architect & Account Manager",
      "Custom Security Compliance (SOC2, HIPAA, GDPR)",
      "1-Hour Guaranteed SLA & 24/7 Dedicated Phone Support",
    ],
  },

  // DEVELOPMENT & SOFTWARE ENGINEERING PACKAGES
  {
    id: "dev-basic",
    name: "Web Launch",
    badge: "Basic Tier",
    category: "dev",
    categoryLabel: "Web & Software Engineering",
    description: "High-performance responsive web application or corporate site with modern UI/UX and essential integrations.",
    monthlyPrice: 499,
    annualPrice: 499,
    priceNote: "starting at $499/mo",
    accent: "indigo",
    ctaText: "Launch Your Website",
    features: [
      "Up to 8 Custom Responsive Pages",
      "Modern React / Vite / Next.js Architecture",
      "Pixel-Perfect Mobile & Desktop UI/UX",
      "Headless CMS Integration for easy content updates",
      "Core Web Vitals & Speed Optimization (95+ Lighthouse Score)",
      "SSL Certificate & Vercel / Cloudflare Deployment",
      "Standard Technical Support (30 days post-launch)",
    ],
    notIncluded: [
      "Native iOS & Android Mobile Apps",
      "Complex Multi-Tenant SaaS Billing",
      "Dedicated Microservices Cluster",
    ],
  },
  {
    id: "dev-standard",
    name: "Full-Stack SaaS & Mobile",
    badge: "Most Popular",
    popular: true,
    category: "dev",
    categoryLabel: "Web & Software Engineering",
    description: "Complete cross-platform web & mobile app suite with custom API backend, user authentication, and admin dashboard.",
    monthlyPrice: 1500,
    annualPrice: 1500,
    priceNote: "starting at $1,500/mo",
    accent: "indigo",
    ctaText: "Build Full-Stack App",
    features: [
      "Full-Stack Web App + Mobile Apps (iOS & Android via React Native / Flutter)",
      "Custom RESTful / GraphQL API Backend (Node.js / Python)",
      "Multi-Tenant User Auth, Roles & Subscriptions",
      "Stripe / PayPal Payment & Automated Billing System",
      "Interactive Admin Dashboard & Analytics",
      "Database Optimization (PostgreSQL / MongoDB / Redis)",
      "Automated CI/CD Pipeline & Zero-Downtime Deployments",
      "90 Days Dedicated Post-Launch Support & Warranty",
    ],
  },
  {
    id: "dev-premium",
    name: "Enterprise Architecture",
    badge: "Premium Tier",
    category: "dev",
    categoryLabel: "Web & Software Engineering",
    description: "End-to-end enterprise platform development, microservices transformation, cloud infrastructure, and 24/7 SLA.",
    monthlyPrice: 3000,
    annualPrice: 3000,
    priceNote: "starting at $3,000/mo",
    accent: "purple",
    ctaText: "Request Enterprise Quote",
    features: [
      "Dedicated Full-Stack & DevOps Engineering Squad",
      "High-Throughput Microservices & Event-Driven Architecture",
      "Headless Commerce & Global Multi-Currency E-Commerce",
      "Kubernetes Container Orchestration & Infrastructure-as-Code",
      "Legacy Code Refactoring & Security Penetration Patching",
      "Automated End-to-End Testing & QA Suite",
      "Dedicated Technical Product Manager",
      "24/7 Managed Infrastructure Monitoring & Guaranteed 99.99% Uptime SLA",
    ],
  },

  // SEARCH, AEO & GROWTH PACKAGES
  {
    id: "growth-basic",
    name: "SEO Essentials",
    badge: "Basic Tier",
    category: "growth",
    categoryLabel: "Search, AEO & Growth Services",
    description: "Fundamental organic search optimization and technical fixes to get your business ranking on Google.",
    monthlyPrice: 499,
    annualPrice: 499,
    priceNote: "starting at $499/mo",
    accent: "emerald",
    ctaText: "Start SEO Growth",
    features: [
      "Comprehensive Technical SEO Audit & Issue Remediation",
      "Targeted Keyword Research & Mapping (up to 30 keywords)",
      "On-Page Optimization (Titles, Meta, Headers, Internal Links)",
      "Google Search Console & GA4 Setup",
      "Monthly Keyword Ranking & Organic Traffic Reports",
      "Basic Schema Structured Data Markup",
    ],
    notIncluded: [
      "Generative Engine Optimization (AEO / ChatGPT)",
      "Paid Ad Campaign Management",
    ],
  },
  {
    id: "growth-standard",
    name: "AI Search & Omni-Growth",
    badge: "Most Popular",
    popular: true,
    category: "growth",
    categoryLabel: "Search, AEO & Growth Services",
    description: "Dominate Google SGE, ChatGPT, and Perplexity with Answer Engine Optimization alongside Google & Meta Ads.",
    monthlyPrice: 800,
    annualPrice: 800,
    priceNote: "starting at $800/mo",
    accent: "emerald",
    ctaText: "Scale Growth Now",
    features: [
      "Full Answer Engine Optimization (AEO) & Generative Engine (GEO)",
      "Brand Citation & Knowledge Graph Indexing for LLMs",
      "Google Ads (Search & Display) & Meta Ads (FB & IG) Campaign Setup",
      "High-Converting Landing Page Copywriting & A/B Testing",
      "4 High-Quality SEO & AI-Optimized Articles / month",
      "Conversion Rate Optimization (CRO) & Heatmap Analytics",
      "Bi-Weekly Growth Strategy Syncs with Growth Specialist",
    ],
  },
  {
    id: "growth-premium",
    name: "Market Dominance",
    badge: "Premium Tier",
    category: "growth",
    categoryLabel: "Search, AEO & Growth Services",
    description: "Multi-channel paid ads, viral social campaigns, automated CRM drip sequences, and guaranteed brand authority.",
    monthlyPrice: 1599,
    annualPrice: 1599,
    priceNote: "starting at $1,599/mo",
    accent: "purple",
    ctaText: "Dominate Your Market",
    features: [
      "Full-Funnel Omnichannel Marketing (Search, Social, Programmatic)",
      "Omni-Search AEO / GEO Dominance across all major AI engines",
      "Unlimited PPC & Paid Social Campaign Management",
      "Short-Form Video Production & Social Media Management",
      "HubSpot / Klaviyo CRM Automation & Drip Sequences",
      "Custom Real-time Analytics Dashboard & Attribution Modelling",
      "Dedicated Growth Director & Strategy Team",
    ],
  },
];

const faqs = [
  {
    q: "Can I customize a package or request an enterprise quote?",
    a: "Absolutely! Our Basic, Standard, and Premium packages are structured baselines. If your project requires custom integrations, specialized datasets, or unique SLAs, our team can tailor a bespoke package specific to your business needs.",
  },
  {
    q: "What is included in each package tier?",
    a: "Every package includes architecture design, core engineering, security compliance, deployment, and dedicated post-launch support tailored to your selected tier.",
  },
  {
    q: "How fast can we start after selecting a package?",
    a: "Once you choose a package and schedule an initial onboarding call, our engineering team initiates technical discovery within 24 to 48 hours. Most AI and web projects begin active development immediately.",
  },
  {
    q: "Is my proprietary data and AI model IP secure?",
    a: "Yes. Data privacy and intellectual property security are top priorities at Erha Technologies. We sign mutual NDAs, implement strict encryption at rest and in transit, and offer air-gapped private deployment options for enterprise tiers.",
  },
  {
    q: "Can we upgrade or downgrade our package tier later?",
    a: "Yes! You can scale your tier at any time as your AI or software requirements grow. Upgrades take effect immediately with pro-rated billing.",
  },
];

function PricingPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "ai" | "dev" | "growth">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredPackages = pricingPackages.filter(
    (pkg) => activeCategory === "all" || pkg.category === activeCategory
  );

  return (
    <div className="px-4 sm:px-6 py-20 md:py-28 max-w-7xl mx-auto animate-fade-up">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Sparkles size={14} className="animate-spin-slow" />
          Transparent Pricing & Tiers
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
          Flexible Packages Built for <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Scale & Impact</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Choose from our transparent Basic, Standard, and Premium packages designed for AI solutions, custom software engineering, and digital search growth.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800/80 max-w-2xl mx-auto backdrop-blur-xl">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105"
                : "text-slate-300 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            All Packages
          </button>
          <button
            onClick={() => setActiveCategory("ai")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeCategory === "ai"
                ? "bg-cyan-500 text-slate-950 font-extrabold shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105"
                : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60"
            }`}
          >
            <Bot size={15} /> AI Solutions
          </button>
          <button
            onClick={() => setActiveCategory("dev")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeCategory === "dev"
                ? "bg-indigo-500 text-white font-extrabold shadow-[0_0_20px_rgba(99,102,241,0.4)] scale-105"
                : "text-slate-300 hover:text-indigo-300 hover:bg-slate-800/60"
            }`}
          >
            <Globe size={15} /> Web & Apps
          </button>
          <button
            onClick={() => setActiveCategory("growth")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeCategory === "growth"
                ? "bg-emerald-500 text-slate-950 font-extrabold shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105"
                : "text-slate-300 hover:text-emerald-300 hover:bg-slate-800/60"
            }`}
          >
            <TrendingUp size={15} /> Search & Growth
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {filteredPackages.map((pkg) => {
          const price = pkg.monthlyPrice;

          let cardBorder = "border-slate-800/80 hover:border-slate-700";
          let badgeBg = "bg-slate-800 text-slate-300 border-slate-700";
          let buttonBg = "bg-slate-800 hover:bg-slate-700 text-white";

          if (pkg.popular) {
            cardBorder = "border-cyan-500/60 shadow-[0_10px_40px_rgba(6,182,212,0.25)] scale-[1.02] bg-slate-950/90";
            badgeBg = "bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 font-black border-cyan-400";
            buttonBg = "bg-gradient-to-r from-cyan-400 via-indigo-500 to-cyan-400 hover:opacity-90 text-slate-950 font-extrabold shadow-[0_0_25px_rgba(6,182,212,0.4)]";
          } else if (pkg.accent === "purple") {
            cardBorder = "border-purple-500/40 hover:border-purple-400/60 hover:shadow-[0_10px_35px_rgba(168,85,247,0.2)]";
            badgeBg = "bg-purple-500/20 text-purple-300 border-purple-500/40";
            buttonBg = "bg-purple-600 hover:bg-purple-500 text-white font-bold";
          } else if (pkg.accent === "indigo") {
            cardBorder = "border-indigo-500/40 hover:border-indigo-400/60 hover:shadow-[0_10px_35px_rgba(99,102,241,0.2)]";
            badgeBg = "bg-indigo-500/20 text-indigo-300 border-indigo-500/40";
            buttonBg = "bg-indigo-600 hover:bg-indigo-500 text-white font-bold";
          } else if (pkg.accent === "emerald") {
            cardBorder = "border-emerald-500/40 hover:border-emerald-400/60 hover:shadow-[0_10px_35px_rgba(16,185,129,0.2)]";
            badgeBg = "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
            buttonBg = "bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold";
          }

          return (
            <div
              key={pkg.id}
              className={`glass-strong rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 border ${cardBorder} group`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1 font-mono">
                  <Zap size={13} className="fill-current" /> Most Popular Choice
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${badgeBg}`}>
                    {pkg.badge || pkg.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{pkg.categoryLabel}</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 min-h-[48px]">
                  {pkg.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white tracking-tight">${price}</span>
                    <span className="text-slate-400 text-sm font-semibold">/ month</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 font-mono">{pkg.priceNote}</p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">Included Features:</p>
                  {pkg.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-200 leading-normal">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}

                  {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                    <div className="pt-2 border-t border-slate-800/60 mt-4 space-y-2">
                      {pkg.notIncluded.map((notFeat) => (
                        <div key={notFeat} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <span className="w-4 h-4 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-bold">×</span>
                          <span>{notFeat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action CTA */}
              <Link
                to="/contact"
                search={{ package: pkg.id }}
                className={`w-full py-3.5 px-6 rounded-2xl text-sm transition-all duration-300 flex items-center justify-center gap-2 text-center ${buttonBg}`}
              >
                {pkg.ctaText}
                <ArrowRight size={16} />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Enterprise Custom Banner */}
      <div className="glass-strong rounded-3xl p-8 md:p-12 border border-cyan-500/40 relative overflow-hidden mb-20 shadow-[0_10px_40px_rgba(6,182,212,0.15)]">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase mb-3">
              <ShieldCheck size={14} /> Need a Custom Enterprise Agreement?
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Tailored Architecture & SLA for Scale
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Require multi-region dedicated GPU hosting, custom compliance protocols (SOC2/HIPAA), or an embedded engineering squad? We build custom retainers tailored to your exact technical specifications.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
            <Link
              to="/contact"
              className="btn-neon py-3.5 px-6 rounded-2xl text-sm font-bold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              Request Custom Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <HelpCircle size={14} /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-extrabold text-white">Pricing & Package FAQs</h2>
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
