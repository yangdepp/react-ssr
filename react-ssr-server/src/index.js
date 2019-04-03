const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>hello</title>
      </head>
      <body>
        <h1>First Lesson</h1>
        <p>Hello World</p>
      </body>
    </html>
  `);
});

const server = app.listen(3000);
