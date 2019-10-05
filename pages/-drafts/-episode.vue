<template>
  <div class="main">

    <transition
      name="fade"
      mode="out-in">
      <div
        v-show="lightbox"
        id="lightbox"
        :class="{ active: lightbox }"
        @click.prevent="hide">
        <img :src="images[index]">
      </div>
    </transition>

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
        <app-title
          v-scroll-to="'#video'"
          text-before="Episode 5"
          text="Teachability"
          class="link"
        />
      </div>
      <!-- <p class="desc">Free Seminar</p> -->
      <!-- <h3>Worldwide</h3> -->
      <!-- </div> -->

    </section>

    <section
      v-scroll-reveal
      id="video">
      <div class="video-inner">
        <div class="youtube-wrapper">
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/14di-kiGBEg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            autoplay />
        </div>
      </div>
    </section>

    <section>
      <div class="content content-m">
        <app-title
          id="about"
          text-before="Episode"
          text="Notes"
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
        <div class="content">
          <div
            v-scroll-reveal="{ delay: 150 }"
            class="col1">
            <p>
              An Individual's Teachability, or their ability to learn by way of being taught by someone else, is extremely dependent upon the open-mindedness or closed-mindedness of the individual being taught.
            </p>
            <p>
              Low Teachability derives from arrogance and rigid skepticism, but also from naiveté and gullibility.
            </p>
            <p>
              High Teachability derives from a balance between healthy skepticism and an open-minded willingness to learn and change.
            </p>
            <p>
              Human beings should consider with great care their sources for information.
            </p>
            <p>
              By refusing to present certain information, and by influencing people to dismiss certain information as unimportant or unnecessary to consider, many modern institutions seek to control human perceptions and therefore to limit what human beings may come to understand.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <app-title
        text-before="Supporting"
        text="Visuals"
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
      <div
        v-scroll-reveal="{ delay: 300 }"
        class="content content-m two-columns">
        <img
          :src="images[0]"
          @click.prevent="show(0)"
        >
        <img
          :src="images[1]"
          @click.prevent="show(1)"
        >
        <img
          :src="images[2]"
          @click.prevent="show(2)"
        >
        <img
          :src="images[3]"
          @click.prevent="show(3)"
        >
        <img
          :src="images[4]"
          @click.prevent="show(4)"
        >
        <img
          :src="images[5]"
          @click.prevent="show(5)"
        >
        <img
          :src="images[6]"
          @click.prevent="show(6)"
        >
        <img
          :src="images[7]"
          @click.prevent="show(7)"
        >
      </div>
    </section>

    <app-footer/>

  </div>
</template>

<script>
// import AppLogomark from '@/components/AppLogomark'
import AppTitle from '@/components/AppTitle'
// import AppLightbox from '@/components/AppLightbox'
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
    // AppLightbox,
    Icon,
    IconNaturalLaw,
    IconSg8,
    IconSg20,
    EpisodesLi,
    AppFooter
  },
  head() {
    return {
      title: 'Natural Law',
      bodyAttrs: {
        class: 'dark-theme'
      }
    }
  },
  data() {
    return {
      src: '',
      index: 0,
      lightbox: false,
      // lightbox: true,
      images: [
        '/images/natural-law/teachability-bell-curve-01.png',
        '/images/natural-law/teachability-bell-curve-02.png',
        '/images/natural-law/teachability-bell-curve-03.png',
        '/images/natural-law/teachability-bell-curve-04.png',
        '/images/natural-law/teachability-bell-curve-05.png',
        '/images/natural-law/teachability-bell-curve-06.png',
        '/images/natural-law/teachability-bell-curve-07.png',
        '/images/natural-law/teachability-bell-curve-08.png'
      ]
    }
  },
  methods: {
    show(index) {
      this.index = index
      this.lightbox = true
    },
    hide() {
      this.lightbox = false
      // this.index = 0
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  background: $grey-1;
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

.youtube-wrapper {
  position: relative;
  height: 0;
  padding-top: 56.25%;
  width: 100%;
  iframe {
    @extend .center-abs;
    // position: absolute;
    top: 0;
    border: 0;
    width: 100%;
    height: 100%;
    // max-height: 450px;
    // max-width: 800px;
  }
}
section#video {
  @extend .flex;
  min-height: 100vh;
  .video-inner {
    display: block;
    width: 100%;
    max-height: 450px;
    max-width: 800px;
    // background: $white;
  }
}

#lightbox {
  @extend .flex;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba($black, 0.9);
  z-index: 10;
  cursor: zoom-out;
  // opacity: 0;
  // transition: opacity 1s ease-in;
  img {
    width: 80%;
    max-width: 1280px;
  }
  &.active {
    // opacity: 1;
  }
}
</style>
