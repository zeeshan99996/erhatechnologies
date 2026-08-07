import { createFileRoute, Link } from "@tanstack/react-router";
import muzammilImg from "@/assets/team-muzammil.jpg";
import abdulRehmanImg from "@/assets/team-abdul-rehman.webp";
import salmanImg from "@/assets/team-salman.jpg";
import zeeshanImg from "@/assets/team-zeeshan-portrait.jpg";
import ceoIlyasImg from "@/assets/ceo-ilyas.jpeg";
import faizResearchImg from "@/assets/manager-faiz.jpg";
import ramzanResearchImg from "@/assets/team-ramzan-research.jpg";
import sadiaResearchImg from "@/assets/team-sadia-research.png";
import samiaResearchImg from "@/assets/team-samia-research.jpg";
import ummeaimanResearchImg from "@/assets/team-ummeaiman-research.jpg";
import qamarImg from "@/assets/team-qamar.webp";
import yasirImg from "@/assets/team-yasir-shah.jpg";
import hassanImg from "@/assets/team-muhammad-hassan.jpg";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Users,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Brain,
  Code2,
  Database,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Leadership & Team — Erha Technologies" },
      {
        name: "description",
        content:
          "Meet the AI engineers, full-stack developers, research data scientists, and executive leadership behind Erha Technologies.",
      },
      { property: "og:title", content: "Leadership & Team — Erha Technologies" },
      {
        property: "og:description",
        content: "The team building enterprise AI and digital solutions at Erha Technologies.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/team" },
    ],
  }),
  component: TeamPage,
});

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image: string;
  category: "Executive Leadership" | "AI Engineering" | "Research & Data Science";
  bio: string;
  skills: string[];
  tech: string[];
  featured?: boolean;
  highlight?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ilyas Shahid",
    role: "Chief Executive Officer",
    initials: "IS",
    image: ceoIlyasImg,
    category: "Executive Leadership",
    featured: true,
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
    role: "Engineering Manager",
    initials: "FJ",
    image: faizResearchImg,
    category: "Executive Leadership",
    featured: true,
    highlight: "AI Systems Engineering & Technical Operations Lead",
    bio: "Engineering Manager driving strategic vision and technical operations at Erha Technologies. Specialized in scaling advanced AI systems, cross-over artificial intelligence models, cloud infrastructure optimization, and enterprise MLOps pipelines.",
    skills: [
      "Engineering Management",
      "AI Systems Architecture",
      "MLOps & Scaling",
      "Cloud Infrastructure",
      "Security & Compliance",
    ],
    tech: ["Python", "PyTorch", "Transformers", "GitHub Enterprise"],
  },
  {
    name: "Muhammad Salman Anwar",
    role: "Agentic AI Engineer",
    initials: "MSA",
    image: salmanImg,
    category: "AI Engineering",
    bio: "AI and Data Science professional with expertise in Agentic AI, AI Automation, and AI Research. Experienced in building intelligent agent networks, automating enterprise workflows, and developing data-driven systems.",
    skills: [
      "AI Automation",
      "AI Research",
      "Agentic Orchestration",
      "Data Science",
    ],
    tech: ["LangChain", "CrewAI", "LlamaIndex", "Pinecone"],
  },
  {
    name: "Muzammil Shadab",
    role: "AI Engineer",
    initials: "MS",
    image: muzammilImg,
    category: "AI Engineering",
    bio: "AI Engineer with experience in Generative AI, LLM-powered applications, and AI-driven business solutions. Skilled in prompt engineering, model tuning, and workflow automation.",
    skills: [
      "LLM Integration",
      "Full Stack Development",
      "Machine Learning",
      "Neural Networks",
      "AI Automation",
    ],
    tech: ["TensorFlow", "Scikit-Learn", "Python", "FastAPI"],
  },
  {
    name: "Abdul Rehman",
    role: "Junior AI Engineer",
    initials: "AR",
    image: abdulRehmanImg,
    category: "AI Engineering",
    bio: "Junior AI Engineer focused on developing data pipelines, vector databases, and system integration workflows. Skilled in constructing data pre-processing scripts and retrieval configurations.",
    skills: [
      "Data Pipelines",
      "Prompt Engineering",
      "System Integration",
      "Vector Databases",
      "API Testing",
    ],
    tech: ["Hugging Face", "Python", "Docker", "PostgreSQL"],
  },
  {
    name: "Muhammad Zeeshan",
    role: "Full Stack Developer",
    initials: "MZ",
    image: zeeshanImg,
    category: "AI Engineering",
    bio: "Full Stack Developer specializing in web application architectures, interactive user interfaces, and dynamic dashboards. Proficient in modern frontend frameworks and API integrations.",
    skills: [
      "Frontend Development",
      "State Management",
      "UI/UX Aesthetics",
      "React & TypeScript",
      "API Integration",
    ],
    tech: ["TanStack Start", "React 19", "Tailwind CSS", "Vite"],
  },
  {
    name: "Muhammad Qamar",
    role: "AI Researcher",
    initials: "MQ",
    image: qamarImg,
    category: "Research & Data Science",
    bio: "AI Researcher analyzing state-of-the-art machine learning models, model fine-tuning methodologies, and performance validation criteria.",
    skills: [
      "Deep Learning",
      "Model Fine-Tuning",
      "Hyperparameter Tuning",
      "Data Curation",
      "Performance Evaluation",
    ],
    tech: ["Jupyter", "Pandas", "PyTorch", "TensorBoard"],
  },
  {
    name: "Muhammad Ramzan",
    role: "Data Scientist",
    initials: "MR",
    image: ramzanResearchImg,
    category: "Research & Data Science",
    bio: "Data Scientist specializing in predictive modeling, telemetry analytics, and advanced machine learning clustering pipelines.",
    skills: [
      "Predictive Modeling",
      "Clustering Algorithms",
      "AI Telemetry",
      "Statistical Analysis",
      "Data Science",
    ],
    tech: ["NumPy", "Pandas", "Scikit-Learn", "R"],
  },
  {
    name: "Yasir Shah",
    role: "Agentic AI Engineer",
    initials: "YS",
    image: yasirImg,
    category: "AI Engineering",
    bio: "Agentic AI Engineer specializing in designing, building, and orchestrating autonomous AI agent systems. Proficient in multi-agent workflows and tool integration.",
    skills: [
      "Agentic Orchestration",
      "Multi-Agent Systems",
      "Workflow Automation",
      "LLM Orchestration",
      "AI Integration",
    ],
    tech: ["LangChain", "CrewAI", "LangGraph", "Python"],
  },
  {
    name: "Muhammad Hassan",
    role: "Junior AI Developer",
    initials: "MH",
    image: hassanImg,
    category: "AI Engineering",
    bio: "Junior AI Developer focusing on frontend implementation of AI components, model visualization, and building responsive enterprise dashboards.",
    skills: [
      "Frontend Engineering",
      "UI/UX Optimization",
      "API Integration",
      "React & TypeScript",
      "Model Visualization",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    name: "Sadia Sadiq",
    role: "Data Analyst",
    initials: "SS",
    image: sadiaResearchImg,
    category: "Research & Data Science",
    bio: "Data Analyst focused on performing data synthesis, telemetry trend evaluations, and developing AI performance dashboards.",
    skills: [
      "Data Wrangling",
      "Trend Analysis",
      "Performance Dashboarding",
      "SQL & Database Querying",
      "BI Reporting",
    ],
    tech: ["SQL", "PowerBI", "Excel", "Tableau"],
  },
  {
    name: "Samia Akash",
    role: "Cloud Database Engineer",
    initials: "SA",
    image: samiaResearchImg,
    category: "Research & Data Science",
    bio: "Cloud Database Engineer configuring distributed database schemas, vector database indexing, and storage optimizations for AI workloads.",
    skills: [
      "Distributed Storage",
      "Vector Indexing",
      "Latency Optimization",
      "Cloud Database Management",
      "NoSQL & SQL Systems",
    ],
    tech: ["AWS RDS", "Pinecone", "Redis", "PostgreSQL"],
  },
  {
    name: "Umm-e-Aiman",
    role: "AI Researcher",
    initials: "UA",
    image: ummeaimanResearchImg,
    category: "Research & Data Science",
    bio: "AI Researcher exploring computational biology, genetic sequence analysis, and neural bioinformatics datasets.",
    skills: [
      "Bioinformatics",
      "Neural Sequences",
      "Computational Biology",
      "Genomic Data Analytics",
      "Scientific Research",
    ],
    tech: ["BLAST", "Biopython", "R", "NCBI Entrez"],
  },
];

