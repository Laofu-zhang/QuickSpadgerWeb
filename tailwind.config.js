/*
 * @Author: zhangyun
 * @Date: 2021-03-05 14:07:22
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-12 15:14:54
 * @Desc:
 */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
      },
    },
    inset: {
      '1/2': '50%',
      0: 0,
    },
  },
  variants: {
    extend: {},
    outline: ['focus', 'responsive', 'hover'],
    transitionDuration: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
  corePlugins: {
    // ...
    transitionDuration: false,
  },
}
