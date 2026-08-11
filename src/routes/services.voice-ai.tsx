import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { servicesList } from "@/lib/servicesData";

export const Route = createFileRoute("/services/voice-ai")({
  head: () => {
    const s = servicesList.find((x) => x.id === "voice-ai");
    return {
      meta: [
        { title: `${s?.title || "Voice AI"} — Erha Technologies` },
        { name: "description", content: s?.desc || "" },
      ],
    };
  },
  component: () => <ServiceDetailPage serviceId="voice-ai" />,
});
