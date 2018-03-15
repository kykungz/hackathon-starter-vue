<template>
  <social-sharing
    inline-template
    :url="url"
    :title="title"
    :hashtags="hashtags"
    :network-tag="tag"
  >
    <network network="twitter">
      <button class="btn btn-twitter" type="button" name="button">
        <i class="fa fa-twitter mr-1"></i>
        Tweet
      </button>
    </network>
  </social-sharing>
</template>

<script>
export default {
  props: {
    url: { default: 'https://google.co.th' },
    title: { default: 'title' },
    hashtags: { default: 'a,b,c' },
    tag: { default: 'span' }
  }
}
</script>

<style lang="scss">
.btn-twitter {
  background: #1dcaff;
  color: white;
  transition: all 300ms;

  &:hover {
    background: #00b0e6;
  }

  i {
    transform: scale(1.2);
  }
}
</style>
