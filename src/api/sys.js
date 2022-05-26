import request from '@/utils/request';

// 封装登录接口请求模块
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data,
  });
};

// 封装获取用户信息接口请求模块
export const getUserInfo = () => {
  // console.log('网络请求');
  return request({
    url: '/sys/profile',
  });
};
