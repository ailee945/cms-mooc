<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item
      :to="{ path: '/' }"
      v-for="(item, index) in breadcrumbData"
      :key="item.path"
    >
      <!-- 不可点击项目 -->
      <span class="no-redirect" v-if="index === breadcrumbData.length - 1">{{
        item.meta.title
      }}</span>
      <!-- 可点击项目 -->
      <span class="redirect" v-else>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// 生成数组数据
const breadcrumbData = ref([]);
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  );
};

// 监听路由变化时触发
watch(
  route,
  () => {
    getBreadcrumbData();
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  :v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
