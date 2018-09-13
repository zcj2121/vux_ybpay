import { signIn } from '@/api/login'
import { getToken, setToken } from '@/utils/auth'

const user = {
  state: {
    phone: '', // 手机号
    userChannel: '', // 用户来源
    token: getToken(), // token
    userId: '20180824userid', // 用户id
    productCode: '20180824productcode', // 产品id
    trueName: ''  // 真实姓名
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_PHONE: (state, phone) => {
      state.phone = phone
    },
    SET_USER_ID: (state, userId) => {
      state.userId = userId
    },
    SET_USERCHANNEL: (state, userChannel) => {
      state.userChannel = userChannel
    },
    SET_PRODUCTCODE: (state, productCode) => {
      state.productCode = productCode
    },
    SET_TRUENAME: (state, trueName) => {
      state.trueName = trueName
    }
  },

  actions: {
    // 登录 获取用户信息
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        signIn(userInfo).then(response => {
          const data = response.data
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          commit('SET_PHONE', data.data.phone)
          commit('SET_USER_ID', data.data.userId)
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    }

    // ,

    // 获取用户信息
    // GetInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getInfo(state.token).then(response => {
    //       const data = response.data
    //       const executionId = response.executionId
    //       const conString = response.conString
    //       commit('SET_ROLES', data.roles)
    //       commit('SET_NAME', data.displayName)
    //       commit('SET_USER_ID', data.userId)
    //       commit('SET_AVATAR', data.rolesValue)
    //       commit('SET_EXECUTIONID', executionId)
    //       commit('SET_CONSTRING', conString)
    //       menuItem().then(res => {
    //         const datachild = res.list
    //         commit('SET_EDITMENU', datachild)
    //         resolve(response)
    //       }).catch(error => {
    //         reject(error)
    //       })
    //       resolve(response)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    //
    // // 登出
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '')
    //       commit('SET_ROLES', '')
    //       removeToken()
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    //
    // // 前端 登出
    // FedLogOut({ commit }) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', '')
    //     removeToken()
    //     resolve()
    //   })
    // },
    //
    // // 修改
    // editMenu({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     menuItem().then(response => {
    //       const datachild = response.list
    //       commit('SET_EDITMENU', datachild)
    //       resolve(response)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    // // 终止 状态
    // stopState({ commit }) {
    //   return new Promise(resolve => {
    //     commit('SET_STOPSTATE')
    //     resolve()
    //   })
    // }
  }
}

export default user
