<template>
  <div class="main dark-theme">

    <section
      v-scroll-reveal.reset
      class="head">
      <icon
        class="title-icon"
        icon-name="natural-law"
        icon-color="none"
        icon-stroke-color="#fff"
        icon-stroke-width="14"
        width="100"
        height="100">
        <icon-natural-law />
      </icon>
      <div class="inner">
        <h1>
          <!-- <span class="pre">The Real</span> -->
          <span>Natural Law</span>
        </h1>
        <p>The real Law of Attraction and how to apply it in your life</p>
      </div>
      <!-- <p class="desc">Free Seminar</p> -->
      <!-- <h3>Worldwide</h3> -->
      <!-- </div> -->

    </section>

    <section>
      <h1
        v-scroll-reveal
        class="title"><span class="pre">About The</span><span>Seminar</span>
      </h1>
      <div v-scroll-reveal="{ delay: 300 }">     
        <icon
          class="sg-icon"
          icon-name="sg8"
          icon-color="none"
          icon-stroke-color="#fff"
          stroke-linejoin="round"
          icon-stroke-width="6">
          <icon-sg8 />
        </icon>
      </div>
      <div class="content columns-2">
        <div
          v-scroll-reveal="{ delay: 150 }"
          class="col1">
          <p>
            <span class="truth">This seminar is free, open and required by all to self-educate and share.</span>
          </p>
          <p>
            Watch, listen and learn the real Law of Attraction and how to apply it in your life so you too can benefit from this timeless masterpiece of inspiring and empowering occulted knowledge.
          </p>
          <p>
            The seminar is required to know and act on the information given for anyone who wishes to join The Free Mavens.
          </p>
        </div>
        <div
          v-scroll-reveal="{ delay: 300 }"
          class="col2">
          <p>
            There are only two mistakes one can make on the path to truth: not starting and not going all the way. This seminar will take you all the way.
          </p>
          <p>
            As a whole, the body of knowledge presented in the seminar has the potential to save humanity from our current state of slavery.
          </p>
          <p>
            The multi-part presentation format is for educational and reference purposes. Educate Yourself.
          </p>
        </div>
      </div>
    </section>

    <section class="episodes">
      <h1
        v-scroll-reveal
        class="title"><span class="pre">List Of</span><span>Episodes</span>
      </h1>
      <div v-scroll-reveal="{ delay: 300 }">     
        <icon
          class="sg-icon"
          icon-name="sg20"
          icon-color="none"
          icon-stroke-color="#fff"
          stroke-linejoin="round"
          icon-stroke-width="6">
          <icon-sg20 />
        </icon>
      </div>
      <div class="content">
        <div
          v-scroll-reveal="{ delay: 150 }"
          class="col1">
          <ol>
            <li>
              <span>Episode 1 / 3:33</span>
              <span>
                <a
                  href="https://youtu.be/PnIVtZElymw"
                  target="_blank">
                  Before We Begin 
                </a>
              </span>
            </li>
            <li>
              <span>Episode 2 / 3:35</span>
              <span>
                <a
                  href="https://youtu.be/ft74HDhZ66s"
                  target="_blank">
                  Presentation Style
                </a>
              </span>
            </li>
            <li>
              <span>Episode 3 / 4:52</span>
              <span>
                <a
                  href="https://youtu.be/M0_9IVemAKo"
                  target="_blank">
                  Prerequisites
                </a>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="">
      <div
        v-scroll-reveal
        class="profile-image" />
      <h1
        v-scroll-reveal
        class="title"><span class="pre">About The Speaker</span><span>Mark Passio</span></h1>
      <div class="content columns-2">
        <div
          v-scroll-reveal="{ delay: 150 }"
          class="col1">
          <p>
            Mark Passio is an independent researcher, public speaker, radio talk show host, conference organizer and freedom activist from Philadelphia, PA.
          </p>
          <p>
            Mark has undertaken the task of assembling vast amounts of research in the areas of metaphysics, occultism, spirituality, symbology and consciousness studies.
          </p>
          <p>
            In 2007, Mark began presenting this information in the form of a presentation series entitled
            <a
              href="http://www.whatonearthishappening.com"
              target="_blank">What On Earth Is Happening</a>, with the intention of bringing the implications of this body of knowledge to greater public awareness.
          </p>
        </div>
        <div
          v-scroll-reveal="{ delay: 300 }"
          class="col2">
          <p>
            In 2010, Mark began hosting his own
            <a
              href="http://www.whatonearthishappening.com/show"
              target="_blank">weekly internet radio show
            </a> which continues today in the form of a podcast.  Mark was one of the co-founders of the
            <a
              href="http://www.freeyourmindconference.com/"
              target="_blank">
            Free Your Mind Conference</a>, the Philadelphia-based conference on consciousness, mind control and the occult.
          </p>
          <p>
            Over the years, Mark has worked closely with activist groups in his area such as the
            <a
              href="http://teslasciencefoundation.org"
              target="_blank">Tesla Science Foundation</a>,
            <a
              href="https://libertyontherocks.org"
              target="_blank">
            Philadelphia Liberty On The Rocks</a>, Truth-Freedom-Prosperity and Survive & Thrive Philadelphia.
          </p>
        </div>
      </div>
    </section>

    <app-footer/>

  </div>
