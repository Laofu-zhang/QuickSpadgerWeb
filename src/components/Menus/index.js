/*
 * @Author: zhangyun
 * @Date: 2021-01-22 17:01:37
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-26 17:26:27
 * @FilePath: /react-admin-demo/src/components/Menus/index.js
 */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './menus.scss'
export default function Menus(props) {
  const { menuItems } = props
  const [menus, setMenus] = useState([...menuItems])
  const history = useHistory()

  function handleLink(params) {
    history.push(params.key)
    setMenus((target) => {
      return target.map((menu) => {
        if (menu.key === params.key) {
          return {
            ...menu,
            active: true,
          }
        } else {
          return {
            ...menu,
            active: false,
          }
        }
      })
    })
  }
  return (
    <div className="menu-container">
      {menus.map((menuItem) => {
        return (
          <div
            className={['menu-item-container', menuItem.active && 'actived'].join(' ')}
            onClick={(e) => handleLink(menuItem)}
            key={menuItem.key}
          >
            {menuItem.name}
          </div>
        )
      })}
    </div>
  )
}
