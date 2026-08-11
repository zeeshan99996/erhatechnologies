import { createFileRoute } from "@tanstack/react-router";
import { servicesList } from "@/lib/servicesData";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/$serviceId")({
  loader: ({ params }) => {
    return { serviceId: params.serviceId || "" };
  },
  head: ({ params }) => {
    const serviceId = params?.serviceId || "";
    const service =
      servicesList.find((s) => s.id === serviceId) ||
      servicesList.find((s) => s.id.toLowerCase().includes(serviceId.toLowerCase())) ||
      servicesList[0];

    return {
      meta: [
        { title: `${service.title} — Benefits, Architecture & Pricing | Erha Technologies` },
        { name: "description", content: service.desc },
        { property: "og:title", content: `${service.title} — Erha Technologies` },
        { property: "og:description", content: service.desc },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://www.erhatechnologies.com/services/${service.id}`,
        },
      ],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return <ServiceDetailPage serviceId={data.serviceId} />;
}
