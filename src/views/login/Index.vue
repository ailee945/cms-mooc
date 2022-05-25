<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
      label-width="70px"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <!-- username -->
      <el-form-item prop="username" label="用户名">
        <!-- <span class="svg-container">
          <svg-icon icon="user" />
        </span> -->
        <el-input
          placeholder="username"
          name="username"
          type="text"
          v-model="loginForm.username"
        />
      </el-form-item>

      <!-- password -->
      <el-form-item prop="password" label="密码">
        <!-- <span class="svg-container">
          <svg-icon icon="password" />
        </span> -->
        <el-input
          lable="密码"
          v-model="loginForm.password"
          type="password"
          placeholder="password"
          show-password
        />
        <!-- <span class="show-pwd">
          <svg-icon icon="eye" />
        </span> -->
      </el-form-item>

      <!-- 登录按钮 -->
      <el-button
        type="primary"
        style="width: 60%; transform: translateX(50%); margin-top: 5px"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { validatePassword } from './index.js';

// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456',
});

// 验证规则
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空',
    },
  ],
  password: [
    {
      required: true,
      trigger: 'change',
      validator: validatePassword(),
    },
  ],
});

// 处理密码明文显示
// script中使用响应式数据需要.value, 插值语法中则不需要
// console.log(loginForm.value.username);
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 400px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    :v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    :v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  // .svg-container {
  //   padding: 6px 5px 6px 15px;
  //   color: $dark_gray;
  //   vertical-align: middle;
  //   display: inline-block;
  // }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  // .show-pwd {
  //   position: absolute;
  //   right: 10px;
  //   top: 7px;
  //   font-size: 16px;
  //   color: $dark_gray;
  //   cursor: pointer;
  //   user-select: none;
  // }
}
</style>
