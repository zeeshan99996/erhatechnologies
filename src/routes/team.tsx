import { createFileRoute } from "@tanstack/react-router";
import muzammilImg from "@/assets/team-muzammil.jpg";
import abdulRehmanImg from "@/assets/team-abdul-rehman.webp";
import salmanImg from "@/assets/team-salman.jpg";
import zeeshanImg from "@/assets/team-zeeshan.jpg";
import ilyasResearchImg from "@/assets/team-ilyas-research.jpg";
import faizResearchImg from "@/assets/manager-faiz.jpg";
import ramzanResearchImg from "@/assets/team-ramzan-research.jpg";
import sadiaResearchImg from "@/assets/team-sadia-research.png";
import samiaResearchImg from "@/assets/team-samia-research.jpg";
import ummeaimanResearchImg from "@/assets/team-ummeaiman-research.jpg";
import zunairaResearchImg from "@/assets/team-zunaira-research.png";
import qamarImg from "@/assets/team-qamar.webp";
import { useState, useEffect } from "react";
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
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/team" }
    ],
  }),
  component: TeamPage,
});

const teamMembers = [
  // Leadership
  {
    name: "Ilyas Shahid",
    role: "CEO",
    initials: "IS",
    image: ilyasResearchImg,
    accent: "purple",
    bio: "CEO leading Erha Technologies. Architect of our enterprise AI strategy, merging advanced machine learning research with robust engineering pipelines to deliver scalable business solutions. Experienced in orchestrating high-performing technology teams and guiding digital transformation initiatives for global enterprises. Passionate about driving innovation and shaping the future of artificial intelligence in commerce and technology.",
    skills: ["System Architecture", "AI Strategy", "Executive Leadership", "Business Development", "Operations Scaling"],
    tech: ["PyTorch", "Transformers", "Python", "Cloud Infrastructure"],
  },
  {
    name: "Faiz Jillani",
    role: "Engineering Manager",
    initials: "FJ",
    image: faizResearchImg,
    accent: "purple",
    bio: "Engineering Manager guiding technical operations and systems engineering. Specialized in cross-over artificial intelligence models, cloud infrastructure optimization, and enterprise MLOps pipelines. Committed to bridging the gap between state-of-the-art AI research and production-grade software architecture. Focuses on ensuring reliability, security, and scalability across all digital product deployments.",
    skills: ["MLOps & Scaling", "AI Systems Engineering", "Cloud Infrastructure", "Technical Management", "Security & Compliance"],
    tech: ["Python", "PyTorch", "Transformers", "GitHub Enterprise"],
  },

  // AI Development Team
  {
    name: "Muhammad Salman Anwar",
    role: "Agentic AI Engineer",
    initials: "MSA",
    image: salmanImg,
    accent: "cyan",
    bio: "AI and Data Science professional with expertise in Agentic AI, AI Automation, and AI Research. Experienced in building intelligent systems, Agents, automating workflows, and developing data-driven solutions that enhance business performance. Passionate about applying cutting-edge AI technologies to solve complex challenges and drive innovation.",
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
    accent: "cyan",
    bio: "AI Engineer with experience in Generative AI, LLM-powered applications, and AI-driven business solutions. Skilled in developing intelligent systems, prompt engineering, and workflow automation. Experienced in data annotation and AI model development to support high-quality machine learning outcomes. Passionate about leveraging cutting-edge AI technologies to solve complex challenges. Dedicated to continuous learning and innovation in the field of artificial intelligence.",
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
    bio: "Junior AI Engineer focused on developing foundational data pipelines, vector databases, and system integration workflows. Skilled in constructing data pre-processing scripts, fine-tuning retrieval configurations, and implementing automated testing frameworks. Dedicated to optimizing workflow reliability and collaborating with senior engineers to deploy robust machine learning systems.",
    skills: ["Data Pipelines", "Prompt Engineering", "System Integration", "Vector Databases", "API Testing"],
    tech: ["Hugging Face", "Python", "Docker", "PostgreSQL"],
  },
  {
    name: "Muhammad Zeeshan",
    role: "Junior AI Engineer",
    initials: "MZ",
    image: zeeshanImg,
    accent: "cyan",
    imagePosition: "object-top",
    bio: "Junior AI Engineer specializing in front-end application architectures, interactive user interfaces, and dynamic data visualization dashboards. Proficient in modern web frameworks, state management libraries, and responsive web design. Passionate about translating complex AI models into clean, user-friendly frontend experiences that deliver high visual impact.",
    skills: ["Frontend Development", "State Management", "UI/UX Aesthetics", "React & TypeScript", "API Integration"],
    tech: ["TanStack Start", "React 19", "Tailwind CSS", "Vite"],
  },
  {
    name: "Muhammad Qamar",
    role: "AI Researcher",
    initials: "MQ",
    image: qamarImg,
    accent: "cyan",
    bio: "AI Researcher analyzing state-of-the-art machine learning models, model fine-tuning methodologies, and performance validation criteria. Skilled in deep learning research, dataset curation, hyperparameter optimization, and evaluating neural network behaviors. Focused on transitioning advanced research concepts into practical, deployable algorithmic solutions.",
    skills: ["Deep Learning", "Model Fine-Tuning", "Hyperparameter Tuning", "Data Curation", "Performance Evaluation"],
    tech: ["Jupyter", "Pandas", "PyTorch", "TensorBoard"],
  },

  // Data & Cognitive Team
  {
    name: "Muhammad Ramzan",
    role: "Data Scientist",
    initials: "MR",
    image: ramzanResearchImg,
    accent: "purple",
    bio: "Data Scientist specializing in predictive modeling, telemetry analytics, and advanced machine learning clustering pipelines. Skilled in developing regression models, mathematical validation frameworks, and translating raw data streams into actionable operational insights. Committed to utilizing data engineering and statistical analysis to enhance AI decision-making systems.",
    skills: ["Predictive Modeling", "Clustering Algorithms", "AI Telemetry", "Statistical Analysis", "Data Science"],
    tech: ["NumPy", "Pandas", "Scikit-Learn", "R"],
  },
  {
    name: "Sadia Sadiq",
    role: "Data Analyst",
    initials: "SS",
    image: sadiaResearchImg,
    accent: "purple",
    bio: "Data Analyst focused on performing complex data synthesis, telemetry trend evaluations, and developing AI performance visualization dashboards. Skilled in querying databases, cleaning unstructured data, and constructing high-impact business intelligence reports. Dedicated to helping engineering teams monitor AI system efficiency and user engagement through metrics.",
    skills: ["Data Wrangling", "Trend Analysis", "Performance Dashboarding", "SQL & Database Querying", "BI Reporting"],
    tech: ["SQL", "PowerBI", "Excel", "Tableau"],
  },
  {
    name: "Samia Akash",
    role: "Cloud Database Engineer",
    initials: "SA",
    image: samiaResearchImg,
    accent: "purple",
    bio: "Cloud Database Engineer configuring distributed database schemas, vector database indexing, and storage optimizations for AI model hosting. Experienced in cloud storage replication, database clustering, and latency reduction techniques to support real-time retrieval-augmented generation. Dedicated to maintaining high-availability database architectures.",
    skills: ["Distributed Storage", "Vector Indexing", "Latency Optimization", "Cloud Database Management", "NoSQL & SQL Systems"],
    tech: ["AWS RDS", "Pinecone", "Redis", "PostgreSQL"],
  },
  {
    name: "Umm-e-Aiman",
    role: "AI Researcher",
    initials: "UA",
    image: ummeaimanResearchImg,
    accent: "purple",
    bio: "AI Researcher exploring computational biology, genetic sequence analysis, and neural bioinformatics datasets. Focused on utilizing large language models and machine learning pipelines to parse biochemical data structures, identify biological markers, and accelerate genomic research. Dedicated to advancing intersectional research in bioinformatics and deep learning.",
    skills: ["Bioinformatics", "Neural Sequences", "Computational Biology", "Genomic Data Analytics", "Scientific Research"],
    tech: ["BLAST", "Biopython", "R", "NCBI Entrez"],
  },
  {
    name: "Zunaira Naseem",
    role: "AI Researcher",
    initials: "ZN",
    image: zunairaResearchImg,
    accent: "purple",
    bio: "AI Researcher specializing in Natural Language Processing (NLP) architectures, semantic language models, and machine translation transformers. Skilled in text tokenization, sentiment analysis pipelines, prompt parsing, and semantic alignment checks. Dedicated to building conversational agents and optimizing linguistic understanding in generative models.",
    skills: ["NLP Architectures", "Semantic Analysis", "Translation Transformers", "Language Modeling", "Text Parsing"],
    tech: ["NLTK", "SpaCy", "Hugging Face", "Python"],
  },
];

