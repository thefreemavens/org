<template>
  <section class="main">
    <app-page-title title="Thank You" />
    <p> Your email was submitted successfully and an Invitation Code will be sent to your email address within 24-48 hours.</p>

    <p>
      On behalf of all members of The Free Mavens community, we thank and welcome your wish to make a difference.
    </p>
    <!-- <app-divider /> -->
    <!-- <app-block-quote -->
    <!-- quote="With free thinking, unity, and great knowledge, we can make a difference and change the world." -->
    <!-- /> -->
    <app-footer/>
  </section>
</template>

<script>
import AppPageTitle from '@/components/AppPageTitle.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppBlockQuote from '@/components/AppBlockQuote.vue'

export default {
  layout: 'home',
  components: {
    AppPageTitle,
    AppFooter,
    AppBlockQuote
    // AppDivider
  },
  head() {
    return {
      title: 'The Free Mavens | Success',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Your email was submitted successfully.'
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
.main {
  @include tablet {
    @include fp(width, 400, 666);
    padding: 0 40px 20px 40px;
  }
}
footer {
  width: 100%;
}
</style>
