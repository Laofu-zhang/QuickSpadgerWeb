/*
 * @Author: zhangyun
 * @Date: 2021-01-14 14:12:03
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-20 17:17:42
 * @FilePath: /react-admin-demo/src/views/Home/index.js
 */
import React, { useState } from 'react'
import { Carousel, Skeleton, Card, Avatar, Popconfirm, QuestionCircleOutlined } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import './home.scss'
const { Meta } = Card

export default function Home(props) {
  const maths = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const projectImgs = maths.map((item) => require('../../static/img/home/' + item + '.jpg'))
  const { loading, setLoading } = useState
  return (
    <div>
      {/* <Carousel autoplay>
        {projectImgs.map((item, i) => (
          <div className="adv-content">
            <img src={item.default} key={i} className="img-container" />
          </div>
        ))}
      </Carousel> */}
      <Waterfall>
        <Card
          hoverable
          style={{ width: 300, marginTop: 16, marginLeft: 16 }}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          actions={[
            // <SettingOutlined key="setting" onClick={onSetting} />,
            <SettingButton />,
            <EditOutlined key="edit" onClick={onEdit} />,
            <EllipsisOutlined key="ellipsis" onClick={onEllipsis} />,
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </Waterfall>
    </div>
  )
}
function SettingButton() {
  const cancel = () => {}
  const confirm = () => {}
  return (
    <div>
      <Popconfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <SettingOutlined />
      </Popconfirm>
    </div>
  )
}
function onEllipsis() {
  console.log('onEllipsis')
}
function onEdit() {
  console.log('onEdit')
}
function Waterfall(props) {
  const {
    waterfallWidth = 200,
    waterfallCol = 3,
    waterfallBottom = 10,
    waterfallRight = 10,
    imgs = [],
    waterfallDeviationHeight = [],
  } = props
  return (
    <div id="waterfall" className="waterfull-container">
      {props.children}
    </div>
  )
}
