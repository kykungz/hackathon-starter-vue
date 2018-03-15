<template>
  <div id="app">
    <img src="./assets/logo.png">
    <demo-router-link/>
    <router-view/>
  </div>
</template>

<script>
import DemoRouterLink from '@/demo/DemoRouterLink'

export default {
  components: { DemoRouterLink }
}
</script>

<style lang="scss">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  padding: 1em;

  img {
    height: 100px;
  }
}
</style>
