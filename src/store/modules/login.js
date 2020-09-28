import { login } from '@/api/login'
import router from '@/router'
const state = {
  token: void 0,
  role: void 0
}

const mutations = {
  UPDATE_TOKEN: (state, value) => {
    state.token = value
  },
  UPDATE_ROLE: (state, value) => {
    state.role = value
    localStorage.setItem('role', value)
  },
  DEL_ROLE: state => {
    state.role = void 0
    localStorage.removeItem('role')
  }
}

const actions = {
  LOGIN: ({ commit }, options) => {
    return new Promise((resolve, reject) => {
      login(options)
        .then(res => {
          const token = res.data.token
          localStorage.setItem('token', token)
          router.push('/')
          commit('UPDATE_ROLE', options.username)
          commit('UPDATE_TOKEN', token)
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
