import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export function login (params: { username: string; password: string }): AxiosPromise {
  return request({
    url: '/auth/login',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export function logout (token: string): AxiosPromise {
  return request({
    url: '/auth/logout',
    method: 'post',
    data: {
      token
    }
  })
}
