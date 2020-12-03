import { login, logout } from '@/api/login'
import router from '@/router'
import storage from '@/utils/storage'
const state = {
  token: void 0,
  role: void 0
}

const mutations = {
  UPDATE_TOKEN: (state, value) => {
    state.token = value || storage.getItem('token')
  },
  REMOVE_TOKEN: state => {
    state.token = void 0
    storage.removeItem('token')
  },
  UPDATE_ROLE: (state, value) => {
    state.role = value
    storage.setItem({ key: 'role', value: value, expires: storage.getItem('expires') })
  },
  DEL_ROLE: state => {
    state.role = void 0
    storage.removeItem('role')
  }
}

const actions = {
  LOGIN: ({ commit }, options) => {
    return new Promise((resolve, reject) => {
      login(options)
        .then(res => {
          const token = res.data.token
          storage.setItem({ key: 'token', value: token, expires: storage.getItem('expires') })
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
