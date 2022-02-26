<script lang="ts">
import Vue from "vue"
import type { Article } from "@/types/Article"

export default Vue.extend({
  layout: "wiki",
  async asyncData({ $content }) {
    const articles = <Article>await $content().fetch()
    return { articles }
  }
})
</script>

<template>
  <main>
    <section class="content">
      <NuxtLink :to="`/wiki/${article.slug}`" v-for="article in articles" :key="article.slug">
        {{ article.title }}
      </NuxtLink>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

main {
  section.content {

  }
}
</style>