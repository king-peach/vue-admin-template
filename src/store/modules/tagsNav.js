const state = {
  visitedView: [{
    path: '/dashboard/index',
    name: 'dashboard',
    meta: {
      title: 'dashboard',
      icon: 'dashboard',
      affix: true
    }
  }]
}

const mutations = {
  ADD_VISITED_VIEW: (state, value) => {
    state.visitedView.push(value)
  },
  REMOVE_VISITED_VIEW: (state, value) => {
    const delIndex = state.visitedView.indexOf(value)
    state.visitedView.splice(delIndex, 1)
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
