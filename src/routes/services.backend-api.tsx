import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/backend-api")({
  head: () => ({
    meta: [
      { title: "Backend, API & Microservices Engineering — Erha Technologies" },
      { name: "description", content: "High-throughput RESTful / GraphQL API architectures & microservices backends." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="backend-api" />,
});
