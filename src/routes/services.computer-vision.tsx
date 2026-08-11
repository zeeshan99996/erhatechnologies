import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { servicesList } from "@/lib/servicesData";

export const Route = createFileRoute("/services/computer-vision")({
  head: () => {
    const s = servicesList.find((x) => x.id === "computer-vision");
    return {
      meta: [
        { title: `${s?.title || "Computer Vision"} — Erha Technologies` },
        { name: "description", content: s?.desc || "" },
      ],
    };
  },
  component: () => <ServiceDetailPage serviceId="computer-vision" />,
});
