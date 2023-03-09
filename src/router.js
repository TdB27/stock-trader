import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "./views/HomeView.vue";
import PortifolioView from "./views/PortifolioView.vue";
import StocksView from "./views/StocksView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/portifolio",
    component: PortifolioView,
  },
  {
    path: "/stocks",
    component: StocksView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
