import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Target,
  Eye,
  Rocket,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Brain,
  Cpu,
  Globe,
  Sparkles,
  Award,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Team photos
import ceoImg from "@/assets/ceo-ilyas.jpeg";
import managerImg from "@/assets/manager-faiz.jpg";
import muzammilImg from "@/assets/team-muzammil.jpg";
import abdulRehmanImg from "@/assets/team-abdul-rehman.webp";
import salmanImg from "@/assets/team-salman.jpg";
import zeeshanImg from "@/assets/team-zeeshan-portrait.jpg";
import ramzanResearchImg from "@/assets/team-ramzan-research.jpg";
import sadiaResearchImg from "@/assets/team-sadia-research.png";
import samiaResearchImg from "@/assets/team-samia-research.jpg";
import ummeaimanResearchImg from "@/assets/team-ummeaiman-research.jpg";
import qamarImg from "@/assets/team-qamar.webp";
import yasirImg from "@/assets/team-yasir-shah.jpg";
import hassanImg from "@/assets/team-muhammad-hassan.jpg";
import sadiaNewImg from "@/assets/team-sadia-new.jpg";
import anwarImg from "@/assets/team-muhammad-anwar.jpg";
import misbahImg from "@/assets/team-misbah-fakhar.jpg";
import drOmerImg from "@/assets/team-dr-omer-aziz.jpg";
import saqlainImg from "@/assets/team-saqlain-rajput.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us & Leadership Team — Erha Technologies" },
      {
        name: "description",
        content:
          "Learn about Erha Technologies, our executive leadership, AI engineers, research data scientists, and enterprise solutions.",
      },
      { property: "og:title", content: "About Us & Leadership Team — Erha Technologies" },
      {
        property: "og:description",
        content: "AI-driven digital innovation, executive leadership, and enterprise engineering.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/about" },
    ],
  }),
  component: AboutPage,
});

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image: string;
  category:
    | "Executive Leadership"
    | "DevOps Engineer"
    | "AI Engineer"
    | "HR & Business Operations"
    | "Full Stack Developer"
    | "QA"
    | "Operations";
  bio: string;
  skills: string[];
  tech: string[];
  highlight?: string;
}

const executiveLeadership: TeamMember[] = [
  {
    name: "Ilyas Shahid",
    role: "Chief Executive Officer",
    initials: "IS",
    image: ceoImg,
    category: "Executive Leadership",
    highlight: "Enterprise AI Visionary & Executive Leader",
    bio: "Chief Executive Officer leading Erha Technologies. Architect of our enterprise AI strategy, merging advanced machine learning research with robust software engineering pipelines to deliver scalable business solutions. Experienced in guiding digital transformation initiatives for global enterprises.",
    skills: [
      "Executive Leadership",
      "System Architecture",
      "AI Strategy",
      "Business Development",
      "Operations Scaling",
    ],
    tech: ["PyTorch", "Transformers", "Python", "Cloud Infrastructure"],
  },
  {
    name: "Faiz Jillani",
    role: "CTO",
    initials: "FJ",
    image: managerImg,
    category: "Executive Leadership",
    highlight: "AI Systems Engineering & Technical Operations Lead",
    bio: "Chief Technology Officer driving strategic vision and technical operations at Erha Technologies. Specialized in scaling advanced AI systems, cross-over artificial intelligence models, cloud infrastructure optimization, and enterprise MLOps pipelines.",
    skills: [
      "Technology Strategy & MLOps",
      "AI Systems Architecture",
      "Cloud Infrastructure",
      "Engineering Leadership",
      "Security & Compliance",
    ],
    tech: ["Python", "PyTorch", "Transformers", "GitHub Enterprise"],
  },
];

