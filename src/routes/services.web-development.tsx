import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/web-development")({
  head: () => ({
    meta: [
      { title: "Web Development & Enterprise Applications — Erha Technologies" },
      { name: "description", content: "High-performance React/Vite/Next.js web applications, client portals, and corporate sites." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="web-development" />,
});
