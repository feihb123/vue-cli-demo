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
      path: '/confirm',
      name: 'confirm',
      component: () => import('./views/confirm.vue')
    },
    {
      path: '/paySuccess',
      name: 'paySuccess',
      component: () => import('./views/paySuccess.vue')
    },
    {
      path: '/waitDeliver',
      name: 'waitDeliver',
      component: () => import('./views/order/waitDeliver.vue')
    },
    {
      path: '/test',
      name: 'test',
      // vue路由懒加载  异步加载
      component: () => import('./components/test/cartoon')
    },
    
  ]
})

