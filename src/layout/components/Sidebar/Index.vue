// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="">
    <div class="logo-container">
      <el-avatar
        shape="square"
        src="https://tva1.sinaimg.cn/crop.0.0.480.480.180/ede9f258jw8fcydo9p3ihj20dc0dcwfs.jpg?KID=imgbed,tva&Expires=1653731219&ssig=CqmVb84d2U"
      ></el-avatar>
      <h2 class="logo-title" v-if="$store.getters.sidebarOpened">Vue3</h2>
    </div>
    <el-scrollbar>
      <SidebarMenu />
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue';
</script>

<style lang="scss" scoped>
.logo-container {
  height: 44px;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: white;
    font-weight: 600;
    line-height: 50px;
    font-size: 46px;
    white-space: nowrap;
  }
}
</style>
