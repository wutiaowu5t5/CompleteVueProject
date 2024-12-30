// 初始化导入vue
// example initialize the imported vue
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const VueController = createApp(App)

// 挂载vue-router
// mount the vue router
import router from '@router/router.js'
VueController.use(router)

// 挂载pinia状态管理系统
// mount the pinia status management system
import pinia from '@store/store.js'
VueController.use(pinia)

// 绑定dom节点实例
// bind dom node instances
VueController.mount('#app')
