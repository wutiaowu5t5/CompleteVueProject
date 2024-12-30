<template>
  <a-config-provider :locale="localeRef">
    <router-view />
  </a-config-provider>
</template>

<script setup>
// Composition Api
import { ref } from 'vue'
// UI
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

const localeRef = ref(zhCN)
</script>

<style scoped></style>
