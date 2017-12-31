export default {
  state: {
    arr: ['我', '是', 'moduleA', '哈哈哈🙄']
  },
  getters: {
    reverseArr: state => {
      let newArr = Array.from(state.arr)
      return newArr.reverse()
    }
  },
  mutations: {
    getArr: (state, getters) => state.arr.reverse()
  },
  actions: {
    delayGetArr: ({commit}, json) => {
      setTimeout(() => {
        commit({
          type: 'getArr'
        })
      }, 1000)
    }
  }
}
