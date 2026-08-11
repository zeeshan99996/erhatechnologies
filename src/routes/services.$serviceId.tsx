import { createFileRoute } from "@tanstack/react-router";
import { servicesList } from "@/lib/servicesData";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/$serviceId")({
  head: ({ params }) => {
    const service = servicesList.find((s) => s.id === params.serviceId);
    if (!service) {
      return {
        meta: [{ title: "Service Not Found — Erha Technologies" }],
      };
    }
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
  const { serviceId } = Route.useParams();
  return <ServiceDetailPage serviceId={serviceId} />;
}
