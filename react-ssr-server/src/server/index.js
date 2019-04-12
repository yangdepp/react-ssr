const express = require('express');
import { render } from './utils';

const app = express();
//  express返回一个静态文件
app.use(express.static('public'));

app.get('*', (req, res) => {
  render(req, res);
});

const server = app.listen(3000);
