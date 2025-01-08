# JavaScript 代码规范指南

## 1. 命名规范

### 1.1 变量命名

```javascript
// ✅ 使用小驼峰命名法（camelCase）
let userName = 'John'
let firstName = 'Mike'
let maxCount = 10
let isUserLoggedIn = true

// ✅ 数组命名：使用复数形式
const users = ['John', 'Mike']
const productList = []
const userIds = [1, 2, 3]

// ✅ 布尔值变量使用 is/has/can/should 等前缀
let isActive = true
let hasPermission = true
let canEdit = false
let shouldRefresh = true
let isLoading = false
let hasData = true

// ✅ 事件处理函数使用 handle/on 前缀
const handleSubmit = () => {}
const onUserClick = () => {}
const handleInputChange = () => {}

// ✅ 回调函数使用 callback/cb 后缀
const validateCallback = () => {}
const successCb = () => {}

// ❌ 避免的命名方式
let user_name = 'John' // 下划线
let UserName = 'Mike' // 大驼峰
let x = 10 // 单字母
let data = 25 // 模糊的命名
let str = 'text' // 类型命名
let arr = [] // 类型命名
```

### 1.2 常量命名

```javascript
// ✅ 使用全大写，下划线分隔
const MAX_COUNT = 100
const API_BASE_URL = 'https://api.example.com'
const DEFAULT_CONFIG = {
  timeout: 1000,
  retries: 3
}

// ✅ 枚举值常量
const STATUS = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

// ✅ 正则表达式常量
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const PHONE_REGEX = /^1[3-9]\d{9}$/

// ✅ 配置相关常量
const ENVIRONMENT = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
  STAGING: 'staging'
}
```

### 1.3 函数命名

```javascript
// ✅ 动词 + 名词形式
function getUserData() {}
function validateInput() {}
function calculateTotal() {}

// ✅ 获取/设置函数
function getValue() {}
function setValue() {}

// ✅ 判断函数
function isValid() {}
function hasAccess() {}

// ✅ 转换函数
function toNumber() {}
function parseJson() {}

// ✅ 初始化函数
function initApp() {}
function setupConfig() {}
```

### 1.4 类命名

```javascript
// ✅ 使用大驼峰命名法（PascalCase）
class UserService {}
class ProductController {}
class DatabaseConnection {}

// ✅ 抽象类使用 Abstract 前缀
class AbstractRepository {}
class AbstractFactory {}

// ✅ 接口使用 I 前缀（TypeScript）
interface IUserData {}
interface IApiResponse {}
```

### 1.5 命名注意事项

- **避免使用**

  - 拼音拼写（如：`yonghu`）
  - 特殊字符（如：`$name`，除非特殊框架要求）
  - 数字开头（如：`1user`）
  - 过于简写的缩写（如：`btn`，除非是约定俗成的）

- **推荐做法**

  - 使用完整的描述性词汇
  - 使用公认的缩写（如：`id`, `url`, `http`）
  - 使用有意义的前缀（如：`user`, `product`, `order`）
  - 保持命名长度适中（2-4个单词为宜）
  - 在同一上下文使用一致的命名风格

- **特定场景命名**

  ```javascript
  // ✅ 私有属性/方法（现代浏览器）
  #privateField
  #privateMethod()

  // ✅ 临时变量
  let temp
  let i, j, k  // 仅用于循环

  // ✅ 工具函数
  function formatDate() {}
  function parseURL() {}

  // ✅ 状态相关
  const isLoading = true
  const hasError = false
  const isEmpty = true
  ```

## 2. 基础语法规范

### 2.1 缩进与空格

```javascript
// ✅ 使用2空格缩进
function example() {
  const name = 'John'
  if (name) {
    console.log(name)
  }
}

// ✅ 运算符前后要有空格
const sum = a + b
const multiply = a * b

// ✅ 对象属性冒号后要有空格
const user = {
  name: 'John',
  age: 25
}

// ✅ 逗号后要有空格
const arr = [1, 2, 3, 4]

// ❌ 错误示例
const user = { name: 'John', age: 25 }
const arr = [1, 2, 3, 4]
```

### 2.2 变量声明

```javascript
// ✅ 每个变量单独声明
let name = 'John'
let age = 25

// ✅ 使用解构赋值
const { id, title } = post
const [first, second] = items

// ✅ 优先使用 const，其次是 let
const immutable = 'not change'
let mutable = 'can change'

// ❌ 避免使用 var
var name = 'John' // 不推荐

// ✅ 变量声明提升到作用域顶部
function example() {
  let name
  let age
  let result

  // 业务逻辑
}
```

### 2.3 字符串使用

```javascript
// ✅ 优先使用单引号
const name = 'John'

// ✅ 模板字符串使用反引号
const greeting = `Hello, ${name}!`

// ✅ 长字符串换行
const longString =
  'This is a very long string that ' + 'needs to be broken into multiple lines.'

// ✅ 或使用模板字符串
const longString = `
  This is a very long string that
  needs to be broken into multiple lines.
`
```

### 2.4 对象和数组

```javascript
// ✅ 对象属性简写
const name = 'John'
const age = 25
const user = { name, age }

// ✅ 数组方法使用
const items = [1, 2, 3]
items.forEach((item) => console.log(item))
const doubled = items.map((item) => item * 2)

// ✅ 展开运算符
const newArray = [...items, 4, 5]
const newObject = { ...user, gender: 'male' }

// ✅ 数组解构赋值
const [first, ...rest] = items
```

### 2.5 条件语句

```javascript
// ✅ if 语句使用花括号
if (condition) {
  // do something
}

// ✅ 三元运算符（简单条件）
const value = condition ? 'yes' : 'no'

// ✅ 多重条件使用 switch
switch (status) {
  case 'pending':
    handlePending()
    break
  case 'success':
    handleSuccess()
    break
  default:
    handleDefault()
}

// ✅ 使用 && 和 || 进行短路运算
const name = user && user.name
const defaultName = name || 'Anonymous'
```

### 2.6 循环语句

```javascript
// ✅ 优先使用 forEach, map, filter 等数组方法
items.forEach((item) => {
  process(item)
})

// ✅ for...of 用于可迭代对象
for (const item of items) {
  process(item)
}

// ✅ for...in 用于对象属性遍历
for (const key in object) {
  if (Object.hasOwn(object, key)) {
    process(object[key])
  }
}

// ❌ 避免使用传统 for 循环
for (let i = 0; i < items.length; i++) {
  // 不推荐
}
```

### 2.7 注释规范

```javascript
// ✅ 单行注释
// 这是一个单行注释

// ✅ 多行注释
/**
 * 这是一个多行注释
 * @param {string} name - 用户名
 * @returns {boolean} 验证结果
 */

// ✅ TODO 注释
// TODO: 需要优化此处性能

// ✅ FIXME 注释
// FIXME: 这里有潜在的 bug
```

### 2.8 分号使用规范

```javascript
// ✅ 不使用分号
const name = 'John'
let age = 25(
  // ✅ 立即执行函数前面加空格
  function () {
    // code
  }
)()

// ✅ 链式调用可以换行并缩进
promise
  .then((result) => {
    // handle result
  })
  .catch((error) => {
    // handle error
  })

// ❌ 避免使用分号
const name = 'John' // 不推荐
let age = 25 // 不推荐
```

## 3. 函数规范

### 3.1 函数声明

```javascript
// ✅ 使用函数声明而不是函数表达式
function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0)
}

// ✅ 箭头函数（用于简短的函数和回调）
const double = (x) => x * 2
const sum = (a, b) => a + b

// ✅ 多行箭头函数使用花括号和 return
const calculate = (x, y) => {
  const sum = x + y
  return sum * 2
}

// ❌ 避免使用函数表达式
const calculateTotal = function (items) {
  // 不推荐
  return items.reduce((total, item) => total + item.price, 0)
}
```

### 3.2 参数规范

```javascript
// ✅ 使用默认参数
function createUser(name = 'Anonymous', age = 18) {
  return { name, age }
}

// ✅ 使用剩余参数而不是 arguments
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}

// ✅ 解构参数
function processUser({ name, age, email }) {
  // 处理用户数据
}

// ❌ 避免使用 arguments 对象
function oldSum() {
  // 不推荐
  return Array.from(arguments).reduce((total, num) => total + num, 0)
}
```

### 3.3 纯函数

```javascript
// ✅ 推荐使用纯函数
function calculatePrice(basePrice, tax) {
  return basePrice * (1 + tax)
}

// ✅ 返回新数组而不是修改原数组
function addItem(items, newItem) {
  return [...items, newItem]
}

// ❌ 避免副作用
let total = 0
function addToTotal(value) {
  // 不推荐
  total += value
}
```

### 3.4 异步函数

```javascript
// ✅ 使用 async/await
async function fetchUserData() {
  try {
    const response = await fetch('/api/user')
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch user data:', error)
    throw error
  }
}

// ✅ Promise 链式调用保持清晰
function processUserData() {
  return fetchUserData()
    .then((data) => validateData(data))
    .then((validData) => transformData(validData))
    .catch(handleError)
}

// ❌ 避免回调地狱
function fetchData(callback) {
  // 不推荐
  getData(function (a) {
    getMoreData(a, function (b) {
      getMoreData(b, function (c) {
        // ...
      })
    })
  })
}
```

### 3.5 函数组合

```javascript
// ✅ 小函数组合
const validateEmail = (email) => email.includes('@')
const validatePassword = (password) => password.length >= 8
const validateUser = (user) =>
  validateEmail(user.email) && validatePassword(user.password)

// ✅ 函数柯里化
const multiply = (x) => (y) => x * y
const double = multiply(2)
const triple = multiply(3)
```

### 3.6 错误处理

```javascript
// ✅ 使用 try-catch 处理可能的错误
async function saveUser(userData) {
  try {
    await validateUser(userData)
    await saveToDatabase(userData)
    return { success: true }
  } catch (error) {
    if (error instanceof ValidationError) {
      return { success: false, error: '验证失败' }
    }
    throw error
  }
}

// ✅ 返回结果对象而不是抛出错误
function divide(a, b) {
  if (b === 0) {
    return { success: false, error: '除数不能为0' }
  }
  return { success: true, result: a / b }
}
```

### 3.7 函数性能

```javascript
// ✅ 使用记忆化优化递归
const memoize = (fn) => {
  const cache = new Map()
  return (...args) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)
    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}

// ✅ 避免不必要的计算
const heavyComputation = memoize((n) => {
  // 复杂计算
  return n * n
})

// ✅ 使用防抖和节流
const debounce = (fn, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

const throttle = (fn, delay) => {
  let lastCall = 0
  return (...args) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      fn(...args)
      lastCall = now
    }
  }
}
```

### 3.8 函数文档规范

#### 3.8.1 基本文档规范

