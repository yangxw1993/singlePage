<style>
.list{
  margin: 20px auto;
  width: 80%;
}
.tips{
  width: 200px;
  height: 50px;
  line-height: 50px;
  position: relative;
  background: #e1e1e1
}
.tips:hover::after{
  content: attr(data-title);
  display: inline-block;
  position: absolute;
  left: -30px;
  top: 50px;
  padding: 10px;
  color: #333;
  border: solid 1px #ddd;
  border-radius: 10px;
}
</style>

<template>
  <div class="list">
    <div class="tips" data-title="前端工程师">测试伪类</div>
  </div>
</template>
<script>
import axios from 'axios'
import { URL } from '../assets/const.js'
// import httpServer from '../assets/utils/httpServer.js'
export default {
  data() {
    return {
    };
  },
  created: function(){
    let arr = [1,2,3,2,5,3,1,NaN, null, false, undefined, false, NaN, null, undefined];
    // this._getTableList();
    this.deleteCopy(arr);
    this.deleteCopyES6(arr);
    this.getUser();
  },
  
  methods: {
    //数组去重
    deleteCopy(arr){      
      let obj={};
      let newArr = [];
      arr.forEach((item,index) => { 
        if(!obj[item]){
          obj[item] = true;
          newArr.push(item);
        }             
      });
      console.log(newArr)
    },
    deleteCopyES6(arr){
      console.log('ES6:',Array.from(new Set(arr)))
    },
    getUser () {
      getMovieList().then( res => {
        console.log(res,'************')
      }).catch(err => {
        console.log(err)
      })
    },
    _getTableList(){
      getTableList().then(res => {
        res.forEach(item => {
          this.tableList.push(item)
        });
      }).catch(err => {
        console.log('err', err)
      })
    },
    _addTablRow(e){
      console.log(e);
     /*  axios.post(`${URL.GETTABLELIST}`,e).then(res => {
        console.log(res);
      }) */
      addTable(e).then(res => {
        console.log(res);
      })
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.tableList[index].name}<br>Age：${
          this.tableList[index].age
        }<br>Address：${this.tableList[index].address}`
      });
    },
    remove(index) {
      this.tableList.splice(index, 1);
    },
    add(data){
      console.log(data);
    }
  }
};
</script>
 