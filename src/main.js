// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { Button, Field, Toast, NavBar, Loading } from 'vant'
import 'vant/lib/index.css';
import '../static/css/main.less';
import MyHeader from './components/common/header'

Vue.config.productionTip = false;
Vue.use(VueRouter,Vuex);

import store from './store'
/* 全局注册组件 */
Vue.use(Button, Toast);
Vue.component(Loading.name, Loading); // loading
Vue.component(NavBar.name, NavBar); // 导航栏
Vue.component(Field.name, Field); // 文本框
Vue.component('my-header', MyHeader)
/* 全局使用axios */
Vue.prototype.$request = axios;

const route = new VueRouter({
  mode:'hash',
  router: router
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
