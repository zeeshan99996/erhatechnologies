import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/voice-ai")({
  head: () => ({
    meta: [
      { title: "Voice AI Agents & Speech Automation — Erha Technologies" },
      { name: "description", content: "Human-like voice AI agents for phone support, appointment scheduling, and call campaigns." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="voice-ai" />,
});
