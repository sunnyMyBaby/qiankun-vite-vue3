<script setup lang="ts">
import {} from 'vue';
</script>
<template>
  <div class="contact-wrap">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      textColor="#fff"
      backgroundColor="transparent"
      activeTextColor="#ffd04b">
      <el-sub-menu index="2-1">
        <template #title>联系我们</template>
        <div class="custom-sub-menu-item">
          <a href="mailto:opencloud-support@sensetime.com">邮件咨询</a>
        </div>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
  .contact-wrap {
    min-width: 180px;
  }

  .custom-sub-menu-item {
    padding: 16 0;
    color: #242424;

    a {
      display: block;
      padding: 0 16px;
      line-height: 32px;
      cursor: pointer;
    }

    a:hover {
      color: #1890ff;
      text-decoration: none;
      background-color: #f4f4f4;
    }
  }

  .el-sub-menu:hover {
    background: #4e5358;
  }
</style>
