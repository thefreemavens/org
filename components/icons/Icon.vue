<template>
  <svg
    :width="width" 
    :height="height" 
    :aria-labelledby="iconName" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512" 
    role="presentation"
  >
    <title
      :id="iconName"
      lang="en">{{ iconName }}</title>
    <g
      :fill="iconColor"
      :stroke="iconStrokeColor"
      :stroke-width="iconStrokeWidth"
    >
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    iconStrokeColor: {
      type: String,
      default: '#fff'
    },
    iconStrokeWidth: {
      type: [Number, String],
      default: 16
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
