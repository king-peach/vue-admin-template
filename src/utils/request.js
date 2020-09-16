/**
 * @name axios实例
 */

import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import router from '@/router'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5 * 1000
})

/* 请求拦截器 */
instance.interceptors.request.use(
  config => {
    // 请求头带上token
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token')
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/* 响应拦截器 */
instance.interceptors.response.use(
  response => {
    const res = response.data

    if (!res.success) {
      Message({
        type: `error`,
        message: `${res.message}`,
        duration: 2000
      })
    }

    return res
  },
  error => {
    const { status } = error.response

    // 异常状态码处理
    if (status === 401) {
      // 401提示是否登出
      MessageBox.confirm('您已被登出, 可以取消继续留在该页面, 或者重新登陆', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          localStorage.removeItem('token')
          router.push('/login')
        })
        .catch()
    } else {
      // 非401提示错误信息
      let error_msg = ``

      switch (status) {
        case 400:
          error_msg = `请求错误(400)`
          break
        case 401:
          error_msg = `无权访问(401)`
          break
        case 403:
          error_msg = `拒绝访问(403)`
          break
        case 404:
          error_msg = `访问出错(404)`
          break
        case 408:
          error_msg = `请求超时(408), 请重试`
          break
        case 500:
          error_msg = `服务器错误(500)`
          break
        case 502:
          error_msg = `网络错误(502)`
          break
        case 503:
          error_msg = `服务不可用(503)`
          break
        case 504:
          error_msg = `网络超时(504)`
          break
        case 505:
          error_msg = `HTTP版本不受支持(505)`
          break
        default:
          error_msg = `连接出错,${status}`
      }

      Message({
        type: `error`,
        message: error_msg,
        duration: 2000
      })
    }

    return Promise.reject(error)
  }
)

export default instance
