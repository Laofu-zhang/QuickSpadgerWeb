/*
 * @Author: zhangyun
 * @Date: 2021-03-09 10:50:54
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-10 14:07:25
 * @Desc: 
 */
import React from 'react'
import { WritingFluently } from '@icon-park/react'
import { Link } from 'react-router-dom'
// components
import Dropdown from '../Dropdown'
const userMenus = [
  {name: '个人信息', value: 'userinfo'},
  {name: '设置', value: 'setting'},
]
function User () {
  return (
    <div className="user w-60 h-10 flex justify-between ">
      <WriteArticleBtn/>
      <Dropdown items={userMenus}>
        <div className="w-10 h-10 bg-green-300 rounded-lg"></div>
      </Dropdown>
    </div>
  )
}
function WriteArticleBtn() {
  return (
    <Link to="/write" target="_blank">
      <div className="write-btn flex h-10 w-32 bg-red-400 cursor-pointer hover:bg-red-600 rounded-full py-2 justify-center ">
        <WritingFluently theme="outline" size="24" fill="#fff"/>
        <span className="text-base ml-2">写文章</span>
      </div>
    </Link>
  )
}

export default User