const imageMapper: Record<string, any> = {
  "__ilyasResearchImg__": ilyasResearchImg,
  "__faizResearchImg__": faizResearchImg,
  "__salmanImg__": salmanImg,
  "__muzammilImg__": muzammilImg,
  "__abdulRehmanImg__": abdulRehmanImg,
  "__zeeshanImg__": zeeshanImg,
  "__qamarImg__": qamarImg,
  "__ramzanResearchImg__": ramzanResearchImg,
  "__sadiaResearchImg__": sadiaResearchImg,
  "__samiaResearchImg__": samiaResearchImg,
  "__ummeaimanResearchImg__": ummeaimanResearchImg,
  "__zunairaResearchImg__": zunairaResearchImg,
};

const resolveImage = (imageStr: string) => {
  if (imageStr && imageStr.startsWith("__") && imageStr in imageMapper) {
    return imageMapper[imageStr];
  }
  return imageStr;
};

function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);
  const [teamList, setTeamList] = useState<any[]>(teamMembers);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("erha_team_members");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          const mapped = parsed.map((m: any) => ({
            ...m,
            image: resolveImage(m.image)
          }));
          setTeamList(mapped);
        } catch (e) {
          console.error("Failed to parse local team members cache", e);
        }
      } else {
        // Initialize localStorage with string representations of images for the default array
        const localStorageVersion = teamMembers.map(m => {
          const imageKey = Object.keys(imageMapper).find(key => imageMapper[key] === m.image);
          return {
            ...m,
            image: imageKey || m.image
          };
        });
        localStorage.setItem("erha_team_members", JSON.stringify(localStorageVersion));
      }
    }
  }, []);

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
        {teamList.map((m) => {
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
                  <p className="text-muted-foreground text-justify">{selectedMember.bio}</p>
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
