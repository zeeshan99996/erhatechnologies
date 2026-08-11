import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/cloud-devops")({
  head: () => ({
    meta: [
      { title: "Cloud, DevOps & Infrastructure Engineering — Erha Technologies" },
      { name: "description", content: "Automated CI/CD, Kubernetes orchestration, and cloud infrastructure management." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="cloud-devops" />,
});
