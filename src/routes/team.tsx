import { createFileRoute } from "@tanstack/react-router";
import muzammilImg from "@/assets/team-muzammil.jpg";
import abdulRehmanImg from "@/assets/team-abdul-rehman.png";
import salmanImg from "@/assets/team-salman.jpg";
import zeeshanImg from "@/assets/team-zeeshan.jpg";
import ilyasResearchImg from "@/assets/team-ilyas-research.jpg";
import faizResearchImg from "@/assets/founder-faiz.jpg";
import ramzanResearchImg from "@/assets/team-ramzan-research.jpg";
import sadiaResearchImg from "@/assets/team-sadia-research.png";
import samiaResearchImg from "@/assets/team-samia-research.jpg";
import ummeaimanResearchImg from "@/assets/team-ummeaiman-research.jpg";
import zunairaResearchImg from "@/assets/team-zunaira-research.jpg";
import qamarImg from "@/assets/team-qamar.png";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Erha Technologies" },
      {
        name: "description",
        content: "Meet the AI Development and Research Writing teams behind Erha Technologies.",
      },
      { property: "og:title", content: "Our Team — Erha Technologies" },
      {
        property: "og:description",
        content: "The minds building the future of AI at Erha Technologies.",
      },
    ],
  }),
  component: TeamPage,
});

