// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import myModules from './modules'
Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    testIndex: 'testIndex',
    todoList: [2, 4, 1, 8, 3, 8, 3, 10, 1]
  },
  mutations: {
    increment: (state, payload) => {
      state.count++
      console.log('mutations-increment-payload', payload)
    },
    decrement: state => state.count--
  },
  getters: {
    sortTodoList: function (state) {
      let newList = Array.from(state.todoList)
      return newList.sort((a, b) => a - b)
    },
    sortTodoList2string: (state, getters, json) => getters.sortTodoList.toString()
  },
  actions: {
    delayIncrement ({commit}, json) {
      console.log(json)
      setTimeout(() => {
        commit({
          type: 'increment',
          payload: {
            data: 'test123'
          }
        })
      }, 1000)
    }
  },
  modules: myModules
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})
