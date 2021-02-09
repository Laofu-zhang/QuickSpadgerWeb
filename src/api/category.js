/*
 * @Author: zhangyun
 * @Date: 2021-02-09 13:43:10
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-02-09 14:49:13
 * @Desc:
 */
import { get, post, remove } from '../axios/index'
const url = '/category'
const getCategory = async (params) => {
  const res = await get(url, {
    id: params?.id || '',
    type: params?.type || '',
    name: params?.name || '',
  })
  return res
}
const createCategory = async (params) => {
  const url = '/category'
  const res = await post(url, {
    type: params?.type || '',
    name: params?.name || '',
    parentType: params?.parentType || '',
  })
  return res
}
const deleteCategory = async () => {
  const url = '/category'
  const res = await remove(url, id)
  return res
}
export { getCategory, createCategory, deleteCategory }
