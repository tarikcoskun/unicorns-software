<script lang="ts" setup>
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()
const close = async() => {
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <div class="pwa-toast" v-if="offlineReady || needRefresh">
    <div class="message">
      <span v-if="true">Ready to work offline</span>
      <span v-else>Update availible</span>
    </div>
    <button v-if="needRefresh" @click="updateServiceWorker()">Update</button>
    <button @click="close">Close</button>
  </div>
</template>

<style lang="scss">
.pwa-toast {
  right: 0;
  bottom: 0;
  z-index: 10;
  margin: 16px;
  padding: 12px;
  position: fixed;
  background: #000;
  border: 2px solid #3f253f;
}
.pwa-toast .message span {
  font-size: 16px;
  letter-spacing: 0.1px;
}
.pwa-toast button {
  border: none;
  outline: none;
  font-size: 16px;
  margin-top: 12px;
  padding: 6px 8px;
  margin-right: 5px;
  border-radius: 4px;
  background: #3f253f;
  text-transform: uppercase;
}
</style>