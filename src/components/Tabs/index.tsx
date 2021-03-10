/*
 * @Author: zhangyun
 * @Date: 2021-03-09 14:05:01
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-10 16:58:42
 * @Desc: 
 */
import React from 'react'
import './tabs.scss'
import {NavLink, useLocation} from 'react-router-dom'

interface tabsProps {
  name: string,
  key: string,
  path: string
}

function Tabs(props:any) {
  const {data} = props
  const location = useLocation()
  const path = location.pathname
  const tabClick = (key:string):void=> {
    console.log(key)
  }
  return (
    <div className="tabs flex my-4">
      {data.map((item:tabsProps) => {
        return (
          <div 
          className={['tab-item', 'mr-2', 'px-3', 'py-1', 'cursor-pointer', 'hover:text-red-400', path === item.path && 'text-red-400'].join(' ')}
          key={item.key} 
          onClick={() => 
          tabClick(item.key)}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default Tabs