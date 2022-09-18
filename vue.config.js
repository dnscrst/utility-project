const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api/": {
        target: "https://quizz.testenv.ro/api/",
        pathRewrite: { '^/api': '' }
      }
    }
  }
})
