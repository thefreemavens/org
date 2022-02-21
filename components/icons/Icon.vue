<template>
  <svg
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }}</title>
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
      default: 'box',
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
    iconStrokeColor: {
      type: String,
      default: 'currentStroke',
    },
    iconStrokeWidth: {
      type: [Number, String],
      default: '',
    },
  },
}
</script>
<style lang="postcss" scoped>
svg {
  @apply inline-flex align-middle;
  
  margin-bottom: 1px;
}
</style>
