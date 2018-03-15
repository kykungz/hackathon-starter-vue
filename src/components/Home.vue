<template>
  <div id="home">
    <h1>
      <i class="fa fa-home" aria-hidden="true"></i>
      {{ msg }}
    </h1>
  </div>
</template>

<script>
export default {
  props: [],
  components: { },
  data () {
    return {
      msg: 'Home'
    }
  },
  methods: {},
  computed: {},
  created () {}, // fetch data
  mounted () {},
  destroyed () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
