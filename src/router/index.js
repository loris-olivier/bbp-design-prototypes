import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AreasList from "../views/AreasList.vue";
import DesignGuide from "../views/DesignGuide.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/areas",
    name: "Areas",
    component: AreasList
  },
  {
    path: "/design",
    name: "Design",
    component: DesignGuide
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes 
});

export default router;
