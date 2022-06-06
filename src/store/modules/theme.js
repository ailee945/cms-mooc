import { setItem, getItem } from '@/utils/storage';
import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant';

export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
  }),
  getters: {},
  mutations: {
    setMainColor(state, newColor) {
      state.mainColor = newColor;
      setItem(MAIN_COLOR, newColor);
    },
  },
  actions: {},
};
