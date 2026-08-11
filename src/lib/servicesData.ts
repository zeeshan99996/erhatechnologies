import {
  Bot,
  MessageSquare,
  Workflow,
  Sparkles,
  BarChart2,
  ScanSearch,
  Mic,
  Lightbulb,
  Globe,
  Smartphone,
  ShoppingCart,
  Layers,
  Server,
  Cloud,
  Layout,
  RefreshCw,
  Search,
  TrendingUp,
  Target,
  Megaphone,
  Users,
  FileText,
  Mail,
  PieChart,
  Cpu,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";

export interface ServiceTier {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export interface DetailedService {
  id: string;
  title: string;
  shortTitle: string;
  category: "ai" | "dev" | "seo";
  categoryLabel: string;
  tagline: string;
  desc: string;
  heroHeadline: string;
  heroSubheadline: string;
  icon: any;
  accent: "cyan" | "indigo" | "emerald";
  benefits: {
    title: string;
    description: string;
    metric?: string;
  }[];
  features: string[];
  useCases: {
    title: string;
    industry: string;
    detail: string;
  }[];
  architecturePoints: string[];
  pricingTiers: {
    starter: ServiceTier;
    professional: ServiceTier;
    enterprise: ServiceTier;
  };
  faqs: {
    q: string;
    a: string;
  }[];
}

export const servicesList: DetailedService[] = [
  // ==========================================
  // AI SERVICES (8)
  // ==========================================
  {
    id: "ai-agents",
    title: "AI Agents & Autonomous Agentic Systems",
    shortTitle: "AI Agents",
    category: "ai",
    categoryLabel: "AI Services",
    tagline: "Autonomous multi-agent swarms that plan, reason, and execute complex workflows.",
    desc: "Deploy self-correcting autonomous multi-agent networks that execute end-to-end enterprise tasks without continuous human supervision.",
    heroHeadline: "Autonomous AI Agents Built for Enterprise Ops",
    heroSubheadline: "Replace manual, multi-step workflows with cognitive agent swarms that connect APIs, reason through tasks, and execute with zero delay.",
    icon: Bot,
    accent: "cyan",
    benefits: [
      {
        title: "85% Manual Ops Reduction",
        description: "Autonomous reasoning agents handle complex multi-system tasks end-to-end.",
        metric: "85% Efficiency Gain",
      },
      {
        title: "Self-Correction & Fallbacks",
        description: "Agents evaluate output validity, retry failed steps, and escalate only when necessary.",
        metric: "99.4% Task Success",
      },
      {
        title: "Tool & API Execution",
        description: "Seamlessly query SQL databases, send emails, trigger webhooks, and call custom REST endpoints.",
        metric: "200+ API Connectors",
      },
      {
        title: "Private & Air-Gapped Deploy",
        description: "Keep proprietary data secure with isolated LLMs deployed on your private cloud infrastructure.",
        metric: "SOC2 & HIPAA Ready",
      },
    ],
    features: [
      "Multi-Agent Swarm Orchestration",
      "Dynamic Goal Planning & Deconstruction",
      "Function Calling & Custom API Tooling",
      "Vector Memory (Short & Long-Term RAG)",
      "Human-in-the-Loop Supervision Controls",
      "Real-time Telemetry & Reasoning Logs",
    ],
    useCases: [
      {
        title: "Automated Lead Qualification & Booking",
        industry: "B2B SaaS & Tech",
        detail: "Agents research prospect profiles, cross-reference CRM data, craft personalized emails, and book meetings.",
      },
      {
        title: "Autonomous Financial Reconciliation",
        industry: "Fintech & E-Commerce",
        detail: "Agents pull invoices, cross-verify bank statements, flag discrepancies, and update ledger entries.",
      },
    ],
    architecturePoints: [
      "LangChain / LlamaIndex Agentic Graph Architecture",
      "Hybrid RAG Vector Store (Pinecone / Qdrant)",
      "Custom Model Router (GPT-4o, Claude 3.5 Sonnet, DeepSeek)",
      "Strict Guardrails & Audit Logging Pipeline",
    ],
    pricingTiers: {
      starter: {
        name: "Agent Starter",
        price: "$2,000",
        priceNote: "One-time setup",
        description: "Ideal for startups introducing basic single-agent workflows.",
        features: [
          "Single Autonomous Agent Workflow",
          "Zapier / Make / n8n Connectors",
          "Standard RAG Knowledge Indexing",
          "Web Widget & API Webhooks",
          "30 Days Maintenance Support",
        ],
      },
      professional: {
        name: "Agentic Pro",
        price: "$5,000",
        priceNote: "Starting package",
        popular: true,
        description: "Multi-agent network with API tool use and self-correction loops.",
        features: [
          "Up to 5 Multi-Agent Coordinated Workflows",
          "Custom Function Calling & API Tool Integration",
          "RAG Vector Memory on Unlimited Documents",
          "CRM & ERP Deep System Integration",
          "Real-Time Telemetry Dashboard",
          "90 Days Dedicated SLA & Tuning",
        ],
      },
      enterprise: {
        name: "Enterprise Swarm",
        price: "$10,000+",
        priceNote: "Custom scope",
        description: "Dedicated GPU clusters, private cloud hosting, and air-gapped security.",
        features: [
          "Unlimited Agent Swarms & Cross-System Reasoning",
          "Air-Gapped On-Premise LLM Hosting",
          "Custom Model Fine-Tuning on Datasets",
          "Dedicated AI Architect & Account Manager",
          "24/7 Managed Operations & Guaranteed SLA",
        ],
      },
    },
    faqs: [
      {
        q: "What makes AI Agents different from standard chatbots?",
        a: "Unlike chatbots that simply respond to queries, AI Agents possess autonomy. They break down high-level goals into steps, call external tools/APIs, verify their own work, and accomplish complex business tasks independently.",
      },
      {
        q: "Is my business data used to train public LLM models?",
        a: "Never. We enforce strict data privacy using zero-retention API agreements, enterprise encryption, and private air-gapped server deployments.",
      },
    ],
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots & Intelligent Assistants",
    shortTitle: "AI Chatbots",
    category: "ai",
    categoryLabel: "AI Services",
    tagline: "Context-aware conversational AI chatbots built on your company knowledge.",
    desc: "Deploy intelligent customer service and sales assistants across Web, WhatsApp, Slack, and Mobile channels.",
    heroHeadline: "Context-Aware AI Chatbots for 24/7 Engagement",
    heroSubheadline: "Transform customer experience with generative AI assistants trained on your knowledge base, documentation, and product catalogs.",
    icon: MessageSquare,
    accent: "cyan",
    benefits: [
      {
        title: "90% Instant Resolution",
        description: "Handle repetitive support tickets instantly with zero wait times.",
        metric: "Instant 24/7 Response",
      },
      {
        title: "Multi-Channel Deploy",
        description: "Single bot engine running seamlessly across Web, WhatsApp, Teams, and Mobile apps.",
        metric: "Omnichannel Support",
      },
      {
        title: "Human Escalation Sync",
        description: "Smoothly hand off complex edge cases to live customer support representatives.",
        metric: "Zero Friction Handoff",
      },
      {
        title: "Multi-Lingual Fluency",
        description: "Communicate naturally in 50+ languages with native cultural nuance.",
        metric: "50+ Languages",
      },
    ],
    features: [
      "Retrieval-Augmented Generation (RAG)",
      "Custom Brand Persona & Guardrails",
      "Multi-Channel API Widgets",
      "Live Chat Escalation & Helpdesk Sync",
      "Sentiment & Satisfaction Analytics",
      "Continuous Model Fine-Tuning Updates",
    ],
    useCases: [
      {
        title: "Customer Support Automation",
        industry: "E-Commerce & SaaS",
        detail: "Answer order tracking questions, troubleshoot issues, and manage return requests autonomously.",
      },
      {
        title: "Internal Employee Knowledge Assistant",
        industry: "Enterprise HR & Ops",
        detail: "Instant answers for company policies, benefits, onboarding documentation, and internal wikis.",
      },
    ],
    architecturePoints: [
      "OpenAI GPT-4o / Claude 3.5 Engine",
      "Vector Search Retrieval Pipeline",
      "Enterprise Encrypted Data Ingestion",
      "Sub-Second Response Latency Infrastructure",
    ],
    pricingTiers: {
      starter: {
        name: "Bot Starter",
        price: "$1,500",
        priceNote: "One-time setup",
        description: "Single-domain chatbot for websites and landing pages.",
        features: [
          "Single-Domain Embedded Web Chatbot",
          "RAG Search on up to 500 Documents",
          "Standard Brand Guardrails & Prompt Tuning",
          "Up to 15,000 Chat Queries / month",
          "Usage Analytics Dashboard",
        ],
      },
      professional: {
        name: "Omni-Bot Pro",
        price: "$3,500",
        priceNote: "Starting package",
        popular: true,
        description: "Multi-channel bot for Web, WhatsApp, and CRM ticketing.",
        features: [
          "Multi-Channel Bot (Web, WhatsApp, Slack, Teams)",
          "RAG Vector Search on Unlimited Documents",
          "Live CRM & Helpdesk Ticket Escalation",
          "Up to 150,000 Chat Queries / month",
          "Custom Brand Persona & Security Guardrails",
          "Priority 24/7 Support & Updates",
        ],
      },
      enterprise: {
        name: "Enterprise Bot Cluster",
        price: "$8,000+",
        priceNote: "Custom scope",
        description: "Custom fine-tuned models, voice integration, and dedicated server hosting.",
        features: [
          "Custom Fine-Tuned Model on Proprietary Data",
          "On-Premise / Air-Gapped Private Hosting",
          "Voice AI & Multimodal Image Processing",
          "Unlimited Chat Executions & High Throughput",
          "1-Hour Guaranteed SLA & AI Architect",
        ],
      },
    },
    faqs: [
      {
        q: "Can the chatbot integrate with our current CRM or helpdesk?",
        a: "Yes! We integrate with HubSpot, Zendesk, Salesforce, Intercom, Freshdesk, and custom internal APIs.",
      },
    ],
  },
  {
    id: "workflow-automation",
    title: "AI Integration & Workflow Automation",
    shortTitle: "Workflow Automation",
    category: "ai",
    categoryLabel: "AI Services",
    tagline: "Automate complex enterprise operations across 200+ SaaS platforms.",
    desc: "Connect your software ecosystem with intelligent RPA, automated document parsing, and trigger pipelines.",
    heroHeadline: "Hyper-Automation for Enterprise Workflows",
    heroSubheadline: "Eliminate repetitive manual data entry, invoice processing, and cross-platform sync with AI-driven automation pipelines.",
    icon: Workflow,
    accent: "cyan",
    benefits: [
      {
        title: "Zero Manual Errors",
        description: "Automated pipelines extract, transform, and validate data with 99.9% accuracy.",
        metric: "99.9% Data Accuracy",
      },
      {
        title: "200+ System Integrations",
        description: "Connect legacy databases, cloud platforms, CRMs, and ERP systems seamlessly.",
        metric: "Instant API Sync",
      },
      {
        title: "Real-time Event Triggers",
        description: "Workflows execute instantly when webhooks, emails, or data changes occur.",
        metric: "Sub-Second Triggering",
      },
    ],
    features: [
      "Custom n8n / Zapier / Make Pipelines",
      "Automated OCR & Document Parsing",
      "API Webhook Transformation Engine",
      "Error Alerting & Automatic Retries",
      "Audit Trail & Execution Dashboards",
    ],
    useCases: [
      {
        title: "Automated Invoice & PO Extraction",
        industry: "Logistics & Supply Chain",
        detail: "Extract PDF invoice details automatically and push structured data directly to SAP/NetSuite.",
      },
    ],
    architecturePoints: [
      "Event-Driven Microservices Architecture",
      "Secure Encrypted Webhook Relays",
      "Continuous Monitoring & Failover Control",
    ],
    pricingTiers: {
      starter: {
        name: "Automation Starter",
        price: "$2,000",
        priceNote: "One-time setup",
        description: "Up to 3 core workflow pipelines for small teams.",
        features: [
          "Up to 3 Automated Workflow Pipelines",
          "Zapier / Make / n8n Integration",
          "Standard Webhook & API Connectors",
          "Data Scraping & Automated Formatting",
          "30 Days Maintenance Support",
        ],
      },
      professional: {
        name: "Automation Pro",
        price: "$5,000",
        priceNote: "Starting package",
        popular: true,
        description: "Advanced autonomous workflows with self-correction and custom scripts.",
        features: [
          "Up to 10 Autonomous Workflow Pipelines",
          "Custom Python / Node.js AI Automation Scripts",
          "Self-Correction & Fallback Execution",
          "Internal Dashboard for Execution Logs",
          "CRM & ERP Deep System Integration",
          "90 Days Dedicated Support & SLA",
        ],
      },
      enterprise: {
        name: "Enterprise Automation",
        price: "$10,000+",
        priceNote: "Custom scope",
        description: "Enterprise RPA, air-gapped pipelines, and 24/7 dedicated support.",
        features: [
          "Unlimited Complex Multi-App Workflows",
          "Dedicated Air-Gapped / On-Prem Infrastructure",
          "Custom Machine Learning Models",
          "Continuous Monitoring & Failover Control",
          "24/7 Managed Automation Squad",
        ],
      },
    },
    faqs: [
      {
        q: "How long does a typical workflow automation project take?",
        a: "Most workflow automation pipelines are built, tested, and deployed within 1 to 3 weeks.",
      },
    ],
  },
  {
    id: "generative-ai-llm",
    title: "Generative AI, Custom LLMs & RAG",
    shortTitle: "Custom LLMs & RAG",
    category: "ai",
    categoryLabel: "AI Services",
    tagline: "Custom LLM fine-tuning, domain adaptation, and hybrid vector search.",
    desc: "Build proprietary domain-specific generative models trained strictly on your organization's data assets.",
    heroHeadline: "Proprietary Generative AI Built for Your Domain",
    heroSubheadline: "Fine-tune open-source models (Llama 3, Mistral) or deploy hybrid RAG systems for domain expertise.",
    icon: Sparkles,
    accent: "cyan",
    benefits: [
      {
        title: "Domain Precision",
        description: "Fine-tuned models understand legal, medical, financial, or engineering jargon perfectly.",
        metric: "Domain Superiority",
      },
      {
        title: "Full IP Ownership",
        description: "You own 100% of the fine-tuned model weights and proprietary datasets.",
        metric: "100% IP Rights",
      },
    ],
    features: [
      "Custom LoRA & QLoRA Model Fine-Tuning",
      "Hybrid Vector & Lexical RAG Search",
      "Domain Dataset Curation & Cleaning",
      "Model Evaluation Benchmarks",
    ],
    useCases: [
      {
        title: "Legal Contract Analysis Model",
        industry: "Legal & Compliance",
        detail: "Analyze 500-page contracts in seconds to highlight risks, non-standard clauses, and liabilities.",
      },
    ],
    architecturePoints: [
      "PyTorch & HuggingFace Fine-Tuning Framework",
      "Milvus / Qdrant High-Density Vector Stores",
      "Quantized Model Deployment (vLLM / Ollama)",
    ],
    pricingTiers: {
      starter: {
        name: "RAG Foundation",
        price: "$3,000",
        priceNote: "One-time setup",
        description: "Production RAG implementation on structured document libraries.",
        features: [
          "Hybrid RAG Search Implementation",
          "Up to 2,000 Documents Vectorized",
          "Standard LLM Integration (GPT-4o)",
          "Embeddable API & UI Widget",
        ],
      },
      professional: {
        name: "Custom LLM Pro",
        price: "$7,500",
        priceNote: "Starting package",
        popular: true,
        description: "Model fine-tuning on domain data + hybrid RAG architecture.",
        features: [
          "Custom LLM Fine-Tuning (Llama 3 / Mistral)",
          "Hybrid Vector Search & Knowledge Graph",
          "Dataset Cleaning & Curation Pipelines",
          "Custom API Middleware & Dashboard",
          "90 Days Support & Retraining SLA",
        ],
      },
      enterprise: {
        name: "Enterprise Model Suite",
        price: "$15,000+",
        priceNote: "Custom scope",
        description: "Private GPU cluster deployment, continuous fine-tuning, and air-gapped security.",
        features: [
          "Dedicated Private GPU Hosting (A100/H100)",
          "Continuous Data Ingestion & Model Training",
          "Air-Gapped On-Premises Installation",
          "Dedicated AI Research Lead & SLA",
        ],
      },
    },
    faqs: [
      {
        q: "What is the difference between RAG and Fine-Tuning?",
        a: "RAG provides real-time access to fresh documents (like an open-book test), while Fine-Tuning alters the model's fundamental writing style and domain vocabulary (like studying for a degree). We often combine both for maximum accuracy.",
      },
    ],
  },
  {
    id: "predictive-ml",
    title: "Machine Learning & Predictive AI",
    shortTitle: "Predictive ML",
    category: "ai",
    categoryLabel: "AI Services",
    tagline: "Custom ML models for forecasting, churn prediction, and anomaly detection.",
    desc: "Turn raw historical data into actionable predictive insights with custom machine learning pipelines.",
    heroHeadline: "Predictive Intelligence for Strategic Operations",
    heroSubheadline: "Forecast demand, detect fraud before it happens, and optimize pricing dynamically using enterprise ML models.",
    icon: BarChart2,
    accent: "cyan",
    benefits: [
      {
        title: "Predictive Foresight",
        description: "Forecast sales demand, inventory needs, and market trends months in advance.",
        metric: "94% Forecast Accuracy",
      },
    ],
    features: [
      "Time-Series Sales & Demand Forecasting",
      "Customer Churn Prediction Models",
      "Fraud & Anomaly Detection",
      "Dynamic Pricing Engines",
    ],
    useCases: [
      {
        title: "E-Commerce Inventory Forecasting",
        industry: "Retail & E-Commerce",
        detail: "Prevent stockouts and overstock costs with SKU-level predictive demand modeling.",
      },
    ],
    architecturePoints: [
      "XGBoost, Scikit-Learn & TensorFlow Pipelines",
      "Automated Feature Engineering Engine",
      "MLflow Model Versioning & Monitoring",
    ],
    pricingTiers: {
      starter: {
        name: "ML Proof-of-Concept",
        price: "$3,500",
        priceNote: "One-time setup",
        description: "Validation model built on historical company dataset.",
        features: [
          "Single Predictive ML Model Development",
          "Data Cleaning & Feature Engineering",
          "Accuracy & Performance Benchmark Report",
          "REST API Endpoint Deployment",
        ],
      },
      professional: {
        name: "Predictive ML Pro",
        price: "$8,000",
        priceNote: "Starting package",
        popular: true,
        description: "Full production ML pipeline with automated retraining.",
        features: [
          "Up to 3 Production Predictive Models",
          "Automated ETL & Feature Pipelines",
          "Real-time Scoring & Prediction API",
          "Analytics & Alerting Dashboard",
          "90 Days MLOps Support & Monitoring",
        ],
      },
      enterprise: {
        name: "Enterprise ML Engine",
        price: "$18,000+",
        priceNote: "Custom scope",
        description: "High-frequency real-time ML clusters with continuous learning.",
        features: [
          "Enterprise ML Infrastructure & Feature Store",
          "Real-Time High-Throughput Inference Cluster",
          "Continuous Automated Model Retraining",
          "Dedicated Data Scientist Squad",
        ],
      },
    },
    faqs: [
      {
        q: "What data is required to build a predictive ML model?",
        a: "We typically require historical dataset logs (e.g. CSVs, SQL database tables, or CRM export records) covering 6 to 24 months of activity.",
      },
    ],
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Document AI",
    shortTitle: "Computer Vision",
    category: "ai",
    categoryLabel: "AI Services",
    tagline: "Automate visual inspection, document parsing, and video analytics.",
    desc: "Extract actionable data from images, video streams, blueprints, and unstructured documents with state-of-the-art visual models.",
    heroHeadline: "Visual Intelligence for Automated Inspection & OCR",
    heroSubheadline: "Automate quality control in manufacturing, parse complex medical/financial documents, and monitor live video feeds.",
    icon: ScanSearch,
    accent: "cyan",
    benefits: [
      {
        title: "Visual Processing Speed",
        description: "Process thousands of images or document pages per minute automatically.",
        metric: "1,000+ Pages / Min",
      },
    ],
    features: [
      "Custom OCR & Table Extraction",
      "Real-Time Object Detection & Tracking",
      "Defect Detection in Manufacturing",
      "Facial & Spatial Analytics",
    ],
    useCases: [
      {
        title: "Automated Blueprint & Schema Parsing",
        industry: "Construction & Engineering",
        detail: "Extract material specs, dimensions, and structural notes automatically from CAD PDFs.",
      },
    ],
    architecturePoints: [
      "YOLOv8 & OpenCV Video Processing Pipeline",
      "Transformer OCR Models (PaddleOCR / TrOCR)",
      "GPU-Accelerated Inference Clusters",
    ],
    pricingTiers: {
      starter: {
        name: "Vision Starter",
        price: "$2,500",
        priceNote: "One-time setup",
        description: "Document parsing or simple image classification pipeline.",
        features: [
          "Single Vision Model / Document Parser",
          "Structured JSON Output API",
          "Standard Accuracy Tuning",
          "30 Days Maintenance Support",
        ],
      },
      professional: {
        name: "Vision & OCR Pro",
        price: "$6,000",
        priceNote: "Starting package",
        popular: true,
        description: "Multi-class object detection or complex document parsing suite.",
        features: [
          "Custom Object Detection / Video Stream Model",
          "Advanced Table & Unstructured PDF OCR Parser",
          "Real-Time Processing Dashboard",
          "High-Throughput API Gateway",
          "90 Days Support & Model Tuning",
        ],
      },
      enterprise: {
        name: "Enterprise Vision Suite",
        price: "$12,000+",
        priceNote: "Custom scope",
        description: "Multi-camera live CCTV stream processing and industrial hardware deployment.",
        features: [
          "Multi-Stream Edge / Cloud Video Analytics",
          "Custom Deep Learning Architecture",
          "On-Premise Industrial GPU Deploy",
          "Dedicated Computer Vision Squad",
        ],
      },
    },
    faqs: [
      {
        q: "Can the OCR parse handwritten text or scanned PDFs?",
        a: "Yes! Our visual document AI parses low-resolution scans, rotated documents, and handwritten annotations with high precision.",
      },
    ],
  },
  {
    id: "voice-ai",
    title: "Voice AI Agents & Speech Automation",
    shortTitle: "Voice AI",
    category: "ai",
    categoryLabel: "AI Services",
    tagline: "Natural-sounding voice AI agents that handle phone calls and speech workflows.",
    desc: "Deploy voice agents capable of handling inbound customer calls, booking appointments, and conducting outbound follow-ups.",
    heroHeadline: "Human-Like Voice AI for Phone & Speech Ops",
    heroSubheadline: "Automate phone support, appointment scheduling, and outbound call campaigns with sub-500ms voice response latency.",
    icon: Mic,
    accent: "cyan",
    benefits: [
      {
        title: "Sub-500ms Response",
        description: "Zero awkward pauses—Voice AI responds naturally just like a human representative.",
        metric: "<500ms Latency",
      },
    ],
    features: [
      "Real-Time Speech-to-Text (STT) & Text-to-Speech (TTS)",
      "Sub-Second Conversational Response Latency",
      "Telephony Integration (Twilio / Vapi / Retell)",
      "Live Call Transfer & CRM Sync",
    ],
    useCases: [
      {
        title: "24/7 Inbound Dental Clinic Booking",
        industry: "Healthcare & Clinics",
        detail: "Voice agent answers calls after-hours, checks calendar availability, and books appointments.",
      },
    ],
    architecturePoints: [
      "Whisper / Deepgram Speech Recognition",
      "ElevenLabs / Cartesia Ultra-Fast Voice Synthesis",
      "WebSockets Low-Latency Pipeline",
    ],
    pricingTiers: {
      starter: {
        name: "Voice Starter",
        price: "$2,500",
        priceNote: "One-time setup",
        description: "Single inbound phone agent for basic FAQ and booking.",
        features: [
          "Single Inbound Voice Agent",
          "Twilio / Telephony Setup",
          "Up to 5,000 Voice Minutes / month",
          "Standard Voice Synthesis Engine",
          "30 Days Maintenance Support",
        ],
      },
      professional: {
        name: "Voice Agent Pro",
        price: "$5,500",
        priceNote: "Starting package",
        popular: true,
        description: "Inbound & outbound voice agent suite with live call transfers.",
        features: [
          "Inbound & Outbound Dual Voice Agents",
          "Live Call Transfer to Human Operators",
          "Custom Voice Branding & ElevenLabs Engine",
          "CRM Calendar Sync (Google/Outlook/HubSpot)",
          "Up to 25,000 Voice Minutes / month",
          "90 Days Support & SLA",
        ],
      },
      enterprise: {
        name: "Enterprise Voice Telephony",
        price: "$12,000+",
        priceNote: "Custom scope",
        description: "High-volume call center automation with dedicated SIP trunks.",
        features: [
          "High-Throughput Concurrent Call Channels",
          "Dedicated SIP Trunk & PBX Server Connectors",
          "Custom Voice Cloning & Acoustic Fine-Tuning",
          "24/7 Managed Telephony Squad & SLA",
        ],
      },
    },
    faqs: [
      {
        q: "Does the voice agent sound robotic?",
        a: "Not at all. We utilize ultra-realistic voice synthesis models that include natural breathing, inflections, and conversational pauses.",
      },
    ],
  },
  {
    id: "ai-consulting",
    title: "AI Strategy & Transformation Advisory",
    shortTitle: "AI Consulting",
    category: "ai",
    categoryLabel: "AI Services",
    tagline: "Strategic AI advisory to help enterprises roadmap and execute high-ROI initiatives.",
    desc: "Work with senior AI architects to evaluate tech stacks, conduct AI readiness audits, and design production roadmaps.",
    heroHeadline: "Strategic AI Advisory for Executive Leadership",
    heroSubheadline: "Bridge the gap between AI hype and real enterprise ROI with custom architecture roadmaps and feasibility studies.",
    icon: Lightbulb,
    accent: "cyan",
    benefits: [
      {
        title: "Guaranteed ROI Focus",
        description: "Identify high-value use cases that generate measurable business ROI within 90 days.",
        metric: "Clear ROI Blueprint",
      },
    ],
    features: [
      "Enterprise AI Readiness & Security Audit",
      "High-ROI Use Case Prioritization Matrix",
      "Vendor & Architecture Evaluation",
      "Prototype & Proof-of-Concept Strategy",
    ],
    useCases: [
      {
        title: "Executive AI Roadmap & Tech Audit",
        industry: "Enterprise & Financial Services",
        detail: "Audit current infrastructure and map out 3-year AI transformation steps.",
      },
    ],
    architecturePoints: [
      "Custom Enterprise Architecture Documentation",
      "Security & Compliance Matrix (SOC2, GDPR, HIPAA)",
      "Vendor Benchmark Comparisons",
    ],
    pricingTiers: {
      starter: {
        name: "Discovery Audit",
        price: "$1,500",
        priceNote: "One-time engagement",
        description: "Technical discovery and AI opportunity audit.",
        features: [
          "2-Week AI Readiness Audit",
          "Current Tech Stack Evaluation",
          "Top 3 High-ROI Use Cases Report",
          "Executive Architecture Briefing",
        ],
      },
      professional: {
        name: "Transformation Blueprint",
        price: "$4,000",
        priceNote: "4-week sprint",
        popular: true,
        description: "Complete technical roadmap + PoC architecture specification.",
        features: [
          "4-Week Comprehensive Strategy Engagement",
          "Detailed Data Pipeline & Security Audit",
          "PoC System Architecture Specification",
          "Vendor & Model Benchmark Testing",
          "Executive Boardroom Presentation",
        ],
      },
      enterprise: {
        name: "Fractional AI Officer",
        price: "$9,000+",
        priceNote: "Monthly advisory retainer",
        description: "Ongoing advisory & lead architect guidance for executive teams.",
        features: [
          "Dedicated Fractional Chief AI Officer",
          "Weekly Strategy & Architecture Reviews",
          "Vendor Negotiation & Oversight",
          "Continuous AI Engineering Guidance",
        ],
      },
    },
    faqs: [
      {
        q: "What deliverables will we receive from an AI strategy engagement?",
        a: "You receive a comprehensive AI Technical Roadmap document, architecture diagrams, data security compliance checklists, and vendor cost estimates.",
      },
    ],
  },

  // ==========================================
  // DEVELOPMENT SERVICES (8)
  // ==========================================
  {
    id: "web-development",
    title: "Web Development & Enterprise Applications",
    shortTitle: "Web Development",
    category: "dev",
    categoryLabel: "Development Services",
    tagline: "Engineering-first web applications built with modern React, Next.js & Node.",
    desc: "Build high-speed, pixel-perfect web applications, customer portals, and corporate websites designed for performance and scale.",
    heroHeadline: "High-Performance Web Applications & Portals",
    heroSubheadline: "Engineered with modern frameworks (React, Vite, Next.js), headless CMS, and global cloud CDN infrastructure.",
    icon: Globe,
    accent: "indigo",
    benefits: [
      {
        title: "95+ Lighthouse Speed",
        description: "Blazing fast load times for maximum conversion and Google search ranking.",
        metric: "Sub-Second Page Loads",
      },
      {
        title: "Pixel-Perfect Responsive UI",
        description: "Flawless user experience across mobile phones, tablets, and desktop displays.",
        metric: "100% Mobile Ready",
      },
    ],
    features: [
      "Modern React / Next.js / Vite Stack",
      "Pixel-Perfect Tailwind CSS System",
      "Headless CMS (Strapi / Sanity)",
      "Core Web Vitals Optimization (95+)",
      "Vercel / Cloudflare Global CDNs",
    ],
    useCases: [
      {
        title: "Custom B2B Customer Portal",
        industry: "SaaS & Enterprise",
        detail: "Build secure client dashboards for document sharing, invoicing, and service tracking.",
      },
    ],
    architecturePoints: [
      "React 19 / TypeScript Clean Architecture",
      "Edge Serverless API Functions",
      "Global CDN Caching System",
    ],
    pricingTiers: {
      starter: {
        name: "Web Launch",
        price: "$500",
        priceNote: "One-time build",
        description: "Responsive website or landing page for small businesses.",
        features: [
          "Up to 5 Custom Responsive Pages",
          "Modern React / Tailwind Architecture",
          "Contact Form & Essential Integrations",
          "Basic Technical SEO & Meta Tags",
          "SSL Certificate & Vercel Deploy",
        ],
      },
      professional: {
        name: "Web App Pro",
        price: "$2,000",
        priceNote: "Starting package",
        popular: true,
        description: "Custom web app or corporate site with headless CMS.",
        features: [
          "Up to 15 Pages or Custom Web App",
          "Headless CMS (Sanity / Strapi / Contentful)",
          "Dynamic Micro-Animations & Interactivity",
          "Core Web Vitals Speed Optimization (95+)",
          "30 Days Post-Launch Support & Warranty",
        ],
      },
      enterprise: {
        name: "Enterprise Portal",
        price: "$5,000+",
        priceNote: "Custom scope",
        description: "Bespoke high-volume web portal with custom database backend.",
        features: [
          "Bespoke High-Scale Enterprise Web Portal",
          "High-Volume E-Commerce Architecture",
          "Custom API Integrations & Database Sync",
          "Infrastructure-as-Code & Multi-CDN Deploy",
          "Dedicated Web Lead & SLA Guarantee",
        ],
      },
    },
    faqs: [
      {
        q: "Will I be able to update content on the site myself?",
        a: "Yes! We integrate headless CMS tools like Sanity or Strapi so your team can easily update text, images, and blog posts without touching code.",
      },
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile & Cross-Platform App Development",
    shortTitle: "Mobile Apps",
    category: "dev",
    categoryLabel: "Development Services",
    tagline: "Native-quality iOS & Android mobile applications built with Flutter / React Native.",
    desc: "Build engaging cross-platform mobile applications with offline storage, real-time push notifications, and biometric authentication.",
    heroHeadline: "Cross-Platform Mobile Apps for iOS & Android",
    heroSubheadline: "Deliver seamless mobile experiences built with Flutter or React Native to launch on Apple App Store & Google Play faster.",
    icon: Smartphone,
    accent: "indigo",
    benefits: [
      {
        title: "Single Codebase Efficiency",
        description: "Launch on both iOS and Android simultaneously, cutting dev costs by 40%.",
        metric: "Dual Store Launch",
      },
    ],
    features: [
      "React Native & Flutter Frameworks",
      "Native iOS (Swift) & Android (Kotlin) Modules",
      "Push Notifications & In-App Purchases",
      "Biometric Login & Offline Data Sync",
    ],
    useCases: [
      {
        title: "On-Demand Delivery Mobile App",
        industry: "Logistics & Services",
        detail: "Real-time GPS order tracking, driver dispatch, and instant mobile payments.",
      },
    ],
    architecturePoints: [
      "Cross-Platform Native Bridge Architecture",
      "SQLite / WatermelonDB Local Database",
      "Firebase / OneSignal Push Engine",
    ],
    pricingTiers: {
      starter: {
        name: "Mobile MVP",
        price: "$1,500",
        priceNote: "One-time setup",
        description: "Core mobile MVP for single platform or baseline features.",
        features: [
          "Core Mobile MVP App",
          "Cross-Platform Flutter / React Native",
          "Basic User Auth & Profile Screens",
          "Apple & Google Play Store Submission",
          "30 Days Maintenance Support",
        ],
      },
      professional: {
        name: "Full Mobile App",
        price: "$4,500",
        priceNote: "Starting package",
        popular: true,
        description: "Full production iOS & Android app suite with API backend.",
        features: [
          "Full Cross-Platform iOS & Android App",
          "Custom API Backend & Real-time Database",
          "Push Notifications & Payment Gateways",
          "Admin Portal & Analytics",
          "90 Days Post-Launch Warranty",
        ],
      },
      enterprise: {
        name: "Enterprise Mobile Suite",
        price: "$10,000+",
        priceNote: "Custom scope",
        description: "High-scale mobile platform with offline sync and custom hardware access.",
        features: [
          "High-Throughput Mobile App & Microservices",
          "Offline-First Architecture & Biometrics",
          "Custom On-Device Machine Learning Models",
          "Dedicated Mobile Squad & SLA",
        ],
      },
    },
    faqs: [
      {
        q: "Do you handle publishing the app to the Apple App Store and Google Play Store?",
        a: "Yes! We manage the entire submission, app store optimization (ASO), and approval review process.",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Development & Commerce Solutions",
    shortTitle: "E-Commerce",
    category: "dev",
    categoryLabel: "Development Services",
    tagline: "High-converting online stores & headless commerce architectures.",
    desc: "Engineering custom Shopify, WooCommerce, or Headless Next.js storefronts optimized for maximum conversion rate and sales.",
    heroHeadline: "High-Conversion E-Commerce Stores & Headless Shops",
    heroSubheadline: "Scale your retail business with custom storefronts, multi-currency checkout, automated inventory sync, and fast page speeds.",
    icon: ShoppingCart,
    accent: "indigo",
    benefits: [
      {
        title: "Higher Checkout Conversions",
        description: "Optimized 1-click checkout flows designed to minimize abandoned carts.",
        metric: "+35% Conversion Boost",
      },
    ],
    features: [
      "Headless Shopify / Next.js Commerce",
      "WooCommerce Custom Theme Development",
      "Stripe, PayPal & Local Payment Gateways",
      "Real-time Inventory & Shipping API Sync",
    ],
    useCases: [
      {
        title: "Global D2C Fashion Brand Storefront",
        industry: "Retail & E-Commerce",
        detail: "Headless store with sub-second page transitions and multi-currency checkout.",
      },
    ],
    architecturePoints: [
      "Next.js Commerce / Shopify Storefront API",
      "Stripe Elements & Custom Checkout Nodes",
      "Klaviyo Abandoned Cart Automation Integrations",
    ],
    pricingTiers: {
      starter: {
        name: "Commerce Starter",
        price: "$800",
        priceNote: "One-time setup",
        description: "Standard online store setup for small product catalogs.",
        features: [
          "Up to 50 Product Listings Setup",
          "Custom Shopify or WooCommerce Store",
          "Standard Payment & Shipping Setup",
          "Mobile Responsive Design",
          "30 Days Maintenance Support",
        ],
      },
      professional: {
        name: "Commerce Pro",
        price: "$2,500",
        priceNote: "Starting package",
        popular: true,
        description: "Custom storefront with advanced filtering, subscriptions, and CRM sync.",
        features: [
          "Bespoke Store Design (No Clunky Themes)",
          "Headless Shopify / Next.js Architecture",
          "Multi-Currency & Subscription Billing",
          "Custom Inventory & ERP Integration",
          "90 Days Support & Conversion Tuning",
        ],
      },
      enterprise: {
        name: "Enterprise Commerce",
        price: "$7,000+",
        priceNote: "Custom scope",
        description: "High-volume global multi-storefront architecture.",
        features: [
          "Global Multi-Region E-Commerce Network",
          "Custom Warehouse & Logistics API Pipeline",
          "Dedicated Infrastructure & 99.99% Uptime",
          "Dedicated E-Commerce Architect",
        ],
      },
    },
    faqs: [
      {
        q: "What platform do you recommend: Shopify, WooCommerce, or Headless?",
        a: "For most growing brands, Shopify or Headless Next.js offers the best balance of speed, security, and conversion performance.",
      },
    ],
  },
  {
    id: "saas-engineering",
    title: "Custom SaaS & Product Development",
    shortTitle: "SaaS Development",
    category: "dev",
    categoryLabel: "Development Services",
    tagline: "End-to-end SaaS product engineering from MVP to enterprise scale.",
    desc: "Build multi-tenant B2B SaaS platforms complete with user authentication, role-based access, automated billing, and admin dashboards.",
    heroHeadline: "Complete SaaS Product Engineering",
    heroSubheadline: "Transform your software product vision into a scalable, production-ready SaaS application with multi-tenant security.",
    icon: Layers,
    accent: "indigo",
    benefits: [
      {
        title: "Multi-Tenant Scalability",
        description: "Isolated tenant data security with shared microservices cost efficiency.",
        metric: "Architected for Scale",
      },
    ],
    features: [
      "Multi-Tenant User Architecture",
      "Stripe Subscription & Tiered Billing",
      "Role-Based Access Control (RBAC)",
      "Interactive Admin Portals & Telemetry",
    ],
    useCases: [
      {
        title: "B2B Medical Practice SaaS Platform",
        industry: "Healthcare SaaS",
        detail: "HIPAA-compliant multi-tenant platform for patient scheduling and electronic health records.",
      },
    ],
    architecturePoints: [
      "Node.js / Python FastAPI Backend",
      "PostgreSQL Multi-Tenant Row Level Security (RLS)",
      "Docker & Kubernetes Microservices",
    ],
    pricingTiers: {
      starter: {
        name: "SaaS MVP",
        price: "$5,000",
        priceNote: "One-time build",
        description: "Core SaaS MVP architecture for early-stage validation.",
        features: [
          "Core SaaS MVP Architecture",
          "User Authentication & Role Management",
          "Stripe / PayPal Subscription Billing",
          "Responsive Modern React / Next.js UI",
          "PostgreSQL / Supabase Database Setup",
        ],
      },
      professional: {
        name: "SaaS Pro Platform",
        price: "$15,000",
        priceNote: "Starting package",
        popular: true,
        description: "Full production multi-tenant SaaS platform ready for scale.",
        features: [
          "Full Production Multi-Tenant Platform",
          "Advanced Admin Portal & User Analytics",
          "Microservices Backend (Node.js/Python)",
          "Automated CI/CD Pipeline & Staging",
          "Comprehensive End-to-End Test Suite",
          "90 Days Warranty & Dedicated Support",
        ],
      },
      enterprise: {
        name: "Enterprise Architecture",
        price: "$30,000+",
        priceNote: "Custom scope",
        description: "High-throughput microservices, DevOps squad, and custom SLAs.",
        features: [
          "High-Throughput Microservices & Event Architecture",
          "Kubernetes Container Orchestration & IaC",
          "Dedicated DevOps & Solutions Architect Squad",
          "Custom Security Compliance (SOC2 / HIPAA)",
          "Guaranteed 99.99% Uptime & 24/7 SLA",
        ],
      },
    },
    faqs: [
      {
        q: "Do you sign NDAs before discussing proprietary SaaS ideas?",
        a: "Yes, we sign strict mutual non-disclosure agreements (NDAs) prior to technical discovery.",
      },
    ],
  },
  {
    id: "backend-api",
    title: "Backend, API & Microservices Engineering",
    shortTitle: "Backend & APIs",
    category: "dev",
    categoryLabel: "Development Services",
    tagline: "High-throughput RESTful / GraphQL API architectures & microservices.",
    desc: "Engineered backends designed for high-concurrency traffic, real-time webhooks, and secure system interoperability.",
    heroHeadline: "Robust Backend APIs Built for Concurrency",
    heroSubheadline: "Power your web and mobile applications with high-throughput API endpoints, Redis caching, and microservices.",
    icon: Server,
    accent: "indigo",
    benefits: [
      {
        title: "Sub-50ms API Latency",
        description: "Optimized database indexing and caching for instant data retrieval.",
        metric: "<50ms Latency",
      },
    ],
    features: [
      "RESTful & GraphQL API Gateways",
      "Node.js, Go & Python FastAPI Backends",
      "Redis Caching & Queue Processing",
      "OAuth2 & JWT Security Protocols",
    ],
    useCases: [
      {
        title: "High-Traffic FinTech API Gateway",
        industry: "Fintech",
        detail: "Process millions of daily transactions with zero-downtime microservices.",
      },
    ],
    architecturePoints: [
      "Go / Node.js Microservice Nodes",
      "Redis Distributed Caching Engine",
      "PostgreSQL Query Optimization",
    ],
    pricingTiers: {
      starter: {
        name: "API Starter",
        price: "$1,200",
        priceNote: "One-time setup",
        description: "Basic RESTful API backend for mobile or web apps.",
        features: [
          "RESTful API Endpoint Development",
          "PostgreSQL / MongoDB Schema Design",
          "JWT Auth & Security Middleware",
          "Swagger API Documentation",
        ],
      },
      professional: {
        name: "Microservices Pro",
        price: "$3,500",
        priceNote: "Starting package",
        popular: true,
        description: "High-throughput API backend with Redis caching and queues.",
        features: [
          "GraphQL & REST API Microservices",
          "Redis Caching & Background Queues",
          "OAuth2 Third-Party System Connectors",
          "Automated Load & Unit Test Suite",
          "90 Days SLA Maintenance",
        ],
      },
      enterprise: {
        name: "Enterprise Core Backend",
        price: "$8,500+",
        priceNote: "Custom scope",
        description: "High-concurrency distributed backend with 99.99% uptime.",
        features: [
          "Distributed Multi-Region Backend Cluster",
          "Event-Driven Kafka / RabbitMQ Streams",
          "Dedicated Database Administrator & SLA",
        ],
      },
    },
    faqs: [
      {
        q: "What backend languages do you specialize in?",
        a: "We specialize in Node.js (TypeScript), Python (FastAPI/Django), and Go for ultra-high throughput microservices.",
      },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud, DevOps & Infrastructure Engineering",
    shortTitle: "Cloud & DevOps",
    category: "dev",
    categoryLabel: "Development Services",
    tagline: "Automated CI/CD, Kubernetes orchestration, and cloud infrastructure.",
    desc: "Migrate to cloud-native infrastructure on AWS, GCP, or Azure with Infrastructure-as-Code (Terraform) and zero-downtime deployments.",
    heroHeadline: "Cloud Infrastructure & Zero-Downtime DevOps",
    heroSubheadline: "Scale your cloud infrastructure with Kubernetes, automated CI/CD deployment pipelines, and 24/7 uptime monitoring.",
    icon: Cloud,
    accent: "indigo",
    benefits: [
      {
        title: "99.99% Uptime Guarantee",
        description: "High-availability multi-region cluster setup with auto-healing.",
        metric: "99.99% Guaranteed",
      },
    ],
    features: [
      "Kubernetes & Docker Containerization",
      "Infrastructure-as-Code (Terraform)",
      "Automated GitHub Actions / GitLab CI/CD",
      "AWS / Google Cloud / Azure Architecture",
    ],
    useCases: [
      {
        title: "Kubernetes Migration & Cost Optimization",
        industry: "Tech & Media",
        detail: "Migrate legacy servers to AWS EKS, reducing monthly cloud bills by 35%.",
      },
    ],
    architecturePoints: [
      "AWS EKS / GCP GKE Kubernetes Clusters",
      "Terraform Infrastructure Provisioning",
      "Prometheus & Grafana Monitoring",
    ],
    pricingTiers: {
      starter: {
        name: "DevOps Starter",
        price: "$1,500",
        priceNote: "One-time setup",
        description: "Basic cloud server setup and automated CI/CD pipeline.",
        features: [
          "Docker Containerization of App",
          "Automated CI/CD Pipeline Setup",
          "SSL & Domain DNS Configuration",
          "Basic Backup & Security Tuning",
        ],
      },
      professional: {
        name: "Cloud Pro Infrastructure",
        price: "$4,000",
        priceNote: "Starting package",
        popular: true,
        description: "Kubernetes cluster orchestration & Infrastructure-as-Code.",
        features: [
          "Kubernetes (EKS/GKE) Orchestration",
          "Terraform Infrastructure-as-Code",
          "Auto-Scaling & Load Balancers",
          "Monitoring & Alerting Setup",
          "90 Days SLA & Maintenance",
        ],
      },
      enterprise: {
        name: "Enterprise DevOps Retainer",
        price: "$9,500+",
        priceNote: "Custom scope",
        description: "Dedicated DevOps engineer squad with 24/7 monitoring.",
        features: [
          "Multi-Region Active-Active Cloud Architecture",
          "24/7 Managed Infrastructure & Incident Response",
          "SOC2 & ISO Security Compliance Hardening",
        ],
      },
    },
    faqs: [
      {
        q: "Can you help optimize our monthly AWS/GCP cloud bills?",
        a: "Yes! Our cloud cost optimization audits frequently reduce client hosting expenses by 25% to 50%.",
      },
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design & Product Experience",
    shortTitle: "UI/UX Design",
    category: "dev",
    categoryLabel: "Development Services",
    tagline: "User-centered design systems, responsive web UI, and interactive prototypes.",
    desc: "Craft visually stunning, intuitive user interfaces and design systems in Figma built to maximize user engagement.",
    heroHeadline: "User-Centered Design Systems & Product UI",
    heroSubheadline: "Transform complex software workflows into clean, elegant user experiences that delight users and drive conversion.",
    icon: Layout,
    accent: "indigo",
    benefits: [
      {
        title: "Higher Product Adoption",
        description: "Intuitive UX reduces user onboarding friction and support tickets.",
        metric: "Intuitive UX Design",
      },
    ],
    features: [
      "Interactive Figma Wireframing & Design",
      "Scalable Component Design Systems",
      "Mobile & Desktop UI Layouts",
      "Usability Testing & Accessibility (WCAG)",
    ],
    useCases: [
      {
        title: "SaaS Dashboard Redesign",
        industry: "B2B Software",
        detail: "Redesign complex analytics dashboard into a sleek, modern dark-mode interface.",
      },
    ],
    architecturePoints: [
      "Figma Tokens & Design System Libraries",
      "Tailwind CSS Utility Component Specs",
      "WCAG 2.1 AAA Accessibility Guidelines",
    ],
    pricingTiers: {
      starter: {
        name: "Design Sprint",
        price: "$600",
        priceNote: "One-time build",
        description: "UI/UX design for up to 5 core application screens.",
        features: [
          "Up to 5 Custom Screen UI Designs",
          "Mobile & Desktop Responsive Layouts",
          "Interactive Figma Prototype",
          "Developer Assets Export",
        ],
      },
      professional: {
        name: "Product Design Suite",
        price: "$1,800",
        priceNote: "Starting package",
        popular: true,
        description: "Complete UI/UX design system for full web or mobile app.",
        features: [
          "Complete Web / Mobile App UI Design",
          "Reusable Figma Component Design System",
          "User Journey Mapping & Wireframes",
          "Design Handoff & Spec Documentation",
          "30 Days Handoff Support",
        ],
      },
      enterprise: {
        name: "Enterprise Design System",
        price: "$4,500+",
        priceNote: "Custom scope",
        description: "Comprehensive multi-product design system & brand guidelines.",
        features: [
          "Multi-Platform Enterprise Design System",
          "Custom Micro-Animation & Motion Design",
          "Dedicated Senior Product Designer",
        ],
      },
    },
    faqs: [
      {
        q: "What format will the final design files be delivered in?",
        a: "All UI/UX designs are delivered in Figma, complete with organized components, auto-layouts, and developer handoff documentation.",
      },
    ],
  },
  {
    id: "modernization",
    title: "Software Modernization & Refactoring",
    shortTitle: "Software Modernization",
    category: "dev",
    categoryLabel: "Development Services",
    tagline: "Cloud-native migration, legacy code refactoring, and security patching.",
    desc: "Revitalize legacy software applications by upgrading outdated codebases, migrating to the cloud, and fixing security vulnerabilities.",
    heroHeadline: "Transform Legacy Code into Cloud-Native Architecture",
    heroSubheadline: "Eliminate technical debt, fix performance bottlenecks, and modernize legacy software to scale with confidence.",
    icon: RefreshCw,
    accent: "indigo",
    benefits: [
      {
        title: "Eliminate Tech Debt",
        description: "Upgrade legacy PHP/Java/Python monolithic apps to modern frameworks.",
        metric: "Zero Legacy Bottlenecks",
      },
    ],
    features: [
      "Legacy Codebase Refactoring",
      "Monolith to Microservices Decomposition",
      "Security Vulnerability Patching",
      "Database Schema Modernization",
    ],
    useCases: [
      {
        title: "Legacy Monolith Refactoring",
        industry: "Enterprise Software",
        detail: "Decompose a 10-year-old monolithic database into modular API microservices.",
      },
    ],
    architecturePoints: [
      "Automated Code Quality & Security Audits",
      "Incremental Strangler Fig Refactoring Pattern",
      "Comprehensive Regression Test Suite",
    ],
    pricingTiers: {
      starter: {
        name: "Refactoring Audit",
        price: "$2,000",
        priceNote: "One-time audit",
        description: "Technical debt audit and targeted bug/security remediation.",
        features: [
          "Codebase Quality & Security Audit",
          "Performance Bottleneck Profiling",
          "Targeted Security & Dependency Patches",
          "Modernization Action Plan",
        ],
      },
      professional: {
        name: "Modernization Sprint",
        price: "$6,000",
        priceNote: "Starting package",
        popular: true,
        description: "Monolith refactoring and cloud-native database migration.",
        features: [
          "Monolith Refactoring & API Extraction",
          "Cloud Migration (AWS / GCP / Vercel)",
          "Database Migration & Schema Cleanup",
          "Automated Test Suite Implementation",
          "90 Days Post-Migration Warranty",
        ],
      },
      enterprise: {
        name: "Enterprise Re-Engineering",
        price: "$15,000+",
        priceNote: "Custom scope",
        description: "Complete legacy system transformation with zero downtime.",
        features: [
          "Full Platform Re-Engineering & Migration",
          "Zero-Downtime Live Data Cutover",
          "Dedicated Re-Engineering Squad & SLA",
        ],
      },
    },
    faqs: [
      {
        q: "Can you modernize our application without interrupting live operations?",
        a: "Yes! We utilize the Strangler Fig migration pattern to incrementally replace legacy components while keeping your production app 100% active.",
      },
    ],
  },

  // ==========================================
  // SEO & GROWTH SERVICES (8)
  // ==========================================
  {
    id: "technical-seo",
    title: "SEO & Organic Search Growth",
    shortTitle: "Technical & Organic SEO",
    category: "seo",
    categoryLabel: "SEO & Growth Services",
    tagline: "Organic search optimization, technical fixes, and keyword authority.",
    desc: "Drive sustainable organic search traffic and top Google rankings with comprehensive technical audits, schema markup, and content strategy.",
    heroHeadline: "Dominate Organic Search Rankings on Google",
    heroSubheadline: "Engineered organic search strategies that fix technical issues, optimize on-page content, and build high-authority backlinks.",
    icon: Search,
    accent: "emerald",
    benefits: [
      {
        title: "Top 3 Google Rankings",
        description: "Target high-intent buyer keywords to capture organic market share.",
        metric: "+250% Organic Traffic",
      },
    ],
    features: [
      "Technical SEO Audits & Remediation",
      "Targeted Keyword Strategy & Mapping",
      "On-Page Optimization (Titles, Meta, Schema)",
      "Google Search Console & GA4 Setup",
      "High-Authority Backlink Acquisition",
    ],
    useCases: [
      {
        title: "B2B SaaS Organic Traffic Scale",
        industry: "SaaS & Software",
        detail: "Rank #1 on Google for high-value commercial software keywords.",
      },
    ],
    architecturePoints: [
      "Core Web Vitals Technical Optimization",
      "Structured JSON-LD Schema Markup Engine",
      "Ahrefs / Semrush Keyword Attribution",
    ],
    pricingTiers: {
      starter: {
        name: "SEO Essentials",
        price: "$500/mo",
        priceNote: "Monthly retainer",
        description: "Essential organic search optimization for small businesses.",
        features: [
          "Up to 30 Targeted Keywords",
          "Technical SEO Audit & Remediation",
          "On-Page Optimization & Schema Markup",
          "GA4 & Google Search Console Setup",
          "Monthly Ranking & Traffic Reports",
        ],
      },
      professional: {
        name: "SEO Growth Pro",
        price: "$1,200/mo",
        priceNote: "Monthly retainer",
        popular: true,
        description: "Aggressive organic growth with content strategy & link building.",
        features: [
          "Up to 100 Targeted Keywords",
          "4 High-Quality SEO Articles / month",
          "Answer Engine Optimization (AEO / GEO)",
          "Competitor Backlink & Content Gap Audit",
          "Monthly Authority Backlink Outreach",
          "Bi-Weekly Strategy Syncs",
        ],
      },
      enterprise: {
        name: "Market Dominance SEO",
        price: "$3,000/mo",
        priceNote: "Monthly retainer",
        description: "Unlimited target keywords, digital PR, and dedicated strategist.",
        features: [
          "Unlimited Target Keywords & Cluster Strategy",
          "Generative Engine Dominance (ChatGPT/Perplexity)",
          "Custom Digital PR & High-Authority Backlinks",
          "Dedicated Senior SEO Strategist",
          "Weekly Live Telemetry & ROI Reporting",
        ],
      },
    },
    faqs: [
      {
        q: "How long does it take to see results from SEO?",
        a: "Initial technical fixes show improvements in 30 to 60 days, with major organic ranking gains scaling significantly in 3 to 6 months.",
      },
    ],
  },
  {
    id: "aeo-geo",
    title: "AEO, GEO & AI Search Optimization",
    shortTitle: "AEO / GEO & AI Search",
    category: "seo",
    categoryLabel: "SEO & Growth Services",
    tagline: "Optimize your brand for ChatGPT, Perplexity, and Google SGE citations.",
    desc: "Ensure your business is cited and recommended by AI answer engines (Answer Engine Optimization & Generative Engine Optimization).",
    heroHeadline: "Dominate Next-Gen AI Search Engines (ChatGPT & Perplexity)",
    heroSubheadline: "Capture market share on AI search platforms where millions of users ask for product and software recommendations.",
    icon: TrendingUp,
    accent: "emerald",
    benefits: [
      {
        title: "AI Engine Recommendations",
        description: "Get your brand cited when users ask ChatGPT or Perplexity for solutions.",
        metric: "AI Recommendation Leader",
      },
    ],
    features: [
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "LLM Brand Knowledge Graph Indexing",
      "AI Citation & Entity Authority Building",
    ],
    useCases: [
      {
        title: "AI Software Citation Authority",
        industry: "Technology & Software",
        detail: "Position your brand as the #1 recommended software vendor when users prompt ChatGPT.",
      },
    ],
    architecturePoints: [
      "Semantic Entity Mapping for LLM Indexers",
      "High-Density Structured Data Markup",
      "AI Engine Citation Telemetry Monitoring",
    ],
    pricingTiers: {
      starter: {
        name: "AEO Foundation",
        price: "$800/mo",
        priceNote: "Monthly retainer",
        description: "Basic citation setup and Knowledge Graph indexing.",
        features: [
          "Brand Entity Knowledge Graph Indexing",
          "Structured Data & Schema Optimization",
          "ChatGPT & Perplexity Citation Audit",
          "Monthly AI Visibility Report",
        ],
      },
      professional: {
        name: "AI Search Dominance",
        price: "$1,800/mo",
        priceNote: "Monthly retainer",
        popular: true,
        description: "Comprehensive AEO/GEO strategy across all major AI platforms.",
        features: [
          "Full AEO & GEO Multi-Engine Strategy",
          "Custom Knowledge Graph Content & Citations",
          "Google SGE & ChatGPT Recommendation Campaign",
          "4 AI-Optimized Thought Leadership Articles / mo",
          "Bi-Weekly AI Telemetry Syncs",
        ],
      },
      enterprise: {
        name: "Enterprise Omni-AI Growth",
        price: "$4,000/mo",
        priceNote: "Monthly retainer",
        description: "Omni-search AI dominance with dedicated AI Growth Director.",
        features: [
          "Global Multi-Engine Generative Optimization",
          "Digital PR & Knowledge Base Syndication",
          "Real-Time LLM Attribution Analytics",
          "Dedicated Growth Director & Strategy Team",
        ],
      },
    },
    faqs: [
      {
        q: "What is AEO and GEO?",
        a: "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) format your brand's digital footprint so AI models (ChatGPT, Claude, Perplexity) recommend your business as the top answer.",
      },
    ],
  },
  {
    id: "ppc-google-ads",
    title: "Google Ads & PPC Campaign Management",
    shortTitle: "Google Ads & PPC",
    category: "seo",
    categoryLabel: "SEO & Growth Services",
    tagline: "High-ROI Pay-Per-Click advertising campaigns on Google Search & Display.",
    desc: "Generate instant qualified leads with precision buyer keyword targeting, negative match lists, and conversion rate landing page optimization.",
    heroHeadline: "High-ROI Google Ads & Pay-Per-Click Management",
    heroSubheadline: "Convert search intent into paying customers with optimized Google Search, Display, and Performance Max ad campaigns.",
    icon: Target,
    accent: "emerald",
    benefits: [
      {
        title: "Instant Lead Generation",
        description: "Target users actively searching to purchase your products or services right now.",
        metric: "Instant Inbound Leads",
      },
    ],
    features: [
      "Google Search & Display Ad Setup",
      "High-Intent Keyword & Negative Match Lists",
      "A/B Ad Copy & Extension Testing",
      "ROAS & Conversion Rate Tracking",
    ],
    useCases: [
      {
        title: "High-Intent Commercial Inbound Campaign",
        industry: "Professional Services & B2B",
        detail: "Drive 50+ qualified inbound quote requests per month with search ads.",
      },
    ],
    architecturePoints: [
      "Google Ads API Conversion Tracking",
      "GA4 E-Commerce & Lead Attribution",
      "Automated Bid Management Rules",
    ],
    pricingTiers: {
      starter: {
        name: "PPC Starter",
        price: "$500/mo",
        priceNote: "Management fee",
        description: "Campaign setup and tuning for ad budgets up to $3,000/mo.",
        features: [
          "Ad Spend Management up to $3,000/mo",
          "Google Search Campaign Setup",
          "Keyword Match & Negative List Tuning",
          "Bi-Weekly Campaign Performance Optimization",
          "Monthly ROI & Lead Reports",
        ],
      },
      professional: {
        name: "PPC Growth Pro",
        price: "$1,000/mo",
        priceNote: "Management fee",
        popular: true,
        description: "Omnichannel ad management for budgets up to $15,000/mo.",
        features: [
          "Ad Spend Management up to $15,000/mo",
          "Google Search, Display & Performance Max",
          "A/B Ad Copy & Creative Variant Testing",
          "Landing Page Conversion Rate Optimization",
          "Weekly Performance Sync",
        ],
      },
      enterprise: {
        name: "Enterprise PPC Director",
        price: "$2,000+/mo",
        priceNote: "Management fee",
        description: "Unlimited ad spend management with dedicated PPC Director.",
        features: [
          "Unlimited Ad Spend Campaign Management",
          "Full Funnel Programmatic & Video Ads",
          "Custom Real-Time Attribution Dashboard",
          "Dedicated Senior PPC Account Director",
        ],
      },
    },
    faqs: [
      {
        q: "Is the ad spend paid directly to Google?",
        a: "Yes. You pay the ad network (Google) directly on your account, while our fee covers strategy, optimization, ad copy, and management.",
      },
    ],
  },
  {
    id: "meta-ads",
    title: "Meta Ads & Paid Social Campaigns",
    shortTitle: "Meta & Social Ads",
    category: "seo",
    categoryLabel: "SEO & Growth Services",
    tagline: "Data-driven paid social campaigns across Facebook, Instagram & LinkedIn.",
    desc: "Acquire customers at scale with high-converting creative ad variations, custom retargeting funnels, and lookalike audience targeting.",
    heroHeadline: "Data-Driven Meta & Paid Social Ad Campaigns",
    heroSubheadline: "Scale brand reach and acquisition across Facebook, Instagram, LinkedIn, and TikTok with high-performing ad creatives.",
    icon: Megaphone,
    accent: "emerald",
    benefits: [
      {
        title: "Scale Customer Acquisition",
        description: "Reach target buyer demographics with engaging visual ad creatives.",
        metric: "High ROAS Campaigns",
      },
    ],
    features: [
      "Facebook, Instagram & LinkedIn Ads",
      "Custom Retargeting & Lookalike Funnels",
      "Short-Form Video Ad Creative Production",
      "Pixel & Conversions API (CAPI) Tracking",
    ],
    useCases: [
      {
        title: "D2C Brand Retargeting Funnel",
        industry: "Retail & E-Commerce",
        detail: "Retarget store visitors with dynamic product ads, increasing sales by 40%.",
      },
    ],
    architecturePoints: [
      "Meta Conversions API (CAPI) Server Integration",
      "Custom Creative Testing Matrix Framework",
    ],
    pricingTiers: {
      starter: {
        name: "Paid Social Starter",
        price: "$500/mo",
        priceNote: "Management fee",
        description: "Campaign setup for budgets up to $3,000/mo.",
        features: [
          "Ad Spend Management up to $3,000/mo",
          "Facebook & Instagram Campaign Setup",
          "Audience Targeting & Retargeting Setup",
          "Monthly Performance Reporting",
        ],
      },
      professional: {
        name: "Paid Social Pro",
        price: "$1,200/mo",
        priceNote: "Management fee",
        popular: true,
        description: "Ad management for budgets up to $15,000/mo with video ads.",
        features: [
          "Ad Spend Management up to $15,000/mo",
          "Facebook, IG, LinkedIn & TikTok Ads",
          "Short-Form Video Ad Creative Scripting & Editing",
          "Meta Conversions API (CAPI) Server Setup",
          "Bi-Weekly Growth Syncs",
        ],
      },
      enterprise: {
        name: "Omnichannel Paid Growth",
        price: "$2,500+/mo",
        priceNote: "Management fee",
        description: "Unlimited ad spend management with dedicated creative team.",
        features: [
          "Unlimited Ad Spend Campaign Management",
          "Dedicated Graphic Designer & Video Editor",
          "Custom Real-time Attribution Modeling",
          "Dedicated Social Director",
        ],
      },
    },
    faqs: [
      {
        q: "Do you design the ad graphics and videos for Meta Ads?",
        a: "Yes! Our design and video team creates high-converting ad graphics, carousels, and short-form video reels.",
      },
    ],
  },
  {
    id: "social-media",
    title: "Social Media Marketing & Brand Growth",
    shortTitle: "Social Media Growth",
    category: "seo",
    categoryLabel: "SEO & Growth Services",
    tagline: "Strategic social channel management, original reels, and community growth.",
    desc: "Build a loyal customer community with custom content creation, short-form video production, and daily active audience engagement.",
    heroHeadline: "Build Brand Authority & Viral Social Engagement",
    heroSubheadline: "Turn followers into brand advocates with strategic social media management across TikTok, Instagram, LinkedIn, and YouTube.",
    icon: Users,
    accent: "emerald",
    benefits: [
      {
        title: "Active Community Building",
        description: "Establish industry thought leadership and active audience engagement.",
        metric: "Viral Reach Potential",
      },
    ],
    features: [
      "Custom Graphic Posts & Short Video Reels",
      "Content Calendar & Copywriting",
      "Active Daily Community Management",
      "Hashtag & Audience Analytics",
    ],
    useCases: [
      {
        title: "Short-Form Video Growth Campaign",
        industry: "Consumer Brand",
        detail: "Produce 12 monthly Instagram Reels / TikToks to gain 25,000+ organic views.",
      },
    ],
    architecturePoints: [
      "Social Scheduling & Analytics Stack",
      "4K Video Editing & Graphic Templates",
    ],
    pricingTiers: {
      starter: {
        name: "Social Starter",
        price: "$500/mo",
        priceNote: "Monthly retainer",
        description: "Baseline social presence for small businesses.",
        features: [
          "12 Custom Designed Posts / month",
          "2 Platforms (Facebook & Instagram)",
          "Content Copywriting & Scheduling",
          "Monthly Performance Report",
        ],
      },
      professional: {
        name: "Social Growth Pro",
        price: "$1,000/mo",
        priceNote: "Monthly retainer",
        popular: true,
        description: "Active social growth with short-form video production.",
        features: [
          "24 Custom Posts + 4 Short Videos / month",
          "4 Platforms (FB, IG, LinkedIn, Twitter/X)",
          "Short-Form Video Scripting & Editing",
          "Active Daily Community Engagement",
          "Bi-Weekly Growth Strategy Syncs",
        ],
      },
      enterprise: {
        name: "Viral Brand Retainer",
        price: "$2,000+/mo",
        priceNote: "Monthly retainer",
        description: "Daily posting, 12 high-production videos, and influencer outreach.",
        features: [
          "Daily Posts + 12 High-Production Videos / month",
          "All Channels (TikTok, YouTube, FB, IG, LinkedIn)",
          "Influencer Outreach & Campaign Lead",
          "24/7 Brand Reputation Monitoring",
        ],
      },
    },
    faqs: [
      {
        q: "Who creates the post graphics and video content?",
        a: "Our in-house design and video editing team creates 100% original graphics, carousels, and edited video reels.",
      },
    ],
  },
  {
    id: "content-marketing",
    title: "Content Marketing & Conversion Copywriting",
    shortTitle: "Content Marketing",
    category: "seo",
    categoryLabel: "SEO & Growth Services",
    tagline: "High-authority technical articles, whitepapers, and conversion copywriting.",
    desc: "Publish compelling technical articles, case studies, and landing page copy that rank on search engines and convert readers into leads.",
    heroHeadline: "Thought Leadership Content & High-Converting Copy",
    heroSubheadline: "Position your company as an industry authority with in-depth technical blogs, whitepapers, and high-converting website copy.",
    icon: FileText,
    accent: "emerald",
    benefits: [
      {
        title: "Industry Thought Leadership",
        description: "Establish undeniable domain authority with deep technical content.",
        metric: "High Reader Engagement",
      },
    ],
    features: [
      "In-Depth SEO & GEO Technical Articles",
      "Landing Page & Sales Copywriting",
      "Whitepapers & Case Study Production",
      "CMS Publishing & Formatting",
    ],
    useCases: [
      {
        title: "B2B SaaS Content Hub Strategy",
        industry: "Technology & Software",
        detail: "Publish 6 monthly technical articles, capturing 5,000+ organic search readers.",
      },
    ],
    architecturePoints: [
      "SEO Keyword Intent & Cluster Mapping",
      "Plagiarism & AI Content Quality Audits",
    ],
    pricingTiers: {
      starter: {
        name: "Content Starter",
        price: "$400/mo",
        priceNote: "Monthly retainer",
        description: "2 in-depth SEO articles per month.",
        features: [
          "2 In-Depth SEO Articles / month (1,500 words each)",
          "Topic & Keyword Intent Research",
          "Custom Featured Graphic Design",
          "CMS Formatting & Publishing",
        ],
      },
      professional: {
        name: "Content Engine Pro",
        price: "$900/mo",
        priceNote: "Monthly retainer",
        popular: true,
        description: "6 SEO & GEO optimized articles + content distribution.",
        features: [
          "6 SEO & GEO Optimized Articles / month",
          "Keyword Clustering & Content Hub Strategy",
          "Social Media Snippet Extractions",
          "Schema Structured Data Markup",
          "Bi-Weekly Performance Syncs",
        ],
      },
      enterprise: {
        name: "Enterprise Content Suite",
        price: "$2,000+/mo",
        priceNote: "Monthly retainer",
        description: "15+ monthly technical pieces, whitepapers, and PR distribution.",
        features: [
          "15+ Articles, E-books & Case Studies / month",
          "Dedicated Technical Content Editor Squad",
          "Multi-Language Content Localization",
          "Digital PR & Media Syndication",
        ],
      },
    },
    faqs: [
      {
        q: "Are the articles written by human domain experts?",
        a: "Yes! All articles are researched, written, and edited by specialized technical copywriters with domain expertise.",
      },
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing & CRM Automation",
    shortTitle: "Email Marketing",
    category: "seo",
    categoryLabel: "SEO & Growth Services",
    tagline: "Automated email sequences, newsletters, and Klaviyo/HubSpot pipelines.",
    desc: "Nurture leads and drive repeat revenue with automated drip sequences, promotional newsletter broadcasts, and CRM segmentation.",
    heroHeadline: "Automated Revenue Streams via Email Marketing",
    heroSubheadline: "Convert subscriber lists into loyal customers with automated welcome drips, abandoned cart recovery, and targeted broadcasts.",
    icon: Mail,
    accent: "emerald",
    benefits: [
      {
        title: "Predictive Repeat Revenue",
        description: "Email automation generates predictable monthly revenue from your existing customer base.",
        metric: "40x ROI Channel",
      },
    ],
    features: [
      "Automated Multi-Branch Drip Flows",
      "Klaviyo / HubSpot / Mailchimp Pipelines",
      "Custom HTML Email Template Design",
      "Inbox Deliverability & IP Warmup",
    ],
    useCases: [
      {
        title: "E-Commerce Klaviyo Automation Suite",
        industry: "Retail & E-Commerce",
        detail: "Build abandoned cart and post-purchase email flows, adding 20% to total store revenue.",
      },
    ],
    architecturePoints: [
      "Klaviyo / HubSpot API Flow Engine",
      "SPF, DKIM, DMARC Deliverability Security Setup",
    ],
    pricingTiers: {
      starter: {
        name: "Email Starter",
        price: "$300/mo",
        priceNote: "Monthly retainer",
        description: "Basic newsletter broadcasts and welcome sequence.",
        features: [
          "2 Custom Email Broadcasts / month",
          "Basic Welcome Drip Sequence",
          "Custom HTML Email Template Design",
          "List Cleaning & Spam Audit",
        ],
      },
      professional: {
        name: "Email Automation Pro",
        price: "$700/mo",
        priceNote: "Monthly retainer",
        popular: true,
        description: "6 broadcasts + advanced multi-branch drip automation.",
        features: [
          "6 Custom Email Broadcasts / month",
          "Advanced Multi-Branch Drip Automation",
          "Audience Segmentation & Behavioral Triggers",
          "A/B Subject Line & Design Testing",
          "Klaviyo / HubSpot Platform Ops",
        ],
      },
      enterprise: {
        name: "Enterprise Lifecycle Suite",
        price: "$1,500+/mo",
        priceNote: "Monthly retainer",
        description: "Unlimited custom broadcasts, dedicated IP warmup, and CRM lead scoring.",
        features: [
          "Unlimited Broadcasts & Enterprise Flow Networks",
          "Dedicated IP Warmup & Deliverability Director",
          "CRM Lead Scoring & Behavioral Attribution",
          "Dedicated Copywriter & Graphic Designer",
        ],
      },
    },
    faqs: [
      {
        q: "How do you ensure our emails don't end up in the spam folder?",
        a: "We configure proper SPF, DKIM, and DMARC DNS records, perform domain IP warming, and clean your list of inactive subscribers.",
      },
    ],
  },
  {
    id: "cro-analytics",
    title: "Conversion Rate Optimization & Analytics",
    shortTitle: "CRO & Analytics",
    category: "seo",
    categoryLabel: "SEO & Growth Services",
    tagline: "Data-backed website optimization, heatmaps, and GA4 telemetry.",
    desc: "Maximize the percentage of site visitors who become paying customers using A/B testing, heatmap analysis, and custom analytics dashboards.",
    heroHeadline: "Data-Driven Conversion Rate Optimization (CRO)",
    heroSubheadline: "Turn existing website traffic into double the leads and sales without increasing your marketing ad spend.",
    icon: PieChart,
    accent: "emerald",
    benefits: [
      {
        title: "Double Lead Conversions",
        description: "Extract more revenue from the web traffic you are already receiving.",
        metric: "+45% Higher Conversions",
      },
    ],
    features: [
      "A/B & Multivariate Landing Page Testing",
      "Heatmaps & User Session Recordings",
      "Funnel Drop-Off Analysis",
      "GA4 & Custom Real-Time Telemetry",
    ],
    useCases: [
      {
        title: "SaaS Landing Page CRO Sprint",
        industry: "B2B Software",
        detail: "A/B test headline and CTA placement, increasing trial signup rate from 2.1% to 4.3%.",
      },
    ],
    architecturePoints: [
      "Google Tag Manager & GA4 Event Tracking",
      "Hotjar / Clarity Heatmap Telemetry",
      "VWO / Optimizely A/B Testing Framework",
    ],
    pricingTiers: {
      starter: {
        name: "CRO Audit",
        price: "$600/mo",
        priceNote: "Monthly retainer",
        description: "Website conversion audit and heatmap tracking.",
        features: [
          "Website Conversion & Funnel Audit",
          "Heatmap & Session Recording Analysis",
          "GA4 Event Tracking Setup",
          "Monthly CRO Action Item Report",
        ],
      },
      professional: {
        name: "CRO Growth Pro",
        price: "$1,400/mo",
        priceNote: "Monthly retainer",
        popular: true,
        description: "Continuous A/B testing and landing page optimization.",
        features: [
          "Continuous A/B & Variant Testing",
          "Landing Page UX & Copy Optimization",
          "Custom Real-Time Telemetry Dashboard",
          "Weekly Test Result Syncs",
        ],
      },
      enterprise: {
        name: "Enterprise Growth Intelligence",
        price: "$3,200/mo",
        priceNote: "Monthly retainer",
        description: "Full-funnel attribution modeling and dedicated CRO director.",
        features: [
          "Omnichannel Funnel Attribution Modeling",
          "Multivariate High-Traffic Testing Suite",
          "Dedicated CRO Director & UX Researcher",
        ],
      },
    },
    faqs: [
      {
        q: "What traffic is required to run statistical A/B tests?",
        a: "A/B testing works best for websites receiving at least 3,000 monthly visitors. For lower traffic sites, we focus on qualitative UX heatmap audits.",
      },
    ],
  },
];
