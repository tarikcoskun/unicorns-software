<script lang="ts" setup>
import Slot from "@/components/Slot.vue";
import { onBeforeMount } from "@vue/runtime-core";
import { useCookies } from "@vueuse/integrations/useCookies";

const cookies = useCookies(["slots"]);
let slots = cookies.get("slots");

onBeforeMount(() => {
  if (!slots || slots.length !== 3) cookies.set("slots", [{}, {}, {}]);
});

cookies.addChangeListener((change) => (slots = change.value));
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