```javascript
/**
 * 计算两个数字的和
 * @function add
 * @param {number} a - 第一个数字
 * @param {number} b - 第二个数字
 * @returns {number} 两个数字的和
 * @example
 * add(1, 2) // 返回 3
 */
function add(a, b) {
  return a + b
}

/**
 * 用户配置类型定义
 * @typedef {Object} UserConfig
 * @property {string} name - 用户名
 * @property {number} age - 年龄
 * @property {string} [email] - 可选的邮箱
 */

/**
 * 处理用户数据
 * @param {UserConfig} config - 用户配置
 * @returns {boolean} 处理结果
 * @throws {Error} 当配置无效时抛出错误
 */
function processUser(config) {
  if (!config.name) {
    throw new Error('Name is required')
  }
  return true
}
```

#### 3.8.2 类文档规范

```javascript
/**
 * 用户服务类
 * @class UserService
 * @description 处理用户相关的所有业务逻辑
 * @author 张三
 * @example
 * const userService = new UserService({ apiUrl: 'api.example.com' })
 * await userService.getUser(1)
 */
class UserService {
  /**
   * 创建用户服务实例
   * @constructor
   * @param {Object} config - 配置信息
   * @param {string} config.apiUrl - API地址
   */
  constructor(config) {
    this.apiUrl = config.apiUrl
  }

  /**
   * 获取用户信息
   * @async
   * @param {number} id - 用户ID
   * @returns {Promise<Object>} 用户信息
   * @throws {Error} 当用户不存在时抛出错误
   */
  async getUser(id) {
    // 实现逻辑
  }
}
```

#### 3.8.3 接口和类型定义

```javascript
/**
 * 用户数据接口
 * @interface IUser
 * @property {string} id - 用户ID
 * @property {string} name - 用户名称
 * @property {number} age - 用户年龄
 * @property {string[]} roles - 用户角色列表
 */

/**
 * 配置选项类型
 * @typedef {Object} Options
 * @property {string} [theme='light'] - 主题
 * @property {boolean} [debug=false] - 是否开启调试
 * @property {number} [timeout=3000] - 超时时间
 */
```

#### 3.8.4 异步函数和回调

```javascript
/**
 * @callback ValidationCallback
 * @param {Error} error - 错误对象
 * @param {boolean} isValid - 验证结果
 */

/**
 * 异步验证用户数据
 * @async
 * @function validateUserAsync
 * @param {Object} userData - 用户数据
 * @param {ValidationCallback} [callback] - 可选的回调函数
 * @returns {Promise<boolean>} 验证结果
 * @throws {ValidationError} 验证失败时抛出错误
 * @example
 * try {
 *   const isValid = await validateUserAsync({ name: 'John' })
 *   console.log(isValid)
 * } catch (error) {
 *   console.error(error)
 * }
 */
async function validateUserAsync(userData, callback) {
  try {
    // 验证逻辑
    const isValid = true
    callback?.(null, isValid)
    return isValid
  } catch (error) {
    callback?.(error, false)
    throw error
  }
}
```

#### 3.8.5 模块导出

```javascript
/**
 * 工具函数模块
 * @module utils
 * @description 提供常用的工具函数
 */

/**
 * 格式化日期
 * @function
 * @export
 * @param {Date} date - 要格式化的日期
 * @param {string} [format='YYYY-MM-DD'] - 日期格式
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
  // 实现逻辑
}

/**
 * @namespace Validators
 * @description 验证器集合
 */
export const Validators = {
  /**
   * 验证邮箱
   * @function
   * @memberof Validators
   * @param {string} email - 邮箱地址
   * @returns {boolean} 验证结果
   */
  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  }
}
```

#### 3.8.6 事件处理

```javascript
/**
 * 用户事件处理器
 * @class UserEventHandler
 * @extends EventEmitter
 * @listens UserService#login
 * @fires UserEventHandler#userUpdated
 */
class UserEventHandler extends EventEmitter {
  /**
   * 处理用户登录事件
   * @param {Object} event - 登录事件对象
   * @event UserService#login
   * @property {string} event.userId - 用户ID
   * @property {Date} event.loginTime - 登录时间
   */
  onUserLogin(event) {
    // 处理逻辑
  }
}
```

#### 3.8.7 常见文档标签说明

```javascript
/**
 * @type {string} - 类型声明
 * @param {parameterType} parameterName - 参数说明
 * @returns {returnType} 返回值说明
 * @throws {errorType} 错误说明
 * @example 示例代码
 * @see 相关链接
 * @since 版本信息
 * @deprecated 废弃说明
 * @todo 待办事项
 */
```

## 4. 类的定义规范

### 4.1 基本结构

```javascript
// ✅ 类名使用大驼峰命名法
class UserService {
  // ✅ 私有属性使用 # 前缀
  #apiKey
  #config

  // ✅ 静态属性
  static VERSION = '1.0.0'

  // ✅ 构造函数
  constructor(apiKey, config) {
    this.#apiKey = apiKey
    this.#config = config
    this.initialize()
  }

  // ✅ 私有方法
  #initialize() {
    // 初始化逻辑
  }

  // ✅ 公共方法使用小驼峰命名
  async fetchUserData() {
    try {
      return await this.#makeRequest('/user')
    } catch (error) {
      this.#handleError(error)
    }
  }
}
```

### 4.2 访问器属性

```javascript
class Product {
  #price = 0
  #quantity = 0

  // ✅ 使用 get/set 访问器
  get price() {
    return this.#price
  }

  set price(value) {
    if (value < 0) throw new Error('Price cannot be negative')
    this.#price = value
  }

  // ✅ 计算属性
  get total() {
    return this.#price * this.#quantity
  }
}
```

### 4.3 继承与多态

```javascript
// ✅ 基类使用 Abstract 前缀
class AbstractRepository {
  // ✅ 抽象方法
  save() {
    throw new Error('Method not implemented')
  }

  // ✅ 通用方法实现
  async findAll() {
    return await this.query('SELECT * FROM table')
  }
}

// ✅ 实现类
class UserRepository extends AbstractRepository {
  // ✅ 重写父类方法
  async save(user) {
    // 实现保存逻辑
  }

  // ✅ 扩展新方法
  async findByEmail(email) {
    // 实现查询逻辑
  }
}
```

### 4.4 静态成员

```javascript
class ConfigManager {
  // ✅ 静态私有属性
  static #instance = null

  // ✅ 静态方法
  static getInstance() {
    if (!this.#instance) {
      this.#instance = new ConfigManager()
    }
    return this.#instance
  }

  // ✅ 静态工厂方法
  static createFromEnv() {
    const config = process.env
    return new ConfigManager(config)
  }
}
```

### 4.5 Mixin 模式

```javascript
// ✅ 定义 Mixin
const LoggerMixin = {
  log(message) {
    console.log(`[${this.constructor.name}]:`, message)
  },
  error(message) {
    console.error(`[${this.constructor.name}]:`, message)
  }
}

// ✅ 使用 Mixin
class UserController {
  constructor() {
    Object.assign(this, LoggerMixin)
  }

  async createUser(userData) {
    try {
      this.log('Creating new user')
      // 创建用户逻辑
    } catch (error) {
      this.error('Failed to create user')
    }
  }
}
```

### 4.6 类的组合

```javascript
class UserService {
  // ✅ 依赖注入
  constructor(repository, logger) {
    this.repository = repository
    this.logger = logger
  }

  // ✅ 组合优于继承
  async createUser(userData) {
    this.logger.log('Creating user')
    return await this.repository.save(userData)
  }
}

// ✅ 工厂模式
class ServiceFactory {
  static createUserService() {
    const repository = new UserRepository()
    const logger = new Logger()
    return new UserService(repository, logger)
  }
}
```

### 4.7 错误处理

```javascript
// ✅ 自定义错误类
class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
  }
}

class UserValidator {
  validate(user) {
    if (!user.email) {
      throw new ValidationError('Email is required')
    }
  }

  // ✅ 错误边界处理
  static safe(callback) {
    try {
      return callback()
    } catch (error) {
      if (error instanceof ValidationError) {
        return { error: error.message }
      }
      throw error
    }
  }
}
```

### 4.8 异步类方法

```javascript
class DataService {
  // ✅ async 方法命名表明异步性质
  async fetchData() {
    try {
      const response = await fetch(this.url)
      return await response.json()
    } catch (error) {
      this.handleError(error)
    }
  }

  // ✅ 异步迭代器
  async *generateItems() {
    for (const id of this.ids) {
      yield await this.fetchItem(id)
    }
  }
}
```

## 5. 异步编程规范

### 5.1 Promise 使用规范

```javascript
// ✅ Promise 链式调用
fetchUserData()
  .then((user) => processUser(user))
  .then((result) => saveResult(result))
  .catch((error) => handleError(error))
  .finally(() => cleanup())

// ✅ Promise.all 并行处理
const promises = [fetchUserData(), fetchUserPosts(), fetchUserComments()]

Promise.all(promises)
  .then(([user, posts, comments]) => {
    // 处理所有结果
  })
  .catch((error) => {
    // 处理任何一个 Promise 的错误
  })

// ✅ Promise.race 超时处理
const timeout = new Promise((_, reject) => {
  setTimeout(() => reject(new Error('Timeout')), 5000)
})

Promise.race([fetchData(), timeout])
  .then((result) => console.log(result))
  .catch((error) => console.error('Request failed:', error))
```

### 5.2 Async/Await 使用规范

```javascript
// ✅ 基本使用
async function getUserData() {
  try {
    const user = await fetchUser()
    const posts = await fetchUserPosts(user.id)
    return { user, posts }
  } catch (error) {
    handleError(error)
    throw error // 重新抛出错误供上层处理
  }
}

// ✅ 并行处理
async function getUserDataParallel() {
  try {
    const [user, posts] = await Promise.all([fetchUser(), fetchUserPosts()])
    return { user, posts }
  } catch (error) {
    handleError(error)
  }
}

// ✅ 循环中的异步处理
async function processUsers(userIds) {
  // ✅ 串行处理（按顺序）
  const results = []
  for (const id of userIds) {
    const result = await processUser(id)
    results.push(result)
  }

  // ✅ 并行处理（同时）
  const results = await Promise.all(userIds.map((id) => processUser(id)))
}
```

### 5.3 异步函数错误处理

```javascript
// ✅ 使用 try-catch 处理异步错误
async function fetchData() {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    if (error instanceof NetworkError) {
      // 处理网络错误
    } else if (error instanceof ValidationError) {
      // 处理验证错误
    } else {
      // 处理其他错误
    }
    throw error // 重新抛出错误
  }
}

// ✅ 错误边界处理
class ErrorBoundary {
  static async wrap(asyncFn) {
    try {
      return { data: await asyncFn(), error: null }
    } catch (error) {
      return { data: null, error }
    }
  }
}
```

