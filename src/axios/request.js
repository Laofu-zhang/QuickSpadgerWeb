/*
 * @Author: zhangyun
 * @Date: 2021-01-27 11:18:47
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-27 14:08:16
 * @FilePath: /react-admin-demo/src/axios/request.js
 */
import axios from 'axios'
const BASE_URL = {
  development: 'http://127.0.0.1:80',
  production: 'http://127.0.0.2:80',
}
console.log('===BASE_URL===', BASE_URL[process.env.NODE_ENV])
const server = axios.create({
  baseURL: BASE_URL[process.env.NODE_ENV],
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
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default server
