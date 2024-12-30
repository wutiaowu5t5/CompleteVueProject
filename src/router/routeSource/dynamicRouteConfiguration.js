/*
 * @Description: dynamicRouteConfiguration.js 动态路由配置
 * @Author: 5t5
 * @Time: 2024/12/30 16:40
 */

const dynamicRoute = [
  {
    path: '/',
    name: 'index',
    title: '首页',
    component: () => import('@views/homePage/Home-Page.vue') //.vue不能省略
  }
]

export default dynamicRoute
