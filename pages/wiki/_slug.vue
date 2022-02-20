<script lang="ts">
import Vue from "vue"
import type { Post } from "@/types/Post"
import InfoBox from "@/components/InfoBox.vue"

export default Vue.extend({
  components: { InfoBox },
  async asyncData({ $content, route }) {
    const post = <Post>await $content("wiki", route.params.slug).fetch()
    return { post }
  }
})
</script>

<template>
  <main id="post">
    <section class="content">
      <header>
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
      </header>

      <article>
        <NuxtContent class="post-content" :document="post" />

        <aside>
          <ul>
            <li v-for="link of post.toc" :key="link.id" :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }">
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </aside>
      </article>
    </section>
  </main>
</template>

<style lang="scss">
main#post {
  padding: 32px;
  min-height: 100vh;
  background: black;

  section.content {
    margin: 0 auto;
    max-width: 900px;

    header {
      padding: 48px 0;
      h1 { font-size: 36px; font-weight: 500 }
      p { margin-top: 16px; color: #d6d6db; line-height: 24px }
    }

    article {
      margin: 0 auto;
      display: flex;

      div.post-content {
        width: 100%;

        h1 { font-size: 24px; margin-bottom: 18px }
        h1, h2, h3 {
          &:hover a span.icon {
            &::before {
              content: "#";
              font-size: 20px;
              color: #d6d6db;
              margin-left: 8px;
            }
          }
        }

        ul li, ol li, p, a {
          color: #d6d6db;
          line-height: 24px;
          margin-bottom: 32px;

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