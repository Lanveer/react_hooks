# RC webpack配置优化
* 项目地址：https://github.com/Lanveer/react-hooks
# Getting Started

1. 安装Node(8.9.4以上)运行环境，`git clone ...` 并切换到相应目录

2. `npm install`

3. 首次运行时开发环境先执行：`npm run build:dll`，这样可以将不常更改的三方库单独打包到dll文件夹
    * `npm start` 启动开发环境
    * 需要添加三方库的可以自行添加
    * 项目使用dva作为数据管理工具

4. 构建静态包并部署到响应环境：
    * npm run build 打包生成dist文件夹

5. 访问http://localhost:8080 端口，或者配置nginx 代理处理请求

6. 项目采用react和koa搭建前端，采用webpack进行模块化加载

7 优化的地方
    * 使用code spliting 代码分割，按组件的加载动态加载对应的bundle文件
    * 后续可以添加dva 的dynamic实现动态加载
    * 使用dll单独打包三方依赖
    *  devtool:"cheap-module-source-map" 的使用