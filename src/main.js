// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueRouter from 'vue-router';

import { Button, Field, Toast, NavBar } from 'vant'
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Button, Field, Toast, NavBar )

Vue.prototype.$request = axios;   // 全局使用axios

const route = new VueRouter({
  mode:'hash',
  router: router
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
