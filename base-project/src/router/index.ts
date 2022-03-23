import {
  createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw
} from 'vue-router';
import NProgress from 'nprogress';
import store from '@/store/index';
import Layout from '@/layout/index.vue';
import getToken from '@/utils/auth';

import 'nprogress/nprogress.css';
import { setSSORedirectUrl } from '@/utils/sso';

const NODE_ENV = import.meta.env.VITE_APP_NODE_ENV;

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          noCache: true,
          affix: true
        }
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
  },
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/401',
    name: '401',
    component: () => import(/* webpackChunkName: "401" */ '@/views/error-page/401.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/error-page/404.vue')
  }
];

// const redirect404 = {
//   path: '/:pathMatch(.*)*',
//   redirect: '/404'
// };
const whiteList = [
  '/',
  '/home',
  '/sso/callback/token'
];
NProgress.configure({ showSpinner: false });

const router = createRouter({
  history: createWebHashHistory(),
  // '/#/main/'
  // createWebHashHistory(),
  //  createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const routeList = store.getters['permission/addRoutes'];
  if (Array.isArray(routeList) && !routeList.length) {
    await store.dispatch('permission/generateRoutes');
    const accessRoutes = await store.dispatch('permission/generateRoutes');
    router.addRoute(accessRoutes);
    // router.addRoute(redirect404);
    next({
      ...to,
      replace: true
    });
  } else {
    next();
  }
  NProgress.done();
  // const { token, refreshToken } = getToken();
  // if (token || refreshToken) {
  //   if (to.path === '/login') {
  //     next('/');
  //     NProgress.done();
  //   } else {
  //     const routeList = store.getters['permission/addRoutes'];
  //     if (Array.isArray(routeList) && !routeList.length) {
  //       try {
  //         await store.dispatch('user/setUserInfo');
  //         await store.dispatch('permission/generateRoutes');
  //         const accessRoutes = await store.dispatch('permission/generateRoutes');
  //         router.addRoute(accessRoutes);
  //         router.addRoute(redirect404);
  //         next({
  //           ...to,
  //           replace: true
  //         });
  //       } catch {
  //         if (NODE_ENV === 'pro') {
  //           window.location.replace(setSSORedirectUrl());
  //         } else {
  //           next();
  //         }
  //       }
  //     } else {
  //       next();
  //     }
  //     NProgress.done();
  //   }
  // } else if (whiteList.indexOf(to.path) !== -1) {
  //   next();
  //   NProgress.done();
  // } else {
  //   window.location.replace(setSSORedirectUrl());
  //   NProgress.done();
  // }
});

export default router;
