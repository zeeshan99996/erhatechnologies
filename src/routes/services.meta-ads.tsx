import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/meta-ads")({
  head: () => ({
    meta: [
      { title: "Meta Ads & Paid Social Campaigns — Erha Technologies" },
      { name: "description", content: "Data-driven paid social campaigns across Facebook, Instagram & LinkedIn." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="meta-ads" />,
});
