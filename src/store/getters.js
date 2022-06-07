import variables from '@/styles/variables.module.scss';
import { generateColors } from '@/utils/theme';
import { getItem } from '@/utils/storage';
import { MAIN_COLOR } from '@/constant';

const getters = {
  token: (state) => state.user.token,
  // 判断用户信息是否存在
  hasUserInfo: (state) => JSON.stringify(state.user.userInfo) !== '{}',
  userInfo: (state) => state.user.userInfo,
  cssVar: () => ({
    ...variables,
    ...generateColors(getItem(MAIN_COLOR)),
  }),
  sidebarOpened: (state) => state.app.sidebarOpened,
  language: (state) => state.app.language,
  mainColor: (state) => state.theme.mainColor,
  tagsViewList: (state) => state.app.tagsViewList,
};

export default getters;
