import Vue from 'vue'
import store from './store'
import router from './router'
import '@/styles/index.less' // global css
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import App from './App'
// import FastClick from 'fastclick'
import { LoadingPlugin, ToastPlugin } from 'vux'
import { getToken } from '@/utils/auth'

import * as filters from './filters' // global filters

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

// 移动端点击延迟
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function() {
//     FastClick.attach(document.body)
//   }, false)
// }

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false

// const whiteList = ['/login', '/loginLanding', '/loginForget', '/loginRegister', '/loginReset'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  // Vue.$vux.loading.show({
  //   text: ''
  // })
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
  //     // next('/Login')
  //     console.log(to)
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
  Vue.$vux.loading.hide()
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})
