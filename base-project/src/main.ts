import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import App from '@/App.vue';
import router from '@/router/index';
import store from '@/store/index';
import '@/styles/index.scss';

import 'virtual:svg-icons-register';
import CustomComponents from '@/components/index';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(ElementPlus, { locale: zhCn });

app.use(CustomComponents);
app.use(router).use(store).mount('#app');
