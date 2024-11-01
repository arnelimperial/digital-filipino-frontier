import { defineConfig } from "astro/config";
import { VitePWA } from "vite-plugin-pwa";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.arnelimperial.com",
  integrations: [
    mdx(),
    sitemap(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Digital Filipino Frontier",
        short_name: "Digital Filipino Frontier",
        description: "A digital museum for Philippine Popular Culture.",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  outDir: "dist",
});
