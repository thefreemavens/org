<template>
  <a v-if="url" :href="url" :title="title" class="btn" target="_blank">
    {{ title }}
  </a>

  <a
    v-else-if="scrollTo"
    v-scroll-to="scrollTo"
    :title="title"
    href="#"
    class="btn"
  >
    {{ title }}
  </a>

  <NuxtLink v-else-if="to" :to="to" :title="title" class="btn">
    {{ title }}
  </NuxtLink>

  <button v-else type="submit" class="btn">
    {{ title }}
  </button>
</template>

<script>
export default {
  // name: 'btn'
  props: {
    url: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    scrollTo: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: 'Press',
    },
  },
}
</script>

<style lang="postcss" scoped>
.btn {
  @apply font-serif inline-block text-center align-middle cursor-pointer uppercase rounded-full tracking-widest py-3.5 px-12 transition-colors duration-300 ease-in-out text-white bg-primary;
  
  &:focus {
    @apply outline-none ring-4 ring-offset-white dark:ring-offset-black ring-offset-2;
  }
  
  &.fill-w {
    @apply text-black bg-white;
    &:hover {
      @apply bg-primary;
    }
  }
  &.fill-b {
    @apply text-white bg-black;
    &:hover {
      @apply bg-brand-400;
    }
  }
  /* &.invalid-email {
    @apply text-white bg-gray-300;
    &:hover {
      @apply bg-brand-200 cursor-not-allowed;
    }
  } */
  /* & .line {
    @apply text-white bg-primary;
    &:hover {
      @apply bg-brand-400;
    }
  } */
}
</style>
