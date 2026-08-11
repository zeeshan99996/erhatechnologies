import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/content-marketing")({
  head: () => ({
    meta: [
      { title: "Content Marketing & Copywriting — Erha Technologies" },
      { name: "description", content: "High-authority technical articles, whitepapers, and conversion copywriting." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="content-marketing" />,
});
