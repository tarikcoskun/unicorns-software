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
    <article v-for="(post, index) in articles" :key="index">
      {{ post.title }}
    </article>
  </main>
</template>

<style lang="scss" scoped>
</style>