// Dependencies
const cors = require('cors');
const express = require('express');
// Configuration
app.use(express.json());
app.use(cors());
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;


// Routes
app.get('/', (req, res) => {
    res.send('Todo List');
});
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
});

// Server Litening
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});