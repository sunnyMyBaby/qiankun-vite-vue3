<script lang="ts" setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  // svg图标名称与assets/svg下的图标名称一致
  name: {
    type: String,
    required: true
  },
  // 图标class
  className: {
    type: String,
    default: ''
  },
  // 图标宽度
  width: {
    type: Number,
    default: 18
  },
  // 图标高度
  height: {
    type: Number,
    default: 18
  },
  color: {
    type: String,
    default: ''
  }
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`;
  }
  return 'svg-icon';
});
</script>

<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      color: color
    }">
    <use :href="symbolId" />
  </svg>
</template>

<style scope>
  .svg-icon {
    overflow: hidden;

    /* width: 1em;
    height: 1em; */

    /* vertical-align: -0.1em; */
    fill: currentColor;
  }
</style>
