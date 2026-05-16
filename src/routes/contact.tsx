import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Mail, MapPin, Phone, Send, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Erha Technologies" },
      { name: "description", content: "Get in touch with Erha Technologies. Based in Pakistan, working worldwide." },
      { property: "og:title", content: "Contact Erha Technologies" },
      { property: "og:description", content: "Let's build the future together." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", interest: "AI Development", message: "" });

  // Listen for AI agent fill commands
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as Record<string, string>;
      setForm(prev => ({
        name:     detail.name     !== undefined ? detail.name     : prev.name,
        email:    detail.email    !== undefined ? detail.email    : prev.email,
        interest: detail.interest !== undefined ? detail.interest : prev.interest,
        message:  detail.message  !== undefined ? detail.message  : prev.message,
      }));
      // Scroll to form
      document.querySelector("form")?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    window.addEventListener("erha:fill-contact", handler);
    return () => window.removeEventListener("erha:fill-contact", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Optimized structure for a professional "Inbox" look in your Gmail
      const formData = {
        "Full Name": form.name,
        "Email Address": form.email,
        "Service Interest": form.interest,
        "Message": form.message,
        "_subject": `New Inquiry: ${form.name} is interested in ${form.interest}`,
        "_template": "table", // Neatly organizes the fields in your inbox
        "_honey": "",
      };

      await fetch("https://formsubmit.co/ajax/erhatechnologiesofficial@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setSent(true);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 py-20 md:py-24 max-w-6xl mx-auto animate-fade-up">
      <div className="text-center mb-12 md:mb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">Contact</div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6">
          Let's <span className="text-gradient">connect</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Have a project in mind? Let's bring it to life.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Form */}
        <div className="md:col-span-3 glass-strong rounded-2xl p-8">
          {sent ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                style={{ background: "var(--gradient-neon)" }}>
                <Send className="text-background" />
              </div>
              <h3 className="font-display text-2xl mb-2">Message sent</h3>
              <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass border border-border focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)]/30 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass border border-border focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)]/30 transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Interest</label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass border border-border focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)]/30 transition bg-background"
                >
                  <option value="AI Development">AI Development</option>
                  <option value="Web & App Development">Web & App Development</option>
                  <option value="Research Writing">Research Writing</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass border border-border focus:border-[var(--neon-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-cyan)]/30 transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-neon px-7 py-3 rounded-full inline-flex items-center gap-2 disabled:opacity-50">
                {isSubmitting ? "Sending..." : "Send message"} <Send size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="md:col-span-2 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "erhatechnologiesofficial@gmail.com" },
            { icon: Phone, label: "Phone", value: "0302 3333499" },
            { icon: MapPin, label: "Address", value: "Pace & Pace Mall, near Chase Up, 2nd Floor, Office #76, Chungi #6, Multan, Pakistan" },
          ].map((c) => (
            <div key={c.label} className="glass rounded-xl p-5 flex items-center gap-4 hover:neon-border transition-all">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "var(--gradient-neon)" }}>
                <c.icon size={18} className="text-background" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="text-sm">{c.value}</div>
              </div>
            </div>
          ))}

          <div className="glass rounded-xl overflow-hidden h-48 relative">
            <iframe
              title="Erha Technologies — Multan, Pakistan"
              src="https://www.openstreetmap.org/export/embed.html?bbox=71.4400,30.1700,71.5400,30.2300&layer=mapnik&marker=30.2000,71.4900"
              className="w-full h-full border-0 grayscale opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(135deg, transparent 0%, color-mix(in oklab, var(--neon-cyan) 20%, transparent) 100%)" }} />
          </div>

          <div className="flex gap-3 justify-center pt-2">
            <a href="https://www.linkedin.com/company/erha-technologies/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:neon-glow transition-all">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
