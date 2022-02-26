<script lang="ts">
import Vue, { PropType } from "vue"
import type { Info } from "@/types/Article"

export default Vue.extend({
  props: {
    info: {
      type: <PropType<Info>>Object,
      required: true
    }
  }
})
</script>

<template>
  <aside class="info-box">
    <img :src="info.image" />
    <footer v-for="([title, text], index) in Object.entries(info.details)" :key="index">
      <h3>{{ title }}</h3>
      <span>{{ text }}</span>
    </footer>
  </aside>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

aside.info-box {
  width: 292px;
  float: right;
  padding: 12px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 4px;
  background: #282838;
  @include flex($dir: column);

  img {
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 6px 12px #00000036;
  }

  footer {
    padding: 8px 0;

    h3 { font-size: 14px; font-weight: 600 }
    span { font-size: 14px }
    &:not(:last-child) { padding-bottom: 6px }
  }
}
</style>