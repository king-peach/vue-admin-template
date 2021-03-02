import { getInfo } from '@/api/user'

const state = {
  avatar: '',
  name: ''
}

const mutations = {
  UPDATE_AVATAR: (state: any, value: string) => {
    state.avatar = value
  },
  UPDATE_NAME: (state: any, value: string) => {
    state.name = value
  }
}

const actions = {
  GET_INFO: (context: any) => {
    getInfo()
      .then(res => {
        const { name, avatar } = res.data
        context.commit('UPDATE_AVATAR', avatar)
        context.commit('UPDATE_NAME', name)
        context.commit('UPDATE_TOKEN')
        return Promise.resolve()
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }
}

export default {
  state,
  mutations,
  actions
}
