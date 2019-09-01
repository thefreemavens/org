<template>
  <footer>
    <app-divider />
    <app-logotype
      v-scroll-to="'body'"
      class="logotype"/>
  </footer>
</template>

<script>
import AppLogotype from '@/components/AppLogotype.vue'
import AppDivider from '@/components/AppDivider.vue'

export default {
  // layout: 'home',
  components: {
    AppLogotype,
    AppDivider
  }
}
</script>

<style scoped lang="scss">
footer {
  max-width: 920px;
  margin: 0 auto;
  padding: 0 30px 33px;
}
.logotype {
  // padding-bottom: 66px;
  cursor: pointer;
}
</style>
