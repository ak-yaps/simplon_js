<template lang="html">
  <div>
    <h1 class="title">User {{ id }}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <strong>user {{ id }}</strong> voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</template>
<script>
export default {
  watch: {
    "$route"(to,from) {
      this.id = to.params.id;
    }
  },
  data() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
