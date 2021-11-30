module.exports = {
  configureWebpack: config => {
    config.externals = {
      '@vue/composition-api': '@vue/composition-api'
    }
  }
}