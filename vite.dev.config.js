/*
 * @Description:
 * @Author: Satoru 5t5
 * @Date: 2025-01-13 17:53:36
 * @LastEditTime: 2025-01-13 17:58:46
 * @LastEditors: wutiaowu5t5 1987053649@qq.com
 * @FilePath: \CompleteVueProject\vite.dev.config.js
 */

import ViteRestart from 'vite-plugin-restart'

export default {
  plugins: [
    ViteRestart({
      restart: ['my.config.[jt]s']
    })
  ],
  server: {
    port: 3000,
    open: true,
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://your-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}
