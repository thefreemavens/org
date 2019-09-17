<template>
  <div class="main">

    <section
      v-scroll-reveal.reset
      class="head">
      <nuxt-link to="/">  
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
      </nuxt-link>
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
      <app-title
        text-before="About The"
        text="Seminar"
      />
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
      <div class="content two-columns">
        <div
          v-scroll-reveal="{ delay: 150 }"
          class="col1">
          <p>
            <span class="truth">This seminar is free, open and required by all to self-educate and share.</span>
          </p>
          <p>
            Watch, listen and learn the Real Law of Attraction and how to apply it in your life so you too can benefit from this great body of inspiring and empowering body of knowledge.
          </p>
          <p>
            There are only two mistakes one can make on the path to truth: not starting and not going all the way. This seminar will take you all the way.
          </p>
        </div>
        <div
          v-scroll-reveal="{ delay: 300 }"
          class="col2">
          <p>
            As a whole, the body of knowledge presented in the seminar has the potential to save humanity from our current state of slavery.
          </p>
          <p>
            The multi-part presentation format is for educational and reference purposes.
          </p>
          <p>
            Knowing and acting on the body of knowledge presented in this seminar is required for anyone who wishes to <nuxt-link to="/initiation">Join</nuxt-link> The Freemavens.
          </p>
        </div>
      </div>
    </section>

    <section class="episodes">
      <app-title
        text-before="List Of"
        text="Episodes"
      />
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
      <div class="content two-columns">
        <div
          v-scroll-reveal="{ delay: 150 }"
          class="col1">
          <p>
            <span class="truth">This seminar is a Tapestry. It is meant to be taken as a whole, in its entirety.</span>
          </p>
          <p>
            It is highly recommended that you watch the full duration of the seminar, otherwise you will most likely not recognize the patterns inherent to the tapestry.
          </p>
        </div>
        <div
          v-scroll-reveal="{ delay: 300 }"
          class="col2">
          <p>
            Please learn and understand this information, and put it to practical use in your daily life.
          </p>
          <p>
            New episodes will be published as they become available. The original recording and the the full duration of the seminar is available to watch online in three parts.
            <a
              href="https://www.youtube.com/watch?v=ASUHN3gNxWo"
              target="_blank">Part 1</a> | 
            <a
              href="https://www.youtube.com/watch?v=57UBuxnicOA"
              target="_blank">Part 2</a> |
            <a
              href="https://www.youtube.com/watch?v=204aGDVa3Vw"
              target="_blank">Part 3</a>.
          </p>
        </div>
      </div>
      <div class="content">
        <div
          class="col1">
          <ol>
            <episodes-li
              :number="1"
              title="Before We Begin"
              link="https://youtu.be/q8sQf-QtXbY"
              duration="3:33"
            />
            <episodes-li
              :number="2"
              title="Presentation Style"
              link="https://youtu.be/qBvzoNi0d6c"
              duration="3:35"
            />
            <episodes-li
              :number="3"
              title="Prerequisites"
              link="https://youtu.be/RxBXdMfBE1A"
              duration="4:52"
            />
            <episodes-li
              :number="4"
              title="Teachability"
            />
            <episodes-li
              :number="5"
              title="Belief Systems"
            />
            <episodes-li
              :number="6"
              title="Requirements"
            />
            <episodes-li
              :number="7"
              title="The role of Knowledge"
            />
            <episodes-li
              :number="8"
              title="Occult Knowledge"
            />
            <episodes-li
              :number="9"
              title="Nescience vs. Ignorance"
            />
            <episodes-li
              :number="10"
              title="Why Are We Losing Freedom?"
            />
            <episodes-li
              :number="11"
              title="The Master Key"
            />
            <episodes-li
              :number="12"
              title="Problem Solving"
            />
            <episodes-li
              :number="13"
              title="What Truth is"
            />
            <!--             <episodes-li
            number="14"
            title="Truth vs. Perception"
            /> -->
          </ol>
        </div>
      </div>
    </section>

    <section class="">
      <div
        v-scroll-reveal
        class="profile-image" />
      <app-title
        text-before="About The Speaker"
        text="Mark Passio"
      />
      <div class="content two-columns">
        <div
          v-scroll-reveal="{ delay: 150 }"
          class="col1">
          <p>
            Mark Passio is an independent researcher, public speaker, radio talk show host, conference organizer and freedom activist from Philadelphia, PA.
          </p>
          <p>
            Mark has undertaken the task of assembling vast amounts of research in the areas of metaphysics, occultism, spirituality, symbology and consciousness studies.
          </p>
        </div>
        <div
          v-scroll-reveal="{ delay: 300 }"
          class="col2">
          <p>
            In 2007, Mark began presenting this information in the form of a presentation series entitled
            <a
              href="http://www.whatonearthishappening.com"
              target="_blank">What On Earth Is Happening</a>, with the intention of bringing the implications of this body of knowledge to greater public awareness.
          </p>
          <p>
            The full biography is available on Mark's website -<br>
            <a
              href="http://www.whatonearthishappening.com/bio"
              target="_blank">What On Earth Is Happening
            </a>
          </p>
        </div>
        <!--           <p>
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
        </p> -->
        <!-- </div> -->
      </div>
    </section>

    <app-footer/>

  </div>
</template>

<script>
// import AppLogomark from '@/components/AppLogomark'
import AppTitle from '@/components/AppTitle'
import Icon from '@/components/icons/Icon'
import IconNaturalLaw from '@/components/icons/IconNaturalLaw'
import IconSg8 from '@/components/icons/IconSg8'
import IconSg20 from '@/components/icons/IconSg20'
import EpisodesLi from '@/components/EpisodesLi'
import AppFooter from '@/components/AppFooter'

export default {
  layout: 'main',
  components: {
    // AppLogomark,
    AppTitle,
    Icon,
    IconNaturalLaw,
    IconSg8,
    IconSg20,
    EpisodesLi,
    AppFooter
  },
  head() {
    return {
      title: 'The Free Mavens | Natural Law',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The Real Law of Attraction and how to apply it in your life'
        },
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content: 'My custom description'
        // }
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Natural Law Seminar'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://thefreemavens.org/natural-law'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://thefreemavens.org/images/the-free-mavens-flag.jpg'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Natural Law Seminar'
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
  background: $grey-1;
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
  margin-top: -4vh;
  margin-bottom: 8vh;
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
    margin-top: 12vh;
  }
}

.profile-image {
  display: block;
  margin: 4vh auto 2vh;
  background: url('/images/mark-passio.jpg') center center;
  background-size: cover;
  border-radius: 50%;
  border: 3px solid $white;
  @include fp(width, 96, 148);
  @include fp(height, 96, 148);
}
</style>
