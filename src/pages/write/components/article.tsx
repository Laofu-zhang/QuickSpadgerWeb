/*
 * @Author: zhangyun
 * @Date: 2021-03-10 14:01:37
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-10 17:13:10
 * @Desc: 
 */
import React, {useEffect, useState} from 'react'
import E from 'wangeditor'
// 定义常量

function Article() {
  const [html, setHtml] = useState(null)
  useEffect(() => {
    const editor = new E('#edit-container')
    editor.config.height = 600
    editor.config.onchange = (newHtml:any) => {
      setHtml(newHtml)
    }
    editor.create()
  }, [])
  const handleSubmit = () => {
    console.log('change 之后最新的 html', html)
  }
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
      cursor-pointer"
      onClick={handleSubmit}>发布</div>
    </div>
  )
  
}

export default Article