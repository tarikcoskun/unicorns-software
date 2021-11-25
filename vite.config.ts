/**
 * @type {import('vite').UserConfig}
 */

import { VitePWA } from "vite-plugin-pwa"
import Vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
  plugins: [
    Vue(),
    VitePWA({
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      registerType: "autoUpdate",
      manifest: {
        display: "minimal-ui",
        name: "Unicorn's Software",
        short_name: "Unicorn's Software",
        description: "Unicorn's Software is a save editor for Will You Snail",
        theme_color: "#000000",
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      }
    })
  ],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "~", replacement: resolve(__dirname, ".") }
    ]
  }
});
