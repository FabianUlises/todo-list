// Dependencies
const cors = require('cors');
const express = require('express');
// Configuration
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();
const connection = require('./tododb');
const PORT = process.env.PORT || 3000;

connection();
const Todo = require('./models/Todo');
// Routes
app.get('/', (req, res) => {
    res.send('Todo List');
});
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});
app.post('/todos/new', async (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save();
    res.json(todo);
});


app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
});

// Server Litening
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});