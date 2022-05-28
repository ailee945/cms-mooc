const { createI18n } = require('vue-i18n');

const message = {
  en: {
    msg: 'hello word',
  },
  zh: {
    msg: '你好 世界',
  },
};

const local = 'en';

const i18n = createI18n({
  // 使用
  legacy: false,
  globalInjection: true,
  local,
  message,
});

export default i18n;
