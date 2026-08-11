import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/modernization")({
  head: () => ({
    meta: [
      { title: "Software Modernization & Refactoring — Erha Technologies" },
      { name: "description", content: "Cloud-native migration, legacy code refactoring, and security vulnerability patching." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="modernization" />,
});