### 5.4 异步迭代器

```javascript
// ✅ 异步迭代器实现
class AsyncDataSource {
  async *[Symbol.asyncIterator]() {
    let page = 1
    while (true) {
      const data = await this.fetchPage(page++)
      if (!data.length) break
      yield* data
    }
  }
}

// ✅ 使用异步迭代器
async function processData() {
  const source = new AsyncDataSource()
  for await (const item of source) {
    await processItem(item)
  }
}
```

### 5.5 定时器与间隔

```javascript
// ✅ Promise 化的延时函数
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// ✅ 带取消功能的延时
function createCancellableDelay(ms) {
  let timeoutId
  const promise = new Promise((resolve) => {
    timeoutId = setTimeout(resolve, ms)
  })

  return {
    promise,
    cancel: () => clearTimeout(timeoutId)
  }
}

// ✅ 间隔执行
class IntervalExecutor {
  #intervalId = null

  start(fn, interval) {
    this.stop()
    this.#intervalId = setInterval(fn, interval)
  }

  stop() {
    if (this.#intervalId) {
      clearInterval(this.#intervalId)
      this.#intervalId = null
    }
  }
}
```

### 5.6 异步队列

```javascript
class AsyncQueue {
  #queue = []
  #processing = false

  async enqueue(task) {
    this.#queue.push(task)
    if (!this.#processing) {
      await this.#process()
    }
  }

  async #process() {
    this.#processing = true
    while (this.#queue.length > 0) {
      const task = this.#queue.shift()
      try {
        await task()
      } catch (error) {
        console.error('Task failed:', error)
      }
    }
    this.#processing = false
  }
}

// ✅ 使用异步队列
const queue = new AsyncQueue()
queue.enqueue(async () => {
  await someAsyncTask()
})
```

### 5.7 异步事件处理

```javascript
class AsyncEventEmitter {
  #listeners = new Map()

  on(event, listener) {
    if (!this.#listeners.has(event)) {
      this.#listeners.set(event, [])
    }
    this.#listeners.get(event).push(listener)
  }

  async emit(event, ...args) {
    const listeners = this.#listeners.get(event) || []
    await Promise.all(listeners.map((listener) => listener(...args)))
  }
}
```

## 6. 模块化规范

### 6.1 模块导入导出规范

```javascript
// ✅ 命名导出
export const helper = {}
export function utility() {}
export class ServiceClass {}

// ✅ 默认导出（每个模块只能有一个）
export default class MainService {}

// ✅ 导入命名导出
import { helper, utility, ServiceClass } from './services'

// ✅ 导入默认导出
import MainService from './services'

// ✅ 导入默认和命名导出
import MainService, { helper, utility } from './services'

// ✅ 重命名导入
import { helper as utilityHelper, utility as utilityFunction } from './services'

// ✅ 导入所有内容
import * as services from './services'
```

### 6.2 模块组织规范

```javascript
// ✅ 按功能组织模块
// services/user.service.js
export class UserService {}

// services/auth.service.js
export class AuthService {}

// services/index.js
export * from './user.service'
export * from './auth.service'

// ✅ 使用桶文件（barrel files）组织导出
// components/index.js
export { Button } from './Button'
export { Input } from './Input'
export { Form } from './Form'
```

### 6.3 模块路径规范

```javascript
// ✅ 使用别名路径（需要配置）
import { UserService } from '@services/user.service'
import { Button } from '@components/Button'

// ✅ 使用相对路径
import { helper } from '../utils/helper'
import { config } from './config'

// ❌ 避免过深的相对路径
import { something } from '../../../../some/deep/path' // 不推荐
```

### 6.4 循环依赖处理

```javascript
// ✅ 使用接口打破循环依赖
// types.js
export interface UserService {
  getUser(id: string): Promise<User>
}

// user.service.js
import { AuthService } from './auth.service'
import type { UserService } from './types'

export class UserServiceImpl implements UserService {
  constructor(private authService: AuthService) {}
}

// ✅ 使用依赖注入
class Container {
  private services = new Map()

  register(name: string, service: any) {
    this.services.set(name, service)
  }

  get(name: string) {
    return this.services.get(name)
  }
}
```

### 6.5 异步模块加载

```javascript
// ✅ 使用动态导入
async function loadModule() {
  try {
    const module = await import('./heavy-module')
    return module
  } catch (error) {
    console.error('Failed to load module:', error)
  }
}

// ✅ 条件导入
if (condition) {
  import('./feature-module')
    .then((module) => module.init())
    .catch((error) => console.error(error))
}
```

### 6.6 模块封装

```javascript
// ✅ 使用 IIFE 创建私有作用域
const MyModule = (() => {
  // 私有变量和函数
  const privateData = []

  function privateFunction() {
    // ...
  }

  // 公共 API
  return {
    publicMethod() {
      privateFunction()
    },
    getData() {
      return [...privateData]
    }
  }
})()

// ✅ 使用 Symbol 创建私有属性
const privateKey = Symbol('private')

export class Module {
  constructor() {
    this[privateKey] = {}
  }

  publicMethod() {
    this[privateKey].data
  }
}
```

### 6.7 模块配置

```javascript
// ✅ 使用配置对象
// config.js
export const config = {
  apiUrl: process.env.API_URL,
  timeout: 5000,
  retryCount: 3
}

// ✅ 使用环境变量
// .env
API_URL=https://api.example.com
DEBUG=true

// service.js
import { config } from './config'

export class ApiService {
  constructor() {
    this.baseUrl = config.apiUrl
  }
}
```

### 6.8 模块测试

```javascript
// ✅ 导出用于测试的内部函数
// math.js
export function add(a, b) {
  return a + b
}

// 仅在测试环境导出
if (process.env.NODE_ENV === 'test') {
  module.exports._internal = {
    validateInput,
    calculateIntermediate
  }
}

// ✅ 使用模块模拟
// user.service.test.js
jest.mock('./auth.service', () => ({
  AuthService: jest.fn().mockImplementation(() => ({
    validateToken: jest.fn().mockResolvedValue(true)
  }))
}))
```

## 7. 错误处理规范

### 7.1 自定义错误类

```javascript
// ✅ 基础错误类
class AppError extends Error {
  constructor(message, code) {
    super(message)
    this.name = this.constructor.name
    this.code = code
    Error.captureStackTrace(this, this.constructor)
  }
}

// ✅ 特定类型错误
class ValidationError extends AppError {
  constructor(message) {
    super(message, 'VALIDATION_ERROR')
    this.validationErrors = []
  }

  addError(field, message) {
    this.validationErrors.push({ field, message })
  }
}

class NetworkError extends AppError {
  constructor(message, statusCode) {
    super(message, 'NETWORK_ERROR')
    this.statusCode = statusCode
  }
}

class DatabaseError extends AppError {
  constructor(message, query) {
    super(message, 'DB_ERROR')
    this.query = query
  }
}
```

### 7.2 异步错误处理

```javascript
// ✅ async/await 错误处理
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`)
    if (!response.ok) {
      throw new NetworkError('Failed to fetch user', response.status)
    }
    return await response.json()
  } catch (error) {
    if (error instanceof NetworkError) {
      handleNetworkError(error)
    } else {
      handleUnexpectedError(error)
    }
    throw error // 重新抛出以供上层处理
  }
}

// ✅ Promise 错误处理
function processUserData() {
  return fetchUserData()
    .then(validateUserData)
    .then(saveUserData)
    .catch((error) => {
      if (error instanceof ValidationError) {
        return handleValidationError(error)
      }
      if (error instanceof DatabaseError) {
        return handleDatabaseError(error)
      }
      throw error // 未处理的错误类型
    })
    .finally(() => {
      cleanup()
    })
}
```

### 7.3 错误边界处理

```javascript
// ✅ 错误包装器
class ErrorBoundary {
  static async wrap(operation) {
    try {
      const result = await operation()
      return { success: true, data: result }
    } catch (error) {
      return {
        success: false,
        error: {
          message: error.message,
          code: error.code,
          stack:
            process.env.NODE_ENV === 'development' ? error.stack : undefined
        }
      }
    }
  }
}

// ✅ 使用错误边界
async function handleRequest() {
  const result = await ErrorBoundary.wrap(async () => {
    const user = await fetchUser()
    const posts = await fetchUserPosts(user.id)
    return { user, posts }
  })

  if (!result.success) {
    // 处理错误
    logError(result.error)
  }
  return result
}
```

### 7.4 验证错误处理

```javascript
// ✅ 数据验证
class UserValidator {
  static validate(userData) {
    const errors = new ValidationError('Invalid user data')

    if (!userData.email) {
      errors.addError('email', 'Email is required')
    } else if (!isValidEmail(userData.email)) {
      errors.addError('email', 'Invalid email format')
    }

    if (!userData.password) {
      errors.addError('password', 'Password is required')
    } else if (userData.password.length < 8) {
      errors.addError('password', 'Password must be at least 8 characters')
    }

    if (errors.validationErrors.length > 0) {
      throw errors
    }
  }
}
```

### 7.5 错误日志记录

```javascript
// ✅ 错误日志服务
class ErrorLogger {
  static log(error, context = {}) {
    const errorLog = {
      timestamp: new Date().toISOString(),
      name: error.name,
      message: error.message,
      code: error.code,
      stack: error.stack,
      context
    }

    if (error instanceof ValidationError) {
      errorLog.validationErrors = error.validationErrors
    }

    // 可以将错误发送到日志服务
    console.error('Error:', errorLog)
  }
}

// ✅ 使用错误日志
async function processOrder(orderData) {
  try {
    await validateOrder(orderData)
    await saveOrder(orderData)
  } catch (error) {
    ErrorLogger.log(error, { orderData })
    throw error
  }
}
```

### 7.6 优雅降级

```javascript
// ✅ 服务降级
class ServiceDegradation {
  static async withFallback(primaryOperation, fallbackOperation) {
    try {
      return await primaryOperation()
    } catch (error) {
      console.warn('Primary operation failed, using fallback:', error)
      return await fallbackOperation()
    }
  }
}

// ✅ 使用降级策略
async function getUserProfile(userId) {
  return await ServiceDegradation.withFallback(
    async () => await fetchUserFromAPI(userId),
    async () => await fetchUserFromCache(userId)
  )
}
```

### 7.7 错误恢复

```javascript
// ✅ 重试机制
class RetryOperation {
  static async withRetry(operation, maxRetries = 3, delay = 1000) {
    let lastError

    for (let i = 0; i < maxRetries; i++) {
      try {
        return await operation()
      } catch (error) {
        lastError = error
        if (i < maxRetries - 1) {
          await new Promise((resolve) => setTimeout(resolve, delay))
          delay *= 2 // 指数退避
        }
      }
    }

    throw lastError
  }
}

