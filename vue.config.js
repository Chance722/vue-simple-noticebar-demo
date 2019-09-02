const px2rem = require('postcss-px2rem')

const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/vue-simple-noticebar-demo/'
  : '/'

module.exports = {
  publicPath: BASE_URL,
  css: {
    loaderOptions: {
        postcss: {
            plugins: [
              px2rem({
                remUnit: 100
              })
            ]
        }
    }
  }
}