/*
 * @Author: zhangyun
 * @Date: 2021-02-09 13:51:19
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-02-09 16:51:24
 * @Desc:
 */
import React, { useState, useEffect } from 'react'
import { Table, Button, Empty } from 'antd'
import { getCategory, createCategory } from '../../api/category'
import EditCategory from './EditCategory'
import './category.scss'
const columns = [
  {
    title: '_id',
    key: '_id',
    dataIndex: '_id',
  },
  {
    title: 'name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'type',
    key: 'type',
    dataIndex: 'type',
  },
  {
    title: 'parentType',
    key: 'parentType',
    dataIndex: 'parentType',
  },
]

export default function Category(props) {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)
  useEffect(async () => {
    const res = await getCategory()
    setData(res)
  }, [])
  useEffect(() => {
    console.log('===child===', visible)
  })
  function addCategory() {
    setVisible(true)
  }
  const onConfirm = async (props) => {
    await createCategory(props)
    const res = await getCategory()
    setData(res)
    setVisible(false)
  }
  const onCancel = () => {
    setVisible(false)
  }
  return (
    <div className="category-container">
      <div className="header-operator">
        <Button onClick={addCategory}>增加分类</Button>
      </div>
      {!data.length ? <Empty /> : <Table columns={columns} dataSource={data} />}
      <EditCategory visible={visible} onConfirm={onConfirm} onCancel={onCancel}></EditCategory>
    </div>
  )
}
