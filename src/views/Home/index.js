/*
 * @Author: zhangyun
 * @Date: 2021-01-14 14:12:03
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-20 17:24:46
 * @FilePath: /react-admin-demo/src/views/Home/index.js
 */
import React, { useState } from 'react'
import { Skeleton, Card, Avatar, Popconfirm } from 'antd'
import { EditOutlined, SettingOutlined } from '@ant-design/icons'
import './home.scss'
const { Meta } = Card

export default function Home(props) {
  const { loading, setLoading } = useState
  return (
    <div>
      <Card
        hoverable
        style={{ width: 300, marginTop: 16, marginLeft: 16 }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<SettingButton />, <EditOutlined key="edit" onClick={onEdit} />]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </div>
  )
}
function SettingButton() {
  const cancel = () => {}
  const confirm = () => {}
  return (
    <Popconfirm title="是否设置为私有？" onConfirm={confirm} onCancel={cancel} okText="是" cancelText="否">
      <SettingOutlined />
    </Popconfirm>
  )
}
function onEdit() {
  console.log('onEdit')
}
