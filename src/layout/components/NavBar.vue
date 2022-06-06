<template>
  <div class="navbar">
    <!-- 汉堡按钮 -->
    <Hamburger calss="hamburger-container" />
    <Breadcrumb class="breadcrumb" />

    <div class="right-menu">
      <!-- search -->
      <HeaderSearch class="right-menu-item hover-effect" />
      <!-- 全屏切换 -->
      <Screenfull class="right-menu-item hover-effect" />
      <!-- 主题切换 -->
      <!-- <ThemeSelect class="right-menu-item hover-effect" /> -->
      <!-- 语言切换 -->
      <LangSelect class="right-menu-item hover-effect" />
      <!-- 头像区域 -->
      <el-dropdown class="avatar-container" trigger="hover">
        <div class="avatar-wrapper">
          <el-avatar
            square="circle"
            :src="$store.getters.userInfo.avatar"
          ></el-avatar>
          <!-- 设置区域 -->
          <!-- <i class="user-icon-s-tools">nihao </i> -->
        </div>
        <template #dropdown>
          <el-dropdown-item calss="user-down">
            <router-link to="/">{{ $t('msg.navBar.home') }}</router-link>
          </el-dropdown-item>
          <a href="https://www.baidu.com" target="__blank">
            <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
          </a>
          <el-dropdown-item @click="logout" divided>{{
            $t('msg.navBar.logout')
          }}</el-dropdown-item>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import Hamburger from './hamburger/index.vue';
import Breadcrumb from './breadcrumd/index.vue';
import LangSelect from '@/components/LangSelect/index.vue';
import Screenfull from './screenfull/index.vue';
import HeaderSearch from '@/components/HeaderSearch/index.vue';
// import ThemeSelect from '@/components/ThemeSelect/index.vue';
const store = useStore();
const logout = () => {
  store.dispatch('user/logoutAction');
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 50px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background, 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .breadcrumb {
    margin-left: 5px;
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-top: 5px;
    padding-right: 16px;

    .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      // width: 24px;
      // height: 24px;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }

      :deep(.avatar-container) {
        cursor: pointer;
        .avatar-wrapper {
          margin-top: 5px;
          position: relative;
          .el-avatar {
            --el-avatar-background-color: none;
            margin-right: 12px;
          }
        }
      }
    }
  }
}
</style>
