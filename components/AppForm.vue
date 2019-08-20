<template>
  <form
    id="join"
    ref="formElement"
    class="form"
    @submit.prevent="response"
  >      
    <div class="form-group">
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
      <!-- <label class="control-label" for="input">Textfield</label><i class="bar"></i> -->
    </div>

    <!--     <p class="legal">
    <b>Remember:</b> The Free Mavens is not for everyone. Our community consists of free, open minded and truth seekers with a shared goal that is inline with both the <nuxt-link to="/be-a-maven">Mavenry</nuxt-link> ideology and our <nuxt-link to="/structure">method of organization</nuxt-link>. Please take a short read and decide if Freemavenry is for you.
    </p> -->

    <app-button
      id="contact-form-submit"
      class="line-w"
      title="Get Initiated"
    />

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
      email: null
    }
  },
  methods: {
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
    },
    validEmail: function(email) {
      // eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email)
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  // margin: 80px auto;
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
  font-size: $h6;
}
</style>
