<template lang="html">
  <div class="f-row">
<!-- <p>      <h1>About</h1>
    <custom-btn content="test"></custom-btn>
    <custom-btn content="my"></custom-btn>
    <custom-btn content="btn"></custom-btn>
    <custom-btn content="content"></custom-btn>
      <custom-slider></custom-slider></p>
      <div class=""> -->
        <custom-div content="test" color="aliceblue" bg="black"></custom-div>
        <custom-div content="custom" color="#41B883" bg="#2c3e50"></custom-div>
        <custom-div content="div" color="#BF9FDF" bg="#9FDFA5"></custom-div>
        <custom-div color="#9FDFBF" bg="#9F9FDF"></custom-div>
        <custom-div color="#9FDFBF" bg="#9F9FDF"></custom-div>
        <custom-div></custom-div>
      <!-- </div> -->
  </div>
</template>

<script>

import customBtn from "./../customBtn/customBtn.vue";
import customDiv from "./../customDiv/customDiv.vue";
// import customSlider from "./../slider/customSlider.vue";


export default {
  components: {
    customBtn,
    // customSlider,
    customDiv

  }
}

</script>

<style lang="css">
.f-row {
  display: flex;
  justify-content: center;
}
</style>
