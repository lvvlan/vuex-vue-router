<template>
  <div id="app">
    <p>{{ testIndex }}</p>
    <p>{{ count }}</p>
    <p>todoList: {{ todoList }}</p>
    <p>sortTodoList: {{ sortTodoList }}</p>
    <p>sortTodoList2string: {{ sortTodoList2string }}</p>
    <p>moduleA数据：{{ moduleAData }}</p>
    <p>moduleB数据：{{ moduleBData }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="delayIncrement">延迟1s+</button>
      <br>
      <button @click="modoleAAction">moduleA-action</button>
      <button @click="modoleBAction">moduleB-action</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'app',
//  computed: {
//    count () {
//      return this.$store.state.count
//    }
//  },
  computed: {
    ...mapState([
      'count', 'testIndex', 'todoList'
    ]),
    ...mapState({
      moduleAData: state => {
        return state.MA.arr
      },
      moduleBData: state => state.MB.arr
    }),
    ...mapGetters([
      'sortTodoList', 'sortTodoList2string'
    ])
  },
  methods: {
    ...mapMutations([
      'increment', 'decrement'
    ]),
    ...mapActions([
      'delayIncrement'
    ]),
    ...mapActions({
      modoleAAction: dispatch => dispatch('MA/delayGetArr'),
      modoleBAction: dispatch => dispatch('MB/delayGetArr')
    })
  },
  created () {
    console.log(`created`)
    this.delayIncrement({
      type: 'delayIncrement'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
