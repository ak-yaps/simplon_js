<template>
  <div id="app">
    <nav-main></nav-main>

    <router-view></router-view>
    <app-msg></app-msg>
  </div>
</template>

<script>
import navMain from "./components/nav_main/nav_main.vue";
import AppMsg from "./components/app_msg/app_msg.vue";

export default {
    components: {
      navMain,
      AppMsg
    },
  }
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}

h1, h2 {
  font-weight: normal;
  padding-left: 10px;
}

ul {
  list-style-type: none;
  padding-left: 10px;
}

li {
  display: inline-block;
}

a, .is-active {
  color: #42b983;
}
</style>
