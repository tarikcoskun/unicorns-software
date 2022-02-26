<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  computed: {
    slots() { return this.$store.state.saveSlots.slots }
  }
})
</script>

<template>
  <main>
    <Save
      v-for="(save, index) in slots"
      :key="index"
      :save="save"
      :index="index"
      :type="Object.entries(save).length === 5 ? 'save' : 'slot'"
    />
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

main {
  height: 100vh;
  padding: 0 72px;
  background: radial-gradient(circle, #240000, black, black);
  @include flex(center, center, $gap: 96px);
}
</style>