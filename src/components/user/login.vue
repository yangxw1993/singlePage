<template>
  <div class="login">
    <h1>登录</h1>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      formData: {
        userName: '',
        password: ''
      }
    }
  },
  created: function(){
    console.log('created');
  },
   methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  margin: 30px auto;
  width: 85%;
}
</style>
