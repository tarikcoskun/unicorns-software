<script lang="ts">
import Vue from "vue"
import Save from "@/components/Save.vue"

export default Vue.extend({
  components: { Save },
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
  place-items: center;
  background: radial-gradient(circle, #240000, black, black);
  @include grid(3, 0 96px);
}
</style>