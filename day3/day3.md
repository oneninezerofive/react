# dva

目录结构

- mock 模拟数据文件
- node_modules 第三方模块
- public index.html 首页模板
- src webpack入口文件夹，我们前端所有的开发都在这边进行
  - assets 你需要打包进项目的图片
  - components 公共组件，复用组件
  - models 状态管理 相当于Vuex
  - router 路由
  - services 服务(定位功能，支付功能)
  - utils ajax的方法，封装好cookie和本地存储(localstorage和sessionstorage)
  - index.css 全局样式
  - index.js 入口文件
  - package.json 描述


# 后台管理系统

数据的处理，学生后台管理系统

数据的增删查改

# Antd

[官方文档](https://ant.design/docs/react/introduce-cn)

注意引入全局样式
```js
import 'antd/dist/antd.css';
```

先布局，

<img src="1.png">

去路由页面修改