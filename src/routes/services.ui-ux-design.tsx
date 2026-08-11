import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/ui-ux-design")({
  head: () => ({
    meta: [
      { title: "UI/UX Design & Product Experience — Erha Technologies" },
      { name: "description", content: "User-centered design systems, responsive web UI, and interactive prototypes." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="ui-ux-design" />,
});
