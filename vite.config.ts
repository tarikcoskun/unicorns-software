/**
 * @type {import('vite').UserConfig}
 */

import { resolve } from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    Vue(),
    VitePWA({
      includeAssets: ["favicon.png", "robots.txt"],
      registerType: "autoUpdate",
      manifest: {
        name: "Unicorn's Software",
        short_name: "Unicorn's Software",
        description: "Unicorn's Software is a save editor for the game Will You Snail",
        theme_color: "#ff4dff",
      },
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "~", replacement: resolve(__dirname, ".") },
    ],
  },
});
