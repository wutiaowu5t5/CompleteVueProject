/*
 * @Description: store.js pinia状态管理系统
 * @Author: 5t5
 * @Time: 2024/12/26 18:26
 */

// 从 'pinia' 库中导入 createPinia 函数 createPinia 用于创建一个新的 Pinia 实例
import { createPinia } from 'pinia'

// 导入 Pinia 的持久化状态插件 这个插件允许 Pinia store 的状态在页面刷新后仍然保持
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 创建一个新的 Pinia 实例 这个实例将用于管理整个应用的状态
const pinia = createPinia()

// 将持久化状态插件添加到 Pinia 实例中 使用这个 Pinia 实例创建的 store 就可以选择性地启用状态持久化
pinia.use(piniaPluginPersistedstate)

// 将配置好的 Pinia 实例导出
export default pinia
