import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Key,
  LogOut,
  CheckCircle,
  Database,
  ShieldAlert,
  ArrowRight,
  FolderGit,
  Users,
  Settings,
  RefreshCw,
  Clipboard,
  Upload,
  UserCheck,
  Eye,
  EyeOff
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel — Erha Technologies" },
      { name: "description", content: "Management console for Erha Technologies." },
      { name: "robots", content: "noindex, nofollow" }
    ],
  }),
  component: AdminPage,
});

// Default Mock Data in case localStorage is empty
const defaultProjects = [
  {
    title: "Neural Insight",
    tag: "AI Platform",
    desc: "Real-time analytics powered by transformer models.",
    color: "var(--neon-cyan)",
  },
  {
    title: "Agent Forge",
    tag: "Agentic AI",
    desc: "Build, deploy, and orchestrate autonomous AI agents.",
    color: "var(--neon-purple)",
  },
  {
    title: "FinFlow",
    tag: "Web App",
    desc: "Next-gen finance dashboard with predictive forecasting.",
    color: "var(--neon-blue)",
  },
  {
    title: "Lumen Chat",
    tag: "Mobile App",
    desc: "Cross-platform messaging with on-device AI.",
    color: "var(--neon-cyan)",
  },
  {
    title: "AutoPilot RPA",
    tag: "Automation",
    desc: "Workflow automation across 200+ SaaS tools.",
    color: "var(--neon-purple)",
  },
  {
    title: "OmniSearch",
    tag: "AI Search",
    desc: "Cognitive search system powered by RAG and semantic routing.",
    color: "var(--neon-blue)",
  },
];

