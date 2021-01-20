/*
 * @Author: zhangyun
 * @Date: 2021-01-14 11:12:26
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-20 16:20:33
 * @FilePath: /react-admin-demo/src/layout/index.js
 */
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import './layout.scss'
import Users from '../views/Users'
import InnerHome from '../views/Home'
import Header from '../components/Header'
import TopMenu from '../components/Menu'
import TopMenuItem from '../components/Menu/MenuItem'
// icon
import { Nests } from '@icon-park/react'

const { Content } = Layout

// route
const links = [
  {
    to: '/',
    name: '首页',
  },
  {
    to: '/users',
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
            <Content>
              <div className="site-layout-content">
                <Switch>
                  <Route exact path="/">
                    <InnerHome />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                </Switch>
              </div>
            </Content>
          </Layout>
        </div>
      </Router>
    )
  }
}
