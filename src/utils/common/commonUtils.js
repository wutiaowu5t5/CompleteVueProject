/*
 * @Description: commonUtils.js 公共工具类文件
 * @Author: 5t5
 * @Time: 2024/12/26 18:20
 */

import { v4 as uuidv4 } from 'uuid'
const generateUuid = () => {
  return uuidv4()
}

export { generateUuid }
