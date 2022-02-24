import type { IContentOptions } from "@nuxt/content/types/index"

const ContentConfig: IContentOptions = {
  dir: "wiki",
  liveEdit: false,
  markdown: {
    remarkPlugins: [
      ["remark-autolink-headings", { behavior: "wrap" }]
    ]
  }
}

export default ContentConfig