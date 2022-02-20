<script lang="ts">
import Vue from "vue"

export default Vue.extend({

})
</script>

<template>
  <aside class="info-box">
    <slot />
  </aside>
</template>

<style lang="scss">
@import "@/assets/styles/mixins.scss";

aside.info-box {
  padding: 6px;
  width: 300px;
  float: right;
  overflow: hidden;
  margin-left: 16px;
  border-radius: 4px;
  border: 1px solid #3a3a3a;
  @include flex($dir: column, $gap: 8px);

  header {
    padding: 0 !important;
    @include flex($dir: column, $gap: 6px);

    h1 {
      padding: 8px 0;
      border-radius: 3px;
      text-align: center;
      background: #c42276;
      margin: 0 !important;
      font-size: 20px !important;
    }

    img { width: 100%; border-radius: 3px }
  }

  div {
    h3 { font-size: 14px; font-weight: 600 }
    span { font-size: 14px; color: #d6d6db }
    &:not(:last-child) { padding-bottom: 6px; border-bottom: 1px solid #161616 }
  }
}
</style>