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
      path: '/test',
      name: 'test',
      // vue路由懒加载  异步加载
      component: () => import('./components/test/infiniteScroll')
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
      path: '/orders',
      name: 'orders',
      component: () => import('./views/order/allOrders.vue')
    },
    {
      path: '/waitDeliver',
      name: 'waitDeliver',
      component: () => import('./views/order/waitDeliver.vue')
    },
    {
      path: '/waitPay',
      name: 'waitPay',
      component: () => import('./views/order/waitPay.vue')
    },
    {
      path: '/waitConfirm',
      name: 'waitConfirm',
      component: () => import('./views/order/waitConfirm.vue')
    },
    {
      path: '/waitEvaluate',
      name: 'waitEvaluate',
      component: () => import('./views/order/waitEvaluate.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    
    
  ]
})

