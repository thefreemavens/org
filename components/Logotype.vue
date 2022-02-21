<template>
  <div class="logotype">
    <span class="pre">The</span>
    <span class="main-name">FreeMavens</span>
  </div>
</template>

<style lang="postcss" scoped>
.logotype {
  @apply block text-center uppercase font-serif;
  
  & .pre {
    @apply text-xs tracking-widest text-gray-500;
  }
  & .main-name {
    @apply block leading-6 text-base font-bold tracking-wide-xl;
  }
}
</style>
