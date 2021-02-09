/*
 * @Author: zhangyun
 * @Date: 2021-01-27 11:26:47
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-02-09 13:49:59
 * @FilePath: /react-admin-demo/src/axios/index.js
 */
import request from './request'

export const post = (url, params) => {
  return request({
    url: url,
    method: 'POST',
    data: params,
  })
}

export const get = (url, params) => {
  return request({
    url: url,
    method: 'GET',
    params: params,
  })
}

export const put = (url, params) => {
  return request({
    url: url,
    method: 'PUT',
    data: params,
  })
}

export const remove = (url, id) => {
  return request({
    url: url,
    method: 'DELETE',
    params: { id: id },
  })
}
