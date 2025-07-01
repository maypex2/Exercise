const express = require('express');
const exercise = express();
const port = 3000;

exercise.get('/', (req, res) => {
  res.send('Hello World!');
});

exercise.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); // Output to console
});