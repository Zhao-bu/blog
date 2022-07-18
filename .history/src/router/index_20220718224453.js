import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import content from '@/pages/content'
import login from '@/pages/login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/content',
      name: 'content',
      component: content
    },{
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
