/*jshint esversion: 6*/

import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import { routes } from "./routes"; //routes.js

Vue.use(VueRouter);
console.log("_______");
const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
