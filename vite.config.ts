// @lovable.dev/vite-tanstack-config already includes core TanStack plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    preset: "vercel",
  },
  vite: {
    build: {
      target: "es2022",
      cssCodeSplit: true,
      minify: "esbuild",
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/lucide-react")) {
              return "vendor-lucide";
            }
            if (id.includes("node_modules/@radix-ui")) {
              return "vendor-radix";
            }
          },
        },
      },
    },
  },
});
