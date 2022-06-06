// Dependencies
require('dotenv').config();
const cors = require('cors');
const express = require('express');
// Configuration
const app = express();
app.use(express.json());
app.use(cors());

const connection = require('./tododb');

connection();
const Todo = require('./models/Todo');
const { modelNames } = require('mongoose');




// Routes
app.get('/', (req, res) => {
    res.send('Todo List');
});
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});
app.post('/todo/new', async (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save();
    res.json(todo);
});
app.delete('/todo/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(result);
})
app.put('/todo/complete/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
});

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
});

module.exports = app;