// ✅ 使用重试机制
async function fetchDataWithRetry() {
  return await RetryOperation.withRetry(async () => await fetchData(), 3, 1000)
}
```

### 7.8 全局错误处理

```javascript
// ✅ 全局错误处理器
class GlobalErrorHandler {
  static init() {
    // 处理未捕获的 Promise 错误
    process.on('unhandledRejection', (error) => {
      console.error('Unhandled Promise Rejection:', error)
      // 可以选择退出进程
      // process.exit(1)
    })

    // 处理未捕获的同步错误
    process.on('uncaughtException', (error) => {
      console.error('Uncaught Exception:', error)
      // 优雅退出
      process.exit(1)
    })
  }
}

// ✅ API 错误处理中间件
function errorHandlerMiddleware(error, req, res, next) {
  if (error instanceof ValidationError) {
    return res.status(400).json({
      error: 'Validation Error',
      details: error.validationErrors
    })
  }

  if (error instanceof NetworkError) {
    return res.status(error.statusCode).json({
      error: 'Network Error',
      message: error.message
    })
  }

  // 默认服务器错误
  res.status(500).json({
    error: 'Internal Server Error',
    message:
      process.env.NODE_ENV === 'production'
        ? 'An unexpected error occurred'
        : error.message
  })
}
```

## 8. 事件处理规范

### 8.1 DOM 事件处理

```javascript
// ✅ 事件监听器命名规范
class EventHandler {
  constructor() {
    // 使用箭头函数绑定 this
    this.handleClick = (e) => this.onClick(e)
    this.handleSubmit = (e) => this.onSubmit(e)
  }

  // ✅ 添加事件监听
  mount() {
    document.addEventListener('click', this.handleClick)
    document.addEventListener('submit', this.handleSubmit)
  }

  // ✅ 移除事件监听
  unmount() {
    document.removeEventListener('click', this.handleClick)
    document.removeEventListener('submit', this.handleSubmit)
  }

  // ✅ 事件处理方法
  onClick(event) {
    event.preventDefault() // 阻止默认行为
    event.stopPropagation() // 阻止事件冒泡
    // 处理点击事件
  }

  onSubmit(event) {
    // 处理提交事件
  }
}
```

### 8.2 事件委托

```javascript
// ✅ 使用事件委托优化性能
class ListHandler {
  constructor(listElement) {
    this.list = listElement
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  mount() {
    // 在父元素上监听事件
    this.list.addEventListener('click', this.handleItemClick)
  }

  handleItemClick(event) {
    const item = event.target.closest('.list-item')
    if (!item) return

    const action = item.dataset.action
    switch (action) {
      case 'edit':
        this.editItem(item)
        break
      case 'delete':
        this.deleteItem(item)
        break
    }
  }
}
```

### 8.3 自定义事件

```javascript
// ✅ 自定义事件类
class CustomEventEmitter {
  constructor() {
    this.events = new Map()
  }

  // 注册事件
  on(eventName, handler) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set())
    }
    this.events.get(eventName).add(handler)

    // 返回取消订阅函数
    return () => this.off(eventName, handler)
  }

  // 移除事件
  off(eventName, handler) {
    const handlers = this.events.get(eventName)
    if (handlers) {
      handlers.delete(handler)
    }
  }

  // 触发事件
  emit(eventName, data) {
    const handlers = this.events.get(eventName)
    if (handlers) {
      handlers.forEach((handler) => handler(data))
    }
  }

  // 只监听一次
  once(eventName, handler) {
    const onceHandler = (data) => {
      handler(data)
      this.off(eventName, onceHandler)
    }
    return this.on(eventName, onceHandler)
  }
}
```

### 8.4 异步事件处理

```javascript
// ✅ 异步事件处理器
class AsyncEventHandler {
  constructor() {
    this.queue = new Set()
  }

  // 添加异步事件处理
  async handleEvent(event) {
    try {
      // 将事件处理添加到队列
      this.queue.add(event)

      // 异步处理事件
      await this.processEvent(event)
    } finally {
      // 完成后从队列中移除
      this.queue.delete(event)
    }
  }

  // 防抖处理器
  debounceEvent(handler, delay = 300) {
    let timeoutId

    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => handler(...args), delay)
    }
  }

  // 节流处理器
  throttleEvent(handler, limit = 300) {
    let inThrottle

    return (...args) => {
      if (!inThrottle) {
        handler(...args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }
}
```

### 8.5 事件状态管理

```javascript
// ✅ 事件状态管理器
class EventStateManager {
  constructor() {
    this.state = {
      isProcessing: false,
      lastEvent: null,
      eventCount: 0
    }
  }

  // 更新状态
  updateState(updates) {
    this.state = { ...this.state, ...updates }
    this.notifyListeners()
  }

  // 处理事件
  async handleEvent(event) {
    this.updateState({
      isProcessing: true,
      lastEvent: event,
      eventCount: this.state.eventCount + 1
    })

    try {
      await this.processEvent(event)
    } finally {
      this.updateState({ isProcessing: false })
    }
  }
}
```

### 8.6 错误处理

```javascript
// ✅ 事件错误处理
class EventErrorHandler {
  // 包装事件处理器
  static wrap(handler) {
    return async (event) => {
      try {
        await handler(event)
      } catch (error) {
        this.handleError(error, event)
      }
    }
  }

  // 错误处理
  static handleError(error, event) {
    console.error('Event handling error:', {
      error,
      eventType: event.type,
      target: event.target,
      timestamp: new Date().toISOString()
    })

    // 可以选择重新抛出错误
    if (error instanceof CriticalError) {
      throw error
    }
  }
}
```

### 8.7 事件性能优化

```javascript
// ✅ 性能优化工具
class EventOptimizer {
  // RAF 包装器
  static requestAnimationFrameWrapper(handler) {
    let ticking = false

    return (event) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handler(event)
          ticking = false
        })
        ticking = true
      }
    }
  }

  // 批量处理事件
  static batchEvents(handler, delay = 100) {
    let events = []
    let timeoutId = null

    return (event) => {
      events.push(event)

      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handler(events)
          events = []
          timeoutId = null
        }, delay)
      }
    }
  }
}
```

### 8.8 事件测试

```javascript
// ✅ 事件测试辅助工具
class EventTestHelper {
  // 创建模拟事件
  static createMockEvent(type, data = {}) {
    return {
      type,
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      ...data
    }
  }

  // 事件处理器测试包装
  static async testEventHandler(handler, event) {
    const mockHandler = jest.fn()
    const wrappedHandler = EventErrorHandler.wrap(handler)

    try {
      await wrappedHandler(event)
      mockHandler()
    } catch (error) {
      return { error }
    }

    return {
      called: mockHandler.mock.calls.length > 0,
      event
    }
  }
}
```

## 9. 数据处理规范

### 9.1 数据转换

```javascript
// ✅ 数据类型转换
class DataConverter {
  // 字符串转换
  static toString(value) {
    if (value === null || value === undefined) return ''
    if (typeof value === 'object') return JSON.stringify(value)
    return String(value)
  }

  // 数字转换
  static toNumber(value) {
    if (typeof value === 'number') return value
    const num = Number(value)
    return isNaN(num) ? 0 : num
  }

  // 布尔转换
  static toBoolean(value) {
    if (typeof value === 'boolean') return value
    if (typeof value === 'string') {
      return ['true', '1', 'yes'].includes(value.toLowerCase())
    }
    return Boolean(value)
  }

  // 日期转换
  static toDate(value) {
    if (value instanceof Date) return value
    const date = new Date(value)
    return isNaN(date.getTime()) ? null : date
  }
}
```

### 9.2 数据验证

```javascript
// ✅ 数据验证器
class DataValidator {
  static isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  static isURL(value) {
    try {
      new URL(value)
      return true
    } catch {
      return false
    }
  }

  static isPhoneNumber(value) {
    return /^\+?[\d\s-]{10,}$/.test(value)
  }

  static validate(data, schema) {
    const errors = []

    for (const [field, rules] of Object.entries(schema)) {
      const value = data[field]

      if (rules.required && !value) {
        errors.push(`${field} is required`)
      }

      if (value) {
        if (rules.type && typeof value !== rules.type) {
          errors.push(`${field} must be a ${rules.type}`)
        }

        if (rules.min && value < rules.min) {
          errors.push(`${field} must be at least ${rules.min}`)
        }

        if (rules.max && value > rules.max) {
          errors.push(`${field} must be at most ${rules.max}`)
        }

        if (rules.pattern && !rules.pattern.test(value)) {
          errors.push(`${field} has invalid format`)
        }
      }
    }

    return errors
  }
}
```

### 9.3 数据过滤与清理

```javascript
// ✅ 数据清理器
class DataSanitizer {
  // HTML 转义
  static escapeHTML(str) {
    const div = document.createElement('div')
    div.textContent = str
    return div.innerHTML
  }

  // 移除特殊字符
  static removeSpecialChars(str) {
    return str.replace(/[^\w\s]/gi, '')
  }

  // 清理对象
  static sanitizeObject(obj, allowedFields) {
    const cleaned = {}
    for (const field of allowedFields) {
      if (obj.hasOwnProperty(field)) {
        cleaned[field] = obj[field]
      }
    }
    return cleaned
  }

  // 清理数组
  static sanitizeArray(arr, predicate) {
    return arr.filter(predicate).map((item) => {
      if (typeof item === 'object') {
        return this.sanitizeObject(item, ['id', 'name', 'value'])
      }
      return item
    })
  }
}
```

### 9.4 数据转换与映射

```javascript
// ✅ 数据转换器
class DataTransformer {
  // 对象转换
  static transform(data, mapping) {
    const result = {}

    for (const [targetKey, sourceKey] of Object.entries(mapping)) {
      if (typeof sourceKey === 'function') {
        result[targetKey] = sourceKey(data)
      } else {
        result[targetKey] = data[sourceKey]
      }
    }

    return result
  }

  // 数组转换
  static transformArray(array, mapping) {
    return array.map((item) => this.transform(item, mapping))
  }

  // 嵌套对象转换
  static transformNested(data, schema) {
    const result = {}

    for (const [key, config] of Object.entries(schema)) {
      if (typeof config === 'string') {
        result[key] = data[config]
      } else if (typeof config === 'object') {
        result[key] = this.transformNested(data, config)
      } else if (typeof config === 'function') {
        result[key] = config(data)
      }
    }

    return result
  }
}
```

### 9.5 数据缓存

```javascript
// ✅ 数据缓存管理
class CacheManager {
  constructor(ttl = 3600000) {
    // 默认1小时
    this.cache = new Map()
    this.ttl = ttl
  }

