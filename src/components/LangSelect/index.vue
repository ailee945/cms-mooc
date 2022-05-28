<template>
  <el-dropdown class="international" trigger="click" @command="handleLanguage">
    <div>
      <el-tooltip contant="国际化" :effect="effect">
        <SvgIcon icon="language" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disable="language === 'zh'" command="zh"
          >中文</el-dropdown-item
        >
        <el-dropdown-item :disable="language === 'en'" command="en"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

const store = useStore();
const language = computed(() => store.getters.language);

// 切换语言的方法
const i18n = useI18n();
const handleLanguage = (lang) => {
  // 切换i18n
  i18n.locale.value = lang;
  // 修改vuex中的language
  store.commit('app/setLanguage', lang);
  // 提示
  ElMessage.success('更新成功');
};
</script>

<style lang="scss" scoped></style>
