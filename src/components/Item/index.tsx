/*
 * @Author: zhangyun
 * @Date: 2021-03-09 15:20:47
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-12 10:35:11
 * @Desc: 
 */
import React from 'react'
import { useHistory } from 'react-router-dom'


function Item (props:any) {
  const {title, content, image, id} = props
  const history = useHistory()
  const handleLinkDetail = () => {
    history.push({pathname:'/detail', state: {id: id}})
  }
   return <div className="item flex mt-10 border-b-2 border-dashed border-gray-600">
    <div className="content flex-1">
      <h4 className="text-2xl font-mono cursor-pointer hover:text-red-400" onClick={handleLinkDetail}>{title}</h4>
      <p className="text-base font-mono text-gray-500">{content}</p>
    </div>
    {image && <div className="image h-60 bg-gray-400 rounded-lg w-60">{image}</div>}
  </div>
}

export default Item