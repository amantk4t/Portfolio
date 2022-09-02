import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Projects",
    path: "/work",
    component: () => import("../views/Projects.vue"),
  },
  {
    name: "Certificates",
    path: "/cert",
    component: () => import("../views/Certificates.vue"),
  },
  {
    name: "Skills",
    path: "/skills",
    component: () => import("../views/Skills.vue"),
  },
  {
    name: "About",
    path: "/about",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
