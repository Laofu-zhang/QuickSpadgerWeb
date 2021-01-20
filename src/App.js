/*
 * @Author: zhangyun
 * @Date: 2021-01-14 10:01:24
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-18 09:40:25
 * @FilePath: /react-admin-demo/src/App.js
 */
import React, { Component, Fragment } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router'
import { hot } from 'react-hot-loader'
import './App.scss'
import Home from './layout/index'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    )
  }
}

export default hot(module)(App)
