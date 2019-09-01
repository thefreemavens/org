<template>
  <form
    id="join"
    ref="formElement"
    class="form"
    @submit.prevent="response"
  >      
    <div
      v-scroll-reveal="{ duration: 1999, delay: 999 }"
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
      v-scroll-reveal="{ duration: 1999, delay: 1111 }"
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
      v-scroll-reveal="{ duration: 1999, delay: 1222 }"
      class="form-group">
      <input
        v-model="email"
        type="text"
        required="required"
        class="form-control"
        name="entry.1097449195"
        @blur.native="test()"
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

    <p
      v-scroll-reveal="{ duration: 1999, delay: 1333 }"
      class="legal">
      <b>Remember:</b> Our members consists of free, open minded and truth seekers with a shared goal that is aligned with our principles and what <nuxt-link to="/freemavenry">Freemavenry</nuxt-link> stands for.
    </p>

    <div v-scroll-reveal="{ duration: 2333, delay: 1666 }">
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
    // axios
  },
  data: function() {
    return {
      errors: [],
      firstName: null,
      lastName: null,
      email: null,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      isDisabled: true
    }
  },
  methods: {
    isEmailValid: function() {
      return this.email == ''
        ? null
        : this.reg.test(this.email)
          ? 'valid-email'
          : 'invalid-email'
    },
    disableStatus: function() {
      return this.email == ''
        ? null
        : this.reg.test(this.email)
          ? ''
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
            console.log(response)
            window.location.href = '/success/'
          })
          .catch(function(error) {
            console.log(error)
            window.location.href = '/success/'
          })
      }
    }
    // validEmail: function(email) {
    //   return this.reg.test(this.email)
    // }
  }
}
</script>

<style scoped lang="scss">
.form {
  width: 70%;
  margin: 8vh 15% 0;
  .error {
    font-size: $h9;
    font-weight: 600;
    margin-left: 10px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: $black;
    // background: $black;
  }
}

.legal {
  font-size: $h7;
  margin-top: 4vh;
  line-height: 1.2rem;
}
</style>
