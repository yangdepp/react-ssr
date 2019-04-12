import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import routes from '../Routes';
import { Provider } from 'react-redux';
import getStore from '../store';

export const render = req => {
  const store = getStore();
  /*   如果在这里，可以拿到异步数据，并填充到store中，这时store就有数据了
  服务端渲染时，store里填充什么数据，需要根据当前用户请求地址、路由判断
  如： 访问 / 路径，就拿home组件的异步数据 ; 访问 /login 路径，拿login组件的异步数据 */

  /*   根据路由的路径，往store里面加数据
  let matchedRoutes = [];
  请求的路径和某一项的路径能匹配上,就把路由item push进matchRoutes数组中
  此方法不能匹配多级路由
  routes.some(route => {
    const match = matchPath(req.path, route);
    if (match) {
      matchedRoutes.push(route);
    }
  }); */

  let matchedRoutes = matchRoutes(routes, req.path);

  // 让matchedRoutes里面所有的组件，对应的loadData方法执行一次
  console.log(matchedRoutes);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </StaticRouter>
    </Provider>,
  );

  return `
  <html>
    <head>
      <title>react-ssr</title>
    </head>

    <body>
    <div id="root">${content}</div>
    <script src="index.js"></script>
    </body>
  </html>
`;
};
