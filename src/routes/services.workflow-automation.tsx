import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { servicesList } from "@/lib/servicesData";

export const Route = createFileRoute("/services/workflow-automation")({
  head: () => {
    const s = servicesList.find((x) => x.id === "workflow-automation");
    return {
      meta: [
        { title: `${s?.title || "AI Workflow Automation"} — Erha Technologies` },
        { name: "description", content: s?.desc || "" },
      ],
    };
  },
  component: () => <ServiceDetailPage serviceId="workflow-automation" />,
});