  // 设置缓存
  set(key, value, ttl = this.ttl) {
    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      ttl
    })
  }

  // 获取缓存
  get(key) {
    const item = this.cache.get(key)
    if (!item) return null

    const isExpired = Date.now() - item.timestamp > item.ttl
    if (isExpired) {
      this.cache.delete(key)
      return null
    }

    return item.value
  }

  // 清除过期缓存
  cleanup() {
    const now = Date.now()
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key)
      }
    }
  }
}
```

### 9.6 数据序列化

```javascript
// ✅ 数据序列化器
class DataSerializer {
  // JSON 序列化
  static toJSON(data, replacer = null) {
    try {
      return JSON.stringify(data, replacer, 2)
    } catch (error) {
      console.error('Serialization error:', error)
      return null
    }
  }

  // JSON 反序列化
  static fromJSON(json, reviver = null) {
    try {
      return JSON.parse(json, reviver)
    } catch (error) {
      console.error('Deserialization error:', error)
      return null
    }
  }

  // 自定义序列化
  static serialize(data) {
    if (data instanceof Date) {
      return { _type: 'date', value: data.toISOString() }
    }
    if (data instanceof Map) {
      return { _type: 'map', value: Array.from(data.entries()) }
    }
    if (data instanceof Set) {
      return { _type: 'set', value: Array.from(data) }
    }
    return data
  }

  // 自定义反序列化
  static deserialize(data) {
    if (!data || typeof data !== 'object') return data

    switch (data._type) {
      case 'date':
        return new Date(data.value)
      case 'map':
        return new Map(data.value)
      case 'set':
        return new Set(data.value)
      default:
        return data
    }
  }
}
```

### 9.7 数据比较

```javascript
// ✅ 数据比较器
class DataComparator {
  // 深度比较
  static isEqual(a, b) {
    if (a === b) return true
    if (typeof a !== typeof b) return false
    if (typeof a !== 'object') return false
    if (!a || !b) return false

    const keysA = Object.keys(a)
    const keysB = Object.keys(b)

    if (keysA.length !== keysB.length) return false

    return keysA.every((key) => this.isEqual(a[key], b[key]))
  }

  // 数组比较
  static compareArrays(arr1, arr2, comparator = (a, b) => a === b) {
    if (arr1.length !== arr2.length) return false
    return arr1.every((item, index) => comparator(item, arr2[index]))
  }

  // 版本比较
  static compareVersions(v1, v2) {
    const normalize = (v) => v.split('.').map(Number)
    const [parts1, parts2] = [normalize(v1), normalize(v2)]

    for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
      const num1 = parts1[i] || 0
      const num2 = parts2[i] || 0
      if (num1 !== num2) return num1 - num2
    }

    return 0
  }
}
```

### 9.8 数据导出

```javascript
// ✅ 数据导出器
class DataExporter {
  // 导出 CSV
  static toCSV(data, headers) {
    const headerRow = headers.map((h) => h.label).join(',')
    const rows = data.map((item) =>
      headers.map((h) => this.escapeCSV(item[h.key])).join(',')
    )
    return [headerRow, ...rows].join('\n')
  }

  // 导出 Excel
  static toExcel(data, headers) {
    const worksheet = this.createWorksheet(data, headers)
    return this.generateExcelFile(worksheet)
  }

  // CSV 字段转义
  static escapeCSV(field) {
    if (field === null || field === undefined) return ''
    return `"${String(field).replace(/"/g, '""')}"`
  }

  // 创建工作表
  static createWorksheet(data, headers) {
    // 实现工作表创建逻辑
  }

  // 生成 Excel 文件
  static generateExcelFile(worksheet) {
    // 实现 Excel 文件生成逻辑
  }
}
```

## 10. 条件语句规范

### 10.1 条件表达式

```javascript
// ✅ 使用清晰的比较操作符
function validateAge(age) {
  // 使用严格相等
  if (age === undefined || age === null) {
    return false
  }

  // 数值比较
  if (age < 0 || age > 120) {
    return false
  }

  return true
}

// ✅ 使用简洁的条件表达式
const isAdult = age >= 18
const hasPermission = user.role === 'admin' || user.role === 'moderator'
const isValidUser = user?.id && user?.status === 'active'

// ❌ 避免复杂的条件嵌套
if (user) {
  if (user.role) {
    if (user.role.permissions) {
      // 不推荐
      // ...
    }
  }
}

// ✅ 使用可选链操作符
if (user?.role?.permissions) {
  // ...
}
```

### 10.2 条件简化

```javascript
// ✅ 使用三元运算符
const status = isActive ? 'active' : 'inactive'

// ✅ 使用逻辑运算符简化条件
const userName = user?.name || 'Anonymous'
const userRole = user?.role ?? 'guest'
const canEdit = isAdmin && hasEditPermission

// ✅ 使用对象字面量替代 switch
const actions = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : null)
}

const calculate = (operation, a, b) => {
  const action = actions[operation]
  return action ? action(a, b) : null
}

// ✅ 使用数组方法替代复杂条件
const isValidStatus = ['active', 'pending', 'approved'].includes(status)
```

### 10.3 条件组合

```javascript
// ✅ 使用条件组合器
class ConditionBuilder {
  constructor() {
    this.conditions = []
  }

  add(condition) {
    this.conditions.push(condition)
    return this
  }

  // 所有条件都满足
  allMatch(data) {
    return this.conditions.every((condition) => condition(data))
  }

  // 任一条件满足
  anyMatch(data) {
    return this.conditions.some((condition) => condition(data))
  }
}

// ✅ 使用示例
const userValidator = new ConditionBuilder()
  .add((user) => user.age >= 18)
  .add((user) => user.status === 'active')
  .add((user) => user.emailVerified)

const isValidUser = userValidator.allMatch(userData)
```

### 10.4 条件分支处理

```javascript
// ✅ 使用策略模式处理分支
class PaymentProcessor {
  #strategies = {
    creditCard: (amount) => this.processCreditCard(amount),
    paypal: (amount) => this.processPaypal(amount),
    bankTransfer: (amount) => this.processBankTransfer(amount)
  }

  process(method, amount) {
    const strategy = this.#strategies[method]
    if (!strategy) {
      throw new Error(`Unsupported payment method: ${method}`)
    }
    return strategy(amount)
  }
}

// ✅ 使用命令模式处理复杂操作
class CommandExecutor {
  #commands = new Map()

  register(commandName, handler) {
    this.#commands.set(commandName, handler)
  }

  execute(commandName, ...args) {
    const handler = this.#commands.get(commandName)
    if (!handler) {
      throw new Error(`Unknown command: ${commandName}`)
    }
    return handler(...args)
  }
}
```

### 10.5 条件链式处理

```javascript
// ✅ 使用责任链模式
class RequestHandler {
  #nextHandler = null

  setNext(handler) {
    this.#nextHandler = handler
    return handler
  }

  handle(request) {
    if (this.#nextHandler) {
      return this.#nextHandler.handle(request)
    }
    return null
  }
}

// ✅ 实现具体处理器
class AuthHandler extends RequestHandler {
  handle(request) {
    if (!request.token) {
      throw new Error('No auth token')
    }
    return super.handle(request)
  }
}

class ValidationHandler extends RequestHandler {
  handle(request) {
    if (!this.validateRequest(request)) {
      throw new Error('Invalid request')
    }
    return super.handle(request)
  }
}
```

### 10.6 异步条件处理

```javascript
// ✅ 异步条件检查器
class AsyncConditionChecker {
  // 并行检查多个条件
  static async checkAll(conditions) {
    const results = await Promise.all(
      conditions.map((condition) => condition())
    )
    return results.every((result) => result)
  }

  // 串行检查直到失败
  static async checkSequential(conditions) {
    for (const condition of conditions) {
      if (!(await condition())) {
        return false
      }
    }
    return true
  }
}

// ✅ 使用示例
const userChecks = [
  async () => await checkUserExists(userId),
  async () => await checkUserPermissions(userId),
  async () => await checkUserStatus(userId)
]

const isValid = await AsyncConditionChecker.checkAll(userChecks)
```

### 10.7 条件缓存

```javascript
// ✅ 条件结果缓存
class ConditionCache {
  #cache = new Map()
  #ttl

  constructor(ttl = 5000) {
    // 默认5秒缓存
    this.#ttl = ttl
  }

  async evaluate(key, condition) {
    const cached = this.#cache.get(key)
    if (cached && Date.now() - cached.timestamp < this.#ttl) {
      return cached.result
    }

    const result = await condition()
    this.#cache.set(key, {
      result,
      timestamp: Date.now()
    })

    return result
  }

  invalidate(key) {
    this.#cache.delete(key)
  }
}
```

### 10.8 条件测试

```javascript
// ✅ 条件测试辅助类
class ConditionTester {
  static generateTestCases(condition, testCases) {
    return testCases.map((testCase) => ({
      input: testCase.input,
      expected: testCase.expected,
      actual: condition(testCase.input)
    }))
  }

  static validateResults(results) {
    return results.map((result) => ({
      ...result,
      passed: result.actual === result.expected
    }))
  }
}

// ✅ 使用示例
const isAdultCondition = (age) => age >= 18
const testCases = [
  { input: 17, expected: false },
  { input: 18, expected: true },
  { input: 25, expected: true }
]

const results = ConditionTester.generateTestCases(isAdultCondition, testCases)
const validatedResults = ConditionTester.validateResults(results)
```

## 11. API 调用规范

### 11.1 Axios 实例配置

```javascript
// ✅ 创建 Axios 实例
import axios from 'axios'

// 创建请求实例
const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// ✅ 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 添加认证信息
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // 添加时间戳防止缓存
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now()
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// ✅ 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    // 直接返回数据部分
    return response.data
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权
          handleUnauthorized()
          break
        case 403:
          // 处理禁止访问
          handleForbidden()
          break
        case 404:
          // 处理未找到
          handleNotFound()
          break
        case 500:
          // 处理服务器错误
          handleServerError()
          break
      }
    }
    return Promise.reject(error)
  }
)
```

### 11.2 API 服务封装

```javascript
// ✅ 用户服务
class UserService {
  // 获取用户信息
  static async getUser(id) {
    try {
      return await apiClient.get(`/users/${id}`)
    } catch (error) {
      throw new APIError('Failed to fetch user', error)
    }
  }

  // 更新用户信息
  static async updateUser(id, data) {
    try {
      return await apiClient.put(`/users/${id}`, data)
    } catch (error) {
      throw new APIError('Failed to update user', error)
    }
  }

  // 批量获取用户
  static async getUsers(ids) {
    try {
      const requests = ids.map((id) => this.getUser(id))
      return await Promise.all(requests)
    } catch (error) {
      throw new APIError('Failed to fetch users', error)
    }
  }
}

// ✅ 认证服务
class AuthService {
  // 登录
  static async login(credentials) {
    try {
      const response = await apiClient.post('/auth/login', credentials)
      this.handleAuthSuccess(response.data)
      return response.data
    } catch (error) {
      throw new APIError('Login failed', error)
    }
  }

