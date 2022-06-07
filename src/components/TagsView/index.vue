<template>
  <div class="tags-view-container">
    <router-link
      v-for="tag in store.getters.tagsViewList"
      class="tags-view-item"
      :class="isActive(tag) ? 'active' : ''"
      :key="tag.fullPath"
      :to="{ path: tag.fullPath }"
    >
      {{ tag.title }}
      <i
        v-show="!isActive(tag)"
        class="el-icon-close"
        @click.prevent.stop="onCloseClick"
      ></i>
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();

// 是否被选中
const isActive = (tag) => {
  return tag.path === route.path;
};

// 关闭tags
const onCloseClick = () => {};
</script>

<style lang="scss" scoped></style>
