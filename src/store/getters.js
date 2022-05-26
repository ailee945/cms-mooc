const getters = {
  token: (state) => state.user.token,
  // 判断用户信息是否存在
  hasUserInfo: (state) => JSON.stringify(state.user.userInfo) !== '{}',
  userInfo: (state) => state.user.userInfo,
};

export default getters;
