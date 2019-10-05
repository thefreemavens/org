<template>
  <div class="youtube-wrapper">
    <iframe
      :src="src"
      width="100%"
      height="auto"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      autoplay />
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      default: 'q8sQf-QtXbY'
    }
  },
  data() {
    return {
      src: 'https://www.youtube.com/embed/' + this.videoId
    }
  }
}
</script>

<style scoped lang="scss">
.youtube-wrapper {
  position: relative;
  height: 0;
  padding-top: 56.25%;
  width: 100%;
  iframe {
    @extend .center-abs;
    // position: absolute;
    top: 0;
    border: 0;
    width: 100%;
    height: 100%;
    // max-height: 450px;
    // max-width: 800px;
  }
}
</style>
