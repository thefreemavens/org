<template>
  <span v-scroll-reveal :class="unicolor" class="default">
    <span v-if="textBefore" class="pre">
      {{ textBefore }}
    </span>
    {{ ' ' + text + ' ' }}
    <span v-if="textAfter" class="pre">
      {{ textAfter }}
    </span>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    textBefore: {
      type: String,
      default: '',
    },
    textAfter: {
      type: String,
      default: '',
    },
    unicolor: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss" scoped>
.default {
  @apply block text-center uppercase font-serif text-3xl md:text-4xl lg:text-5xl tracking-widest;
  
  & span {
    @apply block text-base md:text-lg lg:text-xl my-1 md:my-2 lg:my-3 text-gray-500;
  }

  &--color-mode {
    @apply text-gray-900 dark:text-gray-100;
  }

  &--black {
    @apply text-gray-900 dark:text-gray-900;
  }
  
  &--white {
    @apply text-gray-100 dark:text-gray-100;
  }
}

/* .container + .title {
  @apply mt-10;
} */
</style>
