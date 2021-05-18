module.exports = {
  /*
  ** Headers of the page
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://172.24.171.207:3000'
  },
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/micaiah.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  /*
  ** Customize the progress-bar color
  */
  css: ['highlight.js/styles/railscasts.css','~assets/css/assets.css', '~assets/css/common.less', '~assets/css/fontello.css'],
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    vendor: ['axios','highlight.js','marked'],
    extend (config, ctx) {
      // if (ctx.isClient) {
      //   config.module.rules.push({
      //     test: /\.vue$/,
      //     loader: 'vue-loader',
      //     options: require('./vue-loader.conf')
      //   })
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     exclude: /(node_modules)/
      //   })
      // }
      // if (ctx.isClient) { 
        
      // }
    }
  }
}
