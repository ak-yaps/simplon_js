<template>
  <div id="app">
    <a id="back_home" @click="goHome()">Go back to homepage</a>
    <nav-main></nav-main>

    <router-view></router-view>
  </div>
</template>

<script>

import navMain from "./components/nav_main/nav_main.vue";

export default {
    components: {
      navMain,
    },
    methods: {
      goHome() {
        this.$router.push("/");
      }
    }
  }
</script>

<style lang="scss">

@import "./styles/global.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color_text;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#back_home:hover {
  color: #2c3e50;
  cursor: pointer;

}


</style>
