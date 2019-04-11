import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';
import { Provider } from 'react-redux';
import getStore from '../store';

export const render = (req) => {
  const store = getStore();

  //  如果在这里，可以拿到异步数据，并填充到store中

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
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
