import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    name: 'Dashboard',
    path: "/",
    component: Dashboard,
  },
  {
    name: 'Team',
    path: "/team",
    component: () =>
      import(/* webpackChunkName: "Team" */ "../views/Team.vue"),
  },
  {
    name: 'Projects',
    path: "/projects",
    component: () =>
      import(/* webpackChunkName: "Projects" */ "../views/Projects.vue"),
  },
  {
    name: 'Support',
    path: "/support",
    component: () =>
      import(/* webpackChunkName: "Support" */ "../views/Support.vue"),
  },
  {
    name: 'Skills',
    path: "/skills",
    component: () =>
      import(/* webpackChunkName: "Skills" */ "../views/Skills.vue"),
  },
  {
    name: 'Get to know me',
    path: "/about",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue"),
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
