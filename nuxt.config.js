const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'The Free Mavens',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Be a Maven @TheFreemavens. #freemavenry' },
      { name: 'apple-mobile-web-app-title', content: 'TheFreemavens.org' },
      { name: 'application-name', content: 'TheFreemavens.org' },
      { hid: 'og:title', property: 'og:title', content: 'TheFreemavens.org'},
      { hid: 'og:url', property: 'og:url', content: 'https://thefreemavens.org'},
      { hid: 'og:image', property: 'og:image', content: 'https://thefreemavens.org/images/thefreemavens-poster.jpg'},
      { hid: 'og:description', property: 'og:description', content: 'Be a Maven @TheFreemavens. #freemavenry'},
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'twitter:site', content: '@thefreemavens'},
      { name: 'twitter:title', content: 'TheFreemavens.org'},
      { name: 'twitter:description', content: 'Be a Maven @TheFreemavens https://thefreemavens.org #freemavenry'},
      { name: 'twitter:image', content: 'https://thefreemavens.org/images/thefreemavens-poster.jpg'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#6342ff' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#6342ff' }
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700|Roboto:100,300,400,500,700' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#6342FF' },
  loading: false,

  /*
  ** Global CSS
  */
  css: [
    // SCSS file in the project
    // '@/assets/scss/main.scss',
    // '~/assets/scss/vars.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-scrollto.js',
    { src: '~plugins/ga.js', ssr: false },
    { src: '~/plugins/vue-scroll-reveal', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
  ],
  // axios: {
  //   // See https://github.com/nuxt-community/axios-module#options
  // },
  styleResources: {
     // your settings here
    scss: [
      './assets/scss/main.scss'
    ],
  },
  pwa: {
    icon: false,
    meta: false,
    manifest: false
  },
  sitemap: {
    hostname: 'https://thefreemavens.org',
    gzip: true
  },

  /*
  ** Build configuration
  */
  generate: {
    dir: 'docs'
  },
  /*
  ** Build configuration
  */
  build: {
    // analyze: true,
    cache: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
