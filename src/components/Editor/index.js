/*
 * @Author: zhangyun
 * @Date: 2021-01-27 14:53:56
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-02-22 17:36:38
 * @FilePath: /react-admin-demo/src/components/Editor/index.js
 */
import React, { useState, useEffect, useRef } from 'react'
import E from 'wangeditor'

export default function Editor(props) {
  const editorRef = useRef()
  const { handleChange } = props
  useEffect(() => {
    initEdit()
  }, '')

  function initEdit() {
    const elem = document.getElementById('editorRef')
    const editor = new E(elem)
    editor.config.onchange = (current) => {
      handleChange(current)
    }
    editor.create()
  }
  return <div id="editorRef" ref={editorRef} style={{ textAlign: 'left' }} className="editor-content"></div>
}
