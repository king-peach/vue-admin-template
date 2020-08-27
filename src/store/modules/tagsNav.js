const state = {
  visitedView: []
}

const mutations = {
  ADD_VISITED_VIEW: (state, value) => {
    state.visitedView.push(value)
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
