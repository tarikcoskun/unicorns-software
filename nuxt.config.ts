import type { NuxtConfig } from "@nuxt/types"

import PWAConfig from "./config/pwa"
import ContentConfig from "./config/content"

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
  buildModules: ["@nuxt/typescript-build"],
  modules: [["@nuxtjs/pwa", PWAConfig], ["@nuxt/content", ContentConfig]]
}

export default Config