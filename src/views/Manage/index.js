/*
 * @Author: zhangyun
 * @Date: 2021-01-20 17:27:32
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-02-22 17:25:40
 * @FilePath: /react-admin-demo/src/views/Manage/index.js
 */
import React, { useState } from 'react'
import './manage.scss'
import Editor from '../../components/Editor'
import { Tabs, Input, Button, Select } from 'antd'
import { FileWordOutlined, PlayCircleOutlined, FontColorsOutlined } from '@ant-design/icons'
import { set } from 'lodash'

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
  const [title, setTitle] = useState(null)
  const [content, setContent] = useState(null)
  function handleEditorChange(val) {
    console.log('html', val)
    setContent(val)
  }
  function handleTitleChange(val) {
    console.log('html', val)
    setTitle(val)
  }
  function pushContent() {
    console.log('pushContent', { title: title, content: content })
  }
  return (
    <div>
      <div className="title-content">
        <Input
          className="name"
          size="large"
          placeholder="请输入标题"
          prefix={<FontColorsOutlined />}
          onChange={handleTitleChange}
        />
        <Select
          className="category"
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </div>

      <Editor handleChange={handleEditorChange} />
      <Button type="primary" className="btn-submit" onClick={pushContent}>
        提交
      </Button>
    </div>
  )
}
