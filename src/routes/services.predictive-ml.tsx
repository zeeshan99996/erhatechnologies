import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { servicesList } from "@/lib/servicesData";

export const Route = createFileRoute("/services/predictive-ml")({
  head: () => {
    const s = servicesList.find((x) => x.id === "predictive-ml");
    return {
      meta: [
        { title: `${s?.title || "Predictive ML"} — Erha Technologies` },
        { name: "description", content: s?.desc || "" },
      ],
    };
  },
  component: () => <ServiceDetailPage serviceId="predictive-ml" />,
});
