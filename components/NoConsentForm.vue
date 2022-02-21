<template>
  <!-- eslint-disable vue/no-template-shadow -->
  <div>
    <validation-observer v-slot="{ invalid, handleSubmit }">
      <form
        ref="formElement"
        class="mx-auto block w-full text-left"
        @submit.prevent="handleSubmit(response)"
      >
        <div class="form-group">
          <validation-provider v-slot="{ errors }" rules="required|alpha">
            <label for="firstName"> First Name </label>
            <input
              v-model="value.firstName"
              type="text"
              required="required"
              name="entry.2005131846"
            />
            <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>

        <div class="form-group">
          <validation-provider v-slot="{ errors }" rules="required|alpha">
            <label for="lastName"> Last Name </label>
            <input
              v-model="value.lastName"
              type="text"
              required="required"
              name="entry.395593734"
            />
            <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>

        <div class="form-group">
          <validation-provider
            v-slot="{ errors }"
            rules="required|alpha_spaces"
          >
            <label for="country"> Country </label>
            <input
              v-model="value.country"
              type="text"
              required="required"
              name="entry.584755026"
            />
            <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>

        <!-- Form: Email -->
        <div class="form-group">
          <validation-provider v-slot="{ errors }" rules="required|email">
            <label for="user-email"> Email </label>
            <input
              v-model="value.email"
              type="text"
              required="required"
              name="entry.1366744861"
            />
            <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
            <span class="text-xs mt-2 block text-gray-500 tracking-wider">
              Emails are never published.
            </span>
          </validation-provider>
        </div>

        <!-- <span>Selected: {{ donate }}</span> -->

        <!-- <hr class="border border-gray-100 dark:border-gray-700 my-4" /> -->

        <footer class="mx-auto">
          <AppButton :disabled="invalid" title="Send" class="fill w-full" />
        </footer>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  watch: {
    value() {
      this.$emit('input', this.value)
    },
  },
  methods: {
    response() {
      const vm = this
      const formElement = vm.$refs.formElement
      const formData = new FormData(formElement)
      const url =
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdG__a_LcFOSWnA0981vpB3fbI0wAvuSq4j86dHZHxeNOzV-g/formResponse'
      this.errors = []
      axios
        .post(url, formData)
        .then(function (response) {
          // eslint-disable-next-line no-undef
          $nuxt.$router.push('/i-do-not-consent/confirmation')
        })
        // eslint-disable-next-line node/handle-callback-err
        .catch(function (error) {
          // eslint-disable-next-line no-undef
          $nuxt.$router.push('/i-do-not-consent/confirmation')
        })
    },
  },
}
</script>

<style scoped lang="postcss">
sup,
.sup {
  @apply text-brand-500;
}

/* .control-label {
  @apply block text-gray-600 dark:text-gray-400 text-lg font-normal mb-0.5 tracking-wide;
} */

.error {
  @apply text-brand-500 tracking-wide;
}

input {
  &:focus {
    @apply outline-none ring;
  }
}

/* input:focus,
input:valid {
  @apply text-white;
} */

/* input::placeholder {
  @apply text-gray-800;
} */

/* .form-group {
  @apply relative m-0 text-left px-4 pb-2;
  & input {
    @apply py-3 px-3 border border-gray-300 bg-gray-200 text-gray-900 dark:border-gray-900 dark:bg-gray-700 dark:text-gray-100 text-xl leading-tight rounded-lg w-full appearance-none my-1;
  }
  & label {
    @apply mt-0 text-base text-gray-500;
  }
  & .error {
    @apply text-sm;
  }
} */
</style>
