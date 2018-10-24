<template lang="html">
  <div class="slideItem"></div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.slideItem {
  width: 400px;
  height: 300px;
  display: inline-block;
}

.slideItem:nth-child(even) {
  background-color: red;
}
.slideItem:nth-child(odd) {
  background-color: black;
}
</style>
