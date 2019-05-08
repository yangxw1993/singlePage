<template>
  <div class="login">
    <van-nav-bar
      :title=msg
      left-text="返回"
      left-arrow
      @click-left="goBackFn"
    />
    <van-field
      v-model="username"
      required
      clearable
      label="用户名"
      placeholder="请输入用户名"
      @click-icon="username=''"
      :error-message="userErr"
    />
    <van-field
      v-model="password"
      type="password"
      required
      clearable
      label="密码"
      placeholder="请输入密码"
      @click-icon="username=''"
      :error-message="passErr"
    />
    <van-button type="primary" size="large" @click="registerFn">登录</van-button>
  </div>
</template>

<script>
  import {NavBar,Field} from 'vant'
  import { uerRegister } from '../../assets/server/user'
export default {
  name: 'login',
  components:{
    [NavBar.name]: NavBar,
    [Field.name]: Field
  },
  data () {
    return {
      msg:'登录页面',

      username:'',
      password:'',
      password2:'',
      describe: '',

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
       this.$router.go(-1);
     },
     // 注册
     registerFn(){
       // 每次重置 err 信息
       this.userErr='';
       this.passErr = '';
       this.passErr2 = '';

       // 注册信息Obj
       let  _registerObj = {
         username : this.username,
         password : this.password,
         password2 : this.password2,
         describe : this.describe
       }
       // 用户注册它的判断条件，非常非常非常的多，咱们在这就进行一下简单条件的判断
       if( _registerObj.username === '' ){
         this.userErr = '用户名不能为空';
         return false;
       }

       if( _registerObj.password === '' ){
         this.passErr = '密码不能为空';
         return false;
       }

       uerRegister(_registerObj).then(res => {

       }).catch(err => console.log(err,'err'))
     },
     registerResetBtn(){}
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
