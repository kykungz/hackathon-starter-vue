<template>
  <social-sharing inline-template :url="url" :network-tag="tag">
    <network network="facebook">
      <button class="btn btn-facebook" type="button" name="button">
        <i class="fa fa-facebook mr-1"></i>
        Share
      </button>
    </network>
  </social-sharing>
</template>

<script>
export default {
  props: {
    url: { default: 'https://google.co.th' },
    tag: { default: 'span' }
  }
}
</script>

<style lang="scss">
.btn-facebook {
  background: #3b5996;
  color: white;
  transition: all 300ms;

  &:hover {
    background: #4264aa;
  }

  i {
    transform: scale(1.2);
  }
}
</style>
