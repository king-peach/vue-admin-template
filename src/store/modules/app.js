const state = {
  isCollapse: false,
  isMobile: false
}

const mutations = {
  UPDATE_COLLAPSE: (state, value) => {
    state.isCollapse = value
  },
  UPDATE_IS_MOBILE: (state, value) => {
    state.isMobile = value
  }
}

const actions = {
  UPDATE_COLLAPSE({ commit }, value) {
    commit('UPDATE_COLLAPSE', value)
  }
}

export default {
  state,
  mutations,
  actions
}
