const Mock = require('mockjs')

export default Mock.mock(`/auth/logout`, `post`, request => {
  const data = JSON.parse(request.body)
  const { token } = data

  if (token) {
    return {
      success: true,
      message: `登出成功`
    }
  } else {
    return {
      success: false,
      message: `登出失败, 没有该token`
    }
  }
})
