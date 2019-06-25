import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'




Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      redirect: '/'
    },
    {
      path: '/cart',
      name: 'cart',
      // vue路由懒加载  异步加载
      component: () => import('./views/cart.vue')
    },
    {
      path: '/test',
      name: 'test',
      // vue路由懒加载  异步加载
      component: () => import('./components/consumer/shoppingcart/test')
    },
    
  ]
})

