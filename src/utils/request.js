import axios from 'axios';
import { ElMessage } from 'element-plus';
import store from '@/store';
// import md5 from 'md5';
import { isCheckTimeout } from './auth';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  // 请求成功拦截器
  (config) => {
    // 请求添加icode
    // const { icode, time } = getTestICode();
    config.headers.icode = 'ED5BD770A85A4C12';
    // config.headers.icode = icode;
    // config.headers.codeType = time;

    // 统一携带token
    if (store.getters.token) {
      if (isCheckTimeout()) {
        store.dispatch('user/logoutAction');
        // 返回一个含有错误信息的Promise
        return Promise.reject(new Error('token 失效'));
      }
      config.headers.Authorization = `Bearer ${store.getters.token}`;
    }
    return config; // 必须返回配置
  },
  // 请求失败拦截器
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data;
    // 请求成功
    if (success) {
      return data;
    } else {
      // 请求成功，业务失败
      ElMessage.error(message);
      return Promise.reject(new Error(message));
    }
  },
  // 请求失败
  (error) => {
    // 服务端 token 失效
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === '401'
    ) {
      store.dispatch('user/logoutAction');
    }
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);

/**
 * 返回 Icode 的实现
 */
// function getTestICode() {
//   const now = parseInt(Date.now() / 1000);
//   const code = now + 'LGD_Sunday-1991';
//   return {
//     icode: md5(code),
//     time: now,
//   };
// }

export default service;
