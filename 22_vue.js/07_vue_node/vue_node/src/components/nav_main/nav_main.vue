<template lang="html">
  <nav id="nav_main">
    <ul class="list">
      <li><img src="./../../assets/logo.png" class="logo"></li>
      <router-link v-for="(page, nth) in pages" :key="nth" :to="{ name: page }" tag="li" class="item" active-class="is-active" exact>
        <span>{{ page }}</span>
      </router-link>
    </ul>
  </nav>

</template>
<script>
  export default {
    data() {
      return {
        pages: [
          "home",
          "login",
          "dashboard",
        ]
      }
    }
  }
</script>
<style>
#nav_main {
  font-size: 1.5em;
  color: #2c3e50;
  display: flex;
  border-bottom: 2px solid #2c3e50;
  /* box-shadow: 0px 10px 5px 0px #41B883; */
}

.item {
  text-transform: uppercase;
  padding: 0 1.5em;
  cursor: pointer;
}

.logo {
  width: 50px;
  height: 50px;
}

#nav_main ul li:hover {
  /* color: #41B883; */
  text-transform: lowercase;
}
</style>
