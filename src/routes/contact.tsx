import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, CheckCircle2, Facebook, Instagram, ChevronDown } from "lucide-react";

// Custom TikTok icon since the installed lucide-react version doesn't include it
function Tiktok({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Erha Technologies Enterprise Software & AI" },
      {
        name: "description",
        content: "Get in touch with Erha Technologies. Schedule an AI software consultation or explore custom development.",
      },
      { property: "og:title", content: "Contact Erha Technologies" },
      { property: "og:description", content: "Let's build the future together." },
    ],
    links: [
      { rel: "canonical", href: "https://www.erhatechnologies.com/contact" }
    ],
  }),
  component: ContactPage,
});

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Pakistan",
  "United Arab Emirates",
  "Saudi Arabia",
  "Singapore",
  "Netherlands",
  "Turkey",
  "Japan",
  "China",
  "India",
  "Brazil",
  "South Africa",
  "Ireland",
  "New Zealand",
  "Switzerland",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Italy",
  "Spain",
  "Belgium",
  "Austria",
  "Malaysia"
].sort();

const servicePackages: Record<string, string[]> = {
  "Full Stack Development": [
    "SaaS MVP Development",
    "Custom Web Application",
    "E-Commerce Platform",
    "Enterprise System Architecture"
  ],
  "AI Development": [
    "Custom LLM Fine-Tuning",
    "Retrieval-Augmented Generation (RAG)",
    "Natural Language Processing (NLP)",
    "Computer Vision & Video Analytics"
  ],
  "Enterprise Web Applications": [
    "Headless CMS Website",
    "High-Performance Business Portal",
    "Enterprise Dashboard & Analytics"
  ],
  "Application Engineering": [
    "iOS & Android Mobile App",
    "Cross-Platform App (React Native/Flutter)",
    "Desktop Application"
  ],
  "Workflow Automation": [
    "Custom API & Webhook Integration",
    "RPA (Robotic Process Automation)",
    "Automated Data Scraping & ETL"
  ],
  "Agentic AI Systems": [
    "Autonomous Multi-Agent Mesh",
    "AI Research & Planning Agent",
    "Customer Support Agent with Tool Use"
  ]
};

const budgetRanges = [
  "$300 - $500",
  "$500 - $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+"
];

function CustomBudgetDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-white text-sm focus:border-cyan-400/80 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 hover:border-slate-700/80 transition-all duration-300 font-medium flex items-center justify-between cursor-pointer"
      >
        <span className={value ? "text-white font-semibold" : "text-slate-400 font-medium"}>
          {value || "Select budget"}
        </span>
        <ChevronDown size={18} className={`text-cyan-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full z-50 rounded-xl overflow-hidden border border-slate-700/80 bg-[#070c18] shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-xl animate-fade-in">
          {/* Header Banner matching user's reference screenshot */}
          <div className="bg-blue-600 text-white font-medium text-base sm:text-lg px-5 py-3 border-b border-blue-500/40">
            Select budget
          </div>

          {/* Options List matching user's reference screenshot */}
          <div className="py-1">
            {budgetRanges.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => {
                  onChange(b);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-5 py-3 text-base sm:text-lg font-normal transition-colors cursor-pointer flex items-center justify-between ${
                  value === b
                    ? "bg-blue-600/30 text-cyan-300 font-semibold"
                    : "text-white hover:bg-blue-600/20 hover:text-cyan-300"
                }`}
              >
                <span>{b}</span>
                {value === b && <span className="text-cyan-400 font-bold text-sm">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customCountry, setCustomCountry] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    package: "",
    budget: "",
    website: "",
    message: "",
  });

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as Record<string, string>;
      setForm((prev) => {
        const service = detail.service !== undefined 
          ? detail.service 
          : (detail.interest !== undefined ? detail.interest : prev.service);
        
        let targetCountry = prev.country;
        if (detail.country !== undefined) {
          targetCountry = detail.country;
          if (!countries.includes(detail.country)) {
            targetCountry = "Other";
            setCustomCountry(detail.country);
          }
        }

        return {
          name: detail.name !== undefined ? detail.name : prev.name,
          email: detail.email !== undefined ? detail.email : prev.email,
          phone: detail.phone !== undefined ? detail.phone : prev.phone,
          country: targetCountry,
          service: service,
          package: detail.package !== undefined ? detail.package : prev.package,
          budget: detail.budget !== undefined ? detail.budget : prev.budget,
          website: detail.website !== undefined ? detail.website : prev.website,
          message: detail.message !== undefined ? detail.message : prev.message,
        };
      });
      document.querySelector("form")?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    window.addEventListener("erha:fill-contact", handler);
    return () => window.removeEventListener("erha:fill-contact", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const finalCountry = form.country === "Other" ? customCountry : form.country;
      const formData = {
        "Full Name": form.name,
        "Email Address": form.email,
        "Phone / Whatsapp": form.phone,
        "Country": finalCountry,
        "Service": form.service,
        "Package": form.package || "Not Specified",
        "Budget Range": form.budget || "Not Specified",
        "Business / Website URL": form.website || "Not Specified",
        "Goals & Requirements": form.message,
        _subject: `New Strategy Session Request: ${form.name} (${form.service})`,
        _template: "table",
        _honey: "",
      };

      await fetch("https://formsubmit.co/ajax/info@erhatechnologies.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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
    <div className="px-4 sm:px-6 py-20 md:py-28 max-w-6xl mx-auto animate-fade-up">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Get In <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
          How we can help you?
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Form Container */}
        <div className="glass-strong border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-white">
          {sent ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="font-extrabold text-2xl mb-3 text-white">Request Received!</h3>
              <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you for requesting a free strategy session. Our team will review your business goals and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-200 mb-2 block font-sans">
                    Full Name <span className="text-cyan-400/90 font-extrabold ml-0.5">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-white text-sm focus:border-cyan-400/80 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:shadow-[0_0_15px_rgba(34,211,238,0.08)] hover:border-slate-700/80 transition-all duration-300 placeholder-slate-600 font-medium"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-200 mb-2 block font-sans">
                    Email Address <span className="text-cyan-400/90 font-extrabold ml-0.5">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-white text-sm focus:border-cyan-400/80 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:shadow-[0_0_15px_rgba(34,211,238,0.08)] hover:border-slate-700/80 transition-all duration-300 placeholder-slate-600 font-medium"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-200 mb-2 block font-sans">
                    Phone or Whatsapp <span className="text-cyan-400/90 font-extrabold ml-0.5">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-white text-sm focus:border-cyan-400/80 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:shadow-[0_0_15px_rgba(34,211,238,0.08)] hover:border-slate-700/80 transition-all duration-300 placeholder-slate-600 font-medium"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-200 mb-2 block font-sans">
                    Country <span className="text-cyan-400/90 font-extrabold ml-0.5">*</span>
                  </label>
                  <select
                    required
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-white text-sm focus:border-cyan-400/80 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:shadow-[0_0_15px_rgba(34,211,238,0.08)] hover:border-slate-700/80 transition-all duration-300 font-medium appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%20%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%2322d3ee%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat pr-10 cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-500 bg-slate-950">Select your country</option>
                    {countries.map((c) => (
                      <option key={c} value={c} className="text-white bg-slate-950">{c}</option>
                    ))}
                    <option value="Other" className="text-white bg-slate-950">Other / Not Listed</option>
                  </select>
                </div>
              </div>

              {/* Specify Country field if 'Other' is selected */}
              {form.country === "Other" && (
                <div className="mb-5 animate-fade-in">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-200 mb-2 block font-sans">
                    Specify Country <span className="text-cyan-400/90 font-extrabold ml-0.5">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={customCountry}
                    onChange={(e) => setCustomCountry(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-white text-sm focus:border-cyan-400/80 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:shadow-[0_0_15px_rgba(34,211,238,0.08)] hover:border-slate-700/80 transition-all duration-300 placeholder-slate-600 font-medium"
                    placeholder="Enter your country name"
                  />
                </div>
              )}

              {/* Row 3: Service, Package, Budget */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <div>
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-200 mb-2 block font-sans">
                    Service *
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => {
                      const serv = e.target.value;
                      setForm((prev) => ({
                        ...prev,
                        service: serv,
                        package: "", // reset package
                      }));
                    }}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-white text-sm focus:border-cyan-400/80 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:shadow-[0_0_15px_rgba(34,211,238,0.08)] hover:border-slate-700/80 transition-all duration-300 font-medium appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%20%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%2322d3ee%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat pr-10 cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-500 bg-slate-950">Select service</option>
                    {Object.keys(servicePackages).map((s) => (
                      <option key={s} value={s} className="text-white bg-slate-950">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-200 mb-2 block font-sans">
                    Package
                  </label>
                  <select
                    value={form.package}
                    onChange={(e) => setForm({ ...form, package: e.target.value })}
                    disabled={!form.service}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-white text-sm focus:border-cyan-400/80 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:shadow-[0_0_15px_rgba(34,211,238,0.08)] hover:border-slate-700/80 transition-all duration-300 font-medium disabled:opacity-30 disabled:cursor-not-allowed appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%20%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%2322d3ee%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat pr-10 cursor-pointer"
                  >
                    {!form.service ? (
                      <option value="" className="text-slate-500 bg-slate-950">Select service first</option>
                    ) : (
                      <>
                        <option value="" className="text-slate-500 bg-slate-950">Select package</option>
                        {(servicePackages[form.service] || []).map((p) => (
                          <option key={p} value={p} className="text-white bg-slate-950">{p}</option>
                        ))}
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-200 mb-2 block font-sans">
                    Budget Range
                  </label>
                  <CustomBudgetDropdown
                    value={form.budget}
                    onChange={(b) => setForm({ ...form, budget: b })}
                  />
                </div>
              </div>

              {/* Row 4: Business URL */}
              <div className="mb-5">
                <label className="text-[11px] uppercase tracking-widest font-bold text-slate-200 mb-2 block font-sans">
                  Business or Website URL
                </label>
                <input
                  type="text"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-white text-sm focus:border-cyan-400/80 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:shadow-[0_0_15px_rgba(34,211,238,0.08)] hover:border-slate-700/80 transition-all duration-300 placeholder-slate-600 font-medium"
                  placeholder="yourwebsite.com or company name"
                />
              </div>

              {/* Row 5: Goals & Requirements */}
              <div className="mb-8">
                <label className="text-[11px] uppercase tracking-widest font-bold text-slate-200 mb-2 block font-sans">
                  Your Goals & Requirements <span className="text-cyan-400/90 font-extrabold ml-0.5">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-white text-sm focus:border-cyan-400/80 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:shadow-[0_0_15px_rgba(34,211,238,0.08)] hover:border-slate-700/80 transition-all duration-300 resize-none placeholder-slate-600 font-medium"
                  placeholder="Tell us about your business, current challenges, and what results you want to achieve..."
                />
              </div>

              {/* Row 6: Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 btn-neon font-semibold text-sm rounded-full text-center flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info Cards */}
        <div className="h-full">
          <div className="space-y-4 h-full flex flex-col">
            {[
              {
                icon: Mail,
                label: "Email Support",
                value: "info@erhatechnologies.com",
                href: "mailto:info@erhatechnologies.com",
              },
              { icon: Phone, label: "Direct Phone", value: "0302 3333499", href: "tel:03023333499" },
              {
                icon: MapPin,
                label: "Headquarters",
                value:
                  "Pace & Pace Mall, near Chase Up, 2nd Floor, Office #02, Chungi #6, Multan, Pakistan",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="glass border border-slate-800 rounded-2xl p-5 flex items-center gap-4 shadow-xl hover:border-slate-700 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <c.icon size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors leading-tight block"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div className="text-sm sm:text-base font-bold text-white leading-tight">{c.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Interactive OpenStreetMap Container */}
            <div className="glass rounded-2xl overflow-hidden flex-1 min-h-[220px] border border-slate-800 relative">
              <iframe
                title="Erha Technologies — Office Location Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=71.4400,30.1700,71.5400,30.2300&layer=mapnik&marker=30.2000,71.4900"
                className="w-full h-full border-0 opacity-80"
                loading="lazy"
              />
            </div>

            <div className="flex gap-3 justify-start pt-1">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/erha-technologies/",
                  label: "LinkedIn",
                },
                {
                  icon: Tiktok,
                  href: "https://www.tiktok.com/@erhatechnologies",
                  label: "TikTok",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/erhatechnologies",
                  label: "Instagram",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/people/Erha-Technologies/61592220862497/",
                  label: "Facebook",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#45DEFD] hover:bg-[#45DEFD]/10 hover:border-[#45DEFD]/30 transition-all duration-300"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
