// 初始化导入vue
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const VueController = createApp(App)

// 绑定dom节点实例
VueController.mount('#app')
