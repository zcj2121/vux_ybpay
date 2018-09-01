import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    meta: {title: '手机号码'},
    redirect: '/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    meta: {title: '手机号码'},
    component: () => import('@/view/login/Login')
  },
  {
    path: '/LoginLanding',
    name: 'LoginLanding',
    meta: {title: '登陆'},
    component: () => import('@/view/login/LoginLanding')
  },
  {
    path: '/LoginRegister',
    name: 'LoginRegister',
    meta: {title: '注册'},
    component: () => import('@/view/login/LoginRegister')
  },
  {
    path: '/LoginForget',
    name: 'LoginForget',
    meta: {title: '找回密码'},
    component: () => import('@/view/login/LoginForget')
  },
  {
    path: '/LoginReset',
    name: 'LoginReset',
    meta: {title: '重置密码'},
    component: () => import('@/view/login/LoginReset')
  },
  {
    path: '/Home',
    component: () => import('@/view/Home'),
    redirect: 'Home/HomeInitial',
    name: 'Home',
    meta: {title: '首页'},
    children: [
      {
        path: 'HomeInitial',
        name: 'HomeInitial',
        meta: {title: '首页'},
        component: () => import('@/view/HomeInitial')
      },
      {
        path: 'Transaction',
        name: 'Transaction',
        meta: {title: '交易记录'},
        component: () => import('@/view/Transaction')
      },
      {
        path: 'User',
        name: 'User',
        meta: {title: '我的'},
        component: () => import('@/view/User')
      }
    ]
  },
  // 首页的第一种情况
  {
    path: '/IdCard',
    name: 'idcard',
    meta: {title: '身份证及银行卡信息验证'},
    component: () => import('@/view/home/homeInitial/IdCard')
  },
  {
    path: '/HomeFace',
    name: 'HomeFace',
    meta: {title: '刷脸验证'},
    component: () => import('@/view/home/homeInitial/HomeFace')
  },
  {
    path: '/SetTransaction',
    name: 'SetTransaction',
    meta: {title: '设置交易密码'},
    component: () => import('@/view/home/homeInitial/SetTransaction')
  },
  {
    path: '/AccreditBook',
    name: 'AccreditBook',
    meta: {title: '征信及综合授权书'},
    component: () => import('@/view/home/homeInitial/AccreditBook')
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
