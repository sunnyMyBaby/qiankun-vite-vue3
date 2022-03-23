<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import Layout from '@/layout/index.vue';

const route = useRoute();
const showLayout = ref(false);
watch(
  () => route.path,
  (path) => {
    const arr: Array<string> = [];
    router.getRoutes().forEach((item) => {
      arr.push(item.path);
    });
    if (arr.includes(path)) {
      showLayout.value = false;
    } else {
      showLayout.value = true;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <router-view
      v-if="!showLayout"
      v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <layout v-show="showLayout" />
  </div>
</template>

<style>
  #app {
    width: 100vw;
    min-width: 960px;
    height: 100vh;
  }
</style>
