// 登录鉴权
import router from './router';
import store from '@/store';

// 白名单页面
const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
  // 登录后不能进入login页面
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/');
    } else {
      next();
    }
  } else {
    // 未登录需进入登录页面
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next('/login');
    }
  }
});
