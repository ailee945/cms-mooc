<template>
  <div class="app-wrapper">
    <!-- 左侧 -->
    <SideBar class="sidebar-container" />
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
import SideBar from './components/SideBar.vue';
import NavBar from './components/NavBar.vue';
import AppMain from './components/AppMain.vue';
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.app-warpper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;

  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100%-#{$sideBarWidth});
  }
}
</style>
