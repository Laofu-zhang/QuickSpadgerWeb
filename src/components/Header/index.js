/*
 * @Author: zhangyun
 * @Date: 2021-01-14 16:55:02
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-15 09:06:03
 * @FilePath: /react-admin-demo/src/components/Header/index.js
 */
import React, { Fragment } from 'react'
import './header.scss'
export default function Header(props) {
  const { children, icon } = props
  return (
    <div className="header">
      <div className="icon-content">{icon}</div>
      <div className="menu-content">{children}</div>
    </div>
  )
}
