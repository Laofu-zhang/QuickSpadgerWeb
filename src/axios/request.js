/*
 * @Author: zhangyun
 * @Date: 2021-01-27 11:18:47
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-02-09 14:56:48
 * @FilePath: /react-admin-demo/src/axios/request.js
 */
import axios from 'axios'
import { message } from 'antd'
const BASE_URL = {
  development: 'http://localhost:3000',
  production: 'http://127.0.0.2:80',
}
console.log('===BASE_URL===', BASE_URL[process.env.NODE_ENV])
const server = axios.create({
  // baseURL: BASE_URL[process.env.NODE_ENV],
  timeout: 10000,
})
// 请求拦截
server.interceptors.request.use(
  (config) => {
    console.log('===request===', config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截
server.interceptors.response.use(
  (response) => {
    const res = response.data
    console.log('===response===', res)
    if (res.code === -1) {
      message.error(res.message)
    }
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default server
