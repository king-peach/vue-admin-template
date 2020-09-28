import { Random } from 'mockjs'

const Mock = require('mockjs')

export default Mock.mock(`/auth/login`, `post`, request => {
  const data = JSON.parse(request.body)
  const { username, password } = data
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
        token: Random.string(15, 20)
      }
    })
  } else {
    return {
      success: false,
      message: `账号或密码错误, 登录失败`
    }
  }
})
