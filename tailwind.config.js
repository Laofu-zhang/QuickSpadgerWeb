/*
 * @Author: zhangyun
 * @Date: 2021-03-05 14:07:22
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-09 15:38:20
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
