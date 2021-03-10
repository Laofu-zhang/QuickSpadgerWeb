/*
 * @Author: zhangyun
 * @Date: 2021-03-05 10:57:54
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-09 15:57:50
 * @Desc: 
 */
import React from 'react'
import Tabs from '../../components/Tabs'
import {Switch, Route} from 'react-router-dom'

import Literature from '../literature'
import Digital from '../digital'
const tabs = [
  {
    name: '文学',
    key: 'literature',
    path: '/home/literature'
  },
  {
    name: '数码',
    key: 'digital',
    path: '/home/digital'
  },
]
function Main (props:any) {
  return (
    <div className="main page-in">
      <Tabs data={tabs}></Tabs>
      <div>
        <Switch>
          <Route path="/home/literature" component={Literature} exact></Route>
          <Route path="/home/digital" component={Digital}></Route>
        </Switch>
      </div>
    </div>
  )
}
export default Main