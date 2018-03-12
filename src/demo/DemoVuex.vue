<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="increaseCounter()" type="button" name="button">
      ➕
    </button>
    <button @click="decreaseCounter()" type="button" name="button">
      ➖
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'counter'
    ])
  },
  methods: {
    ...mapActions([
      'increaseCounter',
      'decreaseCounter'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
