/*
 * @Author: zhangyun
 * @Date: 2021-01-15 10:05:10
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-15 16:47:34
 * @FilePath: /react-admin-demo/webpack.base.config.js
 */
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  // 入口
  entry: path.resolve(__dirname, './src/main.js'),
  // 出口
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[chunkhash].chunk.js',
  },
  resolve: { extensions: ['*', '.ts', '.js', '.jsx', '.scss', '.css'] },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
      chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
    }),
  ],
  stats: 'minimal',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'cache-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
