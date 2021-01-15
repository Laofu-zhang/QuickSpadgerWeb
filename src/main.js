/*
 * @Author: zhangyun
 * @Date: 2021-01-14 10:01:07
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-14 15:38:36
 * @FilePath: /REACT/react-admin-demo/src/main.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
