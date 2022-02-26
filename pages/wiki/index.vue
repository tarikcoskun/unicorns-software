<script lang="ts">
import Vue from "vue"
import type { Article } from "@/types/Article"

export default Vue.extend({
  layout: "wiki",
  async asyncData({ $content }) {
    const latest = <Article>await $content()
      .sortBy("createdAt", "desc")
      .limit(3)
      .without(["body"])
      .fetch()

    const characters = <Article>await $content()
      .where({ tags: { $contains: "characters" } })
      .sortBy("createdAt", "desc")
      .limit(3)
      .without(["body"])
      .fetch()

    return { articles: { latest, characters } }
  }
})
</script>

<template>
  <main>
    <section class="content">
      <section class="articles latest">
        <header>
          <h1>Latest Articles</h1>
          <p>Latest articles here!</p>
        </header>

        <div>
          <NuxtLink class="article" :to="`/wiki/${article.slug}`" v-for="article in articles.latest" :key="article.slug">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </NuxtLink>
        </div>
      </section>

      <section class="articles characters">
        <header>
          <h1>Characters</h1>
          <p>Learn everything about the characters!</p>
        </header>

        <div>
          <NuxtLink class="article" :to="`/wiki/${article.slug}`" v-for="article in articles.characters" :key="article.slug">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </NuxtLink>
        </div>
      </section>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

main {
  section.content {
    @include flex($dir: column, $gap: 96px);

    section.articles {
      padding: 0;

      header {
        h1 { font-size: 36px; font-weight: 600 }
        p { font-size: 20px; margin-top: 12px }
      }

      div {
        margin: 64px -12px 0;
        @include grid(3, 16px);

        a.article {
          padding: 12px;
          border-radius: 4px;
          transition: 150ms background;

          h2 { font-size: 20px; font-weight: 600 }
          p { margin-top: 12px; @include line-clamp(2) }
          &:hover { background: #282838 }
        }
      }
    }
  }
}
</style>