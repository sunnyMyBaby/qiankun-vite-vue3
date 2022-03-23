import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import store from '@/store/index';
import Layout from '@/layout/index.vue';
import { getCookies } from '@/utils/auth';

import 'nprogress/nprogress.css';

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
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/login/index.vue')
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

const redirect404 = {
  path: '/:pathMatch(.*)*',
  redirect: '/404'
};
const whiteList = [
  '/',
  '/home'
];
NProgress.configure({ showSpinner: false });

const router = createRouter({
  history: createWebHashHistory('/#/micro-a'),
  routes
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const { token } = getCookies();
  if (token) {
    if (to.path === '/login') {
      next('/');
      NProgress.done();
    } else {
      const routeList = store.getters['permission/addRoutes'];
      if (Array.isArray(routeList) && !routeList.length) {
        try {
          await store.dispatch('user/setUserInfo');
          await store.dispatch('permission/generateRoutes');
          const accessRoutes = await store.dispatch('permission/generateRoutes');
          if (accessRoutes && Array.isArray(accessRoutes)) {
            accessRoutes.forEach((route) => {
              router.addRoute(route);
            });
          } else {
            router.addRoute(accessRoutes);
          }
          router.addRoute(redirect404);

          next({
            ...to,
            replace: true
          });
        } catch {
          if (NODE_ENV === 'pro') {
            next('/login');
          } else {
            next();
          }
        }
      } else {
        next();
      }
      NProgress.done();
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    next();
    NProgress.done();
  } else {
    next('/login');
    NProgress.done();
  }
});

export default router;
