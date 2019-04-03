const express = require('express');
import Home from './containers/Home';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();
const content = renderToString(<Home />);

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>hello</title>
      </head>
      
      <body>
      ${content}
      </body>
    </html>
  `);
});

const server = app.listen(3000);
