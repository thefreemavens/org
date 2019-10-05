<template>
  <div>
    <a
      href="#"
      class="thumb"
      @click.prevent="show">
      <img :src="thumb">
    </a>
    <div
      v-if="visible"
      class="lightbox"
      @click="hide">
      <div class="flex">
        <div
          class="lightbox-image"
          @click.stop="hide">
          <img
            :src="images[index]"
            @click="hide">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumb: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      visible: false,
      index: 0
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKeydown)
  },
  destroyed() {
    window.removeEventListener('keydown', this.onKeydown)
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
      this.index = 0
    },
    hasNext() {
      return this.index + 1 < this.images.length
    },
    hasPrev() {
      return this.index - 1 >= 0
    },
    prev() {
      if (this.hasPrev()) {
        this.index -= 1
      }
    },
    next() {
      if (this.hasNext()) {
        this.index += 1
      }
    },
    onKeydown(e) {
      if (this.visible) {
        switch (e.key) {
          case 'ArrowRight':
            this.next()
            break
          case 'ArrowLeft':
            this.prev()
            break
          case 'ArrowDown':
          case 'ArrowUp':
          case ' ':
            e.preventDefault()
            break
          case 'Escape':
            this.hide()
            break
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.lightbox {
  @extend .v-center;
  // position: absolute;
  z-index: 100 !important;
  background: rgba($black, 1);
  width: 100%;
  height: 100vh;
}

.lightbox-image img {
  @extend .v-center;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100vh - 90px);
}

.thumb {
  max-width: 666px;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: 1fr;
}
</style>
