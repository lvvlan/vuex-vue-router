/**
 * Created by luowei on 2017/12/30.
 */
export default {
  state: {
    arr: ['我', '是', 'moduleBBB', '哈哈哈🙄']
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
