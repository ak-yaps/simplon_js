<template>
  <div id="nav_side" @click="toggleActive()">

  </div>
</template>
<script>
import axios from 'axios';
import { EventBus } from "./../../event-bus.js";
   
   export default {
  created() {
    EventBus.$on("toggle-nav-main", status => {
      console.log(status);
    });
  },
        methods: {
            toggleActive() {
                console.log('toggle');

            }
        }
    }
</script>
<style scoped>
#nav_side {
    background: #2c3e50;
    width: 200px;
    /* height: 100%; */
}
</style>
