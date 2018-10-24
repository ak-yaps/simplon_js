<template lang="html">
  <nav id="nav_main">
    <ul class="list">
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
          "about",
          "user",
        ]
      }
    }
  }
</script>
<style>
#nav_main {
  font-size: 1.5em;
  cursor: pointer;
  color: #2c3e50;
}

#nav_main ul li {
  border: 1px solid #41B883;
  padding: 1.5em;

}

#nav_main ul li:hover {
  color: #41B883;
  background-color: #2c3e50;
}
</style>
