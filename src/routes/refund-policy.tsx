import { createFileRoute, Link } from "@tanstack/react-router";
import { RefreshCw, DollarSign, Clock, ShieldCheck, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Erha Technologies Enterprise AI & Web" },
      {
        name: "description",
        content:
          "Erha Technologies Refund and Cancellation Policy. Transparent guidelines for project cancellations, milestone refunds, and service guarantees.",
      },
      { property: "og:title", content: "Refund Policy — Erha Technologies" },
      {
        property: "og:description",
        content: "Transparent refund terms, milestone cancellation terms, and client guarantees.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.erhatechnologies.com/refund-policy" }],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <div className="px-4 sm:px-6 py-20 md:py-28 max-w-4xl mx-auto animate-fade-up">
      {/* Page Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <RefreshCw size={14} />
          Transparent Terms
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          Refund &amp; <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">Cancellation Policy</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Clear, transparent, and fair refund terms across our AI Solutions, Software Development, and Search Growth packages.
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
            <ShieldCheck className="text-emerald-400 shrink-0" size={20} />
            <h2>1. Our Quality & Satisfaction Commitment</h2>
          </div>
          <p>
            At <strong className="text-white">Erha Technologies</strong>, we hold our engineering to the highest standards. We maintain close communication, weekly discovery syncs, and clear milestone deliverables so you have complete visibility throughout the lifecycle of your AI, web, mobile, or search project.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5 text-white font-extrabold text-lg sm:text-xl">
            <Clock className="text-cyan-400 shrink-0" size={20} />
            <h2>2. Pre-Initiation Cancellation (100% Refund)</h2>
          </div>
          <p>
            If you choose a package (Basic, Standard, or Premium) and decide to cancel <strong className="text-white">within 48 hours of payment</strong> — provided active engineering discovery, technical architecture setup, or code repository initialization has not yet commenced — you are eligible for a <strong className="text-cyan-300 font-bold">100% full refund</strong>.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5 text-white font-extrabold text-lg sm:text-xl">
            <DollarSign className="text-indigo-400 shrink-0" size={20} />
            <h2>3. Work-in-Progress & Milestone Refunds</h2>
          </div>
          <p>
            For active projects governed by milestone delivery schedules or monthly retainers:
          </p>
          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm block mb-0.5">Completed Milestones:</strong>
                <span className="text-xs text-slate-300">Milestones that have been built, reviewed, and approved by the client are non-refundable.</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm block mb-0.5">Uncompleted Future Milestones:</strong>
                <span className="text-xs text-slate-300">If you request to cancel mid-project, remaining unstarted milestones or unused retainer days will be refunded on a pro-rated basis.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5 text-white font-extrabold text-lg sm:text-xl">
            <RefreshCw className="text-purple-400 shrink-0" size={20} />
            <h2>4. Non-Refundable Direct Infrastructure Costs</h2>
          </div>
          <p>
            The following third-party infrastructure and API expenses incurred directly on behalf of your project are non-refundable:
          </p>
          <ul className="space-y-2 pl-4 list-disc text-slate-300 text-sm">
            <li><strong className="text-white">API Provider Usage Credits:</strong> External token usage for OpenAI (GPT-4o), Anthropic (Claude), Groq, or Pinecone vector DB indexing.</li>
            <li><strong className="text-white">Dedicated Cloud Servers:</strong> Provisioned AWS EC2, GCP instances, or dedicated GPU clusters reserved for your enterprise deployment.</li>
            <li><strong className="text-white">Domain &amp; SSL Costs:</strong> Domain registrations or custom SSL certificates purchased specifically for your domain.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5 text-white font-extrabold text-lg sm:text-xl">
            <HelpCircle className="text-cyan-400 shrink-0" size={20} />
            <h2>5. Refund Request Process & Timeline</h2>
          </div>
          <p>
            To submit a refund or cancellation request, please email our billing department with your project details and invoice number:
          </p>
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-white block">Erha Technologies Billing &amp; Support Team</span>
              <span className="text-xs text-emerald-400 font-mono">info@erhatechnologies.com • +92 302 3333499</span>
              <span className="text-[11px] text-slate-400 block mt-1">Approved refunds are credited to your original payment method within 5 to 10 business days.</span>
            </div>
            <Link
              to="/contact"
              className="btn-neon text-xs font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shrink-0"
            >
              Contact Support <ArrowRight size={12} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
