import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/saas-engineering")({
  head: () => ({
    meta: [
      { title: "Custom SaaS & Product Development — Erha Technologies" },
      { name: "description", content: "End-to-end multi-tenant SaaS product engineering from MVP to enterprise scale." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="saas-engineering" />,
});
