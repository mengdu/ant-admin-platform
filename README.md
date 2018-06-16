# ant-admin-platform

An admin platform based on Ant design.

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

![截图](20180614222032.png)

![login](20180614222241.png)

## src

```ls
├─src
  │
  ├─assets 静态资源
  ├─components 组件
  ├─config 配置
  ├─router 路由
  ├─utils  工具
  ├─views  页面
  ├─App.jsx 页面入口
  └─index.js 程序入口
```

## 模块

+ **router**
+ **redux**
+ **axios**
+ **antd**


## 接口代理

**package.json**

```json
"proxy": {
  "/api": {
    "target": "https://cnodejs.org/api",
    "changeOrigin": true,
    "pathRewrite": {
      "^/api": ""
    }
  }
}

```

## Use

```ls
git clone git@github.com:mengdu/ant-admin-platform.git
```

**install**

```ls
yarn
```

**dev**

```ls
npm start
```

**build**

```ls
npm run build
```
