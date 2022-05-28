<template>
  <div class="hamburger-container" @click="triggerClick">
    <SvgIcon :icon="icon" />
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
const store = useStore();
const icon = computed(() => {
  return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed';
});
const triggerClick = () => {
  // console.log(store.getters.sidebarOpened);
  store.commit('app/triggerSidebarOpened');
};
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
