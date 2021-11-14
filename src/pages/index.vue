<script lang="ts" setup>
import Slot from "@/components/Slot.vue";
import { useCookies } from "@vueuse/integrations/useCookies";

const cookies = useCookies(["slots"]);
const slots = cookies.get("slots");
if (!slots || slots.length !== 3) cookies.set("slots", [{}, {}, {}]);
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
