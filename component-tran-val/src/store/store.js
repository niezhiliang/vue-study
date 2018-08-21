import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
  count : 1
}

const mutations = {
  add(state) {
    state.count += 1
  },
  reducce(state) {
    state.count -=1
  }
}


const action = {
  addAction(context) {
    context.commit('add',1)
  },
  reduceAction({commit}) {
    commit('reduce')
  }
}

export default new Vuex.Store( {
  state,mutations,actions
})
