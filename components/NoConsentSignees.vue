<template>
  <div class="text-center">
    <span class="emp-div inline-block text-xl md:text-2xl p-8 mb-10 lg:mb-14">
      <span class="text-primary border-b-2 border-gray-500 mx-1">
        {{ users.length }}
      </span>
      signatures from
      <span class="text-primary border-b-2 border-gray-500 mx-1">6</span>
      countries.
    </span>
    <ol class="w-full mb-6">
      <li
        v-for="(value, index) in users"
        :key="index"
        v-scroll-reveal
        class="font-serif inline-block p-3"
      >
        <span class="py-2">{{ value[0] }} {{ value[1] }}</span>
        <!-- <span class="flex-auto py-2 text-right">{{ value[2] }}</span> -->
      </li>
    </ol>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import axios from 'axios'

export default {
  layout: 'home',
  props: {
    mode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      users: '',
      api:
        'https://sheets.googleapis.com/v4/spreadsheets/1DnWZHjH1RyKCfK-gYXoExk6vIiqFJ62ezvdmE7fUbng/values/ncResponses!B2:F?key=AIzaSyA9mimdMMNnTdr6RdWZCTM8d4d4R2OJEVM',
      dataReady: false,
    }
  },
  async mounted() {
    const data = await this.$axios.$get(this.api)
    this.dataReady = true
    this.users = data.values.reverse()
    this.$emit('totalSignatures', this.users.length)
    this.$emit('totalCountries', this.users.reverse()[1][4])
  },
}
</script>
