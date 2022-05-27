<template>
  <div class="app-wrapper">
    <!-- 左侧 -->
    <SideBar
      class="sidebar-container"
      :style="{
        backgroundColor: variables.menuBg,
      }"
    />
    <!-- 右侧 -->
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部 -->
        <NavBar />
      </div>
      <!-- 内容区 -->
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import SideBar from './components/Sidebar/index';
import NavBar from './components/NavBar.vue';
import AppMain from './components/AppMain.vue';
import variables from '@/styles/variables.module.scss';
</script>

<style lang="scss" scoped>
@import '@/styles/variables.module.scss';
@import '@/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
