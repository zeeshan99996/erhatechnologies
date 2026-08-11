import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/ai-chatbots")({
  head: () => ({
    meta: [
      { title: "AI Chatbots & Virtual Assistants — Erha Technologies" },
      { name: "description", content: "Context-aware conversational AI chatbots built on your company knowledge base." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="ai-chatbots" />,
});
