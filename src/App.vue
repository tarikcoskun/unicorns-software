<script lang="ts" setup>
import ReloadPWA from "./components/ReloadPWA.vue";
import { useStore } from "vuex";

const store = useStore();
store.commit("initializeSlots");
</script>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
      <ReloadPWA />
    </router-view>
  </div>
</template>
