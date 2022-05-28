<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 不可点击项目 -->
        <span class="no-redirect" v-if="index === breadcrumbData.length - 1">{{
          item.meta.title
        }}</span>
        <!-- 可点击项目 -->
        <span class="redirect" @click="linkClick(item)" v-else>{{
          item.meta.title
        }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

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

// 处理跳转点击事件
const router = useRouter();
const linkClick = (item) => {
  router.push(item.path);
};

// 将来需要主题替换，所以hover的颜色设置为主色
const store = useStore();
const linkHoverColor = ref(store.getters.cssVar.menuBg);
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
  .redirect {
    color: #666;
    font-weight: 600;
  }
  .redirect:hover {
    color: v-bind(linkHoverColor);
    cursor: pointer;
  }
}
</style>
