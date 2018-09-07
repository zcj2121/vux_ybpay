const getters = {
  token: state => state.user.token,
  userId: state => state.user.userId,
  phone: state => state.user.phone,
  userChannel: state => state.user.userChannel
}
export default getters
