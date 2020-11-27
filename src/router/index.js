import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
import GameList from "@/components/GameList";
import GameDetails from "@/components/GameDetails";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/gameList/",
      name: "GameList",
      component: GameList
    },
    {
      path: "/gameDetails/:id",
      name: "GameDetails",
      component: GameDetails
    }
  ]
});
