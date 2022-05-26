import { login, getUserInfo } from '@/api/sys';
import md5 from 'md5';
import { TOKEN } from '@/constant';
import { setItem, getItem, removeAllItem } from '@/utils/storage';
import { setTimeStamp } from '@/utils/auth';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    token: getItem(TOKEN) || '',
    userInfo: {},
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN, token);
      // console.log(state.token);
    },
    setUserInfo(state, userInfo) {
      // console.log('setuserinfo');
      state.userInfo = userInfo;
    },
  },
  actions: {
    // 登录动作
    loginAction({ commit }, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password),
        })
          .then((data) => {
            // console.log(data.token);
            commit('setToken', data.token);
            // 保存登录时间戳
            setTimeStamp();
            router.push('/');
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 获取用户信息动作
    async getUserInfoAction({ commit }) {
      // console.log('getinfoaction');
      const res = await getUserInfo();
      commit('setUserInfo', res);
      // console.log(res);
      return res;
    },
    // 退出登录
    logoutAction({ commit }) {
      commit('setToken', '');
      commit('setUserInfo', '');
      removeAllItem();
      // TODO: 处理权限相关
      router.push('/login');
    },
  },
};