</template>

<script>
// import AppLogomark from '@/components/AppLogomark'
import Icon from '@/components/icons/Icon'
import IconNaturalLaw from '@/components/icons/IconNaturalLaw'
import IconSg8 from '@/components/icons/IconSg8'
import IconSg20 from '@/components/icons/IconSg20'
import AppFooter from '@/components/AppFooter.vue'

export default {
  layout: 'main',
  components: {
    // AppLogomark,
    Icon,
    IconNaturalLaw,
    IconSg8,
    IconSg20,
    AppFooter
  },
  head() {
    return {
      title: 'The Free Mavens | Natural Law',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The real Law of Attraction and how to apply it in your life'
        }
      ],
      bodyAttrs: {
        class: 'dark-theme'
        // class: this.modalOpen ? 'm-open' : 'm-close'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  // display: block;
  // padding: 0;
  // display: grid;
  // grid-template-columns: 1fr;
  // position: relative;
  width: 100%;
  // height: 100vh;
  // color: $white;
  background: $grey-2;
  @include tablet {
    // grid-template-columns: 1fr 1fr;
  }
  section.head {
    width: 100%;
    min-height: 100vh;
    // @extend .flex;
    text-align: center;
    background: linear-gradient(
        to bottom,
        rgba(20, 20, 24, 0) 0%,
        rgba(20, 20, 24, 0) 33%,
        rgba(20, 20, 24, 1) 100%
      ),
      url('/images/background-naturalLaw.jpg') center center;
    background-size: cover;
    .inner {
      p {
        @extend .subtitle-l;
        margin-top: -1vh;
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
  margin: 10vh auto 20vh;
  width: 80px;
  height: 80px;
}

.sg-icon {
  margin-top: -3vh;
  margin-bottom: 4vh;
  width: 66px;
  height: 66px;
}

.subtitle {
  color: $grey-6;
  position: relative;
  bottom: 2vh;
}
.desc {
  text-align: center;
  margin: 24vh 0 0;
  @extend .h2;
  color: $grey-3;
}

.episodes {
  ol {
    @extend .pure-list;
    text-align: center;
    li {
      margin-bottom: 4vh;
      & > span:first-of-type {
        position: relative;
        top: 0.1vh;
        @extend .subtitle;
        color: $grey-4;
      }
      & > span:last-of-type {
        @extend .h3;
      }
      span {
        display: block;
      }
    }
  }
}

.profile-image {
  display: block;
  margin: 4vh auto 0;
  width: 132px;
  height: 132px;
  background: url('/images/mark-passio.jpg') center center;
  background-size: 132px 132px;
  border-radius: 50%;
  border: 3px solid $white;
}

.content {
  max-width: 520px;
  margin: 0 auto;
  padding: 0 0;
  display: grid;
  grid-template-columns: 1fr;
  &.columns-2 {
    .col1 {
      & > p:last-of-type {
        margin-bottom: 0; // remove extra space betweeb <p> on a single column
      }
    }
    @include desktop {
      grid-template-columns: 1fr 1fr;
      max-width: 920px;
    }
  }
  & div {
    padding: 0 30px;
  }
}
</style>
