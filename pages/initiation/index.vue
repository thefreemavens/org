<template>
  <div class="block max-w-xl mx-auto text-center">
    <!-- Header: Title -->
    <div
      class="w-full mt-4 border-gray-700 transition-colors duration-300 ease-in-out"
    >
      <Logomark logo-style="line-b" class="mt-10" />
      <app-title text="Initiation" text-after="Form" class="pt-10 mb-10" />
    </div>
    <div class="form-inner px-4">
      <div class="w-full pt-6 mb-8 text-left mx-auto">
        <p class="px-4">
          Our members consist of free, open minded and truth seekers with a
          shared goal that is aligned with our principles and what
          <nuxt-link to="/freemavenry">Freemavenry</nuxt-link> stands for.
        </p>
      </div>

      <!-- Form Menu -->
      <InitiationForm class="px-4" />
    </div>
    <app-footer v-scroll-reveal />
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: null,
        lastName: null,
        country: null,
        email: null,
      },
      totalSignatures: null,
      totalCountries: null,
    }
  },
  head() {
    return {
      title: 'Natural Law',
      // bodyAttrs: {
      //   class: 'dark-theme',
      // },
    }
  },
  methods: {
    getTotalSignatures(value) {
      this.totalSignatures = value
    },
    getTotalCountries(value) {
      this.totalCountries = value
    },
  },
}
</script>

<style scoped lang="postcss">
.sg-icon {
  @apply -mt-10 mb-16 w-16 h-16 stroke-current text-black dark:text-white;
}
</style>
