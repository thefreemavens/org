<template>
  <form
    id="join"
    ref="formElement"
    class=""
    @submit.prevent="response"
  >

    <p
      class="legal">
      Our members consist of free, open minded and truth seekers with a shared goal that is aligned with our principles and what <nuxt-link to="/freemavenry">Freemavenry</nuxt-link> stands for.
    </p>
    <hr>

    <h3 class="">
      Contact
    </h3>

    <div
      class="form-group">
      <input
        v-model="firstName"
        type="text"
        required="required"
        class="form-control"
        name="entry.1090129806"
      >
      <label
        class="control-label"
        for="first-name">First Name
        <span
          v-if="errors.length"
          class="error"
        >
          <span
            v-for="error in errors"
            :key="error.id">{{ error }}
          </span>
        </span>
      </label>
      <i class="bar" />
    </div>

    <div
      class="form-group">
      <input
        v-model="lastName"
        type="text"
        required="required"
        class="form-control"
        name="entry.57994274"
      >
      <label
        class="control-label"
        for="last-name">Last Name
        <span
          v-if="errors.length"
          class="error"
        >
          <span
            v-for="error in errors"
            :key="error.id">{{ error }}
          </span>
        </span>
      </label>
      <i class="bar" />
    </div>

    <div
      class="form-group">
      <input
        v-model="email"
        type="text"
        required="required"
        class="form-control"
        name="entry.1097449195"
      >
      <label
        class="control-label"
        for="user-email">Email address
        <span
          v-if="errors.length"
          class="error"
        >
          <span
            v-for="error in errors"
            :key="error.id">{{ error }}
          </span>
        </span>
      </label>
      <i class="bar" />
    </div>

    <div
      class="form-group">
      <input
        v-model="invitation"
        type="text"
        class="form-control nr"
        name="entry.1263827797"
      >
      <label
        class="control-label"
        for="user-email">Invitation #
        <span
          v-if="errors.length"
          class="error"
        >
          <span
            v-for="error in errors"
            :key="error.id">{{ error }}
          </span>
        </span>
      </label>
      <i class="bar" />
    </div>

    <h3 class="application">
      Application
    </h3>
    <p class="legal">
      Men and women of integrity who wishes to get initiated and join The Freemavens must first understand the foundations to our great body of knowledge.
    </p>
    <p class="legal">
      Learn the first 3 episodes of our <nuxt-link to="/natural-law/">Natural Law Series</nuxt-link> and answer the following 3 questions:
    </p>

    <h4 class="question">
      Question 1
    </h4>
    <p
      class="legal">
      As to be understood from
      <NuxtLink to="../natural-law/episodes/before-we-begin/">
      Episode 1</NuxtLink>, what does the old saying "There is nothing new under the sun" means?
    </p>

    <div
      class="form-group">
      <input
        v-model="answerA"
        type="text"
        required="required"
        class="form-control"
        name="entry.568051769"
      >
      <label
        class="control-label"
        for="user-email">Answer
        <span
          v-if="errors.length"
          class="error"
        >
          <span
            v-for="error in errors"
            :key="error.id">{{ error }}
          </span>
        </span>
      </label>
      <i class="bar" />
    </div>

    <h4 class="question">
      Question 2
    </h4>
    <p
      class="legal">
      As to be understood from
      <NuxtLink to="../natural-law/episodes/presentation-style/">
      Episode 2</NuxtLink>, Truth, by its very nature, is Beligerent. Why so?
    </p>

    <div
      class="form-group">
      <input
        v-model="answerB"
        type="text"
        required="required"
        class="form-control"
        name="entry.660058584"
      >
      <label
        class="control-label"
        for="user-email">Answer
        <span
          v-if="errors.length"
          class="error"
        >
          <span
            v-for="error in errors"
            :key="error.id">{{ error }}
          </span>
        </span>
      </label>
      <i class="bar" />
    </div>

    <h4 class="question">Question 3</h4>
    <p
      class="legal">
      As to be understood from
      <NuxtLink to="../natural-law/episodes/prerequisites/">
      Episode 3</NuxtLink>, what is considered to be a Logical Fallacy?
    </p>

    <div
      class="form-group">
      <input
        v-model="answerC"
        type="text"
        required="required"
        class="form-control"
        name="entry.1154524792"
      >
      <label
        class="control-label"
        for="user-email">Answer
        <span
          v-if="errors.length"
          class="error"
        >
          <span
            v-for="error in errors"
            :key="error.id">{{ error }}
          </span>
        </span>
      </label>
      <i class="bar" />
    </div>

    <ol>
      <li>All submissions are private and will never be published.</li>
      <li>Submissions that are not in the English language will be rejected.</li>
      <li>Processing may take up to 6 days.</li>
    </ol>

    <div>
      <app-button
        id="contact-form-submit"
        :disabled="disableStatus()"
        :button-class="isEmailValid()"
        class="fill-c wide"
        title="Get Initiated"
      />
    </div>

  </form>
