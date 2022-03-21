import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
// use various tools to handle some kinda data structures
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
