/*
 * @Author: zhangyun
 * @Date: 2021-03-09 16:03:58
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-09 16:43:33
 * @Desc: 
 */
import React from 'react'
import { useLocation } from 'react-router-dom'

function Detail() {
  const location = useLocation()
  let state:any
  state = location.state
  
  return <div className="detail">detail---{state.id}</div>
}

export default Detail