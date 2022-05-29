// 不在组件中不能使用useI18n
// 需要使用i18n实例
import i18n from '@/i18n';
export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error(i18n.global.t('msg.login.passwordRule')));
    } else {
      callback();
    }
  };
};
