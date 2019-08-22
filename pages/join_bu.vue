<template>
  <section class="main">
    <app-page-title title="Unite Within" />
    <!-- <app-divider /> -->
    <!-- <app-block-quote -->
    <!-- quote="With free thinking, unity, and great knowledge, we can make a difference and change the world." -->
    <!-- /> -->
    <app-form />

  </section>
</template>

<script>
import AppPageTitle from '@/components/AppPageTitle.vue'
import AppForm from '@/components/AppForm.vue'
import AppBlockQuote from '@/components/AppBlockQuote.vue'

export default {
  layout: 'home',
  components: {
    AppPageTitle,
    AppForm,
    AppBlockQuote
    // AppDivider
  },
  head() {
    return {
      title: 'The Free Mavens | Join',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Join The Free Mavens'
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
</style>
