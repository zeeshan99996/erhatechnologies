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
    <div className="px-6 py-24 max-w-7xl mx-auto animate-fade-up">
      <div className="text-center mb-12">
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">Our Team</div>
        <h1 className="font-display text-5xl md:text-7xl mb-6">
          The <span className="text-gradient">minds</span> behind Erha
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Two specialized squads — engineering autonomous AI and producing world-class research.
        </p>
      </div>

      <div className="flex justify-center mb-14">
        <div className="glass rounded-full p-1.5 inline-flex flex-wrap gap-1">
          {subLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-5 py-2.5 rounded-full text-sm text-muted-foreground hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
              activeProps={{
                className: "px-5 py-2.5 rounded-full text-sm text-white font-semibold drop-shadow-md",
                style: { background: "var(--gradient-neon)", boxShadow: "0 0 20px var(--neon-cyan)" },
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
