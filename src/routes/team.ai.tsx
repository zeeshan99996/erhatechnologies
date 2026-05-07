import { createFileRoute } from "@tanstack/react-router";
import muzammilImg from "@/assets/team-muzammil.jpg";
import abdulRehmanImg from "@/assets/team-abdul-rehman.png";
import salmanImg from "@/assets/team-salman.jpg";
import zeeshanImg from "@/assets/team-zeeshan.jpg";

export const Route = createFileRoute("/team/ai")({
  head: () => ({
    meta: [
      { title: "AI Development Team — Erha Technologies" },
      { name: "description", content: "Meet the AI engineers and researchers building autonomous, agentic AI systems at Erha Technologies." },
      { property: "og:title", content: "AI Development Team — Erha Technologies" },
      { property: "og:description", content: "Engineers and researchers building autonomous AI at Erha Technologies." },
    ],
  }),
  component: AiTeamPage,
});

type Member = { name: string; role: string; initials: string; bio: string; image?: string; imagePosition?: string };

const aiTeam: Member[] = [
  { name: "Salman Anwar", role: "Agentic Ai Engineer", initials: "SA", bio: "Architects and develops autonomous, multi-agent AI systems to solve complex business challenges.", image: salmanImg },
  { name: "Muzammil Shadab", role: "Ai Engineer", initials: "MS", bio: "Develops and deploys scalable AI models, specializing in LLM fine-tuning and intelligent integrations.", image: muzammilImg },
  { name: "Abdul Rehman", role: "Junior Ai Engineer", initials: "AR", bio: "Assists in building intelligent AI pipelines, data processing, and developing machine learning solutions.", image: abdulRehmanImg },
  { name: "Muhammad Zeeshan", role: "Full Stack Developer", initials: "MZ", bio: "Builds high-performance, AI-powered web applications and dynamic digital experiences.", image: zeeshanImg, imagePosition: "object-top" }
];

function AiTeamPage() {
  return <TeamGrid members={aiTeam} accent="cyan" />;
}

function TeamGrid({ members, accent }: { members: Member[]; accent: "cyan" | "purple" }) {
  const accentVar = accent === "cyan" ? "var(--neon-cyan)" : "var(--neon-purple)";
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
      {members.map((m) => (
        <div key={m.name} className="glass card-3d rounded-2xl p-8 text-center group">
          <div className="relative w-32 h-32 mx-auto mb-5">
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{ background: "conic-gradient(from 0deg, var(--neon-cyan), var(--neon-purple), var(--neon-blue), var(--neon-cyan))" }}
            />
            <div
              className="absolute inset-1 rounded-full flex items-center justify-center font-display text-3xl text-foreground overflow-hidden"
              style={{ background: "var(--card)" }}
            >
              {m.image ? (
                <img src={m.image} alt={m.name} className={`w-full h-full object-cover ${m.imagePosition || "object-center"}`} />
              ) : (
                m.initials
              )}
            </div>
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: `0 0 40px ${accentVar}` }}
            />
          </div>
          <h3 className="font-display text-xl">{m.name}</h3>
          <div className="text-xs uppercase tracking-wider mt-1" style={{ color: accentVar }}>{m.role}</div>
          <p className="text-sm text-muted-foreground mt-3">{m.bio}</p>
        </div>
      ))}
    </div>
  );
}
