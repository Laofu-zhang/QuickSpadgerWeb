/*
 * @Author: zhangyun
 * @Date: 2021-01-14 10:01:24
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-14 11:21:07
 * @FilePath: /react-admin-demo/src/App.js
 */
import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './App.scss'
import Layout from './layout/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    )
  }
}

export default hot(module)(App)
