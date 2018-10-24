<template lang="html">
  <div class="dbDiv">
    <h1>{{ title }}</h1>
    <avatar>
      <p id="avatar"></p>
    </avatar>
  </div>
</template>

<script>
import Avatar from "./../dashboard-elements/Avatar.vue";

export default {
  components: {
    Avatar
  },
  data() {
    return {
      title: "Dashboard"
    }
  },
}
</script>

<style lang="css">
.dbDiv {
  text-align: center;
}
</style>
