<template>
  <header>
    <app-menu />
    <nuxt-link
      to="/"
      @click="showForm = !showform">
      <app-logomark
        logo-style="line"
        height="66px" 
        width="66px" 
        class="logo"
      />
    </nuxt-link>
  </header>
</template>

<script>
import AppLogomark from '@/components/AppLogomark.vue'
import AppMenu from '@/components/AppMenu.vue'

export default {
  components: {
    AppLogomark,
    AppMenu
  }
}
</script>

<style scoped lang="scss">
header {
  text-align: center;
}

.logo {
  display: inline-block;
}
</style>
