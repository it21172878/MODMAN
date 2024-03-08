const express = require('express');
const colors = require('colors');

// rest object
const app = express();

// rest api
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to MODMAN' });
});

const PORT = 8080;
app.listen(PORT, () =>
  console.log(`MODMAN API is running on port ${PORT}`.bgCyan.black)
);
