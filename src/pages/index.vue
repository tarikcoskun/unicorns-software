<script lang="ts" setup>
import { useStore } from "vuex";
import Slot from "@/components/Slot.vue";
import { computed } from "@vue/reactivity";

const store = useStore();
const slots = computed(() => store.state.slots);
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
