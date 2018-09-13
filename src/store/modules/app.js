// import Cookies from 'js-cookie'

const app = {
  state: {
    aLoading: false
    // sidebar: {
    //   opened: !+Cookies.get('sidebarStatus')
    // }
  },
  mutations: {
    loadingStar(state) {
      state.aLoading = true
    },
    loadingEnd(state) {
      state.aLoading = false
    }
  },
  actions: {
  }
}

export default app
