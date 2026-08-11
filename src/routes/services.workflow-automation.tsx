import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/workflow-automation")({
  head: () => ({
    meta: [
      { title: "AI Workflow Automation & Integration — Erha Technologies" },
      { name: "description", content: "Automate complex enterprise operations across 200+ SaaS platforms with intelligent RPA." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="workflow-automation" />,
});
