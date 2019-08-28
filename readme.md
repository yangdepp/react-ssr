# React SSR Project

1. 同构
2. next.js

## 服务端渲染流程

1. 服务器接收到请求，redux 中的 store 是空的
2. 渲染 home 组件时，componentDidMount 这个生命周期函数在服务器端不执行，所以 html 中要渲染的 redux 中获取的数组一直是空的
3. 客户端加载 index.js 运行，这个 store 依然是空的
4. 根据路由加载 home 组件，componentDidMount 这个生命周期函数是可以在客户端执行的，列表数据被获取
5. store 中的列表数据被更新
6. 客户端渲染出 store 中数据对应的列表内容

上述加载过程中有问题，初次渲染时 redux 中异步获取的数据是不能加载，只能加载 index.js 后加载出数据。因此页面会先白屏一下再加载出列表内容

## 解决方案

1. 先给组件添加一个静态方法

```js
//  给Home组件增加一个静态方法
//  这个函数负责在服务器渲染之前，把这个路由需要的异步数据提前加载好
//  接收store，直接返回那个请求的action（axios请求是一个promise对象）
Home.loadData = (store) => {
  return store.dispatch(getHomeList());
};
```

2. 服务端渲染时，store 里填充什么数据，需要根据当前用户请求地址、路由判断  
   如： 访问 / 路径，就拿 home 组件的异步数据  
    访问 /login 路径，拿 login 组件的异步数据

(1) 改造路由`Routes.js`

```js
export default [
  {
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
];
```

(2) 服务端渲染时：根据用户请求地址、路由判断当前组件需要的数据，提前放在 store 里面

````js
// 1.先找出请求的路径和匹配的路由
// 使用react-router-config的matchRoutes方法可以匹配多级路由
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const matchedRoutes = [];
// 2.请求的路径和某一项的路径能匹配上,就把路由item push进matchRoutes数组中
routes.some(route => {
  const match = matchPath(req.path, route);
  if (match) {
    matchRoutes.push(route);
  }
});
上述不能匹配多级路由，使用  ```let matchedRoutes = matchRoutes(routes, req.path);```
// 3.matchedRoutes可以获取到组件以及组件对应的静态方法
    ```
      let promises = [];
      matchedRoutes.forEach(item => {
        if (item.route.loadData) {
          promises.push(item.route.loadData(store));
        }
      });
    ```
    // 此时用Promise.all请求所有的数据，then后返回
    Promise.all(promises).then(() => {
      // todo
    })
````

## 数据的脱水与注水

1. 服务端渲染时，讲获取到的组件数据放在 window.context 下

2. 在客户端渲染时，把 window.context 下的页面数据放进 getClientStore 中

```js
export const getClientStore = () => {
  const defaultState = window.context.state;
  //  defaultState作为reducer的默认值
  return createStore(reducer, defaultState, applyMiddleware(thunk));
};
```
