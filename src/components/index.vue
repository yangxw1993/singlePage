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
      <van-button type="primary">获取</van-button>
      <!-- <h1>{{msg}}</h1> -->
      <router-link to="/user/login"><Button type="primary">去登录</Button></router-link>
      <router-link to="/user/register"><Button type="primary">去注册</Button></router-link>
      <router-link to="/list"><Button type="primary">列表页面</Button></router-link>
    </div>

  </div>
</template>

<script>
  import httpServer from '../assets/utils/httpServer.js'
  import { test_api, send } from '../assets/server/test_api.js'
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
      test_api().then(res => {
        console.log(res)
      })
    },
    methods: {
      send() {
        let data = {
          data: this.sendData
        };
        console.log(data)
        send(data).then(res => {
          console.log(res);
        })
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
  }

  .main {
    margin: 20px auto;
    width: 80%;
  }
</style>