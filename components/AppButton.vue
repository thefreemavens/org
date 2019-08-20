<template>
  <button
    :class="buttonClass"
    type="submit"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  // name: 'btn'
  props: {
    title: {
      type: String,
      default: 'Press'
    },
    buttonClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
// Hide :focus outline on Chrome
button:focus {
  outline: 0;
}

// button {
//   &.default {
//     @extend .btn-color;
//   }
//   &.alt {
//     @extend .btn-color-alt;
//   }
// }

// Using default color and size.
button {
  font-family: $font-alt;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;
  margin: 1rem * $golden auto;
  border-radius: 50px;
  font-weight: 400;
  line-height: $line-height;
  border: 2px solid;
  transition: all 0.33s ease-in-out;
  letter-spacing: 2px;
  font-size: 13px;
  padding: 10px 26px;
  @include desktop {
    font-size: 14px;
    padding: 12px 36px;
  }
  &.wide {
    padding: 10px 46px;
    @include desktop {
      padding: 12px 66px;
    }
  }
}

// ==================================================================
// TFM Button Colors
//
.fill {
  color: rgba($white, 1);
  background: rgba($black, 1);
  border-color: rgba($black, 0);
  &:hover {
    background: rgba($black, 0.8);
  }
}

.fill-w {
  color: rgba($black, 1);
  background: rgba($white, 1);
  border-color: rgba($white, 0);
  &:hover {
    background: rgba($pure-white, 1);
  }
}

.fill-c {
  color: rgba($white, 1);
  background: rgba($brand, 1);
  border-color: rgba($brand, 1);
  &:hover {
    color: rgba($pure-white, 1);
    background: lighten($brand, 3);
  }
}

.line {
  // font-weight: 600;
  color: rgba($black, 1);
  background: none;
  border-color: rgba($black, 1);
  &:hover {
    border-color: rgba($black, 0.8);
    background: none;
  }
}

.line-c {
  // font-weight: 600;
  color: rgba($brand, 1);
  background: none;
  border-color: rgba($brand, 1);
  &:hover {
    border-color: rgba($brand, 0.8);
    background: none;
  }
}

.line-w {
  font-weight: 400;
  color: $grey-6;
  background: none;
  border-color: $grey-6;
  &:hover {
    color: $pure-white;
    border-color: $pure-white;
  }
}
</style>
