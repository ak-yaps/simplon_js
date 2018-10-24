/*jshint esversion:6*/

import Home from "./components/pages/home.vue";
import About from "./components/pages/about.vue";
import User from "./components/pages/user.vue";
import userProfile from "./components/user_list/userProfile.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path:"/about",
    name: "about",
    component: About,
},
  {
    path: "/user",
    name: "user",
    component: User,
    children: [
      {
      name:"user-profile",
      path: "/user/:id",
      component: userProfile
    }
  ]
  }
];
