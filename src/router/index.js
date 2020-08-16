import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/user/login'
import Register from '@/components/user/register'
import Index from '@/components/index'
import List from '@/components/list'
import CanvasEight from '@/components/demo/CanvasEight'
import Upload from '../views/upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    },
    {
      path:'/list',
      name:'list',
      component: List
    },
    {
      path: '/user/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/demo/CanvasEight',
      name: 'CanvasEight',
      component: CanvasEight
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }
  ]
})
