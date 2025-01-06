/*
 * @Description: webStorage.js web存储封装
 * @Author: 5t5
 * @Time: 2025/1/6 16:38
 */

class WebStorageController {
  constructor() {
    this.type = 0
    this.storage = [window.localStorage, window.sessionStorage]
  }

  /**
   * 设置存储类型
   * @param { Number } type - 存储类型，只能是 0 或 1
   */
  mutationStorageType(type) {
    // 验证输入类型
    if (typeof type !== 'number') {
      console.error(
        'WebStorage.setStorageType () => : Invalid type. Expected a number.'
      )
      return
    }

    // 验证允许的存储类型
    const allowedTypes = [0, 1]
    if (!allowedTypes.includes(type)) {
      console.error(
        `WebStorage.setStorageType () => : Invalid storage type. Allowed types are: ${allowedTypes.join(', ')}`
      )
      return
    }

    this.type = type
    return this
  }

  /**
   * 设置存储项。
   *
   * @param { String } key - 存储项的键。
   * @param { * } value - 存储项的值，可以是任何类型的数据。
   */
  mutationStorageItem(key, value) {
    // 验证输入类型
    if (typeof key !== 'string') {
      console.error(
        'WebStorage.setStorage() => : Invalid input. Key must be a string.'
      )
      return
    }

    // 将 value 转换为字符串
    let stringValue
    try {
      stringValue = JSON.stringify(value)
    } catch (error) {
      console.error(
        `WebStorage.setStorage() => : Error converting value to string: ${error.message}`
      )
      return
    }

    // 存储数据
    try {
      this.storage[this.type].setItem(key, stringValue)
    } catch (error) {
      console.error(
        `WebStorage.setStorage() => : Error setting item in storage: ${error.message}`
      )
    }
  }

  /**
   * 获取存储项。
   *
   * @param { String } key - 存储项的键。
   * @returns { * } - 存储项的值，如果不存在则返回 null。
   */
  queryStorageItem(key) {
    // 验证输入类型
    if (typeof key !== 'string') {
      console.error(
        'WebStorage.queryStorageItem() => : Invalid input. Key must be a string.'
      )
      return null
    }

    // 获取数据
    try {
      const stringValue = this.storage[this.type].getItem(key)
      if (stringValue === null) return null

      // 尝试将字符串转换回原始数据类型
      return JSON.parse(stringValue)
    } catch (error) {
      console.error(
        `WebStorage.queryStorageItem() => : Error getting item from storage: ${error.message}`
      )
      return null
    }
  }
}
const WebStorage = new WebStorageController()

export { WebStorage }
