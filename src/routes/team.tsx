import { createFileRoute, Link, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Erha Technologies" },
      { name: "description", content: "Meet the AI Development and Research Writing teams behind Erha Technologies." },
      { property: "og:title", content: "Our Team — Erha Technologies" },
      { property: "og:description", content: "The minds building the future of AI at Erha Technologies." },
    ],
  }),
  beforeLoad: ({ location }) => {
    if (location.pathname === "/team" || location.pathname === "/team/") {
      throw redirect({ to: "/team/ai" });
    }
  },
  component: TeamLayout,
});

const subLinks = [
  { to: "/team/ai", label: "AI Development Team" },
  { to: "/team/research", label: "Research Writing Team" },
] as const;

function TeamLayout() {
  return (
    <div className="px-6 py-20 md:py-24 max-w-7xl mx-auto animate-fade-up">
      <div className="text-center mb-12 md:mb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">Our Team</div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6">
          The <span className="text-gradient">minds</span> behind Erha
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Two specialized squads — engineering autonomous AI and producing world-class research.
        </p>
      </div>

      <div className="flex justify-center mb-14 px-4">
        <div className="glass rounded-[2rem] p-2 flex flex-col items-stretch gap-2 w-full max-w-[320px]">
          {subLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-6 py-3.5 rounded-full text-[13px] md:text-sm text-muted-foreground hover:text-white transition-all text-center"
              activeProps={{
                className: "px-6 py-3.5 rounded-full text-[13px] md:text-sm text-white font-bold text-center",
                style: { 
                  background: "var(--gradient-neon)", 
                  boxShadow: "0 0 25px color-mix(in oklab, var(--neon-cyan) 40%, transparent)",
                },
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
}
