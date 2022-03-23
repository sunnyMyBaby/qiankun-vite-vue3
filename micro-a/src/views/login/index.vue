<script lang="ts" setup>
import {} from 'vue';
import StLogin from '@/views/login/login.vue';
</script>
<template>
  <div class="login-wrap">
    <div class="login-logo">
      <a href="#/"><img src="@/assets/images/login-logo.png" /></a>
    </div>
    <div class="login-container">
      <div class="login-box">
        <div class="login-main">
          <!-- <login /> -->
          <st-login />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .login-wrap {
    .login-logo {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 90px;
      padding: 23px 0 0 100px;
      background: linear-gradient(246deg, rgba(130, 152, 234, 1) 0%, rgba(85, 96, 214, 1) 100%);
    }

    .login-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px 50px 25px 50px;
      margin-right: -60%;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
    }

    .login-container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: calc(100vh);
    }

    .login-container::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -999;
      width: 100%;
      height: 100%;
      content: '';
      background-image: url(@/assets/images/login-bg.png);
      background-size: cover;
    }
  }
</style>
