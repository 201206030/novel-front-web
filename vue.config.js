const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack");
module.exports = defineConfig({
  devServer:{
    // 端口号的配置
		port:1024  
	},
  css: {
    sourceMap: true // 开启 CSS source map
  },
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "windows.jQuery":"jquery"
        })
    ]
}
})

