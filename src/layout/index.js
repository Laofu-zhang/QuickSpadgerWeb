/*
 * @Author: zhangyun
 * @Date: 2021-01-14 11:12:26
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-22 15:48:40
 * @FilePath: /react-admin-demo/src/layout/index.js
 */
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import './layout.scss'
import Users from '../views/Users'
import Manage from '../views/Manage'
import InnerHome from '../views/Home'
import Header from '../components/Header'
import AnimatedSwitch from '../components/AnimatedSwitch'
import HeaderMenus from '../components/HeaderMenus'

// icon
import { Nests } from '@icon-park/react'

const { Content } = Layout

// route
const links = [
  {
    key: '/',
    name: '首页',
  },
  {
    key: '/manage',
    name: '管理',
  },
  {
    key: '/users',
    name: '用户',
  },
]
export default class Home extends Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <Router>
        <div className="layout">
          <Layout className="layout">
            <Header icon={<Nests theme="outline" size="24" fill="#fff" />}>
              <HeaderMenus items={links} defaultActive="/" />
            </Header>
            <Content>
              <AnimatedSwitch>
                <Route exact path="/">
                  <InnerHome />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/manage">
                  <Manage />
                </Route>
              </AnimatedSwitch>
            </Content>
          </Layout>
        </div>
      </Router>
    )
  }
}
