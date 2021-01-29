/*
 * @Author: zhangyun
 * @Date: 2021-01-26 17:30:59
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-27 14:34:28
 * @FilePath: /react-admin-demo/src/components/Search/index.js
 */
import React, { useState } from 'react'
import './search.scss'
import { get } from '../../axios'
import { SearchOutlined } from '@ant-design/icons'

export default function Search(props) {
  const { path } = props
  const [searchVal, setSearchVal] = useState('')
  function handleInput(e) {
    setSearchVal(e.target.value)
  }
  function handleSearch() {
    console.log('setSearchVal', searchVal)
    get('/search', searchVal)
  }
  return (
    <div className="search-container">
      <input placeholder="搜索" className="content" onChange={handleInput} />
      <button className="btn btn-search" onClick={handleSearch}>
        <SearchOutlined />
      </button>
    </div>
  )
}
