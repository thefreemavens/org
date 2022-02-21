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

    <!-- Menu -->
    <transition name="fade">
      <div
        v-show="showMenu"
        :class="{ open: showMenu }"
        class="menu-overlay"
        @click="showMenu = false"
      >
        <transition name="fade">
          <div :class="{ open: showMenu }" class="menu-items">
            <ul class="text-center mx-auto">
              <li
                v-for="(item, index) in items"
                :key="index"
                class="text-lg font-serif tracking-wide-xl uppercase my-10"
              >
                <nuxt-link
                  :to="item.target"
                  :title="item.title"
                  class="inline-block hover:text-primary"
                >
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </transition>
        <!-- Toggle Color Mode -->
      </div>
    </transition>
    <div
      class="fixed top-10 right-0 z-10 cursor-pointer bg-gray-700 w-10 h-10 flex items-center justify-center"
      @click="toggleColorMode()"
    >
      <ColorModePicker
        class="text-white current transform -rotate-45 dark:rotate-135 transition-transform duration-300 ease-out"
      />
    </div>
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
      items: [
        {
          title: 'Home',
          target: '/',
        },
        {
          title: 'Mavenry',
          target: '/freemavenry',
        },
        {
          title: 'Natural Law',
          target: '/natural-law',
        },
        {
          title: '#NoConsent',
          target: '/i-do-not-consent',
        },
        {
          title: 'Initiation',
          target: '/initiation',
        },
      ],
    }
  },
  mounted() {
    document.body.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        this.showMenu = false
      }
    })
  },
  methods: {
    toggleColorMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
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

.menu-overlay {
  @apply fixed z-40 top-0 left-0 w-full h-full flex items-center justify-center;
  @apply bg-white dark:bg-gray-900;
  /* @apply transition-colors duration-300 ease-out; */
}

.menu-items {
  /* @apply opacity-100; */
  /* @apply transition duration-1000 ease-in-out delay-500; */
  /* &.open {
    @apply opacity-100 transition duration-700 ease-in-out delay-500;
  } */
}

.fade-enter-active {
  @apply transition-opacity duration-300 ease-out;
}

.fade-leave-active {
  @apply transition-opacity duration-300 ease-out delay-500;
}

.fade-enter,
.fade-leave-active {
  @apply opacity-0;
}

.nuxt-link-exact-active {
  @apply text-primary focus:text-brand-100;
}
</style>
