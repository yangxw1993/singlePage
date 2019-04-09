<template>
  <div class="login">
    <van-nav-bar
      :title=msg
      left-text="返回"
      left-arrow
      @click-left="goBackFn"
    />
  </div>
</template>

<script>
  import {NavBar} from 'vant'
export default {
  name: 'login',
  components:{
    [NavBar.name]: NavBar
  },
  data () {
    return {
      msg:'登录页面',

      username:'',
      password:'',
      password2:'',

      userErr:'用户名不能为空',
      passErr:'密码不能为空',
      formData: {
        userName: '',
        password: ''
      }
    }
  },
  created: function(){
  },
   methods: {
     goBackFn(){

     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  margin: 30px auto;
  width: 85%;
}
</style>
