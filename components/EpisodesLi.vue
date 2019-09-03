<template>
  <li
    v-scroll-reveal="{ delay: 150 }"
    v-if="link">
    <span class="number">
      Episode {{ number }}
      <span class="duration">
        <span class="seperator">/</span>
        {{ duration }}
      </span>
    </span>
    <span>
      <a
        :href="link"
        target="_blank">
        {{ title }} 
      </a>
    </span>
  </li>

  <li
    v-scroll-reveal="{ delay: 150 }"
    v-else
    class="cs"
  >
    <span class="number">
      Episode {{ number }}
    </span>
    <span>
      {{ title }} 
    </span>
  </li>
</template>

<script>
export default {
  // name: 'btn'
  props: {
    number: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: 'Episode Title'
    },
    link: {
      type: String,
      default: ''
    },
    duration: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
li {
  &.cs {
    // margin-top: 50px;
    color: $grey-3;
    .number {
      color: $grey-2;
    }
    & > span:first-of-type {
      color: $grey-4;
    }
  }
  margin: 5vh auto;
  & > span:first-of-type {
    position: relative;
    top: 0.1vh;
    @extend .subtitle;
    // color: $grey-4;
  }
  & > span:last-of-type {
    @extend .h3;
  }
  span {
    display: block;
    &.number,
    &.duration,
    &.seperator {
      display: inline-block;
      // font-size: 16px;
    }
    &.seperator {
      color: $grey-4;
    }
    &.duration {
      color: $grey-6;
    }
  }
}
</style>
