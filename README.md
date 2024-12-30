# Complete Vue Project

## 中文
欢迎来到 Complete Vue Project！这是一个基于 Vue 3 的完整项目示例，使用 Vite 6 作为构建工具，并采用 pnpm (9.15.1) 进行包管理。项目运行在 Node.js (20.16.0) 环境下。

## English
Welcome to Complete Vue Project! This is a complete project example based on Vue 3, using Vite 6 as the build tool and pnpm (9.15.1) for package management. The project runs under the Node.js (20.16.0) environment.



## 技术栈  /  Technology Stack

- **前端框架 / Frontend Framework**: Vue 3
- **构建工具 / Build Tool**: Vite 6
- **包管理器 / Package Manager**: pnpm 9.15.1
- **Node.js 版本 / Node.js Version**: 20.16.0



## 项目结构  /  Project Structure

项目的文件和目录结构如下（可根据实际情况调整）：

The file and directory structure of the project is as follows (can be adjusted according to the actual situation) :

```
├── public/ 
│   └── index.html # 主页面入口 / Main entry page
├── src/ 
│   ├── assets/ # 静态资源 / Static resources
│   │   ├── audios/ # 音频资源 / Audio resources
│   │   │   ├── notification-sound.wav
│   │   │   └── background-music.mp3
│   │   ├── fonts/ # 字体资源 / Font resources
│   │   │   ├── custom-font.ttf
│   │   │   └── custom-font.woff
│   │   ├── images/ # 图片资源 / Image resources
│   │   │   ├── common/ # 公共图片 / Common images
│   │   │   │   ├── logo.png
│   │   │   │   └── background.jpg
│   │   ├── misc/ # 杂项文件 / Miscellaneous files
│   │   │   ├── temp-file.txt
│   │   │   └── special-format.bin
│   │   ├── mock-data/ # 模拟数据文件 / Mock data files
│   │   │   ├── users.json
│   │   │   └── products.json
│   │   ├── pdfs/ # PDF 文件 / PDF files
│   │   │   ├── user-manual.pdf
│   │   │   └── terms-of-service.pdf
│   │   ├── styles/ # 样式文件 / Style files
│   │   │   ├── common/ # 公共样式 / Common styles
│   │   │   │   ├── global.css
│   │   │   │   └── variables.scss
│   │   └── videos/ # 视频资源 / Video resources
│   │       ├── intro.mp4
│   │       └── tutorial.webm
│   ├── components/ # 组件 / Components
│   │   ├── Header.vue
│   │   └── Footer.vue
│   ├── directives/ # 自定义指令 / Custom directives
│   ├── guidelines/ # 开发指南 / Development guidelines
│   ├── hooks/ # 自定义 Hooks / Custom hooks
│   ├── interceptors/ # 请求拦截器 / Request interceptors
│   ├── permissions/ # 权限管理 / Permission management
│   ├── router/ # 路由配置 / Routing configuration
│   │   ├── routeSource/ # 路由源文件 / Route source files
│   │   │   │   ├── dynamicRouteConfiguration.js # 动态路由配置 / Dynamic route configuration
│   │   │   │   └── fixedRouteConfiguration.js # 静态路由配置 / Fixed route configuration
│   │   └── router.js # 主路由配置文件 / Main routing configuration file
│   ├── services/ # api层 / Service layer
│   │   ├── modules/ # api模块划分 / Service modules
│   │   │   │   └── user.js # 用户相关api / User api service module
│   │   └── services.js # 统一暴露出口 / General services
│   ├── store/ # 状态管理 / State management
│   │   ├── modules/ # 状态模块 / State modules
│   │   │   │   └── userInfo.js # 用户信息状态模块 / User info state module
│   │   └── store.js # 主状态管理文件 / Main state management file
│   ├── utils/ # 工具函数 / Utility functions
│   │   ├── common/ # 通用工具函数 / Common utility functions
│   │   │   │   └── commonUtils.js #  / Common utility functions
│   │   └── modules/ # 模块化工具函数 / Modular utility functions
│   ├── views/ # 视图页面 / View pages
│   │   ├── Home.vue
│   │   └── About.vue
│   ├── App.vue # 根组件 / Root component
│   └── main.js # 应用入口文件 / Application entry file
├── package.json # 项目依赖配置 / Project dependencies configuration
├── vite.config.js # Vite 配置文件 / Vite configuration file
└── README.md # 项目说明文档 / Project documentation
```



## 安装与启动  /  Installation and Startup

### 前提条件  /  Prerequisites

确保已安装以下环境：

Ensure that the following environments are installed:

- Node.js v20.16.0
- pnpm v9.15.1

### 安装依赖  /  Install Dependencies

在项目根目录下执行以下命令以安装项目依赖：

Install project dependencies by executing the following command in the project root:

```bash
pnpm install
```

### 启动开发服务器  /  Start Development Server

安装完成后，在项目根目录下执行以下命令启动开发服务器：

When the installation is complete, start the development server by executing the following command in the project root:

```bash
pnpm run dev
```

这将启动一个本地开发服务器，默认情况下可在 [http://localhost:3000](http://localhost:3000) 访问。

This will start a local development server, which can be accessed at [http://localhost:3000](http://localhost:3000).



## 构建生产版本  /  Build Production Version

要构建生产版本，请在项目根目录下执行以下命令：

To build a production version, execute the following command under the project root:

```bash
pnpm run build
```

构建后的文件将输出到 `dist` 目录中。

The built files will be output to the `dist` directory.



## 贡献指南  /  Contribution Guidelines

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

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.



感谢您对 Complete Vue Project 的关注和支持！如果您有任何问题或建议，请随时提交 Issue 或 Pull Request。

Thank you for your attention and support of Complete Vue Project! If you have any questions or suggestions, please feel free to submit an Issue or Pull Request.
