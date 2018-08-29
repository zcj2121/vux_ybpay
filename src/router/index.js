import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'login',
    meta: {title: '登陆'},
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    meta: {title: '登陆'},
    component: () => import('@/view/login/Login')
  },
  {
    path: '/home',
    component: () => import('@/view/Home'),
    redirect: 'home/homeInitial',
    name: 'home',
    meta: {title: '首页'},
    children: [
      {
        path: 'homeInitial',
        name: 'homeInitial',
        meta: {title: '首页'},
        component: () => import('@/view/HomeInitial')
      },
      {
        path: 'transaction',
        name: 'transaction',
        meta: {title: '交易记录'},
        component: () => import('@/view/Transaction')
      },
      {
        path: 'user',
        name: 'user',
        meta: {title: '我的'},
        component: () => import('@/view/User')
      }
    ]
  },
  {
    path: '/idcard',
    name: 'idcard',
    meta: {title: '身份证及银行卡信息验证'},
    component: () => import('@/view/IdCard')
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
