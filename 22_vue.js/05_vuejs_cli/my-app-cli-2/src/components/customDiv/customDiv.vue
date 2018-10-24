<template lang="html">
<div class="divCustom" :style="`color: ${_color}; background: ${_bg}`" :title="content">
  {{ text }}
<button @click="sendDataToParent()" class="btn">
  Envoyer des données au composant parent
</button>
</div>
</template>

<script>
export default {
  created() {
    this.text = this._props.content || this.text;
    this._bg = this._props.bg || this._bg;
    this._color = this._props.color || this._color;
  },
  data() {
    return {
      text: "defaut",
      _bg: "white",
      _color: "#1a1a1a",
    }
  },
  methods: {
    sendDataToParent() {
      this.$emit("custom-block-sen-data", this.text);
    }
  },

  props: ["content", "color", "bg"]
}
</script>

<style lang="css">

.divCustom {
  padding: 50px;
  margin: 10px;
  background-color: transparent;
  border: 1px solid #41B883;
  width: 150px;
  height: 100px;
  font-size: 1.5em;
  text-transform: capitalize;
}

.btn {
  margin: 10px 0;
  padding: 5px;
  background-color: transparent;
  /* border: 1px solid #41B883; */
  color: white;
}

</style>
