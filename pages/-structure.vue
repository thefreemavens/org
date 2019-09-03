<template>
  <section class="main">
    <app-page-title title="Form & Structure" />
    <app-divider />
    <h2>
      Table of Contents
    </h2>
    <div class="toc">
      <ol>
        <li><a v-scroll-to="'#preface'">Preface</a></li>
        <li><a v-scroll-to="'#introduction'">Introduction</a></li>
        <li><a v-scroll-to="'#form'">The Hexagonal Form</a></li>
        <li><a v-scroll-to="'#nature'">Hexagon in Nature</a></li>
        <li><a v-scroll-to="'#hex'">Hexagon as Organizational Structure</a></li>
        <li><a v-scroll-to="'#hive'">The Hive Model</a></li>
      </ol>
    </div>
    <h3 id="preface">
      1. Preface
    </h3>
    <p>
      This document is intended to anyone who is interested in learning about The Free Mavens organizational structure and unit form. It is recommended you read and understand the <nuxt-link to="/the-free-mavens#two">definitions</nuxt-link> and <nuxt-link to="/the-free-mavens#three">meaning</nuxt-link> of our name first as it is directly related.
    </p>

    <h3 id="introduction">
      2. Introduction
    </h3>
    <p>
      <b><i>Hive</i></b>, is the term used to refer to our hexagonal-based organization structure.
    </p>
    <p>
      <b><i>Hex</i></b>, is the term used to refer to our hexagonal-based unit form.
    </p>
    <p>
      Both are directly related and embraces the <nuxt-link to="/the-free-mavens#five">Archetypes</nuxt-link> model as described and referenced in <nuxt-link to="/the-free-mavens#four">The Tipping Point</nuxt-link> book by author Malcolm Gladwell.
    </p>
    <p>
      We believe this model is most effective considering our two main goals:
    </p>
    <app-block-quote
      quote="Spread knowledge and ignite the will to unite."
    />

    <h3 id="form">
      3. The Hexagonal Form
    </h3>
    <p>
      In geometry, a hexagon (from Greek ἕξ hex, "six" and γωνία, gonía, "corner, angle") is a six-sided polygon or 6-gon. The total of the internal angles of any simple (non-self-intersecting) hexagon is 720° <a v-scroll-to="'#linkof-ref1'"><sup id="ref1">[1]</sup></a>.
    </p>

    <figure id="fig1">
      <a v-scroll-to="'#linkof-fig1'">
        <img
          src="/images/hive/hex.jpg"
          alt="Hexagon">
      </a>
      <figcaption>
        <span>FIG. 1</span><br>
        The Hexagon, a six-sided polygon, 6-gon.
      </figcaption>
    </figure>

    <h3 id="nature">
      4. Hexagon in Nature
    </h3>
    <p>
      From Beehives to Snowflakes, from Carbon molecules to the Dragonfly eyes, from Bubble Raft to a Giant’s Causeway, we can find hexagon-based forms and structures everywhere in nature. 
    </p>

    <figure>
      <div class="gallery">
        <ul>
          <li id="fig2">
            <a v-scroll-to="'#linkof-fig2'">
              <img src="/images/hive/bee-hive.jpg">
            </a>
          </li>
          <li id="fig3">
            <a v-scroll-to="'#linkof-fig3'">
              <img src="/images/hive/snowflake.jpg">
            </a>
          </li>
          <li id="fig4">
            <a v-scroll-to="'#linkof-fig4'">
              <img src="/images/hive/carbon-based.jpg">
            </a>
          </li>
          <li id="fig5">
            <a v-scroll-to="'#linkof-fig5'">
              <img src="/images/hive/dragonfly.jpg">
            </a>
          </li>
          <li id="fig6">
            <a v-scroll-to="'#linkof-fig6'">
              <img src="/images/hive/bubble-raft.jpg">
            </a>
          </li>
          <li id="fig7">
            <a v-scroll-to="'#linkof-fig7'">
              <img src="/images/hive/giants-causeway.jpg">
            </a>
          </li>
        </ul>
      </div>
      <figcaption>
        <span>FIG. 2-7</span><br>
        From top-left to bottom-right: Bee Hive, Snowflake, Carbon-based Molecule, Dragonfly Eyes, Bubble Raft, Giant's Causeway.  
      </figcaption>
    </figure>

    <p>
      Hexagonal patterns are prevalent in nature due to their efficiency and strength. When stacked together, it creates a (strong) 3-way bind and (efficiently) leaves no empty gaps.
    </p>
    <!-- <app-block-quote -->
    <!-- quote="For Mavens, it's all about the information and spreading the knowledge." -->
    <!-- /> -->

    <h3 id="hex">
      5. Hexagon as Organizational Structure
    </h3>
    <p>
      As in nature, we use the hexagonal based structure to create a strong and efficient unit-based form – "The Hex". Each Hex unit consists of two Archetype sets or six members (two Mavens, two Connectors and two Salesmen).
    </p>

    <figure id="fig8">
      <a v-scroll-to="'#linkof-fig8'">
        <img
          src="/images/hive/tfm-hex.jpg"
          alt="The Hex Unit">
      </a>
      <figcaption>
        <span>FIG. 8</span><br>
        "The Hex", The Free Mavens' hexagonal based unit form.
      </figcaption>
    </figure>

    <app-block-quote
      quote="All Archetypes are equally critical to the tipping of word-of-mouth epidemics."
    />

    <h3 id="hive">
      6. The Hive Model
    </h3>

    <p>
      When six or more Hex units join together, they create a "Hive".  The Hive structure support our need in creating a strong and efficient connections between members, both online and offline.
    </p>

    <figure id="fig9">
      <a v-scroll-to="'#linkof-fig9'">
        <img
          src="/images/hive/tfm-hive.jpg"
          alt="The Hive Model">
      </a>
      <figcaption>
        <span>FIG. 9</span><br>
        "The Hive", The Free Mavens' hexagonal based organization structure.
      </figcaption>
    </figure>

    <p>
      As a member of The Free Mavens organization, you'll take an active role in your Hex unit. You will also be directly connected to two other members, each in a different Hex unt.
    </p>

    <p>
      Together, we create a strong bind and an effcient way to communicate and transfer information.
    </p>

    <nuxt-link to="/join">
      <app-button
        title="Join The Hive"
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
          <a v-scroll-to="'#ref1'">Source: Wikipedia</a>
          <a
            href="https://en.wikipedia.org/wiki/Hexagon"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
        <li id="linkof-fig1">
          <a v-scroll-to="'#fig1'">Fig. 1: Hexagon</a>
          <a
            href="/images/hive/hex.jpg"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
        <li id="linkof-fig2">
          <a v-scroll-to="'#fig2'">Fig. 2: Beehive</a>
          <a
            href="/images/hive/bee-hive.jpg"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
        <li id="linkof-fig3">
          <a v-scroll-to="'#fig3'">Fig. 3: Snowflake</a>
          <a
            href="/images/hive/snowflake.jpg"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
        <li id="linkof-fig4">
          <a v-scroll-to="'#fig4'">Fig. 4: Carbon Based Molecule</a>
          <a
            href="/images/hive/carbon-based.jpg"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
        <li id="linkof-fig5">
          <a v-scroll-to="'#fig5'">Fig. 5: Dragonfly Eyes</a>
          <a
            href="/images/hive/dragonfly.jpg"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
        <li id="linkof-fig6">
          <a v-scroll-to="'#fig6'">Fig. 6: Bubble Raft</a>
          <a
            href="/images/hive/bubble-raft.jpg"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
        <li id="linkof-fig7">
          <a v-scroll-to="'#fig7'">Fig. 7: Giant's Causeway</a>
          <a
            href="/images/hive/giants-causeway.jpg"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
        <li id="linkof-fig8">
          <a v-scroll-to="'#fig8'">Fig. 8: The Hex Model</a>
          <a
            href="/images/hive/tfm-hex.jpg"
            target="_blank"><sup>&#8618;</sup>
          </a>
        </li>
        <li id="linkof-fig9">
          <a v-scroll-to="'#fig9'">Fig. 9: The Hive Model</a>
          <a
            href="/images/hive//tfm-hive.jpg"
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
    // AppDivider
  },
  head() {
    return {
      title: 'The Free Mavens | Structure',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The Free Mavens Organization Structure.'
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
.gallery ul {
  @extend .pure-list;
  display: flex;
  flex-wrap: wrap;
  li {
    padding: 3px;
    line-height: 0;
    flex: 33.3333%;
    img {
      width: 100%;
      border-radius: 6px;
    }
  }
}
</style>
