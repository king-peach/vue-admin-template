const state = {
  isCollapse: false,
  isMobile: false
}

const mutations = {
  UPDATE_COLLAPSE: (state: any, value: string) => {
    state.isCollapse = value
  },
  UPDATE_IS_MOBILE: (state: any, value: string) => {
    state.isMobile = value
  }
}

const actions = {
  UPDATE_COLLAPSE: (context: any, value: string) => {
    context.commit('UPDATE_COLLAPSE', value)
  }
}

export default {
  state,
  mutations,
  actions
}
