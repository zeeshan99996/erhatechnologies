import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/technical-seo")({
  head: () => ({
    meta: [
      { title: "SEO & Organic Search Growth — Erha Technologies" },
      { name: "description", content: "Organic search optimization, technical audits, schema markup, and keyword authority." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="technical-seo" />,
});
