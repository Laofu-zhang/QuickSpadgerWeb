/*
 * @Author: zhangyun
 * @Date: 2021-03-05 14:14:04
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-09 14:16:14
 * @Desc:
 */
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
}
