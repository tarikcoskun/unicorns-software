<script lang="ts">
import Vue from "vue"
import type { Post } from "@/types/Post"

export default Vue.extend({
  async asyncData({ $content, route }) {
    const post = <Post>await $content(route.params.slug).fetch()
    return { post }
  }
})
</script>

<template>
  <main id="post">
    <section class="content">
      <header>
        <h1>{{ post.title }}</h1>
      </header>

      <article>
        <header>
          <aside class="left">
            <p>{{ post.description }}</p>

            <figure class="contents">
              <h2>Contents</h2>
              <ul>
                <NuxtLink v-for="link of post.toc" :key="link.id" :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }" :to="`#${link.id}`">{{ link.text }}</NuxtLink>
              </ul>
            </figure>
          </aside>

          <aside class="info-box">
            <header>
              <h1>{{ post.info.header.title }}</h1>
              <img :src="post.info.header.image" />
            </header>

            <div v-for="([title, text], index) in Object.entries(post.info.details)" :key="index">
              <h3>{{ title }}</h3>
              <span>{{ text }}</span>
            </div>
          </aside>
        </header>

        <NuxtContent class="post-content" :document="post" />
      </article>
    </section>
  </main>
</template>

<style lang="scss">
@import "@/assets/styles/mixins.scss";

main#post {
  padding: 32px;
  min-height: 100vh;
  background: black;

  section.content {
    margin: 0 auto;
    max-width: 1000px;

    > header {
      padding: 96px 0 32px;
      h1 { font-size: 36px; font-weight: 600 }
    }

    article {
      margin: 0 auto;

      header {
        @include flex(flex-start, space-between, $gap: 64px);

        aside {
          &.left {
            p { color: #d6d6db; line-height: 30px; text-align: justify }

            figure.contents {
              margin-top: 64px;
              border-radius: 4px;
              width: fit-content;
              border: 1px solid #3a3a3a;

              h2 {
                padding: 8px;
                font-size: 20px;
                font-weight: 600;
                border: 1px solid #161616
              }

              ul {
                @include flex($dir: column);

                a {
                  font-size: 16px;
                  cursor: pointer;
                  list-style: none;
                  padding: 6px 10px;
                  transition: 150ms background;

                  &.toc3 { margin-left: 12px }
                  &:hover { background: #161616 }
                  &.toc2:not(:first-child) { margin-top: 12px }
                }
              }
            }
          }

          &.info-box {
            width: 292px;
            float: right;
            flex-shrink: 0;
            overflow: hidden;
            border-radius: 4px;
            border: 1px solid #3a3a3a;
            @include flex($dir: column);

            header {
              padding: 0 !important;
              @include flex($dir: column);

              h1 {
                padding: 8px 0;
                font-weight: 600;
                text-align: center;
                background: #c42276;
                margin: 0 !important;
                font-size: 20px !important;
              }

              img { width: 100% }
            }

            div {
              padding: 8px;
              h3 { font-size: 14px; font-weight: 600 }
              span { font-size: 14px; color: #d6d6db }
              &:not(:last-child) { padding-bottom: 6px; border-bottom: 1px solid #161616 }
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
                color: #d6d6db;
                font-size: 24px;
                margin-left: 8px;
                font-weight: 400;
              }
            }
          }
        }

        ul li, ol li, p, a {
          color: #d6d6db;
          line-height: 30px;
          margin-bottom: 36px;

          &::marker { color: var(--text) }
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