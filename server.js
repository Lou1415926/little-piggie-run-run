'use strict';

const express = require('express');

// Constants
const PORT = 80;

// App
const app = express();
app.get('/', (req, res) => {
  res.send(".......");
});

app.listen(PORT);
console.log(`Running on http://0.0.0.0:${PORT}`)