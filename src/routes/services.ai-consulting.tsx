import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { servicesList } from "@/lib/servicesData";

export const Route = createFileRoute("/services/ai-consulting")({
  head: () => {
    const s = servicesList.find((x) => x.id === "ai-consulting");
    return {
      meta: [
        { title: `${s?.title || "AI Strategy"} — Erha Technologies` },
        { name: "description", content: s?.desc || "" },
      ],
    };
  },
  component: () => <ServiceDetailPage serviceId="ai-consulting" />,
});
