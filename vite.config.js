import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// 路径别名
import path from 'path'

// 自动导入ant-design-vue组件
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default ({ mode }) => {
  console.log('加载的环境变量', loadEnv(mode, process.cwd()))
  return defineConfig({
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false // css in js
          })
        ]
      })
    ],
    // 路径别名配置 path alias configuration
    resolve: {
      alias: {
        '@assets': path.resolve('./src/assets'),
        '@cmp': path.resolve('./src/components'),
        '@hooks': path.resolve('./src/hooks'),
        '@router': path.resolve('./src/router'),
        '@directives': path.resolve('./src/directives'),
        '@services': path.resolve('./src/services'),
        '@store': path.resolve('./src/store'),
        '@utils': path.resolve('./src/utils'),
        '@views': path.resolve('./src/views')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "./src/assets/styles/variables.less";` // 引入全局变量文件
        }
      }
    }
  })
}
