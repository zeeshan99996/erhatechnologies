import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/email-marketing")({
  head: () => ({
    meta: [
      { title: "Email Marketing & CRM Automation — Erha Technologies" },
      { name: "description", content: "Automated email sequences, newsletters, and Klaviyo/HubSpot CRM pipelines." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="email-marketing" />,
});
