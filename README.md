# Complete Vue Project

## 中文

欢迎来到 Complete Vue Project！这是一个基于 Vue 3 的完整项目示例，使用 Vite
6 作为构建工具，并采用 pnpm (9.15.1) 进行包管理。项目运行在 Node.js
(20.16.0) 环境下。

## English

Welcome to Complete Vue Project! This is a complete project example based on Vue
3, using Vite 6 as the build tool and pnpm (9.15.1) for package management. The
project runs under the Node.js (20.16.0) environment.

## 技术栈 / Technology Stack

- **前端框架 / Frontend Framework**: Vue 3
- **构建工具 / Build Tool**: Vite 6
- **包管理器 / Package Manager**: pnpm 9.15.1
- **Node.js 版本 / Node.js Version**: 20.16.0

## 项目结构 / Project Structure

项目的文件和目录结构如下（可根据实际情况调整）：

The file and directory structure of the project is as follows (can be adjusted
according to the actual situation) :

```
├── .husky/ # Git hooks配置 / Git hooks configuration
├── .vscode/ # VS Code配置 / VS Code configuration
├── public/ # 静态资源 / Static resources
├── src/ # 源代码 / Source code
│ ├── assets/ # 静态资源 / Static resources
│ │ ├── audios/ # 音频资源 / Audio resources
│ │ ├── fonts/ # 字体资源 / Font resources
│ │ ├── images/ # 图片资源 / Image resources
│ │ │ └── common/ # 公共图片 / Common images
│ │ ├── misc/ # 杂项文件 / Miscellaneous files
│ │ ├── mock-data/ # 模拟数据 / Mock data
│ │ ├── pdfs/ # PDF文件 / PDF files
│ │ ├── styles/ # 样式文件 / Style files
│ │ │ └── common/ # 公共样式 / Common styles
│ │ └── videos/ # 视频资源 / Video resources
│ ├── components/ # 组件 / Components
│ │ └── common/ # 公共组件 / Common components
│ ├── directives/ # 自定义指令 / Custom directives
│ ├── guidelines/ # 开发指南 / Development guidelines
│ ├── hooks/ # 自定义Hooks / Custom hooks
│ ├── interceptors/ # 请求拦截器 / Request interceptors
│ ├── permissions/ # 权限管理 / Permission management
│ ├── router/ # 路由配置 / Routing configuration
│ │ └── routeSource/ # 路由源文件 / Route source files
│ │ │ ├── dynamicRouteConfiguration.js # 动态路由配置 / Dynamic routes
│ │ │ └── fixedRouteConfiguration.js # 静态路由配置 / Fixed routes
│ ├── services/ # API服务 / API services
│ └── modules/ # API模块 / API modules
│ │ └── user.js # 用户相关API / User related APIs
│ ├── store/ # 状态管理 / State management
│ │ └── modules/ # 状态模块 / State modules
│ │ │ └── userInfo.js # 用户信息状态 / User info state
│ ├── utils/ # 工具函数 / Utility functions
│ │ └── modules/ # 工具模块 / Utility modules
│ │ │ ├── emitter/ # 事件发射器 / Event emitter
│ │ │ ├── eventBus/ # 事件总线 / Event bus
│ │ │ ├── sourceUrl/ # 资源URL处理 / Source URL handling
│ │ │ ├── uuid/ # UUID生成器 / UUID generator
│ │ │ └── webStorage/ # Web存储 / Web storage
│ └── views/ # 页面视图 / View pages
│ │ └── homePage/ # 首页 / Home page
├── .env # 环境变量 / Environment variables
├── .env.development # 开发环境变量 / Development environment variables
├── .env.production # 生产环境变量 / Production environment variables
├── .eslintignore # ESLint忽略配置 / ESLint ignore configuration
├── .eslintrc.cjs # ESLint配置 / ESLint configuration
├── .gitignore # Git忽略配置 / Git ignore configuration
├── .npmrc # NPM配置 / NPM configuration
├── .prettierignore # Prettier忽略配置 / Prettier ignore configuration
├── .prettierrc.cjs # Prettier配置 / Prettier configuration
├── .stylelintignore # StyleLint忽略配置 / StyleLint ignore configuration
├── .stylelintrc.json # StyleLint配置 / StyleLint configuration
├── commitlint.config.cjs # Commit规范配置 / Commit specification configuration
├── index.html # HTML模板 / HTML template
├── package.json # 项目配置 / Project configuration
├── pnpm-lock.yaml # 依赖锁定文件 / Dependencies lock file
├── README.md # 项目说明 / Project documentation
└── vite.config.js # Vite配置 / Vite configuration
```

### 目录说明 / Directory Description:

