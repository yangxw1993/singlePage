<template>
  <header>
    {{Header}}
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      Header: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    height: 90px;
    background: #ccc;
    text-align: center;
  }
</style>
