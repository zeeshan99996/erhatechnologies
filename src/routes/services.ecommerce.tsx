import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/ecommerce")({
  head: () => ({
    meta: [
      { title: "E-Commerce Development & Storefronts — Erha Technologies" },
      { name: "description", content: "High-converting online stores & headless Shopify/Next.js e-commerce architectures." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="ecommerce" />,
});
