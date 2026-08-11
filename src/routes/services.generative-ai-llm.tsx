import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { servicesList } from "@/lib/servicesData";

export const Route = createFileRoute("/services/generative-ai-llm")({
  head: () => {
    const s = servicesList.find((x) => x.id === "generative-ai-llm");
    return {
      meta: [
        { title: `${s?.title || "Generative AI & LLMs"} — Erha Technologies` },
        { name: "description", content: s?.desc || "" },
      ],
    };
  },
  component: () => <ServiceDetailPage serviceId="generative-ai-llm" />,
});
