const express = require('express');
import { render } from './utils';

const app = express();
//  express返回一个静态文件
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(render(req));
});

const server = app.listen(3000);
