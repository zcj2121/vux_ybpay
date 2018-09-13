const getters = {
  // user
  token: state => state.user.token,
  userId: state => state.user.userId,
  phone: state => state.user.phone,
  userChannel: state => state.user.userChannel,
  trueName: state => state.user.trueName,
  // app
  aLoading: state => state.app.aLoading
}
export default getters
