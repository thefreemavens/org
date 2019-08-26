<template>
  <div class="main dark-theme">

    <section
      v-scroll-reveal.reset
      class="head">
      <nuxt-link to="/">
        <app-logomark
          logo-style="line-w"
          class="logo title-icon"
        />
      </nuxt-link>
      <div class="inner">
        <h1>
          <!-- <span class="pre">The Real</span> -->
          <span>Be a Maven</span>
        </h1>
        <!-- <p>The real Law of Attraction and how to apply it in your life</p> -->
      </div>
      <div class="content">
        <p class="">
          Our members consists of free, open minded and truth seekers with a shared goal that is aligned with our principles and what <nuxt-link to="/freemavenry">Freemavenry</nuxt-link> stands for. <!-- The key is unity – Join us. -->
        </p>
        <app-form />
      </div>

    </section>

  </div>
</template>

<script>
import AppLogomark from '@/components/AppLogomark'
import AppForm from '@/components/AppForm'

export default {
  layout: 'main',
  components: {
    AppLogomark,
    AppForm
  },
  head() {
    return {
      title: 'The Free Mavens | Join',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The real Law of Attraction and how to apply it in your life'
        }
      ],
      bodyAttrs: {
        class: 'brand-theme'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  background: $brand;
  @include tablet {
  }
  section.head {
    width: 100%;
    min-height: 100vh;
    // @extend .flex;
    text-align: center;
    background: linear-gradient(
        to bottom,
        rgba(99, 66, 255, 0) 0%,
        rgba(99, 66, 255, 0) 33%,
        rgba(99, 66, 255, 1) 100%
      ),
      url('/images/background-flags.jpg') center center;
    background-size: cover;
    .inner {
      p {
        @extend .subtitle-l;
        margin-top: -1vh;
        // padding: 0 30px;
      }
    }
  }
  section {
    height: 100%;
    text-align: center;
    padding: 30px 0;
  }
}

.title-icon {
  display: block;
  margin: 5vh auto 8vh;
  width: 66px;
  height: 66px;
}

// .sg-icon {
//   margin-top: -3vh;
//   margin-bottom: 4vh;
//   width: 66px;
//   height: 66px;
// }

// .subtitle {
//   color: $grey-6;
//   position: relative;
//   bottom: 2vh;
// }

.desc {
  text-align: center;
  margin: 24vh 0 0;
  @extend .h2;
  color: $grey-3;
}
</style>
