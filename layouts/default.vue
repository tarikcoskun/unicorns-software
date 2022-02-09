<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  mounted() {
    this.$store.commit("saveSlots/initialize")
  }
})
</script>

<template>
  <Nuxt />
</template>