<template>
  <!-- el-icon -->
  <el-icon
    v-if="icon.includes('el-icon')"
    class="sub-el-icon"
    :class="icon"
  ></el-icon>
  <!-- 非el-icon -->
  <SvgIcon v-else :icon="icon" />
  <!-- 文本 -->
  <span>{{ generateTitle(title) }}</span>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
import { generateTitle } from '@/utils/i18n';
// eslint-disable-next-line no-undef
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
