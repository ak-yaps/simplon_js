<template lang="html">
  <div id="avatar" @click="uploadAvatar()">
    <input type="file" id="input_file">
      <i v-if="!hasAvatar" id="icon" class="fas fa-user-circle"></i>
    <img v-else src="avatar.src" :alt="'avatar de' + user.mail" class="img">
  </div>
</template>

<script>
import axios from 'axios';
import { EventBus } from "./../../event-bus.js";
console.log(EventBus);

export default {
  data() {
    return {
      hasAvatar: false,
      user: null,
      input: null,
    }
  },
  mounted() {
    this.input = this.$el.querySelector("#input_file");
  },
  methods: {
    checkMimeType(type) {
      const authorizedMime = [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
      ].find(mime => {
        return mime === type;
      })
      return Boolean(authorizedMime)
    },
    getImageFile() {
      return new Promise((resolve, reject) => { //cette fonction retourne une promesse.
        //une promesse peut etre tenue (resolved) ou non (rejected).
        this.input.click(); //opere un click sur l'input file (hidden par CSS).

        this.input.onchange = (e) => { //à chaque event change sur l'input.
          const file = e.target.files["0"]; //on récupére le fichier sélectionné.
          const checked = this.checkMimeType(file.type); //si c'est une image.
          if (checked) resolve(file); //on le retrouve via le callback de succés.
          else reject("invalid file"); //sinon callback d'erreur -> msg
        };
      });
    },
    uploadAvatar() {
      //getImageFile retourne une Promise (introduire de l'asynchronicité).
      //ici, la promesse est d'obtenir une image valide.
      this.getImageFile().then(img => {
        //si le promesse est tenue.
        console.log("file type ok, let's continue");
        console.log(img);
        EventBus.$emit("message-from-app", {
        txt: "OK",
        status: "success"});
      }).catch(err => {
        //sinon On utilise notre bus d'Event pour communiquer avec le composant AppMessage.
        EventBus.$emit("message-from-app", {
        txt: err,
        status: "warning"}); // envoi msg d'erreur.
        console.log(err);
      })
    }
  }
};
</script>

<style lang="css">
#input_file {
  display: none
}
#icon {
  font-size: 4rem;
}
</style>
