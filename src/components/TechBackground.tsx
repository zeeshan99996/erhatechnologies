import { useEffect, useRef } from "react";

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Re-size handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracking
    const mouse = { x: -1000, y: -1000, radius: 160 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      document.documentElement.style.removeProperty("--mouse-x");
      document.documentElement.style.removeProperty("--mouse-y");
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Particles array
    const particleCount = Math.min(70, Math.floor((width * height) / 20000));
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glowColor: string;
    }> = [];

    // Premium color options corresponding to our CSS themes:
    // Cyan: rgba(99, 235, 249, alpha)
    // Blue: rgba(56, 189, 248, alpha)
    // Purple: rgba(168, 85, 247, alpha)
    // Gold: rgba(229, 193, 88, alpha)
    const colorChoices = [
      { base: "rgba(99, 235, 249, 0.4)", glow: "rgba(99, 235, 249, 0.08)" },
      { base: "rgba(56, 189, 248, 0.4)", glow: "rgba(56, 189, 248, 0.08)" },
      { base: "rgba(168, 85, 247, 0.4)", glow: "rgba(168, 85, 247, 0.08)" },
      { base: "rgba(229, 193, 88, 0.35)", glow: "rgba(229, 193, 88, 0.06)" },
    ];

    for (let i = 0; i < particleCount; i++) {
      const choice = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.2 + 1.2,
        color: choice.base,
        glowColor: choice.glow,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce walls
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Mouse attraction/repulsion
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          p1.x -= (dxMouse / distMouse) * force * 0.8;
          p1.y -= (dyMouse / distMouse) * force * 0.8;
        }

        // Draw particle glow
        ctx.fillStyle = p1.glowColor;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle
        ctx.fillStyle = p1.color;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (130 - dist) / 130;
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);

            // Extract opacity modified variants for color stops
            const stopColor1 = p1.color
              .replace("0.4", (alpha * 0.18).toString())
              .replace("0.35", (alpha * 0.15).toString());
            const stopColor2 = p2.color
              .replace("0.4", (alpha * 0.18).toString())
              .replace("0.35", (alpha * 0.15).toString());

            gradient.addColorStop(0, stopColor1);
            gradient.addColorStop(1, stopColor2);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Dynamic Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
      {/* Futuristic Grid Layer */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      {/* Background gradients */}
      <div
        className="orb animate-float"
        style={{
          width: 500,
          height: 500,
          background: "var(--neon-cyan)",
          top: "-10%",
          left: "-10%",
          opacity: 0.15,
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
          opacity: 0.15,
        }}
      />
      <div
        className="orb animate-float"
        style={{
          width: 550,
          height: 550,
          background: "var(--neon-gold)",
          top: "35%",
          left: "25%",
          animationDelay: "4s",
          opacity: 0.08,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at top, transparent 0%, var(--background) 80%)",
        }}
      />
    </div>
  );
}
