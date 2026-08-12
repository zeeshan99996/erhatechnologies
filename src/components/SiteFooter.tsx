import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Facebook, Instagram } from "lucide-react";
import erhaLogo from "@/assets/erha-logo-new.png";

export function SiteFooter() {
  return (
    <footer className="bg-slate-900/40 backdrop-blur-xl text-slate-300 pt-16 pb-12 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background ambient radial glow matching landing page */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-blue-500/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <a href="https://www.erhatechnologies.com/" className="inline-block">
                <img src={erhaLogo} alt="Erha Technologies" className="h-11 sm:h-12 w-auto object-contain hover:opacity-90 transition-opacity" />
              </a>
            </div>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Erha Technologies engineers production-grade AI systems, agentic workflows, custom web applications, and enterprise digital solutions.
            </p>
            <div className="pt-2 flex items-center gap-2.5 flex-wrap">
              <a
                href="https://www.linkedin.com/company/erha-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.facebook.com/people/Erha-Technologies/61592220862497/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/erhatechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@erhatechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.95-1.72-.07 2.39-.19 4.79-.37 7.18-.32 3.3-3.21 5.92-6.52 5.56-3.32-.36-5.88-3.48-5.38-6.8.44-2.91 3.07-5.07 6.01-4.7 0 1.28.01 2.57.01 3.86-1.54-.15-3.08.73-3.59 2.2-.62 1.79.47 3.85 2.37 4.17 1.74.29 3.44-1.01 3.58-2.76.13-2.94.13-5.88.19-8.82-.02-2.76-.01-5.52-.01-8.28z"/>
                </svg>
              </a>
              <a
                href="mailto:info@erhatechnologies.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-cyan-400 transition-colors">
                  Pricing &amp; Packages
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  Leadership &amp; Team
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cyan-400 transition-colors">
                  Case Studies &amp; Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                  Careers &amp; Hiring
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li>
                <Link to="/services" search={{ cat: "ai" }} className="hover:text-cyan-400 transition-colors">
                  Agentic AI Systems
                </Link>
              </li>
              <li>
                <Link to="/services" search={{ cat: "dev" }} className="hover:text-cyan-400 transition-colors">
                  Enterprise Web &amp; Apps
                </Link>
              </li>
              <li>
                <Link to="/services" search={{ cat: "dev" }} className="hover:text-cyan-400 transition-colors">
                  Cloud &amp; Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services" search={{ cat: "seo" }} className="hover:text-cyan-400 transition-colors">
                  SEO &amp; Search Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Legal &amp; Policies</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li>
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-cyan-400 transition-colors">
                  Refund &amp; Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact Support &amp; NDA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Erha Technologies. All rights reserved.</p>
          <p className="flex items-center gap-2 font-medium">
            <span>Led by CEO Ilyas Shahid</span>
            <span>•</span>
            <span>Multan, Pakistan 🇵🇰</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
