import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieView from "../views/MovieView.vue";
import SearchView from "../views/SearchView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/search",
      name: "Search",
      component: SearchView,
    },
    {
      path: "/movie/:id",
      name: "Movie",
      component: MovieView,
      props: true
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;
