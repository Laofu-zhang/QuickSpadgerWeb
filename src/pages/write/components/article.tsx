/*
 * @Author: zhangyun
 * @Date: 2021-03-10 14:01:37
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-10 15:12:29
 * @Desc: 
 */
import React, {useEffect} from 'react'
import E from 'wangeditor'
// 定义常量

function Article() {
  useEffect(() => {
    const editor = new E('#edit-container')
    editor.config.height = 600
    editor.create()
  }, [])

  return (
    <div className="article" >
      <div id="edit-container"></div>
      <div 
      className="bg-green-500 
      rounded-full 
      py-2 
      px-4 
      w-20 
      my-4 
      text-center 
      text-white 
      md:shadow-lg 
      hover:shadow-inner
      cursor-pointer">发布</div>
    </div>
  )
  
}

export default Article