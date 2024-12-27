module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended", //继承 ESLint 内置的推荐规则
    "plugin:vue/vue3-recommended", // 继承 Vue.js 3 的推荐规则
    "plugin:prettier/recommended", //继承 Prettier 的推荐规则
    "eslint-config-prettier", //关闭 ESLint 中与 Prettier 冲突的规则
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
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
