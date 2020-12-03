const Mock = require('mockjs')

export default Mock.mock(`/auth/user/editPassword`, `post`, request => {
  if (Object.keys(request).length) {
    return {
      success: true,
      message: '密码修改成功!'
    }
  } else {
    return {
      success: false,
      message: '密码修改失败, 请求参数错误！'
    }
  }
})
