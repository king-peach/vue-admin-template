import { getInfo } from '@/api/user'

const state = {
  avatar: '',
  name: ''
}

const mutations = {
  UPDATE_AVATAR: (state, value) => {
    state.avatar = value
  },
  UPDATE_NAME: (state, value) => {
    state.name = value
  }
}

const actions = {
  GET_INFO: ({ commit }) => {
    getInfo()
      .then(res => {
        const { name, avatar } = res.data
        commit('UPDATE_AVATAR', avatar)
        commit('UPDATE_NAME', name)
        commit('UPDATE_TOKEN')
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
