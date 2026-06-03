import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/team/ai")({
  beforeLoad: () => {
    throw redirect({ to: "/team" });
  },
  component: () => null,
});
