import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode:'history',
    base: '/',
    routes: [
        {
            path: "/index",
            name: "index",
            component: () => import('@/views/index.vue'),
        }
    ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    if (to.meta.accessRight) { // 判断该路由是否需要登录权限
      const token = localStorage.getItem('token')
      if (token) { // 判断用户是否已经登录
        next()
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    } else {
      next()
    }
  })