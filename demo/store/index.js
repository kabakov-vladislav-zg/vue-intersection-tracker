import { createStore } from 'vuex'

export default createStore({
  state: {
    translateY: 0,
    translateX: 0,
    rotateZ: 0,
    opacity: 1
  },
  mutations: {
    setState(state, {key, value}) {
      state[key] += value
    }
  },
  actions: {
  },
  modules: {
  }
})