const teamMembers: TeamMember[] = [
  // DevOps Engineer
  {
    name: "Dr. Omer Aziz",
    role: "DevOps Engineer",
    initials: "DOA",
    image: drOmerImg,
    category: "DevOps Engineer",
    bio: "Senior DevOps Engineer specializing in cloud infrastructure, CI/CD pipeline automation, system scaling, and Kubernetes orchestration.",
    skills: ["Cloud Architecture", "CI/CD Automation", "Infrastructure Scaling", "System Performance", "Kubernetes"],
    tech: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    name: "Muhammad Salman Anwar",
    role: "AI Engineer & Team Lead",
    initials: "MSA",
    image: salmanImg,
    category: "AI Engineer",
    bio: "AI Engineer & Team Lead specializing in AI Agents, workflow automation, LLM applications, and scalable AI solutions. Leads the development team, manages AI projects, integrates AI models and APIs, and delivers reliable, production-ready solutions.",
    skills: ["Technical Leadership", "System Reliability", "MLOps Pipelines", "AI Agents", "AI Automation", "LLM Applications", "RAG Chatbots", "API Integration"],
    tech: ["Agentic AI", "Python", "n8n", "LLM", "RAG Chatbots", "APIs"],
  },

  // AI Engineer
  {
    name: "Muzammil Shadab",
    role: "AI Engineer",
    initials: "MS",
    image: muzammilImg,
    category: "AI Engineer",
    bio: "AI Engineer specializing in Generative AI, LLM-powered applications, prompt engineering, fine-tuning, and automated enterprise workflows.",
    skills: ["LLM Integration", "Generative AI", "Machine Learning", "Neural Networks", "AI Automation"],
    tech: ["TensorFlow", "PyTorch", "Python", "FastAPI", "LangChain"],
  },
  {
    name: "Syed Yasir Shah",
    role: "Agentic AI Engineer",
    initials: "SYS",
    image: yasirImg,
    category: "AI Engineer",
    bio: "Agentic AI Engineer focusing on multi-agent system orchestration, tool-augmented reasoning loops, and autonomous workflow automation.",
    skills: ["Agentic Orchestration", "Multi-Agent Systems", "Workflow Automation", "LLM Integration", "RAG Pipelines"],
    tech: ["LangChain", "CrewAI", "LangGraph", "Python", "Pinecone"],
  },
  {
    name: "Muhammad Hassan",
    role: "Associate AI Engineer",
    initials: "MH",
    image: hassanImg,
    category: "AI Engineer",
    bio: "Associate AI Engineer focusing on AI component integration, model visualization, prompt optimization, and interactive dashboard engineering.",
    skills: ["AI Component Integration", "Model Visualization", "Frontend Development", "API Integration", "UI/UX Optimization"],
    tech: ["Python", "React", "TypeScript", "Tailwind CSS", "FastAPI"],
  },
  {
    name: "Abdul Rehman",
    role: "Associate AI Engineer",
    initials: "AR",
    image: abdulRehmanImg,
    category: "AI Engineer",
    bio: "Associate AI Engineer developing data processing pipelines, vector database indices, model evaluation scripts, and system integration workflows.",
    skills: ["Data Pipelines", "Prompt Engineering", "Vector Databases", "System Integration", "API Testing"],
    tech: ["Hugging Face", "Python", "Docker", "PostgreSQL", "Pinecone"],
  },

  // HR & Business Operations
  {
    name: "Mr. Qamar",
    role: "HR & Business Operations",
    initials: "MQ",
    image: qamarImg,
    category: "HR & Business Operations",
    bio: "HR & Business Operations Lead overseeing organizational strategy, human resources management, operational compliance, and company scaling.",
    skills: ["HR Management", "Business Operations", "Organizational Scaling", "Talent Acquisition", "Resource Management"],
    tech: ["HR Operations", "Jira", "Workforce Strategy", "SQL", "Tableau"],
  },
  {
    name: "Sadia Sadiq",
    role: "Marketing Manager",
    initials: "SS",
    image: sadiaNewImg,
    category: "HR & Business Operations",
    bio: "Marketing Manager leading digital brand strategy, client acquisition campaigns, market research, and growth analytics at Erha Technologies.",
    skills: ["Digital Marketing", "Brand Strategy", "Market Research", "Campaign Management", "Conversion Optimization"],
    tech: ["Google Analytics", "Meta Business", "SEO / AEO", "HubSpot", "Tableau"],
  },
  {
    name: "Saqlain Rajput",
    role: "Business Developer",
    initials: "SR",
    image: saqlainImg,
    category: "HR & Business Operations",
    bio: "Business Developer driving strategic client partnerships, enterprise sales, client onboarding, and global business growth initiatives.",
    skills: ["Business Development", "Enterprise Sales", "Client Partnerships", "Strategic Growth", "Market Expansion"],
    tech: ["CRM Automation", "LinkedIn Sales", "HubSpot", "Market Analytics"],
  },

  // Full Stack Developer
  {
    name: "Muhammad Zeeshan",
    role: "Full Stack Developer",
    initials: "MZ",
    image: zeeshanImg,
    category: "Full Stack Developer",
    bio: "Full Stack Developer specializing in web application architectures, modern React interfaces, API integrations, and dynamic dashboards.",
    skills: ["Frontend Development", "Full Stack Architecture", "UI/UX Aesthetics", "React & TypeScript", "API Integration"],
    tech: ["TanStack Start", "React 19", "Tailwind CSS", "Vite", "Node.js"],
  },
  {
    name: "Ms. Umme Aiman",
    role: "Associate Software Engineer",
    initials: "UA",
    image: ummeaimanResearchImg,
    category: "Full Stack Developer",
    bio: "Associate Software Engineer developing web components, backend REST APIs, data visualization utilities, and responsive user interfaces.",
    skills: ["Software Engineering", "Full Stack Web", "REST APIs", "Data Visualization", "Component Design"],
    tech: ["React", "TypeScript", "Python", "PostgreSQL", "Git"],
  },

  // QA
  {
    name: "Abdul Wahab",
    role: "QA Engineer",
    initials: "AW",
    image: "",
    category: "QA",
    bio: "QA Engineer ensuring software reliability, automated test suite execution, bug tracking, and end-to-end quality assurance across all client projects.",
    skills: ["Quality Assurance", "Automated Testing", "Regression Testing", "API Testing", "Bug Tracking"],
    tech: ["Playwright", "Selenium", "Jest", "Postman", "Jira"],
  },
  {
    name: "Muhammad Anwar",
    role: "Associate QA Engineer",
    initials: "MA",
    image: anwarImg,
    category: "QA",
    bio: "Associate QA Engineer performing manual and automated test suite execution, cross-browser validation, and test case documentation.",
    skills: ["Manual Testing", "Test Case Execution", "Cross-Browser Testing", "Issue Tracking", "Regression Testing"],
    tech: ["Jest", "Postman", "Cypress", "Git", "Jira"],
  },
  {
    name: "Muhammad Ramzan",
    role: "System Architect",
    initials: "MR",
    image: ramzanResearchImg,
    category: "QA",
    bio: "System Architect overseeing software quality standards, architectural verification, performance profiling, and system resilience testing.",
    skills: ["System Architecture", "Quality Governance", "Performance Profiling", "Resilience Testing", "System Security"],
    tech: ["PyTorch", "NumPy", "Pandas", "Scikit-Learn", "Docker"],
  },

  // Operations
  {
    name: "Samia Akash",
    role: "Frontend Engineer",
    initials: "SA",
    image: samiaResearchImg,
    category: "Operations",
    bio: "Frontend Engineer building responsive user interfaces, dashboard telemetry components, design systems, and frontend operations.",
    skills: ["Frontend Engineering", "UI Design Systems", "Dashboard Telemetry", "Responsive Web", "State Management"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "PostgreSQL"],
  },
  {
    name: "Misbah Fakhar",
    role: "Database Engineer",
    initials: "MF",
    image: misbahImg,
    category: "Operations",
    bio: "Database Engineer optimizing distributed relational and vector databases, data schema design, data indexing, and backend operational stability.",
    skills: ["Database Architecture", "SQL Query Optimization", "Vector Indexing", "Data Telemetry", "Database Security"],
    tech: ["PostgreSQL", "Redis", "Pinecone", "AWS RDS", "SQL"],
  },
];

