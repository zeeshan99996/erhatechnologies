import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/aeo-geo")({
  head: () => ({
    meta: [
      { title: "AEO, GEO & AI Search Optimization — Erha Technologies" },
      { name: "description", content: "Optimize your brand for ChatGPT, Perplexity, and Google SGE citations and authority." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="aeo-geo" />,
});
