import request from '@/utils/request';

// 封装接口请求模块
export const login = (data) => {
  return request({
    url: 'sys/login',
    method: 'POST',
    data,
  });
};

// 封装登录请求动作
