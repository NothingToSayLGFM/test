import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Favorite from "../views/Favorite.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: Favorite
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
