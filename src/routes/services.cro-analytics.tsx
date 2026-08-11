import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/cro-analytics")({
  head: () => ({
    meta: [
      { title: "Conversion Rate Optimization & Analytics — Erha Technologies" },
      { name: "description", content: "Data-backed website optimization, heatmaps, A/B testing, and GA4 telemetry." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="cro-analytics" />,
});
