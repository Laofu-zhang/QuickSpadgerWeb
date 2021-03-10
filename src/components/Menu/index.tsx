/*
 * @Author: zhangyun
 * @Date: 2021-03-05 17:16:10
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-09 16:05:26
 * @Desc: 
 */
import React from 'react'
import { Link } from "react-router-dom"
interface menuProps {
  name: string,
  path: string
}
function Menu (props:any) {
  const { data }= props
  return (
    <div className="menu-content container flex">
      {
        data.map((item:menuProps):any => {
          return <div className="menu-item ml-4 cursor hover:text-red-400" key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </div>
        })
      }
    </div>
  )
}

export default Menu