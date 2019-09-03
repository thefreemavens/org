<template>
  <section class="main">

    <div
      v-scroll-reveal.reset="{ duration: 2666, scale: 1 }"
      class="side-a">

      <div class="poster image">
        <div class="inner" />
      </div>
    </div>

    <div class="side-b">
      <div
        class="poster form">
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
          text-after="Step I"
        />

        <div
          v-scroll-reveal="{ duration: 1999, delay: 1111 }"
          class="content">
          <!-- <p class="truth">
          Welcome, please read:
          Thank you for choosing light over darkness.
          </p> -->
          <p>
            Your email was added to our List of Initiates.
          </p>
          <p>
            Our email verification process is a bit unconventional. The next step for your initiation will be mailed to you within 6 days.
          </p>
          <p>
            In the meantime, we invite you to join our public group where we share our public announcements.
          </p>
          <a
            v-scroll-reveal="{ duration: 2333, delay: 1666 }"
            href="https://www.facebook.com/freemavenry/"
            target="_blank">
            <app-button
              class="fill-c wide"
              title="Join Public Group"
            />
          </a>
        </div>
        <!-- <app-footer v-scroll-reveal="{ duration: 1999 }"/> -->
      </div>
    </div>
  </section>
</template>

<script>
import AppLogomark from '@/components/AppLogomark'
import AppButton from '@/components/AppButton'
import AppFooter from '@/components/AppFooter'
import AppTitle from '@/components/AppTitle'
import Icon from '@/components/icons/Icon'
import IconNaturalLaw from '@/components/icons/IconNaturalLaw'

export default {
  layout: 'main',
  components: {
    AppLogomark,
    AppButton,
    AppFooter,
    AppTitle,
    Icon,
    IconNaturalLaw
  },
  head() {
    return {
      title: 'The Free Mavens | Initiation Confirmation',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The Free Mavens Initiation Confirmation.'
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

.content {
  margin-top: 6vh;
  width: 85%;
  p {
    @extend p.sm;
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

p.truth {
  // color: $grey-4;
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

// Custom
// .natural-law .image {
//   background-image: url('/images/flower-of-life.png');
// }
// .join .image {
//   background-image: url('/images/background-flags.jpg');
// }
</style>
