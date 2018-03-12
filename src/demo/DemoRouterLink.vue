<template>
  <div>
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }">
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'DemoVuex' }">
          Demo Vuex
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'DemoRouteComponent', params: {number: 191} }">
          Demo Route Component
        </router-link>
      </li>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
