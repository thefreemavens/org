<template>
  <div class="title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  // name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: 'Page Title'
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  text-align: center;
  color: $black;
  // font-family: $font-alt;
  // text-transform: uppercase;
  // letter-spacing: 10px;
}
h1 {
  font-family: $font-alt;
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: uppercase;
  word-spacing: 6px;
  letter-spacing: 2px;
}
</style>
