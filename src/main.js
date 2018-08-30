// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router'
import App from './App'
import { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)

Vue.use(VueRouter)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  Vue.$vux.loading.show({
    text: ''
  })
  /* 路由发生变化修改页面meta */
  if (to.meta.content) {
    let head = document.getElementsByTagName('head')
    let meta = document.createElement('meta')
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
  Vue.$vux.loading.hide()
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