const defaultTeam = [
  {
    name: "Ilyas Shahid",
    role: "CEO",
    initials: "IS",
    image: "__ilyasResearchImg__",
    accent: "purple",
    bio: "CEO leading Erha Technologies. Architect of our enterprise AI strategy, merging advanced machine learning research with robust engineering pipelines to deliver scalable business solutions. Experienced in orchestrating high-performing technology teams and guiding digital transformation initiatives for global enterprises. Passionate about driving innovation and shaping the future of artificial intelligence in commerce and technology.",
    skills: ["System Architecture", "AI Strategy", "Executive Leadership", "Business Development", "Operations Scaling"],
    tech: ["PyTorch", "Transformers", "Python", "Cloud Infrastructure"],
  },
  {
    name: "Faiz Jillani",
    role: "Engineering Manager",
    initials: "FJ",
    image: "__faizResearchImg__",
    accent: "purple",
    bio: "Engineering Manager guiding technical operations and systems engineering. Specialized in cross-over artificial intelligence models, cloud infrastructure optimization, and enterprise MLOps pipelines. Committed to bridging the gap between state-of-the-art AI research and production-grade software architecture. Focuses on ensuring reliability, security, and scalability across all digital product deployments.",
    skills: ["MLOps & Scaling", "AI Systems Engineering", "Cloud Infrastructure", "Technical Management", "Security & Compliance"],
    tech: ["Python", "PyTorch", "Transformers", "GitHub Enterprise"],
  },
  {
    name: "Muhammad Salman Anwar",
    role: "Agentic AI Engineer",
    initials: "MSA",
    image: "__salmanImg__",
    accent: "cyan",
    bio: "AI and Data Science professional with expertise in Agentic AI, AI Automation, and AI Research. Experienced in building intelligent systems, Agents, automating workflows, and developing data-driven solutions that enhance business performance. Passionate about applying cutting-edge AI technologies to solve complex challenges and drive innovation.",
    skills: ["AI Automation", "AI Research", "Agentic Orchestration", "Data Science"],
    tech: ["LangChain", "CrewAI", "LlamaIndex", "Pinecone"],
  },
  {
    name: "Muzammil Shadab",
    role: "AI Engineer",
    initials: "MS",
    image: "__muzammilImg__",
    accent: "cyan",
    bio: "AI Engineer with experience in Generative AI, LLM-powered applications, and AI-driven business solutions. Skilled in developing intelligent systems, prompt engineering, and workflow automation. Experienced in data annotation and AI model development to support high-quality machine learning outcomes. Passionate about leveraging cutting-edge AI technologies to solve complex challenges. Dedicated to continuous learning and innovation in the field of artificial intelligence.",
    skills: ["LLM Integration", "Full Stack Development", "Machine Learning", "Neural Networks", "AI Automation"],
    tech: ["TensorFlow", "Scikit-Learn", "Python", "FastAPI"],
  },
  {
    name: "Abdul Rehman",
    role: "Junior AI Engineer",
    initials: "AR",
    image: "__abdulRehmanImg__",
    accent: "cyan",
    bio: "Junior AI Engineer assisting in the development and optimization of machine learning pipelines, RAG integration systems, and data analytics dashboards. Adept at preprocessing datasets, refining agent prompts, and testing backend code integrations. Eager to explore new AI research paradigms and contribute to robust, full-stack client solutions under senior engineering leadership.",
    skills: ["Data Engineering", "Model Testing", "Python Scripting", "API Integration"],
    tech: ["Python", "Flask", "Pandas", "SQL"],
  },
  {
    name: "Muhammad Zeeshan",
    role: "Junior AI Engineer",
    initials: "MZ",
    image: "__zeeshanImg__",
    accent: "cyan",
    bio: "Junior AI Engineer focusing on frontend application interfaces, interactive UI designs, and real-time visualization dashboards. Proficient in React and modern CSS systems to build clean, responsive, and intuitive web experiences. Works closely with AI developers to connect backend LLM pipelines to high-performance client-side applications.",
    skills: ["Frontend Engineering", "UI/UX Design", "Responsive Layouts", "State Management"],
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    name: "Muhammad Qamar",
    role: "AI Researcher",
    initials: "MQ",
    image: "__qamarImg__",
    accent: "purple",
    bio: "AI Researcher analyzing state-of-the-art machine learning models, model fine-tuning methodologies, and performance validation criteria. Skilled in deep learning research, dataset curation, and hyperparameter optimization, he focuses on transitioning advanced research concepts into practical, deployable algorithmic solutions.",
    skills: ["Deep Learning", "Model Evaluation", "Research Methodology", "Dataset Engineering"],
    tech: ["PyTorch", "HuggingFace", "Python", "Numpy"],
  },
  {
    name: "Muhammad Ramzan",
    role: "Data Scientist",
    initials: "MR",
    image: "__ramzanResearchImg__",
    accent: "purple",
    bio: "Data Scientist specializing in predictive modeling, telemetry analytics, and advanced machine learning clustering pipelines. Pursuing a Master's in Data Science and recipient of the UI GREAT Scholarship, he has contributed deep learning research in macular degeneration (ARMD) classification to IEEE and IAES journals.",
    skills: ["Predictive Modeling", "Clustering Pipelines", "Statistical Analysis", "Research Writing"],
    tech: ["R", "Python", "Pandas", "Scikit-Learn"],
  },
  {
    name: "Sadia Sadiq",
    role: "Data Analyst",
    initials: "SS",
    image: "__sadiaResearchImg__",
    accent: "purple",
    bio: "Data Analyst focused on complex data synthesis, telemetry trend evaluations, and visual performance dashboards. Holding an MS in Mathematics from NUST, she has conducted research in mathematical solitons and Solitary wave equations published in Results in Physics.",
    skills: ["Data Synthesis", "Trend Analysis", "Mathematical Modeling", "Visual Dashboards"],
    tech: ["Python", "MATLAB", "SQL", "Tableau"],
  },
  {
    name: "Samia Akash",
    role: "Cloud Database Engineer",
    initials: "SA",
    image: "__samiaResearchImg__",
    accent: "purple",
    bio: "Cloud Database Engineer designing distributed database schemas, vector indexing configurations, and storage optimizations. Highly proficient in SQL systems and cloud architecture, she manages technical documentation and database deployments to enable real-time retrieval-augmented generation.",
    skills: ["Database Design", "Vector Indexing", "Cloud Architecture", "Technical Writing"],
    tech: ["PostgreSQL", "MongoDB", "AWS", "Pinecone"],
  },
  {
    name: "Umm-e-Aiman",
    role: "AI Researcher",
    initials: "UA",
    image: "__ummeaimanResearchImg__",
    accent: "purple",
    bio: "AI Researcher focusing on computational biology, biochemistry analysis, and bioinformatic pipelines. Currently pursuing an M.Phil. in Biochemistry, she works with sequence database tools and deep learning parsing methodologies to analyze biochemical datasets.",
    skills: ["Computational Biology", "Sequence Database Tools", "Bioinformatics", "Data Curation"],
    tech: ["Python", "Biopython", "Blast", "PDB"],
  },
  {
    name: "Zunaira Naseem",
    role: "AI Researcher",
    initials: "ZN",
    image: "__zunairaResearchImg__",
    accent: "purple",
    bio: "AI Researcher specializing in Natural Language Processing (NLP) architectures, translation models, and text tokenization. With a background in Corpus Linguistics, she utilizes semantic parsing, sentiment analysis pipelines, and text analysis tools (Antconc, Sketch Engine) to optimize linguistic understanding.",
    skills: ["NLP Architectures", "Semantic Parsing", "Corpus Linguistics", "Sentiment Analysis"],
    tech: ["Python", "NLTK", "SpaCy", "Antconc"],
  },
];