function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "DevOps Engineer",
    "AI Engineer",
    "HR & Business Operations",
    "Full Stack Developer",
    "QA",
    "Operations",
  ];

  const filteredTeam =
    activeCategory === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.category === activeCategory);

  return (
    <div className="px-4 sm:px-6 py-20 md:py-28 max-w-6xl mx-auto animate-fade-up">

      {/* Executive Leadership Section (CEO & CTO) */}
      <div className="mb-20" id="leadership">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <Award size={14} />
            Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Executive Leadership & Direction
          </h2>
          <p className="text-sm text-slate-300">
            Driving strategic vision, AI research innovation, and high-performance engineering operations at Erha Technologies.
          </p>
        </div>

        <div className="space-y-8">
          {/* CEO Card */}
          <div className="glass-strong rounded-3xl p-8 md:p-12 border border-slate-800/80 shadow-2xl relative overflow-hidden group hover:border-cyan-500/50 hover:shadow-[0_10px_40px_rgba(6,182,212,0.18)] hover:-translate-y-1.5 transition-all duration-300">
            <div className="relative grid md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div className="max-w-[280px] mx-auto md:max-w-none w-full">
                <div className="relative aspect-square rounded-3xl group/avatar">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-400 opacity-30 group-hover/avatar:opacity-100 blur-md transition-all duration-500 group-hover:scale-105 animate-spin-slow" />
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border-2 border-cyan-500/50 bg-slate-900 z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                      src={ceoImg}
                      alt="Ilyas Shahid — Chief Executive Officer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase rounded-full mb-3 font-mono">
                  Chief Executive Officer
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                  Ilyas Shahid
                </h3>
                <p className="text-cyan-400 text-xs font-mono font-semibold mb-4">
                  Enterprise AI Visionary & Executive Leader
                </p>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  Chief Executive Officer leading Erha Technologies. Architect of our enterprise AI strategy, merging advanced machine learning research with robust software engineering pipelines to deliver scalable business solutions. Experienced in guiding digital transformation initiatives for global enterprises.
                </p>

                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                  {executiveLeadership[0].skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900/80 border border-slate-800 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTO Card */}
          <div className="glass-strong rounded-3xl p-8 md:p-12 border border-slate-800/80 shadow-2xl relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_10px_40px_rgba(99,102,241,0.18)] hover:-translate-y-1.5 transition-all duration-300">
            <div className="relative grid md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div className="md:col-span-2 order-2 md:order-1 text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase rounded-full mb-3 font-mono">
                  Chief Technology Officer (CTO)
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                  Faiz Jillani
                </h3>
                <p className="text-indigo-300 text-xs font-mono font-semibold mb-4">
                  AI Systems Engineering & Technical Operations Lead
                </p>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  Chief Technology Officer driving strategic vision and technical operations at Erha Technologies. Specialized in scaling advanced AI systems, cross-over artificial intelligence models, cloud infrastructure optimization, and enterprise MLOps pipelines.
                </p>

                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                  {executiveLeadership[1].skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900/80 border border-slate-800 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2 max-w-[280px] mx-auto md:max-w-none w-full">
                <div className="relative aspect-square rounded-3xl group/avatar">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-400 opacity-30 group-hover/avatar:opacity-100 blur-md transition-all duration-500 group-hover:scale-105 animate-spin-slow" />
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border-2 border-indigo-500/50 bg-slate-900 z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                      src={managerImg}
                      alt="Faiz Jillani — Chief Technology Officer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering & Research Team Member Grid */}
      <div className="mb-20" id="team">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex flex-col items-center group/heading cursor-default mb-2">
            {/* Animated Glowing Radius Circle Badge */}
            <div className="relative w-10 h-10 mb-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)] group-hover/heading:scale-110 group-hover/heading:border-cyan-400 transition-all duration-300">
              <div className="absolute -inset-1 rounded-full bg-cyan-500/20 opacity-40 group-hover/heading:opacity-100 blur-sm animate-pulse" />
              <Users size={18} className="relative z-10" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight group-hover/heading:text-cyan-200 transition-all duration-300 group-hover/heading:drop-shadow-[0_0_25px_rgba(6,182,212,0.4)] animate-fade-up">
              Our Technical Team
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mb-8">
            Meet the multidisciplinary software developers, AI researchers, and cloud specialists driving our client solutions.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-full py-2 px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-cyan-500 text-slate-950 border border-cyan-400 font-extrabold shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105"
                    : "bg-slate-900/90 border border-slate-700/80 text-white hover:text-cyan-300 hover:border-cyan-400 hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeam.map((m) => (
            <div
              key={m.name}
              className="glass card-3d rounded-3xl p-6 text-center shadow-xl cursor-pointer flex flex-col items-center justify-between group transition-all duration-300 border border-slate-800/80 hover:border-cyan-500/50 hover:shadow-[0_10px_35px_rgba(6,182,212,0.2)] hover:-translate-y-2 relative overflow-hidden"
              onClick={() => setSelectedMember(m)}
            >
              {/* Background ambient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex flex-col items-center w-full relative z-10">
                {/* Animated Avatar Circle with glowing aura ring */}
                <div className="relative w-28 h-28 mx-auto mb-4 group/avatar">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-400 opacity-20 group-hover/avatar:opacity-100 blur-sm transition-all duration-500 group-hover:scale-110 animate-spin-slow" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/40 shadow-xl bg-slate-900 transition-transform duration-500 group-hover:scale-105">
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={m.name}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          m.name === "Muhammad Zeeshan"
                            ? "object-center group-hover:scale-[1.85] group-hover:translate-y-1 group-hover:object-[center_15%]"
                            : "object-center group-hover:scale-110"
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-xl text-cyan-400">
                        {m.initials}
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {m.name}
                </h3>
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3 font-mono">
                  {m.role}
                </div>
              </div>

              <span className="text-[11px] font-semibold text-slate-400 group-hover:text-cyan-400 flex items-center gap-1 transition-all duration-300 mt-2 group-hover:translate-x-1">
                View Profile <ArrowRight size={12} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Core Engineering Pillars */}
      <div className="glass-strong rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold mb-2">
            Engineering Excellence
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            What Sets Erha Technologies Apart
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "Agentic AI Architectures",
              desc: "Building self-correcting multi-agent systems that solve complex, multi-step enterprise workflows.",
            },
            {
              icon: Cpu,
              title: "Enterprise Custom LLMs & RAG",
              desc: "Deploying secure, domain-specific language models with real-time vector retrieval across internal knowledge bases.",
            },
            {
              icon: ShieldCheck,
              title: "Production-Grade Security",
              desc: "Ensuring end-to-end data encryption, compliance standards, and resilient fail-safe operations.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <item.icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {[
          {
            icon: Target,
            title: "Mission",
            text: "Empower global organizations with production-grade AI solutions that automate complexity and catalyze sustainable growth.",
          },
          {
            icon: Eye,
            title: "Vision",
            text: "Become the benchmark leader in autonomous agentic AI systems, custom LLMs, and high-performance digital engineering.",
          },
          {
            icon: Rocket,
            title: "Values",
            text: "Uncompromising software quality, rapid execution velocity, transparent partnership, and continuous innovation.",
          },
        ].map((c) => (
          <div key={c.title} className="glass card-3d rounded-2xl p-8 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
              <c.icon size={22} />
            </div>
            <h3 className="font-extrabold text-2xl text-white mb-3">{c.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link
          to="/contact"
          className="btn-neon font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2"
        >
          Work With Us <ArrowRight size={16} />
        </Link>
      </div>

      {/* Member Modal */}
      <Dialog
        open={selectedMember !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedMember(null);
        }}
      >
        <DialogContent className="glass-strong border border-slate-700 rounded-2xl max-w-xl text-left text-white overflow-hidden p-6 sm:p-8 shadow-2xl">
          {selectedMember && (
            <div className="space-y-6">
              <DialogHeader className="border-b border-slate-800 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-cyan-500/40 bg-slate-900 shrink-0">
                    {selectedMember.image ? (
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className={`w-full h-full object-cover ${
                          selectedMember.name === "Muhammad Zeeshan"
                            ? "scale-[1.85] translate-y-1 object-[center_15%]"
                            : "object-top"
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-xl text-cyan-400">
                        {selectedMember.initials}
                      </div>
                    )}
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-extrabold text-white tracking-tight">
                      {selectedMember.name}
                    </DialogTitle>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mt-1">
                      {selectedMember.role}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1 font-medium">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      Erha Technologies Specialist
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-bold font-mono mb-2">
                    BIOGRAPHY & RESPONSIBILITIES
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white font-bold font-mono mb-2">
                    CORE COMPETENCIES
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMember.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-bold font-mono mb-2">
                    TECHNOLOGY STACK
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMember.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}


