/**
 * Vite 配置文件
 * @file vite.config.js
 * @description 项目构建和开发的核心配置文件
 */

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

// 图片压缩
import viteImagemin from 'vite-plugin-imagemin'

// CDN 打包加速
//import externalGlobals from 'rollup-plugin-external-globals'

// SEO 预渲染
//import vitePrerender from 'vite-plugin-prerender'

// 修改配置重新启动vite
import ViteRestart from 'vite-plugin-restart'

/**
 * Vite 配置函数
 * @param {Object} mode - 环境模式参数
 * @returns {import('vite').UserConfig}
 */
export default ({ mode }) => {
  console.log('加载的环境变量', loadEnv(mode, process.cwd()))
  /**
   * CDN 外部化配置（已注释）
   * 用于将特定依赖替换为 CDN 引入，减小打包体积
   * @example
   * const globals = externalGlobals({
   *   lodash: 'lodash',
   *   jspdf: 'jspdf',
   *   html2canvas: 'html2canvas'
   * })
   */

  return defineConfig({
    plugins: [
      // Vue 插件
      vue(),

      /**
       * 打包分析插件配置
       * @description 用于分析打包后的文件大小和依赖关系
       */
      visualizer({
        emitFile: false, // 是否生成文件
        file: 'states.html', // 分析文件名称
        open: true // 自动打开分析页面
      }),

      /**
       * 组件自动导入插件配置
       * @description 自动导入 Ant Design Vue 组件，无需手动 import
       */
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false // 不导入样式，使用 css in js
          })
        ]
      }),

      /**
       * Gzip 压缩插件配置
       * @description 对打包后的文件进行 Gzip 压缩
       */
      viteCompression({
        verbose: true, // 是否显示压缩信息
        disable: false, // 是否禁用
        threshold: 10240, // 体积大于阈值时启用压缩（单位：字节）
        algorithm: 'gzip', // 压缩算法
        ext: '.gz' // 生成的压缩包后缀
      }),

      /**
       * 图片压缩插件配置
       * @description 自动压缩项目中的图片资源
       */
      viteImagemin({
        gifsicle: {
          optimizationLevel: 3, // gif 优化级别 1-3
          interlaced: false // 是否隔行扫描
        },
        optipng: {
          optimizationLevel: 7 // png 优化级别 0-7
        },
        mozjpeg: {
          quality: 20 // jpeg 压缩质量 0-100
        },
        pngquant: {
          quality: [0.8, 0.9], // png 压缩质量范围
          speed: 4 // 压缩速度 1-11
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox'
            },
            {
              name: 'removeEmptyAttrs',
              active: false
            }
          ]
        }
      }),

      /**
       * 预渲染配置（已注释）
       * @description 用于生成静态HTML，提升首屏加载速度和SEO
       * @example
       * vitePrerender({
       *   staticDir: path.join(__dirname, 'dist'),
       *   routes: ['/', '/design', '/index']
       * })
       */

      /**
       * 配置文件修改重启插件
       * @description 监听配置文件变化自动重启开发服务器
       */
      ViteRestart({
        restart: ['my.config.[jt]s']
      })
    ],

    /**
     * 路径别名配置
     * @description 简化模块导入路径
     */
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

    /**
     * CSS 预处理器配置
     * @description Less 全局变量配置
     */
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "./src/assets/styles/variables.less";`
        }
      }
    },

    /**
     * 构建配置
     * @description 生产环境打包配置
     */
    build: {
      minify: 'terser', // 压缩方式
      terserOptions: {
        compress: {
          drop_console: true, // 移除 console
          drop_debugger: true // 移除 debugger
        }
      },
      rollupOptions: {
        output: {
          /**
           * 静态资源分类打包配置
           * @description 将不同类型的资源分别打包到不同目录
           */
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',

          /**
           * 代码分包策略
           * @description 将 node_modules 中的模块单独打包
           */
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          }
        }

        /**
         * CDN 配置（已注释）
         * @description 将特定依赖排除打包，使用 CDN 引入
         * @example
         * external: ['lodash', 'jspdf', 'html2canvas'],
         * plugins: [globals]
         */
      }
    }
  })
}
