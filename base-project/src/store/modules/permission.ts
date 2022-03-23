import { RouteRecordRaw } from 'vue-router';
import { ElMessage } from 'element-plus';
import { routes } from '@/router/index';
import asyncRouter from '@/router/async-router';

import { getNav } from '@/api/role';

export type STATE_TYPE = {
  routerUrlList: Array<RouteRecordRaw>;
  addRoutes: Array<RouteRecordRaw>;
};

const state: STATE_TYPE = {
  routerUrlList: [],
  addRoutes: []
};

const mutations = {
  SET_ROUTES: (st: STATE_TYPE, accessedRoutes: Array<RouteRecordRaw>) => {
    const val = st;
    val.addRoutes = accessedRoutes;
    val.routerUrlList = routes.concat(accessedRoutes);
  }
};

const actions = {
  generateRoutes({ commit }: any) {
    return new Promise((resolve, reject) => {
      getNav()
        .then((res: any) => {
          // TODO
          const { code = null, menuList = [], permissions = [] } = res;
          if (code === 0) {
            // TODO 动态路由
            resolve(asyncRouter(menuList));
            sessionStorage.setItem('permissions', JSON.stringify(permissions));
            commit('SET_ROUTES', menuList);
          } else {
            sessionStorage.setItem('permissions', '[]');
            resolve([]);
          }
        })
        .catch((err) => {
          ElMessage({
            message: err,
            type: 'error',
            duration: 5 * 1000
          });
          reject(err);
        });
    });
  }
};

const getters = {
  addRoutes: (st: STATE_TYPE) => st.addRoutes,
  routerUrlList: (st: STATE_TYPE) => st.routerUrlList
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