  // 登出
  static async logout() {
    try {
      await apiClient.post('/auth/logout')
      this.handleLogout()
    } catch (error) {
      throw new APIError('Logout failed', error)
    }
  }

  // 处理认证成功
  static handleAuthSuccess(data) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
  }

  // 处理登出
  static handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}
```

### 11.3 请求重试与取消

```javascript
// ✅ 请求重试配置
const retryConfig = {
  retry: 3,
  retryDelay: (retryCount) => {
    return retryCount * 1000 // 递增延迟
  },
  retryCondition: (error) => {
    // 只对特定错误重试
    return axios.isAxiosError(error) && error.response?.status >= 500
  }
}

// ✅ 创建可取消的请求
function createCancelableRequest(requestFn) {
  const controller = new AbortController()

  const promise = requestFn({
    signal: controller.signal
  })

  return {
    promise,
    cancel: () => controller.abort()
  }
}

// ✅ 使用示例
const { promise, cancel } = createCancelableRequest((config) =>
  apiClient.get('/long-running-task', config)
)

// 设置超时自动取消
setTimeout(cancel, 5000)
```

### 11.4 请求队列与并发控制

```javascript
// ✅ 请求队列管理器
class RequestQueue {
  constructor(maxConcurrent = 3) {
    this.maxConcurrent = maxConcurrent
    this.queue = []
    this.running = 0
  }

  async add(request) {
    if (this.running >= this.maxConcurrent) {
      // 等待队列
      await new Promise((resolve) => this.queue.push(resolve))
    }

    try {
      this.running++
      return await request()
    } finally {
      this.running--
      if (this.queue.length > 0) {
        const next = this.queue.shift()
        next()
      }
    }
  }
}

// ✅ 使用队列处理请求
const requestQueue = new RequestQueue(3)

async function processRequests(ids) {
  const results = []
  for (const id of ids) {
    const result = await requestQueue.add(() => UserService.getUser(id))
    results.push(result)
  }
  return results
}
```

### 11.5 API 缓存

```javascript
// ✅ 请求缓存装饰器
function withCache(ttl = 5 * 60 * 1000) {
  // 默认5分钟
  const cache = new Map()

  return function (target, propertyKey, descriptor) {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args) {
      const key = `${propertyKey}-${JSON.stringify(args)}`
      const cached = cache.get(key)

      if (cached && Date.now() - cached.timestamp < ttl) {
        return cached.data
      }

      const result = await originalMethod.apply(this, args)
      cache.set(key, {
        data: result,
        timestamp: Date.now()
      })

      return result
    }

    return descriptor
  }
}

// ✅ 使用缓存装饰器
class CachedUserService {
  @withCache(5 * 60 * 1000)
  static async getUser(id) {
    return await apiClient.get(`/users/${id}`)
  }
}
```

### 11.6 API 错误处理

```javascript
// ✅ API 错误类
class APIError extends Error {
  constructor(message, error) {
    super(message)
    this.name = 'APIError'
    this.status = error.response?.status
    this.data = error.response?.data
    this.originalError = error
  }
}

// ✅ 错误处理中间件
class ErrorHandler {
  static handle(error) {
    if (error instanceof APIError) {
      // 处理API错误
      this.handleAPIError(error)
    } else if (axios.isAxiosError(error)) {
      // 处理Axios错误
      this.handleAxiosError(error)
    } else {
      // 处理其他错误
      this.handleUnexpectedError(error)
    }
  }

  static handleAPIError(error) {
    switch (error.status) {
      case 400:
        notifyUser('请求参数错误')
        break
      case 401:
        notifyUser('请重新登录')
        redirectToLogin()
        break
      case 403:
        notifyUser('没有权限访问')
        break
      case 404:
        notifyUser('请求的资源不存在')
        break
      case 500:
        notifyUser('服务器错误，请稍后重试')
        break
      default:
        notifyUser('发生未知错误')
    }
  }
}
```

### 11.7 API 文档

```javascript
// ✅ API 接口文档
/**
 * @api {get} /users/:id 获取用户信息
 * @apiName GetUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 用户ID
 *
 * @apiSuccess {String} id 用户ID
 * @apiSuccess {String} name 用户名
 * @apiSuccess {String} email 邮箱
 * @apiSuccess {String} role 用户角色
 *
 * @apiError {Object} error 错误信息
 * @apiError {String} error.message 错误描述
 * @apiError {Number} error.code 错误代码
 */
```

### 11.8 Mock 服务

```javascript
// ✅ Mock 拦截器
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(apiClient, { delayResponse: 2000 })

// Mock GET 请求
mock.onGet(/\/users\/\d+/).reply((config) => {
  const id = config.url.split('/').pop()
  return [
    200,
    {
      id,
      name: `User ${id}`,
      email: `user${id}@example.com`
    }
  ]
})

// Mock POST 请求
mock.onPost('/auth/login').reply((config) => {
  const { email, password } = JSON.parse(config.data)
  if (email === 'test@example.com' && password === 'password') {
    return [
      200,
      {
        token: 'mock-jwt-token',
        user: {
          id: '1',
          email: 'test@example.com'
        }
      }
    ]
  }
  return [401, { message: '用户名或密码错误' }]
})
```

## 12. 性能优化规范

### 12.1 代码优化

```javascript
// ✅ 缓存优化
class PerformanceCache {
  #cache = new Map()
  #maxSize

  constructor(maxSize = 100) {
    this.#maxSize = maxSize
  }

  set(key, value, ttl = 3600000) {
    if (this.#cache.size >= this.#maxSize) {
      const oldestKey = this.#cache.keys().next().value
      this.#cache.delete(oldestKey)
    }

    this.#cache.set(key, {
      value,
      expiry: Date.now() + ttl
    })
  }

  get(key) {
    const item = this.#cache.get(key)
    if (!item) return null

    if (Date.now() > item.expiry) {
      this.#cache.delete(key)
      return null
    }

    return item.value
  }
}

// ✅ 防抖与节流
const debounce = (fn, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

const throttle = (fn, limit) => {
  let inThrottle
  return (...args) => {
    if (!inThrottle) {
      fn(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
```

### 12.2 资源优化

```javascript
// ✅ 图片懒加载
class LazyLoader {
  constructor(options = {}) {
    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options
    }

    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      this.options
    )
  }

  observe(elements) {
    elements.forEach((element) => {
      this.observer.observe(element)
    })
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target
        const src = element.dataset.src
        if (src) {
          element.src = src
          element.removeAttribute('data-src')
          this.observer.unobserve(element)
        }
      }
    })
  }
}

// ✅ 资源预加载
class ResourcePreloader {
  static preloadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = resolve
      img.onerror = reject
      img.src = url
    })
  }

  static preloadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = url
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)
    })
  }
}
```

### 12.3 渲染优化

```javascript
// ✅ 虚拟列表
class VirtualList {
  constructor(container, items, itemHeight) {
    this.container = container
    this.items = items
    this.itemHeight = itemHeight
    this.visibleItems = Math.ceil(container.clientHeight / itemHeight)
    this.scrollTop = 0
    this.startIndex = 0

    this.container.addEventListener('scroll', this.onScroll.bind(this))
  }

  onScroll() {
    this.scrollTop = this.container.scrollTop
    this.render()
  }

  render() {
    this.startIndex = Math.floor(this.scrollTop / this.itemHeight)
    const endIndex = Math.min(
      this.startIndex + this.visibleItems + 1,
      this.items.length
    )

    const fragment = document.createDocumentFragment()
    for (let i = this.startIndex; i < endIndex; i++) {
      const item = this.renderItem(this.items[i], i)
      item.style.transform = `translateY(${i * this.itemHeight}px)`
      fragment.appendChild(item)
    }

    this.container.innerHTML = ''
    this.container.appendChild(fragment)
  }
}

// ✅ RAF 动画优化
class AnimationOptimizer {
  constructor() {
    this.callbacks = new Set()
    this.running = false
  }

  add(callback) {
    this.callbacks.add(callback)
    if (!this.running) {
      this.start()
    }
    return () => this.remove(callback)
  }

  remove(callback) {
    this.callbacks.delete(callback)
    if (this.callbacks.size === 0) {
      this.stop()
    }
  }

  start() {
    this.running = true
    this.run()
  }

  stop() {
    this.running = false
  }

  run() {
    if (!this.running) return

    this.callbacks.forEach((callback) => callback())
    requestAnimationFrame(() => this.run())
  }
}
```

### 12.4 内存优化

```javascript
// ✅ 内存泄漏检测
class MemoryMonitor {
  constructor(threshold = 100) {
    this.threshold = threshold
    this.snapshots = []
  }

  takeSnapshot() {
    if (window.performance && window.performance.memory) {
      const memory = window.performance.memory
      this.snapshots.push({
        usedJSHeapSize: memory.usedJSHeapSize,
        timestamp: Date.now()
      })

      this.analyze()
    }
  }

  analyze() {
    if (this.snapshots.length < 2) return

    const latest = this.snapshots[this.snapshots.length - 1]
    const previous = this.snapshots[this.snapshots.length - 2]
    const growth = latest.usedJSHeapSize - previous.usedJSHeapSize

    if (growth > this.threshold * 1024 * 1024) {
      console.warn('Potential memory leak detected:', {
        growth: `${(growth / 1024 / 1024).toFixed(2)} MB`,
        timestamp: new Date(latest.timestamp).toISOString()
      })
    }
  }
}

// ✅ 对象池
class ObjectPool {
  constructor(factory, initialSize = 10) {
    this.factory = factory
    this.pool = []
    this.init(initialSize)
  }

  init(size) {
    for (let i = 0; i < size; i++) {
      this.pool.push(this.factory())
    }
  }

  acquire() {
    return this.pool.pop() || this.factory()
  }

  release(obj) {
    if (obj && typeof obj.reset === 'function') {
      obj.reset()
    }
    this.pool.push(obj)
  }
}
```

### 12.5 网络优化

```javascript
// ✅ 请求合并
class RequestBatcher {
  constructor(batchTime = 100) {
    this.batchTime = batchTime
    this.queue = []
    this.timer = null
  }

  add(request) {
    return new Promise((resolve, reject) => {
      this.queue.push({ request, resolve, reject })

      if (!this.timer) {
        this.timer = setTimeout(() => this.process(), this.batchTime)
      }
    })
  }

  async process() {
    const batch = this.queue
    this.queue = []
    this.timer = null

    try {
      const results = await this.executeBatch(batch)
      batch.forEach(({ resolve }, index) => {
        resolve(results[index])
      })
    } catch (error) {
      batch.forEach(({ reject }) => reject(error))
    }
  }
}

