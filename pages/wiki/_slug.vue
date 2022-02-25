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

            <figure class="contents">
              <h2>Contents</h2>
              <ul>
                <NuxtLink v-for="link of article.toc" :key="link.id" :class="{ 'h2': link.depth === 2, 'h3': link.depth === 3 }" :to="`#${link.id}`">{{ link.text }}</NuxtLink>
              </ul>
            </figure>
          </aside>

          <aside class="info-box">
            <header>
              <img :src="article.info.header.image" />
            </header>

            <div v-for="([title, text], index) in Object.entries(article.info.details)" :key="index">
              <h3>{{ title }}</h3>
              <span>{{ text }}</span>
            </div>
          </aside>
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
    > header {
      padding: 128px 0 32px;
      h1 { font-size: 36px; font-weight: 600 }
    }

    article {
      margin: 0 auto;

      header {
        @include flex(flex-start, space-between, $gap: 96px);

        aside {
          &.left {
            p { line-height: 30px }

            figure.contents {
              padding: 8px;
              margin-top: 64px;
              overflow: hidden;
              border-radius: 4px;
              width: fit-content;
              background: #282838;

              h2 { padding: 8px; font-size: 20px; font-weight: 600 }
              ul {
                @include flex($dir: column);

                a {
                  font-size: 16px;
                  cursor: pointer;
                  list-style: none;
                  padding: 6px 8px;
                  border-radius: 4px;
                  transition: 150ms background;

                  &.h3 { margin-left: 12px }
                  &:hover { background: #343446 }
                  &.h2:not(:first-child) { margin-top: 12px }
                }
              }
            }
          }

          &.info-box {
            width: 292px;
            float: right;
            padding: 12px;
            flex-shrink: 0;
            overflow: hidden;
            border-radius: 4px;
            background: #282838;
            @include flex($dir: column);

            header {
              padding: 0 !important;
              @include flex($dir: column);

              h1 {
                padding: 8px 0;
                font-size: 20px;
                font-weight: 600;
                text-align: center;
                border-radius: 4px;
              }

              img {
                width: 100%;
                margin: 4px 0;
                border-radius: 4px;
                box-shadow: 0 6px 12px #00000036;
              }
            }

            div {
              padding: 8px 0;
              h3 { font-size: 14px; font-weight: 600 }
              span { font-size: 14px }
              &:not(:last-child) { padding-bottom: 6px }
            }
          }
        }
      }

      div.post-content {
        width: 100%;

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

        ul li, ol li, p, a {
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