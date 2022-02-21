<template>
  <div class="container">
    <validation-observer v-slot="{ invalid, handleSubmit }">
      <form
        id="join"
        ref="formElement"
        class="text-left"
        @submit.prevent="handleSubmit(response)"
      >
        <hr class="border-gray-100 dark:border-gray-700 my-6" />
        <h3
          class="font-serif text-2xl my-4 uppercase tracking-wide-xl text-center"
        >
          Contact
        </h3>
        <hr class="border-gray-100 dark:border-gray-700 my-6" />
        <!-- First Name -->
        <div class="form-group">
          <validation-provider v-slot="{ errors }" rules="required|alpha">
            <label for="firstName">First Name</label>
            <input
              v-model="firstName"
              type="text"
              required="required"
              name="entry.1090129806"
            />
            <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>

        <!-- Last Name -->
        <div class="form-group">
          <validation-provider v-slot="{ errors }" rules="required|alpha">
            <label for="lastName">Last Name</label>
            <input
              v-model="lastName"
              type="text"
              required="required"
              name="entry.57994274"
            />
            <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>

        <!-- Email -->
        <div class="form-group">
          <validation-provider v-slot="{ errors }" rules="required|email">
            <label for="user-email"> Email </label>
            <input
              v-model="email"
              type="text"
              required="required"
              name="entry.1097449195"
            />
            <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>

        <!-- Invitation ID -->
        <!-- <div class="form-group">
          <validation-provider v-slot="{ errors }" rules="required">
            <label for="invitation"> Invitation No. </label>
            <input v-model="invitation" type="text" name="entry.1263827797" />
            <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div> -->

        <hr class="border-gray-100 dark:border-gray-700 mb-6 mt-12" />
        <h3
          class="font-serif text-2xl my-4 uppercase tracking-wide-xl text-center"
        >
          Application
        </h3>
        <hr class="border-gray-100 dark:border-gray-700 my-6" />
        <p>
          Men and women of integrity who wishes to get initiated and join The
          Freemavens must first understand the foundations to the great body of
          knowledge of (the real) Natural Law.
        </p>
        <p>
          Learn the first 3 episodes of the
          <nuxt-link to="/natural-law/">Natural Law Seminar</nuxt-link> and
          answer the following 3 questions:
        </p>

        <div class="question">
          <h4 class="">Question 1</h4>
          <p>
            As to be understood from
            <NuxtLink to="../natural-law/"> Episode 1 </NuxtLink>
            , what does the old saying "There is nothing new under the sun"
            means?
          </p>
        </div>

        <!-- Form: Question 1 -->
        <div class="form-group">
          <validation-provider v-slot="{ errors }" rules="required">
            <textarea
              v-model="answerA"
              type="text"
              required="required"
              name="entry.568051769"
              cols="40"
              rows="5"
            />
            <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>

        <div class="question">
          <h4 class="">Question 2</h4>
          <p>
            As to be understood from
            <NuxtLink to="../natural-law/"> Episode 2 </NuxtLink>
            , Truth, by its very nature, is Beligerent. Why so?
          </p>
        </div>

        <!-- Form: Question 2 -->
        <div class="form-group">
          <validation-provider v-slot="{ errors }" rules="required">
            <textarea
              v-model="answerB"
              type="text"
              required="required"
              name="entry.660058584"
              cols="40"
              rows="5"
            />
            <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>

        <div class="question">
          <h4 class="">Question 3</h4>
          <p clas>
            As to be understood from
            <NuxtLink to="../natural-law/"> Episode 3 </NuxtLink>
            , what is considered to be a Logical Fallacy?
          </p>
        </div>

        <!-- Form: Question 2 -->
        <div class="form-group">
          <validation-provider v-slot="{ errors }" rules="required">
            <textarea
              v-model="answerC"
              type="text"
              required="required"
              name="entry.1154524792"
              cols="40"
              rows="5"
            />
            <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>

        <!-- Form Disclaimers -->
        <ol
          class="text-left -mt-2 text-xs text-gray-500 list-outsude pl-4 list-decimal"
        >
          <li class="pl-2">
            All submissions are private and will never be published.
          </li>
          <li class="pl-2">
            Submissions that are not in the English language will be rejected.
          </li>
          <li class="pl-2">Processing may take up to 6 days.</li>
        </ol>

        <!-- Submit Button -->
        <div class="w-full text-center my-10">
          <AppButton
            :disabled="invalid"
            title="Get Initiated"
            class="fill-c text-sm"
          />
        </div>
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
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      // invitation: null,
      answerA: null,
      answerB: null,
      answerC: null,
      // isDisabled: true,
      // defaultInvitation: '13060694016',
    }
  },
  // computed: {
  //   invitation() {
  //     if (!this.$route.query.id) {
  //       return '13060694016'
  //     } else {
  //       return this.$route.query.id
  //     }
  //   },
  // },
  // computed: {
  // invitation() {
  //   if (!this.$route.query.id) {
  //     return this.defaultInvitation
  //   } else {
  //     return this.$route.query.id
  //   }
  // },
  // invitation: {
  //   get() {
  //     return this.$route.query.id
  //       ? this.$route.query.id
  //       : this.defaultInvitation
  //   },
  //   set(defaultInvitation) {
  //     this.defaultInvitation = defaultInvitation
  //   },
  // },
  // },
  methods: {
    response() {
      const vm = this
      const formElement = vm.$refs.formElement
      const formData = new FormData(formElement)
      const url =
        'https://docs.google.com/forms/d/e/1FAIpQLSc02pJW9A3vfC9nkzhkx5R3DajMl7vvO7kNCc5S9QWQ7rd4DA/formResponse'
      this.errors = []
      axios
        .post(url, formData)
        .then(function (response) {
          // eslint-disable-next-line no-undef
          $nuxt.$router.push('/initiation/confirmation')
        })
        // eslint-disable-next-line handle-callback-err
        // eslint-disable-next-line node/handle-callback-err
        .catch(function (error) {
          // eslint-disable-next-line no-undef
          $nuxt.$router.push('/initiation/confirmation')
        })
    },
  },
}
</script>

<style scoped lang="postcss">
.error {
  @apply text-brand-500 tracking-wide;
}

.question {
  & h4 {
    @apply py-6 uppercase text-gray-900 dark:text-gray-100 block mt-10 mb-2 font-serif text-sm tracking-widest border-t border-gray-100 dark:border-gray-700;
  }
  
  p {
    @apply mt-0.5 mb-4;
  }
}
</style>
