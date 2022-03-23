<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router/index';
import errGif from '@/assets/images/401.gif';

const route = useRoute();
const dialogVisible = ref(false);
const back = () => {
  if (route.query.noGoBack) {
    router.push({ path: '/dashboard' });
  } else {
    router.go(-1);
  }
};
</script>
<template>
  <div class="err-page-container">
    <el-button
      icon="arrow-left"
      class="pan-back-btn"
      @click="back">
      返回
    </el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        <h2>你没有权限去该页面</h2>
        <h6>请联系管理员</h6>
        <ul class="list-unstyled">
          <li class="link-type">
            <router-link to="/home">回首页</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img
          :src="errGif"
          width="313"
          height="428"
          alt="Girl has dropped her ice cream." />
      </el-col>
    </el-row>
    <el-dialog
      :visible="dialogVisible"
      title="随便看">
      <img
        src="https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646"
        class="pan-img" />
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.err-page-container {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;

  .pan-back-btn {
    color: #fff;
    background: #008489;
    border: none !important;
  }

  .pan-gif {
    display: block;
    margin: 0 auto;
  }

  .pan-img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }

  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }

  h2 {
    padding-top: 12px;
  }

  h6 {
    padding: 12px 0;
  }

  .list-unstyled {
    font-size: 14px;

    li {
      padding-bottom: 5px;
    }

    a {
      color: #008489;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
