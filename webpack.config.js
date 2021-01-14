const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  resolve: { extensions: ['*', '.ts', '.js', '.jsx', '.scss'] },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
  },
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
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            //越靠近底部越先执行
            loader: 'style-loader', //将JS字符串生成style节点
          },
          {
            loader: 'css-loader', //将Css转换为CommonJs模块
          },
          {
            loader: 'sass-loader', //将Sass编译成Css
          },
        ],
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
}
