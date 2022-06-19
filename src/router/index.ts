import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Home from "../pages/Home.vue";
import Compare from "../pages/Compare.vue";


const routes: RouteRecordRaw[] = [
  { path: "/", component: Home, name: "Home" },
  { path: "/compare", component: Compare, name: "Compare" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;