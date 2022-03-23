/**
 * 动态路由
 */

import { ElMessage } from 'element-plus';
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { NAV_TYPE, NAV_LIST_TYPE } from '@/types/index';
import Layout from '@/layout/index.vue';

const modules = import.meta.glob('../views/**/*.vue');

const asyncRouter = (menu: Array<NAV_LIST_TYPE>) => {
  const isMicro = qiankunWindow.__POWERED_BY_QIANKUN__;
  const menuList = menu;

  const nav: Array<NAV_TYPE> = [];
  menuList.forEach((item: NAV_LIST_TYPE) => {
    const { list } = item;
    if (Array.isArray(list) && list.length > 0) {
      nav.push(...list);
    }
  });

  const list: Array<any> = [];

  const routesList: Record<string, any> = {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: []
  };

  nav.forEach((item: NAV_TYPE) => {
    const { url, menuId, name } = item;
    if (modules[`../views/${url}.vue`]) {
      list.push({
        path: `/${url}`,
        name: url.replace(/[/-]/g, ''),
        component: modules[`../views/${url}.vue`],
        meta: {
          menuId,
          title: name,
          isDynamic: true,
          isTab: true,
          iframeUrl: ''
        }
      });
    } else {
      ElMessage({
        message: `${name + url}  is not found`,
        type: 'error',
        duration: 5 * 1000
      });
    }
  });

  routesList.children = list;
  // TODO 微服务时只注册具体页面的路由，不注册layOut
  return isMicro ? list : routesList;
};

export default asyncRouter;
