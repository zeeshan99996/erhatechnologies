import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Rocket } from "lucide-react";
import founderImg from "@/assets/founder-ilyas.jpeg";
import coFounderImg from "@/assets/founder-faiz.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Erha Technologies — Led by CEO Ilyas Shahid" },
      {
        name: "description",
        content:
          "Learn about Erha Technologies, a Pakistan-based AI and digital innovation company led by CEO Ilyas Shahid.",
      },
      { property: "og:title", content: "About Erha Technologies" },
      { property: "og:description", content: "AI-driven digital innovation from Pakistan." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="px-6 py-20 md:py-24 max-w-6xl mx-auto animate-fade-up">
      <div className="text-center mb-16 md:mb-20">
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">
          About Us
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6">
          Engineering <span className="text-gradient">the future</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          ERHA TECHNOLOGIES is a forward-thinking digital solutions provider dedicated to empowering
          businesses through cutting-edge technology. We specialize in high-impact Artificial
          Intelligence integration and a comprehensive suite of digital services designed to
          streamline operations and drive growth.
        </p>
      </div>

      {/* Founder */}
      <div className="glass-strong rounded-3xl p-8 md:p-14 mb-12 md:mb-16 relative overflow-hidden">
        <div
          className="orb"
          style={{ width: 400, height: 400, background: "var(--neon-cyan)", top: -100, left: -100 }}
        />
        <div className="relative grid md:grid-cols-3 gap-8 md:gap-10 items-center">
          <div className="hover-orb max-w-[280px] mx-auto md:max-w-none w-full">
            <div
              className="aspect-square rounded-2xl overflow-hidden relative p-1"
              style={{ background: "var(--gradient-neon)" }}
            >
              <img
                src={founderImg}
                alt="Ilyas Shahid — CEO of Erha Technologies"
                className="w-full h-full object-cover rounded-xl object-top"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-3">
              CEO
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">Ilyas Shahid</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Led by CEO Ilyas Shahid, our company bridges the gap between complex technical
              challenges and intuitive, scalable solutions. Whether it's developing intelligent AI
              frameworks or delivering bespoke digital strategies, we focus on precision,
              innovation, and measurable results. At ERHA, we don't just build software; we engineer
              the future of your business.
            </p>
          </div>
        </div>
      </div>

      {/* Co-Founder */}
      <div className="glass-strong rounded-3xl p-8 md:p-14 mb-12 md:mb-16 relative overflow-hidden">
        <div
          className="orb"
          style={{
            width: 400,
            height: 400,
            background: "var(--neon-cyan)",
            bottom: -100,
            right: -100,
          }}
        />
        <div className="relative grid md:grid-cols-3 gap-8 md:gap-10 items-center">
          <div className="md:col-span-2 order-2 md:order-1 text-center md:text-left">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-3">
              Engineering Manager
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">Faiz Jillani</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              As Engineering Manager, Faiz Jillani drives the strategic vision and operational excellence at
              Erha Technologies. With a deep focus on scaling advanced AI solutions and fostering
              global partnerships, Faiz ensures our technological innovations translate into
              tangible business growth and sustainable competitive advantages for our clients.
            </p>
          </div>
          <div className="hover-orb order-1 md:order-2 max-w-[280px] mx-auto md:max-w-none w-full">
            <div
              className="aspect-square rounded-2xl overflow-hidden relative p-1"
              style={{ background: "var(--gradient-neon)" }}
            >
              <img
                src={coFounderImg}
                alt="Faiz Jillani — Engineering Manager of Erha Technologies"
                className="w-full h-full object-cover rounded-xl object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: Target,
            title: "Mission",
            text: "Empower businesses with AI-driven solutions that simplify complexity and unlock growth.",
          },
          {
            icon: Eye,
            title: "Vision",
            text: "Become a global leader in agentic AI and digital engineering — born from Pakistan, built for the world.",
          },
          {
            icon: Rocket,
            title: "Values",
            text: "Innovation, craftsmanship, transparency, and an obsession with shipping excellence.",
          },
        ].map((c) => (
          <div key={c.title} className="hover-orb">
            <div className="glass card-3d rounded-2xl p-8 h-full">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--gradient-neon)" }}
              >
                <c.icon size={22} className="text-background" />
              </div>
              <h3 className="font-display text-2xl mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/contact" className="btn-neon px-7 py-3 rounded-full inline-flex">
          Work with us
        </Link>
      </div>
    </div>
  );
}