// ✅ 数据压缩
class DataCompressor {
  static compress(data) {
    return JSON.stringify(data)
      .split('')
      .reduce(
        (acc, char) => {
          const count = acc.current[char] || 0
          return {
            result: count === 0 ? acc.result + char : acc.result,
            current: { ...acc.current, [char]: count + 1 }
          }
        },
        { result: '', current: {} }
      ).result
  }
}
```

### 12.6 性能监控

```javascript
// ✅ 性能监控器
class PerformanceMonitor {
  constructor() {
    this.metrics = {}
  }

  // 测量时间
  measure(name, fn) {
    const start = performance.now()
    const result = fn()
    const duration = performance.now() - start

    this.metrics[name] = {
      duration,
      timestamp: Date.now()
    }

    return result
  }

  // 异步测量
  async measureAsync(name, fn) {
    const start = performance.now()
    const result = await fn()
    const duration = performance.now() - start

    this.metrics[name] = {
      duration,
      timestamp: Date.now()
    }

    return result
  }

  // 获取性能报告
  getReport() {
    return Object.entries(this.metrics).map(([name, data]) => ({
      name,
      duration: `${data.duration.toFixed(2)}ms`,
      timestamp: new Date(data.timestamp).toISOString()
    }))
  }
}

// ✅ 使用示例
const monitor = new PerformanceMonitor()

// 同步测量
monitor.measure('calculation', () => {
  // 执行计算
})

// 异步测量
await monitor.measureAsync('api-call', async () => {
  // 执行API调用
})

console.table(monitor.getReport())
```

## 13. 测试编写规范

### 13.1 单元测试

```javascript
// ✅ 测试套件组织
describe('UserService', () => {
  let userService
  let mockUserRepository

  // 测试前初始化
  beforeEach(() => {
    mockUserRepository = {
      findById: jest.fn(),
      save: jest.fn()
    }
    userService = new UserService(mockUserRepository)
  })

  // 测试后清理
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('createUser', () => {
    const validUserData = {
      name: 'John Doe',
      email: 'john@example.com',
      age: 30
    }

    it('should create a new user with valid data', async () => {
      // Arrange
      mockUserRepository.save.mockResolvedValue({ id: '1', ...validUserData })

      // Act
      const user = await userService.createUser(validUserData)

      // Assert
      expect(user).toBeDefined()
      expect(user.id).toBe('1')
      expect(user.name).toBe(validUserData.name)
      expect(mockUserRepository.save).toHaveBeenCalledWith(validUserData)
    })

    it('should throw error with invalid data', async () => {
      // Arrange
      const invalidData = { name: '' }

      // Act & Assert
      await expect(userService.createUser(invalidData)).rejects.toThrow(
        'Invalid user data'
      )
    })
  })
})
```

### 13.2 集成测试

```javascript
// ✅ API 集成测试
describe('User API Integration', () => {
  let app
  let testDb

  beforeAll(async () => {
    testDb = await setupTestDatabase()
    app = await createTestApp(testDb)
  })

  afterAll(async () => {
    await testDb.cleanup()
  })

  describe('User CRUD Operations', () => {
    it('should perform full user lifecycle', async () => {
      // Create
      const createResponse = await request(app).post('/api/users').send({
        name: 'Test User',
        email: 'test@example.com'
      })
      expect(createResponse.status).toBe(201)
      const userId = createResponse.body.id

      // Read
      const getResponse = await request(app).get(`/api/users/${userId}`)
      expect(getResponse.status).toBe(200)
      expect(getResponse.body.name).toBe('Test User')

      // Update
      const updateResponse = await request(app)
        .put(`/api/users/${userId}`)
        .send({ name: 'Updated Name' })
      expect(updateResponse.status).toBe(200)
      expect(updateResponse.body.name).toBe('Updated Name')

      // Delete
      const deleteResponse = await request(app).delete(`/api/users/${userId}`)
      expect(deleteResponse.status).toBe(204)

      // Verify deletion
      const verifyResponse = await request(app).get(`/api/users/${userId}`)
      expect(verifyResponse.status).toBe(404)
    })
  })
})
```

### 13.3 端到端测试

```javascript
// ✅ E2E 测试示例 (使用 Cypress)
describe('User Management', () => {
  beforeEach(() => {
    cy.login('admin@example.com', 'password')
  })

  it('should create and manage user', () => {
    // 访问用户列表页面
    cy.visit('/users')

    // 创建新用户
    cy.get('[data-test="create-user-btn"]').click()
    cy.get('[data-test="name-input"]').type('New User')
    cy.get('[data-test="email-input"]').type('new@example.com')
    cy.get('[data-test="submit-btn"]').click()

    // 验证用户创建成功
    cy.contains('User created successfully')
    cy.contains('New User')

    // 编辑用户
    cy.get('[data-test="edit-user-btn"]').first().click()
    cy.get('[data-test="name-input"]').clear().type('Updated User')
    cy.get('[data-test="submit-btn"]').click()

    // 验证更新成功
    cy.contains('User updated successfully')
    cy.contains('Updated User')
  })
})
```

### 13.4 测试工具类

```javascript
// ✅ 测试工具和辅助函数
class TestHelper {
  // 创建测试数据
  static createTestUser(overrides = {}) {
    return {
      id: 'test-id',
      name: 'Test User',
      email: 'test@example.com',
      createdAt: new Date(),
      ...overrides
    }
  }

  // 模拟 API 响应
  static mockApiResponse(status, data, headers = {}) {
    return {
      status,
      data,
      headers,
      ok: status >= 200 && status < 300
    }
  }

  // 创建模拟事件
  static createMockEvent(type, data = {}) {
    return {
      type,
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      target: { value: data.value },
      ...data
    }
  }
}

// ✅ 测试数据生成器
class TestDataGenerator {
  static generateUsers(count = 1) {
    return Array.from({ length: count }, (_, index) => ({
      id: `user-${index + 1}`,
      name: `User ${index + 1}`,
      email: `user${index + 1}@example.com`
    }))
  }

  static generateRandomData() {
    return {
      string: Math.random().toString(36).substring(7),
      number: Math.floor(Math.random() * 1000),
      boolean: Math.random() > 0.5,
      date: new Date()
    }
  }
}
```

### 13.5 测试覆盖率

```javascript
// ✅ Jest 配置示例
module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/test/', '/dist/'],
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js']
}

// ✅ 覆盖率报告生成
class CoverageReporter {
  static generateReport(coverageData) {
    return {
      summary: this.calculateSummary(coverageData),
      details: this.generateDetails(coverageData)
    }
  }

  static calculateSummary(coverageData) {
    // 计算覆盖率统计
  }

  static generateDetails(coverageData) {
    // 生成详细报告
  }
}
```

### 13.6 测试最佳实践

```javascript
// ✅ 测试工厂函数
const createTestComponent = (props = {}) => {
  const defaultProps = {
    title: 'Test Title',
    onClick: jest.fn()
  }
  return mount(<Component {...defaultProps} {...props} />)
}

// ✅ 异步测试辅助
const waitForAsync = async () => {
  await new Promise((resolve) => setTimeout(resolve, 0))
}

// ✅ 快照测试
describe('Component Snapshots', () => {
  it('should match snapshot', () => {
    const wrapper = createTestComponent()
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with different props', () => {
    const wrapper = createTestComponent({ title: 'Different Title' })
    expect(wrapper).toMatchSnapshot()
  })
})
```

### 13.7 测试环境配置

```javascript
// ✅ 测试环境设置
class TestEnvironment {
  static async setup() {
    // 设置测试环境变量
    process.env.NODE_ENV = 'test'
    process.env.API_URL = 'http://localhost:3000'

    // 初始化测试数据库
    await this.setupTestDatabase()

    // 设置全局模拟
    this.setupGlobalMocks()
  }

  static async setupTestDatabase() {
    // 创建测试数据库连接
    const testDb = await createTestDatabase()

    // 清理旧数据
    await testDb.cleanup()

    // 加载测试数据
    await testDb.seed()

    return testDb
  }

  static setupGlobalMocks() {
    // 模拟 fetch
    global.fetch = jest.fn()

    // 模拟 localStorage
    global.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn()
    }
  }
}
```

### 13.8 测试文档

```javascript
// ✅ 测试文档示例
/**
 * @jest-environment jsdom
 * @group unit
 * @category service
 */
describe('UserService', () => {
  /**
   * 测试用户创建功能
   * @test 验证用户创建成功场景
   * @covers UserService.createUser
   */
  it('should create user successfully', () => {
    // 测试实现
  })
})

// ✅ 测试报告生成器
class TestDocumentationGenerator {
  static generate(testFiles) {
    const docs = testFiles.map((file) => {
      const tests = this.parseTestFile(file)
      return {
        filename: file.name,
        description: file.description,
        tests: tests.map((test) => ({
          name: test.name,
          description: test.description,
          coverage: test.coverage
        }))
      }
    })

    return this.formatDocumentation(docs)
  }
}
```

## 14. TypeScript 相关规范

### 14.1 基础类型定义

```typescript
// ✅ 基础类型
type ID = string | number
type Nullable<T> = T | null
type Optional<T> = T | undefined
type Primitive = string | number | boolean | null | undefined

// ✅ 接口定义
interface User {
  id: ID
  name: string
  email: string
  age?: number
  role: UserRole
  meta: Record<string, unknown>
}

// ✅ 枚举定义
enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST'
}

// ✅ 常量枚举
const enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  ServerError = 500
}
```

### 14.2 高级类型

```typescript
// ✅ 泛型类型
interface ApiResponse<T> {
  data: T
  status: HttpStatus
  message: string
  timestamp: Date
}

// ✅ 工具类型
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

type Partial<T> = {
  [P in keyof T]?: T[P]
}

type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type Record<K extends keyof any, T> = {
  [P in K]: T
}

// ✅ 条件类型
type NonNullable<T> = T extends null | undefined ? never : T

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any

// ✅ 映射类型
type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

type Required<T> = {
  [P in keyof T]-?: T[P]
}
```

### 14.3 类型守卫

```typescript
// ✅ 类型谓词
function isUser(obj: any): obj is User {
  return (
    typeof obj === 'object' &&
    typeof obj.id !== 'undefined' &&
    typeof obj.name === 'string' &&
    typeof obj.email === 'string'
  )
}

// ✅ instanceof 守卫
class ApiError extends Error {
  constructor(
    public code: number,
    message: string
  ) {
    super(message)
  }
}

function handleError(error: unknown) {
  if (error instanceof ApiError) {
    console.error(`API Error ${error.code}: ${error.message}`)
  } else if (error instanceof Error) {
    console.error(`Error: ${error.message}`)
  }
}

// ✅ in 操作符守卫
interface Admin {
  role: 'admin'
  permissions: string[]
}

interface RegularUser {
  role: 'user'
  preferences: Record<string, unknown>
}

