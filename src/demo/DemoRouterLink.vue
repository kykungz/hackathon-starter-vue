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
      <li>
        <router-link :to="{ name: 'DemoShare' }">
          Demo Share
        </router-link>
      </li>
    </ul>
    <hr>
  </div>
</template>
