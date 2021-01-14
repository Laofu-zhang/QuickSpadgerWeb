/*
 * @Author: zhangyun
 * @Date: 2021-01-14 16:58:21
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-14 17:18:01
 * @FilePath: /REACT/react-admin-demo/src/components/Menu/index.js
 */
import React from 'react'
import './menu.scss'
export default function Menu(props) {
  const { children } = props
  return <div className="menu">{children}</div>
}
