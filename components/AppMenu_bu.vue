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
        <span />
        <span />
        <span />
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
                      title=""
                    >
                      Home
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/mavenry/"
                      title="Mavenry"
                    >
                      Mavenry
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/mission/"
                      title="Mission"
                    >
                      Our Mission
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/be-a-maven/"
                      title="Be a Maven"
                    >
                      Be a Maven
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/join/"
                      title="Get Invited"
                    >
                      Join
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
export default {
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
  font-size: $h3;
  font-family: $font-alt;
  font-weight: 300;
  letter-spacing: 0.22rem;
  text-transform: uppercase;
  @include desktop {
    font-size: $h2;
  }
}

.menu-links {
  @extend .no-list;
  margin: 0 auto;
  li {
    margin: $gap 0;
    transform: translateY(-66px);
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
  position: fixed;
  display: block;
  right: 0;
  top: 0; // (70px - 48px header margin)
  z-index: 199;
  background: $brand;
  width: 42px;
  height: 42px;
  @include tablet {
    right: 0;
    top: 0;
  }
  @include desktop {
    // position: fixed;
  }
}

.icon-inner {
  width: 20px;
  height: 12px;
  position: relative;
  top: 6px;
  left: 12px;
  cursor: pointer;
  display: inline-block;
  z-index: 100;
  // align-items: center;
  // justify-content: center;
  // flex-direction: column;
  span {
    background: $white;
    display: block;
    position: absolute;
    height: 2px;
    transform: rotate(0deg);
    transition: all 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
    opacity: 1;
    width: 100%;
    left: 0;
    &:nth-child(1) {
      top: 0px;
    }
    &:nth-child(2) {
      top: 5px;
    }
    &:nth-child(3) {
      top: 10px;
    }
  }
  &:hover {
    span {
      // background: $brand;
    }
  }
  &.open {
    position: relative;
    span {
      &:nth-child(1) {
        top: 6px;
        transform: rotate(-135deg);
      }
      &:nth-child(2) {
        opacity: 0;
        right: -60px;
      }
      &:nth-child(3) {
        top: 6px;
        transform: rotate(135deg);
      }
    }
  }
  &.light {
    span {
      background: $white;
    }
    &:hover {
      span {
        background: $brand;
      }
    }
    &.open {
      span {
        background: $black;
      }
    }
  }
}

.invert {
  .icon-inner {
    span {
      background: $white;
    }
    &.open {
      span {
        background: $black;
      }
    }
  }
}

// ==================================================================
// Menu Transition
//

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.33s ease-out;
}

.menu-enter,
.menu-leave-active {
  opacity: 0;
}
</style>
