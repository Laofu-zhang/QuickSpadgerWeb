/*
 * @Author: zhangyun
 * @Date: 2021-03-11 16:11:57
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-12 10:39:46
 * @Desc:
 */

export const get = async (url, params) => {
  const response = await fetch(url)
  try {
    if (response.ok) {
      const result = await response.json()
      console.log('=====GET OK=====', result)
      if (result.code !== 0) {
        throw '请求数据错误'
      }
      return result.data
    }
  } catch (e) {
    console.log('=====GET ERROR=====', e)
  }
}

export const post = async (url, data) => {
  let requestConfig = {
    credentials: 'include',
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(data),
  }
  const response = await fetch(url, requestConfig)
  try {
    const result = await response.json()
    console.log('=====POST=====', result)
    if (result.code !== 0) {
      throw '请求数据错误'
    }
    return result
  } catch (e) {
    console.log('=====POST ERROR=====', e)
  }
}
