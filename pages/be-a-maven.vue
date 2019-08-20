<template>
  <section class="main">
    <app-page-title title="Be a Maven" />
    <h2>
      The Free Mavens believe passionately in the power of unity and knowledge to change behaviors, lives, and ultimately, the world.
    </h2>
    <!-- <h3>Better future</h3> -->
    <p>
      We aim to make great knowledge accessible to all while promoting critical and free thinking. In fact, everything we do is driven by this goal: How can we best spread knowledge and spark collective awakening?
    </p>

    <app-block-quote quote="With knowledge comes power, and with power comes great responsibility." />

    <p>
      The Free Mavens provide a platform for researchers, free-thinkers and truth seekers, so that people all over the world can gain a better understanding of the biggest issues faced by the world, and feed a desire to unite and help create a better future for all of us. Core to this goal is a belief that there is no greater force for changing the world than the power of knowledge.
    </p>

    <nuxt-link to="/join">
      <app-button
        title="Be A Maven"
        class="fill-c"
      />
    </nuxt-link>

  </section>
</template>

<script>
import AppPageTitle from '@/components/AppPageTitle.vue'
import AppBlockQuote from '@/components/AppBlockQuote.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  components: {
    AppPageTitle,
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
