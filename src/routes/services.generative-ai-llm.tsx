import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/generative-ai-llm")({
  head: () => ({
    meta: [
      { title: "Generative AI, Custom LLMs & RAG — Erha Technologies" },
      { name: "description", content: "Custom LLM fine-tuning, domain adaptation, and hybrid vector RAG search." },
    ],
  }),
  component: () => <ServiceDetailPage serviceId="generative-ai-llm" />,
});
