<template>
  <el-menu
    :default-active="activeMenu"
    :uniquOpened="true"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    router
  >
    <SidebarItem
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></SidebarItem>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SidebarItem from './SidebarItem.vue';
import { filterRoutes, generateMenus } from '@/utils/route';

const router = useRouter();
const routes = computed(() => {
  const filter = filterRoutes(router.getRoutes());
  return generateMenus(filter);
});

// 默认激活
const route = useRoute();
const activeMenu = computed(() => {
  const { path } = route;
  return path;
});
</script>

<style lang="scss" scoped></style>
