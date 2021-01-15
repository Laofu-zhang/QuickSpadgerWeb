/*
 * @Author: zhangyun
 * @Date: 2021-01-14 14:12:03
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-15 09:40:44
 * @FilePath: /react-admin-demo/src/views/Home/index.js
 */
import React, { useState } from 'react'

export default function Home(props) {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(1)
  const [bool, setBool] = useState('false')
  function setAssign() {
    setNumber(count + number)
    setBool('true')
  }
  return (
    <div>
      home: {count}+{number} = {number}--------{bool}
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={setAssign}>=</button>
    </div>
  )
}
