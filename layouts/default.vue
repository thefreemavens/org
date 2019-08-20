<template>
  <div id="app">
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  // layout: 'home',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
header {
  // padding: 3rem 20px 1rem;
}

.main {
  // @extend .layout-66;
  // text-align: center;
}

footer {
  // @extend .layout-66;
  // @extend .layout-m;
}
</style>
