<template>
  <div @click="onToggle">
    <SvgIcon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import screenfull from 'screenfull';

// 判断是否全屏
const isFullscreen = ref(false);

// 触发事件
const onToggle = () => {
  screenfull.toggle();
  // 方法一
  // isFullscreen.value = !isFullscreen.value;
};
// 方法二
// 监听screenful的变化
const change = () => {
  isFullscreen.value = screenfull.isFullscreen;
};
// 设置侦听器
onMounted(() => {
  screenfull.on('change', change);
});
// 删除侦听器
onUnmounted(() => {
  screenfull.off('change', change);
});
</script>

<style lang="scss" scoped></style>
