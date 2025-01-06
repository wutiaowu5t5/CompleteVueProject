/*
 * @Description: uuid.js uuid生成器
 * @Author: 5t5
 * @Time: 2025/1/6 16:28
 */

import { v4 as uuidv4 } from 'uuid'

const generateUuid = () => {
  return uuidv4()
}

export { generateUuid }
