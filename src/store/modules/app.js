import { LANG, TAGS_VIEW } from '@/constant';
import { getItem, setItem } from '@/utils/storage';

export default {
  namespaced: true,
  state: {
    sidebarOpened: true,
    language: getItem(LANG) || 'zh',
    tagsViewList: getItem(TAGS_VIEW) || [],
  },
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened;
    },
    setLanguage(state, lang) {
      setItem(LANG, lang);
      state.language = lang;
    },
    addTagsViewList(state, tag) {
      // 处理重复的功能
      const isFind = state.tagsViewList.find((item) => {
        return item.path === tag.path;
      });
      // 添加tags
      if (!isFind) {
        state.tagsViewList.push(tag);
        setItem(TAGS_VIEW, state.tagsViewList);
      }
    },
  },
};
