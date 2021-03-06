import Vue from 'vue'
import store from './store'
import router from './router'
import '@/styles/common.less' // global css
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import App from './App'
import { LoadingPlugin, ToastPlugin } from 'vux'
import { getToken, setToken } from '@/utils/auth'

import * as filters from './filters' // global filters

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

// 移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

const whiteList = ['/login', '/loginLanding', '/loginForget', '/loginRegister', '/loginReset'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  // alert('123123')
  NProgress.start()
  next()
  if (to.path === '/homeFace') {
    const localData = JSON.parse(localStorage.getItem('userData'))
    console.log(localData)
    setToken(localData.token)
    store.commit('SET_TOKEN', localData.token)
    store.commit('SET_PHONE', localData.phone)
    store.commit('SET_USER_ID', '123')
  }
  // if (getToken()) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     // next('/login')
  //     next()
  //     NProgress.done()
  //   }
  // }
  /* 路由发生变化修改页面meta */
  if (to.meta.content) {
    const head = document.getElementsByTagName('head')
    const meta = document.createElement('meta')
    meta.content = to.meta.content
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
