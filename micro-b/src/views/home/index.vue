<script setup lang="ts">
import {} from 'vue';
import { useRouter } from 'vue-router';
import { getCookies } from '@/utils/auth';

const router = useRouter();
const { token } = getCookies();

const login = () => {
  router.push('/login');
};
const toControl = () => {
  router.push('/cloud/ecs');
};
</script>

<template>
  <div class="home-header">
    <div class="header">
      <img
        src="@/assets/images/logo.png"
        @click="toControl" />
      <div class="control-login">
        <span
          v-if="token"
          @click="toControl">控制台</span>
        <span
          v-else
          @click="login">登录</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-header {
  width: 100vw;
  height: 100vh;
  background: url("@/assets/images/home-bg.png") no-repeat center center;
  background-size: cover;

  .header {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 60px;
    padding: 0 90px;
    cursor: pointer;

    .control-login {
      font-size: 18px;
      color: #fff;
    }
  }

  .header:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  .open-cloud {
    padding-top: 18vh;
    padding-left: 10vw;
    font-size: 56px;
    color: #fff;
  }

  .open-des,
  .open-text {
    padding-top: 4vh;
    padding-left: 10vw;
    color: #fff;

    h1 {
      display: flex;
      align-items: center;
      font-size: 2rem;
    }

    h2 {
      padding-top: 40px;
      padding-left: 36px;
      font-size: 1.5rem;
      color: #adadad;
    }

    i {
      display: block;
      width: 20px;
      height: 20px;
      margin-right: 16px;
      background-color: #f7bb0a;
      border-radius: 50%;
    }
  }
}
</style>
