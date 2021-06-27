export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // buildDir: '../app/static/dist',
  // indexPath: '../app/templates/index.html',
  // publicPath: process.env.NODE_ENV === 'production' ? '../app/static/' : '../app/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/api.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/jwt/create/',
            method: 'post',
            propertyName: 'access',
            altProperty: 'refresh'
          },
          logout: {},
          user: {
            url: '/api/auth/users/me/',
            method: 'get',
            propertyName: false
          }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8000'
    // proxy: true,
    // credentials: true,
    // proxyHeaders: {
    //   'Content-Type': 'application/json',
    //   'X-Requested-With': 'XMLHttpRequest'
    // }
  },

  proxy: {
    '/api/': 'http://localhost:8000'
    // '/api-auth/': 'http://localhost:8000'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
