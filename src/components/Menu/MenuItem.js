/*
 * @Author: zhangyun
 * @Date: 2021-01-14 16:58:32
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-14 17:16:54
 * @FilePath: /REACT/react-admin-demo/src/components/Menu/MenuItem.js
 */
import React from 'react'
import './menu.scss'
export default function MenuItem(props) {
  const { children } = props
  return <div className="menu-item">{children}</div>
}
