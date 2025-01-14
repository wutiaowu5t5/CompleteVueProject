/*
 * @Description: ESLint 的主要配置文件，用于定义代码检查规则和解析器选项
 * @Author: Satoru 5t5
 * @File .eslintrc.cjs
 * @Date: 2024-12-30 10:27:17
 * @LastEditTime: 2025-01-14 09:45:28
 * @LastEditors: wutiaowu5t5 1987053649@qq.com
 * @FilePath: \CompleteVueProject\.eslintrc.cjs
 */

/**
 * @type {import('eslint').Linter.Config}
 * @description ESLint 配置对象
 */
module.exports = {
  /** @property {boolean} root - 将此配置设为根配置，防止向上查找其他配置文件 */
  root: true,

  /**
   * @property {Object} env - 定义代码运行环境
   * @property {boolean} env.browser - 启用浏览器环境的全局变量
   * @property {boolean} env.es2021 - 启用 ES2021 的语法支持
   * @property {boolean} env.node - 启用 Node.js 环境的全局变量
   */
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  /** @property {string} parser - 指定用于解析 Vue 文件的解析器 */
  parser: 'vue-eslint-parser',

  /**
   * @property {string[]} extends - 继承的 ESLint 配置
   * @description 按顺序应用以下配置：
   * 1. ESLint 推荐规则集
   * 2. Vue3 推荐规则集
   * 3. Prettier 推荐规则集
   * 4. ESLint-Prettier 兼容配置
   */
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
    './.eslintrc-auto-import.json'
  ],

  /**
   * @property {Array<Object>} overrides - 特定文件的覆盖配置
   * @description 为 ESLint 配置文件指定特殊规则
   */
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['*.d.ts'], // 匹配所有 .d.ts 文件
      parser: '@typescript-eslint/parser', // 使用 TypeScript parser
      parserOptions: {
        sourceType: 'module'
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-var': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    },
    {
      files: ['vite.config.js', 'vite.config.ts'], // 匹配 vite 配置文件
      rules: {
        'no-shadow': 'off' // 在 vite 配置文件中禁用 no-shadow 规则
      }
    }
  ],

  /**
   * @property {Object} parserOptions - JavaScript 解析器选项
   * @property {string} parserOptions.ecmaVersion - ECMAScript 版本
   * @property {string} parserOptions.sourceType - 源码类型（module/script）
   */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  /**
   * @property {string[]} ignorePatterns - 需要忽略的文件和目录
   * @description 这些文件和目录将不会被 ESLint 检查
   */
  ignorePatterns: [
    'dist',
    'node_modules',
    '.eslintrc.cjs',
    '.prettierrc.cjs',
    'vite.config.js',
    'commitlint.config.cjs'
  ],

  /** @property {string[]} plugins - 启用的 ESLint 插件 */
  plugins: ['vue', 'prettier'],

  /**
   * @property {Object} rules - ESLint 规则配置
   */
  rules: {
    // #region 基础Javascript规则

    /**
     * @rule object-curly-spacing
     * @description 强制在对象的大括号前后添加空格
     * @default [2, 'always']
     * @param {number} 2 - 错误级别（0:关闭 1:警告 2:错误）
     * @param {string} 'always' - 总是需要空格
     * @example
     * // ✓ 正确
     * const obj = { foo: 'bar' }
     *
     * // ✗ 错误
     * const obj = {foo: 'bar'}
     */
    'object-curly-spacing': [2, 'always'],

    /**
     * @rule array-bracket-spacing
     * @description 强制在数组的方括号前后添加空格
     * @default [2, 'always']
     * @param {number} 2 - 错误级别
     * @param {string} 'always' - 总是需要空格
     * @example
     * // ✓ 正确
     * const arr = [ 1, 2, 3 ]
     *
     * // ✗ 错误
     * const arr = [1, 2, 3]
     */
    // 'array-bracket-spacing': [2, 'always'],

    /**
     * @rule arrow-spacing
     * @description 强制箭头函数的箭头前后添加空格
     * @default [2, { before: true, after: true }]
     * @param {number} 2 - 错误级别
     * @param {Object} options - 配置选项
     * @param {boolean} options.before - 箭头前需要空格
     * @param {boolean} options.after - 箭头后需要空格
     * @example
     * // ✓ 正确
     * const foo = () => bar
     *
     * // ✗ 错误
     * const foo = ()=>bar
     */
    'arrow-spacing': [2, { before: true, after: true }],

    /**
     * @rule semi
     * @description 强制不使用分号结尾
     * @default [2, 'never']
     * @param {number} 2 - 错误级别（0:关闭 1:警告 2:错误）
     * @param {string} 'never' - 永不使用分号
     * @example
     * // ✓ 正确
     * const name = 'John'
     *
     * // ✗ 错误
     * const name = 'John';
     */
    semi: [2, 'never'],

    /**
     * @rule no-console
     * @description 限制使用 console
     * @default ['warn', { allow: ['warn', 'error'] }]
     * @param {string} 'warn' - 警告级别
     * @param {Object} options - 配置选项
     * @param {string[]} options.allow - 允许使用的 console 方法
     * @example
     * // ✓ 允许
     * console.warn('警告信息')
     * console.error('错误信息')
     *
     * // ✗ 警告
     * console.log('日志信息')
     * console.info('信息')
     */
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],

    /**
     * @rule no-debugger
     * @description 禁止使用 debugger
     * @default 'warn'
     * @example
     * // ✗ 警告
     * debugger
     *
     * // ✓ 正确
     * // 使用 console.warn() 或其他调试方法
     */
    'no-debugger': 'warn',

    /**
     * @rule accessor-pairs
     * @description 强制 getter/setter 成对出现在对象中
     * @default 2
     * @example
     * // ✓ 正确
     * const obj = {
     *   get value() { return this._value },
     *   set value(v) { this._value = v }
     * }
     *
     * // ✗ 错误
     * const obj = {
     *   set value(v) { this._value = v }
     *   // missing getter
     * }
     */
    'accessor-pairs': 2,

    /**
     * @rule array-callback-return
     * @description 强制数组方法的回调函数中有 return 语句
     * @default 2
     * @example
     * // ✓ 正确
     * [1, 2, 3].map(x => {
     *   return x * 2
     * })
     *
     * // ✗ 错误
     * [1, 2, 3].map(x => {
     *   x * 2
     * })
     */
    'array-callback-return': 2,

    /**
     * @rule block-scoped-var
     * @description 强制把变量的使用限制在其定义的作用域范围内
     * @default 2
     * @example
     * // ✓ 正确
     * function doSomething() {
     *   var val = true
     *   if (val) { return }
     * }
     *
     * // ✗ 错误
     * function doSomething() {
     *   if (true) {
     *     var val = 1
     *   }
     *   console.log(val) // val 使用在块级作用域外
     * }
     */
    'block-scoped-var': 2,

    /**
     * @rule complexity
     * @description 限制圈复杂度，即代码的分支数量
     * @default 2
     * @example
     * // ✓ 正确 (复杂度较低)
     * function simple() {
     *   if (condition) {
     *     return 1
     *   }
     *   return 2
     * }
     *
     * // ✗ 错误 (复杂度过高)
     * function complex() {
     *   if (a) {
     *     if (b) {
     *       if (c) {
     *         if (d) {
     *           // 嵌套太深
     *         }
     *       }
     *     }
     *   }
     * }
     */
    complexity: 2,

    /**
     * @rule consistent-this
     * @description 强制 this 的别名一致性
     * @default [2, 'self', 'that']
     * @param {number} 2 - 错误级别
     * @param {string[]} aliases - 允许的 this 别名列表
     * @example
     * // ✓ 正确
     * const self = this
     * const that = this
     *
     * // ✗ 错误
     * const me = this
     * const _this = this
     */
    'consistent-this': [2, 'self', 'that'],

    /**
     * @rule curly
     * @description 强制所有控制语句使用一致的括号风格
     * @default [2, 'multi-line', 'consistent']
     * @param {number} 2 - 错误级别
     * @param {string} 'multi-line' - 多行语句必须使用大括号
     * @param {string} 'consistent' - 保持一致的大括号风格
     * @example
     * // ✓ 正确
     * if (foo) {
     *   doSomething()
     *   doSomethingElse()
     * }
     *
     * // ✗ 错误
     * if (foo)
     *   doSomething()
     *   doSomethingElse()
     */
    curly: [2, 'multi-line', 'consistent'],

    /**
     * @rule default-case
     * @description 要求 switch 语句中有 default 分支
     * @default 2
     * @example
     * // ✓ 正确
     * switch (foo) {
     *   case 1:
     *     break
     *   default:
     *     break
     * }
     *
     * // ✗ 错误
     * switch (foo) {
     *   case 1:
     *     break
     * }
     */
    'default-case': 2,

    /**
     * @rule eqeqeq
     * @description 要求使用 === 和 !== 进行比较
     * @default [2, 'always', { null: 'ignore' }]
     * @param {number} 2 - 错误级别
     * @param {string} 'always' - 总是使用严格相等
     * @param {Object} options - 配置选项
     * @param {string} options.null - 对 null 的比较可以使用 == 或 !=
     * @example
     * // ✓ 正确
     * if (x === y) {}
     * if (x == null) {} // 允许
     *
     * // ✗ 错误
     * if (x == y) {}
     */
    eqeqeq: [2, 'always', { null: 'ignore' }],

    /**
     * @rule getter-return
     * @description 强制 getter 函数中有 return 语句
     * @default [2, { allowImplicit: true }]
     * @param {Object} options - 配置选项
     * @param {boolean} options.allowImplicit - 允许隐式返回 undefined
     * @example
     * // ✓ 正确
     * get name() { return this._name }
     * get age() { if (this._age) return this._age }  // 允许隐式返回
     *
     * // ✗ 错误
     * get name() { console.log('name') }
     */
    'getter-return': [2, { allowImplicit: true }],

    /**
     * @rule guard-for-in
     * @description 要求 for-in 循环中有 if 语句来过滤原型链上的属性
     * @default 2
     * @example
     * // ✓ 正确
     * for (const key in obj) {
     *   if (Object.prototype.hasOwnProperty.call(obj, key)) {
     *     console.log(key)
     *   }
     * }
     *
     * // ✗ 错误
     * for (const key in obj) {
     *   console.log(key)
     * }
     */
    'guard-for-in': 2,

    /**
     * @rule handle-callback-err
     * @description 强制回调函数中有错误处理
     * @default 2
     * @example
     * // ✓ 正确
     * function callback(err, data) {
     *   if (err) throw err
     *   console.log(data)
     * }
     *
     * // ✗ 错误
     * function callback(err, data) {
     *   console.log(data)
     * }
     */
    'handle-callback-err': 2,

    /**
     * @rule jsx-quotes
     * @description 强制在 JSX 属性中使用双引号
     * @default [2, 'prefer-double']
     * @example
     * // ✓ 正确
     * <div className="class"></div>
     *
     * // ✗ 错误
     * <div className='class'></div>
     */
    'jsx-quotes': [2, 'prefer-double'],

    /**
     * @rule keyword-spacing
     * @description 强制关键字周围有空格
     * @default 2
     * @example
     * // ✓ 正确
     * if (condition) { }
     *
     * // ✗ 错误
     * if(condition){ }
     */
    'keyword-spacing': 2,

    /**
     * @rule max-depth
     * @description 强制代码的最大嵌套深度
     * @default [2, 5]
     * @param {number} maxDepth - 最大嵌套深度
     * @example
     * // ✓ 正确 (深度 <= 5)
     * if (a) {
     *   if (b) {
     *     if (c) {
     *       if (d) {
     *         if (e) { }
     *       }
     *     }
     *   }
     * }
     */
    'max-depth': [2, 5],

    /**
     * @rule max-nested-callbacks
     * @description 限制回调函数的最大嵌套层数
     * @default [2, 3]
     * @param {number} maxDepth - 最大嵌套层数
     * @example
     * // ✓ 正确 (最多3层嵌套)
     * async1(() => {
     *   async2(() => {
     *     async3(() => {})
     *   })
     * })
     */
    'max-nested-callbacks': [2, 3],

    /**
     * @rule max-params
     * @description 限制函数参数的最大数量
     * @default [2, 8]
     * @param {number} maxParams - 最大参数数量
     * @example
     * // ✓ 正确
     * function foo(a, b, c, d, e, f, g, h) {}
     *
     * // ✗ 错误
     * function foo(a, b, c, d, e, f, g, h, i) {}
     */
    'max-params': [2, 8],

    /**
     * @rule new-cap
     * @description 要求构造函数名首字母大写
     * @default [2, { capIsNew: false }]
     * @param {Object} options - 配置选项
     * @param {boolean} options.capIsNew - 是否要求调用大写开头的函数必须使用 new
     * @example
     * // ✓ 正确
     * const instance = new Constructor()
     *
     * // ✗ 错误
     * const instance = new constructor()
     */
    'new-cap': [2, { capIsNew: false }],

    /**
     * @rule new-parens
     * @description 要求调用无参构造函数时有圆括号
     * @default 2
     * @example
     * // ✓ 正确
     * const obj = new Object()
     *
     * // ✗ 错误
     * const obj = new Object
     */
    'new-parens': 2,

    /**
     * @rule no-alert
     * @description 禁用 alert、confirm 和 prompt
     * @default 1
     * @example
     * // ✗ 警告
     * alert('message')
     * confirm('Are you sure?')
     * prompt('Enter value:')
     */
    'no-alert': 1,

    /**
     * @rule for-direction
     * @description 强制 for 循环中的计数器变化方向与条件判断保持一致，防止死循环
     * @default 2
     * @example
     * // ✓ 正确的正序遍历
     * for (let i = 0; i < 10; i++) {}
     *
     * // ✓ 正确的倒序遍历
     * for (let i = 10; i > 0; i--) {}
     *
     * // ✗ 错误（会导致死循环）
     * for (let i = 0; i < 10; i--) {}  // 条件是 < 但计数器在减少
     * for (let i = 10; i > 0; i++) {}  // 条件是 > 但计数器在增加
     */
    'for-direction': 2,

    /**
     * @rule no-array-constructor
     * @description 禁止使用 Array 构造函数创建数组，推荐使用数组字面量
     * @default 2
     * @example
     * // ✓ 正确
     * const arr1 = [1, 2, 3]
     * const arr2 = new Array(500) // 允许指定长度
     *
     * // ✗ 错误
     * const arr = new Array(1, 2, 3)
     */
    'no-array-constructor': 2,

    /**
     * @rule no-await-in-loop
     * @description 禁止在循环中使用 await，建议使用 Promise.all()
     * @default 2
     * @example
     * // ✓ 正确
     * const promises = items.map(item => doSomethingAsync(item))
     * await Promise.all(promises)
     *
     * // ✗ 错误
     * for (const item of items) {
     *   await doSomethingAsync(item)
     * }
     */
    'no-await-in-loop': 2,

    /**
     * @rule no-catch-shadow
     * @description 禁止 catch 子句的参数与外部作用域中的变量同名
     * @default 2
     * @example
     * // ✓ 正确
     * let err = 'outer'
     * try {
     *   throw new Error()
     * } catch (e) {
     *   console.log(e)
     * }
     *
     * // ✗ 错误
     * let err = 'outer'
     * try {
     *   throw new Error()
     * } catch (err) {
     *   console.log(err)
     * }
     */
    'no-catch-shadow': 2,

    /**
     * @rule no-class-assign
     * @description 禁止修改类声明的变量
     * @default 2
     * @example
     * // ✓ 正确
     * class Dog {}
     * const dog = new Dog()
     *
     * // ✗ 错误
     * class Dog {}
     * Dog = 'hello'
     */
    'no-class-assign': 2,

    /**
     * @rule no-compare-neg-zero
     * @description 禁止与 -0 进行比较
     * @default 2
     * @example
     * // ✓ 正确
     * x === 0
     *
     * // ✗ 错误
     * x === -0
     * x == -0
     */
    'no-compare-neg-zero': 2,

    /**
     * @rule no-confusing-arrow
     * @description 禁止在可能与比较操作符混淆的地方使用箭头函数
     * @default [2, { allowParens: true }]
     * @param {Object} options - 配置选项
     * @param {boolean} options.allowParens - 允许使用括号消除歧义
     * @example
     * // ✓ 正确
     * const x = (a) => (a ? 1 : 2)
     *
     * // ✗ 错误
     * const x = a => a ? 1 : 2
     */
    'no-confusing-arrow': [2, { allowParens: true }],

    /**
     * @rule no-constant-condition
     * @description 禁止在条件语句中使用常量表达式
     * @default [2, { checkLoops: false }]
     * @param {Object} options - 配置选项
     * @param {boolean} options.checkLoops - 是否检查循环语句
     * @example
     * // ✓ 正确
     * if (x === 0) {}
     * while (true) {} // 因为 checkLoops: false，所以允许
     *
     * // ✗ 错误
     * if (true) {}
     * if (1) {}
     */
    'no-constant-condition': [2, { checkLoops: false }],

    /**
     * @rule no-const-assign
     * @description 禁止修改使用 const 声明的变量
     * @default 2
     * @example
     * // ✓ 正确
     * const a = 1
     *
     * // ✗ 错误
     * const a = 1
     * a = 2
     */
    'no-const-assign': 2,

    /**
     * @rule no-buffer-constructor
     * @description 禁止使用 Buffer() 构造函数，推荐使用 Buffer.from(), Buffer.alloc()
     * @reason
     * - Buffer() 构造函数在安全性上存在问题，可能导致内存泄露和安全漏洞
     * - Node.js 官方已经废弃了 new Buffer() 构造函数
     * @security 安全风险等级：高
     * @example
     * // ✓ 正确的用法
     * // 从字符串创建 Buffer
     * const buf1 = Buffer.from('hello')
     * // 从数组创建 Buffer
     * const buf2 = Buffer.from([1, 2, 3])
     * // 创建指定大小的安全 Buffer
     * const buf3 = Buffer.alloc(10)
     *
     * // ✗ 错误的用法
     * const buf = new Buffer(10)         // 已废弃
     * const buf = Buffer(10)             // 已废弃
     *
     * @reference
     * - Node.js 官方文档：https://nodejs.org/api/buffer.html
     */
    'no-buffer-constructor': 2,

    /**
     * @rule no-caller
     * @description 禁止使用 arguments.caller 和 arguments.callee
     * @reason
     * - arguments.caller 和 arguments.callee 在严格模式下已被禁用
     * - 这些属性会阻止 V8 引擎的优化
     * - 使用这些属性会使代码难以理解和维护
     * @compatibility 在严格模式('use strict')下会报错
     * @example
     * // ✗ 错误的用法
     * function foo() {
     *   const caller = arguments.caller  // 访问调用者
     *   const callee = arguments.callee  // 访问函数自身
     * }
     *
     * // ✓ 正确的替代方案
     * // 1. 使用具名函数替代 arguments.callee
     * function factorial(n) {
     *   return n <= 1 ? 1 : n * factorial(n - 1)
     * }
     *
     * // 2. 使用箭头函数和变量声明
     * const factorial = n => n <= 1 ? 1 : n * factorial(n - 1)
     */
    'no-caller': 2,

    /**
     * @rule no-case-declarations
     * @description 禁止在 case/default 子句中使用词法声明（let, const, function, class）
     * @reason
     * - case 语句共享同一个词法作用域，可能导致变量提升和意外的行为
     * - 不使用块级作用域可能导致变量泄露
     * @bestPractice 始终使用块级作用域 {} 包裹 case 语句内的声明
     * @example
     * // ✓ 正确的用法
     * switch (foo) {
     *   // 使用块级作用域
     *   case 1: {
     *     let x = 1
     *     console.log(x)
     *     break
     *   }
     *   case 2: {
     *     const y = 2
     *     console.log(y)
     *     break
     *   }
     *   default: {
     *     class MyClass {}
     *     const instance = new MyClass()
     *     break
     *   }
     * }
     *
     * // ✗ 错误的用法
     * switch (foo) {
     *   case 1:
     *     let x = 1    // 没有块级作用域
     *     break
     *   case 2:
     *     const y = 2  // 可能导致变量泄露
     *     break
     *   default:
     *     function f() {} // 函数声明也应该在块级作用域内
     *     break
     * }
     *
     * @pitfall
     * // 以下代码可能导致问题：
     * switch (foo) {
     *   case 1:
     *     let x = 1
     *   case 2:
     *     console.log(x) // 如果 foo === 2，x 未定义但可访问
     * }
     */
    'no-case-declarations': 2,

    /**
     * @rule no-debugger
     * @description 禁止使用 debugger 语句
     * @default 1
     * @reason 生产环境中不应该保留 debugger 语句
     * @example
     * // ✗ 警告
     * function foo() {
     *   debugger
     *   return true
     * }
     *
     * // ✓ 推荐使用
     * console.log('调试信息')
     * // 或使用断点工具
     */
    'no-debugger': 1,

    /**
     * @rule no-delete-var
     * @description 禁止使用 delete 操作符删除变量
     * @default 2
     * @reason delete 只应用于对象的属性，而不是变量
     * @example
     * // ✓ 正确
     * const obj = { foo: 1 }
     * delete obj.foo
     *
     * // ✗ 错误
     * let foo = 1
     * delete foo
     */
    'no-delete-var': 2,

    /**
     * @rule no-dupe-args
     * @description 禁止在函数参数中出现重复的参数名
     * @default 2
     * @example
     * // ✓ 正确
     * function foo(a, b, c) {}
     *
     * // ✗ 错误
     * function foo(a, b, a) {}
     */
    'no-dupe-args': 2,

    /**
     * @rule no-dupe-keys
     * @description 禁止在对象字面量中出现重复的键名
     * @default 2
     * @example
     * // ✓ 正确
     * const obj = {
     *   foo: 1,
     *   bar: 2
     * }
     *
     * // ✗ 错误
     * const obj = {
     *   foo: 1,
     *   foo: 2
     * }
     */
    'no-dupe-keys': 2,

    /**
     * @rule no-dupe-class-members
     * @description 禁止在类成员中出现重复的名称
     * @default 2
     * @example
     * // ✓ 正确
     * class Foo {
     *   bar() {}
     *   baz() {}
     * }
     *
     * // ✗ 错误
     * class Foo {
     *   bar() {}
     *   bar() {}
     * }
     */
    'no-dupe-class-members': 2,

    /**
     * @rule no-duplicate-case
     * @description 禁止在 switch 语句中出现重复的 case 标签
     * @default 2
     * @example
     * // ✓ 正确
     * switch (foo) {
     *   case 1:
     *     break
     *   case 2:
     *     break
     * }
     *
     * // ✗ 错误
     * switch (foo) {
     *   case 1:
     *     break
     *   case 1:
     *     break
     * }
     */
    'no-duplicate-case': 2,

    /**
     * @rule no-duplicate-imports
     * @description 禁止重复导入同一模块
     * @default 2
     * @example
     * // ✓ 正确
     * import { foo, bar } from 'module'
     *
     * // ✗ 错误
     * import { foo } from 'module'
     * import { bar } from 'module'
     */
    'no-duplicate-imports': 2,

    /**
     * @rule no-empty-character-class
     * @description 禁止在正则表达式中使用空字符类 []
     * @default 2
     * @example
     * // ✓ 正确
     * const pattern = /[a-z]/
     *
     * // ✗ 错误
     * const pattern = /[]/
     */
    'no-empty-character-class': 2,

    /**
     * @rule no-empty-function
     * @description 允许空函数，但不推荐使用
     * @default 0
     * @reason 有时空函数用作默认值或占位符是有意义的
     * @example
     * // ✓ 允许但不推荐
     * function noop() {}
     * const noop = () => {}
     *
     * // ✓ 推荐
     * function noop() {
     *   // TODO: 待实现
     * }
     */
    'no-empty-function': 0,

    /**
     * @rule no-empty-pattern
     * @description 禁止使用空的解构模式
     * @default 2
     * @example
     * // ✓ 正确
     * const { a, b } = obj
     * const [x, y] = arr
     *
     * // ✗ 错误
     * const {} = obj
     * const [] = arr
     */
    'no-empty-pattern': 2,

    /**
     * @rule no-empty
     * @description 禁止空块语句，但允许空的 catch 块
     * @default [2, { allowEmptyCatch: true }]
     * @param {Object} options - 配置选项
     * @param {boolean} options.allowEmptyCatch - 允许空的 catch 块
     * @example
     * // ✓ 正确
     * try {
     *   doSomething()
     * } catch (e) {} // 允许空的 catch
     *
     * if (condition) {
     *   doSomething()
     * }
     *
     * // ✗ 错误
     * if (condition) {}
     * while (condition) {}
     */
    'no-empty': [2, { allowEmptyCatch: true }],

    /**
     * @rule no-eval
     * @description 禁止使用 eval() 函数
     * @default 2
     * @reason eval() 可能导致安全风险，且难以调试和维护
     * @security 安全风险等级：高
     * @example
     * // ✗ 错误
     * eval('var x = 10')
     * setTimeout('alert("Hi!")', 100)
     *
     * // ✓ 正确的替代方案
     * const x = 10
     * setTimeout(() => alert("Hi!"), 100)
     */
    'no-eval': 2,

    /**
     * @rule no-ex-assign
     * @description 禁止对 catch 子句中的异常参数赋值
     * @default 2
     * @example
     * // ✓ 正确
     * try {
     *   // ...
     * } catch (error) {
     *   console.error(error)
     * }
     *
     * // ✗ 错误
     * try {
     *   // ...
     * } catch (error) {
     *   error = 'new error' // 不允许修改异常参数
     * }
     */
    'no-ex-assign': 2,

    /**
     * @rule no-extend-native
     * @description 禁止扩展原生对象，除了 Array 和 Object
     * @default [2, { exceptions: ['Array', 'Object'] }]
     * @param {Object} options - 配置选项
     * @param {string[]} options.exceptions - 允许扩展的原生对象列表
     * @example
     * // ✓ 正确
     * Array.prototype.customMethod = function() {}
     * Object.prototype.customMethod = function() {}
     *
     * // ✗ 错误
     * String.prototype.customMethod = function() {}
     * Number.prototype.customMethod = function() {}
     */
    'no-extend-native': [2, { exceptions: ['Array', 'Object'] }],

    /**
     * @rule no-extra-bind
     * @description 禁止不必要的 .bind() 调用
     * @default 2
     * @example
     * // ✗ 错误（不必要的 bind）
     * const foo = function() {
     *   console.log(this)
     * }.bind(this) // 函数没有使用 this，不需要 bind
     *
     * // ✓ 正确
     * const foo = function() {
     *   console.log(this.name)
     * }.bind(this) // 函数使用了 this，bind 是必要的
     */
    'no-extra-bind': 2,

    /**
     * @rule no-extra-boolean-cast
     * @description 禁止不必要的布尔类型转换
     * @default 2
     * @example
     * // ✗ 错误
     * if (!!foo) {}
     * const bar = !!!foo
     *
     * // ✓ 正确
     * if (foo) {}
     * const bar = !foo
     */
    'no-extra-boolean-cast': 2,

    /**
     * @rule no-extra-label
     * @description 禁止不必要的标签
     * @default 2
     * @example
     * // ✗ 错误
     * loop: while(true) {
     *   break loop // 不必要的标签
     * }
     *
     * // ✓ 正确
     * while(true) {
     *   break
     * }
     */
    'no-extra-label': 2,

    /**
     * @rule no-extra-parens
     * @description 禁止不必要的括号，但允许在函数声明中使用
     * @default [2, 'functions']
     * @param {string} 'functions' - 仅检查函数声明和函数表达式
     * @example
     * // ✓ 正确
     * const foo = function() {}
     * const bar = (function() {})
     *
     * // ✗ 错误
     * const a = ((1 + 2))
     */
    'no-extra-parens': [2, 'functions'],

    /**
     * @rule no-extra-semi
     * @description 禁止不必要的分号
     * @default 2
     * @example
     * // ✗ 错误
     * const x = 5;;
     * function foo() {};
     *
     * // ✓ 正确
     * const x = 5;
     * function foo() {}
     */
    'no-extra-semi': 2,

    /**
     * @rule no-fallthrough
     * @description 禁止 case 语句落空（穿透到下一个 case）
     * @default [2, { commentPattern: '.' }]
     * @param {Object} options - 配置选项
     * @param {string} options.commentPattern - 允许的注释模式
     * @example
     * // ✗ 错误
     * switch(foo) {
     *   case 1:
     *     doSomething();
     *   case 2:
     *     doSomethingElse();
     * }
     *
     * // ✓ 正确
     * switch(foo) {
     *   case 1:
     *     doSomething();
     *     break;
     *   case 2: // falls through
     *     doSomethingElse();
     *     break;
     * }
     */
    'no-fallthrough': [2, { commentPattern: '.' }],

    /**
     * @rule no-floating-decimal
     * @description 禁止省略浮点数中的 0
     * @default 2
     * @example
     * // ✗ 错误
     * const num = .5
     * const num = 2.
     *
     * // ✓ 正确
     * const num = 0.5
     * const num = 2.0
     */
    'no-floating-decimal': 2,

    /**
     * @rule no-func-assign
     * @description 禁止对函数声明重新赋值
     * @default 2
     * @example
     * // ✗ 错误
     * function foo() {}
     * foo = bar
     *
     * // ✓ 正确
     * let foo = function() {}
     * foo = bar
     */
    'no-func-assign': 2,

    /**
     * @rule no-implicit-coercion
     * @description 禁止使用隐式类型转换
     * @default [2, { allow: ['+', '!!'] }]
     * @param {Object} options - 配置选项
     * @param {string[]} options.allow - 允许的操作符列表
     * @example
     * // ✓ 正确（允许的操作符）
     * const str = +num      // 允许 + 转换
     * const bool = !!foo    // 允许 !! 转换
     *
     * // ✗ 错误
     * const str = '' + foo  // 应使用 String(foo)
     * const num = ~~ '123'  // 应使用 Number('123')
     */
    'no-implicit-coercion': [2, { allow: ['+', '!!'] }],

    /**
     * @rule no-implied-eval
     * @description 禁止使用隐式的 eval()
     * @default 2
     * @security 安全风险等级：高
     * @example
     * // ✗ 错误
     * setTimeout("alert('Hi!')", 100)
     * setInterval("alert('Hi!')", 100)
     *
     * // ✓ 正确
     * setTimeout(() => alert('Hi!'), 100)
     * setInterval(() => alert('Hi!'), 100)
     */
    'no-implied-eval': 2,

    /**
     * @rule no-implicit-globals
     * @description 禁止在全局作用域中声明变量和函数
     * @default 2
     * @example
     * // ✗ 错误（全局作用域）
     * var foo = 'bar'
     * function baz() {}
     *
     * // ✓ 正确
     * window.foo = 'bar'
     * // 或使用模块系统
     * export const foo = 'bar'
     */
    'no-implicit-globals': 2,

    /**
     * @rule no-inner-declarations
     * @description 禁止在嵌套的语句块中声明函数和变量
     * @default [2, 'both']
     * @param {string} 'both' - 同时检查函数和变量声明
     * @example
     * // ✗ 错误
     * if (test) {
     *   function foo() {}
     *   var bar = 1
     * }
     *
     * // ✓ 正确
     * const foo = function() {}
     * const bar = 1
     * if (test) {
     *   foo()
     *   console.log(bar)
     * }
     */
    'no-inner-declarations': [2, 'both'],

    /**
     * @rule no-invalid-regexp
     * @description 禁止在 RegExp 构造函数中使用无效的正则表达式字符串
     * @default 2
     * @example
     * // ✗ 错误
     * new RegExp('[')
     * new RegExp('\\')
     *
     * // ✓ 正确
     * new RegExp('\\d+')
     * new RegExp('[a-z]')
     */
    'no-invalid-regexp': 2,

    /**
     * @rule no-irregular-whitespace
     * @description 禁止使用不规则的空白字符
     * @default [2, { skipStrings: true, skipComments: true, skipRegExps: true, skipTemplates: true }]
     * @param {Object} options - 配置选项
     * @param {boolean} options.skipStrings - 在字符串中允许
     * @param {boolean} options.skipComments - 在注释中允许
     * @param {boolean} options.skipRegExps - 在正则表达式中允许
     * @param {boolean} options.skipTemplates - 在模板字符串中允许
     * @example
     * // ✓ 正确
     * const str = "正常的空格"
     * // 注释中的空格
     *
     * // ✗ 错误
     * const str = "不规则的空格　" // 包含全角空格
     */
    'no-irregular-whitespace': [
      2,
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true
      }
    ],

    /**
     * @rule comma-spacing
     * @description 强制逗号的前后空格规则
     * @default [2, { before: false, after: true }]
     * @param {Object} options - 配置选项
     * @param {boolean} options.before - 逗号前禁止空格
     * @param {boolean} options.after - 逗号后必须有空格
     * @example
     * // ✓ 正确
     * const arr = [1, 2, 3]
     * const obj = { foo: 1, bar: 2 }
     *
     * // ✗ 错误
     * const arr = [1 ,2 ,3]
     * const obj = { foo: 1 ,bar: 2 }
     */
    'comma-spacing': [2, { before: false, after: true }],

    /**
     * @rule no-iterator
     * @description 禁止使用 __iterator__ 属性
     * @default 2
     * @reason __iterator__ 属性已废弃
     * @example
     * // ✗ 错误
     * foo.__iterator__ = function() {}
     *
     * // ✓ 正确
     * const iterator = foo[Symbol.iterator]()
     */
    'no-iterator': 2,

    /**
     * @rule no-label-var
     * @description 禁止标签名与变量名相同
     * @default 2
     * @example
     * // ✗ 错误
     * const loop = 1
     * loop: while(true) {
     *   break loop
     * }
     *
     * // ✓ 正确
     * const x = 1
     * loop: while(true) {
     *   break loop
     * }
     */
    'no-label-var': 2,

    /**
     * @rule no-lone-blocks
     * @description 禁止不必要的嵌套块
     * @default 2
     * @example
     * // ✗ 错误
     * {
     *   const foo = bar
     * }
     *
     * // ✓ 正确
     * if (condition) {
     *   const foo = bar
     * }
     */
    'no-lone-blocks': 2,

    /**
     * @rule no-loop-func
     * @description 禁止在循环中创建函数
     * @default 2
     * @reason 避免引用错误和内存泄漏
     * @example
     * // ✗ 错误
     * for (let i = 0; i < 10; i++) {
     *   function foo() { console.log(i) }
     * }
     *
     * // ✓ 正确
     * const foo = (i) => { console.log(i) }
     * for (let i = 0; i < 10; i++) {
     *   foo(i)
     * }
     */
    'no-loop-func': 2,

    /**
     * @rule no-mixed-operators
     * @description 禁止混合使用不同的操作符
     * @default [2, { groups: [['&&', '||']] }]
     * @param {Object} options - 配置选项
     * @param {Array} options.groups - 不允许混用的操作符组
     * @example
     * // ✗ 错误
     * const foo = a && b || c
     *
     * // ✓ 正确
     * const foo = (a && b) || c
     */
    'no-mixed-operators': [2, { groups: [['&&', '||']] }],

    /**
     * @rule no-mixed-spaces-and-tabs
     * @description 禁止空格和制表符混合缩进
     * @default 2
     * @example
     * // ✗ 错误
     * function foo() {
     * ∙∙  let x = 1  // 混合了空格和制表符
     * }
     *
     * // ✓ 正确
     * function foo() {
     *   let x = 1    // 统一使用空格
     * }
     */
    'no-mixed-spaces-and-tabs': 2,

    /**
     * @rule no-multi-assign
     * @description 禁止连续赋值
     * @default 2
     * @example
     * // ✗ 错误
     * const a = b = c = 5
     *
     * // ✓ 正确
     * const c = 5
     * const b = c
     * const a = b
     */
    'no-multi-assign': 2,

    /**
     * @rule no-multi-spaces
     * @description 禁止使用多个连续空格
     * @default 2
     * @example
     * // ✗ 错误
     * const foo   =  'bar'
     *
     * // ✓ 正确
     * const foo = 'bar'
     */
    'no-multi-spaces': 2,

    /**
     * @rule no-multi-str
     * @description 禁止使用多行字符串
     * @default 2
     * @example
     * // ✗ 错误
     * const str = 'Line 1 \
     *             Line 2'
     *
     * // ✓ 正确
     * const str = `Line 1
     *             Line 2`
     */
    'no-multi-str': 2,

    /**
     * @rule no-multiple-empty-lines
     * @description 限制连续空行的数量
     * @default [2, { max: 3, maxEOF: 1, maxBOF: 1 }]
     * @param {Object} options - 配置选项
     * @param {number} options.max - 文件内最大连续空行数
     * @param {number} options.maxEOF - 文件末尾最大空行数
     * @param {number} options.maxBOF - 文件开头最大空行数
     */
    'no-multiple-empty-lines': [2, { max: 3, maxEOF: 1, maxBOF: 1 }],

    /**
     * @rule no-new-object
     * @description 禁止使用 new Object()
     * @default 2
     * @example
     * // ✗ 错误
     * const obj = new Object()
     *
     * // ✓ 正确
     * const obj = {}
     */
    'no-new-object': 2,

    /**
     * @rule no-new-require
     * @description 禁止对 require 使用 new 操作符
     * @default 2
     * @example
     * // ✗ 错误
     * const app = new require('express')
     *
     * // ✓ 正确
     * const app = require('express')
     */
    'no-new-require': 2,

    /**
     * @rule no-new-symbol
     * @description 禁止使用 new 操作符创建 Symbol
     * @default 2
     * @example
     * // ✗ 错误
     * const sym = new Symbol('foo')
     *
     * // ✓ 正确
     * const sym = Symbol('foo')
     */
    'no-new-symbol': 2,

    /**
     * @rule no-new-wrappers
     * @description 禁止对基本类型使用 new 操作符
     * @default 2
     * @example
     * // ✗ 错误
     * const str = new String('foo')
     * const num = new Number(123)
     * const bool = new Boolean(true)
     *
     * // ✓ 正确
     * const str = String('foo')
     * const num = Number(123)
     * const bool = Boolean(true)
     */
    'no-new-wrappers': 2,

    /**
     * @rule no-new
     * @description 禁止单独使用 new 操作符
     * @default 2
     * @example
     * // ✗ 错误
     * new Person()
     *
     * // ✓ 正确
     * const person = new Person()
     * const list = new Array()
     */
    'no-new': 2,

    /**
     * @rule no-obj-calls
     * @description 禁止将全局对象当作函数调用
     * @default 2
     * @example
     * // ✗ 错误
     * const math = Math()
     * const json = JSON()
     *
     * // ✓ 正确
     * const max = Math.max(1, 2)
     * const data = JSON.parse('{}')
     */
    'no-obj-calls': 2,

    /**
     * @rule no-octal-escape
     * @description 禁止使用八进制转义序列
     * @default 2
     * @example
     * // ✗ 错误
     * const str = 'Copyright \251'
     *
     * // ✓ 正确
     * const str = 'Copyright \u00A9'
     */
    'no-octal-escape': 2,

    /**
     * @rule no-octal
     * @description 禁止使用八进制字面量
     * @default 2
     * @example
     * // ✗ 错误
     * const num = 071
     *
     * // ✓ 正确
     * const num = 57
     */
    'no-octal': 2,

    /**
     * @rule no-path-concat
     * @description 禁止使用字符串拼接路径
     * @default 2
     * @example
     * // ✗ 错误
     * const path = __dirname + '/file.js'
     *
     * // ✓ 正确
     * const path = require('path')
     * const filePath = path.join(__dirname, 'file.js')
     */
    'no-path-concat': 2,

    /**
     * @rule no-param-reassign
     * @description 禁止对函数参数再赋值
     * @default 2
     * @example
     * // ✗ 错误
     * function foo(bar) {
     *   bar = 'baz'
     * }
     *
     * // ✓ 正确
     * function foo(bar) {
     *   const baz = bar
     * }
     */
    'no-param-reassign': 2,

    /**
     * @rule no-proto
     * @description 禁止使用 __proto__ 属性
     * @default 2
     * @reason __proto__ 属性已废弃，应使用 Object.getPrototypeOf/setPrototypeOf
     * @example
     * // ✗ 错误
     * const proto = obj.__proto__
     *
     * // ✓ 正确
     * const proto = Object.getPrototypeOf(obj)
     */
    'no-proto': 2,

    /**
     * @rule no-redeclare
     * @description 禁止重复声明变量
     * @default 2
     * @example
     * // ✗ 错误
     * var a = 1
     * var a = 2
     *
     * // ✓ 正确
     * let a = 1
     * a = 2
     */
    'no-redeclare': 2,

    /**
     * @rule no-regex-spaces
     * @description 禁止正则表达式中出现多个连续空格
     * @default 2
     * @example
     * // ✗ 错误
     * const re = /foo   bar/
     *
     * // ✓ 正确
     * const re = /foo {3}bar/
     */
    'no-regex-spaces': 2,

    /**
     * @rule no-restricted-modules
     * @description 禁止使用特定的模块
     * @default 'off'
     */
    'no-restricted-modules': 'off',

    /**
     * @rule no-return-assign
     * @description 禁止在 return 语句中使用赋值语句
     * @default 2
     * @example
     * // ✗ 错误
     * function foo() {
     *   return a = 1
     * }
     *
     * // ✓ 正确
     * function foo() {
     *   a = 1
     *   return a
     * }
     */
    'no-return-assign': 2,

    /**
     * @rule no-script-url
     * @description 禁止使用 javascript: URL
     * @default 2
     * @security 安全风险等级：高
     * @example
     * // ✗ 错误
     * location.href = 'javascript:void(0)'
     *
     * // ✓ 正确
     * location.href = '#'
     */
    'no-script-url': 2,

    /**
     * @rule no-self-assign
     * @description 禁止自我赋值
     * @default 2
     * @example
     * // ✗ 错误
     * foo = foo
     * [a, b] = [a, b]
     *
     * // ✓ 正确
     * foo = bar
     * [a, b] = [b, a]
     */
    'no-self-assign': 2,

    /**
     * @rule no-self-compare
     * @description 禁止自身比较
     * @default 2
     * @example
     * // ✗ 错误
     * if (x === x) {}
     *
     * // ✓ 正确
     * if (x === y) {}
     */
    'no-self-compare': 2,

    /**
     * @rule no-sequences
     * @description 禁止使用逗号操作符
     * @default 2
     * @example
     * // ✗ 错误
     * let a = (3, 5)
     *
     * // ✓ 正确
     * let a = 3
     * let b = 5
     */
    'no-sequences': 2,

    /**
     * @rule no-shadow-restricted-names
     * @description 禁止遮蔽关键字和全局对象
     * @default 2
     * @example
     * // ✗ 错误
     * function undefined() {}
     * let NaN = 1
     *
     * // ✓ 正确
     * function foo() {}
     * let myVar = 1
     */
    'no-shadow-restricted-names': 2,

    /**
     * @rule no-shadow
     * @description 禁止变量声明覆盖外层作用域的变量
     * @default 2
     * @example
     * // ✗ 错误
     * let a = 1
     * function foo() {
     *   let a = 2
     * }
     *
     * // ✓ 正确
     * let a = 1
     * function foo() {
     *   let b = 2
     * }
     */
    'no-shadow': 2,

    /**
     * @rule no-sparse-arrays
     * @description 禁止使用稀疏数组
     * @default 2
     * @example
     * // ✗ 错误
     * const arr = [1,, 2]
     *
     * // ✓ 正确
     * const arr = [1, null, 2]
     */
    'no-sparse-arrays': 2,

    /**
     * @rule no-template-curly-in-string
     * @description 禁止在普通字符串中使用模板字符串的变量语法
     * @default 2
     * @example
     * // ✗ 错误
     * const str = "Hello ${name}"
     *
     * // ✓ 正确
     * const str = `Hello ${name}`
     */
    'no-template-curly-in-string': 2,

    /**
     * @rule no-this-before-super
     * @description 禁止在调用 super() 之前使用 this 或 super
     * @default 2
     * @example
     * // ✗ 错误
     * class A extends B {
     *   constructor() {
     *     this.foo()
     *     super()
     *   }
     * }
     *
     * // ✓ 正确
     * class A extends B {
     *   constructor() {
     *     super()
     *     this.foo()
     *   }
     * }
     */
    'no-this-before-super': 2,

    /**
     * @rule no-throw-literal
     * @description 禁止抛出字面量作为异常
     * @default 2
     * @example
     * // ✗ 错误
     * throw 'error'
     * throw 0
     *
     * // ✓ 正确
     * throw new Error('error')
     * throw new TypeError('type error')
     */
    'no-throw-literal': 2,

    /**
     * @rule no-trailing-spaces
     * @description 禁止行尾有空格
     * @default [2, { skipBlankLines: true, ignoreComments: true }]
     * @param {Object} options - 配置选项
     * @param {boolean} options.skipBlankLines - 允许空行有空格
     * @param {boolean} options.ignoreComments - 允许注释行有空格
     */
    'no-trailing-spaces': [
      2,
      {
        skipBlankLines: true,
        ignoreComments: true
      }
    ],

    /**
     * @rule no-undef-init
     * @description 禁止将变量初始化为 undefined
     * @default 2
     * @example
     * // ✗ 错误
     * let foo = undefined
     *
     * // ✓ 正确
     * let foo
     */
    'no-undef-init': 2,

    /**
     * @rule no-undef
     * @description 禁止使用未声明的变量
     * @default 2
     * @example
     * // ✗ 错误
     * console.log(undefinedVar)
     *
     * // ✓ 正确
     * const definedVar = 'foo'
     * console.log(definedVar)
     */
    'no-undef': 2,

    /**
     * @rule no-undefined
     * @description 禁止使用 undefined 变量
     * @default 2
     * @example
     * // ✗ 错误
     * let foo = undefined
     *
     * // ✓ 正确
     * let foo = null
     * let bar = void 0
     */
    'no-undefined': 2,

    /**
     * @rule no-unexpected-multiline
     * @description 禁止出现意外的多行表达式
     * @default 2
     * @example
     * // ✗ 错误
     * const foo = bar
     * (1 || 2).baz()
     *
     * // ✓ 正确
     * const foo = bar;
     * (1 || 2).baz()
     */
    'no-unexpected-multiline': 2,

    /**
     * @rule no-unmodified-loop-condition
     * @description 禁止循环中的条件表达式中的变量在循环体中没有被修改
     * @default 2
     * @example
     * // ✗ 错误
     * while (node) {
     *   doSomething(node)
     * }
     *
     * // ✓ 正确
     * while (node) {
     *   doSomething(node)
     *   node = node.next
     * }
     */
    'no-unmodified-loop-condition': 2,

    /**
     * @rule no-unneeded-ternary
     * @description 禁止不必要的三元表达式
     * @default [2, { defaultAssignment: false }]
     * @param {Object} options - 配置选项
     * @param {boolean} options.defaultAssignment - 禁止条件表达式作为默认的赋值模式
     * @example
     * // ✗ 错误
     * const foo = a ? a : b
     * const bar = a ? true : false
     *
     * // ✓ 正确
     * const foo = a || b
     * const bar = !!a
     */
    'no-unneeded-ternary': [2, { defaultAssignment: false }],

    /**
     * @rule no-unreachable
     * @description 禁止在 return、throw、continue 和 break 语句后出现不可达代码
     * @default 2
     * @example
     * // ✗ 错误
     * function foo() {
     *   return true
     *   console.log('never executed')
     * }
     *
     * // ✓ 正确
     * function foo() {
     *   console.log('executed')
     *   return true
     * }
     */
    'no-unreachable': 2,

    /**
     * @rule no-unsafe-finally
     * @description 禁止在 finally 语句块中出现控制流语句
     * @default 2
     * @example
     * // ✗ 错误
     * try {
     *   return 1
     * } finally {
     *   return 2
     * }
     *
     * // ✓ 正确
     * try {
     *   return 1
     * } finally {
     *   console.log('cleanup')
     * }
     */
    'no-unsafe-finally': 2,

    /**
     * @rule no-unsafe-negation
     * @description 禁止对关系运算符的左操作数使用否定操作符
     * @default 2
     * @example
     * // ✗ 错误
     * if (!key in object) {}
     *
     * // ✓ 正确
     * if (!(key in object)) {}
     */
    'no-unsafe-negation': 2,

    /**
     * @rule no-unused-expressions
     * @description 禁止出现未使用的表达式
     * @default [2, { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }]
     * @param {Object} options - 配置选项
     * @param {boolean} options.allowShortCircuit - 允许短路求值
     * @param {boolean} options.allowTernary - 允许三元表达式
     * @param {boolean} options.allowTaggedTemplates - 允许标签模板字符串
     */
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],

    /**
     * @rule no-unused-labels
     * @description 禁止出现未使用的标签
     * @default 2
     * @example
     * // ✗ 错误
     * A: {
     *   console.log('foo')
     * }
     *
     * // ✓ 正确
     * A: {
     *   console.log('foo')
     *   break A
     * }
     */
    'no-unused-labels': 2,

    /**
     * @rule no-unused-vars
     * @description 禁止出现未使用的变量
     * @default [2, { vars: 'all', args: 'none', ignoreRestSiblings: true, caughtErrors: 'none' }]
     * @param {Object} options - 配置选项
     * @param {string} options.vars - 检查所有变量
     * @param {string} options.args - 不检查参数
     * @param {boolean} options.ignoreRestSiblings - 忽略剩余参数的兄弟变量
     * @param {string} options.caughtErrors - 不检查 catch 语句的参数
     */
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
        caughtErrors: 'none'
      }
    ],

    /**
     * @rule no-use-before-define
     * @description 禁止在变量定义之前使用它们
     * @default [1, { functions: false, classes: false }]
     * @param {Object} options - 配置选项
     * @param {boolean} options.functions - 不检查函数声明
     * @param {boolean} options.classes - 不检查类声明
     * @example
     * // ✗ 错误
     * console.log(foo)
     * const foo = 1
     *
     * // ✓ 正确
     * const foo = 1
     * console.log(foo)
     *
     * // 允许的函数提升
     * foo()
     * function foo() {}
     */
    'no-use-before-define': [
      1,
      {
        functions: false,
        classes: false
      }
    ],

    /**
     * @rule no-useless-call
     * @description 禁止不必要的 .call() 和 .apply() 调用
     * @default 2
     * @example
     * // ✗ 错误
     * foo.call(undefined, 1, 2)
     * foo.apply(null, [1, 2])
     *
     * // ✓ 正确
     * foo(1, 2)
     */
    'no-useless-call': 2,

    /**
     * @rule no-useless-computed-key
     * @description 禁止在对象中使用不必要的计算属性
     * @default 2
     * @example
     * // ✗ 错误
     * const obj = { ['a']: 1 }
     *
     * // ✓ 正确
     * const obj = { a: 1 }
     */
    'no-useless-computed-key': 2,

    /**
     * @rule no-useless-concat
     * @description 禁止不必要的字符串字面量连接
     * @default 2
     * @example
     * // ✗ 错误
     * const str = 'Hello' + ' World'
     *
     * // ✓ 正确
     * const str = 'Hello World'
     */
    'no-useless-concat': 2,

    /**
     * @rule no-useless-constructor
     * @description 禁止不必要的构造函数
     * @default 2
     * @example
     * // ✗ 错误
     * class A {
     *   constructor() {}
     * }
     *
     * // ✓ 正确
     * class A {
     *   constructor(name) {
     *     this.name = name
     *   }
     * }
     */
    'no-useless-constructor': 2,

    /**
     * @rule no-useless-escape
     * @description 禁止不必要的转义字符
     * @default 2
     * @example
     * // ✗ 错误
     * const str = "\"Hello\""
     *
     * // ✓ 正确
     * const str = '"Hello"'
     */
    'no-useless-escape': 2,

    /**
     * @rule no-useless-rename
     * @description 禁止在 import、export 和解构赋值时将引用重命名为相同的名字
     * @default 2
     * @example
     * // ✗ 错误
     * import { foo as foo } from 'bar'
     * export { foo as foo }
     * const { foo: foo } = bar
     *
     * // ✓ 正确
     * import { foo } from 'bar'
     * export { foo }
     * const { foo } = bar
     */
    'no-useless-rename': 2,

    /**
     * @rule no-var
     * @description 要求使用 let 或 const 而不是 var
     * @default 2
     * @example
     * // ✗ 错误
     * var x = 1
     *
     * // ✓ 正确
     * let x = 1
     * const y = 2
     */
    'no-var': 2,

    /**
     * @rule no-warning-comments
     * @description 禁止使用特定的警告性注释（TODO, FIXME, XXX 等）
     * @default 0
     * @example
     * // 允许
     * // TODO: 实现这个功能
     * // FIXME: 这里需要修复
     */
    'no-warning-comments': 0,

    /**
     * @rule quotes
     * @description 强制使用一致的引号风格
     * @default [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }]
     * @param {string} 'single' - 使用单引号
     * @param {Object} options - 配置选项
     * @param {boolean} options.avoidEscape - 允许字符串包含另一种引号时使用不同的引号
     * @param {boolean} options.allowTemplateLiterals - 允许使用模板字符串
     * @example
     * // ✓ 正确
     * const str = 'hello'
     * const str2 = `hello ${name}`
     * const str3 = "I'm here" // 包含单引号时可以使用双引号
     *
     * // ✗ 错误
     * const str = "hello"
     */
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],

    /**
     * @rule radix
     * @description parseInt 必须指定基数
     * @default 2
     * @example
     * // ✗ 错误
     * parseInt("071")
     *
     * // ✓ 正确
     * parseInt("071", 10)
     */
    radix: 2,

    /**
     * @rule require-yield
     * @description 要求 generator 函数内有 yield 关键字
     * @default 2
     * @example
     * // ✗ 错误
     * function* foo() {
     *   return 10
     * }
     *
     * // ✓ 正确
     * function* foo() {
     *   yield 5
     *   return 10
     * }
     */
    'require-yield': 2,

    /**
     * @rule spaced-comment
     * @description 强制注释中 // 或 块注释 后面的空格
     * @default [2, 'always', { block: { exceptions: ['*'], balanced: true } }]
     * @param {string} 'always' - 总是需要空格
     * @param {Object} options.block - 块注释的特殊配置
     */
    'spaced-comment': [
      2,
      'always',
      {
        block: {
          exceptions: ['*'],
          balanced: true
        }
      }
    ],

    /**
     * @rule strict
     * @description 要求或禁止使用严格模式指令
     * @default [2, 'never']
     * @example
     * // ✗ 错误
     * 'use strict'
     *
     * // ✓ 正确
     * // 不使用 'use strict'
     */
    strict: [2, 'never'],

    /**
     * @rule use-isnan
     * @description 要求使用 isNaN() 检查 NaN
     * @default 2
     * @example
     * // ✗ 错误
     * if (foo == NaN) {}
     *
     * // ✓ 正确
     * if (isNaN(foo)) {}
     */
    'use-isnan': 2,

    /**
     * @rule valid-typeof
     * @description 强制 typeof 表达式与有效的字符串进行比较
     * @default 2
     * @example
     * // ✗ 错误
     * typeof foo === 'strnig'
     * typeof foo == 'undefimed'
     *
     * // ✓ 正确
     * typeof foo === 'string'
     * typeof foo === 'undefined'
     */
    'valid-typeof': 2,

    /**
     * @rule wrap-iife
     * @description 要求 IIFE 使用括号括起来
     * @default [2, 'inside']
     * @param {string} 'inside' - 括号在函数表达式内部
     * @example
     * // ✓ 正确
     * (function() { }())
     *
     * // ✗ 错误
     * (function() { })()
     */
    'wrap-iife': [2, 'inside'],

    /**
     * @rule yoda
     * @description 要求或禁止 Yoda 条件
     * @default 2z
     * @example
     * // ✗ 错误
     * if (42 === age) {}
     *
     * // ✓ 正确
     * if (age === 42) {}
     */
    yoda: 2,

    // #endregion 基础Javascript规则

    // #region Vue规则
    /**
     * @rule vue/no-unused-properties
     * @description 禁止在 Vue 组件中使用未声明的属性
     * @default [2]
     * @example
     * // ✓ 正确
     * export default {
     *   props: ['used'],
     *   template: '<div>{{ used }}</div>'
     * }
     *
     * // ✗ 错误
     * export default {
     *   props: ['unused'],
     *   template: '<div>{{ notDeclared }}</div>'
     * }
     */
    'vue/no-unused-properties': [2],

    /**
     * @rule vue/script-setup-uses-vars
     * @description 确保在 Vue 的 <script setup> 语法中使用到的变量都被正确声明
     * @default 2
     * @example
     * // ✓ 正确
     * <script setup>
     * const msg = 'Hello'
     * </script>
     * <template>
     *   <div>{{ msg }}</div>
     * </template>
     *
     * // ✗ 错误
     * <script setup>
     * </script>
     * <template>
     *   <div>{{ undeclaredVar }}</div>
     * </template>
     */
    'vue/script-setup-uses-vars': 2,

    /**
     * @rule vue/max-attributes-per-line
     * @description 设置 Vue 模板中每行的最大属性数量
     * @default [2, { singleline: { max: 10 } }]
     * @param {number} max - 单行允许的最大属性数量
     * @example
     * // ✓ 正确
     * <template>
     *   <MyComponent foo="bar" baz="qux" />
     * </template>
     *
     * // ✗ 错误（当属性超过10个时）
     * <template>
     *   <MyComponent a="1" b="2" c="3" d="4" e="5" f="6" g="7" h="8" i="9" j="10" k="11" />
     * </template>
     */
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: {
          max: 10
        }
      }
    ],

    /**
     * @rule vue/multi-word-component-names
     * @description 关闭 Vue 组件名必须使用多词组合的限制
     * @default 'off'
     * @example
     * // 允许的组件名
     * export default { name: 'Home' }  // 单个词也可以
     * export default { name: 'UserProfile' }  // 多词组合也可以
     */
    'vue/multi-word-component-names': 'off'
    // #endregion Vue规则
  }
}
