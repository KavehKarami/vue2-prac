import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import UserDetails from "../views/UserDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
  {
    path: "/users/:id",
    name: "users-details",
    component: UserDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
