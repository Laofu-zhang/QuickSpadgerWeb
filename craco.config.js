/*
 * @Author: zhangyun
 * @Date: 2021-03-05 14:14:04
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-11 16:46:24
 * @Desc:
 */
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  devServer: {
    port: 4000,
    // proxy: {
    //   '/': {
    //     target: 'localhost:3000',
    //     changeOrigin: true,
    //   },
    // },
  },
}