1. **assets/**: 存放项目所需的各类静态资源，按资源类型分类存放

   - Stores various static resources needed for the project, organized by
     resource type

2. **components/**: 存放可复用的Vue组件，包含公共组件

   - Contains reusable Vue components, including common components

3. **directives/**: 存放Vue自定义指令

   - Contains Vue custom directives

4. **guidelines/**: 存放项目开发规范和指南文档

   - Contains project development specifications and guidelines

5. **hooks/**: 存放可复用的Vue组合式函数

   - Contains reusable Vue composition functions

6. **interceptors/**: 存放API请求拦截器

   - Contains API request interceptors

7. **permissions/**: 存放权限相关的配置和处理逻辑

   - Contains permission-related configurations and logic

8. **router/**: 存放路由配置，包括动态路由和静态路由

   - Contains routing configurations, including dynamic and static routes

9. **services/**: 存放API接口服务，按模块划分

   - Contains API interface services, organized by modules

10. **store/**: 存放状态管理相关文件，使用模块化管理

    - Contains state management files, using modular management

11. **utils/**: 存放工具函数，按功能模块划分

    - Contains utility functions, organized by functional modules

12. **views/**: 存放页面级组件
    - Contains page-level components

### 使用说明 / Usage Notes:

1. 每个目录都应包含 README.md 文件，说明该目录的用途和使用方式

   - Each directory should contain a README.md file explaining its purpose and
     usage

2. 模块化的目录（如 services/modules/）应通过统一的出口文件导出

   - Modular directories should export through a unified export file

3. 组件和页面文件应遵循 Vue 单文件组件规范

   - Components and page files should follow Vue Single File Component
     specifications

4. 工具函数应通过 utils/utilsOutput.js 统一导出
   - Utility functions should be exported uniformly through utils/utilsOutput.js
   -

## 安装与启动 / Installation and Startup

### 前提条件 / Prerequisites

确保已安装以下环境：

Ensure that the following environments are installed:

- Node.js v20.16.0
- pnpm v9.15.1

### 安装依赖 / Install Dependencies

在项目根目录下执行以下命令以安装项目依赖：

Install project dependencies by executing the following command in the project
root:

```bash
pnpm install
```

### 启动开发服务器 / Start Development Server

安装完成后，在项目根目录下执行以下命令启动开发服务器：

When the installation is complete, start the development server by executing the
following command in the project root:

```bash
pnpm run dev
```

这将启动一个本地开发服务器，默认情况下可在
[http://localhost:3000](http://localhost:3000) 访问。

This will start a local development server, which can be accessed at
[http://localhost:3000](http://localhost:3000).

## 构建生产版本 / Build Production Version

要构建生产版本，请在项目根目录下执行以下命令：

To build a production version, execute the following command under the project
root:

```bash
pnpm run build
```

构建后的文件将输出到 `dist` 目录中。

The built files will be output to the `dist` directory.

## 贡献指南 / Contribution Guidelines

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库。
2. 创建新分支 (`git checkout -b feature/your-feature`)。
3. 提交更改 (`git commit -m 'Add some feature'`)。
4. 推送到远程分支 (`git push origin feature/your-feature`)。
5. 提交 Pull Request。

Welcome contributions! Please follow these steps:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m 'Add some feature'`).
4. Push to the remote branch (`git push origin feature/your-feature`).
5. Submit a Pull Request.

## 许可证 / License

本项目采用 MIT 许可证，详情参见 [LICENSE](LICENSE) 文件。

This project is licensed under the MIT License. For more details, see the
[LICENSE](LICENSE) file.

感谢您对 Complete Vue
Project 的关注和支持！如果您有任何问题或建议，请随时提交 Issue 或 Pull Request。

Thank you for your attention and support of Complete Vue Project! If you have
any questions or suggestions, please feel free to submit an Issue or Pull
Request.

## 补充说明 / Additional notes

1. 所有配置文件（.eslintrc.cjs, .prettierrc.cjs等）都放在项目根目录下
2. src目录下的每个功能模块都应包含自己的index.js作为统一出口
3. 组件和视图文件使用Vue单文件组件（.vue）格式
4. 工具函数应按模块分类并统一从utils/utilsOutput.js导出
5. 环境变量文件（.env.\*）根据不同环境分别配置

6. All configuration files (.eslintrc.cjs, .prettierrc.cjs, etc.) are placed in
   the project root directory
7. Each functional module under the src directory should contain its own
   index.js as a unified export
8. Components and view files use Vue Single File Component (.vue) format
9. Utility functions should be categorized by module and exported uniformly from
   utils/utilsOutput.js
10. Environment variable files (.env.\*) are configured separately according to
    different environments
