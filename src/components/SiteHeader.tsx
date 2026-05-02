import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import erhaLogo from "@/assets/erha-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={erhaLogo}
            alt="Erha Technologies"
            className="h-20 w-auto transition-all duration-300 group-hover:scale-105"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(70%) sepia(85%) saturate(450%) hue-rotate(160deg) brightness(110%) contrast(95%) drop-shadow(0 0 8px color-mix(in oklab, var(--neon-cyan) 70%, transparent))",
            }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-5 py-2.5 text-base rounded-md text-muted-foreground hover:text-foreground transition-colors relative flex items-center"
              activeProps={{ className: "px-5 py-2.5 text-base rounded-md text-foreground relative flex items-center" }}
              activeOptions={{ exact: true }}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full"
                      style={{ background: "var(--gradient-neon)", boxShadow: "0 0 10px var(--neon-cyan)" }} />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center btn-neon px-7 py-3 rounded-full text-base font-medium"
        >
          Get Started
        </Link>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-strong border-t border-border animate-fade-in">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-md text-sm hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
