/*
 * @Author: zhangyun
 * @Date: 2021-01-15 10:05:40
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-02-09 16:53:24
 * @FilePath: /react-admin-demo/webpack.dev.config.js
 */
const webpackMerge = require('webpack-merge')
const baseWbpackConfig = require('./webpack.base.config')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = webpackMerge.merge(baseWbpackConfig, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: true,
    }),
  ],
  devServer: {
    hot: true,
    contentBase: './dist',
    compress: true,
    open: true,
    host: 'localhost',
    port: 9000,
    // 省略其他的配置
    historyApiFallback: true,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
      },
    },
  },
})
