import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/HelloFromVux'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

/* Layout */
// import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  // { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  // { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Home
  },
  {
    path: '/',
    component: HelloWorld,
    // redirect: '/plans/plan',
    name: 'HelloWorld',
    // children: [
    //   {
    //     path: 'plan',
    //     name: 'plan',
    //     component: () => import('@/views/plans/plan/index'),
    //     meta: { title: '预案计划', icon: 'file' }
    //   },
    //   {
    //     path: 'plandetail',
    //     name: 'plandetail',
    //     component: () => import('@/views/plans/plandetail/index'),
    //     meta: { title: '预案查看', icon: 'file-image-o' }
    //   },
    //   {
    //     path: 'planaudit',
    //     name: 'planaudit',
    //     component: () => import('@/views/plans/planaudit/index'),
    //     meta: { title: '预案审核', icon: 'file-image-o' }
    //   },
    //   {
    //     path: 'plandrill',
    //     name: 'plandrill',
    //     component: () => import('@/views/plans/plandrill/index'),
    //     meta: { title: '预案演练', icon: 'file-image-o' }
    //   }
    // ]
  },
  // { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  routes: constantRouterMap
})

