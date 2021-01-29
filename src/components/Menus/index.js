/*
 * @Author: zhangyun
 * @Date: 2021-01-22 17:01:37
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-27 11:05:36
 * @FilePath: /react-admin-demo/src/components/Menus/index.js
 */
import React, { useState, useReducer, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import './menus.scss'
export default function Menus(props) {
  const { menuItems } = props
  const history = useHistory()
  const location = useLocation()
  const [menus, dispatchMenus] = useReducer((state, action) => {
    const resState = state.map((item) => {
      return {
        ...item,
        active: item.key === action.key ? true : false,
      }
    })
    return resState
  }, menuItems)

  useEffect(() => {
    const loadActiveMenu = () => dispatchMenus({ key: location.pathname }) // 加载激活菜单
    window.addEventListener('load', loadActiveMenu)
  })

  function handleLink(params) {
    history.push(params.key)
    dispatchMenus({ key: params.key })
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
