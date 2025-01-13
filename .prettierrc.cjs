/*
 * @Description:
 * @Author: Satoru 5t5
 * @Date: 2024-12-27 18:01:13
 * @LastEditTime: 2025-01-13 09:51:39
 * @LastEditors: wutiaowu5t5 1987053649@qq.com
 * @FilePath: \CompleteVueProject\.prettierrc.cjs
 */

module.exports = {
  /**
   * 指定行尾换行符的类型
   * @type {'lf' | 'crlf' | 'auto'}
   * - lf: Linux/Mac 风格换行符 (\n)
   * - crlf: Windows 风格换行符 (\r\n)
   * - auto: 保持现有的行尾风格
   */
  endOfLine: 'lf',

  /**
   * 指定每行代码的最大字符数
   * 超过这个长度的代码将会被自动换行
   * @type {number}
   */
  printWidth: 80,

  /**
   * 缩进是否使用 tab 而不是空格
   * @type {boolean}
   * @default false - 使用空格进行缩进
   */
  useTabs: false,

  /**
   * 对象属性名是否需要引号
   * @type {'as-needed' | 'consistent' | 'preserve'}
   * - as-needed: 仅在必要时添加引号
   * - consistent: 有一个属性需要引号，就都添加引号
   * - preserve: 保持原来的状态
   */
  quoteProps: 'as-needed',

  /**
   * 是否在语句末尾添加分号
   * @type {boolean}
   * @default false - 仅在可能导致 ASI 失败的情况下添加分号
   */
  semi: false,

  /**
   * 字符串使用单引号还是双引号
   * @type {boolean}
   * @default true - 使用单引号
   */
  singleQuote: true,

  /**
   * 指定缩进的空格数
   * @type {number}
   * @default 2 - 使用两个空格进行缩进
   */
  tabWidth: 2,

  /**
   * 多行结构中尾后逗号的处理
   * @type {'none' | 'es5' | 'all'}
   * - none: 不添加尾后逗号
   * - es5: 在 ES5 中合法的地方添加尾后逗号
   * - all: 在可能的地方都添加尾后逗号
   */
  trailingComma: 'none',

  /**
   * 箭头函数参数的括号使用规则
   * @type {'always' | 'avoid'}
   * - always: 总是给参数添加括号
   * - avoid: 可以省略括号时就省略
   */
  arrowParens: 'always',

  /**
   * 对象字面量的大括号内是否添加空格
   * @type {boolean}
   * @default true - { foo: bar }
   */
  bracketSpacing: true,

  /**
   * Markdown 文本的换行方式
   * @type {'always' | 'never' | 'preserve'}
   * - always: 超过 printWidth 时总是换行
   * - never: 不自动换行
   * - preserve: 保持原样
   */
  proseWrap: 'always',

  /**
   * JSX 中是否使用单引号
   * @type {boolean}
   * @default false - 使用双引号
   */
  jsxSingleQuote: false,

  /**
   * JSX 标签的 > 是否跟随最后一个属性的位置
   * @type {boolean}
   * @default false
   * true:
   *   <button
   *     prop1="value1"
   *     prop2="value2">
   * false:
   *   <button
   *     prop1="value1"
   *     prop2="value2"
   *   >
   */
  bracketSameLine: false,

  /**
   * Vue 文件中的 script 和 style 标签内是否缩进
   * @type {boolean}
   * @default false - 不缩进
   */
  vueIndentScriptAndStyle: false,

  /**
   * HTML 空格敏感度
   * @type {'css' | 'strict' | 'ignore'}
   * - css: 遵循 CSS display 属性的默认值
   * - strict: 所有标签周围的空格都被认为是重要的
   * - ignore: 所有标签周围的空格都被认为是不重要的
   */
  htmlWhitespaceSensitivity: 'css',

  /**
   * 是否在文件顶部插入 @format 的特殊注释
   * @type {boolean}
   * @default false - 不插入
   */
  insertPragma: false,

  /**
   * 是否只格式化文件顶部包含特定注释（如 @prettier）的文件
   * @type {boolean}
   * @default false - 格式化所有文件
   */
  requirePragma: false,

  /**
   * 是否保持文件首行空行
   * @type {boolean}
   * @default false - 不保持
   */
  insertFinalNewline: true,

  /**
   * 嵌入式语言的格式化方式
   * @type {'auto' | 'off'}
   * - auto: 自动格式化
   * - off: 不格式化
   */
  embeddedLanguageFormatting: 'auto',

  /**
   * 是否格式化 HTML 文件中的引号
   * @type {boolean}
   * @default false - 不格式化
   */
  singleAttributePerLine: false
}
