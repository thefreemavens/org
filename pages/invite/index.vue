<template>
  <div class="">
    <poster poster="tfm-envelope.jpg" class="absolute z-0" />

    <div
      v-scroll-reveal
      class="container mx-auto min-h-screen text-center flex flex-col items-center justify-center"
    >
      <!-- <nuxt-link to="/">
        <app-logomark logo-style="line" class="logo title-icon" />
      </nuxt-link> -->
      <!-- <div class="inner">
        <span v-scroll-to="'#thanks'" class="link">
          <h1 class="title">
            <span class="pre"> {{ name1 }} You Are Our </span>
            Newest hero
          </h1>
        </span>
      </div> -->
    </div>

    <div id="thanks" class="wrap">
      <h2 class="title">
        <app-title text-before="A big" text="Thank You" />
      </h2>
      <div v-scroll-reveal>
        <icon
          class="sg-icon"
          icon-name="sg20"
          icon-color="none"
          icon-stroke-color="#000"
          stroke-linejoin="round"
          icon-stroke-width="6"
        >
          <icon-sg20 />
        </icon>
      </div>
      <div class="content cols">
        <div v-scroll-reveal>
          <p>
            <span class="truth"
              >Dear {{ name2 }}, you’ve spoken like a true hero!</span
            >
          </p>
          <p>
            On behalf of <nuxt-link to="/">The Freemavens</nuxt-link> and as a
            member of the community, we’d like to thank you for doing the Great
            Work and spreading the knowledge of
            <nuxt-link to="/natural-law/">Natural Law</nuxt-link>.
          </p>
          <p>
            As a token of gratitude and appreciation,
            <nuxt-link to="/initiation"
              >we invite you to join our private server</nuxt-link
            >
            where we share knowledge and coordinate our actions in a real effort
            to make a larger impact and achieve real true awakening, freedom and
            abundance for all.
          </p>
        </div>
        <div v-scroll-reveal>
          <p class="emp-div">
            <b>Remember:</b> We are only as strong as we are united, as weak as
            we are divided. The Freemavens and humanity as a whole depends
            exclusively on the participation and actions of people like you.
          </p>
        </div>
      </div>
      <!-- <nuxt-link
        v-scroll-reveal="{ delay: 300 }"
        :to="{ path: '../initiation/', query: { id: id } }"
        class="cta"
      >
        <app-button title="Be a maven" class="fill-c center wide" />
      </nuxt-link> -->
      <div v-scroll-reveal class="block text-center mt-6 mb-20">
        <AppButton to="/initiation" title="Get Initiated" class="text-sm" />
      </div>
    </div>

    <app-footer />
  </div>
</template>

<script>
export default {
  // layout: 'main',
  data() {
    return {
      // inviteId: ''
    }
  },
  head() {
    return {
      title: 'Private Invitation',
    }
  },
  computed: {
    id() {
      if (!this.$route.query.id) {
        return '13060694016'
      } else {
        return this.$route.query.id
      }
    },
    name1() {
      if (!this.$route.query.name) {
        return ''
      } else {
        return this.$route.query.name + ', '
      }
    },
    name2() {
      if (!this.$route.query.name) {
        return 'friend'
      } else {
        return this.$route.query.name
      }
    },
  },
  // watch: {
  //   id(newId) {
  //     localStorage.id = newId
  //   }
  // },
  // mounted() {
  //   if (localStorage.id) {
  //     this.id = localStorage.id
  //   }
  // }
}
</script>

<style scoped lang="postcss">
/* .main {
  width: 100%;
  color: $black;
  background: $white;
  .head {
    width: 100%;
    min-height: 100vh;
    text-align: center;
    background: linear-gradient(
        to bottom,
        rgba(245, 245, 249, 0) 0%,
        rgba(245, 245, 249, 0) 33%,
        rgba(245, 245, 249, 1) 100%
      ),
      url('/images/background-flags-light.jpg') center center;
    background-size: cover;
    .inner {
      p {
        /* @extend .subtitle-l; */
        
/* margin-top: -1vh; */
/* padding: 0 30px; */
/* } */
/* } */
/* } */
/* section {
    height: 100%;
    text-align: center;
    padding: 30px 0;
  } */
/* } */

/* .title-icon {
  display: block;
  margin: 6vh auto 10vh;
}

.sg-icon {
  margin-top: -4vh;
  margin-bottom: 8vh;
  width: 66px;
  height: 66px;
} */

/* .subtitle {
  position: relative;
  bottom: 2vh;
}
.desc {
  text-align: center;
  margin: 24vh 0 0;
  color: $grey-3;
} */

/* .cta {
  display: inline-block;
  margin-top: 4vh;
  margin-bottom: -6vh;
} */

/* .title {
  display: inline-block;
  span {
    display: block;
    &.pre {
      color: $grey-4;
    }
  }
} */
</style>
