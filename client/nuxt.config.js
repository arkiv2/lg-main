require('dotenv').config()
const { join, resolve } = require('path')
const { copySync, removeSync } = require('fs-extra')
import fs from 'fs'

module.exports = {

  server: {
    //change `<hostname>` with your generated domain by valet
    hostname : "0.0.0.0",
    port: process.env.APP_PORT, // default: 3000,
    /* https: {
      //change `<username>` with your machine username
      key: fs.readFileSync(resolve(process.env.KEY_PATH, process.env.HOSTNAME + '.key')),
      cert: fs.readFileSync(resolve(process.env.CERT_PATH, process.env.HOSTNAME + '.crt'))
    } */
  },

  publicRuntimeConfig: {
    apiURL: process.env.API_URL || process.env.APP_URL,
    production_domain : process.env.PRODUCTION_DOMAIN || 'Lazy Goat',
  },

  watchers: {
    webpack: {
      poll: true
    }
  },

  ssr: true,

  srcDir: __dirname,

  env: {
    apiUrl: process.env.API_URL || process.env.APP_URL + '/api',
    appName: process.env.APP_NAME || 'Lazy Goat',
    appLocale: process.env.APP_LOCALE || 'en'
  },

  head: {
    title: process.env.APP_NAME,
    titleTemplate: '%s | ' + process.env.APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lazy Goat' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: 'DodgerBlue',
    height : '10px',
    duration: 3000,
    continuous: true
  },
  /* loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  }, */

  router: {
    middleware: ['locale', 'check-auth']
  },

  css: [
    { src: '~assets/sass/app.scss',  lang : 'scss' }
  ],

  plugins: [
    '~plugins/i18n',
    '~plugins/axios',
    '~plugins/fontawesome',
    '~plugins/nuxt-client-init'
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/router',
    '@nuxtjs/style-resources'
  ],

  //buildModules: ['@nuxtjs/style-resources'],

  /* bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  }, */

  styleResources: {
    scss: [
      '~/node_modules/bootstrap/scss/_functions.scss',
      '~/node_modules/bootstrap/scss/_variables.scss',
      '~/node_modules/bootstrap/scss/_mixins.scss',
      '~/node_modules/bootstrap/scss/_containers.scss',
      '~/node_modules/bootstrap/scss/_grid.scss',
      '~/node_modules/bootstrap/scss/bootstrap.scss',
      '~/node_modules/bootstrap-vue/src/index.scss',
      //'~/assets/sass/*.scss'
    ]
  },

  build: {
    extractCSS: true
  },

  hooks: {
    generate: {
      done (generator) {
        // Copy dist files to public/_nuxt
        if (generator.nuxt.options.dev === false && generator.nuxt.options.mode === 'spa') {
          const publicDir = join(generator.nuxt.options.rootDir, 'public', '/')
          removeSync(publicDir)
          copySync(join(generator.nuxt.options.generate.dir, '/'), publicDir)
          copySync(join(generator.nuxt.options.generate.dir, '200.html'), join(publicDir, 'index.html'))
          removeSync(generator.nuxt.options.generate.dir)
        }
      }
    }
  }
}