</template>

<script>
import AppButton from '@/components/AppButton'
import axios from 'axios'

export default {
  components: {
    AppButton
  },
  data: function() {
    return {
      errors: [],
      firstName: null,
      lastName: null,
      email: null,
      answerA: null,
      answerB: null,
      answerC: null,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      isDisabled: true
    }
  },
  computed: {
    invitation: function() {
      if (!this.$route.query.id) {
        return '13060694016'
      } else {
        return this.$route.query.id
      }
    }
  },
  methods: {
    isEmailValid: function() {
      return this.email == ''
        ? ''
        : this.reg.test(this.email)
          ? 'valid-email'
          : 'invalid-email'
    },
    disableStatus: function() {
      return this.email == ''
        ? ''
        : this.reg.test(this.email)
          ? null
          : 'disabled'
    },
    response() {
      var vm = this
      var formElement = vm.$refs.formElement
      var formData = new FormData(formElement)
      var url =
        'https://docs.google.com/forms/d/e/1FAIpQLSc02pJW9A3vfC9nkzhkx5R3DajMl7vvO7kNCc5S9QWQ7rd4DA/formResponse'
      this.errors = []
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Invalid')
      } else {
        axios
          .post(url, formData)
          .then(function(response) {
            // console.log(response)
            $nuxt.$router.push('/initiation/confirmation')
            // window.location.href = '/success/'
          })
          .catch(function(error) {
            // console.log(error)
            $nuxt.$router.push('/initiation/confirmation')
            // window.location.href = '/success/'
          })
      }
    },
    validEmail: function(email) {
      return this.reg.test(this.email)
    }
  }
}
</script>

<style scoped lang="scss">
// form {
//   margin-bottom: 0;
//   padding: 0;
// }
// .form {
//   width: 70%;
//   margin: 8vh 15% 0;
//   .error {
//     font-size: $h9;
//     font-weight: 600;
//     margin-left: 10px;
//     letter-spacing: 0.5px;
//     text-transform: uppercase;
//     color: $black;
//     // background: $black;
//   }
// }

// input:valid {
//   // background: lighten($brand, 34);
//   background: none;
// }

.questions {
  margin-top: 8vh;
}

.application {
  margin-top: 13vh;
}

h3 {
  margin-top: 8vh;
  text-align: left;
}

h4 {
  @extend .h4;
  letter-spacing: 0;
  text-transform: capitalize;
  text-align: left;
  margin: 10vh 0 3vh;
}

.legal {
  font-size: $h6;
  // margin-top: 6vh;
  // margin-bottom: 6vh;
  line-height: 1.4rem;
}

button {
  display: block;
  margin-top: 13vh;
  margin-bottom: 8vh;
}

ol {
  margin: 8vh 0;
  font-size: $h8;
  line-height: 1rem;
  display: table;
  margin-left: 0;
  padding-left: 0;
  list-style: none;
  li {
    display: table-row;
    counter-increment: table-ol;
    &::before {
      content: counter(table-ol) '.';
      display: table-cell;
      padding-right: 1vw;
      padding-top: 1vh;
      text-align: right;
    }
  }
}
// input:required {
//   // box-shadow: 4px 4px 20px rgba(200, 0, 0, 0.85);
//   border-bottom: 1px solid red;
// }
</style>
