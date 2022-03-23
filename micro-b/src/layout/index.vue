<script setup lang="ts">
import StSidebar from '@/layout/sidebar.vue';
import StHeader from '@/layout/header/index.vue';

</script>

<template>
  <div class="layout">
    <el-container>
      <el-header>
        <st-header />
      </el-header>
      <el-container>
        <el-aside>
          <st-sidebar />
        </el-aside>
        <el-main>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
  .layout {
    .el-header {
      padding: 0;
    }

    .el-aside {
      text-align: center;
      background-color: #e9eef3;

      --el-aside-width: '';
    }

    .el-main {
      height: calc(100vh - 60px);
      padding: 0;
      background: #eef1f6;
    }
  }
</style>
