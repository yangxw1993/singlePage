<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/user/login'
import Index from './components/index'
export default {
  name: 'App',
  components:{
    Index,
    Login,
  },
  methods:{
    goLogin(){
      this.$router.push({path:'/user/login'})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
