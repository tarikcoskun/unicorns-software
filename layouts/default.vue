<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  mounted() {
    this.$store.commit("saveSlots/initialize")
  }
})
</script>

<template>
  <div id="default">
    <!--<header class="navigation">
      <aside class="brand">
        <img src="@/assets/logo.png" />
        <h1>Unicorn's Software</h1>
      </aside>

      <aside class="links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/wiki">Wiki</NuxtLink>
        <NuxtLink to="/save-editor">Save Editor</NuxtLink>
      </aside>
    </header>-->

    <Nuxt />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/mixins.scss";

div#default {
  header.navigation {
    padding: 16px;
    background: black;
    @include flex(center, space-between);

    aside {
      &.brand {
        @include flex(center, $gap: 16px);

        img { width: 32px }
        h1 { font-weight: 500 }
      }

      &.links {
        @include flex(center, $gap: 24px);
      }
    }
  }
}
</style>