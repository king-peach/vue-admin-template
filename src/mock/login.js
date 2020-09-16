const Mock = require('mockjs')

export default Mock.mock(`/auth/login`, `post`, request => {
  const { username, password } = JSON.parse(request.body)
  const defaultUsers = [
    [`admin`, `12345678`],
    [`user`, `abc123456`]
  ]
  const validate = defaultUsers.some(item => {
    return username === item[0] && password === item[1]
  })

  if (validate) {
    return Mock.mock({
      success: true,
      message: `登陆成功`,
      data: {
        token: /[a-z][A-Z]{5-10}\d{10, 20}/
      }
    })
  } else {
    return {
      success: false,
      message: `账号或密码错误, 登录失败`
    }
  }
})
