/*
 * @Author: zhangyun
 * @Date: 2021-02-09 13:51:19
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-02-09 17:26:20
 * @Desc:
 */
import React, { useState, useEffect, useRef } from 'react'
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
  const [loading, setLoading] = useState(false)
  const editRef = useRef(null)

  useEffect(async () => {
    const res = await getCategory()
    setData(res)
  }, [])
  const showEditCategory = () => {
    setVisible(true)
  }
  const onConfirm = async (props) => {
    setLoading(true)
    await createCategory(props)
    const res = await getCategory()
    setData(res)
    setVisible(false)
    setLoading(false)
    editRef.current.onReset()
    // console.log('editRef', editRef.current.onReset())
  }
  const onCancel = () => {
    setVisible(false)
  }

  return (
    <div className="category-container">
      <div className="header-operator">
        <Button onClick={showEditCategory}>增加分类</Button>
      </div>
      {!data.length ? <Empty /> : <Table columns={columns} dataSource={data} />}
      <EditCategory
        ref={editRef}
        visible={visible}
        loading={loading}
        onConfirm={onConfirm}
        onCancel={onCancel}
      ></EditCategory>
    </div>
  )
}
