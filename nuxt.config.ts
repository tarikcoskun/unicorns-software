import type { NuxtConfig } from "@nuxt/types"

import PWAConfig from "./config/pwa"

const Config: NuxtConfig = {
  target: "static",
  dir: { static: "public" },

  head: {
    title: "Unicorn's Software — Save Editor for Will You Snail",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", hid: "description",  content: "Unicorn's Software is a save editor for Will You Snail" }
    ],

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  components: true,
  css: ["@/assets/css/main"],
  modules: [["@nuxtjs/pwa", PWAConfig]],
  buildModules: ["@nuxt/typescript-build"]
}

export default Config