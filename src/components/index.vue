<template>
  <div class="container">
    <header>
      <h1>Header</h1>
    </header>
    <div class="main">
      <div class="">
        <input type="text" v-model="sendData" />
        <div class="">接收到的数据：{{getData}}</div>
      </div>
      <van-button type="primary" @click="send">发送</van-button>
      <van-button type="info" @click="get">获取</van-button>
      <div class="btn-wrapper margin-t-10">
        <van-button type="primary" @click="login">登录</van-button>
        <van-button type="info" @click="register">注册</van-button>
      </div>
      <router-link to="/user/login"><Button type="primary">去登录</Button></router-link>
      <router-link to="/user/register"><Button type="primary">去注册</Button></router-link>
      <router-link to="/list"><Button type="primary">列表页面</Button></router-link>
      <router-link to="/demo/canvasEight"><Button type="primary">canvas</Button></router-link>
    </div>
    <div class="margin-t-10">
      <van-button type="primary" @click="showLoading">显示</van-button>
    </div>
  </div>
</template>

<script>
  import { test_api, send, getData } from '../assets/server/test_api.js'
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        sendData: '',
        getData: ''
      }
    },
    created: function () {
      test_api().then(res => {})
    },
    methods: {
      send() {
        if(!this.sendData){
          this.$toast('请填写数据');
          return;
        }
        let sendData = {
          data: this.sendData
        };
        send(sendData).then(res => this.$toast('已发送'))
      },
      get(){
        getData().then(res => this.getData = res.data)
      },
      // 登录
      login(){
        this.$router.push({path:'/user/login'});
      },
      register(){
        this.$router.push({path:'/user/register'});
      },

      showLoading(){
        this.$store.commit('showLoading');
        setTimeout(() => {
          console.log(123)
          this.$store.commit('hideLoading');
        }, 3000)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    height: 90px;
    line-height: 90px;
    background: #ccc;
    text-align: center;
    overflow: hidden
  }
  .main {
    margin: 20px auto;
    width: 80%;
  }
  .btn-wrapper{
    margin-top: 30px;
  }
</style>
