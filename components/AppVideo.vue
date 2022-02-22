<template>
  <iframe
    :src="src"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media"
    allowfullscreen
    autoplay
  />
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
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
iframe {
  aspect-ratio: 16 / 9;
  width: 100%;
}
</style>
