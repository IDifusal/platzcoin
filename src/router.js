import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
const history = createWebHistory();
import CoinDetail from "@/views/CoinDetail";

export default createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/:catchAll(.*)",
      name: "Error",
      component: Error
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
