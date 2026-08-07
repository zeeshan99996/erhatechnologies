import { useEffect, useRef, useState } from "react";

export function GlowingCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

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

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-pointer") ||
        target.classList.contains("cursor-pointer");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    let frameId: number;
    const updateRing = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;

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
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.2s ease" }}
    >
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border pointer-events-none transition-all duration-150 ease-out flex items-center justify-center"
        style={{
          width: isHovered ? "44px" : "24px",
          height: isHovered ? "44px" : "24px",
          marginTop: isHovered ? "-22px" : "-12px",
          marginLeft: isHovered ? "-22px" : "-12px",
          borderColor: isHovered ? "#38bdf8" : "rgba(56, 189, 248, 0.4)",
          boxShadow: isHovered ? "0 0 20px rgba(56, 189, 248, 0.4)" : "none",
          backgroundColor: isHovered ? "rgba(56, 189, 248, 0.08)" : "transparent",
        }}
      />

      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none -mt-[3px] -ml-[3px]"
        style={{
          backgroundColor: "#38bdf8",
          boxShadow: "0 0 10px #38bdf8",
          transform: isClicked ? "scale(0.6)" : "scale(1)",
          transition: "transform 0.1s ease, background-color 0.2s ease",
        }}
      />
    </div>
  );
}
