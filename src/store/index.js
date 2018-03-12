import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  // Mutations must be synchronous
  mutations: {
    INCREASE_COUNTER (state, payload) {
      state.counter++
    },
    DECREASE_COUNTER (state, payload) {
      state.counter--
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
    increaseCounter (context, payload) {
      context.commit('INCREASE_COUNTER', payload)
    },
    decreaseCounter (context, payload) {
      context.commit('DECREASE_COUNTER', payload)
    }
  }
})
