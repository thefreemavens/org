/* eslint-disable no-unused-vars */
// VeeValidate Config
// Source: https://logaretm.github.io/vee-validate/guide/basics.html

import {
  extend,
  // ValidationObserver,
  // ValidationProvider,
  // localize
} from 'vee-validate'

import {
  required,
  email,
  confirmed,
  alpha,
  // eslint-disable-next-line camelcase
  alpha_spaces,
  numeric,
} from 'vee-validate/dist/rules'

// Install rules
// extend('required', required)
extend('required', {
  ...required,
  message: 'This field is required',
})
// extend('email', email)
extend('email', {
  ...email,
  message: 'Valid email addresses only',
})
// extend('alpha', alpha)
extend('alpha', {
  ...alpha,
  message: 'Alphabet characters only',
})
extend('confirmed', confirmed)

// extend('alpha_spaces', alpha_spaces)
extend('alpha_spaces', {
  // eslint-disable-next-line camelcase
  ...alpha_spaces,
  message: 'Alphabet characters only',
})

extend('numeric', {
  // eslint-disable-next-line camelcase
  ...numeric,
  message: 'Valid invitations only',
})

// extend('min', min)
