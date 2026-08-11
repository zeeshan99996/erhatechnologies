import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/predictive-ml")({
  head: () => ({
    meta: [
      { title: "Machine Learning & Predictive AI — Erha Technologies" },
      { name: "description", content: "Custom ML models for sales forecasting, churn prediction, and anomaly detection." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="predictive-ml" />,
});
