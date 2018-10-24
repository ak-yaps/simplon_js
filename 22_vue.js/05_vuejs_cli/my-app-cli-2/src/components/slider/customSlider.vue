<template lang="html">
  <div id="slider">
    <div class="slider-wrap">
    <custom-slider-item></custom-slider-item>
    <custom-slider-item></custom-slider-item>
    <custom-slider-item></custom-slider-item>
    <custom-slider-item></custom-slider-item>
    <custom-slider-item></custom-slider-item>
  </div>
    </div>
</template>

<script>
import customSliderItem from './customSliderItem.vue';
export default {
  components: {
    customSliderItem
  }
}
</script>

<style lang="css">
.slider-wrap {
  display: inline-block;

}
#slider {
    width: 400px;
}



</style>
