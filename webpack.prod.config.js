/*
 * @Author: zhangyun
 * @Date: 2021-01-15 10:05:24
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-15 16:17:19
 * @FilePath: /react-admin-demo/webpack.prod.config.js
 */
const webpackMerge = require('webpack-merge')
const baseWbpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = webpackMerge.merge(baseWbpackConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        antd: {
          priority: 20,
          name: 'antd',
          test: /antd/,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
      inject: true,
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
})
