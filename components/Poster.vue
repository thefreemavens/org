<template lang="html">
  <!-- :style="{ backgroundImage: 'url(\'' + imageTitle + '\')' }" -->
  <section
    :style="{ backgroundImage: 'url(\'' + imageTitle + '\')' }"
    class="poster h-screen top-0 w-full bg-top bg-no-repeat bg-fixed bg-cover transition-all duration-300 ease-in-out"
    @error="noImage()"
  />
</template>

<script>
export default {
  props: {
    poster: {
      type: String,
      default: null,
    },
    // posterDark: {
    //   type: String,
    //   default: null,
    // },
    // ext: {
    //   type: String,
    //   default: 'jpg',
    // },
  },
  computed: {
    imageTitle() {
      return require('../assets/img/posters/' + this.poster)
    },
    // imageTitle() {
    //   return require('../assets/img/posters/' +
    //     this.poster +
    //     '-' +
    //     this.$colorMode.preference +
    //     '.' +
    //     this.ext)
    // },
    // imageTitle() {
    //   if (this.posterDark && this.$colorMode.preference === 'dark') {
    //     return require('../assets/img/posters/' +
    //       this.posterDark +
    //       '.' +
    //       this.ext)
    //   }
    //   if (this.poster && this.$colorMode.preference === 'light') {
    //     return require('../assets/img/posters/' + this.poster + '.' + this.ext)
    //   } else {
    //     return ''
    //   }
    // },
  },
  methods: {
    noImage() {
      return this.poster === ''
    },
    // imageColorMode() {
    //   this.$colorMode.preference =
    //     this.$colorMode.preference === 'light' ? 'dark' : 'light'
    // },
  },
}
</script>
<style scoped lang="postcss">
/* section {
  height: calc(100vh - 3.5rem);
} */
</style>
