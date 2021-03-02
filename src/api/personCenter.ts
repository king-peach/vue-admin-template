import request from '@/utils/request'

export function editPassword (param: { oldPass: string, newPass: string, comfirmPass: string }) {
  return request({
    url: '/auth/user/editPassword',
    method: 'post',
    data: param
  })
}
