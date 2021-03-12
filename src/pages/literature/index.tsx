/*
 * @Author: zhangyun
 * @Date: 2021-03-09 14:37:01
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-12 10:35:42
 * @Desc: 
 */
import React, {useEffect, useState} from 'react'
import Item from '../../components/Item'
import {get} from '../../utils/request'

interface literatureContentProps {
  title: string,
  html: string,
  desc: string,
  _id: string,
  image?: string
}
function Literature () {
  const [literatures, setLiteratures] = useState([])
  useEffect(()=> {
    getLiteratures()
  }, [])
  const getLiteratures = async () => {
    const res = await get('http://localhost:3000/article')
    setLiteratures(res)
  }
  return <div className="literature">
    {literatures.map((item: literatureContentProps) => {
      return <Item 
      title={item.title} 
      content={item.desc} 
      image={item.image} 
      id={item._id} 
      key={item._id}/>
    })}
  </div>
}
export default Literature