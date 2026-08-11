import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/social-media")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing & Brand Growth — Erha Technologies" },
      { name: "description", content: "Strategic social channel management, original short video reels, and community growth." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="social-media" />,
});
