import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  // Mutations must be synchronous
  mutations: {
    UPDATE (state, payload) {
      console.log(payload)
      state.counter++
    }
  },
  getters: {
    counter (state) {
      return state.counter
    }
  },
  // Actions can be asynchronous
  // context = { state, rootState, commit, dispatch, getters, rootGetters }
  actions: {
    update (context, payload) {
      context.commit('UPDATE', payload)
    }
  }
})
