import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "./views/HomeView.vue";
import PortifolioView from "./views/PortifolioView.vue";
import ActionsView from "./views/ActionsView.vue";

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
    path: "/acoes",
    component: ActionsView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
