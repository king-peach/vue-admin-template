import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export function editPassword(param: { oldPass: string; newPass: string; comfirmPass: string }): AxiosPromise {
  return request({
    url: '/auth/user/editPassword',
    method: 'post',
    data: param
  })
}
