import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { servicesList } from "@/lib/servicesData";

export const Route = createFileRoute("/services/ai-chatbots")({
  head: () => {
    const s = servicesList.find((x) => x.id === "ai-chatbots");
    return {
      meta: [
        { title: `${s?.title || "AI Chatbots"} — Erha Technologies` },
        { name: "description", content: s?.desc || "" },
      ],
    };
  },
  component: () => <ServiceDetailPage serviceId="ai-chatbots" />,
});
