const state = {
  count: 0
}

const mutations = {
  INCREMENT(state, value) {
    state.count += value
  }
}

const actions = {
  INCREMENT({ commit }, value) {
    commit('INCREMENT', value)
  }
}

export default {
  state,
  mutations,
  actions
}
