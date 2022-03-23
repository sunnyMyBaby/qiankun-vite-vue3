<script lang="ts" setup>
import { ref } from 'vue';
import { Avatar, Lock, View as ViewIcon } from '@element-plus/icons';
import { setSSORedirectUrl } from '@/utils/sso';

const formRef = ref<any>(null);
const loading = ref<boolean>(false);

const ruleForm = ref<{
  pass: string;
  username: string;
}>({
  pass: '',
  username: ''
});

const passType = ref<boolean>(true);

const validatePass = (rule: Object, value: string, callback: Function) => {
  if (value === '') {
    callback(new Error('密码不能为空'));
  } else {
    callback();
  }
};

const validateUsername = (rule: Object, value: string, callback: Function) => {
  if (value === '') {
    callback(new Error('账号不能为空'));
  } else {
    callback();
  }
};

const rules = {
  pass: [
    {
      validator: validatePass,
      trigger: 'blur'
    }
  ],
  username: [
    {
      validator: validateUsername,
      trigger: 'blur'
    }
  ]
};

const login = () => {
  window.location.replace(setSSORedirectUrl());
  formRef?.value?.validate((valid: boolean) => {
    if (valid) {
      // alert('submit!');
    } else {
      console.log('error submit!!');
    }
    return false;
  });
};
const showPass = () => {
  passType.value = !passType.value;
};
</script>

<template>
  <el-form
    ref="formRef"
    size="large"
    class="login-form"
    :model="ruleForm"
    :rules="rules">
    <el-form-item prop="username">
      <el-input
        v-model.trim="ruleForm.username"
        type="text"
        placeholder="请输入用户名"
        autocomplete="off">
        <template #prefix>
          <el-icon
            class="el-input__icon"
            :size="18">
            <avatar />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input
        v-model.trim="ruleForm.pass"
        placeholder="请输入密码"
        :type="passType ? 'password' : 'text'">
        <template #prefix>
          <el-icon
            class="el-input__icon"
            :size="18">
            <lock />
          </el-icon>
        </template>
        <template #suffix>
          <el-icon
            class="el-input__icon"
            :size="18"
            @click="showPass">
            <view-icon />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        :loading="loading"
        class="submit"
        type="primary"
        @click="login">
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>
<style lang="scss" scoped>
  .login-form {
    width: 270px;

    .submit {
      width: 270px;
    }

    ::v-deep .el-input__inner {
      background: #f7f7f7;
      border: 0 solid #e1e1e3;
    }
  }
</style>
