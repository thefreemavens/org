<template>
  <h1
    v-scroll-reveal
    :class="titleSize">
    <span
      v-if="textBefore"
      class="pre">
      {{ textBefore }}
    </span>
    {{ text }}
    <span
      v-if="textAfter"
      class="pre">
      {{ textAfter }}
    </span>
  </h1>
</template>

<script>
// import AppLogomark from '@/components/AppLogomark'
// import Icon from '@/components/icons/Icon'
// import IconNaturalLaw from '@/components/icons/IconNaturalLaw'

export default {
  layout: 'main',
  components: {
    // AppLogomark,
    // Icon,
    // IconNaturalLaw
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    textBefore: {
      type: String,
      default: ''
    },
    textAfter: {
      type: String,
      default: ''
    },
    titleSize: {
      type: String,
      default: 'title'
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  display: inline-block;
  @extend .h1;
  @include fp(margin-top, 0, 99);
  @include fp(margin-bottom, 33, 66);
  span {
    display: block;
    &.pre {
      @extend .h3;
      color: $grey-4;
    }
  }
}

.title-sm {
  @extend .h2;
  @include fp(margin-top, 11, 33);
  @include fp(margin-bottom, 11, 33);
  span {
    display: block;
    &.pre {
      @extend .h4;
      color: $grey-4;
    }
  }
}

a .title {
  color: $black;
}
</style>
