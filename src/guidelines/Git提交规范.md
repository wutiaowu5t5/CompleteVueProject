# Git提交流程及规范

## 目的 / Objective

统一团队 `Git commit`
日志标准，便于后续代码 review，版本发布以及日志自动化生成等等。

Unified Team `Git commit` logging standard for subsequent code review, release,
automated log generation, etc.

统一团队的 Git 工作流，包括分支使用、tag 规范、issue 等。

Unify the team's Git workflow, including branch usage, TAG specification, issue,
and so on.

## Git commit 日志基本规范 / Git commit log basic specification

```tex
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

> [!NOTE]
>
> type代表本次提交的类型，以下是常见type类型。
>
> Type represents the type of a commit, and the following are common type types.

- **feat**：新增功能 | A new feature
- **fix**：修复缺陷 | A bug fix
- **docs**：文档更新 | Documentation only changes
- **style**：代码格式 | Changes that do not affect the meaning of the code
- **refactor**：代码重构 | A code change that neither fixes a bug nor adds a
  feature
- **perf**：性能提升 | A code change that improves performance
- **test**：测试相关 | Adding missing tests or correcting existing tests
- **chore**：其他修改 | Other changes that don't modify src or test files
- **revert**：回退代码 | Reverts a previous commit
- **ci**：持续集成 | Changes to our CI configuration files and scripts
- **build**：构建相关 | Changes that affect the build system or external
  dependencies

> [!NOTE]
>
> scope代表本次提交的内容影响了哪些文件，可以不写，是选填
>
> Scope on behalf of the content of the submission of which files, you can not
> write, is optional fill

> [!NOTE]
>
> subject是标题行，是必填项，描述本次提交的主体内容是什么，可以携带任务编号、修改内容之类的
>
> Subject is the subject line, is a required field, describes what the subject
> of this submission is, can carry the task number, modify the content and so on

> [!NOTE]
>
> body是更详细的说明文本，建议72个字符以内，需要描述的信息包括：
>
> - 为什么这个变更是必须的? 它可能是用来修复一个bug，增加一个feature，提升性能、可靠性、稳定性等等
> - 他如何解决这个问题? 具体描述解决问题的步骤
> - 是否存在副作用、风险?
>
> The body is the more detailed specification text and is recommended to be no
> more than 72 characters. The information you need to describe includes:
>
> - why is this change necessary? It may be used to fix a bug, add a feature,
>   improve performance, reliability, stability, etc.
> - how did he solve the problem? Describe the steps to solve the problem
> - are there any side effects, risks?

> [!NOTE]
>
> footer是如果需要的话可以添加一个链接到issue地址或者其它文档，或者关闭某个issue
>
> The footer is to add a link to the issue address or other document if needed,
> or to close an issue

## 分支命名规范 / The branch naming convention

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
