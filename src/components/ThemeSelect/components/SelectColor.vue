<template>
  <el-dialog
    :title="$t('msg.universal.title')"
    :model-value="modelValue"
    @close="colsed"
    width="22px"
  >
    <el-color-picker></el-color-picker>
  </el-dialog>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
