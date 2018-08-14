import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
  count : 1
}

const mutations = {
  add(state) {
    state.count+=1
  },
  add10(state,n) {
    state.count+=10
  },
  reduce(state) {
    console.log("----")
    state.count-=1
  }
}

const getters = {
  count:function(state){
    console.log("getters")
    return state.count +=100;
  }
}

//异步改变store的值
const actions ={
  addAction(context){

    //添加一个延时触发  验证action改变store状态是异步的
    setTimeout(function () {
      context.commit('add',10)
    }, 3000);
    console.log('我比reduce提前执行');
  },
  reduceAction({commit}){
    commit('reduce')
  }
}

//声明一个store的模块
const modualA = {
  state,mutations,getters,actions

}

export default new Vuex.Store({
  modules: {a:modualA}
})
