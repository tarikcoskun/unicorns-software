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
  <main id="slots">
    <Save
      v-for="(save, index) in slots"
      :key="index"
      :save="save"
      :index="index"
      :type="Object.entries(save).length === 5 ? 'save' : 'slot'"
    />
  </main>
</template>