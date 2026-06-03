import { useEffect, useRef, useState } from "react";

export function GlowingCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mouse = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Snap the dot to mouse position immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }

      // Update glow immediately
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mouse.x - 160}px, ${mouse.y - 160}px, 0)`;
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const onMouseDown = () => {
      setIsClicked(true);
    };

    const onMouseUp = () => {
      setIsClicked(false);
    };

    // Track hovered items
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target or parent is interactive
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "CANVAS" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-pointer") ||
        target.classList.contains("cursor-pointer") ||
        target.getAttribute("role") === "button";

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    // Animation Loop for Ring (Inertia Lag)
    let frameId: number;
    const updateRing = () => {
      // Lerp equation
      ring.x += (mouse.x - ring.x) * 0.16;
      ring.y += (mouse.y - ring.y) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }

      frameId = requestAnimationFrame(updateRing);
    };
    updateRing();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(frameId);
    };
  }, [isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Background Ambient Spotlight following the cursor */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 w-80 h-80 rounded-full blur-[70px] mix-blend-screen z-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 235, 249, 0.12) 0%, rgba(99, 235, 249, 0.04) 45%, transparent 70%)",
          opacity: isVisible ? (isHovered ? 1.0 : 0.65) : 0,
        }}
      />

      {/* Custom Cursor Ring & Dot Layer */}
      <div
        className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.25s ease" }}
      >
        {/* Outer Ring with Lerp Inertia */}
        <div
          ref={ringRef}
          className="fixed top-0 left-0 rounded-full border pointer-events-none transition-all duration-150 ease-out flex items-center justify-center"
          style={{
            width: isHovered ? "48px" : "24px",
            height: isHovered ? "48px" : "24px",
            marginTop: isHovered ? "-24px" : "-12px",
            marginLeft: isHovered ? "-24px" : "-12px",
            borderColor: isClicked
              ? "#ffffff"
              : isHovered
                ? "var(--neon-cyan)"
                : "rgba(99, 235, 249, 0.35)",
            boxShadow: isHovered ? "0 0 16px var(--neon-cyan)" : "none",
            backgroundColor: isHovered ? "rgba(99, 235, 249, 0.04)" : "transparent",
          }}
        />

        {/* Inner Sharp Dot */}
        <div
          ref={dotRef}
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none -mt-[3px] -ml-[3px]"
          style={{
            backgroundColor: isHovered ? "#ffffff" : "var(--neon-cyan)",
            boxShadow: "0 0 8px var(--neon-cyan)",
            transform: isClicked ? "scale(0.6)" : "scale(1)",
            transition: "transform 0.1s ease, background-color 0.2s ease",
          }}
        />
      </div>
    </>
  );
}
