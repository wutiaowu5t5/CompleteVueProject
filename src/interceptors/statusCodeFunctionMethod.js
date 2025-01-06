/*
 * @Description: statusCodeFunctionMethod.js 状态码函数方法
 * @Author: 5t5
 * @Time: 2025/1/6 15:35
 */

// 引入ant-design-vue的message组件
// introduce the message component of ant design vue
import { message } from 'ant-design-vue'

// TODO: 要根据不同的状态码对vue文件里面的状态或者是storage里面的数据及进行清除以及修改对应路由

const errorStrategies = {
  400: async () => {
    // 400 Bad Request: 请求格式错误，服务器无法理解。通常需要检查请求参数是否正确
    await message.error('请求格式错误，请检查请求参数是否正确')
  },
  401: async () => {
    // 401 Unauthorized: 未授权，请求需要用户认证。通常需要引导用户登录或提供正确的认证信息
    await message.error('未授权，请检查用户是否登录或认证信息是否正确')
  },
  403: async () => {
    // 403 Forbidden: 服务器理解请求，但拒绝执行。通常是因为权限问题，需要检查用户是否有权限访问该资源
    await message.error('服务器拒绝执行请求，请检查用户是否有权限')
  },
  404: async () => {
    // 404 Not Found: 请求的资源不存在。通常需要检查URL是否正确或资源是否已被删除
    await message.error('资源不存在，请检查URL或资源是否存在')
  },
  405: async () => {
    // 405 Method Not Allowed: 请求方法不被允许。通常需要检查请求方法是否正确
    await message.error('请求方法不被允许，请检查请求方法是否正确')
  },
  408: async () => {
    // 408 Request Timeout: 请求超时。通常需要增加请求超时时间或优化请求
    await message.error('请求超时')
  },
  500: async () => {
    // 500 Internal Server Error: 服务器内部错误。通常需要检查服务器日志以找出问题
    await message.error('服务器内部错误，请检查服务器日志以找出问题')
  },
  502: async () => {
    // 502 Bad Gateway: 网关错误。通常需要检查网关配置或后端服务状态
    await message.error('网关错误，请检查网关配置或后端服务状态')
  },
  503: async () => {
    // 503 Service Unavailable: 服务不可用。通常需要检查服务器负载或后端服务状态
    await message.error('服务不可用，请检查服务器负载或后端服务状态')
  },
  504: async () => {
    // 504 Gateway Timeout: 网关超时。通常需要增加网关超时时间或优化后端服务
    await message.error('网关超时，请检查网关配置或后端服务状态')
  },
  999: async (err) => {
    await message.error(err.response)
  }
}

const handleError = async (err) => {
  const status = err.response.status
  const strategy = errorStrategies[status] || errorStrategies[999]
  await strategy(err)
}

export default handleError
