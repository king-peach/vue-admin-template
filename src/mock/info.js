import { Random } from 'mockjs'

const Mock = require('mockjs')

export default Mock.mock(`/user/info`, `get`, () => {
  return Mock.mock({
    success: true,
    message: `获取info成功`,
    data: {
      name: Random.name(),
      avatar: Random.image('200x100', '#fb0a2a', 'user')
    }
  })
})
