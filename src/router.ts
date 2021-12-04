import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import Slots from "@/pages/index.vue"
import Editor from "@/pages/editor/[slot].vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Slots
  },
  {
    path: "/editor/:slot",
    name: "editor",
    component: Editor
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
