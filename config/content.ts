import type { IContentOptions } from "@nuxt/content/types/index"

const ContentConfig: IContentOptions = {
  liveEdit: false,
  markdown: {
    remarkPlugins: [["remark-autolink-headings", { behavior: "append" }]]
  }
}

export default ContentConfig