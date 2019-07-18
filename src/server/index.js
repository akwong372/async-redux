const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/', (req, res) => {
  res.send('test');
});

module.exports = app;