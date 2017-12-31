<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">返回主页</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'this is routerA'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    color: #f00;
  }
  a {
    color: #42b983;
  }
</style>
