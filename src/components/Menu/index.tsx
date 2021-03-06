/*
 * @Author: zhangyun
 * @Date: 2021-03-05 17:16:10
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-10 16:54:47
 * @Desc: 
 */
import React from 'react'
import { Link, useLocation } from "react-router-dom"
interface menuProps {
  name: string,
  path: string
}
function Menu (props:any) {
  const { data }= props
  const location = useLocation()
  const path = location.pathname.split('/')[1]
  return (
    <div className="menu-content container flex">
      {
        data.map((item:menuProps):any => {
          return <div className={['menu-item', 'ml-4', 'cursor', 'hover:text-red-400', '/'+path === item.path && 'text-red-400'].join(' ')} key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </div>
        })
      }
    </div>
  )
}

export default Menu