import { Random } from 'mockjs'
import storage from '@/utils/storage'

const Mock = require('mockjs')

export default Mock.mock(`/user/info`, `get`, () => {
  const role = storage.getItem('role')
  return Mock.mock({
    success: true,
    message: `获取info成功`,
    data: {
      username: role,
      name: Random.name(),
      avatar: Random.image('200x200', '#E1E1E1', role)
    }
  })
})
