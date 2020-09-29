import request from '@/utils/request'

export function login({ username, password } = {}) {
  return request({
    url: '/auth/login',
    method: 'post',
    data: {
      username,
      password
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export function logout(token) {
  return request({
    url: '/auth/logout',
    method: 'post',
    data: {
      token
    }
  })
}
