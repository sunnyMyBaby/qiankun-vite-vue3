<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

onMounted(() => {
  const route = useRoute();
  const router = useRouter();
});
</script>

<template>
  <div>云服务器ECS</div>
</template>

<style lang="scss" scoped></style>
