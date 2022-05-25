import { login } from '@/api/sys';
import md5 from 'md5';
import { TOKEN } from '@/constant';
import { setItem, getItem } from '@/utils/storage';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    token: getItem(TOKEN) || '',
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN, token);
      // console.log(state.token);
    },
  },
  actions: {
    login({ commit }, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password),
        })
          .then((data) => {
            // console.log(data.token);
            commit('setToken', data.token);
            router.push('/');
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
