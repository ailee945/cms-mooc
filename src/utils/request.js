import axios from 'axios';
// import md5 from 'md5';

// 封装环境变量
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
console.log(process.env.VUE_APP_BASE_API);
export default service;

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
