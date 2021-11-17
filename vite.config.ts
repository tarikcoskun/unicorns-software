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
      registerType: "autoUpdate"
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "~", replacement: resolve(__dirname, ".") },
    ],
  },
});
