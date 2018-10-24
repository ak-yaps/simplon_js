<template lang="html">
<div id="contact">
  <h1>{{ title }}</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br>
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br>
    Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <user-list></user-list>
</div>
</template>

<script>

import UserList from "./../user_list/userList.vue";

export default {
  components: {
    UserList,
  },
  data() {
    return {
      title: "User"
    }
  },
}

</script>
