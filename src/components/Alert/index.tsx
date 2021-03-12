/*
 * @Author: zhangyun
 * @Date: 2021-03-12 10:42:40
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-12 16:21:03
 * @Desc: 
 */
import React, { useState, useRef, useEffect, useMemo } from 'react'
import {Close} from '@icon-park/react'

const types:any = {
  success:'bg-green-400',
  error:'bg-red-400',
  warring:'bg-orange-400',
}
function Alert (props:any) {
  const {type, message} = props
  const alertNode = useRef(null)
  const [state, setState] = useState(false)
  const [_type, setType] = useState(type)
  const [_message, setMessage] = useState(message)

  useEffect(() => {
    console.log('==', _message, _type)
    if (_type && _message) {
      setState(true)
    } 
  })
  // type
  const setTypeName = ():string => {
    const typeStr:any = types[type]
    return typeStr
  }
  // close
  const handleClose = (e:any) => {
    setState(false)
    setType('')
    setMessage('')
  }

  return (
    <React.Fragment>
      {state && <div className={[
        'flex',
        'alert', 
        'fixed', 
        'rounded', 
        'top-0', 
        'left-1/2',
        'text-white', 
        'text-center',  
        'py-2',
        'pl-2',
        'm-2', setTypeName()].join(' ')}
        id="alert"
        ref={alertNode}
        >
        <span className="mr-10">{message}</span>
        <Close onClick={handleClose} theme="outline" size="12" fill="#fff" strokeLinecap="square" className="mr-2 cursor-pointer"/>
      </div>}
      </React.Fragment>
  )
}

export default Alert