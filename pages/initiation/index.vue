<template>
  <section class="main">

    <div
      v-scroll-reveal="{ duration: 2666, scale: 1 }"
      class="side-a">

      <div class="poster image">
        <div class="inner" />
      </div>
    </div>

    <div class="side-b">
      <div
        class="poster">
        <nuxt-link
          v-scroll-reveal="{ duration: 1999, delay: 666 }"
          to="/"
          class="wrapper">
          <app-logomark
            logo-style="line"
            class="logo"
          />
        </nuxt-link>
        <app-title
          v-scroll-reveal="{ duration: 1999, delay: 999 }"
          title-size="title-sm"
          text="Initiation"
          text-after="Form"
        />

        <app-form v-scroll-reveal="{ duration: 1999, delay: 1111 }" />

        <app-footer />
        
      </div>

    </div>
  </section>
</template>

<script>
import AppLogomark from '@/components/AppLogomark'
import AppFooter from '@/components/AppFooter'
import AppTitle from '@/components/AppTitle'
import AppForm from '@/components/AppForm'
import Icon from '@/components/icons/Icon'
import IconNaturalLaw from '@/components/icons/IconNaturalLaw'

export default {
  layout: 'main',
  components: {
    AppLogomark,
    AppFooter,
    AppTitle,
    AppForm,
    Icon,
    IconNaturalLaw
  },
  head() {
    return {
      title: 'The Freemavens',
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
  // min-height: 100vh;
  // min-height: stretch;
  color: $black;
  @include tablet {
    grid-template-columns: 1fr 1fr;
  }
}

.feature,
.poster {
  text-align: center;
  position: relative;
}

.side-a {
  display: none;
  @include tablet {
    display: inherit;
    position: sticky;
    top: 0;
    height: 100vh;
  }
}

.side-b .poster {
  width: 70%;
  margin: 0 15% 0;
  form {
    display: block;
    margin-top: 8vh;
  }
}

// 100vh
.poster {
  &.image {
    background: $brand;
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

.wrapper {
  margin: 8vh 0 0;
  display: inline-block;
}

.logo {
  @include fp(width, 55, 66);
  @include fp(height, 55, 66);
  // @extend .center;
}

// .legal {
//   font-size: $h6;
//   // margin-top: 6vh;
//   // margin-bottom: 6vh;
//   line-height: 1.4rem;
// }

// Custom
// .natural-law .image {
//   background-image: url('/images/flower-of-life.png');
// }
// .join .image {
//   background-image: url('/images/background-flags.jpg');
// }
</style>
