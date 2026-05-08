export function TechSphere({ size = 400 }: { size?: number }) {
  return (
    <div
      className="relative mx-auto w-full aspect-square"
      style={{ 
        maxWidth: size,
        perspective: 1200 
      }}
    >
      {/* Glowing core */}
      <div
        className="absolute inset-1/4 rounded-full animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, var(--neon-cyan) 0%, var(--neon-purple) 60%, transparent 100%)",
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[35%] h-[35%]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--neon-cyan), var(--neon-blue) 50%, oklch(0.15 0.05 265) 100%)",
          boxShadow:
            "0 0 60px var(--neon-cyan), inset -20px -20px 60px rgba(0,0,0,0.6)",
        }}
      />
      {/* Orbits */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border animate-spin-slow"
          style={{
            borderColor: i === 0 ? "var(--neon-cyan)" : i === 1 ? "var(--neon-purple)" : "var(--neon-blue)",
            opacity: 0.5,
            transform: `rotateX(${70 + i * 20}deg) rotateZ(${i * 30}deg)`,
            animationDuration: `${15 + i * 5}s`,
            animationDirection: i % 2 === 0 ? "normal" : "reverse",
          }}
        >
          <div
            className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full"
            style={{
              background: i === 0 ? "var(--neon-cyan)" : i === 1 ? "var(--neon-purple)" : "var(--neon-blue)",
              boxShadow: `0 0 20px currentColor`,
              color: i === 0 ? "var(--neon-cyan)" : i === 1 ? "var(--neon-purple)" : "var(--neon-blue)",
            }}
          />
        </div>
      ))}
      {/* Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`p-${i}`}
          className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full bg-white"
          style={{
            animation: `orbit ${8 + (i % 4) * 2}s linear infinite`,
            animationDelay: `${i * 0.3}s`,
            boxShadow: "0 0 8px var(--neon-cyan)",
          }}
        />
      ))}
    </div>
  );
}
