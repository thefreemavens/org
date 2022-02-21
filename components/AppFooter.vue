<template>
  <footer class="wrap my-4">
    <div class="flex justify-between items-center mb-4">
      <div class="inline-block w-full pr-8">
        <hr class="border border-gray-100 dark:border-gray-700" />
      </div>
      <div v-scroll-to="'body'" class="block items-center justify-center">
        <Logomark class="w-10 h-10 cursor-pointer" logo-style="line-b" />
      </div>
      <div class="inline-block w-full pl-8">
        <hr class="border border-gray-100 dark:border-gray-700" />
      </div>
    </div>
    <Logotype v-scroll-to="'body'" class="-mr-1 pb-6 cursor-pointer" />
  </footer>
</template>
