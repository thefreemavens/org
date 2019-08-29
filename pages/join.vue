<template>
  <section class="main">

    <div
      v-scroll-reveal.reset="{ duration: 3300, scale: 1 }"
      class="side-a">

      <div class="poster image">
        <div class="inner" />
      </div>
    </div>

    <div class="side-b">
      <div
        v-scroll-reveal="{ duration: 2300, delay: 300, scale: 1 }"
        class="poster form">
        <nuxt-link to="/">
          <app-logomark
            logo-style="line"
            class="logo"
          />
        </nuxt-link>
        <app-title
          title-size="title-sm"
          text="Initiation"
          text-after="Form"
        />

        <app-form />

      </div>

    </div>
  </section>
</template>

<script>
import AppLogomark from '@/components/AppLogomark'
import AppTitle from '@/components/AppTitle'
import AppForm from '@/components/AppForm'
import Icon from '@/components/icons/Icon'
import IconNaturalLaw from '@/components/icons/IconNaturalLaw'

export default {
  layout: 'main',
  components: {
    AppLogomark,
    AppTitle,
    AppForm,
    Icon,
    IconNaturalLaw
  },
  head() {
    return {
      title: 'The Free Mavens',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The Free Mavens Organization Official Website.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-height: stretch;
  color: $black;
  @include tablet {
    grid-template-columns: 1fr 1fr;
  }
}

.side-a {
  display: none;
  @include tablet {
    display: inherit;
    position: sticky;
    top: 0;
    height: 100vh;
  }
  // position: absolute;
  // top: 0;
  // left: 0;
  // z-index: 10;
  // width: 50%;
}
.feature,
.poster {
  text-align: center;
  position: relative;
}

// 100vh
.poster {
  min-height: 100vh;
  &.form {
    // background: $grey-2;
  }
  &.image {
    background: $grey-2;
  }
  h3 {
    @extend .h4;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: $grey-6;
  }
  @include phone {
    height: 100%;
  }
  .inner {
    @extend .v-center;
    height: 100%;
    max-width:: 26.333vw;
    position: absolute;
    display: block;
    background-image: url('/images/flower-of-life.png');
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.logo {
  @include fp(width, 55, 66);
  @include fp(height, 55, 66);
  // @extend .center;
  margin: 8vh 0 0;
  // display: block;
}

// Custom
// .natural-law .image {
//   background-image: url('/images/flower-of-life.png');
// }
// .join .image {
//   background-image: url('/images/background-flags.jpg');
// }
</style>
