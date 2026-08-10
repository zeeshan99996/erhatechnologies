import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Lock, Eye, FileText, CheckCircle2, ArrowRight, Mail } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Erha Technologies Enterprise AI & Web" },
      {
        name: "description",
        content:
          "Erha Technologies Privacy Policy. Learn how we collect, protect, and handle data for our AI systems, software development, and enterprise clients.",
      },
      { property: "og:title", content: "Privacy Policy — Erha Technologies" },
      {
        property: "og:description",
        content: "Enterprise data privacy, security standards, and client confidentiality policies.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.erhatechnologies.com/privacy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="px-4 sm:px-6 py-20 md:py-28 max-w-4xl mx-auto animate-fade-up">
      {/* Page Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Shield size={14} />
          Legal & Compliance
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          Privacy <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Policy</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Your privacy and intellectual property confidentiality are fundamental to everything we build at Erha Technologies.
        </p>
        <div className="mt-4 text-xs font-mono text-slate-400">
          Last Updated: August 10, 2026 • Effective Date: January 1, 2026
        </div>
      </div>

      {/* Main Policy Content */}
      <div className="glass-strong rounded-3xl p-6 sm:p-10 border border-slate-800/80 space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed shadow-2xl">
        {/* Section 1 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2.5 text-white font-extrabold text-lg sm:text-xl">
            <Lock className="text-cyan-400 shrink-0" size={20} />
            <h2>1. Commitment to Data Confidentiality</h2>
          </div>
          <p>
            At <strong className="text-white">Erha Technologies</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we engineer production-grade AI systems, multi-agent workflows, custom software applications, and digital growth services. We strictly safeguard all client information, proprietary datasets, source code, and business intelligence.
          </p>
          <p>
            <strong className="text-cyan-300 font-bold">Zero AI Model Training Guarantee:</strong> We do NOT use client proprietary data, code repositories, or chat query logs to train public AI models. All enterprise deployments utilize isolated vector databases, private RAG pipelines, or dedicated API instances.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5 text-white font-extrabold text-lg sm:text-xl">
            <Eye className="text-indigo-400 shrink-0" size={20} />
            <h2>2. Information We Collect</h2>
          </div>
          <p>We collect information required to deliver custom software and AI services effectively:</p>
          <ul className="space-y-2 pl-4 list-disc text-slate-300 text-sm">
            <li>
              <strong className="text-white">Contact & Account Details:</strong> Name, business email, phone number, company name, and project specifications provided when booking consultations or submitting contact forms.
            </li>
            <li>
              <strong className="text-white">Project Specs & Datasets:</strong> Documentation, API keys, schema definitions, and vector data provided for RAG indexing, custom LLM fine-tuning, or software integration.
            </li>
            <li>
              <strong className="text-white">Technical Usage Telemetry:</strong> Anonymized server logs, IP addresses, browser types, and performance telemetry used strictly for platform security, load balancing, and SLA monitoring.
            </li>
            <li>
              <strong className="text-white">Payment & Billing Data:</strong> Payment details processed securely via Stripe or official banking channels. We do not store raw credit card numbers on our servers.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5 text-white font-extrabold text-lg sm:text-xl">
            <FileText className="text-emerald-400 shrink-0" size={20} />
            <h2>3. How We Use Your Information</h2>
          </div>
          <p>Information collected is used solely for standard business and technical operational goals:</p>
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-200">Architecting, developing, and deploying custom AI & software solutions</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-indigo-400 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-200">Providing technical support, system maintenance, and 24/7 SLA monitoring</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-200">Executing milestone billing, invoicing, and service tier management</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-200">Complying with mutual NDAs, SOC2, GDPR, and legal obligations</span>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5 text-white font-extrabold text-lg sm:text-xl">
            <Shield className="text-purple-400 shrink-0" size={20} />
            <h2>4. Security Standards & Data Protection</h2>
          </div>
          <p>
            We implement enterprise-grade physical, technical, and administrative security measures:
          </p>
          <ul className="space-y-2 pl-4 list-disc text-slate-300 text-sm">
            <li><strong className="text-white">Encryption:</strong> TLS 1.3 encryption for data in transit and AES-256 encryption for data at rest.</li>
            <li><strong className="text-white">Air-Gapped Options:</strong> Private cloud deployment (AWS EC2 / GCP Compute) and air-gapped on-premise execution for Enterprise Swarm packages.</li>
            <li><strong className="text-white">Access Control:</strong> Strict Role-Based Access Control (RBAC) and mandatory Multi-Factor Authentication (MFA) across all engineer workflows.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5 text-white font-extrabold text-lg sm:text-xl">
            <Mail className="text-cyan-400 shrink-0" size={20} />
            <h2>5. Contact Our Privacy Team</h2>
          </div>
          <p>
            If you have questions regarding this Privacy Policy, wish to exercise your data deletion rights, or require an executed Mutual NDA prior to project discovery, please contact us:
          </p>
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-white block">Erha Technologies Privacy & Legal Department</span>
              <span className="text-xs text-cyan-400 font-mono">info@erhatechnologies.com • 0302 3333499</span>
            </div>
            <Link
              to="/contact"
              className="btn-neon text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5"
            >
              Contact Legal Team <ArrowRight size={12} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
