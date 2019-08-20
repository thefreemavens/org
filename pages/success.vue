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
          <span>Thank You!</span>
        </h1>
        <!-- <p>The real Law of Attraction and how to apply it in your life</p> -->
      </div>
      <!-- <div class="content"> -->
      <!-- <p> Your email was submitted successfully. and additional information about your request to be  Initiated with the Free Mavens will be sent to you within 24-48 hours. </p> -->
      <!-- <app-form /> -->
      <!-- </div> -->

    </section>

    <!-- <app-footer/> -->

  </div>
</template>

<script>
import AppLogomark from '@/components/AppLogomark'
// import Icon from '@/components/icons/Icon'
// import IconNaturalLaw from '@/components/icons/IconNaturalLaw'
// import IconSg8 from '@/components/icons/IconSg8'
// import IconSg20 from '@/components/icons/IconSg20'
// import AppForm from '@/components/AppForm'
import AppFooter from '@/components/AppFooter'

export default {
  layout: 'main',
  components: {
    AppLogomark,
    // Icon,
    // IconNaturalLaw,
    // IconSg8,
    // IconSg20,
    // AppForm,
    AppFooter
  },
  head() {
    return {
      title: 'The Free Mavens',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'You have been initiated.'
        }
      ],
      bodyAttrs: {
        class: 'brand-theme'
        // class: this.modalOpen ? 'm-open' : 'm-close'
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
        // margin-top: -1vh;
        padding: 0 30px;
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

.content {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: 1fr;
  &.columns-2 {
    .col1 {
      & > p:last-of-type {
        margin-bottom: 0; // remove extra space betweeb <p> on a single column
      }
    }
    @include desktop {
      // grid-template-columns: 1fr 1fr;
      // max-width: 920px;
    }
  }
  & div {
    padding: 0 30px;
  }
}

.content p {
  text-align: center;
}
</style>
