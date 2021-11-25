<script lang="ts" setup>
import { computed } from "@vue/reactivity"
import Slot from "@/components/Slot.vue"
import { useStore } from "vuex"

const store = useStore()
const slots = computed(() => store.state.slots)
</script>

<template>
  <main id="slots">
    <Slot
      v-for="(slot, index) in slots"
      :slot="slot"
      :index="index"
      :type="Object.entries(slot).length === 5 ? 'save' : 'slot'"
    />
  </main>
</template>
