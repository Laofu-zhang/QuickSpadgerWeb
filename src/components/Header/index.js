/*
 * @Author: zhangyun
 * @Date: 2021-01-14 16:55:02
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-14 16:57:24
 * @FilePath: /REACT/react-admin-demo/src/components/Header/index.js
 */
import React from 'react'
import './header.scss'
export default function Header(props) {
  const { children } = props
  return <div className="header">{children}</div>
}
