import { createRouter, createWebHashHistory } from 'vue-router';

// 公开路由表
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login'),
  },
  {
    path: '/',
    component: () => import('@/layout/Index'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes,
});

export default router;
