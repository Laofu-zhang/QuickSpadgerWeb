/*
 * @Author: zhangyun
 * @Date: 2021-03-05 09:56:56
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-10 14:50:47
 * @Desc: 
 */
import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// style
import './App.css';
// pages
import Main from './pages/main'
import Hot from './pages/hot'
import Found from './pages/found'
import Detail from './pages/detail'
import Write from './pages/write'
// components
import Search from './components/Search'
import Menu from './components/Menu'
import User from './components/User'



function App() {
  const menus = [{
    name: '首页',
    path: '/home'
  },{
    name: '发现',
    path: '/hot'
  },{
    name: '热榜',
    path: '/found'
  }]
  return (
    <div className="App">
      <header className="App-header">
        <div className="container flex items-center mx-auto px-4">
          <div className="logo"></div>
          <div className="search container w-auto">
            <Search/>
          </div>
          <div className="menu container flex-1 h-full">
            <Menu data={menus}/>
          </div>
          <div className="user container w-60 h-full flex ">
            <User/>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4">
        <Switch>
          <Route path="/home/:type" component={Main} exact/>
          <Route path="/hot" component={Hot}/>
          <Route path="/found" component={Found}/>
          <Route path="/detail" component={Detail}/>
          <Route path="/write/:type" component={Write}/>
          <Redirect to="/home/literature" from="/home"/>
          <Redirect to="/write/home" from="/write"/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
