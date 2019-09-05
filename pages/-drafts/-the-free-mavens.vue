<template>
  <section class="main">
    <app-page-title title="The Free Mavens" />
    <app-divider />
    <h2>
      Table of Contents
    </h2>
    <div class="toc">
      <ol>
        <li><a v-scroll-to="'#one'">Preface</a></li>
        <li><a v-scroll-to="'#two'">Free, dictionary definition</a></li>
        <li><a v-scroll-to="'#three'">Maven, dictionary definition</a></li>
        <li><a v-scroll-to="'#four'">The Tipping Point</a></li>
        <li><a v-scroll-to="'#five'">The Archetypes</a></li>
        <li><a v-scroll-to="'#six'">Form & Structure</a></li>
      </ol>
    </div>
    <h3 id="one">
      1. Preface
    </h3>
    <p>
      This document is intended to anyone who is interested in learning about The Free Mavens name origin and its meaning. It is a prerequisite read to anyone who wants to learn and understand The Free Mavens <nuxt-link to="/structure">organization structure</nuxt-link>.
    </p>
    <p>
      We define the words, “Free” and “Maven”, and provide a deeper understanding of The Free Mavens name in reference to the book The Tipping Point. It describes the three Archetypes that are critical to the tipping of word-of-mouth epidemics. 
    </p>
    <h3 id="two">
      2. Free
    </h3>
    <p>
      Not under the control or in the power of another; able to act or be done as one wishes.<a v-scroll-to="'#ref1'"><sup>[1]</sup></a>
    </p>
    <h3 id="three">
      3. Maven
    </h3>
    <p>
      The word Maven in English is a borrowing from the the Yiddish <b>meyvn</b> (an expert, connoisseur), derived from the Hebrew <b>mēvīn</b> (person with understanding, teacher), a participle of the verb <b>hēvīn</b> (to understand), and from the West Semitic root <b>byn</b> (to be separate, distinguish).<a v-scroll-to="'#ref2'"><sup>[2]</sup></a>
    </p>
    <h3 id="four">
      4. The Tipping Point
    </h3>
    <p>
      In his book The Tipping Point,<a v-scroll-to="'#ref3'"><sup>[3]</sup></a> Malcolm Gladwell describes Mavens as the people you ask whenever you want to know something about anything – they’re always the people in the know. 
    </p>
    <app-block-quote
      quote="For Mavens, it's all about the information and spreading the knowledge."
    />
    <p>
      Mavens aren’t passive collectors of information. They don’t keep what they find to themselves. They speak out and share their findings so that more people can benefit from their research. Mavens want to educate and help, not to sell.
    </p>
    <h3 id="five">
      5. The Archetypes
    </h3>
    <p>
      Malcolm Gladwell further describes three different archetypes of people: Mavens, Connectors, and Salesmen.
    </p>

    <p>
      <b>Mavens – </b>
      Mavens are data banks. They provide the message.
    </p>
    <p>
      <b>Connectors – </b>
      Connectors are social glue. They spread the message.
    </p>
    <p>
      <b>Salesmen – </b>
      Salesmen have the skills to persuade us when we are unconvinced on the message.
    </p>

    <app-block-quote
      quote="All Archetypes are equally critical to the tipping of word-of-mouth epidemics."
    />
    <h3 id="six">
      6. Form & Structure
    </h3>
    <p>
      In effort to spread information in an effective manner, The Free Mavens embraced the Archetypes model as a base for our organization form & structure.
    </p>

    <nuxt-link to="/structure">
      <app-button
        title="Form & Structure"
        class="fill-c"
      />
    </nuxt-link>
    <div class="footnotes legal">
      <hr>
      <h4>
        References
      </h4>
      <ol>
        <li id="ref1">
          <a v-scroll-to="'#two'">Source: Oxford Dictionaries</a>
          <a
            href="https://en.oxforddictionaries.com/definition/us/free"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
        <li id="ref2">
          <a v-scroll-to="'#three'">Source: Wikipedia</a>
          <a
            href="https://en.wikipedia.org/wiki/Maven"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
        <li id="ref3">
          <a v-scroll-to="'#four'">The Tipping Point: How Little Things Can Make a Big Difference by author Malcolm Gladwell</a>
          <a
            href="https://en.wikipedia.org/wiki/The_Tipping_Point"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import AppPageTitle from '@/components/AppPageTitle.vue'
import AppBlockQuote from '@/components/AppBlockQuote.vue'
import AppButton from '@/components/AppButton.vue'
import AppDivider from '@/components/AppDivider.vue'

export default {
  components: {
    AppPageTitle,
    AppBlockQuote,
    AppButton,
    AppDivider
  },
  head() {
    return {
      title: 'The Free Mavens | About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Maven definitions and references'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
