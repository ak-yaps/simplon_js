<template lang="html">
  <div v-if="message" id="app_msg" :class="messageStatus">
    {{ message }}
  </div>
</template>

<script>
import {
  EventBus
} from './../../event-bus.js';

export default {
  created() {
    EventBus.$on("message-from-app", msg => {
      console.log("message reçu " + msg);
      this.setMessageStyle(msg);
      this.message = (typeof msg === "object" && msg !== null) ? msg.txt : msg;
    });
  },
  data() {
    return {
      message: null,
      messageStatus: undefined
    }
  },
  methods: {
    setMessageStyle(msg) {
      const statuses = ["error", "success", "warning"];
      if (typeof msg !== "object") return;
      if (!msg || !msg.status) return;
      this.messageStatus = statuses.find(s=> {
        return s === msg.status;
      })
    }
  }
}
</script>

<style lang="css" scoped>
.warning{
  color: #856404;
  background-color: #fff3cd;
  border: 2px solid #ffeeba;
}
.success {
  color: #155724;
  background-color: #d4edda;
  border: 2px solid #c3e6cb;
}
.error {
  color: #721c24;
  background-color: #f8d7da;
  border: 2px solid #f5c6cb;
}
#app_msg {
align-items: center;
border: 2px solid;
border-radius: .3rem;
display: flex;
justify-content: center;
max-width: 320px;
padding: 10px;
margin: 20px auto;

}
</style>
