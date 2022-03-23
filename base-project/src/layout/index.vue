<script setup lang="ts">
import * as Vue from 'vue';
import Vuex from 'vuex';
import * as VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { registerMicroApps, start } from 'qiankun';

import StSidebar from '@/layout/sidebar.vue';
import StHeader from '@/layout/header/index.vue';

import Router from '@/router/index';
import store from '@/store/index';

// 子应用注册信息
import getApps from '@/micro/app';

const router = VueRouter.useRouter();

Vue.onMounted(() => {
  /**
   * 注册微应用
   * 第一个参数 - 微应用的注册信息
   * 第二个参数 - 全局生命周期钩子
   */
  registerMicroApps(getApps({
    store,
    Vue,
    Vuex,
    VueRouter,
    Router
  }), {
    // qiankun 生命周期钩子 - 微应用加载前
    beforeLoad: () => {
      // 加载微应用前，加载进度条
      NProgress.start();
      return Promise.resolve();
    },
    // qiankun 生命周期钩子 - 微应用挂载后
    afterMount: () => {
      // 加载微应用前，进度条加载完成
      NProgress.done();
      return Promise.resolve();
    }
  });
  start({
    prefetch: 'all',
    sandbox: {
      // strictStyleIsolation: true,
      experimentalStyleIsolation: true
    }
  });
});
</script>

<template>
  <div class="layout-wrap">
    <st-header />
    <div class="content">
      <div class="sidebar-container">
        <st-sidebar />
      </div>
      <div class="main-container">
        <router-view
          v-show="router.currentRoute.value"
          v-slot="{ Component }">
          <!-- 主应用渲染区域 -->
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
        <div id="mainwrapper">
          <!-- 微应用渲染区域 -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .layout-wrap {
    .content {
      display: flex;
      height: calc(100vh - 60px);
      overflow: hidden;

      .sidebar-container {
        background: #f9f9f9;
        border-right: 1px solid #dedede;
      }

      .main-container {
        flex: 1;
        background: #f9f9f9;
      }
    }
  }
</style>
