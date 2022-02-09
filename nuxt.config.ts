import type { NuxtConfig } from "@nuxt/types"
import type { PWAOptions } from "@/types/PWAConfig"

const PWAConfig: PWAOptions = {
  manifest: {
    name: "Unicorn's Software",
    description: "Unicorn's Software is a save editor for Will You Snail",

    display: "minimal-ui",
    theme_color: "#000000",
    background_color: "#000000",

    icons: [
      {
        "src": "icons/manifest-icon-192.maskable.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "@/assets/icons/manifest-icon-192.maskable.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "@/assets/icons/manifest-icon-512.maskable.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "@/assets/icons/manifest-icon-512.maskable.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ]
  },

  meta: {
    name: "Unicorn's Sofwtare",
    description: "Unicorn's Software is a save editor for Will You Snail",

    mobileApp: false,
    author: "Tarık Coşkun",
    theme_color: "#000000",
    appleStatusBarStyle: "black"
  },

  icon: {
    fileName: "logo.png",
    source: "@/assets/icons/logo.png"
  }
}

const Config: NuxtConfig = {
  target: "static",

  head: {
    title: "Unicorn's Software — Save Editor for Will You Snail",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", hid: "description",  content: "Unicorn's Software is a save editor for Will You Snail" }
    ],

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: ["@/assets/styles/main"],
  modules: [["@nuxtjs/pwa", PWAConfig]],
  buildModules: ["@nuxt/typescript-build"]
}

export default Config