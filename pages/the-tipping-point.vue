<template>
  <section class="main">
    <app-page-title title="The Tipping Point" />
    <!-- <h2> -->
    <!-- How little things can make a big difference. -->
    <!-- </h2> -->
    <app-divider />
    <h2>
      Table of Contents
    </h2>
    <div class="toc">
      <ol>
        <li><a v-scroll-to="'#preface'">Preface</a></li>
        <li><a v-scroll-to="'#introduction'">Introduction</a></li>
        <li>
          <a v-scroll-to="'#rules'">The Three Rules</a>
          <ol>
            <li>
              <a v-scroll-to="'#few'">The Law of the Few</a>
              <ol>
                <li>
                  <a v-scroll-to="'#mavens'">Mavens</a>
                </li>
                <li>
                  <a v-scroll-to="'#connectors'">Connectors</a>
                </li>
                <li>
                  <a v-scroll-to="'#salesmen'">Salesmen</a>
                </li>
              </ol>
            </li>
            <li>
              <a v-scroll-to="'#stickiness'">The Stickiness Factor</a>
            </li>
            <li>
              <a v-scroll-to="'#context'">The Power of Context</a>
            </li>
          </ol>
        </li>
        <li><a v-scroll-to="'#conclusion'">Conclusion</a></li>
      </ol>
    </div>

    <h3 id="preface">
      1. Preface
    </h3>
    <p>
      This document is intended for anyone who is interested in learning more about The Free Mavens in reference to The Tipping Point<a v-scroll-to="'#linkof-ref1'"><sup id="ref1">[1]</sup></a> book by Malcolm Gladwell. Specifically the Law of the Few and the three Archetypes (Maven, Connector and Salesman).
    </p>

    <h3 id="introduction">
      2. Introduction
    </h3>
    <p>
      In his book “The Tipping Point”, Malcolm Gladwell defines a tipping point as "the moment of critical mass, the threshold, the boiling point". The book seeks to explain and describe the "mysterious" sociological changes that mark everyday life.
    </p>
    <p>
      As Gladwell states:
    </p>
    <app-block-quote quote="Ideas and products and messages and behaviors spread like viruses do." />

    <h3 id="rules">
      3. The Three Rules
    </h3>
    <p>
      Gladwell describes the "three rules of epidemics" (or the three "agents of change") in the tipping points of epidemics.
    </p>

    <h3 id="few">
      3.1 The Law of the Few
    </h3>
    <p>
      "The Law of the Few" is, as Gladwell states: "The success of any kind of social epidemic is heavily dependent on the involvement of people with a particular and rare set of social gifts".According to Gladwell, economists call this the "80/20 Principle, which is the idea that in any situation roughly 80 percent of the 'work' will be done by 20 percent of the participants" (see Pareto Principle<a v-scroll-to="'#linkof-ref2'"><sup id="ref2">[2]</sup></a>).
    </p>
    <p>
      These people are described in the following ways:
    </p>

    <h3 id="mavens">
      3.1.1 Mavens
    </h3>
    <p>
      Mavens are information specialists, or people we rely upon to connect us with new information. They accumulate knowledge, especially about the marketplace, and know how to share it with others.
    </p>
    <app-block-quote quote="A Maven is someone who wants to solve other people's problems, generally by solving his own." />
    <p>
      According to Gladwell, Mavens start word-of-mouth epidemics due to their knowledge, social skills, and ability to communicate. As Gladwell states: Mavens are really information brokers, sharing and trading what they know.
    </p>

    <h3 id="connectors">
      3.1.2 Connectors
    </h3>
    <p>
      Connectors are the people in a community who know large numbers of people and who are in the habit of making introductions.
    </p>
    <app-block-quote quote="A Connector is essentially the social equivalent of a computer network hub." />
    <p>
      They usually know people across an array of social, cultural, professional, and economic circles, and make a habit of introducing people who work or live in different circles.
    </p>
    <p>
      They are people who link us up with the world, people with a special gift for bringing the world together. They are "a handful of people with a truly extraordinary knack for making friends and acquaintances". Gladwell characterizes these individuals as having social networks of over one hundred people. 
    </p>
    <p>
      Gladwell attributes the social success of Connectors to the fact that "their ability to span many different worlds is a function of something intrinsic to their personality, some combination of curiosity, self-confidence, sociability, and energy".
    </p>

    <h3 id="salesmen">
      3.1.3 Salesmen
    </h3>
    <app-block-quote quote="Salesmen are persuaders, charismatic people with powerful negotiation skills." />
    <p>
      They tend to have an indefinable trait that goes beyond what they say, which makes others want to agree with them. 
    </p>

    <h3 id="stickiness">
      3.2 The Stickiness Factor
    </h3>
    <p>
      The Stickiness Factor refers to the specific content of a message that renders its impact memorable.
    </p>

    <h3 id="context">
      3.3 The Power of Context
    </h3>
    <p>
      Human behavior is sensitive to and strongly influenced by its environment. Gladwell explains: "Epidemics are sensitive to the conditions and circumstances of the times and places in which they occur"
    </p>

    <h3 id="conclusion">
      4. Conclusion
    </h3>
    <p>
      Now that we have a better understanding of the word-to-mouth social epidemic mechanism, we can concetrate our resources on Mavens, Connectors, and Salesmen, in effort to spread knowledge and raise awareness.
    </p>
    <p>
      It's important to note that all mentioned Archetypes are equal in importance and in advncing our mutual goals.
    </p>
    <p>
      A Maven, a Connector, or a Salesman, which Archetype are you?
    </p>

    <nuxt-link to="/join">
      <app-button
        title="Choose Archetype"
        class="fill-c"
      />
    </nuxt-link>

    <div class="footnotes legal">
      <hr>
      <h4>
        References
      </h4>
      <ol>
        <li id="linkof-ref1">
          <a v-scroll-to="'#preface'">The Tipping Point: How Little Things Can Make a Big Difference by author Malcolm Gladwell</a>
          <a
            href="https://en.wikipedia.org/wiki/The_Tipping_Point"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
        <li id="linkof-ref2">
          <a v-scroll-to="'#ref2'">Pareto Principle</a>
          <a
            href="https://en.m.wikipedia.org/wiki/Pareto_principle"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
      </ol>

      <h4>
        Related:
      </h4>
      <ol>
        <li><nuxt-link to="/the-free-mavens/">About The Free Mavens</nuxt-link></li>
        <li><nuxt-link to="/structure/">Form & Structure</nuxt-link></li>
      </ol>
    </div>

  </section>
</template>

<script>
import AppPageTitle from '@/components/AppPageTitle.vue'
import AppDivider from '@/components/AppDivider.vue'
import AppBlockQuote from '@/components/AppBlockQuote.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  components: {
    AppPageTitle,
    AppDivider,
    AppBlockQuote,
    AppButton
  },
  head() {
    return {
      title: 'The Free Mavens | Mavenry',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The Free Mavens and Mavenry'
        }
      ]
    }
  }
  // mounted() {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start()

  //     setTimeout(() => this.$nuxt.$loading.finish(), 350)
  //   })
  // }
}
</script>

<style scoped lang="scss">
</style>
