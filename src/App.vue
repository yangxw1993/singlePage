<template>
  <div id="app">
    <router-view></router-view>
    <loading v-if="LOADING"></loading>
  </div>
</template>

<script>
import Login from './components/user/login'
import Index from './components/index'
import Loading from './components/loading/loading'
export default {
  name: 'App',
  components:{
    Index,
    Login,
    Loading
  },
  computed:{
    LOADING(){
      return this.$store.store.state.LOADING
    }
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
