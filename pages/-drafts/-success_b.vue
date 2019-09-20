<template>
  <div class="main">

    <section
      v-scroll-reveal.reset
      class="head">
      <nuxt-link to="/">
        <app-logomark
          logo-style="line"
          class="logo title-icon"
        />
      </nuxt-link>
      <div class="inner">
        <h1>
          <!-- <span class="pre">The Real</span> -->
          <span>Congrats!</span>
        </h1>
        <!-- <p>The real Law of Attraction and how to apply it in your life</p> -->
      </div>
      <div class="content">
        <p>
          Your email has been registered and added to our list of initiates.
        </p>
        <p>
          You'll be provided with future updates and additional information that is relevant to your initiation process including further steps you'll need to take to complete your initiation with The Freemavens.
        </p>
        <p>
          <b>Remember:</b> We only accept initiates who are free, open-minded and truth-seekers with a shared goal that is aligned with the <nuxt-link to="/freemavenry">Freemavens</nuxt-link> principles and what we stand for.
        </p>

        <span>Subject: You’re invited to make a difference!</span>
        <p>
          Dear friend,
        </p>

        <p>
          Thank you for your interest in joining The Free Mavens.
        </p>

        <p>
          Your invitation code is:<br>
          <a href="https://www.facebook.com/groups/119762302071944"><b>5555</b></a>
        </p>

        <p>
          <b>Next, follow these steps:</b>
        </p>

        <ol>
          <li>
            Like our main <a href="https://www.facebook.com/thefreemaven/">Facebook Page</a>.
          </li>
          <li>
            Join our main <a href="https://www.facebook.com/groups/119762302071944">Facebook Group</a>.
          </li>
          <li>
            When prompted, enter your Invititation Code.
          </li>
        </ol>

        <p>
          Once you have completed all steps, we will follow-up and provide you with information on our Initiation Process.
        </p>

        <p>
          On behalf of all members of The Free Mavens community, we thank and welcome your wish to make a difference.
        </p>

        <p />

        <a
          href="https://thefreemavens.org"
          title="thefreemavens.org">
          <img
            src="https://thefreemavens.org/android-chrome-192x192.png"
            width="66px">
        </a>
        <p>
          The Free Mavens<br>
          <a href="https://thefreemavens.org">https://thefreemavens.org</a>
        </p>
      </div>
      <app-footer/>
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
      title: 'The Freemavens',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'You have been initiated.'
        }
      ],
      bodyAttrs: {
        class: ''
        // class: this.modalOpen ? 'm-open' : 'm-close'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  // background: $white;
  @include tablet {
  }
  section.head {
    width: 100%;
    min-height: 100vh;
    text-align: center;
    // background: linear-gradient(
    //     to bottom,
    //     rgba(245, 245, 249, 0) 0%,
    //     rgba(245, 245, 249, 0) 33%,
    //     rgba(245, 245, 249, 1) 100%
    //   ),
    //   url('/images/background-flags-light.jpg') center center;
    // background-size: cover;
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
    // text-align: center;
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
  // text-align: center;
  margin: 24vh 0 0;
  @extend .h2;
  color: $grey-3;
}

.content {
  // max-width: 500px;
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
  // text-align: center;
}
</style>
