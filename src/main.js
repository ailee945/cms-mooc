import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

// 初始化样式
import './styles/index.scss';

// 登录鉴权
import './permission';

const app = createApp(App);

// 全局导入svg
import installSvg from '@/icons';
installSvg(app);

app.use(store).use(router).use(i18n).mount('#app');
