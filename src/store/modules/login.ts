import { login, logout } from '@/api/login'
import router from '@/router'
import storage from '@/utils/storage'
const state = {
  token: void 0,
  role: void 0
}

const mutations = {
  UPDATE_TOKEN: (state: any, value: string) => {
    state.token = value || storage.getItem('token')
  },
  REMOVE_TOKEN: (state: any) => {
    state.token = void 0
    storage.removeItem('token')
  },
  UPDATE_ROLE: (state: any, value: string) => {
    state.role = value
    const item: any = { key: 'role', value: value, expires: storage.getItem('expires') }
    storage.setItem(item)
  },
  DEL_ROLE: (state: any) => {
    state.role = void 0
    storage.removeItem('role')
  }
}

const actions = {
  LOGIN: (context: any, options: any) => {
    return new Promise((resolve, reject) => {
      login(options)
        .then(res => {
          const token = res.data.token
          const item: any = { key: 'token', value: token, expires: storage.getItem('expires') }
          storage.setItem(item)
          context.commit('UPDATE_ROLE', options.username)
          context.commit('UPDATE_TOKEN', token)
          resolve(res)
          return router.push('/')
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  LOGOUT: (context: any) => {
    return new Promise((resolve, reject) => {
      logout(context.state.token)
        .then(res => {
          context.commit('REMOVE_TOKEN')
          context.commit('DEL_ROLE')
          context.commit('REMOVE_ADDROUTERMAP')
          context.commit('REMOVE_VISITED_VIEW')
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
