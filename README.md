## 介绍

next.js + koa2 + TypeScript，需Node6以上环境。

具有以下功能：

1. 基于Next.js的同构视图渲染框架
2. 基于koa2的server服务，可自定义路由，编写Restful Api，默认支持CORS跨域
3. 可选择koa2作为Next.js的server，也可单独运行Next.js服务，或者单独运行基于koa2的api服务
4. 支持TypeScript模板

## 启动

#### 安装

`npm i`

#### 开发模式

`npm run-script dev`

#### 构建

`npm run-script build`

#### 生产环境运行

`npm run-script start`

#### 仅运行Next

`npm run-script dev_next`

`npm run-script start_next`

#### 仅运行API

`npm run-script dev_api`

#### 指定端口启动

```
PORT=9000 npm run dev
```

