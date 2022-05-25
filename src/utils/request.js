import axios from 'axios';
import { ElMessage } from 'element-plus';
// import md5 from 'md5';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use((config) => {
  // const { icode, time } = getTestICode();
  config.headers.icode = 'ED5BD770A85A4C12';
  // config.headers.icode = icode;
  // config.headers.codeType = time;
  return config; // 必须返回配置
});

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
    ElMessage.error(error);
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
