<script lang="ts">
import Vue from "vue"
import type { Article } from "@/types/Article"

export default Vue.extend({
  name: "Article",
  layout: "wiki",

  async asyncData({ $content, route }) {
    const article = <Article>await $content(route.params.slug).fetch()
    return { article }
  }
})
</script>

<template>
  <main id="post">
    <section class="content">
      <header>
        <h1>{{ article.title }}</h1>
      </header>

      <article>
        <header>
          <aside class="left">
            <p>{{ article.description }}</p>

            <WikiContents :toc="article.toc" />
          </aside>

          <WikiInfoBox :info="article.info" />
        </header>

        <NuxtContent class="post-content" :document="article" />
      </article>
    </section>
  </main>
</template>

<style lang="scss">
@import "@/assets/styles/mixins.scss";

main#post {
  section.content {
    p { line-height: 30px }

    > header {
      h1 { font-size: 36px; font-weight: 600 }
    }

    article {
      margin: 0 auto;
      padding-top: 32px;

      header {
        @include flex(unset, space-between, $gap: 96px);
      }

      div.post-content {
        padding-top: 32px;

        h2 { font-size: 28px; font-weight: 600; margin-bottom: 18px }
        h3 { font-size: 24px; font-weight: 500; margin-bottom: 16px }
        h2, h3 {
          padding-top: 8px;

          a {
            color: inherit;
            font-size: inherit;
            font-weight: inherit;
            padding-bottom: 4px;
            border-bottom: 1px dashed transparent;

            &:hover {
              border-color: white;
              &::after {
                content: "#";
                font-size: 24px;
                margin-left: 8px;
                font-weight: 400;
              }
            }
          }
        }

        li, p, a {
          line-height: 30px;
          margin-bottom: 36px;

          &::marker { color: var(--fg) }
        }

        a { color: #4188f7 }
        sup {
          margin-left: 2px;
          font-size: 12px;

          a {
            font-size: inherit;
            &::before { content: "[" }
            &::after { content: "]" }
          }
        }

        div.footnotes {
          ol li {
            font-size: 16px;
            a.footnote-backref { margin-left: 8px }
          }
        }
      }
    }
  }
}
</style>