<template>
  <blockquote>
    <h4>
      {{ quote }}
    </h4>
  </blockquote>
</template>

<script>
export default {
  props: {
    quote: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
blockquote {
  margin: 0;
  h4 {
    font-style: italic;
    border-left: 2px solid $brand;
    margin: 2rem 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    @include fp(padding-left, 20, 60);
    @include desktop {
      margin: 3rem 0;
      padding-top: 1rem * $golden;
      padding-bottom: 1rem * $golden;
    }
  }
}
</style>
