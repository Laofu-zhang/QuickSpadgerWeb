/*
 * @Author: zhangyun
 * @Date: 2021-01-15 10:05:10
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-15 16:17:55
 * @FilePath: /react-admin-demo/webpack.base.config.js
 */
const webpack = require('webpack')
const path = require('path')
module.exports = {
  // 入口
  entry: path.resolve(__dirname, './src/main.js'),
  // 出口
  output: {
    path: path.join(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  resolve: { extensions: ['*', '.ts', '.js', '.jsx', '.scss'] },
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
        test: /\.css$/,
        use: ['style-loader', 'cache-loader', 'css-loader'],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'cache-loader', 'sass-loader'],
      },
    ],
  },
}
