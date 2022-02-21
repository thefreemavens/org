<template>
  <div>
    <!-- Open/Close Button -->
    <div
      class="fixed top-0 right-0 z-50 cursor-pointer bg-primary w-10 h-10 flex items-center justify-center"
      @click="showMenu = !showMenu"
    >
      <div :class="{ open: showMenu }" class="menu-icon">
        <icon
          icon-name="Menu"
          icon-color="none"
          icon-stroke-color="#fff"
          icon-stroke-width="36"
          width="18"
          height="18"
        >
          <icon-hex />
        </icon>
      </div>
    </div>

    <!-- <div
      class="fixed top-10 right-0 z-10 cursor-pointer bg-gray-700 w-10 h-10 flex items-center justify-center"
      @click="toggleColorMode()"
    >
      <ColorModePicker
        class="text-white current transform -rotate-45 dark:rotate-135 transition-transform duration-300 ease-out"
      />
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    // iconStyle: {
    //   type: String,
    //   default: '',
    // },
  },
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>
<style lang="postcss" scoped>
.menu-icon {
  & svg {
    @apply transition-transform duration-700 transform -rotate-60 relative;
  }
  &.open {
    & svg {
      @apply relative transform rotate-60;
    }
  }
}
</style>
