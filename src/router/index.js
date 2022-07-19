import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import content from '@/pages/content'
import write from '@/pages/write'
import login from '@/pages/login'
import blog from '@/pages/blog'

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
      path: '/write',
      name: 'write',
      component: write
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/blog',
      name: 'blog',
      component: blog
    },
    
  ]
})
