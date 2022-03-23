<!--
  窗口全屏/缩放
 -->
<script setup lang="ts">
import { ref } from 'vue';
import screenfull from 'screenfull';

const isFullscreen = ref(false);
const click = () => {
  isFullscreen.value = !isFullscreen.value;
  screenfull.toggle();
};
</script>
<template>
  <div
    class="screenfull-svg"
    @click="click">
    <st-svg-icon :name="isFullscreen ? 'narrow' : 'enlarge'" />
  </div>
</template>

<style scoped lang="scss">
  .screenfull-svg {
    display: inline-block;
    width: 18px;
    height: 18px;
    vertical-align: 10px;
    cursor: pointer;
    fill: black;
  }
</style>
