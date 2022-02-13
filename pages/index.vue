<script lang="ts">
import Vue from "vue"

export default Vue.extend({

})
</script>

<template>
  <main>
    <NuxtLink to="/save-editor">Save Editor</NuxtLink>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

main {
  height: 100vh;
  padding: 0 72px;
  align-items: center;
  background: radial-gradient(circle, #240000, black, black);
  @include grid(3, 0 96px);
}
</style>