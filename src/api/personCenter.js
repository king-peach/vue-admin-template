import request from '@/utils/request'

export function editPassword({ oldPass, newPass, comfirmPass } = {}) {
  return request({
    url: '/auth/user/editPassword',
    method: 'post',
    data: {
      oldPass,
      newPass,
      comfirmPass
    }
  })
}
