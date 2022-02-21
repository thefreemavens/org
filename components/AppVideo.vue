<template>
  <div class="youtube-wrapper">
    <iframe
      :src="src"
      width="100%"
      height="auto"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      autoplay
    />
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      default: 'q8sQf-QtXbY',
    },
  },
  data() {
    return {
      src:
        'https://www.youtube-nocookie.com/embed/' + this.videoId + '?start=30',
    }
  },
}
</script>

<style scoped lang="postcss">
.youtube-wrapper {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  width: 100%;
  
  iframe {
    position: absolute;
    /* left: 50%; */
    /* transform: translate(-50%, 0); */
    left: 0;
    top: 0;
    border: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
