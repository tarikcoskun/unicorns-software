import { MotionPlugin as motion } from "@vueuse/motion";
import { createApp } from "vue";
import router from "@/router";
import App from "./App.vue";
import "./styles/main.scss";

createApp(App).use(router).use(motion).mount("#app");
