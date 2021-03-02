const state = {
  visitedView: [
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        title: 'dashboard',
        icon: 'dashboard',
        affix: true
      }
    }
  ]
}

const mutations = {
  ADD_VISITED_VIEW: (state: any, value: Object) => {
    state.visitedView.push(value)
  },
  REMOVE_VISITED_VIEW: (state: any, value: Object) => {
    const delIndex = state.visitedView.indexOf(value)
    state.visitedView.splice(delIndex, 1)
  },
  UPDATE_VISITED_VIEW: (state: any, value: Object) => {
    state.visitedView = value
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
