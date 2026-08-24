import { Outlet, Link, createRootRoute, HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { TechBackground } from "../components/TechBackground";
import { AgenticChatbot } from "../components/AgenticChatbot";
import { GlowingCursor } from "../components/GlowingCursor";
import { FloatingSocialBar } from "../components/FloatingSocialBar";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-20">
      <div className="max-w-md text-center glass-strong p-10 rounded-2xl">
        <h1 className="text-7xl font-display text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Signal lost in the matrix</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="inline-flex mt-6 btn-neon px-5 py-2 rounded-full text-sm">
          Return home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0f172a" },
      { title: "Erha Technologies — Enterprise AI & Digital Engineering" },
      {
        name: "description",
        content:
          "Erha Technologies engineers production-grade AI agents, custom LLMs, RAG systems, web applications, mobile apps, and search optimization solutions.",
      },
      { name: "keywords", content: "AI Agents, Agentic AI, Custom LLM, RAG, Web Development, Mobile Apps, Enterprise AI, SEO, AEO, Pakistan, Multan" },
      { name: "author", content: "Erha Technologies" },
      { property: "og:site_name", content: "Erha Technologies" },
      { property: "og:title", content: "Erha Technologies — Enterprise AI & Digital Engineering" },
      { property: "og:description", content: "Production-grade AI systems, multi-agent workflows, custom web applications, and enterprise digital solutions." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Erha Technologies — Enterprise AI & Digital Engineering" },
      { name: "twitter:description", content: "Production-grade AI systems, multi-agent workflows, custom web applications, and enterprise digital solutions." },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.erhatechnologies.com/#organization",
        "name": "Erha Technologies",
        "url": "https://www.erhatechnologies.com/",
        "logo": "https://www.erhatechnologies.com/favicon.png",
        "description": "Erha Technologies builds production-grade AI systems, multi-agent workflows, and high-performance digital products.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "71-A Model Town, near Pak Turk International School",
          "addressLocality": "Multan",
          "addressRegion": "Punjab",
          "postalCode": "60000",
          "addressCountry": "PK"
        },
        "telephone": "+92 302 3333499",
        "email": "info@erhatechnologies.com",
        "sameAs": [
          "https://www.linkedin.com/company/erha-technologies/",
          "https://www.facebook.com/people/Erha-Technologies/61592220862497/",
          "https://www.instagram.com/erhatechnologies",
          "https://www.tiktok.com/@erhatechnologies"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.erhatechnologies.com/#website",
        "url": "https://www.erhatechnologies.com/",
        "name": "Erha Technologies",
        "publisher": { "@id": "https://www.erhatechnologies.com/#organization" }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <GlowingCursor />
      <TechBackground />
      <SiteHeader />
      <FloatingSocialBar />
      <main className={`${isHome ? "" : "pt-16"} min-h-screen`}>
        <Outlet />
      </main>
      <SiteFooter />
      <AgenticChatbot />
    </>
  );
}
