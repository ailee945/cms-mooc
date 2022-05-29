const { createI18n } = require('vue-i18n');
import store from '@/store';
import zhLocale from './lang/zh';
import enLocale from './lang/en';

const messages = {
  en: {
    msg: {
      ...enLocale,
    },
  },
  zh: {
    msg: {
      ...zhLocale,
    },
  },
};

// 获取本地缓存语言
function getLanguage() {
  return store && store.getters && store.getters.language;
}

const i18n = createI18n({
  // 使用composition API
  legacy: false,
  // 全局使用t函数
  globalInjection: true,
  locale: getLanguage(),
  messages,
});

export default i18n;
