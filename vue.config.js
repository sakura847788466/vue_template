module.exports = {
  outputDir: 'upload',
  publicPath: './',
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      // 'vue': 'Vue',
      // 'axios': 'axios',
      // 'element': 'ELEMENT',
    },
  },
}