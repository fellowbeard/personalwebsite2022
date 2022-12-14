import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import VideoView from "../views/VideoView.vue";
import SkillsView from "../views/SkillsView.vue";
import PortfolioView from "../views/PortfolioView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/video",
    name: "video",
    component: VideoView,
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
