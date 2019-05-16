<template>
  <div class="loading flex-center">
    <van-loading />
  </div>
</template>

<script>
  export default {
    name: "loading"
  }
</script>

<style scoped>
.loading{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}
</style>
