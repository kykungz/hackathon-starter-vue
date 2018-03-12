<template>
  <div id="home">
    <h1 class="text-center">
      <i class="fa fa-home" aria-hidden="true"></i>
      Home
    </h1>
    <demo-vuex></demo-vuex>
  </div>
</template>

<script>
import DemoVuex from './DemoVuex.vue'

export default {
  components: { DemoVuex },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
