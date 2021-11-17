<script lang="ts" setup>
import { useStore } from "vuex";

const store = useStore();
store.commit("initializeSlots");
</script>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>
