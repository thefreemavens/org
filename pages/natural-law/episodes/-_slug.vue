<template>
  <div class="main bg-gray-800">
    <!-- /////////////////////////////////// -->
    <!-- // LIGHTBOX -->
    <!-- // -->
    <transition name="fade" mode="out-in">
      <div
        v-if="lightbox && lightboxSlide"
        id="lightbox"
        :class="{ active: lightbox }"
        @click.prevent="hide"
      >
        <img :src="episode.slides[index]" />
      </div>
      <div
        v-else-if="lightbox"
        id="lightbox"
        :class="{ active: lightbox }"
        @click.prevent="hide"
      >
        <img :src="episode.images[index]" />
      </div>
    </transition>

    <!-- /////////////////////////////////// -->
    <!-- // HEAD POSTER -->
    <!-- // -->
    <section v-scroll-reveal class="head">
      <nuxt-link to="/">
        <icon
          class="title-icon"
          icon-name="natural-law"
          icon-color="none"
          icon-stroke-color="#fff"
          icon-stroke-width="14"
          width="100"
          height="100"
        >
          <icon-natural-law />
        </icon>
      </nuxt-link>
      <div>
        <app-title
          v-scroll-to="'#video'"
          :text="episode.title"
          :text-before="appTitleTextBefore()"
          class="text-white cursor-pointer"
        />
      </div>
      <!-- <div> -->
      <!-- <p class="desc">Free Seminar</p> -->
      <!-- <h3>Worldwide</h3> -->
      <!-- </div> -->
    </section>

    <!-- /////////////////////////////////// -->
    <!-- // VIDEO -->
    <!-- // -->
    <section id="video" v-scroll-reveal>
      <div class="video-inner">
        <app-video :video-id="episode.vid" />
      </div>
    </section>

    <!-- /////////////////////////////////// -->
    <!-- // NOTES -->
    <!-- // -->
    <section v-if="episode.notes.length">
      <div class="content">
        <app-title text-before="Speaker" text="Notes" class="text-white" />
        <div v-scroll-reveal="{ delay: 300 }">
          <icon
            class="sg-icon"
            icon-name="Speaker Notes"
            icon-color="none"
            icon-stroke-color="#fff"
            stroke-linejoin="round"
            icon-stroke-width="6"
          >
            <icon-sg3 />
          </icon>
        </div>
        <div class="content">
          <div
            v-for="(note, index) in episode.notes"
            :key="index"
            v-scroll-reveal="{ delay: 150 }"
            class="my-2"
          >
            <!-- eslint-disable-next-line vue/no-v-html -->
            <p v-html="note" />
          </div>
        </div>
      </div>
    </section>

    <!-- /////////////////////////////////// -->
    <!-- // SLIDES -->
    <!-- // -->
    <section v-if="episode.slides.length">
      <app-title text-before="Selected" text="Slides" class="text-white" />
      <div v-scroll-reveal="{ delay: 300 }">
        <icon
          class="sg-icon"
          icon-name="Selected Slides"
          icon-color="none"
          icon-stroke-color="#fff"
          stroke-linejoin="round"
          icon-stroke-width="6"
        >
          <icon-sg8 />
        </icon>
      </div>
      <div class="flex w-full max-w-4xl px-10 content-around mx-auto flex-wrap">
        <img
          v-for="(slide, index) in episode.slides"
          :key="index"
          v-scroll-reveal="{ delay: 300 }"
          :src="slide"
          class="flex-1 w-1/3 h-1/3 m-2 lg:m-3 cursor-pointer"
          @click.prevent="showSlide(index)"
        />
      </div>
    </section>

    <!-- /////////////////////////////////// -->
    <!-- // VISUALS -->
    <!-- // -->
    <section v-if="episode.images.length">
      <app-title text-before="Supporting" text="Visuals" />
      <div v-scroll-reveal="{ delay: 300 }">
        <icon
          class="sg-icon"
          icon-name="Supporting Visuals"
          icon-color="none"
          icon-stroke-color="#fff"
          stroke-linejoin="round"
          icon-stroke-width="6"
        >
          <icon-sg20 />
        </icon>
      </div>
      <div class="">
        <img
          v-for="(image, index) in episode.images"
          :key="index"
          v-scroll-reveal="{ delay: 300 }"
          :src="image"
          @click.prevent="show(index)"
        />
      </div>
    </section>

    <!-- /////////////////////////////////// -->
    <!-- // FOOTER -->
    <!-- // -->
    <app-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lightbox: false,
      lightboxSlide: false,
      slug: this.$route.params.slug,
      episodes: [
        {
          eid: 1,
          slug: 'before-we-begin',
          title: 'Before We Begin',
          vid: 'q8sQf-QtXbY',
          notes: [
            `You will not be seeing or hearing anything new here today.`,
            `As the old saying goes – <br><b>There is nothing new under the sun.</b>`,
            `This means that <b>Truth is singular and eternal</b>. Truth has always been here and it will always be here. It is our perception that must be aligned with the Truth.`,
          ],
          slides: [
            '/images/natural-law/01/freemavens-natural-law-01-before-we-begin-01.jpg',
            // ''
          ],
          images: [],
        },
        {
          eid: 2,
          slug: 'presentation-style',
          title: 'Presentation Style',
          vid: 'qBvzoNi0d6c',
          notes: [
            `My presentation style has been described by some as extremely intense, and at times, even combative.`,
            `Some of you are very likely to be angered by things you will hear me say during this seminar. So be it.`,
            `The fact of the matter is that Truth itself, by its very nature, is Belligerent, because it wages war against all forms of deception and mind control.`,
            `I do NOT present this information to be liked, to be popular, to make money, or to make friends.`,
            `To be honest, I don’t even want to do this with my time, as I already know, understand, and live this information.`,
            `I do this only because I recognize that in a time of such overwhelming ignorance of this critical information, the fact that I do understand it, places me in a position of moral obligation to speak this information to others, in an attempt to help others understand and live it as well.`,
          ],
          slides: [
            '/images/natural-law/02/freemavens-natural-law-02-presentation-style-01.jpg',
            '/images/natural-law/02/freemavens-natural-law-02-presentation-style-02.jpg',
            '/images/natural-law/02/freemavens-natural-law-02-presentation-style-03.jpg',
            '/images/natural-law/02/freemavens-natural-law-02-presentation-style-04.jpg',
          ],
          images: [],
        },
        {
          eid: 3,
          slug: 'prerequisites',
          title: 'Prerequisites',
          vid: 'RxBXdMfBE1A',
          notes: [
            `Every person who wishes to take away real value from this presentation should make a deliberate and conscious effort to do two things:`,
            `1. Set aside your perceptions of me as the presenter. Including:  How you think I look, dress, or sound.`,
            `Paying attention to such trivialities will distract your mental focus away from the information being presented. This information is what is important.`,
            `2. Be consciously aware of any impulses you may have to reject information presented solely based upon your initial emotional response to the information being presented.`,
            `It is a Logical Fallacy to gauge the veracity of any information based upon how you <b>FEEL</b> when first seeing or hearing it.`,
            `<hr class="border border-gray-500">`,
            `<b>IMPORTANT:</b> This seminar is a Tapestry. It is meant to be taken as a whole, in its entirety. I highly recommend that you stay for the duration of the seminar, otherwise you will most likely not recognize the patterns inherent to the tapestry, and will have wasted your time.`,
          ],
          slides: [
            '/images/natural-law/03/freemavens-natural-law-prerequisites-01.jpg',
            '/images/natural-law/03/freemavens-natural-law-prerequisites-02.jpg',
            '/images/natural-law/03/freemavens-natural-law-prerequisites-03.jpg',
            '/images/natural-law/03/freemavens-natural-law-prerequisites-04.jpg',
          ],
          images: [],
        },
        {
          eid: 4,
          slug: 'the-real-natural-law',
          title: 'The Real Natural Law',
          vid: 'c-2rPiG-V8o',
          notes: [],
          slides: [
            '/images/natural-law/04/freemavens-real-natural-law-01.jpg',
            // '',
          ],
          images: [],
        },
        {
          eid: 5,
          slug: 'teachability',
          title: 'Teachability',
          vid: '14di-kiGBEg',
          notes: [
            `An Individuall's Teachability, or their ability to learn by way of being taught by someone else, is extremely dependent upon the open-mindedness or closed-mindedness of the individual being taught.`,
            `Low Teachability derives from arrogance and rigid skepticism, but also from naiveté and gullibility.`,
            `High Teachability derives from a balance between healthy skepticism and an open-minded willingness to learn and change.`,
            `Human beings should consider with great care their sources for information.`,
            `By refusing to present certain information, and by influencing people to dismiss certain information as unimportant or unnecessary to consider, many modern institutions seek to control human perceptions and therefore to limit what human beings may come to understand.`,
          ],
          slides: [
            '/images/natural-law/05/freemavens-natural-law-teachability-01.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-02.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-03.jpg',
          ],
          images: [
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-05.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-02.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-03.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-04.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-01.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-06.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-07.jpg',
            '/images/natural-law/05/freemavens-natural-law-teachability-bell-curve-08.jpg',
          ],
        },
      ],
    }
  },
  head() {
    return {
      title: 'Natural Law',
      bodyAttrs: {
        class: 'dark-theme',
      },
    }
  },
  computed: {
    episode() {
      return this.episodes.find((episode) => episode.slug === this.slug)
    },
  },
  methods: {
    show(index) {
      this.index = index
      this.lightbox = true
    },
    showSlide(index) {
      this.index = index
      this.lightbox = true
      this.lightboxSlide = true
    },
    hide() {
      this.lightbox = false
      this.lightboxSlide = false
      // this.index = 0
    },
    appTitleTextBefore() {
      return 'Episode ' + this.episode.eid
    },
    // ...mapMutations({
    //   toggle: 'lightbox/toggleLightbox'
    // })
  },
}
</script>

<style lang="postcss" scoped>
/* .main {
  width: 100%;
  section.head {
    width: 100%;
    min-height: 100vh;
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

section#video {
  @extend .flexcss;
  min-height: 100vh;
  .video-inner {
    display: block;
    width: 100%;
    max-height: 450px;
    max-width: 800px;
  }
}

#lightbox {
  @extend .flexcss;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba($black, 0.9);
  z-index: 10;
  cursor: zoom-out;
  img {
    width: 80%;
    max-width: 1280px;
  }
} */
</style>
