/**
 * @name axios实例
 */

import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import router from '@/router'
import storage from '@/utils/storage'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5 * 1000
})

/* 请求拦截器 */
instance.interceptors.request.use(
  config => {
    // 请求头带上token
    if (storage.getItem('token')) {
      config.headers.Authorization = storage.getItem('token')
    }

    // 表单提交处理请求参数
    // if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    //   config.transformRequest = [
    //     function(data) {
    //       let ret = ``
    //       Object.keys(data).forEach((key, index) => {
    //         ret += Object.keys(data).length - 1 === index ? `${decodeURIComponent(key)}=${decodeURIComponent(data[key])}` : `${decodeURIComponent(key)}=${decodeURIComponent(data[key])}&`
    //       })
    //       return ret
    //     }
    //   ]
    // }

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
          storage.removeItem('token')
          return router.push('/login')
        })
        .catch(err => err)
    } else {
      // 非401提示错误信息
      let errorMsg = ``

      switch (status) {
        case 400:
          errorMsg = `请求错误(400)`
          break
        case 401:
          errorMsg = `无权访问(401)`
          break
        case 403:
          errorMsg = `拒绝访问(403)`
          break
        case 404:
          errorMsg = `访问出错(404)`
          break
        case 408:
          errorMsg = `请求超时(408), 请重试`
          break
        case 500:
          errorMsg = `服务器错误(500)`
          break
        case 502:
          errorMsg = `网络错误(502)`
          break
        case 503:
          errorMsg = `服务不可用(503)`
          break
        case 504:
          errorMsg = `网络超时(504)`
          break
        case 505:
          errorMsg = `HTTP版本不受支持(505)`
          break
        default:
          errorMsg = `连接出错,${status}`
      }

      Message({
        type: `error`,
        message: errorMsg,
        duration: 2000
      })
    }

    return Promise.reject(error)
  }
)

export default instance
