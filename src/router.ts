import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Slots from "@/pages/index.vue";
import Save from "@/pages/slots/[slot].vue";

import { useCookies } from "@vueuse/integrations/useCookies";
const cookies = useCookies(["slots"]);

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Slots,
    props: { cookies: JSON.stringify(cookies) },
  },
  {
    path: "/slots/:slot",
    name: "Slot",
    component: Save,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
