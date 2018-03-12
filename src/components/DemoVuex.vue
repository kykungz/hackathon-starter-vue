<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="update()" type="button" name="button">
      Update Store
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      msg: 'Demo vuex'
    }
  },
  computed: {
    ...mapGetters([
      'counter'
    ])
  },
  methods: {
    ...mapActions([
      'update'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
