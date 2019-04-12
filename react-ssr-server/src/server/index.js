import express from 'express';
import { matchRoutes } from 'react-router-config';
import { render } from './utils';
import routes from '../Routes';
import getStore from '../store';

const app = express();
//  express返回一个静态文件
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = getStore();
  /*   如果在这里，可以拿到异步数据，并填充到store中，这时store就有数据了
  服务端渲染时，store里填充什么数据，需要根据当前用户请求地址、路由判断
  如： 访问 / 路径，就拿home组件的异步数据 ; 访问 /login 路径，拿login组件的异步数据 */

  /*   根据路由的路径，往store里面加数据
  let matchedRoutes = [];
  请求的路径和某一项的路径能匹配上,就把路由item push进matchRoutes数组中
  此方法不能匹配多级路由,用下面的matchedRoutes
  routes.some(route => {
    const match = matchPath(req.path, route);
    if (match) {
      matchedRoutes.push(route);
    }
  }); */

  // matchedRoutes里面是所有匹配到的组件
  const matchedRoutes = matchRoutes(routes, req.path);

  let promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    res.send(render(store, routes, req));
  });
});

const server = app.listen(3000);
