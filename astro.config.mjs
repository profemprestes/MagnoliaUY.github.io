import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import icon from "astro-icon";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    icon({
      include: {
        'heroicons': ['*'] // Include all heroicons
      }
    }),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});