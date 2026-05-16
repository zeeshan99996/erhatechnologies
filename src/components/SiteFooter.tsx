import { Link } from "@tanstack/react-router";
import { Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border glass-strong">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-display text-xl mb-3">
            ERHA<span className="text-gradient">.tech</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Innovating the future with AI & digital solutions from Pakistan to the world.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm mb-3 text-gradient">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/team" className="hover:text-foreground">Team</Link></li>
            <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm mb-3 text-gradient">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>AI Development</li>
            <li>Web & App Development</li>
            <li>Agentic AI Systems</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm mb-3 text-gradient">Connect</h4>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/company/erha-technologies/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:neon-glow transition-all">
              <Linkedin size={16} />
            </a>
            <a href="mailto:erhatechnologiesofficial@gmail.com" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:neon-glow transition-all">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Erha Technologies — Founded by Ilyas Shahid, Pakistan 🇵🇰
      </div>
    </footer>
  );
}
