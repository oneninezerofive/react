# redux

vuex

react项目开发中基本都在写组件，组件是高度独立，组件模块化的方案，隔绝代码，隔绝作用域，组件之间要建立通信，借助vuex,redux去协调

vuex，redux相当于这个代理人的角色，cookie和本地存储

- vuex和redux都会把通信数据放内存，页面刷新了就没了，单页面应用最怕刷新
- cookie和本地存储放硬盘，页面刷新关闭还在

它不是官方提供的插件，相比vuex，vue组织去维护的，但是redux是民间爱好者

react追求自由，灵活

redux是可以用于任何框架的，redux其实不是专门为react定制的

```bash
npm install --save redux
```
react-redux是redux对react支持，友好在react，建议安装react-redux
```js
npm install --save react-redux
```

这里需要再强调一下：Redux 和 React 之间没有关系。Redux 支持 React、Angular、Ember、jQuery 甚至纯 JavaScript。

jquery mobile

angular 谷歌
vue 
react facebook

vuex

- state
- getters
- actions
- mutations

redux创建仓库的过程

```js
import { createStore } from 'redux';
// 构造数据处理中心
const counter = (state = {
    num: 100,
    name: 'yao'
}, action) => {
    // 执行对应的动作
    switch (action.type) {
        case 'GETSUM':
            return {
                num: state.num + 10
            }
        case 'GETNAME':
            return {
                name: state.name
            }
    }
}
// 创建仓库
const store = createStore(counter);
export default store;
```
你需要组件里面导入`store`
```js
import store from '../store/store';
// 组件监听仓库的变化相当于vue computed+getters
store.subscribe(() => console.log(store.getState()))
// dispatch触发仓库里面的action，从而更改state里面的值
store.dispatch({
    type: 'GETSUM'
})
store.dispatch({
    type: 'SETNAME',
    name: 'jing'
})
```