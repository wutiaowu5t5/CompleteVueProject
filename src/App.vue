<!--
 * @Description:
 * @Author: Satoru 5t5
 * @Date: 2024-12-31 10:49:08
 * @LastEditTime: 2025-01-13 16:45:38
 * @LastEditors: wutiaowu5t5 1987053649@qq.com
 * @FilePath: \CompleteVueProject\src\App.vue
-->
<template>
  <a-config-provider :locale="localeRef">
    <router-view />
  </a-config-provider>
</template>

<script setup>
// UI
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

const localeRef = ref(zhCN)
</script>

<style lang="less">
@import '@assets/styles/common.less';
</style>