const teamMembers = [
  // Leadership
  {
    name: "Ilyas Shahid",
    role: "Founder",
    initials: "IS",
    image: ilyasResearchImg,
    accent: "purple",
    bio: "Founder & CEO leading Erha Technologies. Architect of our enterprise AI division, merging advanced machine learning paradigms with scalable delivery structures.",
    skills: ["System Architecture", "AI Strategy", "Strategy", "Operations"],
    tech: ["PyTorch", "Transformers", "Python", "Cloud Infrastructure"],
  },
  {
    name: "Faiz Jillani",
    role: "Co-Founder",
    initials: "FJ",
    image: faizResearchImg,
    accent: "purple",
    bio: "Co-Founder guiding technical operations. Specialized in crossover AI models and enterprise-grade systems engineering.",
    skills: ["MLOps & Scaling", "AI Research", "Operations Management"],
    tech: ["Python", "PyTorch", "Transformers", "GitHub Enterprise"],
  },

  // AI Development Team
  {
    name: "Muhammad Salman Anwar",
    role: "Agentic AI Engineer",
    initials: "MSA",
    image: salmanImg,
    accent: "cyan",
    bio: "Agentic AI Engineer constructing multi-agent architectures and autonomous workflow routing.",
    skills: [
      "AI Automation",
      "AI Researching",
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
    accent: "cyan",
    bio: "AI Engineer with experience in Generative AI, LLM-powered applications, and AI-driven business solutions. Skilled in developing intelligent systems, prompt engineering, and workflow automation. Experienced in data annotation and AI model development to support high-quality machine learning outcomes. Passionate about leveraging cutting-edge AI technologies to solve complex business challenges. Dedicated to continuous learning and innovation in the field of artificial intelligence.",
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
    accent: "cyan",
    bio: "Junior AI Engineer developing foundational vector pipelines and integration testing scripts.",
    skills: ["Data Pipelines", "Prompt Engineering", "System Integration"],
    tech: ["Hugging Face", "Python", "Docker", "PostgreSQL"],
  },
  {
    name: "Muhammad Zeeshan",
    role: "Junior AI Engineer",
    initials: "MZ",
    image: zeeshanImg,
    accent: "cyan",
    imagePosition: "object-top",
    bio: "Junior AI Engineer constructing full-stack interfaces and dynamic dashboard visualization modules.",
    skills: ["Full Stack Dev", "State Management", "Visual Aesthetics"],
    tech: ["TanStack Start", "React 19", "Tailwind CSS", "Vite"],
  },
  {
    name: "Muhammad Qamar",
    role: "AI Researcher",
    initials: "MQ",
    image: qamarImg,
    accent: "cyan",
    bio: "AI Researcher analyzing SOTA models, fine-tuning methodologies, and performance validation criteria.",
    skills: ["Statistical Analysis", "Model Fine-Tuning", "Hyperparameter Tuning"],
    tech: ["Jupyter", "Pandas", "PyTorch", "TensorBoard"],
  },

  // Data & Cognitive Team
  {
    name: "Muhammad Ramzan",
    role: "Data Scientist",
    initials: "MR",
    image: ramzanResearchImg,
    accent: "purple",
    bio: "Data Scientist building predictive models, AI clustering pipelines, and neural network data analytics.",
    skills: ["Predictive Modeling", "Clustering Algorithms", "AI Telemetry"],
    tech: ["NumPy", "Pandas", "Scikit-Learn", "R"],
  },
  {
    name: "Sadia Sadiq",
    role: "Data Analyst",
    initials: "SS",
    image: sadiaResearchImg,
    accent: "purple",
    bio: "Data Analyst performing data synthesis, trend evaluations, and AI performance visualization dashboards.",
    skills: ["Data Wrangling", "Trend Analysis", "Performance Dashboarding"],
    tech: ["SQL", "PowerBI", "Excel", "Tableau"],
  },
  {
    name: "Samia Akash",
    role: "Cloud Database Engineer",
    initials: "SA",
    image: samiaResearchImg,
    accent: "purple",
    bio: "Cloud Database Engineer configuring distributed schemas, vector databases, and storage optimizations for AI model hosting.",
    skills: ["Distributed Storage", "Vector Indexing", "Latency Reduction"],
    tech: ["AWS RDS", "Pinecone", "Redis", "PostgreSQL"],
  },
  {
    name: "Umm-e-Aiman",
    role: "AI Researcher",
    initials: "UA",
    image: ummeaimanResearchImg,
    accent: "purple",
    bio: "AI Researcher exploring neural bioinformatics, language models for genetic sequencing, and computational biology.",
    skills: ["Bioinformatics", "Neural Sequences", "Computational Biology"],
    tech: ["BLAST", "Biopython", "R", "NCBI Entrez"],
  },
  {
    name: "Zunaira Naseem",
    role: "AI Researcher",
    initials: "ZN",
    image: zunairaResearchImg,
    accent: "purple",
    bio: "AI Researcher focusing on NLP pipelines, linguistic semantic models, and translation transformers.",
    skills: ["NLP Architectures", "Semantic Analysis", "Translation Models"],
    tech: ["NLTK", "SpaCy", "Hugging Face", "Python"],
  },
];

function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[number] | null>(null);

  return (
    <div className="px-6 py-24 md:py-28 max-w-7xl mx-auto animate-fade-up">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6">
          The <span className="text-gradient">minds</span> behind Erha
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Our unified team of AI engineers, developers, and cognitive data researchers. Click any member
          to view their profile.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {teamMembers.map((m) => {
          const accentVar = m.accent === "cyan" ? "var(--neon-cyan)" : "var(--neon-purple)";
          return (
            <div
              key={m.name}
              className="cyber-corner glass card-3d rounded-2xl p-6 text-center group flex flex-col items-center justify-center relative overflow-hidden cursor-pointer hover:shadow-[0_0_30px_rgba(99,235,249,0.12)] transition-all"
              onClick={() => setSelectedMember(m)}
            >
              <div className="cyber-corner-inner flex flex-col items-center justify-center w-full h-full">
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <div
                    className="absolute inset-0 rounded-full animate-spin-slow"
                    style={{
                      background:
                        m.accent === "cyan"
                          ? "conic-gradient(from 0deg, var(--neon-cyan), var(--neon-purple), var(--neon-blue), var(--neon-cyan))"
                          : "conic-gradient(from 0deg, var(--neon-purple), var(--neon-blue), var(--neon-cyan), var(--neon-purple))",
                    }}
                  />
                  <div
                    className="absolute inset-1 rounded-full flex items-center justify-center font-display text-2xl text-foreground overflow-hidden"
                    style={{ background: "var(--card)" }}
                  >
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={m.name}
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                          m.imagePosition || "object-center"
                        }`}
                      />
                    ) : (
                      m.initials
                    )}
                  </div>
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ boxShadow: `0 0 30px ${accentVar}` }}
                  />
                </div>
                <h3 className="text-lg font-bold mb-1 font-display tracking-tight leading-tight transition-all duration-300 group-hover:text-[var(--neon-cyan)] group-hover:glow-text-cyan">
                  {m.name}
                </h3>
                <div
                  className="text-[10px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 group-hover:tracking-[0.22em]"
                  style={{ color: "#63EBF9" }}
                >
                  {m.role}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bio Modal Dialog */}
      <Dialog
        open={selectedMember !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedMember(null);
        }}
      >
        <DialogContent className="glass-strong border-[var(--neon-cyan)]/25 rounded-2xl max-w-xl text-left text-foreground overflow-hidden p-6 animate-dialog-content">
          {selectedMember && (
            <div>
              <DialogHeader className="flex flex-col gap-1 border-b border-[var(--border)] pb-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--neon-cyan)]/30">
                    {selectedMember.image ? (
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[var(--card)] text-xl font-bold font-display">
                        {selectedMember.initials}
                      </div>
                    )}
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold font-display tracking-tight text-white leading-tight">
                      {selectedMember.name}
                    </DialogTitle>
                    <DialogDescription className="text-xs font-mono uppercase tracking-widest text-[var(--neon-cyan)] mt-1">
                      {selectedMember.role}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="flex flex-col gap-5 text-sm leading-relaxed">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[var(--neon-cyan)] font-bold font-mono mb-2">
                    BIOGRAPHY
                  </h4>
                  <p className="text-muted-foreground">{selectedMember.bio}</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[var(--neon-cyan)] font-bold font-mono mb-2">
                    CORE SKILLS
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMember.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white font-medium"
                      >
                        {s}
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
