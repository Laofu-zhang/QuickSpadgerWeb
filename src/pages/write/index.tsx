/*
 * @Author: zhangyun
 * @Date: 2021-03-10 09:41:36
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-10 14:50:39
 * @Desc: 
 */
import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import './write.scss'

// components
import Home from './components/home'
import EditArticle from './components/article'
import EditMusic from './components/music'
import EditVideo from './components/video'

const editTypes = [
  {name: '首页', key: 'home'},
  {name: '发布博文', key: 'article'},
  {name: '上传视频', key: 'video'},
  {name: '上传音乐', key: 'music'},
]
// interface props
interface typeProps  {
  name: string,
  key: string
}
function WriteArticle () {
  return (
    <div className="write flex">
      <TypeMenu/>
      <div className="contianer p-6">
        <Switch>
          <Route path="/write/home" component={Home} exact/>
          <Route path="/write/article" component={EditArticle}/>
          <Route path="/write/music" component={EditMusic}/>
          <Route path="/write/video" component={EditVideo}/>
        </Switch>
      </div>
    </div>
  )
}

function TypeMenu () {
  const history = useHistory()
  const linkEditPage = (key:any) => {
    history.push(`/write/${key}`)
  }
  return <div className="type-menu-container w-32">
    {
      editTypes.map((item:typeProps) => {
        return (
          <div className="type-item p-2 w-full cursor-pointer text-center hover:text-green-400" 
          key={item.key} 
          onClick={() => {linkEditPage(item.key)}}>
            {item.name}
          </div>
        )
      })
    }
  </div>
}

export default WriteArticle