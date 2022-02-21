import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollReveal, {
  class: 'reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1666,
  scale: 0.96,
  // delay: 150,
  // distance: '10px',
  mobile: true
})
