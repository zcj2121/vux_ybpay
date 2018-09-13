import Vue from 'vue'
import Router from 'vue-router'
import face from '@/view/home/homeInitial/HomeFace'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    meta: { title: '登陆' },
    redirect: '/homeFace'
  },
  // 登陆、注册
  {
    path: '/login',
    name: 'login',
    meta: { title: '手机号码' },
    component: () => import('@/view/login/Login')
  },
  {
    path: '/loginLanding',
    name: 'loginLanding',
    meta: { title: '登陆' },
    component: () => import('@/view/login/LoginLanding')
  },
  {
    path: '/loginRegister',
    name: 'loginRegister',
    meta: { title: '注册' },
    component: () => import('@/view/login/LoginRegister')
  },
  {
    path: '/loginForget',
    name: 'loginForget',
    meta: { title: '找回密码' },
    component: () => import('@/view/login/LoginForget')
  },
  {
    path: '/loginReset',
    name: 'loginReset',
    meta: { title: '重置密码' },
    component: () => import('@/view/login/LoginReset')
  },
  // Home 主体
  {
    path: '/home',
    component: () => import('@/view/Home'),
    redirect: 'home/homeInitial',
    name: 'home',
    meta: { title: '首页' },
    children: [
      {
        path: 'homeInitial',
        name: 'homeInitial',
        meta: { title: '首页' },
        component: () => import('@/view/HomeInitial')
      },
      {
        path: 'transaction',
        name: 'transaction',
        meta: { title: '交易记录' },
        component: () => import('@/view/Transaction')
      },
      {
        path: 'user',
        name: 'user',
        meta: { title: '我的' },
        component: () => import('@/view/User')
      }
    ]
  },
  // 首页的第一种情况
  {
    path: '/idCard',
    name: 'idcard',
    meta: { title: '身份证及银行卡信息验证' },
    component: () => import('@/view/home/homeInitial/IdCard')
  },
  {
    path: '/homeFace',
    name: 'homeFace',
    meta: { title: '刷脸验证' },
    component: face
  },
  {
    path: '/setTransaction',
    name: 'setTransaction',
    meta: { title: '设置交易密码' },
    component: () => import('@/view/home/homeInitial/SetTransaction')
  },
  {
    path: '/accreditBook',
    name: 'accreditBook',
    meta: { title: '征信及综合授权书' },
    component: () => import('@/view/home/homeInitial/AccreditBook')
  },
  {
    path: '/phoneValidate',
    name: 'phoneValidate',
    meta: { title: '手机号认证' },
    component: () => import('@/view/home/homeInitial/PhoneValidate')
  },
  {
    path: '/baoValidate',
    name: 'baoValidate',
    meta: { title: '电商认证' },
    component: () => import('@/view/home/homeInitial/BaoValidate')
  },
  {
    path: '/perfectInformation',
    name: 'perfectInformation',
    meta: { title: '完善信息' },
    component: () => import('@/view/home/homeInitial/PerfectInformation')
  },
  {
    path: '/creditResult',
    name: 'creditResult',
    meta: { title: '授权结果' },
    component: () => import('@/view/home/homeInitial/CreditResult')
  },
  // 首页的第二种情况
  {
    path: '/homeLoan',
    name: 'homeLoan',
    meta: { title: '借款' },
    component: () => import('@/view/home/homeLoan/HomeLoan')
  },
  {
    path: '/loanResults',
    name: 'loanResults',
    meta: { title: '借款结果' },
    component: () => import('@/view/home/homeLoan/LoanResults')
  },
  {
    path: '/loanSuccess',
    name: 'loanSuccess',
    meta: { title: '借款结果' },
    component: () => import('@/view/home/homeLoan/LoanSuccess')
  },
  // 首页的第三种情况
  {
    path: '/homeRepayment',
    name: 'homeRepayment',
    meta: { title: '还款' },
    component: () => import('@/view/home/homeRepayment/HomeRepayment')
  },
  {
    path: '/homeRepaymentDetail',
    name: 'homeRepaymentDetail',
    meta: { title: '还款详情' },
    component: () => import('@/view/home/homeRepayment/HomeRepaymentDetail')
  },
  {
    path: '/repaymentCard',
    name: 'repaymentCard',
    meta: { title: '还款' },
    component: () => import('@/view/home/homeRepayment/RepaymentCard')
  },
  {
    path: '/repaymentResults',
    name: 'repaymentResults',
    meta: { title: '还款' },
    component: () => import('@/view/home/homeRepayment/RepaymentResults')
  },
  // 交易记录
  {
    path: '/loanDetail',
    name: 'loanDetail',
    meta: { title: '借款详情' },
    component: () => import('@/view/transaction/LoanDetail')
  },
  {
    path: '/loanDetailSee',
    name: 'loanDetailSee',
    meta: { title: '还款明细' },
    component: () => import('@/view/transaction/LoanDetailSee')
  },
  {
    path: '/onRepayment',
    name: 'onRepayment',
    meta: { title: '按期还款' },
    component: () => import('@/view/transaction/OnRepayment')
  },
  {
    path: '/repaymentDetail',
    name: 'repaymentDetail',
    meta: { title: '按期还款' },
    component: () => import('@/view/transaction/RepaymentDetail')
  },
  // 我的
  {
    path: '/cardManage',
    name: 'cardManage',
    meta: { title: '我的银行卡' },
    component: () => import('@/view/user/CardManage')
  },
  {
    path: '/userSecurity',
    name: 'userSecurity',
    meta: { title: '安全中心' },
    component: () => import('@/view/user/UserSecurity')
  },
  {
    path: '/modifyPassword',
    name: 'modifyPassword',
    meta: { title: '修改交易密码' },
    component: () => import('@/view/user/ModifyPassword')
  },
  {
    path: '/validateUser',
    name: 'validateUser',
    meta: { title: '验证身份信息' },
    component: () => import('@/view/user/ValidateUser')
  },
  {
    path: '/tradePwassword',
    name: 'tradePwassword',
    meta: { title: '重置交易密码' },
    component: () => import('@/view/user/TradePwassword')
  },
  {
    path: '/userDetail',
    name: 'userDetail',
    meta: { title: '个人中心' },
    component: () => import('@/view/user/UserDetail')
  },

  // { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'hash',
  routes: constantRouterMap
})
