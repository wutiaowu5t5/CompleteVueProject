/*
 * @Description:
 * @Author: Satoru 5t5
 * @Date: 2025-01-13 17:05:49
 * @LastEditTime: 2025-01-13 18:10:34
 * @LastEditors: wutiaowu5t5 1987053649@qq.com
 * @FilePath: \CompleteVueProject\vite.config.js
 */
/**
 * Vite 配置文件
 * @file vite.config.js
 * @description 项目构建和开发的核心配置文件
 */

import { loadEnv, mergeConfig } from 'vite'
import devConfig from './vite.dev.config'
import prodConfig from './vite.prod.config'
import baseConfig from './vite.base.config'

export default ({ mode }) => {
  loadEnv(mode, process.cwd())

  return mergeConfig(
    baseConfig,
    mode === 'development' ? devConfig : prodConfig
  )
}
