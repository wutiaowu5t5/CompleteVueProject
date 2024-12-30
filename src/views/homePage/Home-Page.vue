<!--
 * @Description: Home-Page.vue 项目首页组件
 * @Author: 5t5
 * @Time: 2024/12/30 16:48
-->
<template>
  <div class="card">我是首页</div>

  <a-time-picker v-model:value="value" format="HH:mm" />
</template>

<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
const value = ref(dayjs('12:08', 'HH:mm'))
// Composition API
// Store
// Service Apis
// Components
// Utils
// Images
// region static source 静态数据
// endregion static source 静态数据

// region feature-实现功能名字
// endregion feature-实现功能名字
</script>

<style scoped lang="less">
.card {
  width: 100px;
  height: 100px;
  background-color: #fff;
  color: #000;
}
</style>
