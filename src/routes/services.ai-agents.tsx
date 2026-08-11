import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { servicesList } from "@/lib/servicesData";

export const Route = createFileRoute("/services/ai-agents")({
  head: () => {
    const s = servicesList.find((x) => x.id === "ai-agents");
    return {
      meta: [
        { title: `${s?.title || "AI Agents"} — Erha Technologies` },
        { name: "description", content: s?.desc || "" },
      ],
    };
  },
  component: () => <ServiceDetailPage serviceId="ai-agents" />,
});
