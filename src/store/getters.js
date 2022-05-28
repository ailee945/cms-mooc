import variables from '@/styles/variables.module.scss';
const getters = {
  token: (state) => state.user.token,
  // 判断用户信息是否存在
  hasUserInfo: (state) => JSON.stringify(state.user.userInfo) !== '{}',
  userInfo: (state) => state.user.userInfo,
  cssVar: () => variables,
  sidebarOpened: (state) => state.app.sidebarOpened,
  language: (state) => state.app.language,
};

export default getters;
