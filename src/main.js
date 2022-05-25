import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 初始化样式
import './styles/index.scss';

// import service from './utils/request';

const app = createApp(App);

// 全局导入svg
import installSvg from '@/icons';
installSvg(app);

app.use(store).use(router).mount('#app');
