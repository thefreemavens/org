<template>

  <!-- Open/Close Button -->
  <div>
    <div
      :class="iconStyle"
      class="icon"
      @click="showMenu = !showMenu"
    >
      <div
        :class="{ open: showMenu}"
        class="icon-inner"
      >
        <icon
          icon-name="hex"
          icon-color="none"
          icon-stroke-color="#fff"
          icon-stroke-width="21"
          width="18"
          height="18"
        >
          <icon-hex />
        </icon>
      </div>
    </div>

    <!-- Menu Items -->
    <transition name="menu">
      <div
        v-show="showMenu"
        :class="{ open: showMenu}"
        class="menu-mask"
        @click="showMenu = false"
      >
        <div class="menu-wrapper">
          <div class="menu-footer">
            <slot name="main">
              <div
                :class="{ open: showMenu}"
                class="menu"
              >
                <ul class="menu-links">
                  <li>
                    <nuxt-link
                      to="/"
                      title="Home"
                    >
                      Home
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/freemavenry/"
                      title="Freemavenry"
                    >
                      Mavenry
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/natural-law/"
                      title="Natural Law"
                    >
                      Natural Law
                    </nuxt-link>
                  </li>
                  <!-- <li> -->
                  <!-- <nuxt-link -->
                  <!-- to="/patreon/" -->
                  <!-- title="Become a Patreon" -->
                  <!-- > -->
                  <!-- Become a Patreon -->
                  <!-- </nuxt-link> -->
                  <!-- </li> -->
                  <li>
                    <nuxt-link
                      to="/join/"
                      title="Join"
                    >
                      Be A Maven
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from '@/components/icons/Icon'
import IconHex from '@/components/icons/IconHex'

export default {
  components: {
    Icon,
    IconHex
  },
  props: {
    iconStyle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showMenu: false
    }
  }
}
</script>

<style scoped lang="scss">
.menu-mask {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($white, 1);
  display: table;
  transition: opacity 0.33s ease;
  transition-delay: 0.22s;
  &.open {
    transition-delay: 0s;
  }
}

.menu-wrapper {
  display: table-cell;
  vertical-align: middle;
}

// ==================================================================
// TFM: Components / Main Menu
//

.menu {
  @extend .h3;
  // font-size: $h3;
  font-family: $font-alt;
  // font-weight: 300;
  letter-spacing: 0.22rem;
  // text-transform: uppercase;
  @include desktop {
    // font-size: $h2;
  }
}

.menu-links {
  text-align: center;
  @extend .pure-list;
  margin: 0 auto;
  li {
    margin: $gap 0;
    // transform: translateY(-66px);
    opacity: 0;
    transition: all 0.33s ease;
    &.active a {
      color: $brand;
    }
  }
  a {
    display: inline-block;
    color: $black;
    text-decoration: none;
    transition: all 0.2s ease;
    &:hover {
      color: $brand;
    }
    &.nuxt-link-exact-active {
      color: $brand;
    }
  }
}

.menu.open .menu-links li {
  transform: translateY(0);
  opacity: 1;
  &:nth-child(1) {
    transition-delay: 80ms;
  }
  &:nth-child(2) {
    transition-delay: 120ms;
  }
  &:nth-child(3) {
    transition-delay: 160ms;
  }
  &:nth-child(4) {
    transition-delay: 200ms;
  }
  &:nth-child(5) {
    transition-delay: 240ms;
  }
}

// ==================================================================
// TFM: Components / Main Menu / Custom Button
//

.icon {
  cursor: pointer;
  position: fixed;
  @extend .flex;
  right: 0;
  top: 0; // (70px - 48px header margin)
  z-index: 199;
  background: $brand;
  width: 40px;
  height: 40px;
}

.icon-inner {
  display: inline-block;
  z-index: 100;
  svg {
    transition: transform 0.66s;
    transform: rotate(-60deg);
  }
  &.open {
    svg {
      position: relative;
      transform: rotate(60deg);
    }
  }
}

// .invert {
//   .icon-inner {
//     span {
//       background: $white;
//     }
//     &.open {
//       span {
//         background: $black;
//       }
//     }
//   }
// }

// ==================================================================
// Menu Transition
//

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.66s ease;
  transition-delay: 0.33s;
}

.menu-enter,
.menu-leave-active {
  opacity: 0;
}
</style>
