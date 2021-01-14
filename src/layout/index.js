/*
 * @Author: zhangyun
 * @Date: 2021-01-14 11:12:26
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-14 17:30:57
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
import InnerHome from '../views/Home'
import Header from '../components/Header'
import TopMenu from '../components/Menu'
import TopMenuItem from '../components/Menu/MenuItem'
const { Content } = Layout

const links = [
  {
    to: '/home',
    name: '首页',
  },
  {
    to: '/users',
    name: '用户',
  },
]
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
              <TopMenu>
                {links.map((link, i) => {
                  return (
                    <TopMenuItem key={i}>
                      <Link to={link.to}>{link.name}</Link>
                    </TopMenuItem>
                  )
                })}
              </TopMenu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <div className="site-layout-content">
                <Switch>
                  <Route exact path="/home">
                    <InnerHome />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                </Switch>
              </div>
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>admin ©2021 Created by 蒲月</Footer> */}
          </Layout>
        </div>
      </Router>
    )
  }
}
export default Home
