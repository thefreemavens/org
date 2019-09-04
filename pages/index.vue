<template>
  <section class="main">

    <div
      v-scroll-reveal.reset="{ duration: 3300, scale: 1 }"
      class="side-a">

      <div class="poster">
        <div class="inner">
          <nuxt-link to="/freemavenry">
            <app-logomark
              logo-style="line"
              height="66px" 
              width="66px" 
              class="logo"
            />
          </nuxt-link>
          <nuxt-link
            to="/freemavenry"
            class="linkless">
            <app-title
              text-before="The Free"
              text="Mavens"
            />
          </nuxt-link>
        </div>
        <h3>Worldwide</h3>
      </div>

    </div>

    <div class="side-b">
      <div
        v-scroll-reveal="{ duration: 2300, delay: 300, scale: 1 }"
        class="feature natural-law">
        <nuxt-link
          to="/natural-law"
          class="link-alt">
          <div class="inner">
            <icon
              icon-name="natural-law"
              icon-color="none"
              icon-stroke-color="#fff"
              icon-stroke-width="14"
              width="60"
              height="60">
              <icon-natural-law />
            </icon>
            <h2>Natural Law</h2>
          </div>
        </nuxt-link>
        <nuxt-link to="/natural-law">
          <div class="image" />
        </nuxt-link>
      </div>

      <div
        v-scroll-reveal="{ duration: 2300, delay: 450, scale: 1 }"
        class="feature join">
        <div class="inner">
          <nuxt-link
            to="/initiation"
            class="h3 link-alt btn-alt">
            Be a Maven
          </nuxt-link>
        </div>
        <nuxt-link to="/initiation">
          <div class="image" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogomark from '@/components/AppLogomark'
import AppTitle from '@/components/AppTitle'
import Icon from '@/components/icons/Icon'
import IconNaturalLaw from '@/components/icons/IconNaturalLaw'

export default {
  layout: 'main',
  components: {
    AppLogomark,
    AppTitle,
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
  @include phone {
    grid-template-columns: 1fr 1fr;
  }
}

.feature,
.poster {
  text-align: center;
  position: relative;
}

// 100vh
.poster {
  min-height: 100vh;
  background: $white;
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
    // width: 100%;
  }
}

// 50vh
.feature {
  color: $white;
  background-size: cover;
  height: 50vh;
  overflow: hidden;
  .image {
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-size: cover;
    transition: all 0.666s ease-out;
    &:hover {
      transform: scale(1.06);
    }
  }
  .inner {
    @extend .v-center;
    z-index: 10;
    padding: 0;
  }
  svg {
    @extend .center;
  }
  a.btn-alt {
    display: inline-block;
    border: 2px solid $white;
    padding: 10px 20px;
  }
  @include phone {
    height: 50%;
  }
}

.logo {
  @include fp(width, 66, 128);
  @include fp(height, 66, 128);
  margin: 0 auto 4vh;
  display: block;
}

// Custom
.natural-law .image {
  background-image: url('/images/background-naturalLaw.jpg');
}
.join .image {
  background-image: url('/images/background-flags.jpg');
}
</style>
