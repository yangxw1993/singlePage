<template>
  <div class="register">
    <h1>msg</h1>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      msg:'注册页面',

      username:'',
      password:'',
      password2:'',

      userErr:'用户名不能为空',
      passErr:'密码不能为空'
    }
  },
  methods:{
    goBackFn(){
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
  margin: 30px auto;
  width: 85%;
}
</style>
