<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { isTags } from '@/utils/tags';
import { generateTitle } from '@/utils/i18n';

const route = useRoute();
const store = useStore();

// 生成title
const getTitle = (route) => {
  let title = '';
  if (!route.meta) {
    const pathArr = route.path.split('/');
    title = pathArr[pathArr.length - 1];
  } else {
    title = generateTitle(route.meta.title);
  }
  return title;
};

// 监听路由变化
watch(route, (to) => {
  if (!isTags(to.path)) return;
  const { fullPath, meta, name, params, path, query } = to;
  store.commit(
    'app/addTagsViewList',
    {
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to),
    },
    {
      immediate: true,
    }
  );
});
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
