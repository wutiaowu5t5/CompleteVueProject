/*
 * @Description: emitter.js 事件发射器
 * @Author: 5t5
 * @Time: 2025/1/6 16:20
 */

class Emitter {
  constructor() {
    this.events = {}
  }
  /**
   * 检查事件是否存在
   * @param {string} event - 事件名称
   * @return {boolean} - 事件是否存在
   */
  has(event) {
    return this._has(event) && this.events[event].length !== 0
  }

  _has(event) {
    return Object.prototype.hasOwnProperty.call(this.events, event)
  }
  /**
   * 发布事件
   * @param {string} event - 事件名称
   * @param {*} data - 数据
   * @return {*} - 回调函数执行结果
   */
  publish(event, data) {
    if (this.has(event)) {
      this.events[event].forEach((listener) => {
        return listener(data)
      })
    }
  }
  /**
   * 订阅事件
   * @param {string} event - 事件名称
   * @param {function} listener - 回调函数
   * @return {object} - 解绑事件对象
   */
  subscribe(event, listener) {
    if (!this._has(event)) {
      this.events[event] = []
    }
    this.events[event].push(listener)

    return {
      unsubscribe: function () {
        this.events[event].splice(this.events[event].indexOf(listener), 1)
      }.bind(this)
    }
  }
}

export { Emitter }
