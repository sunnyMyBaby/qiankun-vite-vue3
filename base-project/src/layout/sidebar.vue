<script setup lang="ts">
import {
  ref, computed, onMounted, watch
} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { get } from 'lodash';
import microMenu from '@/api/micro-menu';

const store = useStore();
const router = useRouter();
const defaultActive = ref('');
const menu = ref<Array<any>>([]);
onMounted(() => {
  defaultActive.value = get(router, 'currentRoute.value.meta.menuId', '');
});

const routes = computed(() => store.getters['permission/addRoutes']);

watch(
  routes,
  (val) => {
    menu.value = [
      ...val,
      ...microMenu
    ];
  },
  {
    immediate: true,
    deep: true
  }
);
const jump = (url: string) => {
  router.push({ path: `/${url}` });
};
</script>

<template>
  <div class="layout-sidebar-wrap">
    <el-menu
      size="small"
      backgroundColor="#f5f5f5"
      :defaultActive="defaultActive"
      class="el-menu-vertical-demo"
      :collapse="store.getters['app/sidebar']">
      <template v-for="item in menu">
        <el-sub-menu
          v-if="item.list.length > 1"
          :key="item.menuId"
          :index="item.menuId">
          <template #title>
            <div class="nav-item">
              <st-svg-icon
                :name="item.icon"
                :width="10" />
              <span>{{ item.name }}</span>
            </div>
          </template>
          <el-menu-item
            v-for="subItem in item.list"
            :key="subItem.menuId"
            :index="subItem.menuId"
            @click="jump(subItem.url)">
            {{ subItem.name }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item
          v-else-if="item.list.length === 1"
          :key="item?.list[0].menuId"
          :index="item?.list[0].menuId"
          @click="jump(item?.list[0].url)">
          <div class="nav-item">
            <st-svg-icon
              :name="item.icon"
              :width="10" />
            <span>{{ item?.list[0].name }}</span>
          </div>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<style scoped lang="scss">
  .layout-sidebar-wrap {
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
    }

    .nav-item {
      display: flex;
      align-items: center;

      span {
        padding-left: 10px;
      }
    }

    .el-menu {
      background: transparent;
      border-right: none;
    }

    .sidebar {
      height: calc(100vh - 60px);
    }

    .el-menu-item,
    ::v-deep .el-sub-menu__title {
      height: 36px;
      line-height: 36px;
    }
  }
</style>
