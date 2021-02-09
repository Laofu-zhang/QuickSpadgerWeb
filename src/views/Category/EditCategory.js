/*
 * @Author: zhangyun
 * @Date: 2021-02-09 16:23:09
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-02-09 16:45:53
 * @Desc:
 */

import React, { useState } from 'react'
import { Button, Modal, Input, Form } from 'antd'
import _ from 'lodash'
// 添加弹框
export default function AddDialog(props) {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  }
  const [loading, setLoading] = useState(false)
  const [fields, setFields] = useState([
    {
      name: 'name',
      value: '',
    },
    {
      name: 'type',
      value: '',
    },
    {
      name: 'parentType',
      value: '',
    },
  ])
  const [submitParams, setSubmitParams] = useState({})
  const handleOk = () => {
    props.onConfirm(submitParams)
  }
  const handleCancel = async () => {
    props.onCancel(false)
  }
  const onChange = (fields) => {
    setSubmitParams({
      name: getFormItemValue(fields, 'name'),
      type: getFormItemValue(fields, 'type'),
      parentType: getFormItemValue(fields, 'parentType'),
    })
  }
  const getFormItemValue = (target, key) => {
    return _.find(target, { name: [key] }).value
  }
  return (
    <Modal
      visible={props.visible}
      title="添加分类"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          返回
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          提交
        </Button>,
      ]}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        fields={fields}
        onFieldsChange={(_, allFields) => {
          onChange(allFields)
        }}
      >
        <Form.Item label="分类名称" name="name" rules={[{ required: true, message: '请输入分类名称' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="分类标志" name="type" rules={[{ required: true, message: '请输入分类标志' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="父类标志" name="parentType" rules={[{ message: '请选择父类' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}
