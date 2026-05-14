import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import erhaLogo from "../assets/erha-logo.png";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { TechBackground } from "../components/TechBackground";
import { AgenticChatbot } from "../components/AgenticChatbot";

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
      { title: "Erha Technologies — AI & Digital Solutions" },
      { name: "description", content: "Erha Technologies builds AI, web, and agentic solutions from Pakistan. Innovating the future with intelligent digital systems." },
      { name: "author", content: "Ilyas Shahid — Erha Technologies" },
      { property: "og:title", content: "Erha Technologies — AI & Digital Solutions" },
      { property: "og:description", content: "Innovating the future with AI & digital solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: erhaLogo },
      { rel: "apple-touch-icon", href: erhaLogo },
      { rel: "shortcut icon", href: erhaLogo },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <TechBackground />
      <SiteHeader />
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
      <AgenticChatbot />
    </>
  );
}
