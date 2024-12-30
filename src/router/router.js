/*
 * @Description: router.js 路由配置文件
 * @Author: 5t5
 * @Time: 2024/12/30 11:26
 */

// 导入router所需的方法
// import the methods required for the router
import { createRouter, createWebHistory } from 'vue-router'

import dynamicRoute from '@router/routeSource/dynamicRouteConfiguration.js'
import fixedRoute from '@router/routeSource/fixedRouteConfiguration.js'

// 路由参数配置
// route parameter configuration
const router = createRouter({
  // 使用hash(createWebHashHistory)模式，(createWebHistory是HTML5历史模式，支持SEO)
  history: createWebHistory(),
  routes: [...dynamicRoute, ...fixedRoute]
})

// 全局前置守卫，这里可以加入用户登录判断
// global front guard, here you can add user login judgment
router.beforeEach((to, from, next) => {
  console.log(to, 'to beforeEach')
  console.log(from, 'from beforeEach')
  next()
})

// 全局后置钩子，这里可以加入改变页面标题等操作
// global post hook, where you can add actions such as changing the page title
router.afterEach((to, from) => {
  console.log(to, 'to afterEach')
  console.log(from, 'from afterEach')
})

// 导出默认值
export default router
