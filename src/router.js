import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'




Vue.use(Router)

const router = new Router({
  
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
      path: '*',
      name: '404',
      component: () => import('./views/404.vue')
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
      component: () => import('./views/cart.vue'),
      // 设置 mata 字段，表示该字段需要验证
			meta: {
				requireAuth: true
			}
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('./views/confirm.vue'),
      meta: {
				requireAuth: true
			}
    },
    {
      path: '/shopContent/*',
      name: 'shopContent',
      component: () => import('./views/shopContent.vue'),
      meta: {
				requireAuth: true
			}
    },
    {
      path: '/paySuccess',
      name: 'paySuccess',
      component: () => import('./views/paySuccess.vue'),
      meta: {
				requireAuth: true
			}
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('./views/order/allOrders.vue'),
      meta: {
				requireAuth: true
			}
    },
    {
      path: '/waitDeliver',
      name: 'waitDeliver',
      component: () => import('./views/order/waitDeliver.vue'),
      meta: {
				requireAuth: true
			}
    },
    {
      path: '/waitPay',
      name: 'waitPay',
      component: () => import('./views/order/waitPay.vue'),
      meta: {
				requireAuth: true
			}
    },
    {
      path: '/waitConfirm',
      name: 'waitConfirm',
      component: () => import('./views/order/waitConfirm.vue'),
      meta: {
				requireAuth: true
			}
    },
    {
      path: '/waitEvaluate',
      name: 'waitEvaluate',
      component: () => import('./views/order/waitEvaluate.vue'),
      meta: {
				requireAuth: true
			}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      component: () => import('./views/searchResult.vue'),
      meta: {
				requireAuth: true
			}
    },
    
    
  ]
})


router.beforeEach((to, from, next) => {

  /* const nextRoute = ['cart', 'orders', 'waitDeliver',
   'waitPay', 'waitConfirm', 'waitEvaluate'];
  const user = localStorage.getItem('token');
  console.log(to.name +":"+ nextRoute.indexOf(to.name))
  //跳转至上述页面
  if (nextRoute.indexOf(to.name) >= 0) {
      //未登录
      if (user == "" || user == null) {
          router.push({name: 'login'})
      }
  }
  //已登录的情况再去登录页，跳转至首页
  if (to.name === 'login') {
      if (user != ("" || null)) {
          router.push({name: '/'});
      }
  }
  next(); */

  let token = localStorage.getItem('token')
	if(to.meta.requireAuth) {
		if(token) {
			next()
		} else {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		}
	} else {
		next()
  }
  
});

export default router