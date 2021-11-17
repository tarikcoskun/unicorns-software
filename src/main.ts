import { useRegisterSW } from "virtual:pwa-register/vue"
import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "./styles/main.scss";

const intervalMS = 60 * 60 * 1000
const updateServiceWorker = useRegisterSW({
  onRegistered(r) {
    r && setInterval(() => {
      r.update()
    }, intervalMS)
  }
})

createApp(App).use(router).use(store).mount("#app");
