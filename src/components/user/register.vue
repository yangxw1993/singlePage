<template>
  <div class="register">
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

    <van-field
      v-model="password2"
      type="password"
      required
      clearable
      label="重复密码"
      placeholder="请重复输入密码"
      @click-icon="username=''"
      :error-message="passErr"
    />
    <van-field
      v-model="describe"
      label="个人签名"
      placeholder="请输入个人签名"
    />
    <div class="btn">
      <van-button type="primary" size="large" @click="registerFn">立即注册</van-button>
    </div>
    <div class="btn">
      <van-button type="primary" size="large" @click="goLogin">去登陆</van-button>
    </div>
    <div class="btn">
      <van-button type="danger" size="large" @click="registerResetBtn">重置</van-button>
    </div>
  </div>
</template>

<script>
  import { uerRegister } from '../../assets/server/user'
export default {
  name: 'login',
  data () {
    return {
      msg:'注册页面',

      username:'',
      password:'',
      password2:'',
      describe: '',

      userErr:'',
      passErr:'',
      formData: {
        userName: '',
        password: ''
      }
    }
  },
  created: function(){
    ;
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

       if( _registerObj.password2 === '' ){
         this.passErr2 = '重复密码不能为空';
         return false;
       }

       if( _registerObj.password !== _registerObj.password2 ){
         this.passErr2 = '重复密码不一致';
         return false;
       }
       uerRegister(_registerObj).then(res => {
         this.$toast(res)
       }).catch(err => console.log(err,'err'))
     },
     registerResetBtn(){
       let curValue = '';
       this.username = this.password = this.password2 = this.describe = curValue;
     },
     // 去登陆
     goLogin(){
      this.$router.replace({path:'/user/login'})  
     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.register{
  margin: 30px auto;
  width: 95%;
  .btn{
    margin: 20px 0;
  }
}

</style>
