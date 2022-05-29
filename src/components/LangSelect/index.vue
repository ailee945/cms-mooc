<template>
  <el-dropdown
    class="international"
    trigger="click"
    @command="handleSetLanguage"
  >
    <div>
      <el-tooltip content="国际化" :effect="effect">
        <div><SvgIcon icon="language" /></div>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh"
          >中文</el-dropdown-item
        >
        <el-dropdown-item :disabled="language === 'en'" command="en"
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
const handleSetLanguage = (langCommand) => {
  // 切换i18n
  i18n.locale.value = langCommand;
  // 修改vuex中的language
  store.commit('app/setLanguage', langCommand);
  // 提示
  console.log(i18n.t('msg.toast.switchLangSuccess'));
  ElMessage({
    type: 'success',
    message: i18n.t('msg.toast.switchLangSuccess'),
    center: true,
  });
};

// effect
// eslint-disable-next-line no-undef
defineProps({
  effect: {
    type: String,
    defaule: 'dark',
    validator(value) {
      return ['dark', 'light'].indexOf(value) !== -1;
    },
  },
});
</script>

<style lang="scss" scoped></style>
