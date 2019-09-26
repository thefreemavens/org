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
        <span
          v-scroll-to="'#thanks'"
          class="link">
          <h1 class="title">
            <span class="pre">
              {{ name1 }} You Are Our
            </span>
            Newest hero
          </h1>
        </span>
      </div>
    </section>

    <section id="thanks">
      <app-title
        text-before="A big"
        text="Thank You"
      />
      <div v-scroll-reveal>     
        <icon
          class="sg-icon"
          icon-name="sg20"
          icon-color="none"
          icon-stroke-color="#000"
          stroke-linejoin="round"
          icon-stroke-width="6">
          <icon-sg20 />
        </icon>
      </div>
      <div class="content">
        <div
          v-scroll-reveal="{ delay: 150 }"
          class="col1">
          <p>
            <span class="truth">Dear {{ name2 }}, you’ve spoken like a true hero!</span>
          </p>
          <p>
            On behalf of <nuxt-link to="/">The Freemavens</nuxt-link> and as a member of the community, we’d like to thank you for doing the Great Work and spreading the knowledge of <nuxt-link to="/natiral-law/">Natural Law</nuxt-link>.
          </p>
          <p>
            As a token of gratitude and appreciation, <nuxt-link to="/initiation">we invite you to join our private server</nuxt-link> where we share knowledge and coordinate our actions in a real effort to make a larger impact and achieve real true awakening, freedom and abundance for all.
          </p>
          <p>
            <b>Remember:</b> We are only as strong as we are united, as weak as we are divided. The Freemavens and humanity as a whole depends exclusively on the participation and actions of people like you.
          </p>
        </div>
      </div>
      <nuxt-link
        v-scroll-reveal="{ delay: 300 }"
        :to="{ path: '../initiation/', query: { id: id } }"
        class="cta">
        <app-button
          title="Be a maven"
          class="fill-c center wide"
        />
      </nuxt-link>
    </section>

    <app-footer/>

  </div>
</template>

<script>
import AppLogomark from '@/components/AppLogomark'
import AppButton from '@/components/AppButton'
import AppTitle from '@/components/AppTitle'
import Icon from '@/components/icons/Icon'
import IconSg3 from '@/components/icons/IconSg3'
import IconSg8 from '@/components/icons/IconSg8'
import IconSg20 from '@/components/icons/IconSg20'
import AppFooter from '@/components/AppFooter.vue'

export default {
  layout: 'main',
  components: {
    AppLogomark,
    AppButton,
    AppTitle,
    Icon,
    IconSg3,
    IconSg8,
    IconSg20,
    // Icon,
    // IconNaturalLaw,
    AppFooter
  },
  head() {
    return {
      title: 'Private Invitation'
    }
  },
  computed: {
    id: function() {
      if (!this.$route.query.id) {
        return '13060694015'
      } else {
        return this.$route.query.id
      }
    },
    name1: function() {
      if (!this.$route.query.name) {
        return ''
      } else {
        return this.$route.query.name + ', '
      }
    },
    name2: function() {
      if (!this.$route.query.name) {
        return 'friend'
      } else {
        return this.$route.query.name
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main {
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
  margin: 6vh auto 10vh;
  @include fp(width, 66, 102);
  @include fp(height, 66, 102);
}

.sg-icon {
  margin-top: -4vh;
  margin-bottom: 8vh;
  width: 66px;
  height: 66px;
}

.subtitle {
  // color: $grey-6;
  position: relative;
  bottom: 2vh;
}
.desc {
  text-align: center;
  margin: 24vh 0 0;
  @extend .h2;
  color: $grey-3;
}

.cta {
  display: inline-block;
  margin-top: 4vh;
  margin-bottom: -6vh;
}

.title {
  display: inline-block;
  @extend .h1;
  @include fp(margin-top, 0, 99);
  @include fp(margin-bottom, 33, 66);
  span {
    display: block;
    &.pre {
      @extend .h3;
      color: $grey-4;
    }
  }
}
</style>
