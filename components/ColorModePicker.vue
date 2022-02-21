<template>
  <div>
    <icon
      icon-name="Menu"
      icon-color="currentColor"
      icon-stroke-color="none"
      icon-stroke-width="none"
      width="18"
      height="18"
      class="z-50"
    >
      <icon-color-mode />
    </icon>
  </div>
</template>

<script>
export default {
  methods: {
    // toggleColorMode() {
    //   if (this.$colorMode.preference === 'light') {
    //     this.$colorMode.preference = 'dark'
    //   } else if (this.$colorMode.preference === 'dark') {
    //     this.$colorMode.preference = 'light'
    //   }
    // },
  },
}
</script>
