import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/ppc-google-ads")({
  head: () => ({
    meta: [
      { title: "Google Ads & PPC Campaign Management — Erha Technologies" },
      { name: "description", content: "High-ROI Pay-Per-Click advertising campaigns on Google Search & Display." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="ppc-google-ads" />,
});