function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Executive Leadership",
    "AI Engineering",
    "Research & Data Science",
  ];

  const filteredTeam =
    activeCategory === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.category === activeCategory);

  const leadershipMembers = teamMembers.filter(
    (m) => m.category === "Executive Leadership"
  );

  return (
    <div className="px-4 sm:px-6 py-20 md:py-28 max-w-7xl mx-auto animate-fade-up">
      {/* Header Banner */}
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
          <Users size={14} />
          Our Leadership & Team
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          The <span className="text-gradient">minds behind Erha</span>
        </h1>
        <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Meet our multidisciplinary team of AI architects, full-stack developers, research data scientists, and executive leaders driving enterprise digital innovation.
        </p>
      </div>

      {/* Key Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
        {[
          { icon: Users, label: "Specialized Engineers", value: "15+" },
          { icon: Sparkles, label: "AI Workflows Deployed", value: "100+" },
          { icon: Brain, label: "Technical Squads", value: "3 Areas" },
          { icon: ShieldCheck, label: "Enterprise Reliability", value: "99.9%" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-2xl p-5 text-center border border-slate-800/80 shadow-lg"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
              <stat.icon size={20} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 font-display">
              {stat.value}
            </div>
            <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Migrated Executive Leadership Spotlight */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider mb-1">
              Leadership Spotlight
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Executive Leadership & Direction
            </h2>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Award size={14} className="text-cyan-400" /> Strategic & Technical Management
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {leadershipMembers.map((leader) => (
            <div
              key={leader.name}
              className="glass-strong rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div>
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-xl bg-slate-900 shrink-0">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase rounded-full mb-2 font-mono">
                      {leader.role}
                    </div>
                    <h3 className="text-2xl font-extrabold text-white mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {leader.highlight}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {leader.bio}
                </p>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-bold font-mono mb-2">
                  Core Expertise & Focus
                </div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {leader.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-900/80 border border-slate-800 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedMember(leader)}
                  className="w-full py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-bold text-cyan-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  View Full Executive Profile <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Directory Section Header & Filter Tabs */}
      <div className="mb-10">
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold mb-2">
            Team Directory
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Engineers, Researchers & Specialists
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                  : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
        {filteredTeam.map((m) => (
          <div
            key={m.name}
            className="glass card-3d rounded-2xl p-6 text-center shadow-xl cursor-pointer flex flex-col items-center justify-between group hover:border-cyan-500/40 transition-all"
            onClick={() => setSelectedMember(m)}
          >
            <div className="flex flex-col items-center w-full">
              <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-500/40 shadow-lg bg-slate-900">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-bold text-xl text-cyan-400">
                    {m.initials}
                  </div>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {m.name}
              </h3>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3 font-mono">
                {m.role}
              </div>
            </div>

            <span className="text-[11px] font-semibold text-slate-400 group-hover:text-cyan-400 flex items-center gap-1 transition-colors mt-2">
              View Profile <ArrowRight size={12} />
            </span>
          </div>
        ))}
      </div>

      {/* Join Us Banner */}
      <div className="glass-strong rounded-3xl p-8 md:p-12 border border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-4">
            <Briefcase size={22} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Want to Build the Future of Enterprise AI?
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            We are continuously seeking extraordinary AI researchers, software developers, and cloud architects to join our engineering teams in Pakistan and remotely.
          </p>
          <Link
            to="/contact"
            className="btn-neon font-semibold px-8 py-3 rounded-full inline-flex items-center gap-2 text-sm"
          >
            Get In Touch With Us <ArrowRight size={16} />
          </Link>
        </div>
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
                        className="w-full h-full object-cover object-top"
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

