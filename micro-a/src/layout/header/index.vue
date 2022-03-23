<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import store from '@/store/index';

import StHamburger from '@/layout/header/hamburger.vue';
import StUserInfo from '@/layout/header/user-info.vue';

const router = useRouter();

const emit = defineEmits([ 'hamburger' ]);

const isActive = ref(false);
const toggleClick = () => {
  isActive.value = !isActive.value;
  store.dispatch('app/toggleSideBar', isActive.value);
  emit('hamburger', 'xxxxxx');
};

const home = () => {
  router.push('/home');
};
</script>

<template>
  <div class="layout-header-wrap">
    <div
      class="logo"
      @click="home">
      <img src="@/assets/images/logo.png" />
    </div>
    <st-hamburger
      :isActive="isActive"
      @toggleClick="toggleClick"/>
    <div class="header-menu-wrap">
      <st-screenfull class="screenfull" />
      <st-user-info />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .layout-header-wrap {
    position: relative;
    display: flex;
    align-items: center;
    min-width: 960px;
    height: 60px;
    padding-right: 16px;
    overflow: hidden;
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(#111), to(rgba(55, 57, 60, 0.9)));

    .logo {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 190px;
      height: 60px;
    }

    .header-menu-wrap {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      height: 25px;

      .el-menu--horizontal {
        border-bottom: none;
      }

      .screenfull {
        margin-right: 10px;
      }
    }
  }
</style>
