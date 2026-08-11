import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/mobile-apps")({
  head: () => ({
    meta: [
      { title: "Mobile & Cross-Platform App Development — Erha Technologies" },
      { name: "description", content: "Native-quality iOS & Android mobile applications built with Flutter & React Native." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="mobile-apps" />,
});
