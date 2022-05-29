<template>
  <div class="">
    <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
      {{ $t('msg.toast.switchLangSuccess') }}
    </h1>
  </div>
</template>

<script setup>
import {} from 'vue';
</script>

<style lang="scss" scoped></style>
