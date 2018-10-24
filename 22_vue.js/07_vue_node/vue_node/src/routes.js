/*jshint esversion:6*/

import Home from "./components/pages/home.vue";
import Login from "./components/pages/login.vue";
import Dashboard from "./components/pages/dashboard.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path:"/login",
    name: "login",
    component: Login,
},
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  }
];
