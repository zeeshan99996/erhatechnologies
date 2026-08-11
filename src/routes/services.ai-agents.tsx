import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/ai-agents")({
  head: () => ({
    meta: [
      { title: "AI Agents & Autonomous Systems — Erha Technologies" },
      { name: "description", content: "Autonomous multi-agent swarms that plan, reason, and execute complex business workflows." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="ai-agents" />,
});
