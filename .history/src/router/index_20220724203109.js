import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import content from '@/pages/content'
import write from '@/pages/write'
import login from '@/pages/login'
import blog from '@/pages/blog'

Vue.use(Router)

const routes = [
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
    },{
      path: '/personal',
      name: 'personal',
      component: personal
    }
    
  ]
  const router = new Router({
    // 配置单页应用的基本路径
    // base: '/app/',
    // history模式，访问不带#
    mode: 'history',
    routes,
    fallback: 'true'
  })
  export default router
