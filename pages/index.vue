<template>
  <div>
    <section class="main">

      <div
        v-scroll-reveal.reset="{ duration: 3300, scale: 1 }"
        class="side-a">
        <div class="box box-1">
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
              <h1 class="title"><span class="pre">The Free</span><span>Mavens</span></h1>
            </nuxt-link>
          </div>
          <h3>Worldwide</h3>
        </div>

      </div>

      <div
        v-scroll-reveal="{ duration: 2300, delay: 300, scale: 1 }"
        class="side-b">
        <div class="box box-2">
          <div class="inner">
            <nuxt-link to="/natural-law">
              <icon
                icon-name="natural-law"
                icon-color="none"
                icon-stroke-color="#fff"
                icon-stroke-width="14"
                width="60"
                height="60">
                <icon-natural-law />
              </icon>
            </nuxt-link>
            <h2>Natural Law</h2>
          </div>
        </div>

        <div
          v-scroll-reveal="{ duration: 2300, delay: 450, scale: 1 }"
          class="box box-3">
          <div class="inner">
            <nuxt-link
              to="/join"
              class="h3 link-alt btn-alt"
            >
              Be a Maven
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppLogomark from '@/components/AppLogomark'
import Icon from '@/components/icons/Icon'
import IconNaturalLaw from '@/components/icons/IconNaturalLaw'

export default {
  layout: 'main',
  components: {
    AppLogomark,
    Icon,
    IconNaturalLaw
  },
  head() {
    return {
      title: 'The Free Mavens | Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The Free Mavens organization official website.'
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
  color: $black;
  @include tablet {
    grid-template-columns: 1fr 1fr;
  }
}

.box {
  text-align: center;
  position: relative;
  .inner {
    @extend .v-center;
    width: 100%;
  }
}
.box-1 {
  background: $white;
  min-height: 100vh;
  @include tablet {
    height: 100%;
  }
  h3 {
    @extend .h4;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: $grey-6;
  }
}
.box-2 {
  color: $white;
  background: url('/images/background-naturalLaw.jpg') center center;
  background-size: cover;
  height: 50vh;
  @include tablet {
    height: 50%;
  }
}
.box-3 {
  color: $white;
  background: url('/images/background-flags.jpg') center center;
  background-size: cover;
  height: 50vh;
  @include tablet {
    height: 50%;
  }
  a.btn-alt {
    display: inline-block;
    border: 2px solid $white;
    padding: 10px 20px;
  }
}

.logo {
  @include fp(width, 66, 128);
  @include fp(height, 66, 128);
  // margin-top: 200px;
}
</style>
