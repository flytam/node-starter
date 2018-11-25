# node-starter

[English document](./README_EN.md)

> 为了不想每次写 node 都去 cv 以前项目配置。保存一份配置在这里以后 copy 用 23333

node web app 快速启动脚手架

node web app quick start

#### 特性

1、babel7 + stage-0 各种最新魔性语法 + 转码当前 node 版本不支持的特性

2、开发模式 nodemon，自动刷新

3、生产模式 pm2

### 安装依赖

```bash
npm i
```

### 开发（nodemon）

```bash
npm run dev
```

### 打包

```bash
npm run build // 生成的文件在dist目录下
```

### 生产环境启动

先全局安装 pm2

```bash
npm i -g pm2
```

然后

```bash
npm run pm2
```

### 自定义

1、pm2 配置 pm2.json

2、命令在 package.json scripts

3、babel 配置在.babelrc

### 代码格式化

vscode 安装 Prettier - Code formatter

vscode nodejs 语法提示
需要 npm > 5

```bash
npx typings install dt~node --global --save
```

会在根目录下生成 typings 文件夹包含 node 的声明文件

### 单元测试 Jest

npm run test
