<script lang="ts">
import Vue from "vue"
import Levels from "@/lib/levels"
import { Save } from "@/types/SaveFile"
import parseTime from "@/lib/parseTime"

export default Vue.extend({
  data: () => ({ Levels }),
  methods: { parseTime },
  computed: {
    thisSlot(): Save { return this.$store.state.saveSlots.slots[Number(this.$route.params.slot)] }
  }
})
</script>

<template>
  <main>
    <header>
      {{ Levels[Number(thisSlot.room)] }}
      {{ parseTime(thisSlot.gameTimer) }}
    </header>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
</style>