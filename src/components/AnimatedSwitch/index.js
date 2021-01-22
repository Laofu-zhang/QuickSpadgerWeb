/*
 * @Author: zhangyun
 * @Date: 2021-01-22 14:26:42
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-22 14:28:22
 * @FilePath: /react-admin-demo/src/components/AnimatedSwitch/index.js
 */
import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import './animatedSwitch.scss'

const AnimatedSwitch = (props) => {
  const { children } = props
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames={props.type || 'fade'} timeout={props.duration || 300}>
            <Switch location={location}>{children}</Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  )
}
export default AnimatedSwitch
