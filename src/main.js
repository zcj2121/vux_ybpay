import Vue from 'vue'
import store from './store'
import router from './router'
import * as filters from './Filters/'
import '@/styles/index.less' // global css
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import App from './App'
import { LoadingPlugin, ToastPlugin } from 'vux'
import { getToken } from '@/utils/auth'

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

// 移动端点击延迟
// const FastClick = require('fastclick')
// FastClick.attach(document.body)

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


//
// Vue.filter('NumFormat', function(value) {
//   if (!value) return '0.00'
//   value = value.toString()
//   if (value.indexOf('.') === 1) {
//     value = value + '.00'
//   }
//   var intPart = Number(value).toFixed(0) // 获取整数部分
//   var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
//
//   var floatPart = '.00' // 预定义小数部分
//   var value2Array = value.split('.')
//
//   // =2表示数据有小数位
//   if (value2Array.length === 2) {
//     floatPart = value2Array[1].toString() // 拿到小数部分
//
//     if (floatPart.length === 1) { // 补0,实际上用不着
//       return intPartFormat + '.' + floatPart + '0'
//     } else {
//       return intPartFormat + '.' + floatPart
//     }
//   } else {
//     return intPartFormat + floatPart
//   }
// })

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})
