/*
 * @Author: zhangyun
 * @Date: 2021-01-22 15:29:29
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-22 15:59:19
 * @FilePath: /react-admin-demo/src/components/HeaderMenus/index.js
 */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Menu } from 'antd'
import './menus.scss'
const { SubMenu } = Menu
export default function Menus(props) {
  const { items, defaultActive } = props
  const history = useHistory()

  function historyPush(params) {
    history.push(params.key)
  }
  return (
    <Menu className="menus" defaultSelectedKeys={defaultActive} mode="horizontal" onSelect={historyPush} theme="dark">
      {items.map((item) => {
        if (!item.children) {
          return <Menu.Item key={item.key}>{item.name}</Menu.Item>
        } else {
          return (
            <SubMenu key={item.key} icon={item.icon} title={item.name}>
              {item.children.map((child) => {
                return <Menu.Item key={child.key}>{child.name}</Menu.Item>
              })}
            </SubMenu>
          )
        }
      })}
    </Menu>
  )
}
