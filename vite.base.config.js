/*
 * @Description:
 * @Author: Satoru 5t5
 * @Date: 2025-01-13 17:53:25
 * @LastEditTime: 2025-01-13 18:29:16
 * @LastEditors: wutiaowu5t5 1987053649@qq.com
 * @FilePath: \CompleteVueProject\vite.base.config.js
 */

import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import progress from 'vite-plugin-progress'
import TurboConsole from 'unplugin-turbo-console/vite'

export default {
  plugins: [
    vue(),
    progress(),
    TurboConsole(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ]
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          'ant-design-vue': ['message', 'Modal', 'notification']
        }
      ],
      dirs: [
        './src/hooks/**',
        './src/services/**',
        './src/directives/**',
        './src/store/**',
        './src/views/**',
        './src/router/**'
      ],
      dts: './src/types/auto-imports.d.ts',
      eslintrc: {
        enabled: true
      }
    })
  ],
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
        additionalData: `@import "./src/assets/styles/variables.less";`
      }
    }
  }
}
