const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Calculator</title>
      </head>
      <body>
        <h1>Hello Jenkins!!</h1>
        <p>This is a sample web page, served via Express.</p>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = app;