<template>
  <div class="main">

    <section class="head">
      <div class="inner">
        <app-title
          v-if="error.statusCode === 404"
          text-before="Error 404"
          text="Page Not Found"
        />
        <app-title
          v-else
          text-before="Error"
          text="An error occurred"
        />
      </div>
    </section>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppTitle from '@/components/AppTitle'

export default {
  layout: 'main',
  components: {
    AppButton,
    AppTitle
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
