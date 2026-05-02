export function TechBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="orb animate-float"
        style={{
          width: 500,
          height: 500,
          background: "var(--neon-cyan)",
          top: "-10%",
          left: "-10%",
        }}
      />
      <div
        className="orb animate-float-slow"
        style={{
          width: 600,
          height: 600,
          background: "var(--neon-purple)",
          bottom: "-15%",
          right: "-10%",
          animationDelay: "2s",
        }}
      />
      <div
        className="orb animate-float"
        style={{
          width: 300,
          height: 300,
          background: "var(--neon-blue)",
          top: "40%",
          left: "50%",
          animationDelay: "4s",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, transparent 0%, var(--background) 80%)",
        }}
      />
    </div>
  );
}
