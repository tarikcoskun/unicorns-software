<script lang="ts">
import Vue, { PropType } from "vue"
import type { Toc } from "@/types/Article"

export default Vue.extend({
  props: {
    toc: {
      type: <PropType<Toc[]>>Array,
      required: true
    }
  }
})
</script>

<template>
  <figure class="contents">
    <h2>Contents</h2>
    <footer>
      <NuxtLink v-for="link of toc" :key="link.id" :class="{ 'h2': link.depth === 2, 'h3': link.depth === 3 }" :to="`#${link.id}`">{{ link.text }}</NuxtLink>
    </footer>
  </figure>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

figure.contents {
  padding: 8px;
  margin-top: 64px;
  overflow: hidden;
  border-radius: 4px;
  width: fit-content;
  background: #282838;

  h2 { padding: 8px; font-size: 20px; font-weight: 600 }
  footer {
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
</style>