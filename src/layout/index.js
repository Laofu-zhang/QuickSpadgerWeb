/*
 * @Author: zhangyun
 * @Date: 2021-01-14 11:12:26
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-14 16:24:25
 * @FilePath: /REACT/react-admin-demo/src/layout/index.js
 */
import React, { Component } from 'react'
// import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import './layout.scss'
import Users from '../views/Users'
import Settings from '../views/Settings'

const { Header, Content, Footer } = Layout
class Home extends Component {
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
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Link to="/users">首页</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/settings">设置</Link>
                </Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <div className="site-layout-content">
                <Switch>
                  <Route exact path="/users">
                    <Users />
                  </Route>
                  <Route path="/settings">
                    <Settings />
                  </Route>
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>admin ©2021 Created by 蒲月</Footer>
          </Layout>
        </div>
      </Router>
    )
  }
}
export default Home
