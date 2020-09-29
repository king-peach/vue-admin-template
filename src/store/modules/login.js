import { login, logout } from '@/api/login'
import router from '@/router'
const state = {
  token: void 0,
  role: void 0
}

const mutations = {
  UPDATE_TOKEN: (state, value) => {
    state.token = value || localStorage.getItem('token')
  },
  REMOVE_TOKEN: state => {
    state.token = void 0
    localStorage.removeItem('token')
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
  },
  LOGOUT: ({ state, commit }) => {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(res => {
          commit('REMOVE_TOKEN')
          commit('DEL_ROLE')
          commit('REMOVE_ADDROUTERMAP')
          commit('REMOVE_VISITED_VIEW')
          resolve(res)
        })
        .catch(err => reject(err))
    })
  }
}

export default {
  state,
  mutations,
  actions
}
