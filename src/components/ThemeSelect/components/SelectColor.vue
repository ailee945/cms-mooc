<template>
  <!-- modelValue 从父组件接收 -->
  <el-dialog
    :title="$t('msg.universal.title')"
    :model-value="modelValue"
    @close="colsed"
    width="22px"
  >
    <!-- 内容区 -->
    <div class="content">
      <p class="title">{{ $t('msg.theme.themeColorChange') }}</p>
      <el-color-picker
        v-model="myColor"
        :predefine="predefineColors"
      ></el-color-picker>
    </div>
    <template #footer>
      <el-button @click="colsed">{{ $t('msg.universal.cancel') }}</el-button>
      <el-button type="primary" @click="confirm">{{
        $t('msg.universal.confirm')
      }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue';

// eslint-disable-next-line no-undef
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
// eslint-disable-next-line no-undef
const emits = defineEmits(['update:modelValue']);

// 预定义色值
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
];
// 默认色值
const myColor = ref('#00ff00');

// 取消事件和确定事件
const colsed = () => {
  emits('update:modelValue', false);
};
const confirm = () => {
  close();
};
</script>

<style lang="scss" scoped></style>
