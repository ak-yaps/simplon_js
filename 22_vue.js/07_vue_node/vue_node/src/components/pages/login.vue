<template lang="html">
<main id="main" class="login-register">
  <h1 class="title"> {{ title }}</h1>
  <div id="wrap">
    <component :is="activeComponent" @set-page-title="setPageTitle($event)" class="form"></component>
    <button id="switch_component" @click="setActiveComponent()" class="btn">
      <span>{{ msg }}</span>
    </button>
  </div>
</main>
</template>

<script>
import FormLogin from "./../forms/Login.vue";
import FormRegister from "./../forms/Register.vue";

export default {
  components: {
    FormLogin,
    FormRegister
  },
  created() {
    this.setActiveMessage();
  },
  data() {
    return {
      title: null,
      activeComponent: "FormRegister",
    }
  },
  methods: {
    setActiveComponent() {
      this.activeComponent = (this.activeComponent === "FormLogin") ? "FormRegister" : "FormLogin";
      this.setActiveMessage();
    },
    setActiveMessage() {
      this.msg = (this.activeComponent === "FormLogin") ? "Pas encore inscrit?" : "Déjà inscrit ?";
    },
    setPageTitle(title) {
	this.title = title;
    }
  },
}
</script>

<style lang="css">
.f-row {
  display: flex;
  justify-content: center;
}

.login {
  padding: 10px;
}

.login input {
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 300px;
}
.inputSection {
  padding-right: 150px;
  border-right: 2px solid black;
  display: inline-block;
}
.btnSubmit {
  background-color: transparent;
  width: 150px;
}
</style>
