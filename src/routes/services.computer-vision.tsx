import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/computer-vision")({
  head: () => ({
    meta: [
      { title: "Computer Vision & Document AI — Erha Technologies" },
      { name: "description", content: "Automate visual inspection, document OCR parsing, and video stream analytics." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="computer-vision" />,
});
