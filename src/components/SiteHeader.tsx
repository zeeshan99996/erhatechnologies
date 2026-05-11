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
    <>
      <header className="fixed top-0 left-0 right-0 z-[70] glass-strong">
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
                activeProps={{
                  className:
                    "px-5 py-2.5 text-base rounded-md text-foreground relative flex items-center",
                }}
                activeOptions={{ exact: true }}
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full"
                        style={{
                          background: "var(--gradient-neon)",
                          boxShadow: "0 0 10px var(--neon-cyan)",
                        }}
                      />
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
            className="md:hidden p-2 text-foreground relative z-[80]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[100] animate-in fade-in duration-300">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-3xl"
            onClick={() => setOpen(false)}
          />
          
          {/* Content */}
          <nav className="relative h-full flex flex-col items-center justify-center p-8">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="orb w-80 h-80 bg-neon-cyan/10 -top-20 -left-20 animate-float" />
              <div className="orb w-80 h-80 bg-neon-purple/10 -bottom-20 -right-20 animate-float-slow" />
            </div>

            {/* Header in Menu */}
            <div className="absolute top-0 left-0 right-0 h-24 flex items-center justify-between px-6">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                <img src={erhaLogo} alt="Erha" className="h-12 w-auto" style={{ filter: "brightness(0) saturate(100%) invert(70%) sepia(85%) saturate(450%) hue-rotate(160deg)" }} />
              </Link>
              <button onClick={() => setOpen(false)} className="p-2 text-foreground">
                <X size={32} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center gap-6 w-full max-w-sm relative z-10">
              {links.map((l, i) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-display tracking-tight hover:text-neon-cyan transition-colors animate-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                  style={{ animationDelay: `${i * 100}ms` }}
                  activeProps={{ className: "text-2xl font-display tracking-tight text-gradient scale-105" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 btn-neon px-10 py-4 rounded-xl text-base font-bold tracking-widest uppercase animate-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                style={{ animationDelay: `${links.length * 100}ms` }}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
