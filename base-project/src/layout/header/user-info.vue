<script setup lang="ts">
import { Ref, ref, computed } from 'vue';
import { CaretBottom } from '@element-plus/icons';
import { useStore } from 'vuex';
import StPersonalInfo from '@/layout/header/personal-info.vue';

const store = useStore();
const infoVisible: Ref<boolean> = ref(false);
const passwordVisible: Ref<boolean> = ref(false);
const userInfo = computed(() => store.getters['user/getUserInfo']);
</script>
<template>
  <div class="avatar-container">
    <st-personal-info
      :visible="infoVisible"
      @toggleClick="infoVisible = false" />
    <el-dropdown>
      <div class="avatar-wrapper">
        <img
          src="@/assets/images/avatar.png"
          class="user-avatar" />
        <span class="user-info">
          <small class="username"> {{ userInfo?.name }}</small>
        </span>
        <el-icon><caret-bottom /></el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            command="userinfo"
            @click="infoVisible = true">
            用户信息
          </el-dropdown-item>
          <el-dropdown-item
            command="mysource"
            @click="passwordVisible = true">
            修改密码
          </el-dropdown-item>
          <el-dropdown-item
            command="logout"
            @click="out">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="scss">
  .avatar-container {
    .avatar-wrapper {
      display: flex;
      align-items: center;
      cursor: pointer;

      .user-info {
        position: relative;
        display: inline-block;
        max-width: 100px;
        padding: 0 0 0 5px;
        overflow: hidden;
        font-size: 12px;
        line-height: 24px;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: top;
      }

      .user-avatar {
        width: 12px;
        height: 12px;
        cursor: pointer;
        border-radius: 10px;
      }

      .username {
        padding: 0 2px;
        font-size: 14px;
        color: #fff;
      }

      .el-icon-caret-bottom {
        margin-left: 8px;
        font-size: 12px;
        cursor: pointer;
      }

      svg {
        width: 16px;
        color: #fff;
      }
    }
  }
</style>
