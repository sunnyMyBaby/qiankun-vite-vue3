<script setup lang="ts"></script>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped>
  #app {
    width: 100vw;
    min-width: 960px;
    height: 100vh;
  }
</style>
