<script setup lang="ts">
import {
  defineProps, withDefaults, defineEmits, defineExpose, computed
} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const userInfo = computed(() => store.getters['user/getUserInfo']);
const props = withDefaults(
  defineProps<{
    visible: boolean;
  }>(),
  { visible: false }
);

const emit = defineEmits([ 'toggleClick' ]);

const toggleClick = () => {
  emit('toggleClick');
};

const isShow = computed(() => props.visible);

defineExpose({ toggleClick });
</script>

<template>
  <div>
    <el-dialog
      v-model="isShow"
      destroyOnClose
      title="个人信息"
      customClass="organization"
      @closed="toggleClick">
      <div class="incon-info-wrap">
        <div class="personal-icon">
          <img src="@/assets/images/personal-icon.png" />
        </div>
        <div>
          <div>
            <span class="label"> 用户名：</span><span> {{ userInfo?.name }}</span>
          </div>
          <div>
            <span class="label"> 邮箱：</span><span> {{ userInfo?.email }}</span>
          </div>
          <div>
            <span class="label"> 电话：</span><span> {{ userInfo?.phone }}</span>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
  ::v-deep .organization {
    width: 470px;
  }

  .incon-info-wrap {
    display: flex;
    align-items: center;

    img {
      display: block;
      width: 100px;
    }

    span {
      font-size: 16px;
      line-height: 32px;
    }

    .label {
      display: inline-block;
      width: 72px;
      text-align: right;
    }
  }
</style>
