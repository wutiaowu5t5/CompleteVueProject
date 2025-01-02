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

export default ({ mode }) => {
  console.log('加载的环境变量', loadEnv(mode, process.cwd()))

  //const globals = externalGlobals({
  //  lodash: 'lodash',
  //  jspdf: 'jspdf',
  //  html2canvas: 'html2canvas'
  //})

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
      }),
      viteImagemin({
        gifsicle: {
          // gif图片压缩
          optimizationLevel: 3, // 选择1到3之间的优化级别
          interlaced: false // 隔行扫描gif进行渐进式渲染
        },
        optipng: {
          // png
          optimizationLevel: 7 // 选择0到7之间的优化级别
        },
        mozjpeg: {
          // jpeg
          quality: 20 // 压缩质量，范围从0(最差)到100(最佳)。
        },
        pngquant: {
          // png
          quality: [0.8, 0.9], // Min和max是介于0(最差)到1(最佳)之间的数字，类似于JPEG。达到或超过最高质量所需的最少量的颜色。如果转换导致质量低于最低质量，图像将不会被保存。
          speed: 4 // 压缩速度，1(强力)到11(最快)
        },
        svgo: {
          plugins: [
            // svg压缩
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
      //vitePrerender({
      //  staticDir: path.join(__dirname, 'dist'),
      //  routes: ['/', '/design', '/index']
      //})
      ViteRestart({
        restart: ['my.config.[jt]s']
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
      minify: 'terser',
      // 清除所有console和debugger
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
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
        // cdn 打包时不引入外部模块，使用cdn引入
        //external: ['lodash', 'jspdf', 'html2canvas'],
        //plugins: [globals]
      }
    }
  })
}
