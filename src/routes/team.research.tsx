import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Twitter, Github } from "lucide-react";

export const Route = createFileRoute("/team/research")({
  head: () => ({
    meta: [
      { title: "Research Writing Team — Erha Technologies" },
      { name: "description", content: "Meet the academic writers and researchers producing world-class theses, papers and publications at Erha Technologies." },
      { property: "og:title", content: "Research Writing Team — Erha Technologies" },
      { property: "og:description", content: "Academic writers and researchers at Erha Technologies." },
    ],
  }),
  component: ResearchTeamPage,
});

const researchTeam = [
  { name: "Fatima Raza", role: "Research Lead", initials: "FR", bio: "Heads academic writing & thesis supervision." },
  { name: "Mariam Tariq", role: "Senior Research Writer", initials: "MT", bio: "Specialist in CS, AI and engineering papers." },
  { name: "Bilal Ahmed", role: "Thesis Editor", initials: "BA", bio: "Editing, structure and academic tone refinement." },
  { name: "Hira Yousaf", role: "Literature Review Analyst", initials: "HY", bio: "Systematic reviews and citation curation." },
  { name: "Usman Javed", role: "Data & Methodology Writer", initials: "UJ", bio: "Quantitative methods and statistical reporting." },
  { name: "Noor Fatima", role: "Plagiarism & QA Specialist", initials: "NF", bio: "Originality, formatting and journal compliance." },
];

function ResearchTeamPage() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
      {researchTeam.map((m) => (
        <div key={m.name} className="glass card-3d rounded-2xl p-8 text-center group">
          <div className="relative w-32 h-32 mx-auto mb-5">
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{ background: "conic-gradient(from 0deg, var(--neon-purple), var(--neon-blue), var(--neon-cyan), var(--neon-purple))" }}
            />
            <div
              className="absolute inset-1 rounded-full flex items-center justify-center font-display text-3xl text-foreground"
              style={{ background: "var(--card)" }}
            >
              {m.initials}
            </div>
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: "0 0 40px var(--neon-purple)" }}
            />
          </div>
          <h3 className="font-display text-xl">{m.name}</h3>
          <div className="text-xs uppercase tracking-wider mt-1 text-[var(--neon-purple)]">{m.role}</div>
          <p className="text-sm text-muted-foreground mt-3">{m.bio}</p>
          <div className="flex justify-center gap-2 mt-5">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full glass flex items-center justify-center hover:neon-glow transition-all">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
