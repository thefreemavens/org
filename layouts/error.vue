<template>
  <div class="main">

    <section class="head">
      <div class="inner">
        <h1
          v-if="error.statusCode === 404"
          class="title">
          <span
            v-scroll-reveal
            class="pre">
            Error 404
          </span>
          <span v-scroll-reveal="{ dealy: 300 }">
            Page Not Found
          </span>
        </h1>
        <h1 v-else>
          <span
            v-scroll-reveal
            class="pre">
            Error
          </span>
          <span v-scroll-reveal="{ dealy: 150 }">An error occurred</span>
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  layout: 'main',
  components: {
    AppButton
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: 'The Free Mavens',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Error Page'
        }
      ],
      bodyAttrs: {
        class: 'dark-theme'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  color: $black;
  background: $white;
  .head {
    width: 100%;
    min-height: 100vh;
    text-align: center;
    .inner {
      @extend .v-center;
      margin-top: -8vh;
    }
  }
  section {
    height: 100%;
    text-align: center;
    padding: 30px 0;
  }
}

// .subtitle {
//   // color: $grey-6;
//   position: relative;
//   bottom: 2vh;
// }
// .desc {
//   text-align: center;
//   margin: 24vh 0 0;
//   @extend .h2;
//   color: $grey-3;
// }
</style>
