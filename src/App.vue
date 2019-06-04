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
import { mapState } from 'vuex'
export default {
  name: 'App',
  components:{
    Index,
    Login,
    Loading
  },
  //  loading 的两种方法
  /*computed:{
    LOADING(){
      console.log(this.$store)
      return this.$store.state.LOADING
    }
  },*/
  computed: mapState(['LOADING']),
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
