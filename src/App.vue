<script lang="ts" setup>
import PWAToast from "./components/PWAToast.vue";
import { useStore } from "vuex";

const store = useStore();
store.commit("initializeSlots");
</script>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
      <PWAToast />
    </router-view>
  </div>
</template>
