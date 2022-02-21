<template>
  <div class="avatar relative block">
    <img
      :src="avatarSrc()"
      class="w-full h-full block rounded-full ring-4 ring-primary"
    />
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: null,
    },
  },
  methods: {
    avatarSrc() {
      try {
        return require(`~/assets/img/avatars/${this.source}.jpg`)
      } catch (error) {
        return require(`~/assets/img/default.jpg`)
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.avatar {
  /* Base Size */
  
  /* @apply w-10 h-10; */
  & .image {
    /* @apply w-full h-full rounded-full; */
  }
  
  /* Small */
  &.avatar-sm {
    /* @apply w-8 h-8; */
  }
  
  /* Large */
  &.avatar-lg {
  
    /* @apply w-12 h-12; */
  }
  /* Large */
  &.avatar-xl {
    /* @apply w-14 h-14; */
  }
  /* Large */
  &.avatar-4xl {
    /* @apply w-20 h-20; */
  }
}
</style>
