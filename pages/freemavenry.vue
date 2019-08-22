<template>
  <div class="main">

    <section
      v-scroll-reveal.reset
      class="head">
      <app-logomark
        logo-style="line"
        class="logo title-icon"
      />
      <div class="inner">
        <h1 class="title"><span class="pre">The Free</span><span>Mavens</span></h1>
        <!-- <p>The real Law of Attraction and how to apply it in your life</p> -->
      </div>
      <!-- <p class="desc">Free Seminar</p> -->
      <!-- <h3>Worldwide</h3> -->
      <!-- </div> -->

    </section>

    <section>
      <h1
        v-scroll-reveal
        class="title"><span class="pre">What is</span><span>Freemavenry</span>
      </h1>
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
      <div class="content columns-2">
        <div
          v-scroll-reveal="{ delay: 150 }"
          class="col1">
          <p>
            <span class="truth">There is no greater force for changing the world than the power of unity through knowledge.</span>
          </p>
          <p>
            Freemavenry is a non-religious, non-political, fraternal and benevolent organization. Its roots lie in the search for eternal truth and the spread of knowledge in the areas of metaphysics, occultism, spirituality, symbology and consciousness.
          </p>
          <p>
            The Free Mavens provide great body of knowledge for researchers, free-thinkers and truth seekers, so that people all over the world can gain a better understanding of the biggest issues faced by the world, and feed a desire to unite and help create a better future for all of us.
          </p>
        </div>
        <div
          v-scroll-reveal="{ delay: 300 }"
          class="col2">
          <p>
            <span class="truth-alt">Free</span><br>The word Free means not under the control or in the power of another; able to act or be done as one wishes.
          </p>
          <p>
            <span class="truth-alt">Maven</span><br>The word maven comes from the Yiddish meyvn, meaning "one who understands." To be a maven you have to more than just understand a topic, you have to know its ins and outs. Often mavens are the people that  you turn to as experts in a field. You don't become a maven overnight. That kind of expertise   understanding comes with an accumulation of knowledge over the years.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h1
        v-scroll-reveal
        class="title"><span class="pre">Our Three great</span><span>Principles</span>
      </h1>
      <div v-scroll-reveal>
        <icon
          class="sg-icon"
          icon-name="sg3"
          icon-color="none"
          icon-stroke-color="#000"
          stroke-linejoin="round"
          icon-stroke-width="6">
          <icon-sg3 />
        </icon>
      </div>
      <div class="content columns-2">
        <div
          v-scroll-reveal="{ delay: 150 }"
          class="col1">
          <p>
            <span class="truth-alt">Truth</span><br>Freemavenry strives for truth and requires high moral standards of its members.
          </p>
          <p>
            <span class="truth-alt">Selfless Love</span><br>Every true Freemaven will show tolerance and respect for the opinions of others and behave with kindness and understanding to his fellow beings.
          </p>
        </div>
        <div
          v-scroll-reveal="{ delay: 300 }"
          class="col2">
          <p>
            <span class="truth-alt">Relief</span><br>Freemavens are taught to practice charity, and to care, not only for their own members, but for the community as a whole, by charitable giving, voluntary effort and taking actions.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h1
        v-scroll-reveal
        class="title"><span class="pre">Becoming a</span><span>Freemaven</span>
      </h1>
      <div v-scroll-reveal>
        <icon
          class="sg-icon"
          icon-name="sg8"
          icon-color="none"
          icon-stroke-color="#000"
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
            The Journey of a Lifetime. Becoming a Free Maven is like going on a journey: from joining as an Apprentice, it typically takes one or two years to become a Master Maven, with each of the three stages marked by a special acknowledgment.
          </p>
        </div>
        <div
          v-scroll-reveal="{ delay: 300 }"
          class="col2">
          <p>
            The essential qualification for admission is knowing the real Law of Attraction and applying it in your life.  Membership is open to all men and women of integrity who can fulfill this essential qualification. 
          </p>
        </div>
      </div>
    </section>

    <nuxt-link to="/join">
      <app-button
        title="Get Initiated"
        class="fill-c center wide"
      />
    </nuxt-link>

    <app-footer/>

  </div>
</template>

<script>
import AppLogomark from '@/components/AppLogomark'
import AppButton from '@/components/AppButton'
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
      title: 'The Free Mavens | Freemavenry',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Freemavenry is a non-religious, non-political, fraternal and benevolent organization. Its roots lie in the search for eternal truth and the spread of knowledge in the areas of metaphysics, occultism, spirituality, symbology and consciousness.'
        }
      ]
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
  margin: 8vh auto 16vh;
  @include fp(width, 66, 116);
  @include fp(height, 66, 116);
}

.sg-icon {
  margin-top: -3vh;
  margin-bottom: 4vh;
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
