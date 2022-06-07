<template>
  <div class="header-search" :class="{ show: isShow }">
    <SvgIcon class-name="search-icon" icon="search" @click.stop="onShowClick" />
    <el-select
      ref="headerSearchSelectRef"
      class="header-search-select"
      v-model="search"
      filterable
      default-first-option
      remote
      :remote-method="querySearch"
      placeholder="search"
      @change="onSelectChange"
    >
      <el-option
        v-for="option in searchOption"
        :key="option.item.path"
        :label="option.item.title.join('>')"
        :value="option.item"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { filterRoutes } from '@/utils/route';
import { generateRoutes } from './FuseData';
import { useRouter } from 'vue-router';
import Fuse from 'fuse.js';

// 数据源
const router = useRouter();
const searchPool = computed(() => {
  const routes = filterRoutes(router.getRoutes());
  return generateRoutes(routes);
});

// 模糊搜索相关
const fuse = new Fuse(searchPool.value, {
  // 是否按照优先级进行排序
  shouldSort: true,
  // 匹配长度超过这个时开始匹配
  minMatchCharLength: 1,
  // 将被搜索的键列表
  keys: [
    {
      name: 'title',
      weight: 0.7,
    },
    {
      name: 'path',
      weight: 0.3,
    },
  ],
});

// 控制search展示
const isShow = ref(false);
const onShowClick = () => {
  isShow.value = !isShow.value;
};

// search相关
const search = ref('');
// 搜索方法
const searchOption = ref([]);
const querySearch = (query) => {
  if (query !== '') {
    searchOption.value = fuse.search(query);
  } else {
    searchOption.value = [];
  }
};
// 选中回调
const onSelectChange = (val) => {
  router.push(val.path);
};
</script>

<style lang="scss" scoped>
.header-search {
  padding-top: 5px;
  font-size: 0 !important;
  :deep(.search-icon) {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;
    :deep(.el-input__inner) {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
