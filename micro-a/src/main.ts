import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

import App from '@/App.vue';
import router from '@/router/index';
import store from '@/store/index';
import '@/styles/index.scss';

import 'virtual:svg-icons-register';
import CustomComponents from '@/components/index';
import 'element-plus/dist/index.css';
import stTrim from '@/directive/trim';

let app: any = null;
const render = () => {
  // const {
  //   store = undefined,
  //   Vue = undefined,
  //   Vuex = undefined,
  //   VueRouter = undefined,
  //   Router = undefined
  // } = props;

  app = createApp(App);
  app.use(ElementPlus, { locale: zhCn });

  app.use(CustomComponents);
  stTrim(app);
  app.use(router).use(store).mount('#micro-a');
};

renderWithQiankun({
  mount(props: Object) {
    console.log(9999999, props);
    render();
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount() {
    app.unmount();
    app = null;
  }
});
// eslint-disable-next-line no-underscore-dangle
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
