<template>
  <div
    :class="dividerStyle"
    class="divider">
    <div class="hr"><hr></div>
    <div
      v-scroll-to="'body'"
      class="icon"
    >
      <svg
        width="47px" 
        height="53px" 
        viewBox="0 0 47 53" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g transform="translate(-3.000000, 0.000000)">
            <polygon points="26.5 15.5 36.0262794 21 36.0262794 32 26.5 37.5 16.9737206 32 16.9737206 21 " />
          </g>
        </g>
      </svg>
    </div>
    <div class="hr"><hr></div>
  </div>
</template>

<script>
export default {
  props: {
    dividerStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.divider {
  display: table;
  width: 100%;
  margin: 20px auto 0;
  // padding: 0 80px;
  div {
    display: table-cell;
    vertical-align: middle;
  }
  hr {
    margin: 33px 0;
  }
}

.icon {
  display: block;
  width: 47px;
  position: relative;
  top: 4px;
  cursor: pointer;
  svg {
    // stroke: $black;
    fill: none;
    margin: 0 10px; // Space around icon
  }
}

// .dark-theme .divider {
//   hr {
//     border: 0.5px solid $grey-3;
//     margin: 33px 0;
//   }
//   .icon svg {
//     // stroke: $white;
//   }
// }
</style>
