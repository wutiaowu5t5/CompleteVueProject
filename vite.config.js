import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// 路径别名
import path from 'path'

// 自动导入ant-design-vue组件
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// 视图分析打包资源
import { visualizer } from 'rollup-plugin-visualizer'

// 开启gzip压缩打包
import viteCompression from 'vite-plugin-compression'

export default ({ mode }) => {
  console.log('加载的环境变量', loadEnv(mode, process.cwd()))
  return defineConfig({
    plugins: [
      vue(),
      visualizer({
        emitFile: false,
        file: 'states.html',
        open: true
      }),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false // css in js
          })
        ]
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
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
    },
    build: {
      rollupOptions: {
        output: {
          //静态资源分类打包
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',

          manualChunks(id) {
            //静态资源拆分打包
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          }
        }
      }
    }
  })
}