function processUser(user: Admin | RegularUser) {
  if ('permissions' in user) {
    // TypeScript 知道这是 Admin
    console.log(user.permissions)
  } else {
    // TypeScript 知道这是 RegularUser
    console.log(user.preferences)
  }
}
```

### 14.4 装饰器

```typescript
// ✅ 类装饰器
function Controller(path: string) {
  return function (target: Function) {
    Reflect.defineMetadata('path', path, target)
  }
}

// ✅ 方法装饰器
function Get(path: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    Reflect.defineMetadata('path', path, target, propertyKey)
    Reflect.defineMetadata('method', 'GET', target, propertyKey)
  }
}

// ✅ 属性装饰器
function Required(target: any, propertyKey: string) {
  Reflect.defineMetadata('required', true, target, propertyKey)
}

// ✅ 参数装饰器
function Param(target: any, propertyKey: string, parameterIndex: number) {
  const existingParams =
    Reflect.getMetadata('params', target, propertyKey) || []
  existingParams.push(parameterIndex)
  Reflect.defineMetadata('params', existingParams, target, propertyKey)
}

// ✅ 使用示例
@Controller('/users')
class UserController {
  @Required
  private userService: UserService

  @Get('/:id')
  async getUser(@Param id: string): Promise<User> {
    return this.userService.findById(id)
  }
}
```

### 14.5 泛型约束

```typescript
// ✅ 泛型约束
interface HasId {
  id: ID
}

class Repository<T extends HasId> {
  private items: T[] = []

  save(item: T): void {
    const index = this.items.findIndex((i) => i.id === item.id)
    if (index >= 0) {
      this.items[index] = item
    } else {
      this.items.push(item)
    }
  }

  findById(id: ID): T | undefined {
    return this.items.find((item) => item.id === id)
  }
}

// ✅ 泛型工厂
interface Constructor<T> {
  new (...args: any[]): T
}

function withLogging<T extends Constructor<{}>>(Base: T) {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args)
      console.log(`New instance created of ${Base.name}`)
    }
  }
}
```

### 14.6 类型推断

```typescript
// ✅ 返回类型推断
function createUser(data: Partial<User>) {
  return {
    id: generateId(),
    role: UserRole.User,
    ...data
  } as const // 使用 const 断言获得更精确的类型
}

// ✅ 泛型推断
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key]
    }
  })
  return result
}

// ✅ 条件类型推断
type ArrayElement<T> = T extends Array<infer E> ? E : never
```

### 14.7 模块声明

```typescript
// ✅ 声明模块
declare module 'my-module' {
  export interface Options {
    timeout?: number
    retries?: number
  }

  export function initialize(options?: Options): void
  export function terminate(): void
}

// ✅ 声明全局类型
declare global {
  interface Window {
    config: {
      apiUrl: string
      debug: boolean
    }
  }
}

// ✅ 声明命名空间
declare namespace API {
  interface Request {
    endpoint: string
    method: string
    data?: unknown
  }

  interface Response<T = unknown> {
    data: T
    status: number
  }
}
```

### 14.8 配置文件

```typescript
// ✅ tsconfig.json 示例
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "build", "dist"]
}
```

## 15. 安全性规范

### 15.1 输入验证

```javascript
// ✅ 输入验证器
class InputValidator {
  // 基础字符串验证
  static validateString(input, options = {}) {
    const {
      minLength = 0,
      maxLength = Infinity,
      pattern = null,
      allowedChars = null
    } = options

    if (typeof input !== 'string') {
      throw new ValidationError('Input must be a string')
    }

    // 长度检查
    if (input.length < minLength || input.length > maxLength) {
      throw new ValidationError(
        `Input length must be between ${minLength} and ${maxLength}`
      )
    }

    // 模式匹配
    if (pattern && !pattern.test(input)) {
      throw new ValidationError('Input format is invalid')
    }

    // 字符集检查
    if (
      allowedChars &&
      !input.split('').every((char) => allowedChars.includes(char))
    ) {
      throw new ValidationError('Input contains invalid characters')
    }

    return input.trim()
  }

  // 邮箱验证
  static validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return this.validateString(email, {
      maxLength: 254,
      pattern: emailPattern
    })
  }

  // URL验证
  static validateURL(url) {
    try {
      new URL(url)
      return url
    } catch {
      throw new ValidationError('Invalid URL format')
    }
  }

  // 文件验证
  static validateFile(file, options = {}) {
    const {
      maxSize = 5 * 1024 * 1024, // 5MB
      allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
    } = options

    if (file.size > maxSize) {
      throw new ValidationError(`File size exceeds ${maxSize} bytes`)
    }

    if (!allowedTypes.includes(file.type)) {
      throw new ValidationError('File type not allowed')
    }

    return file
  }
}
```

### 15.2 XSS 防护

```javascript
// ✅ XSS 防护工具
class XSSProtection {
  // HTML 转义
  static escape(str) {
    const div = document.createElement('div')
    div.textContent = str
    return div.innerHTML
  }

  // HTML 反转义
  static unescape(str) {
    const div = document.createElement('div')
    div.innerHTML = str
    return div.textContent
  }

  // 对象递归转义
  static sanitizeObject(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return typeof obj === 'string' ? this.escape(obj) : obj
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => this.sanitizeObject(item))
    }

    const sanitized = {}
    for (const [key, value] of Object.entries(obj)) {
      sanitized[key] = this.sanitizeObject(value)
    }
    return sanitized
  }

  // URL 参数清理
  static sanitizeURLParams(url) {
    const urlObj = new URL(url)
    const cleanParams = new URLSearchParams()

    for (const [key, value] of urlObj.searchParams) {
      cleanParams.append(key, this.escape(value))
    }

    urlObj.search = cleanParams.toString()
    return urlObj.toString()
  }
}
```

### 15.3 CSRF 防护

```javascript
// ✅ CSRF 保护
class CSRFProtection {
  // 生成 CSRF 令牌
  static generateToken() {
    return crypto.randomBytes(32).toString('hex')
  }

  // 验证 CSRF 令牌
  static validateToken(token, storedToken) {
    if (!token || !storedToken) {
      return false
    }
    return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(storedToken))
  }

  // 添加 CSRF 令牌到表单
  static addTokenToForm(form) {
    const token = this.generateToken()
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = '_csrf'
    input.value = token
    form.appendChild(input)
    return token
  }

  // 添加 CSRF 令牌到请求头
  static addTokenToHeaders(headers = {}) {
    const token = this.getStoredToken()
    if (token) {
      return {
        ...headers,
        'X-CSRF-Token': token
      }
    }
    return headers
  }
}
```

### 15.4 认证与授权

```javascript
// ✅ 认证管理器
class AuthManager {
  // 密码哈希
  static async hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex')
    return new Promise((resolve, reject) => {
      crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, key) => {
        if (err) reject(err)
        resolve(`${salt}:${key.toString('hex')}`)
      })
    })
  }

  // 验证密码
  static async verifyPassword(password, hash) {
    const [salt, key] = hash.split(':')
    return new Promise((resolve, reject) => {
      crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, newKey) => {
        if (err) reject(err)
        resolve(key === newKey.toString('hex'))
      })
    })
  }

  // JWT 令牌生成
  static generateJWT(payload, secret, options = {}) {
    return jwt.sign(payload, secret, {
      expiresIn: '1h',
      ...options
    })
  }

  // JWT 令牌验证
  static verifyJWT(token, secret) {
    try {
      return jwt.verify(token, secret)
    } catch (error) {
      throw new AuthError('Invalid token')
    }
  }
}

// ✅ 权限检查装饰器
function requirePermission(permission) {
  return function (target, propertyKey, descriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args) {
      const user = getCurrentUser()
      if (!user || !user.permissions.includes(permission)) {
        throw new AuthError('Permission denied')
      }
      return originalMethod.apply(this, args)
    }

    return descriptor
  }
}
```

### 15.5 数据加密

```javascript
// ✅ 加密工具
class Encryption {
  // AES 加密
  static async encrypt(data, key) {
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv)

    let encrypted = cipher.update(data, 'utf8', 'hex')
    encrypted += cipher.final('hex')

    const authTag = cipher.getAuthTag()

    return {
      encrypted,
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex')
    }
  }

  // AES 解密
  static async decrypt(encryptedData, key) {
    const { encrypted, iv, authTag } = encryptedData
    const decipher = crypto.createDecipheriv(
      'aes-256-gcm',
      key,
      Buffer.from(iv, 'hex')
    )

    decipher.setAuthTag(Buffer.from(authTag, 'hex'))

    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')

    return decrypted
  }
}
```

### 15.6 安全头部

```javascript
// ✅ 安全头部配置
class SecurityHeaders {
  static getHeaders() {
    return {
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Content-Security-Policy': this.getCSP(),
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  }

  static getCSP() {
    return [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self' https://api.example.com"
    ].join('; ')
  }
}
```

### 15.7 安全存储

```javascript
// ✅ 安全存储管理器
class SecureStorage {
  // 安全保存到 localStorage
  static setItem(key, value) {
    const encryptedValue = this.encrypt(JSON.stringify(value))
    localStorage.setItem(key, encryptedValue)
  }

  // 从 localStorage 安全读取
  static getItem(key) {
    const encryptedValue = localStorage.getItem(key)
    if (!encryptedValue) return null

    try {
      const decryptedValue = this.decrypt(encryptedValue)
      return JSON.parse(decryptedValue)
    } catch {
      return null
    }
  }

  // 敏感数据加密
  static encrypt(data) {
    // 实现加密逻辑
  }

  // 敏感数据解密
  static decrypt(encryptedData) {
    // 实现解密逻辑
  }
}
```

### 15.8 安全监控

```javascript
// ✅ 安全监控器
class SecurityMonitor {
  static initialize() {
    this.setupErrorHandling()
    this.setupActivityLogging()
    this.startPeriodicChecks()
  }

  // 错误处理
  static setupErrorHandling() {
    window.onerror = (message, source, lineno, colno, error) => {
      this.logSecurityEvent({
        type: 'error',
        message,
        source,
        lineno,
        colno,
        stack: error?.stack
      })
    }
  }

  // 活动日志
  static setupActivityLogging() {
    document.addEventListener('click', (event) => {
      if (event.target.matches('button, a')) {
        this.logSecurityEvent({
          type: 'userActivity',
          element: event.target.tagName,
          id: event.target.id,
          timestamp: new Date()
        })
      }
    })
  }

  // 定期安全检查
  static startPeriodicChecks() {
    setInterval(() => {
      this.checkLocalStorageIntegrity()
      this.checkCSRFToken()
      this.checkSessionStatus()
    }, 60000) // 每分钟检查
  }

  // 记录安全事件
  static logSecurityEvent(event) {
    // 实现日志记录逻辑
  }
}
```
