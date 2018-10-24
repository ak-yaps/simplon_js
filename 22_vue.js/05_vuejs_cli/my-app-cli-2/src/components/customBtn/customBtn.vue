<template lang="html">
<button class="btnCustom">{{ text }}</button>
</template>

<script>
export default {
  created() {
    this.text = this._props.content || this.text
  },
  data() {
    return {
      text: "button"
    }
  },

  props: ["content"]
}
</script>

<style lang="css">
.btnCustom {
  padding: 20px 30px;
  background-color: transparent;
  /* border: 1px solid #41B883; */
  border-radius: 10px;
  color: #41B883;
  margin: 0 5px;
}

</style>
