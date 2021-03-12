/*
 * @Author: zhangyun
 * @Date: 2021-03-10 14:01:37
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-12 15:23:14
 * @Desc: 
 */
import React, {useEffect, useState} from 'react'
import { post } from '../../../utils/request'
import E from 'wangeditor'
import Alert from '../../../components/Alert'
// 定义常量

function Article() {
  const [html, setHtml] = useState(null)
  const [title, setTitle] = useState(null)
  const [desc, setDesc] = useState(null)
  const [message, setMessage] = useState('')
  const [alertType, setAlertType] = useState('')
  useEffect(() => {
    const editor = new E('#edit-container')
    editor.config.height = 600
    editor.config.onchange = (newHtml:any) => {
      setHtml(newHtml)
    }
    editor.create()
  }, [])
  const handleSubmit = async () => {
    const res = await post('http://localhost:3000/article', 
    { html: html, 
      date: new Date(), 
      desc: desc, 
      title: title
    })

    console.log('---res---', res)
    if (res.code === 0) {
      setAlertType('success')
      setMessage(res.message)
    } else {
      setAlertType('error')
      setMessage(res.message)
    }
  }
  const handleInputTitle = (e:any) => {
    setTitle(e.target.value)
  }
  const handleInputDesc = (e:any) => {
    setDesc(e.target.value)
  }
  return (
    <div className="article" >
      <input onInput={handleInputTitle} placeholder="请输入标题" className="p-2 block border-solid border-b-4 border-gray-600"/>
      <textarea onInput={handleInputDesc} placeholder="请输入文章描述" className="p-2 block outline-none w-1/2 my-3 border-solid border-4 rounded border-gray-600"/>
      <div id="edit-container" className="border-solid border-4 rounded border-gray-600"></div>
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
      <Alert type={alertType} message={message}/>
    </div>
  )
  
}

export default Article