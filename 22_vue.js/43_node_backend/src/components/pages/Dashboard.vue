<template lang="html">
  <main id="main" class="dashboard">
    <avatar></avatar>
    <p id="avatar">
      IAM DASHBOARD
    </p>
    <tabler
          :editable="false"
          :deletable="true"
          :callbackDelete="tablerDelete"
          :callbackSort="tablerSort"
          :headerRows="[
            {name:'id', sortable: true},
            {name:'mail', sortable: true},
            {name:'avatar', sortable: true},
            {name:'delete', sortable: false},
          ]"
          :bodyRows="users">
    </tabler>
  </main>
</template>

<script>
import axios from 'axios';
import {  EventBus } from "./../../event-bus.js"
import Avatar from "./../dashboard-elements/Avatar.vue";
import Tabler from './../tabler/Tabler.vue';

export default {
  created() {
    EventBus.$emit("message-from-app", null);

    this.getUsers(users => {
      this.users = users;
    }, error => {
      console.error(error);
    });
  },
  components: {
    Avatar,
    Tabler
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    getUsers(resolve, reject) {
      console.log("getUsers@Dashboard");
      axios({
          method: "get",
          url: "http://localhost:3000/user",
        }).then(response => {
          console.log("response axios");
          console.log(response);
          resolve(response.data);
        })
        .catch(error => {
          console.log("error axios");
          reject(error);
        });
    },
    tablerDelete(evt, id) {
      console.log("tablerDelete@Dashboard");
      axios({
        method: "delete",
        url: `http://localhost:3000/user/${id}`
      }).then(response => {
        console.log("response axios");
        console.log(response);
        this.getUsers(users => {
          this.users = users;
        }, error => {
          console.error(error);
        });
      })
      .catch(error => {
        console.log("error axios");
      });
    },
    tablerSort(v) {}
  }
}
</script>

<style lang="css" scoped>
</style>
