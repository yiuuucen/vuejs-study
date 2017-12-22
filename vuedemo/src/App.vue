<template>
  <div id="app">
    <slider animation="fade">
     <slider-item v-for="(i, index) in list" :key="index">
      <div :style="i">
        <p style="line-height: 280px; font-size: 5rem; text-align: center;">Page{{ index + 1 }}</p>
      </div>
     </slider-item>
    </slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  data () {
    return {
      list: [
        { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
        { backgroundColor: '#eee', width: '100%', height: '100%' },
        { backgroundColor: '#f44336', width: '100%', height: '100%' },
      ],
    }
  },
  components: {
    Slider,
    SliderItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
