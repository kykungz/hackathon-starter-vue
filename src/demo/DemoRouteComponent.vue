<template>
  <h2>
    Demo Route Component <br>
    (param = <span class="badge badge-primary">{{ number }}</span>)
  </h2>
</template>

<script>
export default {
  props: ['number']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
