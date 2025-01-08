# Git提交流程及规范 / Git Commit Specification

## 目的 / Objective

统一团队 `Git commit`
日志标准，便于后续代码 review，版本发布以及日志自动化生成等等。

Unified Team `Git commit` logging standard for subsequent code review, release,
automated log generation, etc.

统一团队的 Git 工作流，包括分支使用、tag 规范、issue 等。

Unify the team's Git workflow, including branch usage, TAG specification, issue,
and so on.

## 提交方式 / Commit Method

### 1. 使用命令行提交 / Using Command Line

```bash
pnpm commit
```

此命令会自动执行以下步骤：

1. 暂存所有更改 (`git add .`)
2. 启动交互式提交流程
3. 执行提交前的代码检查 (lint-staged)

### 2. 交互式提交流程 / Interactive Commit Process

按照提示依次填写：

1. **选择提交类型** / Select commit type:

   ```
   feat:     ✨  新增功能 | A new feature
   fix:      🐛  修复缺陷 | A bug fix
   docs:     📝  文档更新 | Documentation only changes
   style:    💄  代码格式 | Changes that do not affect the meaning of the code
   refactor: ♻️   代码重构 | A code change that neither fixes a bug nor adds a feature
   perf:     ⚡️  性能提升 | A code change that improves performance
   test:     ✅  测试相关 | Adding missing tests or correcting existing tests
   build:    📦️  构建相关 | Changes that affect the build system or external dependencies
   ci:       🎡  持续集成 | Changes to our CI configuration files and scripts
   chore:    🔨  其他修改 | Other changes that don't modify src or test files
   revert:   ⏪️  回退代码 | Reverts a previous commit
   ```

2. **选择影响范围** / Select scope:

   - 可以选择预设范围或自定义范围
   - 可以留空（允许空范围）

3. **填写提交描述** / Write commit subject:

   - 简短精炼的变更描述
   - 不需要首字母大写
   - 不需要以句号结尾

4. **填写详细描述** / Write commit body (optional):

   - 使用 "|" 换行
   - 描述变更的原因和影响

5. **填写不兼容变更** / Write breaking changes (optional):

   - 如果有不兼容变更，需要详细说明

6. **关联 Issue** / Link issues (optional):
   - 可以关联相关的 Issue
   - 例如：#123, #456

## Commit Message 格式 / Format

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<BREAKING CHANGE>
<BLANK LINE>
<footer>
```

### 示例 / Examples

#### 功能开发 / Feature Development

```bash
feat(user): ✨ 新增用户登录功能

- 添加登录表单组件
- 实现账号密码验证
- 添加登录状态管理

BREAKING CHANGE: 更新了用户认证流程
Closes #123
```

#### Bug修复 / Bug Fix

```bash
fix(auth): 🐛 修复登录验证码失效问题

- 延长验证码有效期至5分钟
- 优化验证码刷新机制

Closes #456
```

## 分支管理规范 / Branch Management

### 基本原则 / Basic principles

master为保护分支，不直接在master上进行代码修改和提交

The master does not modify and commit code directly on the master to protect the
branch

### 命名原则 / The naming principle

开发日常需求或者项目时，从`master`分支上`checkout`一个`feature`分支进行开发或者`bugfix`分支进行`bug`修复，功能测试完毕并且项目发布上线后，将`feature`分支合并到主干`master`，并且打`Tag`发布，最后删除开发分支

分支命名规范如下：

- 分支版本命名规则：分支类型 * 分支发布时间
  *分支功能。比如：`feat_20170401_fairy_flower`
- 分支类型包括：`feat`、`fix`、`refactor`三种类型，即新功能开发、`bug`修复和代码重构
- 时间使用年月日进行命名，不足2位补0
- 分支功能命名使用`snake case`命名法，即下划线命名。

When developing a daily requirement or project, checkout from a 'master' branch
or a 'Bugfix' branch to fix a 'bug' , merge the 'feature' branch into the trunk
'master' and publish by 'Tag' , then delete the Development Branch

The branch nomenclature is as follows:

- branch version naming convention: Branch Type Branch release time branch
  function. For example: 'feat'
- the branch types include: 'feat' , 'Fix' , and 'Refactor' , which are new
  feature development, 'bug' repair, and code refactoring
- the time is named using the date of year, month and day, less than 2 digits
  make up 0
- the branch function is named using the 'Snake Case' nomenclature, that is, the
  underscore nomenclature.

## 代码提交流程 / Code Submission Process

1. 拉取最新代码

   ```bash
   git pull origin master
   ```

2. 创建功能分支

   ```bash
   git checkout -b feat_20240401_user_login
   ```

3. 开发完成后提交

   ```bash
   pnpm commit
   ```

4. 推送到远程

   ```bash
   git push origin feat_20240401_user_login
   ```

5. 创建合并请求（Pull Request）

## 提交前检查 / Pre-commit Checks

项目已配置 `lint-staged`，在提交时会自动执行：

```json
{
  "*.{js,ts,vue}": ["eslint --fix", "prettier --write"],
  "*.{vue,html}": ["eslint --fix", "prettier --write", "stylelint --fix"],
  "*.{less,css}": ["stylelint --fix --allow-empty-input", "prettier --write"],
  "*.md": ["prettier --write"]
}
```

## 常见问题 / FAQ

### 1. 如何修改最后一次提交？

```bash
git commit --amend
# 然后使用 pnpm commit 重新提交
```

### 2. 提交时出现校验错误怎么办？

- 按照错误提示修复代码格式
- 确保所有 lint 规则都通过
- 重新执行 `pnpm commit`

### 3. 如何撤销上一次提交？

```bash
git reset --soft HEAD^
# 然后使用 pnpm commit 重新提交
```
