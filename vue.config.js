const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath:"/",
  configureWebpack: {
    resolve: {
      // alias: {
      //   '~': path.resolve(__dirname, '../frontend/src'),
      // },
      extensions: ['*', '.js', '.vue', '.json'],
    },
  },
  /*
  devServer: {
    allowedHosts: "all",
    proxy: {
      "^/project_name": {
        target: 'http://project_url/',
        changeOrigin: true,
        ws: false
      }
    }
  },
  */
})
