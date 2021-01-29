/*
 * @Author: zhangyun
 * @Date: 2021-01-20 17:27:32
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-28 08:07:15
 * @FilePath: /react-admin-demo/src/views/Manage/index.js
 */
import React, { useState } from 'react'
import './manage.scss'
import Editor from '../../components/Editor'
import { Tabs, Input, Button } from 'antd'
import { FileWordOutlined, PlayCircleOutlined, FontColorsOutlined } from '@ant-design/icons'

const { TabPane } = Tabs

export default function Manage(props) {
  return (
    <div className="manage">
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <FileWordOutlined />
              文章
            </span>
          }
          key="1"
        >
          <ArticleEditor />
        </TabPane>
        <TabPane
          tab={
            <span>
              <PlayCircleOutlined />
              视频
            </span>
          }
          key="2"
        >
          Tab 2
        </TabPane>
      </Tabs>
    </div>
  )
}

function ArticleEditor(props) {
  function handleEditorChange(val) {
    console.log('html', val)
  }
  return (
    <div>
      <Input size="large" placeholder="请输入标题" prefix={<FontColorsOutlined />} />
      <Editor handleChange={handleEditorChange} />
      <Button type="dashed" className="btn-submit">
        提交
      </Button>
    </div>
  )
}
