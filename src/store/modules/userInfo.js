/*
 * @Description: userInfo.js 用户信息状态管理
 * @Author: 5t5
 * @Time: 2024/12/30 17:19
 */

import { defineStore } from 'pinia'

export const UserInfoStore = defineStore('userInfo', {
  state: () => {
    return {
      userId: '77889900',
      userName: 'satoru'
    }
  },
  getters: {
    getUserId() {
      return this.userId
    },
    getUserName() {
      return this.userName
    }
  },
  actions: {}
})
