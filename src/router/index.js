import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AreasList from "../views/AreasList.vue";
import DesignGuide from "../views/DesignGuide.vue";
import Tickets from "../views/Tickets.vue"
import Ticket from "../views/tickets/Ticket.vue"

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
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: Tickets
  },
  {
    path: "/tickets/:slug",
    name: "Ticket",
    component: Ticket,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes 
});

export default router;
