/*
 * @Description: axios.js
 * @Author: 5t5
 * @Time: 2024/12/26 18:37
 */
// 引入axios库
// introduce the axios library
import axios from 'axios'
import handleError from './statusCodeFunctionMethod.js'

// 创建axios实例
// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 150000
})

// 请求拦截
// request interception
service.interceptors.request.use(
  (config) => {
    // 返回请求头
    return config
  },
  (err) => {
    console.log(err, 'request interception error')
    // 请求失败返回失败信息
    return Promise.reject(err)
  }
)

// 响应拦截
// response intercept
service.interceptors.response.use(
  (res) => {
    const isSuccess = res.status === 200
    return isSuccess ? res.data : Promise.reject(res)
  },
  async (err) => {
    console.log(err)

    if (err.response && err.response.status) await handleError(err)

    return Promise.reject(err)
  }
)

export default service
