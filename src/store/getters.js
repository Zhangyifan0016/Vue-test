const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  menus: (state) => state.user.menus,
  tagsview: (state) => state.tagsview.tagsView
}

export default getters
