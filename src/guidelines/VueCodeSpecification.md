# Vue3 代码规范指南

## 1. 文件命名规范

### 1.1 组件文件命名

```typescript
// ❌ 错误示例
RightLayer.vue
rightLayer.vue

// ✅ 正确示例
Right - Layer.vue
```

### 1.2 紧密耦合的组件命名

```typescript
// ❌ 错误示例
components/
|- layer.vue
|- section.vue
|- events.vue

// ✅ 正确示例
components/layerComponents/
|- layer-section.vue
|- layer-events.vue
|- layer-places.vue
```

## 2. 组件编写规范

### 2.1 组件结构顺序

```vue
<template>
  <div class="component-name">
    <!-- 模板内容 -->
  </div>
</template>

<script setup lang="ts">
// 按以下顺序组织代码：
// 1. Composition API 导入
import { ref, onMounted } from 'vue'

// 2. 类型导入
import type { PropType } from 'vue'

// 3. 组件导入
import ChildComponent from './ChildComponent.vue'

// 4. 工具函数导入
import { formatDate } from '@/utils'

// 5. API 导入
import { fetchData } from '@/api'

// 6. Props 定义
const props = defineProps<{
  title: string
  items?: string[]
}>()

// 7. Emits 定义
const emit = defineEmits<{
  (e: 'update', value: string): void
}>()

// 8. 响应式数据
const count = ref(0)

// 9. 计算属性
const doubleCount = computed(() => count.value * 2)

// 10. 方法定义
const handleClick = () => {
  count.value++
}

// 11. 生命周期钩子
onMounted(() => {
  // 初始化逻辑
})
</script>

<style lang="scss" scoped>
// 样式代码
</style>
```

### 2.2 Props 定义规范

```typescript
// ❌ 错误示例
const props = defineProps(['title'])

// ✅ 正确示例
const props = defineProps<{
  title: string
  count?: number
  items: {
    id: number
    name: string
  }[]
}>()
```

### 2.3 事件命名规范

```typescript
// ❌ 错误示例
const emit = defineEmits(['change'])

// ✅ 正确示例
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()
```

## 3. 模板规范

### 3.1 属性换行规则

```vue
<!-- ❌ 错误示例 -->
<component
  v-model="value"
  :prop1="prop1"
  :prop2="prop2"
  @change="onChange"
  @input="onInput"
  class="my-component"
/>

<!-- ✅ 正确示例：属性较少时 -->
<component
  v-model="value"
  :list="list"
  @change="onChange"
  class="my-component"
/>

<!-- ✅ 正确示例：属性较多时 -->
<component
  v-model="value"
  :prop1="prop1"
  :prop2="prop2"
  @change="onChange"
  @input="onInput"
  class="my-component"
/>
```

### 3.2 指令规范

```vue
<!-- ❌ 错误示例 -->
<input v-bind:value="value" v-on:input="onInput" />
```

## 4. 样式规范

### 4.1 样式作用域

```vue
<!-- ✅ 推荐使用 scoped 或 CSS 模块 -->
<style lang="scss" scoped>
.component-name {
  &__header {
    // BEM 命名规范
  }
}
</style>
```

### 4.2 样式命名规范

```scss
// ✅ 推荐使用 BEM 命名规范
.block {
  &__element {
    &--modifier {
      // 样式代码
    }
  }
}
```

## 5. 代码组织规范

### 5.1 目录结构

```
src/
├── api/                # API 接口
├── assets/             # 静态资源
├── components/         # 公共组件
├── composables/        # 组合式函数
├── router/             # 路由配置
├── stores/             # 状态管理
├── types/              # 类型定义
├── utils/              # 工具函数
└── views/              # 页面组件
```

### 5.2 导入顺序

```typescript
// 1. Vue 核心
import { ref, computed } from 'vue'

// 2. Vue 生态
import { useRouter } from 'vue-router'
import { useStore } from 'pinia'

// 3. 类型导入
import type { User } from '@/types'

// 4. 组件导入
import BaseButton from '@/components/BaseButton.vue'

// 5. 组合式函数
import { useUser } from '@/composables/useUser'

// 6. 工具函数
import { formatDate } from '@/utils'

// 7. API 导入
import { fetchUserData } from '@/api'

// 8. 资源导入
import logoUrl from '@/assets/logo.png'
```

## 6. TypeScript 相关规范

### 6.1 类型定义

```typescript
// ✅ 使用 interface 定义对象类型
interface User {
  id: number
  name: string
  email?: string
}

// ✅ 使用 type 定义联合类型或工具类型
type Status = 'pending' | 'success' | 'error'
type Nullable<T> = T | null
```

### 6.2 泛型使用

```typescript
// ✅ 合理使用泛型
function fetchData<T>(url: string): Promise<T> {
  return fetch(url).then((res) => res.json())
}
```

这些规范基于 Vue3 的最佳实践和你提供的代码示例整理而成。需要注意的是，规范应该根据团队具体情况进行调整和完善。

参考链接：

- [Vue 官方风格指南](https://v3.cn.vuejs.org/style-guide/)
- [AI前端Vue规范](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html)
