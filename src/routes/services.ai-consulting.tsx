import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/ai-consulting")({
  head: () => ({
    meta: [
      { title: "AI Strategy & Transformation Advisory — Erha Technologies" },
      { name: "description", content: "Strategic AI advisory to help executive teams roadmap high-ROI AI initiatives." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="ai-consulting" />,
});
