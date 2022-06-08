const app = require('./app');
const PORT = process.env.PORT;

// Server Litening
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// app.listen(3000)
