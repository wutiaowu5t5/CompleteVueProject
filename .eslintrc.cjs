module.exports = {
  // 配置文件根设置，确保规则在所有文件中生效
  root: true,
  // 定义执行环境，启用对浏览器、Node.js环境及ES6语法的支持
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // 指定解析器用于解析Vue文件
  'parser': 'vue-eslint-parser',
  extends: [
    "eslint:recommended", //继承 ESLint 内置的推荐规则
    "plugin:vue/vue3-recommended", // 继承 Vue.js 3 的推荐规则
    "plugin:prettier/recommended", //继承 Prettier 的推荐规则
    "eslint-config-prettier", //关闭 ESLint 中与 Prettier 冲突的规则
  ],
  // 解析器选项，指定JavaScript源码类型为ES模块
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: [
    "dist",
    "node_modules",
    ".eslintrc.cjs",
    "commitlint.config.cjs",
  ],
  plugins: ["vue", "prettier"],
  rules: {
    "vue/multi-word-component-names": "off", // 禁用vue文件强制多个单词命名
    // 语句末尾是否使用分号：从不使用
    'semi': [2, 'never'],
    "no-console": [
      //提交时不允许有console.log
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-debugger": "warn", //提交时不允许有debugger
  },
};