interface Project {
  title: string;
  tag: string;
  desc: string;
  color: string;
}

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image: string;
  accent: string;
  bio: string;
  skills: string[];
  tech: string[];
}

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessKey, setAccessKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [activeTab, setActiveTab] = useState<"projects" | "team" | "system">("projects");
  const [projects, setProjects] = useState<Project[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  // Project modal states
  const [projectModal, setProjectModal] = useState<"add" | "edit" | null>(null);
  const [editProjectIdx, setEditProjectIdx] = useState<number | null>(null);
  const [projectForm, setProjectForm] = useState<Project>({
    title: "",
    tag: "Agentic AI",
    desc: "",
    color: "var(--neon-cyan)"
  });

  // Team member modal states
  const [teamModal, setTeamModal] = useState<"add" | "edit" | null>(null);
  const [editMemberIdx, setEditMemberIdx] = useState<number | null>(null);
  const [teamForm, setTeamForm] = useState({
    name: "",
    role: "",
    initials: "",
    image: "",
    accent: "cyan",
    bio: "",
    skills: "",
    tech: ""
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Delete confirmation modal state
  const [deleteConfirm, setDeleteConfirm] = useState<{ type: "project" | "team"; index: number } | null>(null);

  // JSON import states
  const [importJson, setImportJson] = useState("");
  const [importType, setImportType] = useState<"projects" | "team">("projects");
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // Initialize and check authentication
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isAuthed = sessionStorage.getItem("erha_admin_authed");
      if (isAuthed === "true") {
        setIsAuthenticated(true);
      }

      // Load Projects
      const localProjects = localStorage.getItem("erha_projects");
      if (localProjects) {
        try {
          setProjects(JSON.parse(localProjects));
        } catch {
          setProjects(defaultProjects);
        }
      } else {
        setProjects(defaultProjects);
        localStorage.setItem("erha_projects", JSON.stringify(defaultProjects));
      }

      // Load Team Members
      const localTeam = localStorage.getItem("erha_team_members");
      if (localTeam) {
        try {
          setTeamMembers(JSON.parse(localTeam));
        } catch {
          setTeamMembers(defaultTeam as any);
        }
      } else {
        setTeamMembers(defaultTeam as any);
        localStorage.setItem("erha_team_members", JSON.stringify(defaultTeam));
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessKey === "admin123") {
      setIsAuthenticated(true);
      setLoginError("");
      sessionStorage.setItem("erha_admin_authed", "true");
      showNotification("Authentication successful. Welcome to administrative core.");
    } else {
      setLoginError("Invalid Administrative Access Key. Access Denied.");
      showNotification("Authentication failed.", "error");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("erha_admin_authed");
    setAccessKey("");
    showNotification("Logged out successfully.");
  };

  const showNotification = (text: string, type: "success" | "error" = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  };

  // --- Project Operations ---
  const openAddProject = () => {
    setProjectForm({
      title: "",
      tag: "Agentic AI",
      desc: "",
      color: "var(--neon-cyan)"
    });
    setProjectModal("add");
  };

  const openEditProject = (idx: number) => {
    setProjectForm(projects[idx]);
    setEditProjectIdx(idx);
    setProjectModal("edit");
  };

  const saveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.title || !projectForm.desc) {
      showNotification("Please fill in all required fields.", "error");
      return;
    }

    let updatedProjects = [...projects];
    if (projectModal === "add") {
      updatedProjects.unshift(projectForm);
      showNotification(`Project "${projectForm.title}" added successfully.`);
    } else if (projectModal === "edit" && editProjectIdx !== null) {
      updatedProjects[editProjectIdx] = projectForm;
      showNotification(`Project "${projectForm.title}" updated successfully.`);
    }

    setProjects(updatedProjects);
    localStorage.setItem("erha_projects", JSON.stringify(updatedProjects));
    setProjectModal(null);
    setEditProjectIdx(null);
  };

  // --- Team Member Operations ---
  const openAddMember = () => {
    setTeamForm({
      name: "",
      role: "",
      initials: "",
      image: "",
      accent: "cyan",
      bio: "",
      skills: "",
      tech: ""
    });
    setTeamModal("add");
  };

  const openEditMember = (idx: number) => {
    const member = teamMembers[idx];
    setTeamForm({
      name: member.name,
      role: member.role,
      initials: member.initials,
      image: member.image.startsWith("__") ? "" : member.image, // hide internal keyword markers
      accent: member.accent,
      bio: member.bio,
      skills: member.skills.join(", "),
      tech: member.tech ? member.tech.join(", ") : ""
    });
    setEditMemberIdx(idx);
    setTeamModal("edit");
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeamForm(prev => ({ ...prev, image: reader.result as string }));
        showNotification("Avatar image loaded successfully.");
      };
      reader.readAsDataURL(file);
    }
  };

  const saveMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamForm.name || !teamForm.role || !teamForm.bio) {
      showNotification("Please fill in all required fields.", "error");
      return;
    }

    const initials = teamForm.initials || teamForm.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 3);
    const skillsArray = teamForm.skills.split(",").map(s => s.trim()).filter(s => s !== "");
    const techArray = teamForm.tech.split(",").map(t => t.trim()).filter(t => t !== "");

    // If edit, retain default image mapping if they didn't upload or write a new URL
    let imageValue = teamForm.image;
    if (teamModal === "edit" && editMemberIdx !== null && !imageValue) {
      const originalImage = teamMembers[editMemberIdx].image;
      if (originalImage.startsWith("__")) {
        imageValue = originalImage;
      }
    }

    const memberObject: TeamMember = {
      name: teamForm.name,
      role: teamForm.role,
      initials,
      image: imageValue || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      accent: teamForm.accent,
      bio: teamForm.bio,
      skills: skillsArray,
      tech: techArray
    };

    let updatedTeam = [...teamMembers];
    if (teamModal === "add") {
      updatedTeam.push(memberObject);
      showNotification(`Team member "${teamForm.name}" added successfully.`);
    } else if (teamModal === "edit" && editMemberIdx !== null) {
      updatedTeam[editMemberIdx] = memberObject;
      showNotification(`Team member "${teamForm.name}" updated successfully.`);
    }

    setTeamMembers(updatedTeam);
    localStorage.setItem("erha_team_members", JSON.stringify(updatedTeam));
    setTeamModal(null);
    setEditMemberIdx(null);
  };

  // --- Deletion Handler ---
  const requestDelete = (type: "project" | "team", index: number) => {
    setDeleteConfirm({ type, index });
  };

  const executeDelete = () => {
    if (!deleteConfirm) return;

    const { type, index } = deleteConfirm;
    if (type === "project") {
      const title = projects[index].title;
      const updated = projects.filter((_, i) => i !== index);
      setProjects(updated);
      localStorage.setItem("erha_projects", JSON.stringify(updated));
      showNotification(`Project "${title}" deleted.`);
    } else if (type === "team") {
      const name = teamMembers[index].name;
      const updated = teamMembers.filter((_, i) => i !== index);
      setTeamMembers(updated);
      localStorage.setItem("erha_team_members", JSON.stringify(updated));
      showNotification(`Team member "${name}" deleted.`);
    }

    setDeleteConfirm(null);
  };

  // --- Data Control Operations ---
  const handleExportJSON = (type: "projects" | "team") => {
    const data = type === "projects" ? projects : teamMembers;
    const jsonString = JSON.stringify(data, null, 2);
    navigator.clipboard.writeText(jsonString);
    showNotification(`${type.charAt(0).toUpperCase() + type.slice(1)} JSON configuration copied to clipboard.`);
  };

  const handleImportJSON = () => {
    if (!importJson) {
      showNotification("Please paste a JSON configuration first.", "error");
      return;
    }

    try {
      const parsed = JSON.parse(importJson);
      if (!Array.isArray(parsed)) {
        throw new Error("Payload must be a JSON array.");
      }

      if (importType === "projects") {
        setProjects(parsed);
        localStorage.setItem("erha_projects", JSON.stringify(parsed));
        showNotification("Projects array imported successfully.");
      } else {
        setTeamMembers(parsed);
        localStorage.setItem("erha_team_members", JSON.stringify(parsed));
        showNotification("Team members array imported successfully.");
      }
      setImportJson("");
    } catch (err: any) {
      showNotification(`Failed to parse JSON: ${err.message}`, "error");
    }
  };

  const handleResetToDefaults = () => {
    if (confirm("Are you sure you want to reset ALL data to code defaults? This will erase local additions and edits.")) {
      setProjects(defaultProjects);
      localStorage.setItem("erha_projects", JSON.stringify(defaultProjects));

      setTeamMembers(defaultTeam as any);
      localStorage.setItem("erha_team_members", JSON.stringify(defaultTeam));

      showNotification("Restored default projects and team configuration.");
    }
  };

  // Login View
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 relative overflow-hidden animate-fade-in">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--neon-purple)]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--neon-cyan)]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-md w-full glass rounded-3xl p-8 border border-white/10 relative z-10 hover:neon-border transition-all">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl glass-strong border border-[var(--neon-cyan)]/30 mx-auto flex items-center justify-center mb-4 text-[var(--neon-cyan)] shadow-[0_0_15px_rgba(99,235,249,0.15)]">
              <Key size={30} className="animate-pulse" />
            </div>
            <h1 className="font-display text-2xl text-white mb-2">Administrative Core</h1>
            <p className="text-xs text-muted-foreground">
              Enter credentials to access ERHA Technologies panel.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block font-mono">
                Access Passcode
              </label>
              <div className="relative">
                <input
                  required
                  type={showKey ? "text" : "password"}
                  value={accessKey}
                  onChange={(e) => setAccessKey(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 rounded-xl glass border border-white/10 text-sm focus:border-[var(--neon-cyan)] focus:outline-none transition bg-black/40 text-white font-mono"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                >
                  {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="p-3.5 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 text-xs flex gap-2 items-center animate-shake font-mono">
                <ShieldAlert size={14} className="shrink-0" />
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="btn-neon w-full py-3.5 rounded-xl inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Unlock Terminal <ArrowRight size={14} />
            </button>
          </form>
          
          <div className="text-center mt-6">
            <span className="text-[10px] text-muted-foreground font-mono">
              Demo Key: <code className="text-white border-b border-dashed border-white/20">admin123</code>
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 py-12 max-w-7xl mx-auto animate-fade-in relative">
      {/* Toast Alert overlay */}
      {message && (
        <div className={`fixed bottom-6 right-6 z-50 px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 border animate-slide-up font-mono text-xs ${
          message.type === "success" 
            ? "border-[var(--neon-cyan)]/30 bg-black/90 text-white" 
            : "border-red-500/30 bg-black/90 text-red-400"
        }`}>
          <div className={`w-2 h-2 rounded-full ${message.type === "success" ? "bg-[var(--neon-cyan)] shadow-[0_0_8px_var(--neon-cyan)]" : "bg-red-500"}`} />
          {message.text}
        </div>
      )}

      {/* Header Panel */}
      <div className="glass rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_8px_var(--neon-cyan)] animate-pulse" />
            <span className="text-[10px] tracking-[0.2em] font-mono text-[var(--neon-cyan)] uppercase">
              ERHA administrative core // online
            </span>
          </div>
          <h1 className="font-display text-2xl text-white">Management Console</h1>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <div className="text-right hidden sm:block">
            <div className="text-xs font-mono text-muted-foreground">Session Authed</div>
            <div className="text-[10px] font-mono text-[var(--neon-cyan)]">admin@erhatechnologies</div>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-muted-foreground hover:text-white inline-flex items-center gap-1.5 bg-white/5 cursor-pointer hover:border-red-500/30 hover:bg-red-500/10 transition-all duration-300"
          >
            <LogOut size={13} /> Log Out
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Active Projects", value: projects.length, icon: FolderGit, color: "text-[var(--neon-cyan)]" },
          { label: "Team Directory", value: teamMembers.length, icon: Users, color: "text-[var(--neon-purple)]" },
          { label: "Database Registry", value: "Local Storage", icon: Database, color: "text-green-400" },
          { label: "Sync Status", value: "Code-Ready", icon: UserCheck, color: "text-[var(--neon-cyan)]" }
        ].map((s, idx) => (
          <div key={idx} className="glass rounded-xl p-4 border border-white/5 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-1">{s.label}</div>
              <div className={`text-lg font-bold font-display ${s.color}`}>{s.value}</div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground shrink-0">
              <s.icon size={18} />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation tabs */}
      <div className="flex border-b border-white/5 mb-8">
        {[
          { id: "projects", label: "Projects Portfolio", icon: FolderGit },
          { id: "team", label: "Team Members", icon: Users },
          { id: "system", label: "System Data Controls", icon: Settings }
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id as any)}
            className={`px-5 py-4 border-b-2 text-xs font-semibold inline-flex items-center gap-2 transition cursor-pointer ${
              activeTab === t.id
                ? "border-[var(--neon-cyan)] text-white bg-white/5"
                : "border-transparent text-muted-foreground hover:text-white"
            }`}
          >
            <t.icon size={14} />
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Contents: PROJECTS */}
      {activeTab === "projects" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="font-display text-lg text-white">Project Listings</h2>
            <button
              onClick={openAddProject}
              className="btn-neon px-4 py-2 rounded-full inline-flex items-center gap-1.5 text-xs font-bold cursor-pointer"
            >
              <Plus size={14} /> Add Project
            </button>
          </div>

          <div className="glass rounded-xl border border-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-white/5 text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                    <th className="p-4">Accent</th>
                    <th className="p-4">Project Title</th>
                    <th className="p-4">Tag/Category</th>
                    <th className="p-4">Description</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm text-foreground">
                  {projects.map((p, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <div
                          className="w-3.5 h-3.5 rounded-full border border-white/20"
                          style={{ backgroundColor: p.color.startsWith("var") ? `oklch(0.78 0.16 195)` : p.color }}
                        />
                      </td>
                      <td className="p-4 font-bold text-white">{p.title}</td>
                      <td className="p-4">
                        <span className="text-[10px] font-mono uppercase bg-white/10 px-2 py-0.5 rounded-md">
                          {p.tag}
                        </span>
                      </td>
                      <td className="p-4 text-xs text-muted-foreground max-w-xs truncate">{p.desc}</td>
                      <td className="p-4 text-right">
                        <div className="inline-flex gap-2">
                          <button
                            onClick={() => openEditProject(idx)}
                            className="p-2 rounded-lg bg-white/5 text-muted-foreground hover:text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/10 transition cursor-pointer"
                            title="Edit"
                          >
                            <Edit2 size={13} />
                          </button>
                          <button
                            onClick={() => requestDelete("project", idx)}
                            className="p-2 rounded-lg bg-white/5 text-muted-foreground hover:text-red-400 hover:bg-red-500/10 transition cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {projects.length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-xs text-muted-foreground font-mono">
                        No projects in registry. Click "Add Project" to begin.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab Contents: TEAM */}
      {activeTab === "team" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="font-display text-lg text-white">Employee Directory</h2>
            <button
              onClick={openAddMember}
              className="btn-neon px-4 py-2 rounded-full inline-flex items-center gap-1.5 text-xs font-bold cursor-pointer"
            >
              <Plus size={14} /> Add Employee
            </button>
          </div>

          <div className="glass rounded-xl border border-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-white/5 text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                    <th className="p-4">Initials</th>
                    <th className="p-4">Full Name</th>
                    <th className="p-4">Role/Designation</th>
                    <th className="p-4">Accent</th>
                    <th className="p-4">Skills</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm text-foreground">
                  {teamMembers.map((t, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <div className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-xs font-mono font-bold">
                          {t.initials}
                        </div>
                      </td>
                      <td className="p-4 font-bold text-white">{t.name}</td>
                      <td className="p-4 text-xs font-mono">{t.role}</td>
                      <td className="p-4 text-xs font-mono">
                        <span className={`text-[10px] uppercase px-2 py-0.5 rounded-full ${
                          t.accent === "cyan" 
                            ? "bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/20" 
                            : "bg-[var(--neon-purple)]/10 text-[var(--neon-purple)] border border-[var(--neon-purple)]/20"
                        }`}>
                          {t.accent}
                        </span>
                      </td>
                      <td className="p-4 text-xs text-muted-foreground max-w-xs truncate">
                        {t.skills.join(", ")}
                      </td>
                      <td className="p-4 text-right">
                        <div className="inline-flex gap-2">
                          <button
                            onClick={() => openEditMember(idx)}
                            className="p-2 rounded-lg bg-white/5 text-muted-foreground hover:text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/10 transition cursor-pointer"
                            title="Edit"
                          >
                            <Edit2 size={13} />
                          </button>
                          <button
                            onClick={() => requestDelete("team", idx)}
                            className="p-2 rounded-lg bg-white/5 text-muted-foreground hover:text-red-400 hover:bg-red-500/10 transition cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {teamMembers.length === 0 && (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-xs text-muted-foreground font-mono">
                        No team members in registry. Click "Add Employee" to begin.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab Contents: SYSTEM CONTROLS */}
      {activeTab === "system" && (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Export Panel */}
          <div className="glass rounded-xl border border-white/5 p-6 space-y-6">
            <div>
              <h3 className="font-display text-lg text-white mb-2">Export Registries</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Export current local storage settings as code-ready JSON configurations to paste back permanently into the website source repository files.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => handleExportJSON("projects")}
                className="px-4 py-3 rounded-xl border border-white/10 text-xs font-semibold text-white hover:border-[var(--neon-cyan)] bg-white/5 inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
              >
                <Clipboard size={14} /> Export Projects JSON
              </button>
              <button
                onClick={() => handleExportJSON("team")}
                className="px-4 py-3 rounded-xl border border-white/10 text-xs font-semibold text-white hover:border-[var(--neon-purple)] bg-white/5 inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
              >
                <Clipboard size={14} /> Export Team JSON
              </button>
            </div>

            <div className="border-t border-white/5 pt-6 space-y-4">
              <div>
                <h4 className="font-display text-sm text-white mb-2">Reset Database Cache</h4>
                <p className="text-xs text-muted-foreground">
                  Clear local cache modifications, returning the portfolio and employee directory lists to hardcoded system source code default arrays.
                </p>
              </div>
              <button
                onClick={handleResetToDefaults}
                className="px-4 py-2.5 rounded-full border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-400 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer transition-all"
              >
                <RefreshCw size={13} /> Reset to System Code Defaults
              </button>
            </div>
          </div>

          {/* Import Panel */}
          <div className="glass rounded-xl border border-white/5 p-6 space-y-4">
            <div>
              <h3 className="font-display text-lg text-white mb-2">Import configuration</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Paste exported raw JSON array configuration strings into this panel to perform batch imports.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 block font-mono">
                  Registry Type
                </label>
                <select
                  value={importType}
                  onChange={(e) => setImportType(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg glass border border-white/10 text-xs focus:border-[var(--neon-cyan)] focus:outline-none bg-black/40 text-white"
                >
                  <option value="projects">Projects Portfolio</option>
                  <option value="team">Team Members</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 block font-mono">
                  JSON payload
                </label>
                <textarea
                  rows={6}
                  value={importJson}
                  onChange={(e) => setImportJson(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 text-xs focus:border-[var(--neon-cyan)] focus:outline-none transition resize-none bg-black/60 text-white font-mono"
                  placeholder='[ { "title": "New System", "tag": "Agentic AI", "desc": "Pipeline...", "color": "var(--neon-cyan)" } ]'
                />
              </div>

              <button
                onClick={handleImportJSON}
                className="btn-neon w-full py-3 rounded-xl inline-flex items-center justify-center gap-2 text-xs font-bold cursor-pointer"
              >
                <Upload size={14} /> Import Configuration
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL: PROJECT ADD/EDIT --- */}
      {projectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
          <div className="glass max-w-md w-full rounded-2xl p-6 border border-white/10 shadow-2xl relative">
            <h3 className="font-display text-lg text-white mb-4">
              {projectModal === "add" ? "Create New Project" : "Edit Project Registry"}
            </h3>

            <form onSubmit={saveProject} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">
                  Project Title *
                </label>
                <input
                  required
                  type="text"
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 text-sm focus:outline-none focus:border-[var(--neon-cyan)] bg-black/40 text-white"
                  placeholder="e.g. Brain Wave Automation"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Category Tag
                  </label>
                  <select
                    value={projectForm.tag}
                    onChange={(e) => setProjectForm({ ...projectForm, tag: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg glass border border-white/10 text-xs focus:outline-none focus:border-[var(--neon-cyan)] bg-black/40 text-white"
                  >
                    {["AI Platform", "Agentic AI", "Web App", "Mobile App", "Automation", "AI Search"].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Theme Color
                  </label>
                  <select
                    value={projectForm.color}
                    onChange={(e) => setProjectForm({ ...projectForm, color: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg glass border border-white/10 text-xs focus:outline-none focus:border-[var(--neon-cyan)] bg-black/40 text-white"
                  >
                    <option value="var(--neon-cyan)">Neon Cyan (Default)</option>
                    <option value="var(--neon-purple)">Neon Purple</option>
                    <option value="var(--neon-blue)">Cosmic Blue</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">
                  Description *
                </label>
                <textarea
                  required
                  rows={3}
                  value={projectForm.desc}
                  onChange={(e) => setProjectForm({ ...projectForm, desc: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 text-xs focus:outline-none focus:border-[var(--neon-cyan)] resize-none bg-black/40 text-white"
                  placeholder="Summarize product purpose and technology stack details..."
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setProjectModal(null)}
                  className="px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-muted-foreground hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-neon px-5 py-2 rounded-full text-xs font-bold cursor-pointer"
                >
                  {projectModal === "add" ? "Register" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL: TEAM MEMBER ADD/EDIT --- */}
      {teamModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto font-sans">
          <div className="glass max-w-lg w-full rounded-2xl p-6 border border-white/10 shadow-2xl my-8 relative">
            <h3 className="font-display text-lg text-white mb-4">
              {teamModal === "add" ? "Register New Employee" : "Edit Employee Directory"}
            </h3>

            <form onSubmit={saveMember} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={teamForm.name}
                    onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 text-sm focus:outline-none focus:border-[var(--neon-cyan)] bg-black/40 text-white"
                    placeholder="e.g. Ilyas Shahid"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Designation/Role *
                  </label>
                  <input
                    required
                    type="text"
                    value={teamForm.role}
                    onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 text-sm focus:outline-none focus:border-[var(--neon-cyan)] bg-black/40 text-white"
                    placeholder="e.g. AI Engineer"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Initials (Max 3 Chars)
                  </label>
                  <input
                    type="text"
                    maxLength={3}
                    value={teamForm.initials}
                    onChange={(e) => setTeamForm({ ...teamForm, initials: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 text-sm focus:outline-none focus:border-[var(--neon-cyan)] bg-black/40 text-white font-mono uppercase"
                    placeholder="e.g. FJ"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Theme Accent
                  </label>
                  <select
                    value={teamForm.accent}
                    onChange={(e) => setTeamForm({ ...teamForm, accent: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg glass border border-white/10 text-xs focus:outline-none focus:border-[var(--neon-cyan)] bg-black/40 text-white"
                  >
                    <option value="cyan">Cyan Accent (AI Team)</option>
                    <option value="purple">Purple Accent (Leadership/Research)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Avatar Image Upload
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-2.5 rounded-lg border border-white/10 text-xs font-semibold text-muted-foreground hover:text-white bg-white/5 inline-flex items-center justify-center gap-1.5 cursor-pointer w-full"
                    >
                      <Upload size={12} /> Upload
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">
                  Custom Avatar URL (Fallback)
                </label>
                <input
                  type="text"
                  value={teamForm.image.startsWith("data:") ? "Base64 Image Uploaded" : teamForm.image}
                  disabled={teamForm.image.startsWith("data:")}
                  onChange={(e) => setTeamForm({ ...teamForm, image: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 text-xs focus:outline-none focus:border-[var(--neon-cyan)] bg-black/40 text-white"
                  placeholder="https://example.com/avatar.jpg"
                />
                {teamForm.image.startsWith("data:") && (
                  <button
                    type="button"
                    onClick={() => setTeamForm({ ...teamForm, image: "" })}
                    className="text-[9px] text-red-400 font-mono mt-1 hover:underline block"
                  >
                    Remove uploaded base64 file
                  </button>
                )}
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block font-mono">
                  Core Skills (Comma separated list)
                </label>
                <input
                  type="text"
                  value={teamForm.skills}
                  onChange={(e) => setTeamForm({ ...teamForm, skills: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 text-xs focus:outline-none focus:border-[var(--neon-cyan)] bg-black/40 text-white"
                  placeholder="e.g. AI Automation, Prompt Engineering, MLOps"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block font-mono">
                  Tech Stack Tools (Comma separated list)
                </label>
                <input
                  type="text"
                  value={teamForm.tech}
                  onChange={(e) => setTeamForm({ ...teamForm, tech: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 text-xs focus:outline-none focus:border-[var(--neon-cyan)] bg-black/40 text-white font-mono"
                  placeholder="e.g. Python, PyTorch, LangChain, git"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5 block">
                  Biography Summary *
                </label>
                <textarea
                  required
                  rows={4}
                  value={teamForm.bio}
                  onChange={(e) => setTeamForm({ ...teamForm, bio: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 text-xs focus:outline-none focus:border-[var(--neon-cyan)] resize-none bg-black/40 text-white"
                  placeholder="Write a clear, rank-appropriate summary detailing experience, research, or development capabilities. Avoid founder/co-founder claims."
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setTeamModal(null)}
                  className="px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-muted-foreground hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-neon px-5 py-2 rounded-full text-xs font-bold cursor-pointer"
                >
                  {teamModal === "add" ? "Register" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL: CONFIRM DELETION --- */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
          <div className="glass max-w-sm w-full rounded-2xl p-6 border border-white/10 shadow-2xl relative text-center">
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mx-auto mb-4">
              <Trash2 size={20} />
            </div>
            <h3 className="font-display text-base text-white mb-2">Delete Registry Entry?</h3>
            <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
              Are you sure you want to remove this {deleteConfirm.type === "project" ? "project" : "team member"}? This action will remove the record from your local storage immediately.
            </p>

            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-muted-foreground hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={executeDelete}
                className="px-5 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white text-xs font-bold cursor-pointer transition-colors"
              >
                Delete Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
